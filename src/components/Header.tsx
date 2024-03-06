const Header = () => {
  return (
    <header className="flex w-full justify-center items-center ">
      <img src="/assets/info.svg" alt="info" />
      <img src="/assets/notification.svg" alt="notification" />
      <div className=" flex h-fit gap-5 items-center">
        <div className="text-white">
          <p className="text-xl">
            Hi, <span className="text-green1">Muhammad Asad</span>
          </p>
          <p className="text-xl">welcome back!</p>
        </div>
        <div className="relative">
          <div className="absolute -inset-1 bg-pink1/80 blur-lg rounded-full"></div>
          <div className="rounded-full shadow backdrop-blur-lg backdrop:bg-green1 border-[3px] border-pink1 w-[64px] h-[64px] overflow-hidden">
            <img
              src="/assets/dp.jpg"
              height={64}
              width={64}
              alt="notification"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
