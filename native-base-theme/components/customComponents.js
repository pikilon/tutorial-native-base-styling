import variable from "../variables/platform";
import { styleRule as myApp } from '../../MyApp.style.js';
import { styleRule as myButton } from  '../../components/MyButton.style';
import { styleRule as HorizontalMenu } from  '../../components/HorizontalMenu.style';

export const customComponents = (variables = variable) => ({
	...myApp(variables),
	...myButton(variables),
	...HorizontalMenu(variables),
});
