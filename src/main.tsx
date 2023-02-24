import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.min.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import WhatsAppContent from "./content/WhatsAppContent.json";
import Router from "./router";

const App = () => (
  <BrowserRouter>
    <Router />
    <FloatingWhatsApp
      allowEsc
      allowClickAway
      accountName={WhatsAppContent.accountName}
      phoneNumber={WhatsAppContent.phoneNumber}
      chatMessage={WhatsAppContent.chatMessage}
      placeholder={WhatsAppContent.placeholder}
      statusMessage={WhatsAppContent.statusMessage}
      avatar={WhatsAppContent.avatar}
    />
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
