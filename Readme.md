#### PROJECT: Football Sweepstake

#### TO DO NOW:

- add password encrypt
- improve thank you page
- \*\*\*\* Publish the whole thing
- Send to people
- Find a way to “autosave” these results

#### THE MISSION:

- Objective:
  A office-type sweepstake app, where users try to guess the results of all of Gremio’s matches in Brasileirao 2023. Correct results and exact matches will yield points. The person with most points will win the sweepstake.

There will be certain stages of implementation:

- DONE - Responsive login page (frontend, backend and database)
- The guessing page - with autosave and a submit button, for all final users to submit.
- Navigation for all users to see all guesses - per match, per user and a results table (which shows who is winning). Results will be pushed by the admin
- Full automation, with results being updated automatically (I will have to either find an API or try to build some sort of scrapper)

#### LATER:

- issue JWT tokens
- persist JWT tokens (refresh tokens)
- create validators for register/login
- handle server errors

#### DONE:

- if yes: display his/her results
- check for: finalSubmit in mongoDB
- on opening page check if user already submitted results
- in server block users with same name (query)
- after register, send user to dashboard
- Find a way for users to submit these results permanently to the database (final submit)
- After GUESSING PAGE is done, go back to login/register and start issuing JWT and Bcrypting passwords
- Make some minor corrections (write rules in first page, change name of the app to Football Sweepstake)
- Create final landing page (after guesses are done)
- Add two extra questions
- Improve layout of Guessing Page
- Shorten table to 19 results
- Disable button for pages
- Implement "place: away/home" key-value pair in scores array
- Improve the navigation and the layout (for when I implement 38 matches) - finish page changing logic + improve design
- Find a way for these scores to be “attached” to the correct users that are logged in.
- Start THE GUESSING PAGES
- Recreate page design for guesses (dashboard)
- DONE... Create userSchema for login (fetch user from database)
- DONE... After login, redirect to a simple Dashboard
- Create the layout for the page: https://www.youtube.com/watch?v=TQl7BarutoE
- Create react app
- Making a fully responsive login/register page that accepts Google authentication. -> Changed my mind. Look at coding program log
  - Create the layout for the page: https://www.youtube.com/watch?v=TQl7BarutoE
- Learn how to implement Auth0 or Firebase -> Changed my mind. Look at coding program log
- MAIN ISSUE NOW: How to handle scores? Can I do it without useState (which changes all results)? How to add results to a separate collection?
- Work out how to handle multiple variables (scores, teams, etc.):
- One set of data will be static (Teams names, round number)
- Another set of data will be handled by the server (guessed scores for each game)
- How to pass components (scores, team names, round number) between pages?
- Test this with only 2 rounds
- Create increase/decrease buttons
