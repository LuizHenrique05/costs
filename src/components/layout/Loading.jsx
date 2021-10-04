import React from 'react'
import loading from '../../img/loading.svg'

import styles from './Loading.module.css'

export default () => {
    return (
        <div className={styles.loader_container}>
            <img className={styles.loader} src={loading} alt="Loading" />
        </div>
    )
}