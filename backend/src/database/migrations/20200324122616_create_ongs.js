
exports.up = function(knex) { //o que eu quero criar
    return knex.schema.createTable("ongs", function (table){
        table.string("id").primary();
        table.string("name").notNullable();
        table.string("email").notNullable();
        table.string("whatsapp").notNullable();
        table.string("city").notNullable();
        table.string("uf", 2.).notNullable();
    });
  
};

exports.down = function(knex) { //para remover o que foi criado
    return knex.schema.dropTable("ongs");
  
};
