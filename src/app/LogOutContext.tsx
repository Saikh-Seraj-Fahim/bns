"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type LogOutContextType = {
    isLogoutOpen: boolean;
    setIsLogoutOpen: (value: boolean) => void;
};

const LogOutContext = createContext<LogOutContextType | null>(null);

export function LogOutProvider({ children }: { children: ReactNode }) {
    const [isLogoutOpen, setIsLogoutOpen] = useState(false);

    return (
        <LogOutContext.Provider value={{
            isLogoutOpen, setIsLogoutOpen,
        }}>
            {children}
        </LogOutContext.Provider>
    );
}

export const useLogOut = () => {
    const context = useContext(LogOutContext);
    if (!context) {
        throw new Error("useLogOut must be used inside LogOutProvider");
    }
    return context;
};