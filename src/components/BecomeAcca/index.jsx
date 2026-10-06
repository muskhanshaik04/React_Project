import { useState } from "react";

const BecomeAcca = () => {

    // Form states
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [qualification, setQualification] = useState("");
    const [interestedIn, setInterestedIn] = useState("");

    // Error and modal states
    const [error, setError] = useState("");
    const [showModal, setShowModal] = useState(false);

    // Form submit
    const handleSubmit = (e) => {

        e.preventDefault();

        // Clear previous error
        setError("");

        // Phone validation
        if (phone === "") {
            setError("Please enter your phone number.");
            return;
        }

        if (phone.length !== 10) {
            setError("Please enter a valid 10-digit phone number.");
            return;
        }

        // Email validation
        if (email === "") {
            setError("Please enter your email.");
            return;
        }

        if (!email.includes("@")) {
            setError("Please enter a valid email address.");
            return;
        }

        // Qualification validation
        if (qualification === "") {
            setError("Please select your current qualification.");
            return;
        }

        // Interested In validation
        if (interestedIn === "") {
            setError("Please select what you are interested in.");
            return;
        }

        // Everything is correct
        setShowModal(true);

        // Clear form
        setPhone("");
        setEmail("");
        setQualification("");
        setInterestedIn("");
    };


    return (

        <div className="bg-[#e1e5ed] text-black min-h-[80vh] w-full px-5 md:px-10 pb-10">

            {/* ================= Heading ================= */}

            <h1 className="ml-0 md:ml-10 pt-10 text-black font-bold text-2xl md:text-3xl">

                Become ACCA in 18 Months

            </h1>


            <p className="ml-0 md:ml-10 pt-2 text-sm md:text-base">

                Acquire globally recognized accountancy qualification, ACCA
                (also called Global CA),<br className="hidden md:block" />

                and get placed in top MNCs and Big4s.

            </p>


            {/* ================= Buttons + Form ================= */}

            <div className="mt-5 ml-0 md:ml-8 mr-0 md:mr-10 flex flex-col lg:flex-row justify-between items-start gap-8">


                {/* ================= Left Side ================= */}

                <div className="flex flex-col gap-5 w-full lg:w-auto">


                    {/* First Row */}

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-4">

                        <button className="bg-white border border-black text-black px-6 py-3 rounded-lg">

                            Registered Users

                            <p className="text-black font-bold">
                                248,755
                            </p>

                        </button>


                        <button className="bg-white border border-black text-black px-6 py-3 rounded-lg">

                            Courses Enrolled

                            <p className="text-black font-bold">
                                69,147
                            </p>

                        </button>


                        <button className="bg-white border border-black text-black px-6 py-3 rounded-lg">

                            Minutes Watched

                            <p className="text-black font-bold">
                                2,880,021,687
                            </p>

                        </button>


                        <button className="bg-white border border-black text-black px-6 py-3 rounded-lg">

                            Faculty

                            <p className="text-black font-bold">
                                8 Experts
                            </p>

                        </button>

                    </div>


                    {/* Second Row */}

                    <div className="flex flex-col sm:flex-row gap-5">

                        <button className="bg-[#102552] font-bold border border-black text-white px-6 py-3 rounded-lg">

                            Download Brochure

                        </button>


                        <button className="bg-orange-600 font-bold border border-black text-white px-6 py-3 rounded-lg">

                            ACCA LEARNING PARTNER

                        </button>

                    </div>

                </div>


                {/* ================= Form ================= */}

                <div className="bg-white p-6 md:p-10 border border-black rounded-lg w-full lg:w-[30vw] lg:min-w-[350px]">

                    <h2 className="mb-2">

                        Aspiring to be an ACCA? Get in touch with us!

                    </h2>


                    <form onSubmit={handleSubmit}>

                        {/* Phone Number */}

                        <input
                            type="text"
                            placeholder="Phone Number*"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="border border-black px-3 py-2 mb-2 w-full"
                        />


                        {/* Email */}

                        <input
                            type="email"
                            placeholder="Email-ID"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-black px-3 py-2 mb-2 w-full"
                        />


                        {/* Current Qualification */}

                        <select
                            value={qualification}
                            onChange={(e) => setQualification(e.target.value)}
                            className="border border-black px-3 py-2 mb-2 w-full"
                        >

                            <option value="">
                                Current Qualification
                            </option>

                            <option value="10th">
                                10th
                            </option>

                            <option value="12th">
                                12th / Intermediate
                            </option>

                            <option value="diploma">
                                Diploma
                            </option>

                            <option value="graduation">
                                Graduation
                            </option>

                            <option value="post-graduation">
                                Post Graduation
                            </option>

                        </select>


                        {/* Interested In */}

                        <select
                            value={interestedIn}
                            onChange={(e) => setInterestedIn(e.target.value)}
                            className="border border-black px-3 py-2 mb-2 w-full"
                        >

                            <option value="">
                                Interested In
                            </option>

                            <option value="acca">
                                ACCA
                            </option>

                            <option value="courses">
                                Other Courses
                            </option>

                            <option value="career">
                                Career Guidance
                            </option>

                        </select>


                        {/* Error Message */}

                        {error && (
                            <p className="text-red-600 text-sm mb-2">
                                {error}
                            </p>
                        )}


                        {/* Submit Button */}

                        <button
                            type="submit"
                            className="bg-blue-400 text-white px-6 py-2 rounded-lg w-full sm:w-auto"
                        >
                            Request Call Back
                        </button>

                    </form>

                </div>

            </div>


            {/* ================= Success Modal ================= */}

            {showModal && (

                <div className="fixed inset-0 bg-black/50 flex items-center justify-center px-5 z-50">

                    <div className="bg-white rounded-lg p-8 w-full max-w-[400px] text-center">

                        <h2 className="text-2xl font-bold text-green-600">
                            Success!
                        </h2>

                        <p className="mt-4">
                            Your callback request has been submitted
                            successfully.
                        </p>

                        <p className="mt-2">
                            Our team will contact you soon.
                        </p>

                        <button
                            onClick={() => setShowModal(false)}
                            className="mt-5 bg-blue-600 text-white px-6 py-2 rounded-lg"
                        >
                            Close
                        </button>

                    </div>

                </div>

            )}

        </div>
    );
};

export default BecomeAcca;