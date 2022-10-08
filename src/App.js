import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './styles.css';

import SearchBox from './components/SearchBox/SearchBox';
import User from './components/User/User';
import EmptyState from './components/EmptyState/EmptyState';

const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetchDataAxios();
    // fetchData();
  }, []);

  const fetchDataAxios = async () => {
    try {
      const { data } = await axios.get('https://randomuser.me/api/?results=10');
      setUsers(data.results);
      setFilteredUsers(data.results);
      console.log(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  // const fetchData = () => {
  //   fetch('https://randomuser.me/api/?results=10')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUsers(data.results);
  //       console.log(data.results);
  //     });
  // };

  const filterUsers = (searchString) => {
    const filtered = users.filter((user) =>
      user.name.last.includes(searchString)
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className='App'>
      <div className='box'>
        <SearchBox handleChange={filterUsers} />
        {filteredUsers.length === 0 ? (
          <EmptyState msg='No Matches' />
        ) : (
          filteredUsers.map((user) => (
            <User key={user.phone} name={user.name.last} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
