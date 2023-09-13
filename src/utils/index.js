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


// format date to format
//enums
export const formatDates = {
	Hours: Symbol("hours"),
	Date: Symbol("date")
};

export function formatDate(dateToFormat, formatDate) {
    let ops = {}
    // if you add another format use switch instead
    if (formatDate === formatDates.Date) {
        ops = {month: "long", day: "numeric", year: "numeric"}
    } else if(formatDate === formatDates.Hours) {
        ops = {hour:'2-digit', minute:'2-digit'}
    }
    
    if (dateToFormat.hasOwnProperty('seconds')) {
      dateToFormat = new Date(dateToFormat.seconds * 1000);
    }
    return dateToFormat && new Intl.DateTimeFormat('ar-MA', ops).format(dateToFormat);
}