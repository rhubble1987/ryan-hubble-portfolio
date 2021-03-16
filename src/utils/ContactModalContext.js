import React from "react";
import ContactModal from "../components/ContactModal";

const ContactModalContext = React.createContext({
    contactModal: "modal fade show"
});

export default ContactModalContext;