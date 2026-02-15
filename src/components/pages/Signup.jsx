import Container from "../Container";
import Flex from "../Flex";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { BiCheckboxSquare } from "react-icons/bi";
import Badge from "../Badge";

const Signup = () => {
  return (
    <div className="pt-[125px] pb-[140px]">
      <Container>
        <h3 className="text-[#262626] text-[49px] font-dmSan font-bold pb-4">
          Sign up
        </h3>
        <p className="text-[#767676] text-sm font-dmSan">Home > Sign up</p>
        <div className="pt-[127px] pb-[62px] border-b-2 border-[#F0F0F0] mb-[57px]">
          <p className="w-[610px] text-[#767676] text-[16px] font-dmSan leading-[30px] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
        </div>

        <div className="border-b-2 border-[#F0F0F0] pb-[70px]">
          <h3 className="text-[40px] text-[#262626] font-bold mb-[42px]">
            Your Personal Details
          </h3>
          <Flex className={"gap-x-10 mb-6"}>
            <div className="">
              <p className="font-bold text-[16px] text-[262626]">First Name</p>
              <input
                placeholder="First Name"
                className="outline-none pb-4 pt-2.5 border-b-2 border-[#F0F0F0] w-[510px]"
              />
            </div>
            <div className="">
              <p className="font-bold text-[16px] text-[262626]">Last Name</p>
              <input
                placeholder="Last Name"
                className="outline-none pb-4 pt-2.5 border-b-2 border-[#F0F0F0] w-[510px]"
              />
            </div>
          </Flex>
          <Flex className={"gap-x-10 mb-6"}>
            <div className="">
              <p className="font-bold text-[16px] text-[262626]">
                Email address
              </p>
              <input
                type="email"
                placeholder="company@domain.com"
                className="outline-none pb-4 pt-2.5 border-b-2 border-[#F0F0F0] w-[510px]"
              />
            </div>
            <div className="">
              <p className="font-bold text-[16px] text-[262626]">Telephone</p>
              <input
                placeholder="Your phone number"
                className="outline-none pb-4 pt-2.5 border-b-2 border-[#F0F0F0] w-[510px]"
              />
            </div>
          </Flex>
        </div>

        <div className="border-b-2 border-[#F0F0F0] pb-[70px] mt-[60px]">
          <h3 className="text-[40px] text-[#262626] font-bold mb-[42px]">
            New Customer
          </h3>
          <Flex className={"gap-x-10 mb-6"}>
            <div className="">
              <p className="font-bold text-[16px] text-[262626]">Address 1</p>
              <input
                placeholder="4279 Zboncak Port Suite 6212"
                className="outline-none pb-4 pt-2.5 border-b-2 border-[#F0F0F0] w-[510px]"
              />
            </div>
            <div className="">
              <p className="font-bold text-[16px] text-[262626]">Address 2</p>
              <input
                placeholder="—"
                className="outline-none pb-4 pt-2.5 border-b-2 border-[#F0F0F0] w-[510px]"
              />
            </div>
          </Flex>
          <Flex className={"gap-x-10 mb-6"}>
            <div className="">
              <p className="font-bold text-[16px] text-[262626]">City</p>
              <input
                placeholder="Your city"
                className="outline-none pb-4 pt-2.5 border-b-2 border-[#F0F0F0] w-[510px]"
              />
            </div>
            <div className="">
              <p className="font-bold text-[16px] text-[262626]">Post Code</p>
              <input
                placeholder="Your phone number"
                className="outline-none pb-4 pt-2.5 border-b-2 border-[#F0F0F0] w-[510px]"
              />
            </div>
          </Flex>
          <Flex className={"gap-x-10 mb-6"}>
            <div className="">
              <p className="font-bold text-[16px] text-[262626]">Country</p>
              <select className="outline-none pb-4 pt-2.5 border-b-2 border-[#F0F0F0] w-[510px]  text-[#767676]">
                <option>Please select</option>
                <option value="">Dhaka</option>
              </select>
            </div>
            <div className="">
              <p className="font-bold text-[16px] text-[262626]">
                Region/State
              </p>
              <select className="outline-none pb-4 pt-2.5 border-b-2 border-[#F0F0F0] w-[510px] text-[#767676]">
                <option>Please select</option>
                <option>Bangladesh</option>
              </select>
            </div>
          </Flex>
        </div>

        <div className="border-b-2 border-[#F0F0F0] pb-[70px] mt-[60px] mb-[65px]">
          <h3 className="text-[40px] text-[#262626] font-bold mb-[42px]">
            Your Password
          </h3>
          <Flex className={"gap-x-10 mb-6"}>
            <div className="">
              <p className="font-bold text-[16px] text-[262626]">Password</p>
              <input
                placeholder="Password"
                className="outline-none pb-4 pt-2.5 border-b-2 border-[#F0F0F0] w-[510px]"
              />
            </div>
            <div className="">
              <p className="font-bold text-[16px] text-[262626]">
                Repeat Password
              </p>
              <input
                placeholder="Repeat Password"
                className="outline-none pb-4 pt-2.5 border-b-2 border-[#F0F0F0] w-[510px]"
              />
            </div>
          </Flex>
        </div>

        <Flex className="gap-x-3.5 text-[#767676] text-sm mb-6">
          <MdCheckBoxOutlineBlank />
          <p>I have read and agree to the Privacy Policy</p>
        </Flex>

        <Flex className="gap-x-8 text-[#767676] text-sm mb-7">
          <p>Subscribe Newsletter</p>
          <Flex className="gap-x-3.5">
            <MdCheckBoxOutlineBlank />
            Yes
          </Flex>
          <Flex className="gap-x-3.5">
            <BiCheckboxSquare className="text-xl" />
            No
          </Flex>
        </Flex>

        <Badge
          className={"w-[200px] text-center py-4 cursor-pointer"}
          badgeText={"Log in"}
        />
      </Container>
    </div>
  );
};

export default Signup;
