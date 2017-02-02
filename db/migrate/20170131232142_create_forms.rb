class CreateForms < ActiveRecord::Migration
  def change
    create_table :forms do |t|
      t.integer :order
      t.integer :screen_number
      t.integer :user_id, null: false


      t.timestamps null: false
    end
    add_foreign_key :forms, :users
    add_index :forms, [:user_id, :order], unique: true
  end
end
