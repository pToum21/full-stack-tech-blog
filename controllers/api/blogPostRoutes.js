const router = require('express').Router();
const { BlogPost } = require('../../models');
const withAuth = require('../../utils/auth');

// this creates a new blog post
router.post('/', async (req, res) => {
    // uses userid to create a post
    try {
        const BlogPostData = await BlogPost.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(BlogPostData)
    } catch (err) {
        res.status(400).json(err)
    }
});

router.put('/:id', async (req, res) => {
    try {
        const BlogPostData = await BlogPost.update({
            ...req.body,
            date_updated: new Date(),
        },
            {
                where: {
                    id: req.params.id,
                    user_id: req.session.user_id,
                }
            })

        if (!BlogPostData) {
            res.status(404).json({ message: 'Cannot find post you are looking for with this id' })
            return;
        }

        res.status(200).json(BlogPostData)
    } catch (err) {
        res.status(400).json(err)
    }
})

// delete blog post
router.delete('/:id', async (req, res) => {
    try {
        const BlogPostData = await BlogPost.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            }
        });

        if (!BlogPostData) {
            res.status(404).json({ message: 'Cannot find post you are looking for with this id' })
            return;
        }

        res.status(200).json(BlogPostData)
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router