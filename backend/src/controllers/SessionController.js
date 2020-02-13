const User = require('../models/User');

module.exports = {
    async store(req, res) {
        //const email = req.body.email;
        //const user = await User.create({ email });
        const { email } = req.body;

        let user = await User.findOne({ email });

        //Se não encontrar um usuario
        if (!user) {
            user = await User.create({ email });
        }
        
        return res.json(user);
    }
}