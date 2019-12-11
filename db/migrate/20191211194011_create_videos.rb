class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :view_count, null: false, default: 0
      t.integer :uploader_id, null: false

      t.timestamps
      t.index :title
      t.index :uploader_id
    end
  end
end
