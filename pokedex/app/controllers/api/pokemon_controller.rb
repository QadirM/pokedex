class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all.includes(:items)
    render :index
  end

  def update
  end

  def show
    @pokemon = Pokemon.includes(:items).find(params[:id])
    render :show
  end

  def destory
  end
end
