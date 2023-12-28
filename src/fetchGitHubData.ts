export async function fetchGitHubData(repos: Array<string>): Promise<string> {
    const owner = "Veeresh-R-G";
  
    const list = await Promise.all(
      repos.map(async (repo) => {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
        
        // console.log(response);
        
        
        if (!response.ok) {
          throw new Error(` ${owner}/${repo} not found. Kindy review your list of repositories.`);
        }
        const data = await response.json();
  
        const {
          html_url: url,
          full_name: name,
          description: desc
        } = data;
  
        return `<li><a href=${url} target="_blank" rel="noopener noreferrer">${name}</a> : ${desc}</li>`;
      })
    );
  
    return `<ul>${list.join("")}\n<li>More coming soon :).</li>\n</ul>`;
}


  