class CreateRequests < ActiveRecord::Migration[7.0]
  def change
    create_table :requests do |t|
      t.string :vehicle
      t.string :location
      t.string :phone

      t.timestamps
    end
  end
end
