Rails.application.routes.draw do
  devise_for :users
  root to: 'home#index'
  namespace :api, defaults: {format: "json"} do
    resources :organizations, :items

  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
