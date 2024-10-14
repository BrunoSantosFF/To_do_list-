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