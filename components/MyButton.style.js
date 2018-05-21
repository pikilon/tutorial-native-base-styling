import variable from "../native-base-theme/variables/platform";

export const STYLE_NAME = 'Piki.MyButton';

export const generateStyle = (variables = variable) => {
  const fontSize = variables.DefaultFontSize;
  return ({
  'NativeBase.Button': {
    backgroundColor: variables.brandLight,
    borderRadius: 0,
    paddingHorizontal: fontSize,
    paddingVertical: fontSize / 2,
    height: 'auto',
    shadowOpacity: 0,
    'NativeBase.Text': {
      fontSize,
      color: variables.textColor
    },
  },
  '.shadow': {
    'NativeBase.Button': {
    shadowOpacity: 0.2,
    },
  },
  });
};

export const styleRule = (variables = variable) => ({
	[STYLE_NAME]: generateStyle(variables)
});
