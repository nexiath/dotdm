/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex => {
    return knex.schema.createTable("users", t => {
        t.increments();

        t.string("username")
            .unique().notNullable();
        t.string("email")
            .unique().notNullable();
        t.string("password")
            .unique().notNullable();


        t.datetime("createDat");
        t.datetime("updateAt");
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.createTable("users");
