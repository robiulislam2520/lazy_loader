const Profile = ({ user }) => {
  const { name, username, email } = user;
  return (
    <div className="bg-white rounded-md shadow-md px-8 py-8 flex space-x-4 cursor-pointer items-center flex-col text-center space-y-4 lg:flex-row lg:text-left lg:space-y-0">
      <img
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="avatar"
        className="ring rounded-full ring-green-500 h-24 lg:h-16"
      />
      <div>
        <h2 className="text-lg md:text-2xl lg:text-2xl font-semibold">
          {name}
        </h2>
        <p className="underline text-blue-500 font-medium">@{username}</p>
        <p className="font-medium">
          <span className="font-bold">Email: </span>
          {email.toLowerCase()}
        </p>
      </div>
    </div>
  );
};

export default Profile;
