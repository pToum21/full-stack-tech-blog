const { BlogPost, User, Comment } = require('../../models')
const withAuth = require('../../utils/auth')
const router = require('express').Router();

// user dashboard
router.get('/', withAuth, async (req, res) => {
    // get all posts made by user including user data
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: BlogPost, include: [User] }]
        })

        const user = userData.get({ plain: true });
        // display all user posts and remder the dashboard
        res.render('dashboard', {
            ...user,
            logged_in: true
        })

    } catch (err) {
        res.status(400).json(err)
    }
})

router.get('/:id', withAuth, async (req, res) => {
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

        const userPost = userData.get({ plain: true })

        res.render('edit', {
            ...userPost,
            logged_in: true
        })

    } catch (err) {
        res.status(400).json(err)
    }
})





module.exports = router;