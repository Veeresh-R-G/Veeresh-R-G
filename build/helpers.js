"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.codingPlatform = exports.general = void 0;
const general = (array) => {
    // Format for images : ![python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
    const result = array.map((item, index) => ` ![${index}](${item}) `).join("");
    return result;
};
exports.general = general;
const codingPlatform = (R) => {
    // Format for images : ![python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
    const result = Object.entries(R).map(([key, value]) => ` ![${key}](${value}) `).join("");
    return result;
};
exports.codingPlatform = codingPlatform;
