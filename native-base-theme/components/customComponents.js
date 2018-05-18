import variable from "../variables/platform";
import { styleRule as myComponent } from '../../MyComponent.style.js';

export const customComponents = (variables = variable) => ({
	...myComponent(variables)
});
