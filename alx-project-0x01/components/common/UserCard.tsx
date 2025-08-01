// components/common/UserCard.tsx

import React from "react";
import { UserProps } from "../../interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-4">
      <h2 className="text-xl font-semibold">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-gray-600">{user.phone}</p>
      <p className="text-blue-500 underline">{user.website}</p>
      <div className="text-sm mt-2">
        <p>
          <strong>Company:</strong> {user.company.name}
        </p>
        <p>
          <strong>Address:</strong> {user.address.city}, {user.address.street}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
