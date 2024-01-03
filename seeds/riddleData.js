const {Riddles}=require('../models');


const riddleData= [
    {
        "riddle": " What has a face and two hands but no arms or legs?",
        "answer": "Clock"
    }, 
    {
        "riddle": "Where would you take a sick boat?",
        "answer": "To the dock"
    },
    {
        "riddle":"What has to be broken before you can use it?",
        "answer":"Egg"
    },
    {
        "riddle":"What month of the year has 28 days?",
        "answer":"All"
    },
    {
        "riddle":"What goes up but never comes down?",
        "answer":"Age"
    },
    {
        "riddle":"What gets wet while drying?",
        "answer":"towel"
    },
    {
        "riddle":"I have branches, but no fruit, trunk or leaves. What am I?",
        "answer":"Bank"
    },
    {
        "riddle":"I follow you all the time and copy your every move, but you can’t touch me or catch me. What am I?",
        "answer":"Shadow"
    },
    {
        "riddle":"What can you catch, but not throw?",
        "answer":"A Cold"
    }
];

const seedRiddles= () => Riddles.bulkCreate(riddleData);

module.exports=seedRiddles;