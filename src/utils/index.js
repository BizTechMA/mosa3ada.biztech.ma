import Image from "next/image";

export function selectedIcon(key) {
  let selectedSrc = NEED_ICONS_SRC[key];

  if (!selectedSrc) return;
  return (
    <Image src={selectedSrc} alt="needs" width={25} height={25} priority />
  );
}

const NEED_ICONS_SRC = {
  إغاثة: "/ighata.svg",
  "طعام وماء": "/food.svg",
  "مساعدة طبية": "/help.svg",
  مأوى: "/home.svg",
  ملابس: "/clothes.svg",
};
