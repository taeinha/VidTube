class ChangeCommentsBodyToNullFalse < ActiveRecord::Migration[5.2]
  def change
    change_column :comments, :body, :text, null: false
  end
end
