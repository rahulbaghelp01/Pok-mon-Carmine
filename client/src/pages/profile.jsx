import Navbar from "../components/navbar.jsx";
import Card from "../components/card.jsx";
import EditIcon from "../assets/svg-border/edit.jsx";

const demi = [1,2,3,4,5,6,7,8,9,10];

export default function Profile({username, password}) {
    return (
        <main className="flex flex-col bg-[image:var(--paper)] bg-cover min-h-screen items-center gap-10 font-cinzel">
            <Navbar />
            <p className="text-xl font-bold  mb-2">Trainer information</p>
            <section className="w-1/2 max-w-5xl mx-auto mt-5 flex justify-between items-center">
            
                <div className="flex items-center gap-2">
                    <label htmlFor="name">Name:</label>
                    <input className="border-b-2 border-black bg-transparent outline-none px-2 w-48"  type="text" id="name" name="name" value={username} readOnly />
                    <button className="p-1 bg-transparent border-none" ><EditIcon /></button>
                </div>
                <div className="flex items-center gap-2">
                    <label htmlFor="password">password:</label>
                    <input className="border-b-2 border-black bg-transparent outline-none px-2 w-48 " type="password" id="password" name="password" value={password} readOnly />
                    <button className="p-1 bg-transparent border-none" ><EditIcon /></button>
                </div>
            </section>
            
            <section className="flex flex-col w-1/2 max-w-5xl justify-center">
                <div className="flex flex-col items-center mb-4">
                <p className="text-xl font-bold mb-4 mt-2">DECK</p>
                <div className="flex gap-12 justify-center mt-2">
                    <Card />
                    <Card />
                    <Card />

                </div>
            </div>
            </section>
            <section className="flex flex-col w-1/2 max-w-5xl justify-center mt-2">
                <div className="flex flex-col items-center mb-4">
                <p className="text-xl font-bold mb-4 mt-2">YOUR COLLECTION</p>
                <div className="grid grid-cols-3 gap-10 justify-items-center mt-4">
                    <Card />
                    <Card />
                    <Card />

                </div>
            </div>
            </section>
        </main>
    )
}