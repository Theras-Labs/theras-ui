import React, { useState } from "react";

export default function DisplayList({ data }) {
  const [selected, setSelect] = useState(0);
  //todo: add 3D and video
  return (
    <>
      {/* 3d will take all view */}
      <div className="w-full  xl:h-[500px] h-[400px] md:p-8 md:px-10 p-4">
        <div className=" bg-black h-full w-full">
          {!!data?.detail?.contents?.length ? (
            <img
              // todo: check if contents are images, or video, or 3d
              src={data?.detail?.contents?.[selected]?.image_url}
              className="object-cover w-full h-full rounded-md"
            />
          ) : (
            <img
              // check if image_url available else asset url
              src={data?.detail?.image_url}
              className="object-cover w-full h-full rounded-md"
            />
          )}
        </div>
      </div>

      <div className="flex overflow-x-auto  xl:px-8 px-4 pb-2">
        {!!data?.detail?.contents?.length ? (
          data?.detail?.contents?.map((item, i) => (
            <div
              onClick={() => setSelect(i)}
              key={`content-img-` + i}
              className={`flex-shrink-0  bg-black w-32 h-20  rounded-md mr-2 cursor-pointer ${
                selected === i && "border-2 border-green-500"
              }`}
            >
              <img
                src={item?.url}
                className="object-cover w-full h-full rounded-md "
              />
            </div>
          ))
        ) : (
          <div
            className={`flex-shrink-0  bg-black w-32 h-20  rounded-md mr-2 cursor-pointer ${"border-2 border-green-500"}`}
          >
            <img
              src={data?.detail?.image_url}
              className="object-cover w-full h-full rounded-md "
            />
          </div>
        )}

        {/* {data && data?.allImages.map((item, i) => (
            <div className="bg-black w-14 h-14 mr-4">
              <img src={item} className="object-cover w-full h-full" />
            </div>
          ))} */}
      </div>
    </>
  );
}
