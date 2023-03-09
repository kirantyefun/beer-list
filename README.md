# Beer List React App

This is a simple React project that allows you to view a list of beers retrieved from the [Punk API](https://punkapi.com/documentation/v2) and also add custom beers that are stored in the app state but are not persisted.

The app has two tabs: one displays the data retrieved from the Punk API, which initially displays 10 items. After clicking the "Load More" button, an additional 10 items are retrieved and added to the list.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the root directory of the project.
3. Run `npm install` to install the required dependencies.
4. Run `npm start` to start the development server.
5. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

## Usage

Once the app is running in the browser, you can switch between the two tabs to view the beer list from the api and add custom beers and list them in the "My Beers" tab.

### View Beer List

The app initially displays 10 items from the Punk API. To view more items, click the "Load More" button at the bottom of the list. The app will retrieve an additional 10 items and add them to the list.

### Add Custom Beer

To add a custom beer to the app, switch to the "My Beers" tab. Fill out the form with the name, genre, and description for the beer you wish to add. Once the form is complete, click the "Save" button to add the beer to the app state.

Please note that the custom beers are not persisted, so they will not be saved if you refresh the page or close the browser.

## Credits

This project was created using [React](https://reactjs.org/), and uses data from the [Punk API](https://punkapi.com/documentation/v2).

## License

This project is licensed under the [MIT License](https://github.com/example/example/blob/main/LICENSE).
