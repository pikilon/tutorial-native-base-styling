import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Body,
  connectStyle,
  Content,
  Container,
  Header,
  Left,
  Text,
} from 'native-base';
import { STYLE_NAME } from './MyApp.style'
import { HorizontalMenu } from './components/HorizontalMenu';
import { VerticalMenu } from './components/VerticalMenu';

const buttonsArray = ['one', 'two', 'three', 'four'];
class MyAppWithoutStyles extends React.Component {
  render() {
    return (
        <Container>
            <Header>
              <HorizontalMenu buttonsArray={buttonsArray} />
            </Header>
            <Body>
              <Left>
                <VerticalMenu buttonsArray={buttonsArray} />
              </Left>
              <Content>
                <Text>content</Text>
              </Content>
            </Body>
        </Container>
    );
  }
}
export const MyApp = connectStyle(STYLE_NAME, {})(MyAppWithoutStyles);
