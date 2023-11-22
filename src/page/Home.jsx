import { IoHomeSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { MdExplore } from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";
import { BiMessageRoundedMinus } from "react-icons/bi";
import { GiSelfLove } from "react-icons/gi";
import { GoPlus } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { LuMessageCircle } from "react-icons/lu";
import { BiLogoTelegram } from "react-icons/bi";
import { CiBookmark } from "react-icons/ci";
import { useState } from "react";



const Home = () => {
    const [comment, setComment] = useState('');
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    const handleInputChange = (e) => {
        setComment(e.target.value);

    };


    const handleLike = () => {
        // Toggle the like state
        setLiked(!liked);

        // Increment or decrement the like count based on the current state
        setLikeCount(liked ? likeCount - 1 : likeCount + 1);
    };
    return (
        <div className="flex justify-around px-6 mt-10">
            <div className="left bg-red-4 px-6 h-full text-center">
                <div>
                    Instragram
                </div>
                <div className="left-div">
                    <p><IoHomeSharp /></p>
                    <p>Home</p>
                </div>
                <div className="left-div">
                    <p><IoSearch /></p>
                    <p>Search</p>
                </div>
                <div className="left-div">
                    <p><MdExplore /></p>
                    <p>Explore</p>
                </div>
                <div className="left-div">
                    <p><MdVideoLibrary /></p>
                    <p>Reels</p>
                </div>
                <div className="left-div">
                    <p><BiMessageRoundedMinus /></p>
                    <p>Message</p>
                </div>
                <div className="left-div">
                    <p><GiSelfLove /></p>
                    <p>Notifications</p>
                </div>
                <div className="left-div">
                    <p><GoPlus /></p>
                    <p>Create</p>
                </div>
                <div className="left-div">
                    <p>   <img className="h-10 w-10 rounded-full" src="https://i.ibb.co/drd5Xts/387832694-726852339276801-3118425617148398667-n.jpg" alt="" /></p>
                    <p>Profile</p>
                </div>
            </div>
            {/* middle section */}
            <div className="w-full h-full px-10">
                <div className="w-full">
                    <div className="flex items-center justify-between gap-7">
                        <div>
                            <div className="flex items-center gap-6">
                                <img className="h-10 w-10 rounded-full" src="https://i.ibb.co/HrRJdVd/team-3-1.webp" alt="" />
                                <p>juyelrana</p>
                            </div>
                        </div>
                        <p><BsThreeDots /></p>
                    </div>
                    <div className="mt-3 ">
                        <img className="w-full max-h-96" src="https://i.ibb.co/HrRJdVd/team-3-1.webp" alt="" />
                    </div>
                    <div className=" mt-2">
                        <div className="text-3xl flex items-center justify-between gap-5 cursor-pointer">
                            <div className="flex gap-6">
                                <p onClick={handleLike}><GiSelfLove color={liked ? 'red' : 'black'} /></p>
                                <p><LuMessageCircle /></p>
                                <p><BiLogoTelegram /></p>
                            </div>
                            <div>
                                <p><CiBookmark /></p>
                            </div>
                        </div>
                        <div>
                            <p>{likeCount} {likeCount === 1 ? 'like' : 'likes'}</p>
                            <p>হঠাৎ দেখা 😍 Md. Abu Taher Nazib Rafe</p>
                        </div>

                        <div className="flex justify-between border-b-2 mt-2">
                            <div className='w-full'>
                                <input
                                    className="w-full focus:outline-none border-none pr-5"
                                    type="text"
                                    placeholder="Add a comment"
                                    value={comment}
                                    onChange={handleInputChange}
                                />
                            </div>
                            {comment && (
                                <div className="">
                                    <button className="text-blue-600 font-bold">Post</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>

            {/* right side section */}
            <div className=" w-full h-full">
                <div className="flex justify-between items-center px-24">
                    <div className="flex items-center">
                        <div>
                            <img className='h-10 w-10 rounded-full' src="https://i.ibb.co/LNBmzrw/250282067-117721000695694-9086201108214065072-n.jpg" alt="" />
                        </div>
                        <div className="ml-2">
                            <p className="font-semibold mt-0">juyel23e</p>
                            <p className="mb-0">Juyel rana</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-blue-400">Follow</p>
                    </div>
                </div>
                <div className="flex justify-around px-6 mt-4">
                    <p className="text-gray-500 font-semibold">Suggested for you</p>
                    <p className="font-semibold">See All</p>
                </div>
                <div className="flex justify-between items-center px-24 mt-4">
                    <div className="flex items-center">
                        <div>
                            <img className='h-10 w-10 rounded-full' src="https://i.ibb.co/p2k6sKZ/team-6-1.webp" alt="" />
                        </div>
                        <div className="ml-2">
                            <p className="font-semibold mt-0">juyel23e</p>
                            <p className="mb-0">Juyel rana</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-blue-400">Follow</p>
                    </div>
                </div>
                <div className="flex justify-between items-center px-24 mt-4">
                    <div className="flex items-center">
                        <div>
                            <img className='h-10 w-10 rounded-full' src="https://i.ibb.co/D8GbMrZ/team-5-1.webp" alt="" />
                        </div>
                        <div className="ml-2">
                            <p className="font-semibold mt-0">juyel23e</p>
                            <p className="mb-0">Juyel rana</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-blue-400">Follow</p>
                    </div>
                </div>
                <div className="flex justify-between items-center px-24 mt-4">
                    <div className="flex items-center">
                        <div>
                            <img className='h-10 w-10 rounded-full' src="https://i.ibb.co/YXNtg4N/team-4-1.webp" alt="" />
                        </div>
                        <div className="ml-2">
                            <p className="font-semibold mt-0">juyel23e</p>
                            <p className="mb-0">Juyel rana</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-blue-400">Follow</p>
                    </div>
                </div>
                <div className="flex justify-between items-center px-24 mt-4">
                    <div className="flex items-center">
                        <div>
                            <img className='h-10 w-10 rounded-full' src="https://i.ibb.co/HrRJdVd/team-3-1.webp" alt="" />
                        </div>
                        <div className="ml-2">
                            <p className="font-semibold mt-0">juyel23e</p>
                            <p className="mb-0">Juyel rana</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-blue-400">Follow</p>
                    </div>
                </div>
                <div className="flex justify-between items-center px-24 mt-4">
                    <div className="flex items-center">
                        <div>
                            <img className='h-10 w-10 rounded-full' src="https://i.ibb.co/LNBmzrw/250282067-117721000695694-9086201108214065072-n.jpg" alt="" />
                        </div>
                        <div className="ml-2">
                            <p className="font-semibold mt-0">juyel23e</p>
                            <p className="mb-0">Juyel rana</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-blue-400">Follow</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;