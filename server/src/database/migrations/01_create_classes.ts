import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary()
        table.string('subject').notNullable()
        table.decimal('cost').notNullable()

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            // ao atualizar o ID de um usuário, ele sofrerá mudanças aqui também
            .onUpdate('CASCADE')
            // ao deletar um usuário, todas as aulas que a ele pertencem também são
            .onDelete('CASCADE')
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('classes')
}