#### PROJECT: Gremio Sweepstake

TO DO NOW:

- DONE... Create userSchema for login (fetch user from database)
- After login, redirect to a simple Dashboard
- Create one guessing instance that can be added to user

LATER:

- issue JWT tokens
- persist JWT tokens (refresh tokens)
- create validators for register/login
- handle server errors
- create "validators" in register/login react, with error message box

#### THE MISSION:

- Objective:
  A office-type sweepstake app, where users try to guess the results of all of Gremio’s matches in Brasileirao 2023. Correct results and exact matches will yield points. The person with most points will win the sweepstake.

There will be certain stages of implementation:

- Responsive login page (frontend, backend and database)
- The guessing page - with autosave and a submit button, for all final users to submit.
- Navigation for all users to see all guesses - per match, per user and a results table (which shows who is winning). Results will be pushed by the admin
- Full automation, with results being updated automatically (I will have to either find an API or try to build some sort of scrapper)

First steps:

- Create the backend for login/register
- Make sure all is working: validators and error handling
- Make a page that each logged user controls.
- NEXT STEP: Build the guessing page.

#####

DONE:

- Create the layout for the page: https://www.youtube.com/watch?v=TQl7BarutoE
- Create react app
- Making a fully responsive login/register page that accepts Google authentication. -> Changed my mind. Look at coding program log
  - Create the layout for the page: https://www.youtube.com/watch?v=TQl7BarutoE
- Learn how to implement Auth0 or Firebase -> Changed my mind. Look at coding program log
