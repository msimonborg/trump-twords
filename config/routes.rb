Rails.application.routes.draw do
  get 'twords/home'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'twords#home'
end
