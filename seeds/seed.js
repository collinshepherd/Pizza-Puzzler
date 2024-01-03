const sequelize=require('../config/connection');
const { User, Riddles }=require('../models/User');
const userData=require('./userData.json');
const riddleData=require('./levelOneRiddles.json');

const seedDatabase=async () => {
    await sequelize.sync({ force: true});

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await Riddles.bulkCreat(riddleData,{
        individualHooks:true,
        returning:true,
    })
    process.exit(0);
};

seedDatabase();