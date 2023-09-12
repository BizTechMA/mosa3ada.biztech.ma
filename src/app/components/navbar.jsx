import React from "react";
import Image from "next/image";
function Navbar() {
  return (
    <div class="navbar bg-base-100 shadow-md flex justify-center items-center">
        <Image
          src="/mosa3ada.svg"
          alt="Mosa3ada Logo"
          className="mr-2"
          width={148}
          height={37}
          priority
        />
    </div>
  );
}

export default Navbar;
