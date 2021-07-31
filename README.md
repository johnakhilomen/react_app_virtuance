# Virtuace Code Challenge

We have had a sudden corruption error in our git repository and have lost a number of iterations on our application! We need to you rebuild the missing parts of our app.

Please spend only up to two hours implementing the frontend and backend for the images feature. **Important** — when you're done:

- Remove the `node_modules` folder
- Remove `dist folder` from server folder
- Zip up this directory
- Edit the last section of this README file with a short blurb telling us what tradeoffs you made (if any) and how you might improve your solution and any other outstanding thoughts.
- Submit it back to us (josh.miller@virtuance.com)

## Task details

- Users should be able to see all of their images in a grid format with the name of image being an editable text box
- Users should be able to edit the name of their image and have that update on the server
- For the simplicity of this exercise we are only using an in memory object on the backend where we would normally be using a DB.

## Running locally

- `npm i` — Installs dependencies
- `npm start:frontend` — Starts the frontend code
- `npm start:server` — Starts the server

You can run each of these commands in different terminals

## Tradeoffs and follow-ups

[ Add Your Notes Here ]

## On the Sever-side:

- Added a middleware to validate any request for the HTTP methods PATCH 
- Moved images array away from the index.ts into a different file data.ts 
- because the index file was unnecessarily long.
- Added types to every Request, Response and Next objects.
- Added AppController to process every Api's Request 

A shorter logical code-structure is easier to read, easier to understand, and easier to troubleshoot. Furthermore classes have been into smaller classes to avoid one class containing too many responsibilities.

Improvement:
Implementing Dependency Injection for relationships among classes would have been a way to improve the implementation for the server-side.

## Frond end:
***imagesAPI***
 - Implemented updateImages and fetchImages methods
 - initialized the defaults baseURL for axios
 - Added a request object to process Axios's request calls (Get and Update)
 - Added two reusable methods for response and error

 ***imageSlices***
 - Implemented two thunks for getting images and updating images
 - Implemented two reducers for getting images and updating images

 ***Images***
 - Iterated value to display images and text fields with names associated with images
 - Added setName event handler for onChange event to edit image's name
 - Added useEffect to get Images after component is mounted
