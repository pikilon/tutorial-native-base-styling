import variable from "../variables/platform";
import { styleRule as myApp } from '../../MyApp.style.js';

export const customComponents = (variables = variable) => ({
	...myApp(variables)
});
