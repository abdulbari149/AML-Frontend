import React from "react";

const CardView = ({ label, data }: any) => {

  return (
    <section className="flex flex-col gap-3">
      <h4 className=" text-lg font-semibold capitalize">{label}</h4>
      <div className=" rounded-md h-[260px] w-full bg-[#F1F1F1]">
        <div className="flex items-center rounded-tl-md rounded-tr-md py-2 text-white font-medium bg-[#47474761] sticky top-0">
          <h4 className="flex-1 text-center">Codes</h4>
          {label.trim().toLowerCase() ===
            "Sub Office Teller Code".trim().toLowerCase() && (
            <h4 className="flex-1 text-center">Description</h4>
          )}
          <h4 className="flex-1 text-center">Value</h4>
        </div>

        <div className=" divide-y overflow-y-auto h-full">
          {data?.map((item: any, i: number) => (
            <div
              key={i}
              className="flex justify-around items-center text-sm font-medium py-[6px] bg-[#f9f9f9] "
            >
              {label.trim().toLowerCase() ===
              "High Risk Categories".trim().toLowerCase() ? (
                <p className="flex-1 text-center">{item.category}</p>
              ) : (
                <p className="flex-1 text-center">{item.code}</p>
              )}

              {label.trim().toLowerCase() ===
                "Sub Office Teller Code".trim().toLowerCase() && (
                <p className="flex-1 text-center">{item.description}</p>
              )}

              <p className="flex-1 text-center">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardView;
