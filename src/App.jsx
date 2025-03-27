import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import Layout from "./components/Layout"
import UserList from "./components/UserList"
import { githubRequest } from './utils';

function App() {
  const [searchedValue, setSearchedValue] = useState('');
  const [debouncedSearchedValue] = useDebounce(searchedValue, 1000);
  const [users, setUsers] = useState({});

  useEffect(() => {
    const updateUserList = async() => {
      if (debouncedSearchedValue === '') {
        return setUsers({});
      }

      const url = `https://api.github.com/search/users?q=${debouncedSearchedValue}`;
      const response = await githubRequest(url);
      setUsers(response);
      console.log(response);
    }
    updateUserList();
  }, [debouncedSearchedValue]);

  return (
    <>
      <Layout {...{setSearchedValue, results: users.total_count}}>
        <UserList users={users.items} />
      </Layout>
    </>
  )
}

export default App
