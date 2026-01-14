import { useLoaderData } from "react-router";
import Markdown from 'react-markdown'

export async function getProjects() {
    const response = await fetch("https://repos.spark952.workers.dev/");
    // await new Promise(resolve => setTimeout(resolve, 5000)); //test loader UNCOMMENT ME
    return {
        "status":response.status, 
        "data": await response.json()
    }
}

interface projectResponseItem {
    "name": string,
    "langauge": string,
    "readme": string,
    "url": string
}

export default function Projects() {
    const response = useLoaderData()
    let projectElement = (
        <div>
            Failed to fetch from the Github API<br/><br/> If you would like contact me and attatch the following:<br/>{""+response.status}<br/>{JSON.stringify(response.data)}
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