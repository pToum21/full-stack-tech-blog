const { Model, DataTypes } = require('sequelize')

const sequelize = require('../config/connection')

class BlogPost extends Model { }

BlogPost.init(
    {
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        upload_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
       
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blog_post',
    }
);


module.exports = BlogPost