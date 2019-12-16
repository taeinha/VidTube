class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :user_id
      t.references :likable, polymorphic: true
      t.boolean :is_like

      t.timestamps
      t.index :user_id
    end

    add_index :likes, [:user_id, :likable_id, :likable_type], unique: true
  end
end
