import React from 'react';
import { Text } from 'react-native';
import { Container, Button, Header, Body, Title} from 'native-base';

export default class Product extends React.Component {
  render() {
    return (
        <Container>
            <Header>
                <Body>
                    <Title>Mobile App - Products</Title>
                </Body>
            </Header>
            <Text>Yes we can!</Text>           
         </Container>
    )
  }
}
