import React from 'react';
import { connectStyle, View, Text } from 'native-base';
import { MyButton } from './MyButton';
import { STYLE_NAME, generateStyle } from './VerticalMenu.style';

class VerticalMenuWithoutStyles extends React.Component {
  render() {
    const { buttonsArray } = this.props;
    const lastIndex = buttonsArray.length - 1;
    return (
        <View>
          {buttonsArray.map((number, index) =>
            <MyButton
              shadow
              number={number}
              key={`horizontalButton ${number}`}
              first={index === 0}
              last={index >= lastIndex}
            />
          )}
        </View>
    );
  }
}

export const VerticalMenu = connectStyle(STYLE_NAME, generateStyle())(VerticalMenuWithoutStyles);

