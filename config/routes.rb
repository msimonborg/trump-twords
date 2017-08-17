Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  get ':year/:month/:day', to: 'twords#index', as: :twords, constraints: {
    year: /\d{4}/, month: /\d{1,2}/, day: /\d{1,2}/
  }

  get 'twords/:year/:month/:day', to: 'twords#index', constraints: {
    year: /\d{4}/, month: /\d{1,2}/, day: /\d{1,2}/
  }
  
  get 'twords', to: 'twords#date_picker', as: :date_picker

  root to: 'twords#index'
end
