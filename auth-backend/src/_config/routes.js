const authRoutes = require('../features/auth/routes');// retorna uma token
const userRoutes = require('../features/user/routes');// criar usuario
const usersRoutes = require('../features/users/routes');// main controller de usuarios

module.exports = router =>{
    authRoutes(router)
    userRoutes(router)
    usersRoutes(router)
}