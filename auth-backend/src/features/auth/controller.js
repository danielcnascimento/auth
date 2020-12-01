const services = require('./services');
const Boom = require('boom');
const jwt = require('jsonwebtoken');

const Validator = require('fastest-validator');

const v = new Validator()

module.exports = {
    auth : async contexto => {
        const { request : {body}, response } = contexto;

        const schema = {
            email: { max: 255, min: 5, type: 'string' },
            password: { max: 16, min: 8, type: 'string' },
          };
      
          const errors = v.validate(body, schema);
      
          if (Array.isArray(errors) && errors.length) {
            response.status = 400;
            return response.body = Boom.badRequest(null, errors);
          }

        const user = await services.auth(body);

        if(user){
            console.log('esse usuario foi encontrado: ' + user) 
            response.body = {result : jwt.sign({email : user.email}, 'mysecret')}
        } else {
            response.status = 401;
            response.body = {result: Boom.unauthorized()}
        }
    }
}