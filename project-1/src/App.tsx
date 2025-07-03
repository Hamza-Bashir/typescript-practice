import type {ThemeMode} from "./types/ThemeMode";
import { useState } from "react";
import ThemeToggle from "./components/ThemeToggle";
import Counter from "./components/Counter";

function App(){

  const [theme, setTheme] = useState<ThemeMode>("light")

  const changeTheme = ()=>{
    setTheme(prev=>(prev === "light" ? "dark" : "light"))
  }
  return <>
  <div className={`${theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"} min-h-screen flex flex-col items-center justify-center p-6`}>
  <h1 className="text-4xl font-bold mb-6">Counter & Theme App</h1>
  <ThemeToggle theme={theme} toggleTheme={changeTheme} />
  <div className="mt-5">
  <Counter />
  </div>
  
  </div>
  </>
}

export default App