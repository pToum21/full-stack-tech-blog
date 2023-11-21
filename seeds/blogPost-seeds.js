const { BlogPost } = require('../models')

const blogPostData = [
    {
        title: 'new gtx 4090 is amazing',
        description: 'it may just be the best graphics card ever',
        upload_date: 'March 17, 2023',
        user_id: 1
    },
    {
        title: 'I cant choose what cpu to buy',
        description: 'can someone please help me pick what new cpu to upgrade to',
        upload_date: 'December 1, 2023',
        user_id: 2
    },
    {
        title: 'IDK im bored and wanted to see whats up',
        description: 'someone tell me whats the move im gaming right now',
        upload_date: 'june 26, 2024',
        user_id: 3
    },
];

const seedBlogPost = () => BlogPost.bulkCreate(blogPostData);

module.exports = seedBlogPost;