import variable from "../variables/platform";
import { styleRule as myApp } from '../../MyApp.style.js';
import { styleRule as myButton } from  '../../components/MyButton.style';

export const customComponents = (variables = variable) => ({
	...myApp(variables),
	...myButton(variables),
});
