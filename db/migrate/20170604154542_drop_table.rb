class DropTable < ActiveRecord::Migration[5.0]
    def up
      drop_table :admins
    end

    def down
      fail ActiveRecord::IrreversibleMigration
    end
end
