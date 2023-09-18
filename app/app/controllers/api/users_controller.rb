class Api::UsersController < ApplicationController
  def all
    headers = { 'Content-Type': 'application/json',
                'Access-Control': 'Allow-Origin' }
    res = []
    User.all.map { |u| res << { id: u.id, name: u.name, tag: u.tag, age: u.age, color: u.color } }
    render json: res, headers: headers
  end
end
