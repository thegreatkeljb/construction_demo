import { useState } from "react";
import SwipeToast from "./components/SwipeToast";

const ContactUs = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        project: '',
        message: ''
    });

    const [open, setOpen] = useState(true);
    const [toasts, setToasts] = useState([]);
    const notify = () => setToasts(t => [...t, { id: Date.now() }]);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value
        });

        // Remove error once user starts filling the field
        setErrors({
            ...errors,
            [name]: ''
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        const phoneRegex = /^(09\d{9}|\+63-?\d{3}-?\d{3}-?\d{4})$/;

        // Empty fields
        Object.entries(form).forEach(([key, value]) => {
            if (!value.trim()) {
                newErrors[key] = 'This field is required.';
            }
        });

        // Phone validation
        if (form.phone.trim() && !phoneRegex.test(form.phone.trim())) {
            newErrors.phone =
                'Enter an 11-digit number or use +63-000-000-0000 format.';
        }

        // Set error messages
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
     
        notify()
    };

    return (
        <div className="w-full max-w-3xl mx-auto">
            <form
                className="flex flex-col gap-6"
                onSubmit={handleSubmit}
            >
                {/* Name */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-lg">
                        Full Name
                    </label>

                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        placeholder="Your full name"
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 bg-transparent px-0 py-3 outline-none transition-colors focus:border-black"
                    />

                    {errors.name && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.name}
                        </p>
                    )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-lg">
                        Email Address
                    </label>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        placeholder="you@example.com"
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 bg-transparent px-0 py-3 outline-none transition-colors focus:border-black"
                    />

                    {errors.email && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.email}
                        </p>
                    )}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-lg">
                        Phone Number
                    </label>

                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        placeholder="+63-917-123-4567"
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 bg-transparent px-0 py-3 outline-none transition-colors focus:border-black"
                    />

                    {errors.phone && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.phone}
                        </p>
                    )}
                </div>

                {/* Project */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="project" className="text-lg">
                        Project Type
                    </label>

                    <select
                        id="project"
                        name="project"
                        value={form.project}
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 bg-transparent px-0 py-3 outline-none transition-colors focus:border-black"
                    >
                        <option value="">Select a project type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="industrial">Industrial</option>
                        <option value="renovation">Renovation</option>
                        <option value="other">Other</option>
                    </select>

                    {errors.project && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.project}
                        </p>
                    )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-lg">
                        Tell us about your project
                    </label>

                    <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        rows="5"
                        placeholder="Tell us about your project, requirements, or timeline..."
                        onChange={handleChange}
                        className="w-full resize-none border-b border-gray-300 bg-transparent px-0 py-3 outline-none transition-colors focus:border-black"
                    />

                    {errors.message && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.message}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    className="mt-4 w-fit bg-black px-8 py-4 text-white transition-all hover:bg-gray-800"
                >
                    Submit Inquiry
                </button>
            </form>
            <div 
            style={{ 
                    position: 'fixed',
                    bottom: '0',
                    right: '50%',
                    transform: 'translate(0, -50%)',
                    zIndex: 9999
                  }}>
                {toasts.map(t => (
                    <SwipeToast key={t.id} inline 
                    title="This website is a demo project created by Ancar Technologies and does not represent a real company or business entity. Your inquiry was not submitted." 
                    duration={8000} onClose={() => setToasts(s => s.filter(x => x.id !== t.id))}
                />
                ))}
            </div>
        </div>
        
    );
};

export default ContactUs;