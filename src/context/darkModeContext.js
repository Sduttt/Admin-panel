import { createContext, useReducer } from "react"
import darkModeReducer from "./darkModeReducer";

const INITIAL_STATE = {
    darkmode: false
}

export const darkModeContext = createContext(INITIAL_STATE)


export const DarkModeContextProvider = ({children}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, dispatch] = useReducer(darkModeReducer, INITIAL_STATE);
    return (
        <darkModeContext.Provider value={{darkmode: state.darkmode, dispatch}}>
            {children}
        </darkModeContext.Provider>
    )
}
