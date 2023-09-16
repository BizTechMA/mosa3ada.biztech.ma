import { promises as fs } from "fs";
import path from "path";
import getAllDocuments from "../../../utils/firebase/firestore/getAllDocuments";

export async function getHelps() {
  // fetching a document usage example
  /**
     * Logs 
     * {
          location: '',
          'contact ': { fb_username: '', phone_number: '', ig_username: '' },
          date: Timestamp { seconds: 1694473200, nanoseconds: 877000000 },
          needs: [ 'إغاثة', 'طعام وماء' ],
          source: '',
          exact_position: GeoPoint { _lat: 0, _long: 0 },
          details: '',
          city: ''
        }
     */
  let data = [];
  if (process.env.CURRENT_ENV === "PRODUCTION") {
    data = (await getAllDocuments("helps")).map((item) => ({
      docId: item.id,
      ...item.data,
    }));
  } else {
    const jsonDirectory = path.join(process.cwd(), "helpsData");
    const fileContents = await fs.readFile(jsonDirectory + "/helpsV2", "utf8");
    data = JSON.parse(fileContents.toLocaleString()).map((item) => ({
      docId: item.id,
      ...item.data,
    }));
  }

  return data;
}
