import React from "react";

export default function DeviceCard({
  title,
  description,
  image,
  datatypes,
  url,
}: {
  title: string;
  description: React.ReactNode;
  image: string;
  datatypes: string[];
  url: string;
}) {
  return (
    <div className="max-w-[320px] rounded-xl overflow-hidden border border-gray-200 shadow-lg m-2">
      <img src={image} alt={title} className="object-cover w-full h-64" />
      <div className="px-4 my-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        {description}
      </div>
      <div className="px-4 my-2">
        <div className="flex flex-wrap gap-2">
          {datatypes.map((datatype, index) => (
            <span
              key={index}
              className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 shadow-md"
            >
              {datatype}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-center px-4 py-2">
        <a
          href={url}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 rounded-full w-full text-center shadow-lg"
        >
          View Dashboard
        </a>
      </div>
    </div>
  );
}
