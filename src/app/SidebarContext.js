"use client"

import { createContext, useState, useContext } from "react";

// Create a context
const SidebarContext = createContext();

// Custom hook to use the SidebarContext
export const useSidebar = () => useContext(SidebarContext);

// SidebarProvider component to wrap your app and provide context
export const SidebarProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
};