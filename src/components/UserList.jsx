import Spinner from "./Spinner";

const UserList = ({ setSelectedUser, loading, users = [] }) => {
  return(
    <div className="h-full">
      {loading ? <Spinner /> : null}
      <ul className="grid grid-cols-4 gap-3">
        {!loading && users.map((user) => (
          <li
            key={user.id}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setSelectedUser(user.login)}
          >
            <img src={user.avatar_url} className="h-full w-full object-cover" />
            <p>&lt;{user.login}&gt;</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
