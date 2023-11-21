const router = require('express').Router();

// const homeRoutes = require('./html/homeroutes')
// const dashboardRoutes = require('./html/dashboard')

const apiRoutes = require('./api')

// router.use('/', homeRoutes);

router.use('/api', apiRoutes);

// router.use('/dashboard', dashboardRoutes);

module.exports = router;
