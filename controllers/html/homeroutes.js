const { BlogPost, User, Comment } = require('../../models')

const router = require('express').Router();

// homepage
router.get('/', async (req, res) => {
try {
    // get all posts and join them with user data
    const blogPostData = await BlogPost.findAll({
        include: User,
        order: [['upload_date', 'DESC']]

    })

    const blogPosts = blogPostData.map((post)=> post.get({plain: true}));

    // render the data with the hompage view
    res.render('homepage', {
        blogPosts,
        logged_in: req.session.logged_in
    })
} catch (err) {
    res.status(400).json(err)
}
})

