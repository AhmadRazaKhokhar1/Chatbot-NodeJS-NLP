/**
 * Created by user on 2018/4/10/010.
 */
/// <reference types="node" />
import { ReadStream as fsReadStream, PathLike } from "fs";
import { IOptionsStreamPipe, IPipe } from './index';
export declare type IOptionsFsCreateReadStream = {
    flags?: string;
    encoding?: string;
    fd?: number;
    mode?: number;
    autoClose?: boolean;
    start?: number;
    end?: number;
    highWaterMark?: number;
};
export declare class ReadStream extends fsReadStream {
    path: string;
    cwd: string;
    constructor(file: PathLike, ...argv: any[]);
    pipe<T extends NodeJS.WritableStream>(destination: T, options?: IOptionsStreamPipe): IPipe<this & ReadStream & fsReadStream, T>;
    static createReadStream(file: PathLike, options?: IOptionsFsCreateReadStream, ...argv: any[]): ReadStream & fsReadStream;
}
export declare const createReadStream: typeof ReadStream.createReadStream;
export default createReadStream;
