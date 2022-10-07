import React, { useState } from 'react';
import { faker } from '@faker-js/faker';

function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = () => {
    const newUser = {
      name: faker.name.fullName(),
      uid: faker.datatype.uuid(),
    };
    setUsers([...users, newUser]);
  };
  const handleRemoveUser = (uid) => {
    const newUsers = users.filter((user) => user.uid !== uid);
    setUsers(newUsers);
  };
  const handleUpdateUser = (uid) => {
    const newUsers = users.map((user) => {
      if (user.uid === uid) {
        return {
          ...user,
          name: faker.name.fullName(),
        };
      }
      return user;
    });
    setUsers(newUsers);
  };

  return (
    <>
      <ul>
        {users.map((user) => (
          // <li onClick={() => handleRemoveUser(user.name)} key={user.uid}>
          //   {user.name}
          // </li>
          <li onClick={() => handleUpdateUser(user.uid)} key={user.uid}>
            {user.name}
          </li>
        ))}
      </ul>
      <button onClick={handleAddUser}>Add Random</button>
    </>
  );
}

export default App;
