import { useEffect, useRef } from "react";

const useAutoScroll = (dependency) => {
    const chatEndRef = useRef(null);

    useEffect(() => {
        if (chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [dependency]); // dependency 변경될 때마다 실행

    return chatEndRef;
};

export default useAutoScroll;
