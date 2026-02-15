import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import ProductOne from "/src/assets/productOne.png";
import ProductTwo from "/src/assets/productTwo.png";
import ProductThr from "/src/assets/productThr.png";
import ProductFor from "/src/assets/productFor.png";
import { IoIosStar } from "react-icons/io";
import Badge from "../Badge";
import { FaPlus } from "react-icons/fa";

const Products = () => {
  return (
    <div className="pt-[125px] pb-[185px]">
      <Container>
        <h3 className="text-[#262626] text-[49px] font-dmSan font-bold pb-4">
          Products
        </h3>
        <p className="text-[#767676] text-sm font-dmSan mb-[136px]">
          Home > Products
        </p>
        <Flex className={"gap-5 flex-wrap mb-[50px]"}>
          <div className="w-[49%]">
            <Images imgSrc={ProductOne} />
          </div>
          <div className={"w-[49%]"}>
            <Images imgSrc={ProductTwo} />
          </div>
          <div className={"w-[49%]"}>
            <Images imgSrc={ProductThr} />
          </div>
          <div className={"w-[49%]"}>
            <Images imgSrc={ProductFor} />
          </div>
        </Flex>
        <div className="border-b-2 border-[#F0F0F0] w-[780px]">
          <p className="text-[40px] text-[#262626] font-bold pb-4">Product</p>
          <Flex className={"gap-x-5 pb-5"}>
            <Flex className={"text-[#FFD881]"}>
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
            </Flex>
            <p className="text-[#767676] text-sm ">1 Review</p>
          </Flex>
          <Flex className={"gap-x-5 pb-6"}>
            <del className="text-[16px] text-[#767676]">$88.00</del>
            <p className="text-[20px] text-[#262626] font-bold">$44.00</p>
          </Flex>
        </div>
        <div className="border-b-2 border-[#F0F0F0] w-[780px] py-[30px]">
          <Flex>
            <p className="text-[16px] text-[#262626] font-bold w-[100px]">
              COLOR:
            </p>
            <div className="w-5 h-5 bg-black/20 rounded-full"></div>
            <div className="w-7 h-7 bg-[#FF8686] rounded-full mx-4"></div>
            <div className="w-5 h-5 bg-[#7ED321]/20 rounded-full"></div>
            <div className="w-5 h-5 bg-[#B6B6B6]/20 rounded-full mx-4"></div>
            <div className="w-5 h-5 bg-[#15CBA5]/20 rounded-full"></div>
          </Flex>
          <Flex className={"my-[30px]"}>
            <p className="text-[16px] text-[#262626] font-bold w-[100px]">
              SIZE:
            </p>
            <div className="border-2 border-[#F0F0F0] px-4 py-1">
              <select className="text-[#767676] outline-none pr-15">
                <option>S</option>
                <option value="">XL</option>
              </select>
            </div>
          </Flex>
          <Flex>
            <p className="text-[16px] text-[#262626] font-bold w-[100px]">
              QUANTITY:
            </p>
            <Flex className={"border-2 border-[#F0F0F0] py-1 px-5.5"}>
              <p className="text-[16px] text-[#767676] ">-</p>
              <p className="text-[16px] text-[#767676] px-9">1</p>
              <p className="text-[16px] text-[#767676] ">+</p>
            </Flex>
          </Flex>
        </div>
        <div className="border-b-2 border-[#F0F0F0] w-[780px] py-5">
          <Flex>
            <p className="text-[16px] text-[#262626] font-bold w-[90px]">
              STATUS:
            </p>
            <p className="text-[16px] text-[#767676]">In stock</p>
          </Flex>
        </div>
        <div className="border-b-2 border-[#F0F0F0] w-[780px] py-[30px]">
          <Flex className={"gap-x-5"}>
            <Badge
              className={"w-[220px] text-center py-4 cursor-pointer"}
              badgeText={"Add to Wish List"}
            />
            <Badge
              className={"w-[220px] text-center py-4 cursor-pointer"}
              badgeText={"Add to Cart"}
            />
          </Flex>
        </div>
        <div className="border-b-2 border-[#F0F0F0] w-[780px] py-6">
          <Flex className={"justify-between"}>
            <p className="text-[16px] text-[#262626] font-bold">
              FEATURES & DETAILS
            </p>
            <FaPlus className="text-[12px]" />
          </Flex>
        </div>
        <div className="border-b-2 border-[#F0F0F0] w-[780px] py-6">
          <Flex className={"justify-between"}>
            <p className="text-[16px] text-[#262626] font-bold">
              SHIPPING & RETURNS
            </p>
            <FaPlus className="text-[12px]" />
          </Flex>
        </div>
        <p className="w-[780px] text-[16px] text-[#767676] pt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="pt-[125px] pb-4 border-b-2 border-[#F0F0F0]">
          <Flex className={"gap-x-15 pb-10.5"}>
            <p className="text-[#767676] text-xl">Description</p>
            <p className="text-[#262626] font-bold text-xl">Reviews (1)</p>
          </Flex>
          <p className="text-sm text-[#767676]">1 review for Product</p>
        </div>
        <div className="pt-6 pb-4 border-b-2 border-[#F0F0F0]">
          <Flex className={"justify-between pb-3.5"}>
            <Flex className={"gap-x-9"}>
              <p className="text-[16px] text-[#262626]">John Ford</p>
              <Flex className={"text-[#FFD881]"}>
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
              </Flex>
            </Flex>
            <p className="text-[#767676] text-[16px]">6 months ago</p>
          </Flex>
          <p className="text-sm text-[#767676] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>

        <div className="pt-[53px]">
          <h3 className="text-[#262626] text-xl font-bold pb-12">
            Add a Review
          </h3>

          <form action="Submit">
            <h6 className="text-[#262626] text-[16px] font-dmSan font-bold">
              Name
            </h6>
            <input
              type="text"
              placeholder="Your name here"
              className="outline-0 border-[#F0F0F0] border-b-2 pb-4 pt-2.5 w-[700px] mb-6"
            />

            <h6 className="text-[#262626] text-[16px] font-dmSan font-bold">
              Email
            </h6>
            <input
              type="email"
              placeholder="Your email here"
              className="outline-0 border-[#F0F0F0] border-b-2 pb-4 pt-2.5 w-[700px] mb-6"
            />

            <h6 className="text-[#262626] text-[16px] font-dmSan font-bold">
              Review
            </h6>
            <textarea
              placeholder="Your review here"
              className="outline-0 pt-2.5 w-[700px] pb-[87px] mb-7.5 border-[#F0F0F0] border-b-2"
              id=""
            ></textarea>
            <Badge
              className={"w-[200px] text-center py-4 cursor-pointer"}
              badgeText={"Post"}
            />
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Products;
