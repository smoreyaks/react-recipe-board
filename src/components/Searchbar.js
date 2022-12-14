import React from 'react'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

// Styles

export default function Searchbar() {
const [term, setTerm] = useState('')
const history = useHistory()

const handleSubmit = (e) => {
    e.preventDefault()
    history.push(`/search?q=${term}`)
}

    return (
        <div className="searchbar">
            <form onSubmit={handleSubmit}>
                <input 
                    name="search" 
                    type="text" 
                    id="search" 
                    placeholder="Search Recipes" 
                    onChange={(e) => setTerm(e.target.value)} 
                    required
                />
            </form>
        </div>
    )
}
