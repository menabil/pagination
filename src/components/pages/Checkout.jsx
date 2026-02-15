import Container from "../Container";
import Flex from "../Flex";
import { FaRegCircleDot } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import Badge from "../Badge";

const Checkout = () => {
  return (
    <div className="pt-[125px] pb-[140px]">
      <Container>
        <h3 className="text-[#262626] text-[49px] font-dmSan font-bold pb-4">
          Checkout
        </h3>
        <p className="text-[#767676] text-sm font-dmSan">Home > Checkout</p>
        <div className="pt-[127px] pb-[62px]  mb-[57px]">
          <p className="w-[610px] text-[#767676] text-[16px] font-dmSan leading-[30px] flex">
            Have a coupon?
            <p className="text-[#262626] pl-1">Click here to enter your code</p>
          </p>
        </div>
        <div className="mt-[120px]">
          <h3 className="text-[40px] text-[#262626] font-bold pb-10.5">
            Billing Details
          </h3>
          <div className="mb-[130px]">
            <Flex className={"gap-x-10"}>
              <div className="">
                <p className="text-[16px] text-[#262626] font-bold">
                  First Name *
                </p>
                <input
                  type="text"
                  placeholder="First Name"
                  className="outline-none pb-4 pt-2.5 border-b-2 border-[#F0F0F0] w-[510px]"
                />
              </div>
              <div className="">
                <p className="text-[16px] text-[#262626] font-bold">
                  Last Name *
                </p>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="outline-none pb-4 pt-2.5 border-b-2 border-[#F0F0F0] w-[510px]"
                />
              </div>
            </Flex>
            <div className="py-6">
              <p className="text-[16px] text-[#262626] font-bold">
                Companye Name (optional)
              </p>
              <input
                type="text"
                placeholder="Company Name"
                className="outline-none pb-4 pt-2.5 border-b-2 border-[#F0F0F0] w-[1055px]"
              />
            </div>
            <div className="py-6">
              <p className="text-[16px] text-[#262626] font-bold">Country *</p>
              <select
                placeholder="Please select"
                className="outline-none pb-4 pt-2.5 border-b-2 border-[#F0F0F0] w-[1055px]"
              >
                <option value=""></option>
                <option value="">Bangladesh</option>
              </select>
            </div>
            <div className="py-6">
              <p className="text-[16px] text-[#262626] font-bold">
                Street Address *
              </p>
              <input
                type="text"
                placeholder="House number and street name"
                className="outline-none pb-4 pt-2.5 border-b-2 border-[#F0F0F0] w-[1055px]"
              />
              <input
                type="text"
                placeholder="Apartment, suite, unit etc. (optional)"
                className="outline-none pb-4 pt-2.5 border-b-2 border-[#F0F0F0] w-[1055px]"
              />
            </div>
            <div className="py-6">
              <p className="text-[16px] text-[#262626] font-bold">
                Town/City *
              </p>
              <input
                type="text"
                placeholder="Town/City"
                className="outline-none pb-4 pt-2.5 border-b-2 border-[#F0F0F0] w-[1055px]"
              />
            </div>
            <div className="py-6">
              <p className="text-[16px] text-[#262626] font-bold">
                County (optional)
              </p>
              <input
                type="text"
                placeholder="County"
                className="outline-none pb-4 pt-2.5 border-b-2 border-[#F0F0F0] w-[1055px]"
              />
            </div>
            <div className="py-6">
              <p className="text-[16px] text-[#262626] font-bold">
                Post Code *
              </p>
              <input
                type="text"
                placeholder="Post Code"
                className="outline-none pb-4 pt-2.5 border-b-2 border-[#F0F0F0] w-[1055px]"
              />
            </div>
            <div className="py-6">
              <p className="text-[16px] text-[#262626] font-bold">Phone *</p>
              <input
                type="text"
                placeholder="Phone"
                className="outline-none pb-4 pt-2.5 border-b-2 border-[#F0F0F0] w-[1055px]"
              />
            </div>
            <div className="py-6">
              <p className="text-[16px] text-[#262626] font-bold">
                Email Address *
              </p>
              <input
                type="text"
                placeholder="Email"
                className="outline-none pb-4 pt-2.5 border-b-2 border-[#F0F0F0] w-[1055px]"
              />
            </div>
          </div>
          <div className="border-b-2 border-[#F0F0F0] w-[1055px] mb-[130px]">
            <h3 className="text-[40px] text-[#262626] font-bold pb-10.5">
              Additional Information
            </h3>
            <p className="text-[16px] text-[#262626] font-bold pb-2">
              Other Notes (optional)
            </p>
            <p className="pb-[86px] text-sm text-[#767676]">
              Notes about your order, e.g. special notes for delivery.
            </p>
          </div>
          <div className="">
            <h3 className="text-[40px] text-[#262626] font-bold pb-12">
              Your Order
            </h3>
            <Flex className="mb-[60px]">
              <div className="w-[322px]">
                <p className="text-[16px] text-[#262626] font-bold py-6 px-5 border-2 border-b-0 border-[#F0F0F0]">
                  Product
                </p>
                <p className="text-[16px] text-[#262626] font-bold py-6 px-5 border-2 border-b-0 border-[#F0F0F0]">
                  Product name x 1
                </p>
                <p className="text-[16px] text-[#262626] font-bold py-6 px-5 border-2 border-b-0 border-[#F0F0F0]">
                  Subtotal
                </p>
                <p className="text-[16px] text-[#262626] font-bold py-6 px-5 border-2 border-[#F0F0F0]">
                  Total
                </p>
              </div>
              <div className="w-[322px]">
                <p className="text-[16px] text-[#767676] font-bold py-6 px-5 border-r-2 border-t-2 border-[#F0F0F0]">
                  Total
                </p>
                <p className="text-[16px] text-[#262626] font-bold py-6 px-5 border-r-2 border-t-2 border-[#F0F0F0]">
                  389.99 $
                </p>
                <p className="text-[16px] text-[#262626] font-bold py-6 px-5 border-r-2 border-t-2 border-[#F0F0F0]">
                  389.99 $
                </p>
                <p className="text-[16px] text-[#262626] font-bold py-6 px-5 border-r-2 border-t-2 border-b-2 border-[#F0F0F0]">
                  389.99 $
                </p>
              </div>
            </Flex>
            <div className="border-2 border-[#F0F0F0] pt-6 pb-[30px] px-[34px] w-[1055px]">
              <Flex className={"gap-x-2.5 pb-3.5"}>
                <FaRegCircleDot />
                <p className="text[#262626] text-[16px] font-bold">Bank</p>
              </Flex>
              <div className="bg-[#F5F5F3] py-[17px] px-[26px] text-sm text-[#767676] mb-[26px]">
                Pay via Bank; you can pay with your credit card if you don’t
                have a Bank account.
              </div>{" "}
              <Flex className={"gap-x-2.5 pb-4"}>
                <FaRegCircle />
                <p className="text[#767676] text-[16px] font-bold">Bank 2</p>
              </Flex>
              <p className="text-[#767676] text-[16px] mb-6">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our privacy policy.
              </p>
              <Badge
                className={"w-[200px] text-center py-4 cursor-pointer"}
                badgeText={"Proceed to Bank"}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
