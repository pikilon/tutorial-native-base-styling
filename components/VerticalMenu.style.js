import variable from "../native-base-theme/variables/platform";
import { STYLE_NAME as myButtonSelector } from './MyButton.style';

export const STYLE_NAME = 'Piki.VerticalMenu';

export const generateStyle = (variables = variable) => {
  const marginTop = variables.DefaultFontSize / 1.5;
  return ({
    'NativeBase.ViewNB': {

      [myButtonSelector]: {
      'NativeBase.Button':{
        alignSelf: 'stretch',
        marginTop,

      },
    },
  },
  animationProps: {
    style: {
      backgroundColor: 'powderblue',
    },
    duration: 2000,
    start: 0,
    finish: 1,
  }
});}

export const styleRule = (variables = variable) => ({
	[STYLE_NAME]: generateStyle(variables)
});
