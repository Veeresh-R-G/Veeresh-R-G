export const general = (array: string[]) => {

    // Format for images : ![python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
    
    const result: string = array.map((item,index) => ` ![${index}](${item}) `).join("");
    return result;
}

export const codingPlatform = (R: Record<string, string>) => {
    // Format for images : ![python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
    const result: string = Object.entries(R).map(([key,value]) => ` ![${key}](${value}) `).join("");
    return result;
}