import React from 'react';
// import Expo from "expo";
import { Root } from "native-base";
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import { StyleSheet, View } from 'react-native';
import ApplicationRoutes from './Src/Router';
import { Provider } from 'react-redux';
import store from './Src/Stores/Store';

export default class App extends React.Component {

//   async componentWillMount() {
//     await Expo.Font.loadAsync({
//       Roboto: require("native-base/Fonts/Roboto.ttf"),
//       Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
//       Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
//     });
//   }


  render() {
    return (
      <Root>
        <Provider store={store}>
          <ApplicationRoutes />
        </Provider >
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
