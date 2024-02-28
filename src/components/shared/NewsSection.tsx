import React from "react";
import { newsData } from "../../../data/newsData";

const NewsSection = () => {
  return (
    <>
      <div className=" flex flex-col gap-3 bg-[#FFFFFF] w-72 h-full text-[#000000] py-[14px] px-[15px] rounded-xl">
        <h1 className=" text-lg font-normal">News</h1>
        <hr />

        <div className=" flex flex-col gap-3">
          {newsData.map((item: any, i: number) => (
            <p key={i} className=" text-sm font-light">
              {item.title}
            </p>
          ))}
        </div>

        <hr />

        <div>
          <p className=" text-base font-light">Training (to be added)</p>
        </div>
      </div>
    </>
  );
};

export default NewsSection;