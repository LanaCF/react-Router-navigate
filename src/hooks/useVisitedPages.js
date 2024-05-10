import { useState } from "react";

export const useVisitedPages = () => {
    const [visitedPages, setVisitedPages] = useState([]);
    return { visitedPages, setVisitedPages };
}