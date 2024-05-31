import React, { useEffect } from "react"
import animalCares from "./animalcares.mock"
import "./styled.css"

const AnimalCareTable = () => {
    if (window.PagedPolyfill) {
      window.PagedPolyfill.preview()
    }

    const interval = setInterval(() => {
      if (window.PagedPolyfill.chunker.rendered === true) {
        window.print()
        clearInterval(interval)
      }
    }, 1000)
  return (
    <div className='content'>
      <table border='1' borderCollapse='collapse'>
        <thead>
          <tr>
            <th>Animal</th>
            <th>Food</th>
            <th>Exercise</th>
            <th>Grooming</th>
          </tr>
        </thead>
        <tbody>
          {animalCares.map(care => (
            <tr key={care.id}>
              <td>{care.animal}</td>
              <td>{care.food}</td>
              <td>{care.exercise}</td>
              <td>{care.grooming}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AnimalCareTable
