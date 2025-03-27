import { useEffect, useState } from "react";
import { githubRequest } from "../utils";

const UserRepositories = ({ userDetails }) => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (Object.hasOwn(userDetails, 'repos_url')) {
        const response = await githubRequest(userDetails.repos_url);
        console.log(response);
        setRepositories(response);
      } else {
        setRepositories([]);
      }
    };
    fetchData();
  }, [userDetails]);

  return(
    <div className="flex flex-col gap-3">
      {repositories.map((repository) => (
        <div>
          <a href={repository.html_url}>
            <p>{repository.name}</p>
          </a>
          <div className="flex gap-3">
            <p>{repository.watchers_count} watchers</p>
            <span>-</span>
            <p>{repository.stargazers_count} stars</p>
            <span>-</span>
            <p>{repository.open_issues} open issues</p>
            <span>-</span>
            <p>{repository.forks} forks</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default UserRepositories;
