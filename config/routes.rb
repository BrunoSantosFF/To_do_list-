Rails.application.routes.draw do
  root 'todos#index'
  resources :todos, only: [:create, :destroy, :update]

end
