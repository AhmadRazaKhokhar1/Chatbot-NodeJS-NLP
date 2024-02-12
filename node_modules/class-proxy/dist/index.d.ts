/**
 * Created by user on 2018/2/11/011.
 */
/**
 * The Class Proxy is used to define custom behavior for fundamental operations
 * (e.g. property lookup, assignment, enumeration, function invocation, etc).
 */
export declare function createClassProxy<T>(target: IClassProxyStatic<T>, handler: IClassProxyHandler): IClassProxyStatic<T>;
/**
 * try skip type check version
 * @param target
 * @param {IClassProxyHandler} handler
 * @returns {T}
 */
export declare function createClassProxy2<T>(target: any, handler: IClassProxyHandler): T;
export interface IClassProxyStatic<T> {
    new (...argv: any[]): T;
}
export interface IClassProxyHandler {
    /**
     * A trap for getting property values.
     * @param target
     * @param prop
     * @param receiver
     */
    get?(target: any, prop: any, receiver?: any): any;
    /**
     * A trap for setting property values.
     * @param target
     * @param property
     * @param value
     * @param receiver
     * @returns {boolean}
     */
    set?(target: any, property: any, value: any, receiver?: any): boolean;
    /**
     * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
     * @param target
     * @returns {string[]}
     */
    ownKeys?(target: any): string[];
    getOwnPropertyDescriptor?(target: any, prop: any): PropertyDescriptor & {
        value?: boolean;
        writable?: boolean;
        get?<T>(): T;
        set?(value: any): void;
        configurable?: boolean;
        enumerable?: boolean;
    };
    /**
     * A trap for the new operator.
     * @param target
     * @param {any[]} args
     * @returns {T}
     */
    construct?<T>(target: any, args?: any[]): T;
    /**
     * A trap for Object.getPrototypeOf.
     * @param target
     */
    getPrototypeOf?(target: any): any;
    /**
     * A trap for Object.setPrototypeOf.
     * @param target
     * @param prototype
     * @returns {boolean}
     */
    setPrototypeOf?(target: any, prototype: any): boolean;
    /**
     * A trap for Object.isExtensible.
     * @param target
     * @returns {boolean}
     */
    isExtensible?(target: any): boolean;
    /**
     * A trap for Object.preventExtensions.
     * @param target
     * @returns {boolean}
     */
    preventExtensions?(target: any): boolean;
    /**
     * A trap for Object.getOwnPropertyDescriptor.
     * @param target
     * @param key
     * @param descriptor
     * @returns {boolean}
     */
    defineProperty?(target: any, key: any, descriptor: PropertyDescriptor): boolean;
    /**
     * A trap for the in operator.
     * @param target
     * @param prop
     * @returns {boolean}
     */
    has?(target: any, prop: any): boolean;
    /**
     * A trap for the delete operator.
     * @param target
     * @param property
     * @returns {boolean}
     */
    deleteProperty?(target: any, property: any): boolean;
    /**
     * A trap for a function call.
     * @param target
     * @param thisArg
     * @param {any[]} argumentsList
     */
    apply?(target: any, thisArg: any, argumentsList?: any[]): any;
}
export default createClassProxy;
