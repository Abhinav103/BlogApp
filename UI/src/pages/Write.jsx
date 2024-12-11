import { useUser } from "@clerk/clerk-react";
import { FileInput, Select, Textarea } from "flowbite-react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { useState } from "react";
import {Link} from "react-router-dom"

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [title,settitle] = useState();
  const [category,setcategory] = useState("general");
  const [description, setdescription] = useState();


    console.log(description)
    
  if (!isLoaded) return null;

  if (!isSignedIn) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white shadow-lg p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Access Denied</h2>
          <p className="mb-6">
            You need to log in or create an account to access this page.
          </p>
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Log In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-10 px-4 md:px-0">
      <h2 className="text-2xl font-bold mb-6">Create A New Post</h2>
      <div className="bg-white shadow-lg rounded-lg p-8">
        <div className="mb-6">
          <FileInput id="file" helperText="Upload An Image" />
        </div>
        <input
          className="w-full border-gray-300 rounded-lg px-4 py-3 mb-6 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          type="text"
          placeholder="My Awesome Story"
          onChange={(e) => {
            settitle(e.target.value)
          }}
        />
        <div className="mb-6">
          <span className="text-gray-700 font-medium mr-4">Choose A Category</span>
          <Select id="category" required className="w-full" value={category} onChange={(e) => {
            setcategory(e.target.value)
          }}>
            <option value="general">General</option>
            <option value="webDesign">Web Design</option>
            <option value="development">Development</option>
            <option value="seo">Search Engine</option>
            <option value="databases">Databases</option>
            <option value="marketing">Marketing</option>
          </Select>
        </div>
        <Textarea
          id="description"
          className="w-full border-gray-300 rounded-lg px-4 py-3 mb-6 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="A Short Description"
          rows={5}
          onChange={(e) => {
            setdescription(e.target.value)
          }}
        />
        <div className="mb-12">
          <ReactQuill theme="snow" className="bg-white shadow-lg h-[350px]" />
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg">
          Send
        </button>
      </div>
    </div>
  );
};

export default Write;