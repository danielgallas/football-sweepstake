import React from "react";
import LogoutButton from "../components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

function Dashboard() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    isAuthenticated && (
      <>
        <div>You are logged in!</div>
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.given_name}</p>
          <p>{user.family_name}</p>
          <p>{user.nickname}</p>
          <p>{user.locale}</p>
          <p>{user.updated_at}</p>
          <p>{user.email_verified}</p>
          <p>{user.sub}</p>
        </div>
        <div>
          <LogoutButton />
        </div>
      </>
    )
  );
}

export default Dashboard;
