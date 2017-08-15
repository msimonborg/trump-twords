class CreateTwords < ActiveRecord::Migration[5.1]
  def change
    create_table :twords do |t|
      t.string :screen_name
      t.text :words

      t.timestamps
    end
  end
end
