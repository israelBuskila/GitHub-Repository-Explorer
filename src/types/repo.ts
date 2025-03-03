
export default interface Repository {
    id:string;
    name: string;
    description: string;
    language: string;
    stargazers_count: number;
    updated_at: string;
    html_url: string;
}


export default interface Contributor {
    login: string;
    avatar_url: string;
    html_url: string;
    contributions: number;
}