import { useState } from "react";

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
}

interface FormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    subject?: string;
    message?: string;
}

const ContactForm = () => {

    const [form, setForm] = useState<FormValues>({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const [showModal, setShowModal] = useState(false);
    const [animate, setAnimate] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm(
            { ...form, [e.target.name]: e.target.value }
        );
    };

    const validate = () => {
        const newErrors: FormErrors = {};
        if (!form.firstName.trim()) newErrors.firstName = "First name is required";
        if (!form.lastName.trim()) newErrors.lastName = "Last name is required";

        if (!form.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!form.email.match(/^[a-zA-Z]+[a-zA-Z0-9\.]*[a-zA-Z0-9]+@[a-zA-Z]+[\.][a-zA-Z]+/)) {
            newErrors.email = "Invalid email format";
        }

        if (!form.subject.trim()) newErrors.subject = "Subject is required";
        if (!form.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) return;

        setShowModal(true);
        setTimeout(() => setAnimate(true), 10); 

        setForm({
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: "",
        });
        
    };

    const handleModalClose = () => {
        setAnimate(false);
        setTimeout(() => setShowModal(false), 300); 
    };

    const inputStyle = "border-b px-6 text-c5 py-4 focus:border-blue-500 outline-none";

    return (
        <>
            <form onSubmit={handleSubmit} className="max-w-180 mx-auto my-10 py-15 px-10 bg-white shadow-[4px_4px_10px_rgba(0,0,0,0.25)] font-content grid grid-cols-2 gap-y-6 gap-x-16">
                <div className="flex flex-col">
                    <label>First Name</label>
                    <input name="firstName" value={form.firstName} onChange={handleInputChange} type="text" className={inputStyle} />
                    {errors.firstName && (
                        <p className="text-red-500 text-sm my-6">{errors.firstName}</p>
                    )}
                </div>
                <div className="flex flex-col">
                    <label>Last Name</label>
                    <input name="lastName" value={form.lastName} onChange={handleInputChange} type="text" className={inputStyle} />
                    {errors.lastName && (
                        <p className="text-red-500 text-sm my-6">{errors.lastName}</p>
                    )}
                </div>
                <label className="col-span-2">Email</label>
                <input name="email" value={form.email} onChange={handleInputChange} type="text" className={inputStyle + " col-span-2"} />
                {errors.email && (
                    <p className="col-span-2 text-red-500 text-sm">{errors.email}</p>
                )}
                <label className="col-span-2">Subject</label>
                <input name="subject" value={form.subject} onChange={handleInputChange} type="text" className={inputStyle + " col-span-2"} />
                {errors.subject && (
                    <p className="col-span-2 text-red-500 text-sm">{errors.subject}</p>
                )}
                <label className="col-span-2">Message</label>
                <input name="message" value={form.message} onChange={handleInputChange} type="text" className={inputStyle + " col-span-2"} />
                {errors.message && (
                    <p className="col-span-2 text-red-500 text-sm">{errors.message}</p>
                )}

                <button type="submit" className="w-20 bg-blue-600 text-white mt-6 py-2 px-4 rounded-md hover:bg-blue-700 transition">
                    Send
                </button>
            </form>
            
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${animate ? "bg-opacity-50" : "bg-opacity-0"}`} />

                    {/* Modal Box */}
                    <div className={`relative bg-white p-6 rounded-lg shadow-lg w-full max-w-sm text-center transform transition-all duration-300 ease-out ${animate ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
                        <h2 className="text-xl font-semibold mb-4">Thank you for contacting me!</h2>
                        <p className="text-gray-700 mb-6">
                            I will get back to you very soon.
                        </p>
                        <button onClick={handleModalClose} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                            Close
                        </button>
                    </div>
                </div>
            )}

        </>
    );
};

export default ContactForm;