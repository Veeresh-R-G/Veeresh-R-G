"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.codingPlatform = exports.general = void 0;
const general = (array) => {
    // Format for images : ![python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
    const result = array.map((item, index) => ` ![${index}](${item}) `).join("");
    return result;
};
exports.general = general;
// [![LeetCode](https://img.shields.io/badge/-LeetCode-FFA116?style=for-the-badge&logo=LeetCode&logoColor=black)](https://leetcode.com/Veeresh_1104/)
const codingPlatform = (R) => {
    // Format : [![Linkedin Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](${linkedinUrl})
    const result = Object.entries(R).map(([key, value]) => ` [![${key}](${value[0]})](${value[1]}) `).join("");
    return result;
};
exports.codingPlatform = codingPlatform;
