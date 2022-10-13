class CreateRequests < ActiveRecord::Migration[7.0]
  def change
    create_table :requests do |t|
      t.string :name
      t.string :location
      t.string :phone
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
