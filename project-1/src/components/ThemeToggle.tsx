import type { ThemeMode } from "../types/ThemeMode";

type prop = {
    theme : ThemeMode,
    toggleTheme : ()=>void
}


const ThemeToggle = ({theme, toggleTheme}:prop)=>{
    return <>
    <button onClick={toggleTheme}>
        Switch {theme === "light" ? "dark" : "light"} to mode 
    </button>
    
    </>
}

export default ThemeToggle