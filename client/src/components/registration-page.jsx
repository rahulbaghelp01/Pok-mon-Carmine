import { useState } from "react"


function Registration() {

    const [isRegistered, setIsRegistered] = useState(false);


    return (<div className="rounded w-[60vw] bg-[image:var(--primary)] m-15 mx-10 px shadow-2xl border
    border-[var(--gold)]/20 hover:shadow-3xl  transition duration-500">
        {isRegistered ? <section></section> :
            <section className="font-cinzel">
                <form className="relative flex flex-col items-center py-25 gap-8">
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-3xl text-[var(--white)]">Start your journey.</p>
                        <p className="text-[var(--white)]/80 font-cormorant text-lg">Create your account to get started</p>
                    </div>
                    <div className="flex flex-col items-center gap-8 font-cormorant text-[var(--text)] font-bold ">
                        <input type="text" placeholder="TRAINER NAME "
                            className="border border-[var(--gold)] w-80 h-12 bg-[image:var(--paper)] px-4 outline-none transition-all duration-300 hover:border-white focus:border-white hover:shadow-md hover:-translate-y-0.5  rounded"
                        />
                        <input type="email" placeholder="EMAIL"
                            className="border border-[var(--gold)] w-80 h-12 bg-[image:var(--paper)] px-4 outline-none transition-all duration-300 hover:border-white focus:border-white hover:shadow-md hover:-translate-y-0.5 rounded"
                        />
                        <input type="password" placeholder="PASSWORD"
                            className="border border-[var(--gold)] w-80 h-12 bg-[image:var(--paper)] px-4 outline-none transition-all duration-300 hover:border-white focus:border-white hover:shadow-md hover:-translate-y-0.5 rounded"
                        />
                        <input type="password" placeholder="CONFIRM PASSWORD"
                            className="border border-[var(--gold)] w-80 h-12 bg-[image:var(--paper)] px-4 outline-none transition-all duration-300 hover:border-white focus:border-white hover:shadow-md hover:-translate-y-0.5 rounded"
                        />
                    </div>
                    <button className="bg-[var(--gold)] text-[var(--black)] p-2 rounded  hover:cursor-pointer hover:text-[var(--white)] hover:-translate-y-1 transition-all px-8 border border-[var(--gold)] hover:border-black duration-300 hover:brightness-110 ">Create trainer</button>
                    <div className="absolute bottom-6 left-6 right-6 flex justify-between">
                        <p className="text-[var(--white)] opacity-80">Already a trainer?</p>
                        <button className="text-[var(--gold)]
                                            transition-all
                                                        duration-300
                                                        hover:text-[var(--white)]
                                                hover:underline
                                            underline-offset-4 hover:cursor-pointer">Log In</button>
                    </div>

                </form>
            </section>}

    </div>)

}







export default Registration


