# TO DO LIST (RUBY ON RAILS)

Criando um "to do list" usando ruby on rails

crie um novo projeto Rails:
```
rails new todo_list
cd todo_list
```

gerando modelo: 
```
rails generate model Todo title:string completed:boolean
rails db:migrate
```
criando Controlador: 
```
rails generate controller Todos index

```

Para poder usar o JS foi feita a instalação de "importmap-rails": 

adicione gem *'importmap-rails'* no arquivo **Gemfile** 

instalar Importmap:

```
bin/rails importmap:install
```