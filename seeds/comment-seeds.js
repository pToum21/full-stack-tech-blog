const { Comment } = require('../models')

const commentData = [
    {
        id: 1,
        description: 'i guess thats cool',
        upload_date: 'Janurary 3, 2023',
        blog_post_id: 1,
        user_id: 1

    },
    {
        id: 2,
        description: 'whatever bro',
        upload_date: 'March 16, 2023',
        blog_post_id: 2,
        user_id: 2

    },
    {
        id: 3,
        description: 'Im playing fortnite im better then you ',
        upload_date: 'Feburary 11, 2024',
        blog_post_id: 3,
        user_id: 3

    },
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;