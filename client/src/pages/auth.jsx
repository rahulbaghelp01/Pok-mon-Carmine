import Registration from "../components/registration-page";
import StarterPokemon from "../components/Starter-pokemon";


function AuthPage() {
    return (
        <main className="flex flex-col min-h-screen bg-[var(--brown)] lg:flex-row overflow-auto lg:overflow-hidden">
            <StarterPokemon />
            <Registration />
        </main>
    )
}

export default AuthPage