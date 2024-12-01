const User = require('../models/userModel');

module.exports.getUser = (req, res) => {
    const userId = req.params.userid;
    User.findById(userId).then(user => {
        if(!user){
            return res.status(404).json({message: 'user does not exist'});
        }
        console.log(user);
        return res.status(200).json({message: 'user found successfully', user });
    }).catch(error => {
        console.error(error);
        return res.status(500).json({message: 'mongoDB server error findById', error});
    })
}

module.exports.getAllUser = (req, res) => {
    User.find().then(users => {
        console.log(users);
        res.status(200).json({message: 'fetching of all users is successfull', users });
    }).catch(error => {
        console.error(error);
        res.status(500).json({message: 'mongoDB server error find', error});
    })
}