import React from "react";

const Home: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Welcome to ALX Project</h1>
      <p className="mt-4 text-gray-600">
        Navigate to /users or /posts to view the pages.
      </p>
    </div>
  );
};

export default Home;
