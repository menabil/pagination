import { HugeiconsIcon } from "@hugeicons/react";
import { MenuTwoLineIcon } from "@hugeicons/core-free-icons";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Container from "../Container";
import Flex from "../Flex";
import logo from "/src/assets/logo.png";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import Badge from "../Badge";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  const [logShow, logSetShow] = useState(false);
  const handleClick = () => {
    logSetShow(!logShow);
  };
  const [cartShow, cartSetShow] = useState(false);
  const handleCart = () => {
    cartSetShow(!cartShow);
  };

  return (
    <>
      <div className="border-b-[#979797] border-b">
        <Container>
          <Flex>
            <div className="w-[40%] py-8">
              <Link to={"/"}>
                <img src={logo} />
              </Link>
            </div>
            <div className="w-[60%]">
              <ul className="flex gap-x-10">
                <Link to={"/"}>
                  <li className="text-[#767676] hover:text-[#262626] text-3.5 font-dmSan hover:font-bold duration-300">
                    Home
                  </li>
                </Link>
                <Link to={"shop"}>
                  <li className="text-[#767676] hover:text-[#262626] text-3.5 font-dmSan hover:font-bold duration-300">
                    Shop
                  </li>
                </Link>
                <Link to={"about"}>
                  <li className="text-[#767676] hover:text-[#262626] text-3.5 font-dmSan hover:font-bold duration-300">
                    About
                  </li>
                </Link>
                <Link to={"contacts"}>
                  <li className="text-[#767676] hover:text-[#262626] text-3.5 font-dmSan hover:font-bold duration-300">
                    Contacts
                  </li>
                </Link>
              </ul>
            </div>
          </Flex>
        </Container>
      </div>

      <div className="bg-[#F5F5F3] py-[25px] border-b-2 border-[#979797]">
        <Container>
          <Flex className={"justify-between"}>
            <div className="relative cursor-pointer" onClick={handleShow}>
              <Flex>
                <HugeiconsIcon
                  icon={MenuTwoLineIcon}
                  size={24}
                  strokeWidth={3}
                />
                <p className="text-[#262626] font-dmSan text-3.5 pl-2">
                  Shop by Category
                </p>
              </Flex>
              {show && (
                <ul className="bg-[#262626] w-[265px] absolute left-0 top-8 z-5">
                  <li className="text-white text-sm border-b-2 border-[#2D2D2D] py-4 px-5 hover:font-bold hover:pl-8 duration-400">
                    Accesories
                  </li>
                  <li className="text-white text-sm border-b-2 border-[#2D2D2D] py-4 px-5 hover:font-bold hover:pl-8 duration-400">
                    Furniture
                  </li>
                  <li className="text-white text-sm border-b-2 border-[#2D2D2D] py-4 px-5 hover:font-bold hover:pl-8 duration-400">
                    Electronics
                  </li>
                  <li className="text-white text-sm border-b-2 border-[#2D2D2D] py-4 px-5 hover:font-bold hover:pl-8 duration-400">
                    Clothes
                  </li>
                  <li className="text-white text-sm border-b-2 border-[#2D2D2D] py-4 px-5 hover:font-bold hover:pl-8 duration-400">
                    Bags
                  </li>
                  <li className="text-white text-sm border-b-2 border-[#2D2D2D] py-4 px-5 hover:font-bold hover:pl-8 duration-400">
                    Home appliances
                  </li>
                </ul>
              )}
            </div>

            <div className="bg-white items-center flex px-5.5">
              <input
                type="text"
                className="outline-none border-none py-4 pr-4 w-150"
                placeholder="Search Products"
              />
              <FaSearch />
            </div>

            <Flex>
              <div
                className="mr-10 flex relative cursor-pointer"
                onClick={handleClick}
              >
                <FaUser className="mr-2" />
                <IoMdArrowDropdown />
                {logShow && (
                  <div className="bg-white w-[200px] absolute right-0 top-8 z-5">
                    <ul className="text-center">
                      <li className="hover:text-white text-[#262626] hover:bg-[#262626] text-sm border-2 hover:border-[#262626] border-[#F0F0F0] py-4 hover:font-bold duration-400">
                        <Link to={"/login"}>My Account</Link>
                      </li>
                      <li className="hover:text-white text-[#262626] hover:bg-[#262626] text-sm border-2 border-t-0 hover:border-[#262626] border-[#F0F0F0] py-4 hover:font-bold duration-400">
                        <Link to={"/login"}>Log Out</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="relative cursor-pointer" onClick={handleCart}>
                <FaShoppingCart />
                {cartShow && (
                  <div className="w-[360px] absolute right-0 top-8 z-5 border-2 border-[#F0F0F0]">
                    <Flex className="p-5 bg-[#F5F5F3]">
                      <div className="px-10 py-10 bg-[#D8D8D8] mr-5"></div>
                      <p className="w-[130px] text-[#262626] text-sm font-bold">
                        Black Smart Watch $44.00
                      </p>
                      <IoIosClose className="ml-20 font-black text-[#262626] text-3xl" />
                    </Flex>
                    <div className="p-5 bg-white">
                      <p className="text-[#262626] font-bold text-[16px]">
                        <span className="text-[#767676] font-normal">
                          Subtotal:
                        </span>{" "}
                        $44.00
                      </p>
                      <Flex className={"mt-3 gap-x-5"}>
                        <Badge
                          className={
                            "w-[148px] text-center py-4 cursor-pointer"
                          }
                          badgeText={"View Cart"}
                        />
                        <Badge
                          className={
                            "w-[148px] text-center py-4 cursor-pointer"
                          }
                          badgeText={"Checkout"}
                        />
                      </Flex>
                    </div>
                  </div>
                )}
              </div>
            </Flex>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
