import { Breadcrumb } from "flowbite-react";
import Category  from "../components/Category";
import PostList from "../components/PostList";

const HomePage = () => {
  return (
    <div>
      <Breadcrumb
        aria-label="Home Page breadCrumb"
        className="text-white text-4xl mt-8 gap-4"
      >
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#" className="text-blue-800">
          Blog And Articles
        </Breadcrumb.Item>
      </Breadcrumb>
      {/* Introduction Section */}
      <div className="flex items-center mt-3">
        <div>
          <h1 className="text-4xl font-bold mt-2 text-gray-800">
            Unleash Your Creativity with Blog Mint
          </h1>
         <p className="text-lg mt-5">we believe everyone has a story to tell. Whether it's personal reflections or expert advice, our platform makes it easy to publish and share your thoughts with the world. Begin your blogging journey now</p>
        </div>
      </div>
      {/* Main categories */}
      <Category/>
      {/* Featured Posts*/}

      {/* Posts Lists */}
      <div className="text-gray-800 mt-4 text-lg font-mono">
        Recent Posts
        <PostList/>
      </div>

    </div>
    
  );
};

export default HomePage;
