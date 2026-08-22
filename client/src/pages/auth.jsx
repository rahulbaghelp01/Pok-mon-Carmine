import Registration from "../components/registration-page";
import StarterPokemon from "../components/Starter-pokemon";
import CardBack from "../components/POKEMONCARD-backside";

function AuthPage() {
    return (
        <main className="flex flex-col min-h-screen bg-[var(--brown)]  lg:flex-row overflow-hidden   lg:px-4  lg:overflow-hidden">
            <StarterPokemon />
            <Registration />
       
        </main>
    )
}

export default AuthPage