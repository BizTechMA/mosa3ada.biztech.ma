
import Image from 'next/image'

export function selectedIcon(key) {

    let selectedSrc = "";
    if (key == "إغاثة")
        selectedSrc = "/ighata.svg";
    else if (key === "طعام وماء")
        selectedSrc = "/food.svg";
    else if (key === "مساعدة طبية")
        selectedSrc = "/help.svg";
    else if (key === "مأوى")
        selectedSrc = "/home.svg";

    if(!selectedSrc) return;
    return (<Image
        src={selectedSrc}
        alt="needs"
        width={30}
        height={30}
        priority
    />)
}

// format date to format
//enums
export const formatDates = {
	Hours: Symbol("hours"),
	Date: Symbol("date")
};

export function formatDate(date, formatDate) {
    let ops = {}
    // if you add another format use switch instead
    if(formatDate === formatDates.Date) {
        ops = {month: "long", day: "numeric", year: "numeric"}
    } else if(formatDate === formatDates.Date) {
        ops = {hour:'2-digit', minute:'2-digit'}
    }
    return date && new Intl.DateTimeFormat('ar-MA', ops).format(date);
}