class CreateItems < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.string :title, null:false
      t.boolean :done, default: false
      t.integer :urgency, null:false
      t.integer :importance, null:false
      t.date :deadline
      t.integer :est_time_completion
      t.integer :time_to_completion
      t.text :comments
      t.references :project, foreign_key: true
      t.references :list, foreign_key: true

      t.timestamps
    end
  end
end
