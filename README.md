## React Test App

This is the test application to show the post listing. This applicatin is built with React Hooks, Material UI and Redux. We have used our awn created react base repo to begin with this test application which by default includes support to ES6. We have used airbnb eslint configuration in react development.

## Quickstart

To run this application locally, follow below commands:

Install node modules:
`yarn install`

To run the application in browser:
`yarn start`

Runs the app in the development mode.
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

To build the application, run below command
`yarn build`

Builds the app for production to the `build` folder.

## Screenshot

Posts

![Alt text](/docs/snapshot.png "Posts")

## Folder structure	
```
src
│   favicon.ico
│   index.html
│   index.js
│   serviceWorker.js
│
├───actions
│       app.js
│       post.js
│
├───assets
│   │   index.js
│   │
│   ├───css
│   │       index.css
│   │
│   ├───images
│   │       index.js
│   │       logo.svg
│   │
│   └───scss
│       │   style.scss
│       │
│       └───config
│               _config.scss
│
├───components
│   ├───Header
│   │       index.js
│   │
│   └───Loader
│           index.js
│
├───constants
│       actions.js
│       index.js
│
├───containers
│   ├───Home
│   │       Home.js
│   │       index.js
│   │       PostCard.js
│   │
│   └───PostDetail
│           index.js
│           PostCard.js
│           PostDetail.js
│
├───reducers
│       appReducer.js
│       postReducer.js
│       rootReducer.js
│
├───routes
│       index.js
│       PageNotFound.js
│       PrivateRoute.js
│
├───sagas
│       appSaga.js
│       postSaga.js
│       rootSaga.js
│
├───services
│       api.js
│       post.js
│
├───store
│       index.js
│
└───utils
        common.js
        history.js

```        
