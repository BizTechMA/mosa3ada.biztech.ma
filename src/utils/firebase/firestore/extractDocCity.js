// This is used to convert firebase documents to array of cities object used in the home autocomplete (src/app/helpsFilter.jsx)
export const extractDocCity = (docs) => {
  if (!docs.length) return;
  return docs.map((doc) => {
    return { id: doc.id, label: doc.data().city };
  });
};
