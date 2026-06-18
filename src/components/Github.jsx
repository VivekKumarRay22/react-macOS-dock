import React from 'react'
import githubData from '../assets/github.json'
import "./github.scss"
import MacWindows from './windows/MacWindows'


const GitCard = ({ data = { id: 1, img: "", title: "", tags: [], repoLink: "", demoLink: "" } }) => {
    return <div className="card">
        <img src={data.img} alt="" />
        <h1>{data.title}</h1>
        <p className='description'>{data.description} </p>
        <div className="tags">
            {data.tags.map(tags => <p className='tag'>  {tags}  </p>)
            }
        </div>
        <div className="urls">
            <a href={data.repoLink}>repoLink</a>
            {data.demoLink && <a href={data.demoLink}>demoLink</a>}
        </div>
    </div>

}


const Github = ({ windowName, setWindowsState }) => {


    return (
        <MacWindows windowName={windowName} setWindowsState={setWindowsState} >
            <div className="cards">
                {githubData.map(project => {
                    return <GitCard data={project} />
                })}
            </div>
        </MacWindows>

    )
}

export default Github