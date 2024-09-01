import CreateReminder from "./components/CreateReminder.jsx";
import NavBar from "./components/NavBar.jsx";
import MyReminder from "./components/MyReminder.jsx";
import { useState } from "react";
import SentReminder from "./components/SentReminder.jsx";

export default function App() {
  const [activeComponent, setActiveComponent] = useState("Send Reminder");

  function handleNavClick(key) {
    setActiveComponent(key); // Update state with the selected key
  }

  return (
    <div className="w-2/4 h-[385px] ml-10 mt-10 bg-slate-100">
      <NavBar onNavClick={handleNavClick} />

      {activeComponent === "Send Reminder" && <CreateReminder />}
      {activeComponent === "My Reminder" && <MyReminder />}
      {activeComponent === "Sent Reminder" && <SentReminder />}
    </div>
  );
}
