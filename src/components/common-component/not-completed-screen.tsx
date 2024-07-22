import React from "react";
import "../../styles/common-styles/common-style.scss";
const NotCompletedScreen: React.FC = () => {
  return (
    <div className="not-completed-container">
      <div className="message-box">
        <h1>Not Yet Completed</h1>
        <p>We're still working on it. Check back soon!</p>
      </div>
    </div>
  );
};

export default NotCompletedScreen;
