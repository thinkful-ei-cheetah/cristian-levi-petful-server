# Pet-Deli
+ Link to Live: [Pet-Deli api github](https://github.com/thinkful-ei-cheetah/cristian-levi-petful-server)
+ Link to Client Repo: [Pet-Deli app github](https://github.com/thinkful-ei-cheetah/cristian-levi-petful-client)
+ Link to API Repo: [Live](https://pet-deli.levipaulk.now.sh/adopt)

## Authors 
+ Cristian and Levi

## Summary

+ This is a project that took ~6 hours to make that lets a user adopt cats and/or dogs and see other "users" do the same.

+ The api has 3 routes with 2 endpoints each
  + /users
    + Get:
      + returns an array of all the current users(dummy names and names inputed by users)
      + array is randomized for each git request
    + Post:
      + pushes an name into the users array
        + {"name": <USERNAME HERE>}

  + /cats
    + Get:
      + returns an object, representing the current Cat available for adoption
    + Delete:
      + returns an object, representing the current Cat available for adoption
      + dequeues the first Cat, then enqueues that Cat
      
  + /dogs
    + Get:
      + returns an object, representing the current Dog available for adoption
    + Delete:
      + returns an object, representing the current Dog available for adoption
      + dequeues the first Dog, then enqueues that Dog

## Technology
+ This is an Express project, built using Nodejs
+ Node Modules used for this project:
  + cors
  + dotenv
  + express
  + faker
  + helmet
  + nodemon
  + xss