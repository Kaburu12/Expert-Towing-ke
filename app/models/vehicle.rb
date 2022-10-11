class Vehicle < ApplicationRecord
has_many :requests, dependent: :destroy
has_many :users,through: :requests
end
