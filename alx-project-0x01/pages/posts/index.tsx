// pages/posts/index.tsx
import Header from "../../components/layout/Header"; // for posts and users pages


const PostsPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Posts Page</h1>
        {/* Posts will go here */}
      </main>
    </div>
  );
};

export default PostsPage;
