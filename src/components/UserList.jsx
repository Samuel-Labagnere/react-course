const UserList = ({ users = [] }) => {
  return(
    <ul className="grid grid-cols-4 gap-3">
      {users.map((user) => (
        <li key={user.id} className="flex flex-col items-center">
          <img src={user.avatar_url} />
          <p>&lt;{user.login}&gt;</p>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
