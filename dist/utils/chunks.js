"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitChunks = splitChunks;
exports.runChunks = runChunks;
function* splitChunks(array, chunkSize) {
    array = [...array];
    while (array.length)
        yield array.splice(0, chunkSize);
}
async function runChunks(array, chunkSize, job) {
    for (const chunk of splitChunks(array, chunkSize))
        await job(chunk);
}
//# sourceMappingURL=chunks.js.map