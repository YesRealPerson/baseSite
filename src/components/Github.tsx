import { FailedResponse } from "./Classes"
export default async function parseGithubAPI(response: Response | FailedResponse) {
    if (response instanceof FailedResponse){
        return (<></>)
    }
    let events
    let caught = false
    try {
        events = await response.json()
    } catch {
        caught = true
        events = [
            {
                id: 0,
                actor: {
                    "id": 86257013,
                    "login": "YesRealPerson",
                    "display_login": "YesRealPerson",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/YesRealPerson",
                    "avatar_url": "https://avatars.githubusercontent.com/u/86257013?v=4"
                },
                repo: {
                    name: ""
                },
                payload: {
                    commits: [{
                        message: "No recent commits!"
                    }]
                },
                created_at: (new Date()).toISOString()
            }
        ];
    }

    let latestPush = (<>No recent public activity!</>)
    if (!caught) {
        let type = "";
        let repo = "";
        for (let i = 0; i < events.length; i++) {
            let item = events[i];
            try {
                repo = item.repo.name.split("/")[1];
                type = item.type;
                break
            } catch (err) {
                // console.log(err + " Going next! (update)");
            }
        }
        switch (type) {
            case 'CreateEvent':
                latestPush = (
                    <div>
                        Created repo: <a className="animateLink !p-0" href={"https://github.com/yesrealperson/" + repo}>{repo}</a><br />
                    </div>
                )
                break;
            case 'DeleteEvent':
                latestPush = (
                    <div>
                        Deleted repo: <a className="animateLink !p-0" href={"https://github.com/yesrealperson/" + repo}>{repo}</a><br />
                    </div>
                )
                break;
            case 'ForkEvent':
                latestPush = (
                    <div>
                        Forked repo: <a className="animateLink !p-0" href={"https://github.com/yesrealperson/" + repo}>{repo}</a><br />
                    </div>
                )
                break;
            case 'PushEvent':
                latestPush = (
                    <div>
                        Pushed to repo: <a className="animateLink !p-0" href={"https://github.com/yesrealperson/" + repo}>{repo}</a><br />
                    </div>
                )
                break;
            case 'ReleaseEvent':
                latestPush = (
                    <div>
                        Made release for: <a className="animateLink !p-0" href={"https://github.com/yesrealperson/" + repo}>{repo}</a><br />
                    </div>
                )
                break;
        }
    }

    return (
        <div className="flex flex-row items-center">
            <img className="w-30" src={events[0].actor.avatar_url} />
            <div className="ml-5">
                <a href={"https://github.com/" + events[0].actor.login} className="animateLink !p-0">{events[0].actor.display_login}</a>
                {latestPush}
            </div>
        </div>
    )
}