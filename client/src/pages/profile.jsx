import Navbar from "../components/navbar.jsx";
import Card from "../components/card.jsx";
import EditIcon from "../assets/svg-border/edit.jsx";

const demi = [1,2,3,4,5,6,7,8,9,10];

export default function Profile() {
    return (
        <main className="flex flex-col bg-[image:var(--paper)] bg-cover min-h-screen items-center gap-5 font-cinzel">
            <Navbar />
            <p>Trainer information</p>
            <section className="w-1/2 max-w-5xl mx-auto mt-10 flex justify-between">
            
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />
                    <button ><EditIcon /></button>
                </div>
                <div>
                    <label htmlFor="password">password:</label>
                    <input type="password" id="password" name="password" />
                    <button ><EditIcon /></button>
                </div>
            </section>
            
            <section className="flex flex-col w-1/2 max-w-5xl justify-center">
                <div className="flex flex-col justify-between items-center mb-4">
                <p>DECK</p>
                <div className="flex gap-10">
                    <Card />
                    <Card />
                    <Card />

                </div>
            </div>
            </section>
            <section className="flex flex-col w-1/2 max-w-5xl justify-center">
                <div className="flex flex-col justify-between items-center mb-4">
                <p className="mb-4">your cards</p>
                <div className="grid grid-cols-3  gap-10">
                    <Card />
                    <Card />
                    <Card />

                </div>
            </div>
            </section>
        </main>
    )
}