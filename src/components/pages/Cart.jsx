import Container from "../Container";
import Flex from "../Flex";
import { IoIosClose } from "react-icons/io";
import Images from "../Images";
import CartImg from "/src/assets/cart.png";
import Badge from "../Badge";

const Cart = () => {
  return (
    <div className="pt-[125px] pb-[140px]">
      <Container>
        <h3 className="text-[#262626] text-[49px] font-dmSan font-bold pb-4">
          Cart
        </h3>
        <p className="text-[#767676] text-sm font-dmSan mb-[136px]">
          Home > Cart
        </p>
        <div className="mb-[54px]">
          <Flex className="bg-[#F5F5F3] px-5 py-8">
            <p className="text-[16px] text-[#262626] font-bold mr-[270px]">
              Product
            </p>
            <p className="text-[16px] text-[#262626] font-bold mr-[250px]">
              Price
            </p>
            <p className="text-[16px] text-[#262626] font-bold mr-[300px]">
              Quantity
            </p>
            <p className="text-[16px] text-[#262626] font-bold ">Total</p>
          </Flex>
          <Flex className={"px-5 py-8 border-[#F0F0F0] border-2"}>
            <Flex className="">
              <IoIosClose className="text-2xl" />

              <Images className={"px-5"} imgSrc={CartImg} />
              <p className="text-[16px] text-[#262626] font-bold">
                Product name
              </p>
            </Flex>
            <p className="text-[#262626] text-xl font-bold pl-[55px] pr-[220px]">
              $44.00
            </p>
            <Flex className={"border border-[#F0F0F0] py-1 px-5.5"}>
              <p className="text-[16px] text-[#767676] ">-</p>
              <p className="text-[16px] text-[#767676] px-9">1</p>
              <p className="text-[16px] text-[#767676] ">+</p>
            </Flex>
            <p className="text-[#262626] text-xl font-bold pl-[230px]">
              $44.00
            </p>
          </Flex>
          <Flex
            className={
              "justify-between p-5 border-2 border-[#F0F0F0] border-t-0"
            }
          >
            <Flex className="gap-x-4">
              <div className="border-2 border-[#F0F0F0] px-5 py-2.5">
                <select className="text-[#767676] outline-none pr-30 ">
                  <option>SIZE</option>
                  <option value="">One</option>
                </select>
              </div>
              <p className="text-sm font-bold text-[#262626]">Apply coupon</p>
            </Flex>
            <p className="text-sm font-bold text-[#262626]">Update cart</p>
          </Flex>
        </div>
        <Flex className="justify-end">
          <div className="">
            <p className="text-xl text-[#262626] font-bold text-end">
              Cart totals
            </p>
            <div className="pt-6 pb-7.5">
              <Flex>
                <p className="text-[16px] text-[#262626] font-bold w-[300px] px-5 py-4 border border-[#F0F0F0]">
                  Subtotal
                </p>
                <p className="text-[16px] text-[#767676] border-l-0 w-[300px] px-5 py-4 border border-[#F0F0F0]">
                  389.99 $
                </p>
              </Flex>
              <Flex>
                <p className="text-[16px] text-[#262626] font-bold w-[300px] px-5 py-4 border border-[#F0F0F0]">
                  Total
                </p>
                <p className="text-[16px] text-[#262626] border-l-0 w-[300px] px-5 py-4 border border-[#F0F0F0]">
                  389.99 $
                </p>
              </Flex>
            </div>
            <Flex className={"justify-end"}>
              <Badge
                className={"w-[220px] text-center py-4 cursor-pointer"}
                badgeText={"Proceed to Checkout"}
              />
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Cart;
