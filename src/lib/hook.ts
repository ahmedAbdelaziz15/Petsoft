import { PetContext } from "@/context/PetContextProvider";
import { SearchContext } from "@/context/SearchContextProvider";
import { useContext } from "react";

export function usePetContext() {
    const context = useContext(PetContext);

    if (!context) {
        throw new Error("UsePetContext must be used with a PetContextProvider")
    }
    return context;
}


export function useSearchContext() {
    const context = useContext(SearchContext);

    if (!context) {
        throw new Error("useSearchContext must be used with a SearchContextProvider")
    }
    return context;
}