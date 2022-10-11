class RequestsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    #GET/request
    def index
        request = Request.all
        render json: request
    end
    #GET/requests/id
    def show
        request = Request.find_by(id: params[:id])
        render json: request
    end
    #POST/requests
    def create
        request = Request.create!(request_params)
        # hero= Hero.find(params[:hero_id])
        render json: request
    rescue ActiveRecord::RecordInvalid => e
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end

    #DELETE/requests/:id
    def destroy
      request = Request.find(params[:id])
      request.destroy
      head:not_found
    end

    private 
    

    def request_params
        params.permit(:vehicle_type, :location,:phone)
    end

    def render_not_found_response
        render json: { error: "Request not found" }, status: :not_found
    end

end
