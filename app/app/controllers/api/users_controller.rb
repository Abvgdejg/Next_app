class Api::UsersController < ApplicationController
  def index
    res = []
    User.all.map { |u| res << { id: u.id, name: u.name, tag: u.tag, age: u.age, color: u.color } }
    render json: res, headers: headers
  end

  def show
    u = User.find(params[:id])
    res =  { id: u.id, name: u.name, tag: u.tag, age: u.age, color: u.color }
    render json: res, headers: headers
  end
end
