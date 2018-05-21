import variable from "../native-base-theme/variables/platform";
import { STYLE_NAME as myButtonSelector } from './MyButton.style';
export const STYLE_NAME = 'Piki.HorizontalMenu';

export const generateStyle = (variables = variable) => {
  const marginLeft = variables.DefaultFontSize / 3;
  return ({
    'NativeBase.ViewNB': {
      paddingTop: 16,
      paddingBottom: 8,
      flexDirection: 'row',

      [myButtonSelector]: {
      'NativeBase.Button':{
         paddingHorizontal: marginLeft,
         marginLeft,
      },
      // The first button without margin
      '.first': {
        'NativeBase.Button':{
          marginLeft: 0,
        },
      },
    },
  },
});}

export const styleRule = (variables = variable) => ({
	[STYLE_NAME]: generateStyle(variables)
});
