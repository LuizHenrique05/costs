import React from 'react'

import styles from './Submit.module.css'

export default ({ text }) => 
    <div>
        <button className={styles.btn}>{text}</button>
    </div>