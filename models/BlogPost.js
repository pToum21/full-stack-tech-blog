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
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'BlogPost',
    }
);


module.exports = BlogPost