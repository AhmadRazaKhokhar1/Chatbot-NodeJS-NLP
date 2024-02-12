# es6-class-prototype

> get prototype from es6 class, like old way

`npm install es6-class-prototype`

## demo

```ts
import classPrototype from 'es6-class-prototype';

class A
{
	split()
	{
		return true;
	}
}

console.log(A.prototype);
// => A {}
console.log(classPrototype(A));
// => A { constructor: [Function: A], split: [Function: split] }

```
