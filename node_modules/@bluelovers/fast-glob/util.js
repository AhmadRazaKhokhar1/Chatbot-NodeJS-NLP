"use strict";
/**
 * Created by user on 2019/6/27.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Bluebird = require("bluebird");
function promisify(fg, fn = Bluebird.method) {
    // @ts-ignore
    if (typeof fn.resolve === 'function' && typeof fn.method === 'function') {
        // @ts-ignore
        fn = fn.method;
    }
    // @ts-ignore
    else if (fn.promisify) {
        // @ts-ignore
        fn = fn.promisify;
    }
    const FastGlob = fn(fg);
    // @ts-ignore
    Object.assign(FastGlob, fg);
    // @ts-ignore
    delete FastGlob.async;
    // @ts-ignore
    delete FastGlob.default;
    // @ts-ignore
    delete FastGlob.sync;
    // @ts-ignore
    FastGlob.sync = fg.sync;
    // @ts-ignore
    FastGlob.async = FastGlob.default = FastGlob;
    // @ts-ignore
    return FastGlob;
}
exports.promisify = promisify;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHOztBQUVILHFDQUFzQztBQUV0QyxTQUFnQixTQUFTLENBQUMsRUFBeUQsRUFBRSxLQUEyQyxRQUFRLENBQUMsTUFBTTtJQUU5SSxhQUFhO0lBQ2IsSUFBSSxPQUFPLEVBQUUsQ0FBQyxPQUFPLEtBQUssVUFBVSxJQUFJLE9BQU8sRUFBRSxDQUFDLE1BQU0sS0FBSyxVQUFVLEVBQ3ZFO1FBQ0MsYUFBYTtRQUNiLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFBO0tBQ2Q7SUFDRCxhQUFhO1NBQ1IsSUFBSSxFQUFFLENBQUMsU0FBUyxFQUNyQjtRQUNDLGFBQWE7UUFDYixFQUFFLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQTtLQUNqQjtJQUVELE1BQU0sUUFBUSxHQUFJLEVBQTZCLENBQUMsRUFBRSxDQUF1QyxDQUFDO0lBRTFGLGFBQWE7SUFDYixNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUU1QixhQUFhO0lBQ2IsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBQ3RCLGFBQWE7SUFDYixPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUM7SUFDeEIsYUFBYTtJQUNiLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztJQUVyQixhQUFhO0lBQ2IsUUFBUSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBRXhCLGFBQWE7SUFDYixRQUFRLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO0lBRzdDLGFBQWE7SUFDYixPQUFPLFFBQVEsQ0FBQTtBQUNoQixDQUFDO0FBcENELDhCQW9DQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB1c2VyIG9uIDIwMTkvNi8yNy5cbiAqL1xuXG5pbXBvcnQgQmx1ZWJpcmQgPSByZXF1aXJlKCdibHVlYmlyZCcpO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvbWlzaWZ5KGZnOiB0eXBlb2YgaW1wb3J0KCdmYXN0LWdsb2InKSB8IHR5cGVvZiBpbXBvcnQoJy4vaW5kZXgnKSwgZm46IEZ1bmN0aW9uIHwgdHlwZW9mIGltcG9ydCgnYmx1ZWJpcmQnKSA9IEJsdWViaXJkLm1ldGhvZCk6IHR5cGVvZiBpbXBvcnQoJy4vYmx1ZWJpcmQnKVxue1xuXHQvLyBAdHMtaWdub3JlXG5cdGlmICh0eXBlb2YgZm4ucmVzb2x2ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZm4ubWV0aG9kID09PSAnZnVuY3Rpb24nKVxuXHR7XG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdGZuID0gZm4ubWV0aG9kXG5cdH1cblx0Ly8gQHRzLWlnbm9yZVxuXHRlbHNlIGlmIChmbi5wcm9taXNpZnkpXG5cdHtcblx0XHQvLyBAdHMtaWdub3JlXG5cdFx0Zm4gPSBmbi5wcm9taXNpZnlcblx0fVxuXG5cdGNvbnN0IEZhc3RHbG9iID0gKGZuIGFzIHR5cGVvZiBCbHVlYmlyZC5tZXRob2QpKGZnKSBhcyBhbnkgYXMgdHlwZW9mIGltcG9ydCgnLi9ibHVlYmlyZCcpO1xuXG5cdC8vIEB0cy1pZ25vcmVcblx0T2JqZWN0LmFzc2lnbihGYXN0R2xvYiwgZmcpO1xuXG5cdC8vIEB0cy1pZ25vcmVcblx0ZGVsZXRlIEZhc3RHbG9iLmFzeW5jO1xuXHQvLyBAdHMtaWdub3JlXG5cdGRlbGV0ZSBGYXN0R2xvYi5kZWZhdWx0O1xuXHQvLyBAdHMtaWdub3JlXG5cdGRlbGV0ZSBGYXN0R2xvYi5zeW5jO1xuXG5cdC8vIEB0cy1pZ25vcmVcblx0RmFzdEdsb2Iuc3luYyA9IGZnLnN5bmM7XG5cblx0Ly8gQHRzLWlnbm9yZVxuXHRGYXN0R2xvYi5hc3luYyA9IEZhc3RHbG9iLmRlZmF1bHQgPSBGYXN0R2xvYjtcblxuXG5cdC8vIEB0cy1pZ25vcmVcblx0cmV0dXJuIEZhc3RHbG9iXG59XG4iXX0=