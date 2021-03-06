module Api
  class EventsController < ApplicationController
    before_action :set_event, only: [:destroy]
    def destroy
      @event.destroy
      head :no_content
    end
    def set_event
      @event = Event.find(params[:id])
    end
    def index
      render json: Event.all
    end
    def search
      query = params[:query]
      events = Event.where('name LIKE ? OR place LIKE ? OR description LIKE ?',
                            "%#{query}%", "%#{query}%", "%#{query}%")

      render json: events
    end
    def create
      event = Event.new(event_params)
      if event.save
        render json: event
      else
        render nothing:tru, status: :bad_request
      end
    end
    def event_params
      params.require(:event).permit(:name, :description, :event_date, :place)
    end
  end
end
