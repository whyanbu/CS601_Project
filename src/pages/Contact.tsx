import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
        <div className="bg-c3 py-15">
            <div className="flex flex-row justify-between max-w-75 my-0 mx-auto items-center">
                <span className="w-6 h-6 rounded-full bg-c2 flex items-center justify-center text-2xl font-bold"></span>
                <span className="font-bold text-5xl">Contact Me</span>
            </div>
            <ContactForm/>
        </div>
    );
};

export default Contact;