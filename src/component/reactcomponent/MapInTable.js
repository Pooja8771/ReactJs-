import React from 'react'

function MapInTable() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Smith</td>
            <td>25</td>
            <td>john.smith@example.com</td>
          </tr>
          <tr>
            <td>Jane Doe</td>
            <td>30</td>
            <td>jane.doe@example.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default MapInTable
