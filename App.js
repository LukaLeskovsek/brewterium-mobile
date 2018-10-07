import React, {Component} from 'react';
import { Root } from 'native-base';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import {DrawerNavigator, StackNavigator} from 'react-navigation';
import thunk from 'redux-thunk'

import reducer from './src/ducks';

import Home from './src/screens/Home';
import Login from './src/screens/Login';
import SideBar from './src/screens/Sidebar'
import Product from './src/screens/Product';

const middlewares = [thunk];
const store = createStore(reducer, applyMiddleware(...middlewares))


const Drawer = DrawerNavigator(
  {
    Home : {screen : Home},
    Login : {screen : Login},
    Product : {screen : Product}
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = StackNavigator(
  {
    Drawer: { screen: Drawer }
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root>
         <AppNavigator/>
        </Root>
      </Provider>
    );
  }
}

// <Container>
//       <Header>
//         <Left>
//           <Button transparent>
//             <Icon name='arrow-back' />
//           </Button>
//         </Left>
//         <Body>
//           <Title>Mobile App</Title>
//         </Body>
//         <Right>
//           <Button transparent>
//             <Icon name='menu' />
//           </Button>
//         </Right>
//       </Header>
//     </Container>