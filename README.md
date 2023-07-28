# Personal-Note-Taker

## Description
In this assignment we were tasked with taking starter code and making a note taker work. To accomplish this, I had to work in the `server.js` file and work on the routes. In this file I had to require `utils`, `fs`, and also installed the `uuid` package. The reason I required the `fs` was so I could use `writeFileAsync` and `readFileAsync`. I had to use both of these to get the notes read and written to the `db.json` file. Without them, the notes wouldn't stay persisent on the app. To get the notes from the json file I had to use a get route that would look for the notes and then return them. To add a new note, I needed a post route that reads the json file and then is able to write to it to add a new note and returns that new note. The `uuid` package was a package that assigns an idea to the new notes being create that way when you click on a previously saved note it will pull up and you're able to look at it. Also, at the start of the assignment I had to go to the notes.html page to route it to go to the notes page after you click Get Started. 

## Getting Started
To use this application you have to clone my GitHub Repository to your own desktop. Once you have it cloned, in the terminal you want to run `npm i`. This will install the packages needed for the application to function. Once installed, you run `node server.js` in the terminal and it will start the server and show you a link you can click on to take you to the Note Taker Application. Once on the app, you click get started and make yourself some notes!

## Links
[Git Hub Repo](https://github.com/JLopez1227/personal-note-taker)
[Deployed App on Heroku](https://personal-note-taker-jl-7d56d03cd170.herokuapp.com/notes)

## Preview
The following image demonstrates the web application's apperance and functionality:
![Preview of Website(Desktop)](./Screenshot%202023-07-27%20213839.png)
