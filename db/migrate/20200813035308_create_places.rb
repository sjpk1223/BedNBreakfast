class CreatePlaces < ActiveRecord::Migration[5.2]
  def change
    create_table :places do |t|
      t.string :title
      t.float :lat
      t.float :lng
      t.integer :seating

      t.timestamps
    end
  end
end
