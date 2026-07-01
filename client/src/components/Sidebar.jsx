import React, { useContext, useEffect, useState } from 'react';
import assets from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { ChatContext } from '../../context/ChatContext';

const Sidebar = () => {
  const {
    getUsers,
    users,
    selectedUser,
    setSelectedUser,
    unseenMessages,
    setUnseenMessages,
  } = useContext(ChatContext);

  const { logout, onlineUsers } = useContext(AuthContext);

  const [input, setInput] = useState('');

  const navigate = useNavigate();

  const filteredUsers = input
    ? users.filter((user) =>
        user.fullName.toLowerCase().includes(input.toLowerCase())
      )
    : users;

  useEffect(() => {
    getUsers();
  }, [onlineUsers]);

  return (
    <div
      className={`bg-[#1A0F12]/10 h-screen p-5 rounded-r-xl shadow-lg shadow-black/40 text-white flex flex-col ${
        selectedUser ? 'max-md:hidden' : ''
      }`}
    >
      <div className="pb-5 flex-shrink-0">
        <div className="flex items-center justify-between">
          <img src={assets.logo} alt="logo" className="max-w-40" />

          <div className="relative py-2 group">
            <img
              src={assets.menu_icon}
              alt="menu"
              className="max-h-5 cursor-pointer"
            />

            <div className="absolute top-full right-0 z-20 w-32 p-5 rounded-md bg-[#1A0F12] border border-gray-400 text-white hidden group-hover:block">
              <p
                onClick={() => navigate('/profile')}
                className="cursor-pointer text-sm"
              >
                Edit Profile
              </p>

              <hr className="my-2 border-t border-gray-400" />

              <p
                onClick={() => logout()}
                className="cursor-pointer text-sm"
              >
                Logout
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 py-3 px-4 mt-5 bg-[#1A0F12]/50 rounded-xl">
          <img
            src={assets.search_icon}
            alt="search"
            className="w-3"
          />

          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none outline-none text-white text-xs placeholder-white flex-1"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-scroll flex flex-col gap-3">
        {filteredUsers.map((user, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedUser(user);
              setUnseenMessages((prev) => ({
                ...prev,
                [user._id]: 0,
              }));
            }}
            className={`flex items-center gap-2 relative p-2 pl-4 rounded-xl cursor-pointer transition-all duration-300 max-sm:text-sm ${
              selectedUser?._id === user._id
                ? 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-white/20'
                : 'hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:border hover:border-white/10'
            }`}
          >
            <img
              src={user?.profilePic || assets.avatar_icon}
              alt={user.fullName}
              className="w-[35px] aspect-square rounded-full"
            />

            <div className="flex flex-col leading-5">
              <p>{user.fullName}</p>

              {onlineUsers.includes(user._id) ? (
                <span className="text-xs text-emerald-500">
                  Online
                </span>
              ) : (
                <span className="text-xs text-neutral-500">
                  Offline
                </span>
              )}
            </div>

            {unseenMessages[user._id] > 0 && (
              <p className="absolute top-4 right-4 text-xs h-5 w-5 flex justify-center items-center rounded-full bg-red-500 text-white">
                {unseenMessages[user._id]}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;