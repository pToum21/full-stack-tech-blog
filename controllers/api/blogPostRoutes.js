const router = require('express').Router();
const { BlogPost } = require('../../models');
const withAuth = require('../../utils/auth');

// this creates a new blog post
router.post('/', withAuth, async (req, res) => {
    // uses userid to create a post
    try {
        const BlogPostData = await BlogPost.create({
            ...req.body,
            user_id: req.session.user_id
        });
        res.status(200).json(BlogPostData)
    } catch (err) {
        res.status(400).json(err)
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {

    } catch (err) {
        res.status(400).json(err)
    }
})