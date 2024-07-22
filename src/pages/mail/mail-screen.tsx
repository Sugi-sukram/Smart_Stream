import React, { useState } from "react";
import "../../styles/common-styles/common-style.scss";
import "../../styles/mail/mail.scss";
import ButtonComponent from "../../components/element-compnent/button-component";
import { mailNavItem, mailNavlist } from "../../config/email/email-config";
import { Link } from "react-router-dom";
import InboxComponent from "../../components/sub-component/mail-component/Inbox-component";
const MailScreen: React.FC = () => {
  const [mailNavigater, setMailNavigater] = useState("Inbox");

  return (
    <div className="screen-color screen-column-space">
      <h1 className="screen-title">Inbox</h1>
      <div className="inbox-wrapper">
        <div className="left-panel">
          <ButtonComponent
            title={"+ Compose"}
            styles={{ borderRadius: "0.5rem", cursor: "pointer" }}
            height={"35px"}
            width={"100%"}
            backgroundColor={"#4880FF"}
            color={"#fff"}
            handleClick={() => {}}
            className={"button-component-hover common-btn"}
          />
          <div className="my-email-wrapper">
            <div className="my-email-area">My Email</div>
            <div className="my-email-container">
              {mailNavlist.items.map((mail: mailNavItem, index: number) => (
                <li className="nav-list-item" key={index.toString()}>
                  <div
                    className="nav-list-item-link"
                    onClick={() => {
                      setMailNavigater(mail.title);
                    }}
                  >
                    <div className="icon-text-flex">
                      <mail.icon
                        className="mail-icon"
                        fill={mail.title == mailNavigater && "#4880FF"}
                      />
                      <div
                        style={{
                          color:
                            mail.title == mailNavigater ? "#4880FF" : "black",
                        }}
                      >
                        {mail.title}
                      </div>
                    </div>
                    <div
                      style={{
                        color:
                          mail.title == mailNavigater ? "#4880FF" : "black",
                      }}
                      className="mail-cont"
                    >
                      {mail.count.toLocaleString("hi-IN")}
                    </div>
                  </div>
                </li>
              ))}
            </div>
          </div>
        </div>
        <div className="right-panel">
          {mailNavlist.items.map((ListOut: mailNavItem, index: number) => (
            <>
              {mailNavigater.includes(ListOut.title) && (
                <ListOut.component key={index.toString()} />
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MailScreen;
