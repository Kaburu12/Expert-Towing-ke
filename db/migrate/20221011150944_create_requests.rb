class CreateRequests < ActiveRecord::Migration[7.0]
  def change
    create_table :requests do |t|
      t.string :vehicle_type
      t.string :location
      t.string :phone
      # t.belongs_to :user, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.references :vehicle, null: false, foreign_key: true

      t.timestamps
    end
  end
end
