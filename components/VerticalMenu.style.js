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
});}

export const styleRule = (variables = variable) => ({
	[STYLE_NAME]: generateStyle(variables)
});
