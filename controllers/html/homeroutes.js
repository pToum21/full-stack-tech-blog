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

        const blogPosts = blogPostData.map((post) => post.get({ plain: true }));
        

        // render the data with the hompage view
        res.render('homepage', {
            blogPosts,
            logged_in: req.session.logged_in
        })
    } catch (err) {
       
        res.status(400).json(err)
    }
})

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});


router.get('/post/:id', async (req, res) => {
    try {
        const userPostData = await BlogPost.findByPk(req.params.id, {
            include: [
                {
                    model: Comment,
                    include: User,
                },
                {
                    model: User
                }
            ]
        })

        const userPost = userPostData.get({ plain: true })


        // render users post and edit view
        res.render('blogpost', {
            ...userPost,

            logged_in: req.session.logged_in
        })

    } catch (err) {
        res.status(400).json(err)
    }
})


module.exports = router;