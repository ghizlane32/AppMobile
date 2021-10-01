import React, {Component} from 'react';
import MainStackNavigator from './screens';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import configureStore from './library/redux_src/store';
import * as CONSTANTS from './data/constants';

//const store = configureStore();

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Provider store={store}></Provider>*/}
        <PaperProvider theme={CONSTANTS.Theme}>
          <MainStackNavigator />
        </PaperProvider>
      </React.Fragment>
    );
  }
}

export default App;
