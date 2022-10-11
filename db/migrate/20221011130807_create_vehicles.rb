class CreateVehicles < ActiveRecord::Migration[7.0]
  def change
    create_table :vehicles do |t|
      t.string :type
      t.string :image
      t.integer :price
      t.string :Damage_rate

      t.timestamps
    end
  end
end
