import "../styles/tabs.css";

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabs">
      <div className="tab-buttons">
        <button
          className={activeTab === "overview" ? "active" : ""}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button
          className={activeTab === "structure" ? "active" : ""}
          onClick={() => setActiveTab("structure")}
        >
          Internal Structure
        </button>
        <button
          className={activeTab === "geology" ? "active" : ""}
          onClick={() => setActiveTab("geology")}
        >
          Surface Geology
        </button>
      </div>
    </div>
  );
};

export default Tabs;
