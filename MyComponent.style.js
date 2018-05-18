import variable from "./native-base-theme/variables/platform";

export const STYLE_NAME = 'Piki.MyComponent';

export const generateStyle = (variables = variable) => ({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: variables.brandPrimary
  }
});

export const styleRule = (variables = variable) => ({
	[STYLE_NAME]: generateStyle(variables)
});
