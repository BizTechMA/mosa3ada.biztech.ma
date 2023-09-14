import { Timestamp } from "firebase/firestore";
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
    
    dateToFormat = dateToFormat instanceof Timestamp ? dateToFormat.toDate()
            : (dateToFormat.hasOwnProperty('seconds') ? 
              new Date(dateToFormat.seconds * 1000 + dateToFormat.nanoseconds/1000000) : excelDateToJSDate(dateToFormat));
    return dateToFormat && new Intl.DateTimeFormat('ar-MA', ops).format(dateToFormat);
}

function excelDateToJSDate(serial) {
    const start = new Date(1899, 11, 30);

    const days = Math.floor(serial);
    const fraction = serial - days;
    
    let date = new Date(start.getTime() + days * 24 * 60 * 60 * 1000);
    
    const millisecondsInADay = 24 * 60 * 60 * 1000;
    date = new Date(date.getTime() + fraction * millisecondsInADay);
    return date;
}