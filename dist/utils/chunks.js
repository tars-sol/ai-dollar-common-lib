"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runChunks = exports.splitChunks = void 0;
function* splitChunks(array, chunkSize) {
    array = [...array];
    while (array.length)
        yield array.splice(0, chunkSize);
}
exports.splitChunks = splitChunks;
async function runChunks(array, chunkSize, job) {
    for (const chunk of splitChunks(array, chunkSize))
        await job(chunk);
}
exports.runChunks = runChunks;
//# sourceMappingURL=chunks.js.map