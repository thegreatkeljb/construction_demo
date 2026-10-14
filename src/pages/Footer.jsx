import { useState } from "react";
import { Link } from "react-router";
import SwipeToast from "./components/SwipeToast";

const Footer = () => {
    const navlink_style = "mb-4";

    const [toasts, setToasts] = useState([]);

    const notify = (e) => {
        e.preventDefault();

        setToasts((t) => [
            ...t,
            {
                id: Date.now()
            }
        ]);
    };

    return (
        <footer>
            {/* Main Footer */}
            <div className="bg-gray-800 text-white">
                <div className="grid grid-cols-[1.5fr_0.5fr_1fr] gap-4 p-16">

                    {/* About */}
                    <div className="flex w-fit flex-col pl-16">
                        <span className="text-5xl font-semibold">
                            DEMO BUILDERS
                        </span>

                        <span className="mt-8 w-[80%] italic">
                            Disclaimer: This website is a demonstration
                            project created by{" "}
                            <b>Ancar Technologies</b> and does not represent
                            a real company or business entity. All names,
                            content, images, and information presented are for
                            demonstration purposes only.
                        </span>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <span className="pb-8 text-xl font-semibold">
                            QUICK LINKS
                        </span>

                        <div className="flex flex-col pt-8 text-lg">
                            <Link to="/" className={navlink_style}>
                                Home
                            </Link>

                            <Link to="/about" className={navlink_style}>
                                About
                            </Link>

                            <Link to="/services" className={navlink_style}>
                                Services
                            </Link>

                            <Link to="/portfolio" className={navlink_style}>
                                Our Portfolio
                            </Link>

                            <Link to="/contact" className={navlink_style}>
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="flex flex-col">
                        <span className="pb-8 text-xl font-semibold">
                            JOIN OUR NEWSLETTER
                        </span>

                        <span>
                            Subscribe to our newsletter to receive the latest
                            information on our projects.
                        </span>

                        <form
                            onSubmit={notify}
                            className="mt-6 flex"
                        >
                            <input
                                required
                                type="email"
                                placeholder="Enter your email address"
                                className="w-[64%] border border-white bg-transparent p-2 outline-none"
                            />

                            <button
                                type="submit"
                                className="ml-4 border border-white p-2 transition-colors hover:cursor-pointer hover:bg-white hover:text-black"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="flex items-center justify-center bg-yellow-400 py-16 text-black">
                <div className="flex w-240 flex-col items-center justify-center pr-16">
                    <span className="text-2xl font-semibold">
                        BUILD YOUR ONLINE PRESENCE
                    </span>

                    <p className="mt-4 text-center text-lg leading-relaxed">
                        Establish your own online presence with{" "}
                        <b>Ancar Technologies</b>. We develop modern,
                        responsive, and fully customized websites, apps, or
                        games built around your needs.
                    </p>

                    <span className="mt-4 text-2xl font-semibold">
                        For as low as $50 / ₱3,000
                    </span>

                    <Link
                        className="mt-6 w-fit border border-gray-800 px-6 py-3 font-semibold transition-colors hover:cursor-pointer hover:bg-gray-800 hover:text-white"
                    >
                        GET IN TOUCH
                    </Link>
                </div>
            </div>

            {/* Toast */}
            <div
                className="fixed bottom-8 left-8 z-10 translate-x-0"
            >
                {toasts.map((t) => (
                    <SwipeToast
                        key={t.id}
                        inline
                        title="This website is a demo project created by Ancar Technologies and does not represent a real company or business entity. No email subscription."
                        duration={8000}
                        onClose={() =>
                            setToasts((s) =>
                                s.filter((x) => x.id !== t.id)
                            )
                        }
                    />
                ))}
            </div>
        </footer>
    );
};

export default Footer;