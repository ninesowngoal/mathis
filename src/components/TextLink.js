import React from 'react'
import { useNavigate } from 'react-router-dom'

const TextLink = ({text, to, className}) => {
    const navigate = useNavigate();
  return (
    <div className={`text-link ${className}`} onClick={() => navigate(to)}>
        {text}</div>
  )
}

export default TextLink