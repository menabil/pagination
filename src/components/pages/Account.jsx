import Container from "../Container";
import Flex from "../Flex";

const Account = () => {
  return (
    <div className="pt-[125px] pb-[140px]">
      <Container>
        <h3 className="text-[#262626] text-[49px] font-dmSan font-bold pb-4">
          My Account
        </h3>
        <p className="text-[#767676] text-sm font-dmSan">Home > My Account</p>
        <Flex className="mt-[125px] gap-x-10 items-start">
          <div className="">
            <div className="border-b-2 border-[#F0F0F0] py-5 text-[16px] text-[#767676] w-[230px] hover:text-[#262626] hover:font-bold duration-300">
              Dashboard
            </div>
            <div className="border-b-2 border-[#F0F0F0] py-5 text-[16px] text-[#767676] w-[230px] hover:text-[#262626] hover:font-bold duration-300">
              Others
            </div>
            <div className="border-b-2 border-[#F0F0F0] py-5 text-[16px] text-[#767676] w-[230px] hover:text-[#262626] hover:font-bold duration-300">
              Donwloads
            </div>
            <div className="border-b-2 border-[#F0F0F0] py-5 text-[16px] text-[#767676] w-[230px] hover:text-[#262626] hover:font-bold duration-300">
              Addresses
            </div>
            <div className="border-b-2 border-[#F0F0F0] py-5 text-[16px] text-[#767676] w-[230px] hover:text-[#262626] hover:font-bold duration-300">
              Account details
            </div>
            <div className="border-b-2 border-[#F0F0F0] py-5 text-[16px] text-[#767676] w-[230px] hover:text-[#262626] hover:font-bold duration-300">
              Logout
            </div>
          </div>
          <div className="mt-5">
            <p className="text-[16px] text-[#262626]">
              Hello admin (not admin? Log out)
            </p>
            <p className="text-[16px] text-[#262626] pt-10">
              From your account dashboard you can view your recent orders,
              manage your shipping and billing addresses, and edit your password
              and account details.
            </p>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Account;
