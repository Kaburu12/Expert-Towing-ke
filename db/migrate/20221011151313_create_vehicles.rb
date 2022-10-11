class CreateVehicles < ActiveRecord::Migration[7.0]
  def change
    create_table :vehicles do |t|
      t.string :vehicle
      t.string :image
      t.string :price
      t.string :damage_rate
      # t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
