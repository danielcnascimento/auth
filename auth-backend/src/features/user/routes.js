const controller = require('./controller')

module.exports = router => {
    router.post('/v1/api/user', controller.user)
}