const {Model, DataTypes} =require('sequelize');
const sequelize=require('../config/connection');
const bcrypt=require('bcrypt')

class Pizza extends Model{
    checkPassword(loginPw){
        return bcrypt.compareSync(loginPw, this.password);
    }
    // makes password cryptic for security
}

Pizza.init(
    {
    id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey: true,
        autoIncrement: true,
    },
    pizzaID:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    hp:{
        type:DataTypes.INTEGER,
        allowNull:false,
        
    },
    maxHp:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    xp:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    maxXp:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    level:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    status:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
},
{
   
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored:true,
    modelName:'Pizza',
}
);

module.exports= Pizza;