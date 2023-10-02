Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    devise_for :users, controllers: { sessions: 'users/sessions' }
    resources :users
    resources :decks
  end
end
