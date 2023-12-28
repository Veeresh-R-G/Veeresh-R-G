import * as fs from "fs";
const md = require("markdown-it")({
  // html: true, // Enable HTML tags in source
  // breaks: true, // Convert '\n' in paragraphs into <br>
  // linkify: true // Autoconvert URL-like text to links
}).enable(["image"])
;

import { fetchGitHubData } from "./fetchGitHubData";
import fetchHarveyQuote from "./harvey-quotes";
import { general, codingPlatform } from "./helpers";


const codingPlatforms = {
  leetcode: "https://img.shields.io/badge/-LeetCode-FFA116?style=for-the-badge&logo=LeetCode&logoColor=black",
  geeksforgeeks: "https://img.shields.io/badge/GeeksforGeeks-298D46?style=for-the-badge&logo=geeksforgeeks&logoColor=white"
}

const languages = [
  "https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white",
  "https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white",
  "https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white",
  "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E",
  "https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue",
  "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
]

const ORMs = [
  "https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"
]

const yetToAdd = [
  "https://img.shields.io/badge/Apache_Spark-FFFFFF?style=for-the-badge&logo=apachespark&logoColor=#E35A16",
]

const libraries_frameworks = [
  "https://img.shields.io/badge/Ansible-000000?style=for-the-badge&logo=ansible&logoColor=white",
  "https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white",
  "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green",
  "https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white",
  "https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black",
  "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white",
  "https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=GitHub%20Pages&logoColor=white",
  "https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white",
  "https://img.shields.io/badge/kubernetes-326ce5.svg?&style=for-the-badge&logo=kubernetes&logoColor=white",
  "https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white",
  "https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white",
  "https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white",
  "https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
  "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white",
  "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
  "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
  "https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E",
]

const cloud_tech = [
  "https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white",
  "https://img.shields.io/badge/microsoft%20azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white",
  "https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white",
  "https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white",
  "https://img.shields.io/badge/Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white",
  "https://img.shields.io/badge/Pulumi-8A3391?style=for-the-badge&logo=pulumi&logoColor=white",
  "https://img.shields.io/badge/Appwrite-F02E65?style=for-the-badge&logo=Appwrite&logoColor=black"


]

const databases = [
  "https://img.shields.io/badge/Amazon%20DynamoDB-4053D6?style=for-the-badge&logo=Amazon%20DynamoDB&logoColor=white",
  "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
  "https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white",
  "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white",
  "https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white",
  "https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white",
  "https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white"
]

const currentlyLearning = ["https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white",
"https://img.shields.io/badge/Shell_Script-121011?style=for-the-badge&logo=gnu-bash&logoColor=white",
]

const tools = ["https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
"https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white",
"https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white",
"https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white"]

const githubUsername = "Veeresh-R-G";
const twitterUrl = "https://twitter.com/Veeresh_11";
const linkedinUrl = "https://www.linkedin.com/in/veeresh-r-g-b0bab7135/";

async function generateMarkdown() {
//   const websiteBadge = `[![Website Badge](https://img.shields.io/badge/-Website-3B7EBF?style=for-the-badge&logo=amp&logoColor=white)](${websiteUrl})`;

  const linkedinBadge = `[![Linkedin Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](${linkedinUrl})`;
  const twitterBadge = `[![Twitter Badge](https://img.shields.io/badge/-@Veeresh-3B7EBF?style=for-the-badge&logo=x&logoColor=white)](${twitterUrl})`;

  const profileCountBadge = `![Profile Views Count Badge](https://komarev.com/ghpvc/?username=${githubUsername}&style=for-the-badge)`;

  // const githubStatsCardDark = `[![GitHub-Stats-Card-Dark](https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&hide_border=true&include_all_commits=true&card_width=600&custom_title=GitHub%20Open%20Source%20Stats&title_color=3B7EBF&text_color=FFF&icon_color=3B7EBF&hide=contribs&show=reviews,prs_merged,prs_merged_percentage&theme=transparent#gh-dark-mode-only)](https://github.com/${githubUsername}/${githubUsername}#gh-dark-mode-only)`;
  // const githubStatsCardLight = `[![GitHub-Stats-Card-Light](https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&hide_border=true&include_all_commits=true&card_width=600&custom_title=GitHub%20Open%20Source%20Stats&title_color=3B7EBF&text_color=474A4E&icon_color=3B7EBF&hide=contribs&show=reviews,prs_merged,prs_merged_percentage&theme=transparent#gh-light-mode-only)](https://github.com/${githubUsername}/${githubUsername}#gh-light-mode-only)`;

  const markdownText = `
  ---\n

  ![HI](https://private-user-images.githubusercontent.com/74038190/240304586-d48893bd-0757-481c-8d7e-ba3e163feae7.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDM3NzkyMTUsIm5iZiI6MTcwMzc3ODkxNSwicGF0aCI6Ii83NDAzODE5MC8yNDAzMDQ1ODYtZDQ4ODkzYmQtMDc1Ny00ODFjLThkN2UtYmEzZTE2M2ZlYWU3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMjglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjI4VDE1NTUxNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTk5ZGI3MDY1ZWFiNTNjNmM5OTFlNTZjNDcwYTEwYjczYzM1MDFkZDAxZTk1N2NmZGUyZTNjMzI0NzI3MWIxYWUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.vPY4aRxhALmkjhi1pd5mZkVEAYtB8Sfckz9V7VuCNfw)
  # Hello World, I am Veeresh R G 👋
  

  ## 👨‍💻 Languages
  ${general(languages)}
  ---

  ## 🧰 Libraries and Frameworks
  ${general(libraries_frameworks)}
  ---

  ## 🗄️ Databases
  ${general(databases)}
  ---

  ## 📡 Cloud Tech
  ${general(cloud_tech)}
  ---

  ## 📡 ORMs
  ${general(ORMs)}
  ---

  ## 🛠️ Tools
  ${general(tools)}
  ---

  ## 📚 Currently Learning
  ${general(currentlyLearning)}



  ## 🏆 GitHub Stats

  [![My GitHub Stats](https://github-readme-stats.vercel.app/api/?username=Veeresh-R-G&count_private=true&theme=vue-dark&hide_border=true&showicons=true)]()
  
  [![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=Veeresh-R-G&layout=compact&show_icons=true&theme=vue-dark&hide_border=true)](https://github.com/DenverCoder1/github-readme-streak-stats)
  
  [![GitHub Streak](https://streak-stats.demolab.com?user=Veeresh-R-G&theme=submarine-flowers&border=67FF95)](https://git.io/streak-stats) 
  [![GitHub Trends SVG](https://api.githubtrends.io/user/svg/Veeresh-R-G/langs)](https://githubtrends.io)

  ---


  ## <> Coding platforms
  ${codingPlatform(codingPlatforms)}

  > Enjoy a Harvey Specter Quote ➡️ ${await fetchHarveyQuote()}\n
  ---
  
  ### Currently Working ➡️ ${general(['https://img.shields.io/badge/CISCO-1BA0D7?style=for-the-badge&logo=cisco&logoColor=white'])}
  

  \n ${linkedinBadge}  ${twitterBadge}  ${profileCountBadge} [![Strava Badge](badge.svg)](https://www.strava.com/athletes/106308092)
  \n

  > PS: This README is auto generated using a Node.js script
  `;

  const result = md.render(markdownText);

  fs.writeFile("README.md", result, (error) => {
    if (error) throw new Error(`Something went wrong: ${error}.`);
    console.log(`✅ README.md file was succesfully generated.`);
  });
}

generateMarkdown();
