class ChangeVideoColumnDescription < ActiveRecord::Migration[5.2]
  def change
    change_column :videos, :description, :text, null: true, default: ""
  end
end
