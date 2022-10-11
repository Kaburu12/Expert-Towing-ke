Rails.application.routes.draw do

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :requests, only:[:index,:show,:create,:update,:destroy]
  resources :vehicles, only:[:index]

  post '/signup',to:"users#create"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  get '/me', to: "users#show"
  get '/users', to: "users#index"

end
