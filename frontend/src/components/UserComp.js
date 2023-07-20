import React from 'react'

const UserComp = ({ email, where, to, id }) => {
  return (
    <tr key={id}>
      <th>{id}</th>
      <td>{email}</td>
      <td>{where}</td>
      <td>{to}</td>
    </tr>
  )
}

export default UserComp
