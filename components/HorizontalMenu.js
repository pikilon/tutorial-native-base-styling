import React from 'react';
import { connectStyle, View, Text } from 'native-base';
import { MyButton } from './MyButton';
import { STYLE_NAME, generateStyle } from './HorizontalMenu.style';

class HorizontalMenuWithoutStyles extends React.Component {

  render() {
    const { buttonsArray } = this.props;
    const lastIndex = buttonsArray.length - 1;
    return (
        <View>
          {buttonsArray.map((number, index) =>
            <MyButton
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

export const HorizontalMenu = connectStyle(STYLE_NAME, generateStyle())(HorizontalMenuWithoutStyles);

