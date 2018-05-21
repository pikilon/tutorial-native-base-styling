import variable from "./native-base-theme/variables/platform";

export const STYLE_NAME = 'Piki.MyApp';

export const generateStyle = (variables = variable) => ({
  'NativeBase.Container':{
    'NativeBase.Body': {
      flexDirection: 'row',
      alignItems: 'stretch',
      alignContent: 'stretch',
      'NativeBase.Left': {
        flex: 0,
        paddingHorizontal: variables.contentPadding,
        backgroundColor: variables.brandLight,
        alignSelf: 'stretch',
      },
      'NativeBase.Content': {
        paddingHorizontal: variables.contentPadding,
        alignSelf: 'center',
      },
    },
  }
});

export const styleRule = (variables = variable) => ({
	[STYLE_NAME]: generateStyle(variables)
});
