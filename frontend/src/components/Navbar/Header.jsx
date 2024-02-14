import React, { useEffect, useState } from "react";
import {
  homeFill,
  homeOutline,
  messageFill,
  messageOutline,
  postUploadOutline,
  exploreOutline,
  likeOutline,
} from "./SvgIcons";
import { Link, useLocation } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import NewPost from "./NewPost";
import { useSelector } from "react-redux";
import SearchBox from "./SearchBar/SearchBox";
import logo from "../../assests/images/logo.png";

const Header = () => {
  const { user } = useSelector((state) => state.user);

  const [profileToggle, setProfileToggle] = useState(false);
  const [newPost, setNewPost] = useState(false);

  const location = useLocation();
  const [onHome, setOnHome] = useState(false);
  const [onChat, setOnChat] = useState(false);

  useEffect(() => {
    setOnHome(location.pathname === "/");
    setOnChat(location.pathname.split("/").includes("direct"));
  }, [location]);

  return (
    <nav className="fixed top-0 w-full h-auto border-b bg-white z-10">
      {/* <!-- navbar container --> */}
      <div className="flex flex-row justify-between items-center py-2 px-3.5 sm:w-full sm:py-2 sm:px-4 md:w-full md:py-2 md:px-6 xl:w-4/6 xl:py-3 xl:px-8 mx-auto">
        {/* <!-- logo --> */}
        <Link to="/">
          <img
            draggable="false"
            className="w-full h-auto object-contain"
            src={logo}
            alt=""
          />
        </Link>

        <SearchBox />

        {/* <!-- icons container  --> */}
        <div className="flex items-center space-x-6 sm:mr-5 ml-10">
          <Link to="/">
            {profileToggle || !onHome ? homeOutline : homeFill}
          </Link>

          <Link to="/direct/inbox">
            {onChat ? messageFill : messageOutline}
          </Link>

          <div onClick={() => setNewPost(true)} className="cursor-pointer">
            {postUploadOutline}
          </div>
          <span className="hidden sm:block">{exploreOutline}</span>
          <span className="hidden sm:block">{likeOutline}</span>

          <div
            onClick={() => setProfileToggle(!profileToggle)}
            className={`${
              (profileToggle && "border-black border") ||
              (!onHome && !onChat && "border-black border")
            } rounded-full cursor-pointer h-7 w-7 p-[0.5px]`}
          >
            <img
              draggable="false"
              loading="lazy"
              className="w-full h-full rounded-full object-cover"
              src={user.avatar}
              alt=""
            />
          </div>
        </div>

        {profileToggle && (
          <ProfileDetails setProfileToggle={setProfileToggle} />
        )}

        <NewPost newPost={newPost} setNewPost={setNewPost} />
      </div>
    </nav>
  );
};

export default Header;
