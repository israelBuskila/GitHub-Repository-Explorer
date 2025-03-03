
import { getRepo } from '@/services/repo';
import Repository from '@/types/repo';
import Contributor from '@/types/repo';



interface RepoDetailsPage{ 
    params: {
        userName: string,
        repoName: string
    }
}

export default async function RepoDetails (props: RepoDetailsPage)  {
    const {userName, repoName} = props.params
    const repo = await getRepo(userName, repoName)

    return (<div></div>)}