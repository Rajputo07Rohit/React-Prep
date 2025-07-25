import React, { useState } from "react";

// Sample tab data
const tabs = [
  { id: "home", label: "Home", content: "Welcome to the Home tab!" },
  { id: "profile", label: "Profile", content: "This is your Profile." },
  { id: "settings", label: "Settings", content: "Adjust your Settings here." },
];

export default function TabSwitcher() {
  // TODO: Set up state to track the active tab
  const [tabsinfo, setTabsInfo] = useState("home");

  return (
    <div className="tab-switcher">
      <h1>Tab Switcher</h1>

      {/* Tab buttons */}
      <div className="tab-buttons">
        {/* TODO: Render buttons for each tab */}
        {/* Use data-testid={`tab-button-${tab.id}`} for each button */}

        {tabs.map((item) => (
          <button
            key={item.id}
            className={tabsinfo === item.id ? "active" : ""}
            onClick={(e) => setTabsInfo(item.id)}
            data-testid={`tab-button-${item.id}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="tab-content" data-testid="tab-content">
        {/* TODO: Show content of the currently active tab */}
        {tabs.find((tab) => tab.id === tabsinfo).content}
      </div>
    </div>
  );
}
