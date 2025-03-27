import { useEffect, useState } from "react";
import { githubRequest } from "../utils";

const UserDetails = ({ selectedUser, setSelectedUser }) => {
  const [userDetails, setUserDetails] = useState({});

  const goBack = () => {
    setSelectedUser(null);
  }

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.github.com/users/${selectedUser}`
      const response = await githubRequest(url);
      setUserDetails(response);
    };
    fetchData();
  });

  return(
    <div className="h-full w-full flex flex-col gap-6">
      <button className="btn w-fit" onClick={goBack}>Retour</button>
      <div className="basis-0 grow">
        <div className="w-full grid grid-cols-2 gap-24">
          <div className="flex flex-col gap-3">
            <div>
              <h2 className="text-3xl">{userDetails.name ?? userDetails.login}</h2>
              <a href={userDetails.html_url}>
                <p className="text-xl">&lt;{userDetails.login}&gt;</p>
              </a>
            </div>
            <p>{userDetails.bio}</p>

            <hr />

            <div className="flex justify-evenly">
              <p>{userDetails.followers} followers</p>
              <p>{userDetails.following} follows</p>
              <p>{userDetails.public_repos} repositories</p>
            </div>
          </div>

          <img src={userDetails.avatar_url} />
        </div>
      </div>
    </div>
  )
}

export default UserDetails;

  // avatar_url: string
  // bio: string
  // blog: string
  // collaborators: number
  // company: ?string
  // created_at: string
  // disk_usage: number
  // email: ?string
  // events_url: string
  // followers: number
  // followers_url: string
  // following: number
  // following_url: string
  // gists_url: string
  // gravatar_id: string
  // hireable: ?boolean
  // html_url: string
  // id: number
  // location: ?string
  // login: string
  // name: ?string
  // node_id: string
  // organizations_url: string
  // owned_private_repos: number
  // plan: {name: string, space: number, collaborators: number, private_repos: number}
  // private_gists: number
  // public_gists: number
  // public_repos: number
  // received_events_url: string
  // repos_url: string
  // site_admin: boolean
  // starred_url: string
  // subscriptions_url: string
  // total_private_repos: number
  // twitter_username: ?string
  // two_factor_authentication: boolean
  // type: string
  // updated_at: string
  // url: string
  // user_view_type: string
