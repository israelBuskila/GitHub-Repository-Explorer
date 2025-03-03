import axios from "axios"


export async function getAllRepos(userName: string) {
    const res = await axios.get(`https://api.github.com/users/${userName}/repos`
    // , {
    //     headers: {
    //         Authorization: `token ${GITHUB_TOKEN}`
    //     }
    // }
)
    console.log(res)
    return res
}

export async function getRepo(userName: string , repoName: string) {
    const res = await axios.get(`https://api.github.com/repos/${userName}/${repoName}`)
    console.log(res)
}


