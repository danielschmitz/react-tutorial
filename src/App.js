import React from 'react'
import Table from './table'

export default function App() {

  const characters = [
    {
      name: 'Charlie',
      job: 'Janitor',
    },
    {
      name: 'Mac',
      job: 'Bouncer',
    },
    {
      name: 'Dee',
      job: 'Aspring actress',
    },
    {
      name: 'Dennis',
      job: 'Bartender',
    },
  ]

  return (
    <div class="container">
      <h1>Hello, React!</h1>
      <Table characterData={characters} />
    </div>
  )
}
