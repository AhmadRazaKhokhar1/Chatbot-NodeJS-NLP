import { ITSArrayListMaybeReadonly } from 'ts-type/lib/type/base';

export declare function sortObjectKeys<T extends Record<any, any>>(object: T, sortFn: IOptions<T>["sort"]): T;
export declare function sortObjectKeys<T extends Record<any, any>>(object: T, keyOrders: IOptions<T>["keys"]): T;
export declare function sortObjectKeys<T extends Record<any, any>>(object: T, options?: Omit<IOptions<T>, "keys" | "onlyKeys"> & {
	keys: IOptions<T>["keys"];
	onlyKeys: true;
}): Partial<T>;
export declare function sortObjectKeys<T extends Record<any, any>>(object: T, options?: Omit<IOptions<T>, "useSource"> & {
	useSource: true;
}): T;
export declare function sortObjectKeys<T extends Record<any, any>>(object: T, options?: IOptions<T>): T;
export interface IOptions<T extends Record<any, any> = Record<any, any>, K extends string = Extract<keyof T, string>> {
	/**
	 * key order
	 */
	keys?: ITSArrayListMaybeReadonly<string | K>;
	/**
	 * return Object only keys
	 * will disable useSource
	 */
	onlyKeys?: boolean;
	/**
	 * sort callback
	 *
	 * @param a
	 * @param b
	 * @returns {any}
	 */
	sort?: (a: string | K, b: string | K) => number;
	/**
	 * return reversed Object
	 */
	desc?: boolean;
	allowNotExists?: boolean;
	/**
	 * return source Object
	 */
	useSource?: boolean;
}

export {
	sortObjectKeys as default,
	sortObjectKeys as sortObject,
};

export {};
