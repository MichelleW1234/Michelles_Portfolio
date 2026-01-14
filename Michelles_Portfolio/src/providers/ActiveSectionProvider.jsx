import { createContext, useContext, useState, useEffect } from "react";

const ActiveSectionContext = createContext();

export function ActiveSectionProvider({ children }) {

    const [ActiveSection, setActiveSection] = useState(() => {
        try {
            const stored = JSON.parse(sessionStorage.getItem("ActiveSection"));
            return stored !== null ? stored : 0; 
        } catch {
            return 0;
        }
    });

    useEffect(() => {
        sessionStorage.setItem("ActiveSection", JSON.stringify(ActiveSection));
    }, [ActiveSection]);

    return (
        <ActiveSectionContext.Provider value={{ ActiveSection, setActiveSection}}>
        {children}
        </ActiveSectionContext.Provider>
    );
}

export function useActiveSection() {
  return useContext(ActiveSectionContext);
}

