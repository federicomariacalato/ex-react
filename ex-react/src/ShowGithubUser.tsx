import { GithubUser } from "./GithubUser"

type ShowGithubUserProps = {
    username: string
}

export function ShowGithubUser({username}: ShowGithubUserProps) {
    return (
        <GithubUser username={username}/>
    )
}