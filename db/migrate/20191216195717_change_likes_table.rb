class ChangeLikesTable < ActiveRecord::Migration[5.2]
  def change
    change_column :likes, :user_id, :integer, null: false
    change_column :likes, :likable_id, :integer, null: false
    change_column :likes, :likable_type, :string, null: false
    change_column :likes, :is_like, :boolean, null: false

  end
end
