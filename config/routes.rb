Rails.application.routes.draw do
  get 'errors/not_found'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  get ':year/:month/:day', to: 'twords#index', as: :twords, constraints: {
    year: /\d{4}/, month: /\d{1,2}/, day: /\d{1,2}/
  }

  get 'twords/:year/:month/:day', to: 'twords#index', constraints: {
    year: /\d{4}/, month: /\d{1,2}/, day: /\d{1,2}/
  }
  
  get 'twords/:date', to: 'twords#date_picker', as: :date_picker

  get 'twords', to: 'twords#index'

  match '404', to: 'errors#not_found', via: :all

  root to: 'twords#index'
end
