import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connectStyle } from 'native-base';

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

export const MyComponent = connectStyle('Piki.MyComponent', {})(MyComponentWithoutStyles);



