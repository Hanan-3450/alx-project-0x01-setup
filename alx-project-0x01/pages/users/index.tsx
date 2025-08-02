import React from "react";
import UserCard from "../../components/common/UserCard";
import { UserProps } from "../../interfaces";

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  console.log("Fetched users:", users);

  return (
    <div className="p-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <h1 className="text-3xl font-bold mb-4 col-span-full">User List</h1>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
