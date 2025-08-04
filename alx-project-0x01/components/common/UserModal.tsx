import React, { useState } from "react";
import { UserData, UserModalProps } from "../../interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState<UserData>({
    id: Date.now(), // generate a temporary ID
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Support nested fields like address.street
    const keys = name.split(".");
    const updatedFormData = { ...formData };

    let current: any = updatedFormData;
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;

    setFormData(updatedFormData);
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Add New User</h2>

        {/* Form Fields */}
        <div className="grid grid-cols-1 gap-3">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border p-2 rounded"
            onChange={handleChange}
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="border p-2 rounded"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border p-2 rounded"
            onChange={handleChange}
          />
          <input
            type="text"
            name="address.street"
            placeholder="Street"
            className="border p-2 rounded"
            onChange={handleChange}
          />
          <input
            type="text"
            name="address.city"
            placeholder="City"
            className="border p-2 rounded"
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="border p-2 rounded"
            onChange={handleChange}
          />
          <input
            type="text"
            name="website"
            placeholder="Website"
            className="border p-2 rounded"
            onChange={handleChange}
          />
          <input
            type="text"
            name="company.name"
            placeholder="Company Name"
            className="border p-2 rounded"
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-400 text-white rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
