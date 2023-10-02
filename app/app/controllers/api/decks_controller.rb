class Api::DecksController < ApplicationController
  def index
    res = Deck.all.map do |d|
      { id: d.id, title: d.title,
        description: d.description,
        gamemode: d.gamemode,
        code: d.code,
        author: d.author.email,
        version: d.version,
        game: d.game,
        color: %w[plains dark] }
    end

    render json: res, headers: headers
  end

  def show
    d = Deck.find(params[:id])
    res = { id: d.id, title: d.title,
            description: d.description,
            gamemode: d.gamemode,
            code: d.code,
            author: d.author.email,
            version: d.version,
            game: d.game,
            color: %w[plains dark] }
    render json: res, headers: headers
  end
end
