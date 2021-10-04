import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router' 

import styles from './Project.module.css'

export default () => {
    const { id } = useParams()
    const [project, setProject] = useState([])

    useEffect(() => {

        fetch(`http://localhost:5000/projects/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            setProject(data)
        })
        .catch(err => console.log(err))

    }, [id])

    return (
        <p>{project.name}</p>
    )
}