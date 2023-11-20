const { Model, DataTypes } = require('sequelize')

const sequelize = require('../config/connection')

class Comment extends Model { }

Comment.init(
    {
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        upload_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        blog_post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'blog_post',
                key: 'id'
            }
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
        modelName: 'comment',
    }
);

module.exports = Comment;