import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class MinecraftRoles extends BaseSchema {
  protected tableName = 'minecraft_role'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('minecraft_id').references('id').inTable('minecrafts')
      table.string('role_id').references('id').inTable('roles')
      table.unique(['role_id', 'minecraft_id'])

      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
