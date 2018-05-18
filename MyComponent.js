import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { connectStyle, View } from 'native-base';
import { STYLE_NAME } from './MyComponent.style'

class MyComponentWithoutStyles extends React.Component { // doesn't work with functional
  render() {
      const { container, text } = this.props.style;
    return (
        <View style={container}>
            <Text style={text}>Open up App.js to start working on your app!</Text>
            <Text style={text}>Changes you make will automatically reload.</Text>
            <Text style={text}>Shake your phone to open the developer menu.</Text>
        </View>
    );
  }
}

export const MyComponent = connectStyle(STYLE_NAME, {})(MyComponentWithoutStyles);
