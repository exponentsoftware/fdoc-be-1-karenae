# Backend Assignment

## TODO List

- Create APIs to get all, get by id, add, update by id and delete by id a TODO list
- Should use MongoDB as a database
- API should not have any additional routes

Fields required in Todo list:

- user name
- title for todo
- field to track whether task is complete or not
- created at
- updated at
- category (work, hobby, task)



## TODO List with filtering 

- In the existing APIs that you have created in day 1, add filters to the todo list
- Get all todo list should be able to have additional filters to :
  - fetch by category
  - search by title
- Add capability to sort the data by created_at
- Add api to mark Todo as done, can you use an exisiting api to achieve this?


## TODO List for Users

- Add User collection to store below user information:
   - User name
   - email
   - phone
   - created at
   - updated at
   - role
- Add validation on phone and email from the Mongoose schema itself with error message handling
- Link Todo list with User 
- Create api to get TODO list for User 
- Create User roles for Admin, App user
- User with Admin role should be able to get all Todos
- User with App user role, should be able to fetch only his Todo list

## day10
Create API to get all completed task per Learner
Add Sorting logic to sort by Users who have completed maximum task
Add a collection to store views for Task, likes and ratings
Create one API to get task either by most views, likes and ratings

### Prefered Technologies

| Environment  | Framework  |
|--------------|------------|
| Backend APIs | Express Js |
| Database     | MongoDB    |
| ORM/ODM      | Mongoose   |
