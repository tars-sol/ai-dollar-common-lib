"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.n18 = n18;
const ethers_1 = require("ethers");
function n18(amount) {
    return (0, ethers_1.parseUnits)(amount.replace(/_/g, ''), 'ether');
}
//# sourceMappingURL=numbers.js.map