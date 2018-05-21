import React from 'react';
import { Animated, Text, View } from 'react-native';
// Example From https://facebook.github.io/react-native/docs/animations.html#animated-api
export default class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(this.props.start),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: this.props.finish,                   // Animate to opacity: 1 (opaque)
        duration: this.props.duration,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}