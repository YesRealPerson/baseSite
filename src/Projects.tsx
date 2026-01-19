import { useLoaderData } from "react-router";
import type { projectResponseItem } from "./components/Interfaces";
import { tryFetch } from "./components/Classes";
import Markdown from 'react-markdown'

export async function getProjects() {
    const response = await tryFetch("https://repos.spark952.workers.dev/");
    // const tester = await tryFetch("https://small-violet-f22c.spark952.workers.dev/") // Broken endpoint for error handling
    // await new Promise(resolve => setTimeout(resolve, 5000)); //test loader UNCOMMENT ME
    return {
        "status":response.status, 
        "data": await response.json()
    }
}

export default function Projects() {
    const response = useLoaderData()
    let projectElement = (
        <div>
            Failed to fetch from the Github API with code {response.status}.
        </div>
    )
    if(response.status == 200){
        projectElement = response.data.map((x:projectResponseItem) => (
            <div className="project">
                <a className="animateLink text-2xl" href={x.url}>{x.name}</a>
                <div className="mb-5">
                    {x.langauge}
                </div>
                <div className="ml-3 pl-2 text-gray-800 border-l border-gray-900 font-normal">
                    <Markdown>{x.readme}</Markdown>
                </div>
                <hr className="my-2"/>
            </div>
        ))
    }
    return (
        <div>
            <h1 className='text-4xl'>
                Projects
            </h1>
            <p>
                Below are the "README" files for all of my public GitHub repos, along side links to access them.<br/>
                (You don't get to see the private ones!)<br/>
                I've been coding for decently long time, so naturally, these projects differ greatly in complexity and quality.
            </p>
            <hr className="my-2" />
            {projectElement}
        </div>
    )
}