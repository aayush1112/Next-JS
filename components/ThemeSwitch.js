import { useState } from "react";

function loadDarkMode() {
    if (typeof localStorage === 'undefined') {
        return false;
    }
    const value = localStorage.getItem('darkMode');
    return (value === null) ? false : JSON.parse(value)
}

function ThemeSwitch() {

    const [darkMode, setDarkMode] = useState(loadDarkMode);

    const handleClick = () => {

        localStorage.setItem('darkMode', JSON.stringify(!darkMode));
        setDarkMode(!darkMode)

    }

    const text = darkMode ? "Light Mode" : "Dark Mode"
    return (
        <>
            <button className="DarkMode" onClick={handleClick} suppressHydrationWarning>{text}</button>
            {darkMode &&
                <style jsx global>{`
            /* dark theme */
            :root{
                --background-color: black;
                --link-color: darkred;
                --text-color: white;
            }
            `}
                </style>
            }

        </>
    )
}

export default ThemeSwitch