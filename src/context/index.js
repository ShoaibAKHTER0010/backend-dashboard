"use client"
import { createContext } from "react";


export const GlobalContext = createContext(null);

export default function GlobalState({ children }){
    return <GlobalContext.provider value={{}}>{children}</GlobalContext.provider>
}