const Badge = ({ className, badgeText }) => {
  return (
    <div
      className={`${className} hover:text-[#262626] hover:bg-white w-[92px] border-2 border-[#262626] py-2 px-7 duration-300 bg-[#262626] text-white font-bold font-dmSan text-sm`}
    >
      {badgeText}
    </div>
  );
};

export default Badge;
