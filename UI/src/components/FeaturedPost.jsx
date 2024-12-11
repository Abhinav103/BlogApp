import Image from "../components/Image";
import { Link } from "react-router-dom";

const FeaturedPost = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 mt-8">
      {/* first post */}
      <div className="flex-1">
        <Image src="featured1.jpeg" alt="featured Posts" className="rounded-xl h-[300px] w-full object-cover" />
        <div className="mt-3 flex items-center gap-4 text-blue-400 text-sm">
          <span>01.</span>
          <Link to="#" className="font-medium">Web Design</Link>
          <span>2 Days Ago</span>
        </div>
        <Link to="#" className="block text-2xl font-bold text-gray-800 mt-3">
          Title Content for the featured 1 Posts is here
        </Link>
      </div>

      {/* other posts */}
      <div className="flex flex-col md:flex-row gap-8 flex-1">
        <div className="flex-1">
          <Image src="featured2.jpeg" alt="featured Posts" className="rounded-xl h-[200px] w-full object-cover" />
          <div className="mt-3 flex items-center gap-4 text-blue-400 text-sm">
            <span>02.</span>
            <Link to="#" className="font-medium">Web Design</Link>
            <span>2 Days Ago</span>
          </div>
          <Link to="#" className="block text-2xl font-bold text-gray-800 mt-3">
            Title Content for the featured 2 Posts is here
          </Link>
        </div>
        <div className="flex-1">
          <Image src="featured3.jpeg" alt="featured Posts" className="rounded-xl h-[200px] w-full object-cover" />
          <div className="mt-3 flex items-center gap-4 text-blue-400 text-sm">
            <span>03.</span>
            <Link to="#" className="font-medium">Web Design</Link>
            <span>3 Days Ago</span>
          </div>
          <Link to="#" className="block text-2xl font-bold text-gray-800 mt-3">
            Title Content for the featured 3 Posts is here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;