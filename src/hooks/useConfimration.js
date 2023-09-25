import { useState, useMemo } from "react";
import useLocalStorage from "use-local-storage";
import toast from "react-hot-toast";
export const useConfirmation = ({ id, confirmation_count = 0 }) => {
  const [confirmationCount, setConfirmationCount] =
    useState(confirmation_count);
  const [isLoading, setIsLoading] = useState(false);

  const [quantomPtl, setQuantomPtl] = useLocalStorage("quantom_ptl", [], {
    syncData: true,
  });

  const isConfirmed = useMemo(
    () => quantomPtl?.some((item) => item.id === id),
    [id, quantomPtl],
  );

  const handleConfirmHelp = async () => {
    const currentQuantomPtl = quantomPtl?.find((item) => item.id === id);
    if (currentQuantomPtl?.ttl > Date.now()) {
      toast.error("لقد قمت بتأكيد على هذا الطلب من قبل");
      return;
    }

    setIsLoading(true);

    const type = "confirmation"; // Your query parameter value

    await fetch(`/api/help/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "CONFIRMATION"
      })
    }).catch((err) => {
      setIsLoading(false);
      toast.error("حدث خطأ ما");
    });

    setQuantomPtl((prev) => {
      let newPrev = [...(prev || [])];
      if (currentQuantomPtl) {
        const index = prev?.findIndex((item) => item.id === id);
        newPrev[index].ttl = Date.now() + 1000 * 60 * 60;
        return newPrev;
      }
      newPrev.push({ id, ttl: Date.now() + 1000 * 60 * 60 });
      return newPrev;
    });

    toast.success("تم التأكيد بنجاح");
    setConfirmationCount((prev) => (prev ? prev + 1 : 1));
    setIsLoading(false);
  };

  return { confirmationCount, isConfirmed, isLoading, handleConfirmHelp };
};
