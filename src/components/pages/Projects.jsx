import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import Loading from '../layout/Loading'
import Message from '../layout/Message'
import ProjectCard from '../project/ProjectCard'

import styles from './Projects.module.css'

export default props => {
    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projectsMessage, setProjectsMessage] = useState('')

    const location = useLocation()
    let message = ''
    if(location.state)
        message = location.state.message

    useEffect(() => {

        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            setProjects(data)
            setRemoveLoading(true)
        })
        .catch(err => console.log(err))
    }, [])

    function removeProjects(id) {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(() => {
            setProjects(projects.filter((project) => project.id !== id))
            setProjectsMessage('Project successfully removed!')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Projects</h1>
                <LinkButton to="/newproject" text="New project" />
            </div>
            
            {message && (
                <Message msg={message} type="success" />
            )}
            {projectsMessage && (
                <Message msg={projectsMessage} type="success" />
            )}
            <Container customClass="start">
                {projects.length > 0 && 
                    projects.map((project) => (
                        <ProjectCard id={project.id} name={project.name} budget={project.budget} category={project.category.name} key={project.id} handleRemove={removeProjects} />
                ))}
                {!removeLoading && <Loading />}
                {removeLoading && projects.length === 0 && (
                    <p>No projects registered yet.</p>
                )}
            </Container>
        </div>
    )
}
    
