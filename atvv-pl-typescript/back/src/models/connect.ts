import { Sequelize } from 'sequelize'


 const connection = new Sequelize("atividade5", "root", "root", {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
   })

connection.authenticate()
.then(function(){
    console.log("Conexão com banco de dados realizada com sucesso!");
}).catch(function(){
    console.log("Erro: Conexão com banco de dados");
})

module.exports = connection;