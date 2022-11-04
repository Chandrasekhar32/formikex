import { useEffect, useState } from "react";
import "./App.css";
// import SampleForm from "./components/SampleForm";
import { BsSun, BsFillSunFill } from "react-icons/bs";
import FeedbackForm from "./components/FeedbackForm";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getStorageTheme);
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      <div onClick={toggleTheme} className="theme-setter">
        <div className="theme-btn">
          {theme === "light-theme" ? <BsSun /> : <BsFillSunFill />}
          {theme === "light-theme"
            ? "Switch to Dark Mode"
            : "Switch to Light Mode"}
        </div>
      </div>
      {/* <SampleForm /> */}
      <FeedbackForm />
    </div>
  );
}

export default App;
