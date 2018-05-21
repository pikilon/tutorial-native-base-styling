import variable from "./native-base-theme/variables/platform";

export const STYLE_NAME = 'Piki.MyComponent';

export const generateStyle = (variables = variable) => ({
  'NativeBase.ViewNB': {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: variables.contentPadding,

    'NativeBase.Text':{
      fontSize: 15,
      color: variables.brandPrimary,
      '.first': {
        paddingLeft: 30,
      },
      '.last': {
        color: 'red'
      },
    },
  },
});

export const styleRule = (variables = variable) => ({
	[STYLE_NAME]: generateStyle(variables)
});
