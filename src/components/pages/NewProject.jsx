import React from 'react'
import { useHistory } from 'react-router-dom'
import ProjectForm from '../project/ProjectForm'

import styles from './NewProject.module.css'

export default props => {
    const history = useHistory()

    function createPost(project) {

        //Initialize costs and services
        project.costs = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                //redirect
                history.push('/projects', {message: 'Project Created!'})
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Create Project</h1>
            <p>Create your project and then create the services</p>
            <ProjectForm handleSubmit={createPost} btnText="Create a project" />
        </div>
    )
}
