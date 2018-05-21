import React from 'react';
import { connectStyle, Text, Button } from 'native-base';
import { STYLE_NAME, generateStyle } from './MyButton.style'

class MyButtonUnstyled extends React.Component {
  render() {
    return (
        <Button>
            <Text>{this.props.number}</Text>
        </Button>
    );
  }
}

export const MyButton = connectStyle(STYLE_NAME, generateStyle())(MyButtonUnstyled);
