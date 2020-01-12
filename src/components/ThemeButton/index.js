import React from "react"

const ThemeButton = ({ changeTheme, lightTheme }) => (
 <button onClick={changeTheme}>
   {lightTheme ? "Dark mode" : "Light mode"}
 </button>
)

export default ThemeButton