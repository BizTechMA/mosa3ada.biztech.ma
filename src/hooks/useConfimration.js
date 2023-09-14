import { useState, useEffect } from "react";

export const useConfirmation = ({ id, confirmation_count, ip }) => {
    const [helpCount, setHelpCount] = useState(confirmation_count);
    const [confirmationCount, setConfirmationCount] = useState(confirmation_count);

    
    useEffect(() => {
        if(helpCount > confirmation_count)
        {
            fetch(`/api/help/${id}`, {
                method: "PATCH",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({ confirmation_count: helpCount , ip}),
            }).then((res) => res.json()).then(data => {
                if (data.success) {
                    setConfirmationCount(helpCount);
                    alert("تم تأكيد الطلب بنجاح");
                }
                else {
                    alert("حدث خطأ ما");
                }
            });
        }
    }, [helpCount]);

    return { confirmationCount, setHelpCount }
}