class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :session_token

      t.timestamps
      t.index :username, unique: true
      t.index :email, unique: true
      t.index :session_token, unique: true
    end
  end
end
