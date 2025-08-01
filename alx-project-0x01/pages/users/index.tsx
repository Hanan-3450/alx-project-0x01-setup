import Header from "../../components/layout/Header"; // for posts and users pages

const UsersPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Users Page</h1>
        {/* Users will go here */}
      </main>
    </div>
  );
};

export default UsersPage;
