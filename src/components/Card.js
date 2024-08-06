import React from "react";

export default function Card({ text, color }) {
  return (
    <div
      class={"shrink rounded-[20px] p-2 md:p-4 lg:p-8 m-1 basis-1/3 " + color}
    >
      <h2 class="text-white font-sans text-xl sm:text-2xl font-bold p-2 m-1 text-wrap">
        {text}
      </h2>
    </div>
  );
}
