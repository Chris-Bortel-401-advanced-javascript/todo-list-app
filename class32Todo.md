# Class 32 
## 11-21-2020

### lab 32


- on load the state of list will be what ever is in the todo database

What we need
1. Superagent call on the form
2. on submit post to db and push to state

When we enter a page, we need to make a request to get data ---> use effect
- use effect will run everytime that we re render ---> inside of that is where we will make a superagent request and update state with that data