/**
 * Created by user on 2018/3/16/016.
 */

import { IClassProxyStatic } from 'class-proxy';
export { IClassProxyStatic } from 'class-proxy';

export function classPrototype<T>(target: IClassProxyStatic<T>, all?: boolean): T
{
	// @ts-ignore
	let desc = Object.getOwnPropertyDescriptors(target.prototype);

	let prototype = Object.keys(desc).reduce(function (a, b)
	{
		if (all || !desc[b].get && !desc[b].set)
		{
			// @ts-ignore
			a[b] = target.prototype[b];
		}

		return a;
	}, {});

	// @ts-ignore
	return Object.assign({}, target.prototype, prototype);
}

export default classPrototype

// @ts-ignore
if (process.env.TSDX_FORMAT !== 'esm')
{
	Object.defineProperty(classPrototype, "__esModule", { value: true });

	Object.defineProperty(classPrototype, 'classPrototype', { value: classPrototype });
	Object.defineProperty(classPrototype, 'default', { value: classPrototype });
}
