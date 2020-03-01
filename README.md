This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## About App

This app is mainly created in admiration of the learning of **context component** of the reactJs.

- libaray used in it:

1. axios
2. ant-design
3. react-router-dom

## axious

- To get data from backend in Lifecycle Hooks i.e

```js
componentDidMount(){
  const promis = axios.get('url')
}
```

- requests of axios

```js
axios
  .get('url')
  .then(function(respose) {
    //handle success
  })
  .catch(function(error) {
    //handle errors
  });
```

## context or context API

- React's context allows you to share information to any components, without any help of props.
- Context provides a way to pass data through the component tree without having to pass props down manually at every level.

### Create file of context.jsx in root path

- context component:

```js
const Context = React.createContext();
```

- There are two export component :

1. class Provider

For adding in root file App.js  
Changing state by using the dispatch redux property

```js
export class Provider extends Component{
  state={
    data:[]
    dispatch:action => this.setState(state => reducer(state,action)) // you have to define or use this element in other file with the same 'type' component in it and after that help of payload we can change the state.
  };
  componentDidMound(){
    //if you want ot change state in file by 'setState'
  }
  render(){
    return (
      <Context.Provider value={this.state}>
      {this.props.childern}
      </Context.Provider>
    );
  }
}
```

**reducer** component:

```js
const reducer = (state, action) => {
  switch (action.type) {
    case 'objcet_in_type':
      return {
        ...state,
        data: action.payload // payload is the change data that comes from the another file where the 'Consumer' used.
      };
    default:
      return state;
  }
};
```

2. const Consumer

For adding in file where we can use the states or values that provide by the provider.

```js
export const Consumer = Context.Consumer;
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
