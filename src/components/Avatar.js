import React from "react";

export default function Avatar() {
  return (
    <div class=" basis-[50%] bg-[#8184D2] min-w-48 sm:mr-5 rounded-[20px] p-4 w-full h-full">
      <img
        src="/avatar.png"
        alt="avatar"
        class="rounded-full max-h-[16em] min-h-[16em] m-auto"
      />
    </div>
  );
}
