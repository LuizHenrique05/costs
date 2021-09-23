import React from 'react'
import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

export default props => 
    <section className={styles.home_container}>
        <h1>Welcome to <span>Costs</span></h1>
        <p>Start to manage your projects now!</p>
        <LinkButton to="/newproject" text="Create project" />
        <img src={savings} alt="costs" />
    </section>