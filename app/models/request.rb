class Request < ApplicationRecord
    validates :phone,length:{maximum:10}

    belongs_to :user
    belongs_to :vehicle
end
