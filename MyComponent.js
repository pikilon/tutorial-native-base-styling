import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connectStyle, Text } from 'native-base';
import { STYLE_NAME } from './MyComponent.style'

class MyComponentWithoutStyles extends React.Component { // doesn't work with functional
  render() {
    return (
        <View style={this.props.style.nativeComponent}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
        </View>
    );
  }
}

export const MyComponent = connectStyle(STYLE_NAME, {})(MyComponentWithoutStyles);
