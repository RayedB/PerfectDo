Rails.application.routes.draw do
  devise_for :users
  root to: 'home#index'
  get '/welcome', to: 'home#private'
  namespace :api, defaults: {format: "json"} do
    resources :organizations
    resources :todos do
      resources :items
    end
  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
