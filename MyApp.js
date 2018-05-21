import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Body,
  connectStyle,
  Content,
  Container,
  Header,
  Left,
  View,
  Text,
  Title
} from 'native-base';
import { STYLE_NAME } from './MyApp.style'

class MyAppWithoutStyles extends React.Component {
  render() {
    return (
        <Container>
            <Header><Title>Header</Title></Header>
            <Body>
              <Left><Text>left</Text></Left>
              <Content>
                <Text>content</Text>
              </Content>
            </Body>
        </Container>
    );
  }
}
export const MyApp = connectStyle(STYLE_NAME, {})(MyAppWithoutStyles);
