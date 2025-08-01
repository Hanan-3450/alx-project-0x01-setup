import React from "react";
import { UserProps } from "../../interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-md mb-4">
      <h2 className="text-xl font-bold">
        {name} ({username})
      </h2>
      <p className="text-sm text-gray-600">📧 {email}</p>
      <p className="text-sm">📞 {phone}</p>
      <p className="text-sm">🌐 {website}</p>
      <p className="text-sm font-semibold mt-2">🏢 {company.name}</p>
      <p className="text-sm italic">"{company.catchPhrase}"</p>
      <p className="text-sm">
        📍 {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
