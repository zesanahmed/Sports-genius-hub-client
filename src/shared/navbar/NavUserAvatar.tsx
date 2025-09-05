const NavUserAvatar = ({ user }) => {
  if (!user?.photoURL) return null;
  return (
    <img
      src={user.photoURL}
      alt="profile"
      className="w-9 h-9 rounded-full border-2 border-white"
    />
  );
};

export default NavUserAvatar;
