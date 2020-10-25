# Project Name
Images Gallery

## Description

Duration: 1 week sprint

For this project I created a gallery page to share images. Visitors can click on an image to see a description and use a button to "Love" an image. I used `axios` to retrieve (`GET`) data from the `/gallery` and store it in `App.js`. I used the `GalleryList` to pass it the gallery data stored in `App` via `props` and lloped over the list of gallery data. I created `GalleryItem.js` and passed it the individual gallery item via `props`. I Updated the `GalleryList` to use this component to display an image.

I swap the image with the description on click using conditional rendering, and display the number of 'love it!' for each item and included a 'love it!' button. When the button is clicked, I used `Axios` to `PUT` the love it count!` and update the gallery each time the button is clicked.

## Prerequisites

-Nodemon
-Run server
-Run client

## Installation

There is no database component to base mode. All data is stored in an array on the server. 

- Before you get started, add a few images to the `public/images` folder and modify the `server/modules/data.js` to include an `id`, `title`, `description` and `path for` each of your images. Each `id` should be a unique number (e.g. 1, 2, 3...).

- Running the server code requires `nodemon`. If you don't already have `nodemon`, install it globally with `npm install nodemon --global`.

- npm install 
- npm run server (if computer shutsdown, I'll have to spin up the server again)

- Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

- npm run client

- Between the server and client, you'll need two terminal tabs! Because we're using `nodemon`, both our client side and server side will automatically spin back up when changes are made!

## Usage
- User can click the love it button of the image(s) they love
- User can click on an image to toggle between the image and a description of the image

## Built With

- React.js
- css

## Acknowledgement
Thanks to Prime Digital Academy who equipped and helped me to make this application a reality. Special thanks to Simon for leading this hirse to water, and thanks to Adam and Matt for always being ready to jump on a call and help out if need be.

## Support
If you have suggestions or issues, please email me at tflak29@gmail.com

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
