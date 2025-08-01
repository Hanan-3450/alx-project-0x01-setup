import React from "react";
import { UserProps } from "../../interfaces";

interface Props {
  user: UserProps;
}

const UserCard: React.FC<Props> = ({ user }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-md mb-4">
      <h2 className="text-xl font-bold">
        {user.name} ({user.username})
      </h2>
      <p className="text-sm text-gray-600">📧 {user.email}</p>
      <p className="text-sm">📞 {user.phone}</p>
      <p className="text-sm">🌐 {user.website}</p>
      <p className="text-sm font-semibold mt-2">🏢 {user.company.name}</p>
      <p className="text-sm italic">"{user.company.catchPhrase}"</p>
      <p className="text-sm">
        📍 {user.address.street}, {user.address.city}
      </p>
    </div>
  );
};

export default UserCard;
