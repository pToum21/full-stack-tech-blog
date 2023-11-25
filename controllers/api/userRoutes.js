const router = require('express').Router();
const { User } = require('../../models');

// sign up new user
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        })
    } catch (err) {
       
        res.status(400).json(err)
    }
});

// log in user
router.post('/login', async (req, res) => {
    try {
        // find user by email
        const userData = await User.findOne({ where: { email: req.body.email } });
        
        // verify the users credientials
        if (!userData) {
            res.status(400).json({ message: 'Incorrect email or password, please try again.' });
            return;
        }

        // verify password
        const validPassword = await userData.checkPassword(req.body.password);

        // display message if password is wrong
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password, please try again.' });
            return;
        }

        // once verified user is logged in 
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json({ user: userData, message: 'YOU ARE LOGGED IN!' })
        })


    } catch (err) {
        
        res.status(400).json(err)
    }
});

// logout user
router.post('/logout', async (req, res) => {
    try {
        if (req.session.logged_in) {
            req.session.destroy(() => {
                res.status(204).end();
            })
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(400).json(err)
    }
})




module.exports = router;