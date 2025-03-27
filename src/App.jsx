import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import Layout from "./components/Layout"
import UserList from "./components/UserList"
import { githubRequest } from './utils';
import UserDetails from './components/UserDetails';

function App() {
  const [searchedValue, setSearchedValue] = useState('');
  const [debouncedSearchedValue] = useDebounce(searchedValue, 1000);
  const [users, setUsers] = useState({});
  const [selectedUser, setSelectedUser] = useState(null);

  const userList = <UserList {...{setSelectedUser, users: users.items}} />;
  const userDetails = <UserDetails {...{selectedUser, setSelectedUser}} />

  useEffect(() => {
    const updateUserList = async() => {
      if (debouncedSearchedValue === '') {
        return setUsers({});
      }

      const url = `https://api.github.com/search/users?q=${debouncedSearchedValue}`;
      const response = await githubRequest(url);
      setUsers(response);
    }
    updateUserList();
  }, [debouncedSearchedValue]);

  return (
    <>
      <Layout {...{setSearchedValue, selectedUser, results: users.total_count}}>
        { selectedUser ? userDetails : userList }
      </Layout>
    </>
  )
}

export default App
