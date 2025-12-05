import ContactForm from "../components/ContactForm";
import PageTitle from "../components/PageTitle";

const Contact = () => {
    return (
        <div className="bg-c3 py-15">
            <PageTitle text="Contact Me" color={"c2"}/>
            <ContactForm/>
        </div>
    );
};

export default Contact;