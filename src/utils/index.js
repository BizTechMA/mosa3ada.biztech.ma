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
  Date: Symbol("date"),
};

export function formatDate(dateToFormat, formatDate) {
  let ops = {};
  // if you add another format use switch instead
  if (formatDate === formatDates.Date) {
    ops = { month: "long", day: "numeric", year: "numeric" };
  } else if (formatDate === formatDates.Hours) {
    ops = { hour: "2-digit", minute: "2-digit" };
  }

  if (!dateToFormat) return;
  const formatedData = parseDate(dateToFormat);

  return (
    formatedData && new Intl.DateTimeFormat("ar-MA", ops)?.format(formatedData)
  );
}

function parseDate(dateString) {
  const parts = dateString.split(" ");
  const dateParts = parts[0].split("/");
  const timeParts = parts[1].split(":");

  const year = parseInt(dateParts[2], 10);
  const month = parseInt(dateParts[1], 10) - 1;
  const day = parseInt(dateParts[0], 10);
  const hour = parseInt(timeParts[0], 10);
  const minute = parseInt(timeParts[1], 10);
  const second = parseInt(timeParts[2], 10);
  return new Date(year, month, day, hour, minute, second);
}

// function excelDateToJSDate(serial) {
//   const start = new Date(1899, 11, 30);

//   const days = Math.floor(serial);
//   const fraction = serial - days;

//   let date = new Date(start.getTime() + days * 24 * 60 * 60 * 1000);

//   const millisecondsInADay = 24 * 60 * 60 * 1000;
//   date = new Date(date.getTime() + fraction * millisecondsInADay);
//   return date;
// }
