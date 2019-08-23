import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


// const store = createStore(rootReducer, applyMiddleware(middlewareLogger, thunkMiddleware));
// export { store };

// use store.dispatch

const store = createStore(rootReducer);
// const store = createStore(rootReducer);

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

const render = (Component) => {
  ReactDOM.render(

      <HashRouter>
        <Provider store={store}>
          <Component/>
        </Provider>
      </HashRouter>,

    document.getElementById('react-app-root')
  );
};

render(App);


/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */
