const controller = require('./controller')

module.exports = router => {
    router.post('/v1/api/auth', controller.auth);
}