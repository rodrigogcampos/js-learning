import { useState } from 'react'
import './Field.css'

const Field = ({ type = 'text', label, value, required, placeholder, onAlter}) => {

    const onType = (event) => {
        onAlter(event.target.value)
    }

    return (
        <div className={`field field-${type}`}>
            <label>{label}</label>
            <input type={type} value={value} onChange={onType} required={required} placeholder={placeholder} />
        </div>
    )
}

export default Field