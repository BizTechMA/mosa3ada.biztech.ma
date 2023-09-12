import Image from "next/image";

export function selectedIcon(key) {
	let selectedSrc = "";
	if (key == "إغاثة") selectedSrc = "/ighata.svg";
	else if (key === "طعام وماء") selectedSrc = "/food.svg";
	else if (key === "مساعدة طبية") selectedSrc = "/help.svg";
	else if (key === "مأوى") selectedSrc = "/home.svg";

	if (!selectedSrc) return;
	return (
		<Image src={selectedSrc} alt="needs" width={30} height={30} priority />
	);
}
