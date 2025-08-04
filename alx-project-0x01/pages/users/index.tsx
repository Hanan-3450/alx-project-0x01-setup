import React, { useState } from "react";
import UserModal from "../../components/common/UserModal";
import { UserData } from "../../interfaces";

const UsersPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState<UserData[]>([]);

  const handleAddUser = (newUser: UserData) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Users</h1>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          Add User
        </button>
      </div>

      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="p-4 bg-white shadow rounded">
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Company:</strong> {user.company.name}
            </p>
          </li>
        ))}
      </ul>

      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddUser}
      />
    </div>
  );
};

export default UsersPage;
