import { useState } from "react";

function Registration() {
    const [isRegistered, setIsRegistered] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [identifier, setIdentifier] = useState("");
    const [passwordError, setPasswordError] = useState(false);

    const inputStyle =
        "border border-[var(--gold)] w-60 h-10 bg-[image:var(--paper)] px-4 outline-none transition-all duration-300 hover:border-white focus:border-white hover:shadow-md hover:-translate-y-0.5 rounded";

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setPasswordError(true);
            console.log("Passwords do not match");
            return;
        }

        setPasswordError(false);
        console.log("Passwords match");

        const isRegistered = await register(username,email,password)

    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setPasswordError(true);
            console.log("Passwords do not match");
            return;
        }

        setPasswordError(false);
        console.log("Passwords match");
    };

    const handleRegisterClick = (e) => {
        e.preventDefault();
        setIsRegistered(!isRegistered);
    };

    return (
        <div
            className="lg:p-x
                rounded w-[90%] lg:w-[40vw] mx-auto my-8 h-auto
                bg-[image:var(--primary)]
                m-15 mx-10 px
                shadow-2xl
                border border-[var(--gold)]/20
                hover:shadow-3xl
                transition duration-500
            "
        >
            {isRegistered ? (
                <div className="h-full">
                    <section className="font-cinzel h-full">
                        <form
                            onSubmit={handleLogin}
                            className="relative flex flex-col h-full items-center pt-10 pb-15 2xl:pt-30 2xl:gap-10 2xl:pb-0 gap-6 lg:pb-0 lg:gap-8  xl:pt-20 xl:gap-10"
                        >
                            <div className="flex flex-col items-center gap-1">
                                <p className="text-2xl text-[var(--white)] xl:text-3xl  lg:text-2xl  ">
                                    Continue your journey.
                                </p>

                                <p
                                    className={
                                        passwordError
                                            ? "text-red-500 font-cormorant text-base lg:text-lg"
                                            : "text-[var(--white)]/80 font-cormorant text-base lg:text-lg md:text-lg"
                                    }
                                >
                                    {passwordError
                                        ? "The password does not match."
                                        : "Log back in to your account."}
                                </p>
                            </div>

                            <div
                                className="
                                    flex flex-col items-center gap-8
                                    font-cormorant
                                    text-[var(--text)]
                                    font-bold
                                "
                            >
                                <input
                                    required
                                    onChange={(e) =>
                                        setIdentifier(e.target.value)
                                    }
                                    value={identifier}
                                    type="text"
                                    placeholder="EMAIL or USERNAME"
                                    className={inputStyle}
                                />

                                <input
                                    required
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    type="password"
                                    placeholder="PASSWORD"
                                    className={inputStyle}
                                />

                                <input
                                    required
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                    type="password"
                                    placeholder="CONFIRM PASSWORD"
                                    className={inputStyle}
                                />
                            </div>

                            <button
                                type="submit"
                                className="
                                    bg-[var(--gold)]
                                    text-[var(--black)]
                                    p-2 px-4
                                    rounded
                                    border border-[var(--gold)]
                                    hover:border-black
                                    hover:text-[var(--white)]
                                    hover:-translate-y-1
                                    hover:brightness-110
                                    hover:cursor-pointer
                                    transition-all duration-300
                                    w-40
                                    text-sm
                                "
                            >
                                Log In
                            </button>

                            <div className="absolute md:bottom-4 md:left-4 md:right-4 bottom-3 left-3 right-3 flex justify-between">
                                <p className="text-[var(--white)] text-xs md:text-base opacity-80 lg:text-sm">
                                    Not a trainer yet?
                                </p>

                                <button
                                    className="
                                        text-[var(--gold)]
                                    transition-all duration-300
                                    hover:text-[var(--white)]
                                    hover:underline
                                    underline-offset-4
                                    hover:cursor-pointer
                                    text-xs
                                    md:text-base lg:text-sm
                                    "
                                    onClick={handleRegisterClick}
                                >
                                    Create an account
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            ) : (
                <section className="h-full font-cinzel">
                    <form
                        onSubmit={handleRegister}
                        className="relative flex flex-col h-full items-center 2xl:pt-25 2xl:gap-10 2xl:pb-0 pt-10 pb-15 lg:pb-0 lg:pt-20 xl:pt-20   gap-6"
                    >
                        <div className="flex flex-col items-center gap-1">
                            <p className="text-2xl text-[var(--white)] md:text-3xl xl:text-3xl lg:text-2xl">
                                Start your journey.
                            </p>

                            <p
                                className={
                                    passwordError
                                        ? "text-red-500 font-cormorant text-base md:text-lg lg:text-lg"
                                        : "text-[var(--white)]/80 font-cormorant text-base md:text-lg lg:text-lg"
                                }
                            >
                                {passwordError
                                    ? "THE PASSWORD DOES NOT MATCH"
                                    : "Create your account to get started"}
                            </p>
                        </div>

                        <div
                            className="
                                flex flex-col items-center gap-8
                                font-cormorant
                                text-[var(--text)]
                                font-bold
                            "
                        >
                            <input
                                required
                                value={username}
                                onChange={(e) =>
                                    setUsername(e.target.value)
                                }
                                type="text"
                                placeholder="TRAINER NAME"
                                className={inputStyle}
                            />

                            <input
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="EMAIL"
                                className={inputStyle}
                            />

                            <input
                            required
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                type="password"
                                placeholder="PASSWORD"
                                className={inputStyle}
                            />

                            <input
                            required
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                type="password"
                                placeholder="CONFIRM PASSWORD"
                                className={inputStyle}
                            />
                        </div>

                        <button
                            type="submit"
                            className="
                                bg-[var(--gold)]
                                    text-[var(--black)]
                                    p-2 px-4
                                    rounded
                                    border border-[var(--gold)]
                                    hover:border-black
                                    hover:text-[var(--white)]
                                    hover:-translate-y-1
                                    hover:brightness-110
                                    hover:cursor-pointer
                                    transition-all duration-300
                                    w-40
                                    text-sm
                            "
                        >
                            Create trainer
                        </button>

                        <div className="absolute md:bottom-4 md:left-4 md:right-4 bottom-3 left-3 right-3 flex justify-between">
                            <p className="text-[var(--white)] text-xs md:text-base opacity-80 lg:text-sm">
                                Already a trainer?
                            </p>

                            <button
                                className="
                                    text-[var(--gold)]
                                    transition-all duration-300
                                    hover:text-[var(--white)]
                                    hover:underline
                                    underline-offset-4
                                    hover:cursor-pointer
                                    text-xs
                                    md:text-base lg:text-sm
                                "
                                onClick={handleRegisterClick}
                            >
                                Log In
                            </button>
                        </div>
                    </form>
                </section>
            )}
        </div>
    );
}

export default Registration;