"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type DeleteContextType = {
    isDeleteOpen: boolean;
    setIsDeleteOpen: (value: boolean) => void;
};

const DeleteContext = createContext<DeleteContextType | null>(null);

export function DeleteProvider({ children }: { children: ReactNode }) {
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    return (
        <DeleteContext.Provider value={{
            isDeleteOpen, setIsDeleteOpen,
        }}>
            {children}
        </DeleteContext.Provider>
    );
}

export const useDelete = () => {
    const context = useContext(DeleteContext);
    if (!context) {
        throw new Error("useDelete must be used inside DeleteProvider");
    }
    return context;
};