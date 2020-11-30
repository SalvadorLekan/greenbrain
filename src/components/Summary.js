import React from 'react'

function Summary({link = "/", color = "green", number, note}) {
    return (
        <a className="text-center block py-4" href={link}>
            <p className={`text-7xl text-${color}-400`}>{number}</p>
            <p className="text-lg">{note}</p>
        </a>
    )
}

export default Summary
