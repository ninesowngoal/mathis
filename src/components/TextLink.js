import React from 'react'
import { useNavigate } from 'react-router-dom'

const TextLink = ({text, to}) => {
    const navigate = useNavigate();
  return (
    <div className='text' onClick={() => navigate(to)}>
        {text}</div>
  )
}

export default TextLink