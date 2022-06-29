import "./Header.css";
import { useState } from "react";

export default function Header() {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);

    console.log(isChecked);

    if (isChecked) {
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
    }
  };

  return (
    <header>
      <div className="[ header ] [ container flex ]">
        <div>
          <h1 className="fs-700 text-neutral">Social Media Dashboard</h1>
          <p className="text-body">Total Followers: 23,004</p>
          <hr />
        </div>
        <div className="theme">
          <p className="text-body">Dark Mode</p>
          <label htmlFor="theme-toggle">
            <input type="checkbox" id="theme-toggle" checked={isChecked} onChange={handleOnChange} />
            <span className="dark-mode"></span>
          </label>
        </div>
      </div>
    </header>
  );
}
