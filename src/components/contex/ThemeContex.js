import React from "react";

const ThemaContext = React.createContext({theme: "light", toggleTheme: () => {}});

export default ThemaContext