const {Model, DataTypes} =require('sequelize');
const sequelize=require('../config/connection');

class Riddles extends Model {}

Riddles.init(
    {
        riddle:{
            type: DataTypes.TEXT,
            allowNull:false
        },
        answer:{
            type:DataTypes.TEXT,
            allowNull:false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'riddles',
    }
)