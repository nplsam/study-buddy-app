# MERN Project (Collaborative) - Study Buddy App

## Project Members:
*Name - Role(s) for this project*: 
- [__Sam Merrick__](https://github.com/nplsam) - Frontend
- [__Stephanie Fung__](https://github.com/stephf2) - Frontend
- [__Valentin Abrutin__](https://github.com/valentin-ab) - Frontend
- [__Ravia Saini__](https://github.com/tryingbiomedeng) - Backend & Frontend Styling
- [__Camille Francis__ (Me)](https://github.com/Cams-Plan)  - Backend & Backend Testing
## Table of Contents
- [**Project Members**](#project-members)

    Checkout our respective GitHub Pages 👩🏾‍💻📄
- [**Project Outline**](#project-outline)
    - [The Deployed App](#the-deployed-app)
    - [Key Features & Functionality](#key-features--functionality)
    - [Key Technologies](#key-technologies)
    - [Files with Axios Requests](#files-with-axios-requests-to-server)
- [**FAQ**](#faq)
- [**Bugs & Fixes/Updates**](#bugs--fixesupdates)
    - [Updates](#updates)
    - [Fixes](#fixes)
    - [Bugs](#bugs)
- [**Run This App Locally on Your System**](#run-this-app-locally-on-your-system)
    - [Pre-requisites](#pre-requisites)
    - [Install Packages](#install-packages)
    - [Setup](#setup)
        - [Setup the Server](#setup-the-server)
            - [Using .env file](#if-using-env)
                - [Run the Docker Container](#run-the-docker-container)
                - [Start the Server](#start-the-server)
            - [NOT Using .env file](#if-not-using-env)
                - [Run the Docker Container](#if-not-using-env)
                - [Start the Server](#start-the-server-1)
        - [Setup the Client](#setup-the-client)

- [**Deploy this app for your own use**](#deploy-this-app-for-your-own-use)
    - COMING SOON!

## Project Outline

### The Deployed App

Interested in a preview of how this app works?

To take a look at this project live by clicking the text below.

[__Studdy Buddy (Live)__](https://revision-app.onrender.com/)

*Note: it's reployed on the free version of render so there may be a small delay when you first access the website*

### Key Features & Functionality

<details>
<summary>Server-side</summary>

- GET/POST/PATCH for Notes
- GET/POST/DELETE for Authentication
- GET/POST/DELETE for Planner
- Session tokens
- Authentication middleware
- Password and token encryption
</details>

<details>
<summary>Client-side</summary>

- __Registration/Login/Logout__
- __Pomodoro Timer__
    - Set times & Custom times
    - Chime sound plays when timer ends *(sound available on Pomodoro page, Homepage & Notes page)*
    - Work/rest toggle
- __Calendar-style Planner__
    - Add entries at the top of the page or directly on the target date
    - Edit & delete entries
- __Notes page for user's study notes__
    - Search user's notes by Title
    - Filter by Subject
</details>

### Key Technologies
<details>
<summary>Server-side</summary>

- Node.js
- Express.js
- Mongoose (MongoDB driver)
- Docker
- MongoDB (Docker image)
- Jest & Supertest (not present on this sample repo)
</details>

<details>
<summary>Client-side</summary>

- React
- Axios
- Vite (bundler)
- Vitest (not present on this sample repo)
</details>

### Files With Axios Requests to Server
*This will be useful for anyone who needs to change the localhost port number or request URL*

| File (Relative Path from ./client/src) | Num of Requests | Lines of Code |
|---|:-:|--:|
|__/Components/__| __--------__ | __--------------------__ |
| ./Header/index.jsx | 1 | 12 | 
| ./Login/index.jsx | 1 | 25 | 
| ./PlannerForm/index.jsx | 2 | 43,82 | 
| ./PlannerItem/index.jsx | 1 | 53 | 
| ./Register/index.jsx | 1 | 25 | 
| __./pages/__| __--------__ | __--------------------__ | 
| ./NotesPage/index.jsx | 6 | 46,70,114,142,167,188 | 
| ./PlannerPage/index.jsx | 2 | 23,50 | 

## FAQ

*What is 'MERN'?*
- An fullstack application that utilises a tech stack of (M) Mongo-DB, (E) Express, (R) React and (N) NodeJS

## Bugs & Fixes/Updates

### Updates

### Fixes
*First line in __bold__ is a __sample__ for formatting*
| Subject of Fix | Bug Details | Solution | Files | Potential Side-effects | Date & Time|
|---|---|---|---|---|---|
| __login submission__ | __users were not able to log in when button was clicked__ | __corrected the endpoint to '/auth/login' instead of '/login'__  | __./client/src/components/Login/index.jsx__ | __n/a__ | __23-09-2023 13:06 BST__ |
|   |   |   |   |   |


### Bugs

- __Notes Page:__ The webpage goes blank/crashes if a user deletes completely clears all notes __[major]__.
- __Styling/Layout:__ Webpage presentation is not responsive to mobile specs __[minor]__.

## Using This Repo
1. Fork a copy of this repository onto your own account
2. Clone this repository onto your local system
    - open your terminal (Git Bash or Linux)
    - create a directory to host the project and enter it 
    `mkdir <dirname> && cd $_`
    - clone the repository into the current directory and open in vscode
    `git clone https://github.com/Cams-Plan/LAP3-study-buddy-app.git . && code .`
3. Users will not be able to make any changes to the main branch of this repo, so any changes must be done on your own fork.

## Run This App Locally on Your System

### Pre-requisites:
- VS Code
- Node 18 (and up)
- Docker Desktop
- Docker Extension
### Install Packages
- **Server**
    - enter the server directory
    `cd server` (if in root of the project)
    - install the packages
    `npm i` OR `npm i && npm i -D`
    *if successful there will be a package-lock.json in the root of the server directory*
    [Setup the Server](#setup-the-server)

- **Client**
    - enter the client directory
        - `cd server` (if in root of the project)
    - install the packages
        - `npm i` OR `npm install --legacy-peer-deps`
    - *if successful there will be a package-lock.json in the root of the server directory*
    [Setup the client](#setup-the-client)

### Setup
when setting up the client or server, your pwd must be the directory you are targeting, don't forget. check your path or use `pwd` to double check as you go
#### Setup The Server

##### If using .env
- create a *.env* file within the root of the server directory
- enter the values for all capitalised variables
(DB_CONNECTION (database URI), PORT (localhost port))
###### Run the Docker container
1. Open Docker Desktop
2. Run the docker container for the database. This can be done two ways:

    matching the entry point to mongodb
    - `docker run --rm -d -p 27017:27017 --name studyApp-db mongo`

    using a custom port as an entry point
    - `docker run --rm -d -p <custom_port>:27017 --name studyApp-db mongo`

    *__Note: If you're using an entry point other than 27017__, you __must__ have a DB_CONNECTION variable with the non-default port. e.g. mongodb://localhost:9000/studyApp-db*
3. Access the database
    - `docker exec -it <db_container_name> mongosh`
4. Enter the studyApp-db database to access the data collections
    - `use studyApp-db`
- *Should be empty since the server hasn't been started up at any point ( enter the command `show collecitons` to check)*
###### Start the Server
1. open a new terminal to run the server
2. check your environment variables are correct in your .env file
3. run the command to start the server
    - `npm run dev`
- *If successful all expected logs for the server initialisation and database connection should be in the console*
4. Switch over to the mongodb terminal. If you run the command `show collections`, there should be collections for every database schema model.

**The Server is now ready! 😁💻✔**
    
##### If NOT using .env
1. Open Docker Desktop
2. Run the docker container for the database
    - `docker run --rm -d -p 27017:27017 --name studyApp-db mongo`
3. Access the database
    - `docker exec -it <db_container_name> mongosh`
4. Enter the studyApp-db database to access the data collections
    - `use studyApp-db`
    - *Should be empty since the server hasn't been started up at any point (`show collecitons` to check)*
###### Start the Server
1. open a new terminal to run the server
2. check your environment variables are correct in your .env file
3. run the command to start the server
    - `npm run dev`
- *If successful all expected logs for the server initialisation and database connection should be in the console*
4. Switch over to the mongodb terminal. If you run the command `show collections`, there should be collections for every database schema model.

**The Server is now ready! 😁💻✔**

#### Setup The Client

*if packages have not been installed please navigate up to [Install Packages](#install-packages)*

1. Open a new terminal for the vite server
2. Ensure you're in the ./client directory of the project in your terminal.
3. **If you used a .env file with a PORT variable for your server port**, ensure all axios "localhost:<port_number>/" (defaulted to 5000 for this project) matches the port for your server.
- *To do this, navigate to [files with axios requests](#files-with-axios-requests-to-server) to save you time looking through every file in ./src*
4. run the command to start the react app
    - `npm run dev`
    - it should return a localhost to open the react app in-browser
## Deploy This App for Your Own Use

__COMING SOON...__
