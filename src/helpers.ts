export const general = (array: string[]) => {

    // Format for images : ![python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
    
    const result: string = array.map((item,index) => ` ![${index}](${item}) `).join("");
    return result;
}



export const codingPlatform = (R: Record<string, string>) => {
// Format : [![Linkedin Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](${linkedinUrl})
    const result: string = Object.entries(R).map(([key,value]) => ` [![${key}-Badge](${value})](${key}) `).join("");
    return result;
}