import React from 'react'
import cn from 'classnames'
import './styles.css'

type ClientCausesProps = {
  title?: String,
  causes: String[]
}

export default function ClientCauses({ title, causes }:ClientCausesProps) {
  return (
    <div className="client-causes">
      <p>{title}</p>
      <ol>
        {causes.map((cause, index) => (
          <li key={index}>{cause}</li>
        ))}
      </ol>
    </div>
  )
}