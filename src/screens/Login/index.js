import React from 'react';
import {connect} from 'react-redux';
import { Text } from 'react-native';
import { Container, Button, Header, Body, Title, Left, Icon} from 'native-base';
import styles from './styles';

import {login } from './../../ducks/login';

class Login extends React.Component {
  render() {
    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>Mobile App - Login</Title>
                </Body>
            </Header>
            <Button block info style={styles.mt15} onPress={() => this.props.login('YES', 'YOU cAN')}>
              <Text>Lets Go!</Text>
            </Button>
         </Container>
    )
  }
}
//onPress={() => this.props.navigation.openDrawer()}
const mapDispatchToProps = (dispatch) => {
    return {
        login : (username, password) => dispatch(login(username, password)),
    };
};
export default connect(null, mapDispatchToProps)(Login);
