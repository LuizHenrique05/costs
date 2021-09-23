import React from 'react'

import styles from './Input.module.css'

export default ({ type, text, name, placeholder, handleOnChange, value }) =>
    <div className={styles.form_control}>
        <label htmlFor={name}>{text}:</label>
        <input type={type} name={name} id={name} placeholder={placeholder} value={value} onChange={handleOnChange} />
    </div>