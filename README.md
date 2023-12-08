# About
Apero is a simple, lightweight and responsive Angular project aimed to serve as a basic search engine for Cocktails.
The search engine leverages two APIs to provide users with a broad range of cocktails to choose from. This project was created as part of a student module.

## APIs Used
**The Cocktail DB API**: This API provides information about various cocktails, their ingredients and instructions.
**Aurelien Nezzar API**: This API is used to fetch the list of categories for the cocktails.
## Project Structure
The project follows a structured format for easy navigation and understanding:

 - components: Contains various components such as input-search, list-item, loader and so on.
 - dto: Contains Data Transfer Objects for categories and drinks.
 - helpers: Contains helper files for the application. 
 - home: Contains the home component files.
 - models: Contains the model for cocktails.
 - more-cocktails: Contains the further cocktails component files.
 - pipes: Contains the custom pipes files. select: Contains the select component files.
 - services: Contains service files like cocktail service.
 - single: Contains the single component files.
 - assets: Contains the static files like css, icons and images.

## How to Run
  

 ### **Project Prerequisite**
 Download and Install **npm** & **Node.js**

### Installation

 1. `git clone 'https://github.com/Aurelien-Tallet/angular-epita/'`
 2. `cd angular-epita`
 3. `npm install`
 4. `ng serve`
 5. Navigate to http://localhost:4200/

## Notes

 - The **Aurélien Nezzar API** was created by ourselves to create a missing route useful to our project.
 - Some search filters was made locally because of the fact that the API hasn't all required routes for the viability of the project. Angular pipes were used to achieve this in the file `home.component.html` for the component `app-list-item`.

Enjoy exploring cocktails with Apero!
