import { createContext, useContext, useState } from "react";

export const SearchContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useSearchContext = () => {
	return useContext(SearchContext);
};

// eslint-disable-next-line react/prop-types
export const SearchContextProvider = ({ children }) => {
    const [searchInp, setsearchInp] = useState('')
	
	

	return <SearchContext.Provider value={{ searchInp,setsearchInp }}>{children}</SearchContext.Provider>;
};
