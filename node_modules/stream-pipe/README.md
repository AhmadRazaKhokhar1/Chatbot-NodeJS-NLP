# stream-pipe

> add stream.pipeFrom

## API

### pipe

same as [`readable.pipe(destination, options)`](https://nodejs.org/api/stream.html#stream_readable_pipe_destination_options)

```ts
import pipe from 'stream-pipe';

pipe(srcStream, destStream) // => destStream with pipeFrom = srcStream
```

### createReadStream

same as [`fs.createReadStream(path, options)`](https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options)


```ts
import createReadStream, { ReadStream } from 'stream-pipe/fs';
```

## demo

```ts
import * as through2 from 'through2';
import createReadStream from 'stream-pipe/fs';

let file = '../.gitignore';

createReadStream(file).pipe(through2.obj(function (chunk, enc, cb)
{
	console.log(this.pipeFrom.path);
	console.log(this.pipeFrom.bytesRead);

	this.push(chunk);
	cb();
}));
```
