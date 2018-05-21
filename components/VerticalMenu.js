import React from 'react';
import { connectStyle, View, Text } from 'native-base';
import { MyButton } from './MyButton';
import FadeInView from './VerticalMenu.animation';
import { STYLE_NAME, generateStyle } from './VerticalMenu.style';

class VerticalMenuWithoutStyles extends React.Component {
  render() {
    const { buttonsArray } = this.props;
    const lastIndex = buttonsArray.length - 1;
    return (
        <FadeInView {...this.props.style.animationProps}>
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
        </FadeInView>
    );
  }
}

export const VerticalMenu = connectStyle(STYLE_NAME, generateStyle())(VerticalMenuWithoutStyles);

