# US State Capitals

A single page React app that connects a [react-simple-map](https://www.react-simple-maps.io/) with a [Back4App](https://www.back4app.com/database/back4app/list-of-us-states-and-capitals) public database to create an interactive map that displays State Capital, Population, Flag, Largest City.

The app was created as an exercise in using Typescript.

Try it out [here](https://lucid-clarke-4db2b1.netlify.app)

## Build

A click event handler was added to the marker and annotation components of the react-simple-map.  

The fetch API uses an objectID to return an object from the Back4App database.    

An information display component was created to display the object data.    

Care was taken to adhere to SRP with the creation of separate Map and InformationDisplay components and the fetch method allows for extendability if needed, and of course to keep the code clean and readable.

## Issues

The flag links are stored in the read-only database as a combination of 16, 20, 21, 23px images. These have been converted to 250px using an ugly replace method. A custom database with query lookups would have been a better way to go in the long run.

