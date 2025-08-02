import React from "react";
import { UserProps } from "../../interfaces";

interface UserCardProps {
  user: UserProps;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const { name, email, username, address, phone, website, company } = user;

  return (
    <div className="border rounded-xl p-4 shadow-md bg-white hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-sm text-gray-600 mb-1">Username: {username}</p>
      <p className="text-sm text-gray-600 mb-1">Email: {email}</p>
      <p className="text-sm text-gray-600 mb-1">Phone: {phone}</p>
      <p className="text-sm text-gray-600 mb-1">Website: {website}</p>
      <p className="text-sm text-gray-600 mb-1">
        Address: {address.street}, {address.city}
      </p>
      <p className="text-sm text-gray-600">Company: {company.name}</p>
    </div>
  );
};

export default UserCard;
