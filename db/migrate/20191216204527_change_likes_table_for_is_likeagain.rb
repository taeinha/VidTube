class ChangeLikesTableForIsLikeagain < ActiveRecord::Migration[5.2]
  def change
    change_column :likes, :is_like, :boolean, null: false
  end
end
