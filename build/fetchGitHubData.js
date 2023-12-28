"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchGitHubData = void 0;
function fetchGitHubData(repos) {
    return __awaiter(this, void 0, void 0, function* () {
        const owner = "Veeresh-R-G";
        const list = yield Promise.all(repos.map((repo) => __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`https://api.github.com/repos/${owner}/${repo}`);
            // console.log(response);
            if (!response.ok) {
                throw new Error(` ${owner}/${repo} not found. Kindy review your list of repositories.`);
            }
            const data = yield response.json();
            const { html_url: url, full_name: name, description: desc } = data;
            return `<li><a href=${url} target="_blank" rel="noopener noreferrer">${name}</a> : ${desc}</li>`;
        })));
        return `<ul>${list.join("")}\n<li>More coming soon :).</li>\n</ul>`;
    });
}
exports.fetchGitHubData = fetchGitHubData;
