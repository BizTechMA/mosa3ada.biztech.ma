import React from "react";
import Image from "next/image";
function Navbar() {
  return (
    <div class="navbar bg-base-100 shadow-md">
      <div class="navbar-start">
        <Image
          src="/mosa3ada.svg"
          alt="Mosa3ada Logo"
          className="mr-2"
          width={148}
          height={37}
          priority
        />
      </div>
      <div class="navbar-end">
        <input type="checkbox" class="toggle" />
      </div>
    </div>
  );
}

export default Navbar;
