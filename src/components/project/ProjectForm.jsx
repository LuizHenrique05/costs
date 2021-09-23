import React, { useState, useEffect } from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/Submit'

import styles from './ProjectForm.module.css'

export default ({ handleSubmit, btnText, projectData }) => {
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    function handleCategory(e) {
        setProject({
            ...project, category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            }
        })
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input type="text" text="Project Name" name="name" placeholder="project's name" handleOnChange={handleChange} value={project.name ? project.name : ''} />
            <Input type="number" text="Project Budget" name="budget" placeholder="project's budget" handleOnChange={handleChange} value={project.budget ? project.budget : ''} />
            <Select text="Select category" name="category_id" options={categories} handleOnChange={handleCategory} value={project.category ? project.category.id : ''} />
            <Submit text={btnText} />
        </form>
    )
}
