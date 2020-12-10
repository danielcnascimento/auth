const db = require("../../_db/models/");

const Validator = require("fastest-validator");
const v = new Validator();

const Boom = require("boom");

module.exports = {

  //listando todos os usuários
  index: async function index(ctx) {
    await db.User.findAll().then((response) => {
      ctx.response.body = { users: response };
    });
  },

  //listando um usuario

  show: async function show(ctx){
    const {request, response} = ctx

    const record = await db.User.findByPk(request.params.id);
    if (record !== null ){
      response.body = record;
    } else {
      response.status = 400;
      response.body = Boom.badRequest("Não foi possível retornar nenhum resultado!")
    }
    
  },

  //atualizando um usuario
  refactory: async function refactory(ctx) {
    const { request, response } = ctx;

    const record = await db.User.findByPk(request.params.id);
    console.log('esse é o record encontrado: ' + record)
    if (record == null) {
      response.status = 404;
      response.body = { messagem: "usuário não encontrado!" };
    } else {
        
    const { firstName, lastName, email, password, message, subject } = request.body;

    const data = {
      firstName,
      lastName,
      email,
      password,
      message,
      subject
    };

    let schema = {
      firstName: { max: 60, min: 1, type: "string" },
      lastName: { max: 60, min: 1, type: "string" },
      email: { max: 60, min: 1, type: "string" },
      password: { max: 18, min: 1, type: "string" },
      message: {max:500 , min:1 , type: "string" },
      subject: {max:200 , min:1 , type: "string" }
    };

    const errors = v.validate(data, schema);

    if (Array.isArray(errors) && errors.length) {

      response.status = 400;
      response.body = Boom.badRequest(null, errors);

    } else {
      record
        .update(data, { _id: request.params.id })
        .then(() => {
          console.log('atualizado')
        })
        .catch((error) => {
          console.log(error);
        });

        response.status = 200;
        response.body = {menssagem: `atualizou usuario ${data.firstName} com sucesso `}
    }

    }
  },
  
  //deletando um usuário
  erase: async function erase(ctx){
    const { request, response} = ctx;

    try{
        let require = await db.User.findByPk(request.params.id);
        let del = await require.destroy(request.params.id);

        if(require !== null && del !== null){
            response.body = {messagem: "usuario deletado"}
        } else {
            response.status = 400
            response.body = Boom.badRequest("Erro ao deletar este usuário...");
        }
    }catch(e){
        response.status = 404
        response.body = Boom.notFound("Usuario não encontrado, já pode ter sido deletado. ");
        console.log("erro encontrado : " + e)
    }

  }
};
