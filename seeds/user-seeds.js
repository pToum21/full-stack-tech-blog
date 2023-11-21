const { User } = require('../models')

const userData = [
    {
        id: 1,
        user_name: 'camosatx',
        email: 'camoissmall@gmail.com',
        password: '123456j12'
    },
    {
        id: 2,
        user_name: 'een19',
        email: 'sdfsdfsdf@gsdfl.com',
        password: 'nhgh671245654'
    },
    {
        id: 3,
        user_name: 'Brianx',
        email: 'cadggdfgl@gmfgh.com',
        password: '179klhjl4567'
    },
    {
        id: 4,
        user_name: 'juicerasfsdf',
        email: 'bigmoney@gh.com',
        password: 'password'
    },
];

const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true
});

module.exports = seedUser;