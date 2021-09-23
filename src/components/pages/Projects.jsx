import React from 'react'
import { useLocation } from 'react-router-dom'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import Message from '../layout/Message'

import styles from './Projects.module.css'

export default props => {

    const location = useLocation()
    let message = ''
    if(location.state)
        message = location.state.message

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Projects</h1>
                <LinkButton to="/newproject" text="New project" />
            </div>
            
            {message && (
                <Message msg={message} type="success" />
            )}
            <Container customClass="start">
                <p>projects</p>
            </Container>
        </div>
    )
}
    
