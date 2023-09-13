import { updateFieldInDocument } from '../../../../utils/firebase/firestore/updateFieldInDocument.js';
import getDocument from '../../../../utils/firebase/firestore/getDocument.js';
import { arrayUnion } from "firebase/firestore";

const updateFieldInHelp = updateFieldInDocument('helps');

export async function getHelpById(id) {
    const helpData = await getDocument('helps', id)
    return { docId: helpData.result.id, ...helpData.result.data() };
}

export async function updateConfirmationCount(id, data) {
    const { confirmation_count, ip} = data;
    const current_date = new Date().toISOString();
    const help = await getHelpById(id);
    const checkIfAlreadyConfirm  = help?.confirmations?.find(item => item.ip === ip);
    if(checkIfAlreadyConfirm && help.confirmations.length !== 0) return false
    await updateFieldInHelp(id, {
        confirmation_count,
        confirmations: arrayUnion({ ip, date: current_date })
        });
    return true;
}