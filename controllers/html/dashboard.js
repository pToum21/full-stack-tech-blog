const { BlogPost, User, Comment } = require('../../models')
const withAuth = require('../../utils/auth')
const router = require('express').Router();

// user dashboard
router.get('/', async (req, res) => {
    // get all posts made by user including user data
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: BlogPost, include: [User] }]
        })
        console.log(userData)
        const user = userData.get({ plain: true });
        
        // display all user posts and remder the dashboard
        res.render('dashboard', {
            ...user,
            logged_in: true
        })

    } catch (err) {
        console.log(err)
        res.status(400).json(err)
        
    }
})

// user post
router.get('/:id', withAuth, async (req, res) => {
    try {
        // get specific blog post with user comment and description
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

        const userPost = userData.get({ plain: true })

        // render users post and edit view
        res.render('edit', {
            ...userPost,
            logged_in: true
        })

    } catch (err) {
        res.status(400).json(err)
    }
})





module.exports = router;