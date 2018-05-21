import variable from "../native-base-theme/variables/platform";

export const STYLE_NAME = 'Piki.HorizontalMenu';

export const generateStyle = (variables = variable) => ({
  'NativeBase.ViewNB': {
  },
});

export const styleRule = (variables = variable) => ({
	[STYLE_NAME]: generateStyle(variables)
});
