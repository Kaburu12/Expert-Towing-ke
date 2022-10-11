class User < ApplicationRecord
    has_many :requests 
    has_many :vehicles, through: :requests
end
