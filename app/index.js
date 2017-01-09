import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import {GoogleSignin} from 'react-native-google-signin';

import Routes from './config/routes';
import styles from './config/styles';

import reducers from './redux/reducers';
import { actions as accountActions } from './redux/Account';

const store = createStore(reducers, devToolsEnhancer(), applyMiddleware(thunk));


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        try {
            GoogleSignin.hasPlayServices({ autoResolve: true });
            GoogleSignin.configure({
              // scopes: ["https://www.googleapis.com/auth/drive.readonly"],
              iosClientId: '255056624833-lp07bb08eme6sj8en3rb590r21eebldn.apps.googleusercontent.com',
              webClientId: '255056624833-pvnmsod2j68817gehf70dnfc1jknbske.apps.googleusercontent.com',
              offlineAccess: false
            });
            store.dispatch(accountActions.getAccount());
        } catch(err) {
            console.log("Google signin error", err.code, err.message);
        }
    }

    render() {
        return (
            <Provider store={store}>
                <Routes/>
            </Provider>
        );
    }
}

export default App;
