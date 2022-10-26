class User < ApplicationRecord
    has_secure_password
    validates :user ,presence: true, uniqueness: true
    validates :password,length:{minimum:8, message:"please enter a password with at least 8 characters"}

    has_many :requests 
end
