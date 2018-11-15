# This document contains following
- Project-Description.
- Requirements.
- How to execute the project.

# Project-Description
This is project of making a item catalog website showing items of different category.
Registered users will have the ability to post, edit and delete their own items.

# Requirements
To run this project you should have the following things on your computer.
- python
- vagrant

# How to execute the project

## For google auth application
- Go to https://console.developers.google.com/project and login with Google.
- Create a new project and name it
- Select `API's and Auth --> Credentials --> Create a new OAuth client ID` from the project menu
- Select web application
- Now, on consent scree, type product name and save
- In Authorized javascript origins add: http://0.0.0.0:8000 http://localhost:8000
- Click create client ID
- Click download JSON and save to project folder as `client_secret.json`
- In login.html replace the line `data-clientid=""` with your client id from the web application.

## For seting the database and starting the server
- Change the directory to the catalog folder.
- Type `python Database_file.py`.
- Optional -- type `python lotsofmenu.py`.
- Type `python catalog.py` to start the server.

That's it, now enjoy the webpage.


# Thank you
