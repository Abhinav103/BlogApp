import {Link} from "react-router-dom"
import FeaturedPost from "./FeaturedPost";
const Category = () => {
    return (
        <div>
            <div className="hidden  p-3 mt-9 bg-white md:flex rounded-3xl  shadow-md gap-5 text-gray-700">
            <Link to="/posts?cat=allPosts" className="text-white bg-blue-600 p-3 font-bold rounded-full">All Posts</Link>
            <Link to="/posts?cat=development" className="hover:bg-blue-50  p-3 font-bold rounded-full">Development</Link>
            <Link to="/posts?cat=webDesign" className="hover:bg-blue-50 p-3 font-bold rounded-full">Web Desgin</Link>
            <Link to="/posts?cat=dataBases" className="hover:bg-blue-50 p-3 font-bold rounded-full">Databases</Link>
            <Link to="/posts?cat=seo" className="hover:bg-blue-50 p-3 font-bold rounded-full">Search Engine</Link>
            <Link to="/posts?cat=Marketing" className="hover:bg-blue-50 p-3 font-bold rounded-full">Marketing</Link>
            <div className="flex flex-1 flex-wrap items-center">
                <span className="text-gray-800 m-2 p-2 font-semibold">  Search</span>
                <input type='search' className="rounded-full text-gray-500 flex  flex-1  flex-wrap w-[150px]" placeholder="Search For A Posts"/>
            </div>            
            {/* Featured Post section */}
        </div>
            <FeaturedPost/>
        </div>
    )
};

export default Category;
