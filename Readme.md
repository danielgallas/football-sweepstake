#### PROJECT: Football Sweepstake

#### COOLORS AND LOGO MAKER:

https://coolors.co/47abdc-121218-27272d-dadde8-c7c7cd
https://myfreelogomaker.com/brandkit/129244095/logo-files

#### CURRENT STAGE OF DEVELOPMENT

- Time to do a major clean up - app with all functionalities and basic, basic, basic design (think about better design later)

#### TO DO NOW:

- Create NextMatch

### AFTER THAT:

- Correct all designs (Leaderboard, NextMatch, etc.) in responsive mobile
- Improve design of each page (turn "300 points" to green)

#### THE MISSION:

- Objective:
  A office-type sweepstake app, where users try to guess the results of all of Gremio’s matches in Brasileirao 2023. Correct results and exact matches will yield points. The person with most points will win the sweepstake.

- Finishing all items in the menu
- Improve each feature and the design
- Full automation, with results being updated automatically (I will have to either find an API or try to build some sort of scrapper)

#### DONE:

- Work on Last Match page: find a way to get points for each use (may need a new variable - called roundpoints in the old design Table.js in components)
- Organize Leaderboard, Last Match, etc. in proper folders. What is a component? What is a feature?
- Create Leaderboard page (design it)
- Create a navbar menu:
- Create dashboard structure to hold menu
- Menu items:
- Leaderboard
- Last match
- Next match
- All matches by user
- All matches by match
- DONE: Get a basic map of variables that will be used
- Rearrange folder structure: create main folders where everything will slot in
- Encerrar apostas
- Dashboard: Add POINTS in the column table
- SetUsers: load all data here and pass it on downwards with useContext
- Have a page for users to update results:
- THIS NOW: FInd out why results is not working with teste user that has 38 rounds. Error message: react-dom.production.min.js:189 TypeError: Cannot read properties of undefined (reading 'round') Admin.js:139:58
- THIS NOW: find a way to add username to the store (the username will now come from useParams id)
- change backend so that post now changes to update - and so that all items in matches2 are ADDED to mongoDB scores, and do not REPLACE mongoDB scores
- Rightside: Updates on the app + Twitter widget
- Fix problems (sizes, fonts, etc.)
- Redo the setuser page with new design - correct routes
- Make the setUser page determine what will be shown in dashboard (using params)
- Fix all responsive issues
- Table last match result - useContext to get userPredictions - import match.js from data
- Create two tables
- Table next match predictions
- DONE: Sort out the logic for winners, results, etc. create calculating functions - should I store it all in React Redux?
- DONE: implement NEXT MATCH component (see all predictions just for the next match):
  - DONE: clone Admin into Admin2.js and work only on Admin2.js for testing
  - DONE: create a nextMatch.js in components
  - DONE: code nextMatch based on data in Admin2.js
- DONE: think about all the things I would like to have in the app; start thinking in terms of UX
- DONE: clone Admin2.js into Admin.js and work only on Admin.js for testing
- DONE: better loading page
- DONE start coding the new design based on this: https://www.youtube.com/watch?v=K7vHoUwClaM
- last match component
- first page: choose user
- find a way to dinamically edit results
- redo the admin page with React Redux Toolkit
- introduce leaders into the Admin2 page (change winners for leaders)
- create a way to add points
- create an easy way to change axios
- create a table of winners
- Update admin page with final result of match - think about the logic
- Create a page that gets all the results (for back up) - finish it with the final layout
- Change Axios URL in client
- \*\*\*\* Publish the whole thing
- Send to people
- improve thank you page
- NOT DONE: Find a way to “autosave” these results
- add password encrypt
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
