import { useState } from "react";

const Journey = () => {

    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [qualification, setQualification] = useState("");
    const [interestedIn, setInterestedIn] = useState("");

    const [error, setError] = useState("");
    const [showModal, setShowModal] = useState(false);


    const handleSubmit = (e) => {

        e.preventDefault();

        setError("");


        if (phone === "") {
            setError("Please enter your phone number.");
            return;
        }


        if (phone.length !== 10) {
            setError("Please enter a valid 10-digit phone number.");
            return;
        }


        if (email === "") {
            setError("Please enter your email.");
            return;
        }


        if (!email.includes("@")) {
            setError("Please enter a valid email address.");
            return;
        }


        if (qualification === "") {
            setError("Please select your current qualification.");
            return;
        }


        if (interestedIn === "") {
            setError("Please select what you are interested in.");
            return;
        }


        setShowModal(true);


        setPhone("");
        setEmail("");
        setQualification("");
        setInterestedIn("");
    };


    return (

        <div className="flex flex-col md:flex-row justify-between bg-blue-100 px-5 md:px-10 pb-10">


            {/* Left */}

            <div className="min-h-[50vh] md:h-[70vh] w-full md:w-[60vw] text-lg text-black font-bold">

                <h1 className="pt-10 ml-0 md:ml-9 text-2xl md:text-3xl">

                    Kick Off your ACCA Prep journey with
                    <br className="hidden md:block" />

                    IndigoLearn

                </h1>


                <p className="ml-0 md:ml-4 pt-2 pb-4">

                    Sign in and get instant access to our FREE Courses

                </p>


                <button className="ml-0 md:ml-4 bg-[#e8682c] rounded-lg h-[90px] w-[200px]">

                    ACCA LEARNING PARTNER

                </button>

            </div>


            {/* Right Form */}

            <div className="bg-white p-6 md:p-10 border border-black rounded-lg w-full md:w-[30vw] md:min-w-[350px] mt-5 md:mt-9">

                <h2 className="mb-2">

                    Aspiring to be an ACCA? Get in touch with us!

                </h2>


                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Phone Number*"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="border border-black px-3 py-2 mb-2 w-full"
                    />


                    <input
                        type="email"
                        placeholder="Email-ID"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-black px-3 py-2 mb-2 w-full"
                    />


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


                    {error && (

                        <p className="text-red-600 text-sm mb-2">

                            {error}

                        </p>

                    )}


                    <button
                        type="submit"
                        className="bg-blue-400 text-white px-6 py-2 rounded-lg w-full md:w-auto"
                    >

                        Request Call Back

                    </button>

                </form>

            </div>


            {/* Success Modal */}

            {showModal && (

                <div className="fixed inset-0 bg-black/50 flex items-center justify-center px-5 z-50">

                    <div className="bg-white rounded-lg p-8 w-full max-w-[400px] text-center">

                        <h2 className="text-2xl font-bold text-green-600">

                            Success!

                        </h2>


                        <p className="mt-4">

                            Your callback request has been submitted successfully.

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
    )
}

export default Journey;