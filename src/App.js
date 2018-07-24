import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from "./components/LoginForm";
let store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {
    componentWillMount(){
        const config = {
            apiKey: "AIzaSyDbNaxGPSsnXs4lSdIm73ow_TCejK7X3yM",
            authDomain: "manager-1c00e.firebaseapp.com",
            databaseURL: "https://manager-1c00e.firebaseio.com",
            projectId: "manager-1c00e",
            storageBucket: "manager-1c00e.appspot.com",
            messagingSenderId: "707649197675"
        };
        firebase.initializeApp(config);
    }

    render(){
        console.log('something');
        return(
            <Provider store={store}>
                <LoginForm/>
            </Provider>
        );
    }
}

export default App;