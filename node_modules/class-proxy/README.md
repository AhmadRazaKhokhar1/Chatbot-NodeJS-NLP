# class-proxy

> The Class Proxy is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc).

`npm install class-proxy`

## api

* [MDN: Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
* [index.d.ts](index.d.ts)

## demo

```ts
import createClassProxy from 'class-proxy';
import { createClassProxy } from 'class-proxy';

var createClassProxy = require("class-proxy/node");
```

```ts
import { implementation as URLImpl } from 'whatwg-url/lib/URL-impl';

let URLImplProxy2 = createClassProxy(URLImpl, {
	get(target, name)
	{
		return target[name];
	},
	set(target, prop, value, receiver)
	{
		if (prop == '_query')
		{
			value._url = target;

			console.log(value);
		}

		target[prop] = value;
		return true;
	},
	ownKeys(target): string[]
	{
		return [
			'href',
			'origin',
			'protocol',
			'username',
			'password',
			'host',
			'hostname',
			'port',
			'pathname',
			'search',
			'hash',
			'searchParams',
		];
	},
	getOwnPropertyDescriptor(target, prop)
	{
		return {
			value: target[prop],
			enumerable: this.ownKeys(target).includes(prop),
			configurable: true,
		};
	},
	construct(target, args)
	{
		if (typeof args[0] == 'string')
		{
			return new target([args[0]]);
		}

		return new target(...args);
	}
});
```
