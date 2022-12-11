import { Sequelize } from "sequelize";

import db from "../config/Database.js";
import Users from "./userModel.js";
const { DataTypes } = Sequelize;
 
const Post = db.define('post',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    titre:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true,
            len:[3,100]
        }
    },
    
    Containepost:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    userId:{
        type: DataTypes.INTEGER,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    }
    
},{
    freezeTableName:true
});

Users.hasMany(Post)
Post.belongsTo(Users, {foreignKey: 'userId'});

 
export default Post;