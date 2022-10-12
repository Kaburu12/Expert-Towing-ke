class CreateVehicles < ActiveRecord::Migration[7.0]
  def change
    create_table :vehicles do |t|
      t.string :category
      t.string :image
      t.string :price
      t.string :damage_rate

      t.timestamps
    end
  end
end
