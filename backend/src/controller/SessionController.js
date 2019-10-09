const User = require('../model/User')
// index, show, store, update, destroy
module.exports = {
    async store(req,res){ // define as async to be able to wait inside function
        const { email } = req.body // classic way => email = req.body.email

        let user = await User.findOne({email: email}) // alternative since key and variable have same name => ({email})

        if (!user){
            user = await User.create({ email }) 
        }

        return res.json(user)
    }
}