import React from 'react'
import styles from './Container.module.css'

export default props =>
    <div className={`${styles.container} ${styles[props.customClass]}`}>{props.children}</div>