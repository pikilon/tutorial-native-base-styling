import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connectStyle } from 'native-base';

class MyComponentWithoutStyles extends React.Component { // doesn't work with functional
  render() {
    return (
        <View style={this.props.style.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
        </View>
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

export const MyComponent = connectStyle('Whatever.Piki', styles)(MyComponentWithoutStyles);



