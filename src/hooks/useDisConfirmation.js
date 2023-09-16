import { useState, useMemo } from "react";
import useLocalStorage from "use-local-storage";
import toast from "react-hot-toast";
export const useDisConfirmation = ({ id, dis_confirmation_count }) => {
  const [disConfirmationCount, setConfirmationCount] =
    useState(dis_confirmation_count);
  const [isLoading, setIsLoading] = useState(false);

  const [quantomPtl, setQuantomPtl] = useLocalStorage("quantom_ptl_2", [], {
    syncData: true,
  });

  const isDisConfirmed = useMemo(
    () => quantomPtl?.some((item) => item.id === id),
    [id, quantomPtl],
  );

  const handleDisConfirmHelp = async () => {
    const currentQuantomPtl = quantomPtl?.find((item) => item.id === id);
    if (currentQuantomPtl?.ttl > Date.now()) {
      toast.error("لقد قمت بالإبلاغ على هذا الطلب من قبل");
      return;
    }

    setIsLoading(true);

    await fetch(`/api/help/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "DIS_CONFIRMATION"
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

    toast.success("تم بالإبلاغ بنجاح");
    setConfirmationCount((prev) => (prev ? prev + 1 : 1));
    setIsLoading(false);
  };

  return { disConfirmationCount, isDisConfirmed, isLoading, handleDisConfirmHelp };
};
