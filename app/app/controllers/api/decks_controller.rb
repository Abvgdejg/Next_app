class Api::DecksController < ApplicationController
  def index
    res = Deck.all.map { |d| { id: d.id, title: d.title,
    description: d.description,
     gamemode: d.gamemode,
     code: d.code,
     author: 'Me',
     version: d.version,
     game: d.game,
     color: ['plains','dark'],
      } }

    render json: res, headers: headers
  end

  def show
    d = Deck.find(params[:id])
    res =  { id: d.id, title: d.title,
    description: d.description,
     gamemode: d.gamemode,
     code: d.code,
     author: d.author,
     version: d.version,
     game: d.game,
     color: ['plains','dark'],
      }
    render json: res, headers: headers
  end
end
