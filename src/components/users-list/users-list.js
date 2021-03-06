import React, { useContext, useEffect, useState } from 'react';

import RoomsServiceContext from '../rooms-service-context';
import UsersListItem from '../users-list-item';

const UsersList = () => {
  const [users, setUsers] = useState(null);
  const roomsService = useContext(RoomsServiceContext);

  useEffect(() => {
    roomsService.getUsers().then((data) => {
      setUsers(data);
    })
  }, [roomsService])

  if(!users) {
    return null 
  }

  return (
    <>
    <h2>Список пользователей</h2>
    <ul className="list-group">
      {
        users.map((user) => {
          return (
          <li className="list-group-item">
            <UsersListItem user={user} />
          </li>
          )
        })
      }
    </ul>
    </>
  )
}

export default UsersList;