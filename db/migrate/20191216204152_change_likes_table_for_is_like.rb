class ChangeLikesTableForIsLike < ActiveRecord::Migration[5.2]
  def change
    change_column :likes, :is_like, :boolean, null: true
  end
end
