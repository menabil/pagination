import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import data from "/src/data/product";
import Product from "./Product";
// Example items, to simulate fetching from another resources.
// const items = [data];

function Items({ currentItems }) {
  return (
    <>
      <div className="flex items-center flex-wrap gap-x-7.5 gap-y-12.5 justify-center">
        {currentItems &&
          currentItems.map((item) => (
            <div className={"w-[31%]"}>
              <Product
                proImg={item.proImg}
                badgeText={item.badgeText}
                proTitle={item.proTitle}
                proPrice={item.proPrice}
                proColor={item.proColor}
              />
            </div>
          ))}
      </div>
    </>
  );
}

function PaginatedItems({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <div className="flex justify-between items-center py-[50px]">
        <ReactPaginate
          containerClassName="flex items-center"
          pageLinkClassName="px-3.5 py-2 mr-4 text-xl border-[#F0F0F0] border text-[#737373] cursor-pointer"
          breakLabel="..."
          breakClassName="px-3.5 py-2 mr-4 text-xl border-none text-[#737373]"
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          previousLabel=""
          nextLabel=""
        />
        <p className="text-[#767676] text-[16px] font-dmSan pr-3.5">
          Products from {itemOffset + 1} to {endOffset} of {data.length}
        </p>
      </div>
    </>
  );
}

export default PaginatedItems;

// Add a <div id="container"> to your HTML to see the component rendered.
// ReactDOM.render(
//   <PaginatedItems itemsPerPage={4} />,
//   document.getElementById("container"),
// );
