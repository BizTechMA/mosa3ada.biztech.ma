import { updateFieldInDocument } from "../../../../utils/firebase/firestore/updateFieldInDocument.js";
import getDocument from "../../../../utils/firebase/firestore/getDocument.js";

const updateFieldInHelp = updateFieldInDocument("helps");

export async function getHelpById(id) {
  const helpData = await getDocument("helps", id);
  return { docId: helpData.result.id, ...helpData.result.data() };
}

export async function updateConfirmationCount(id) {
  const help = await getHelpById(id);
  await updateFieldInHelp(id, {
    ...help,
    confirmation_count: help.confirmation_count + 1,
  });
  return true;
}

export async function updateDisConfirmationCount(id) {
  const help = await getHelpById(id);
  await updateFieldInHelp(id, {
    ...help,
    dis_confirmation_count: !!help.dis_confirmation_count ? (help.dis_confirmation_count + 1) : 1,
  });
  return true;
}
