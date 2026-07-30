import Registration from "../components/registration-page";
import StarterPokemon from "../components/Starter-pokemon";


function AuthPage() {
    return (
        <main className="flex min-h-screen bg-[var(--brown)]">
            <StarterPokemon />
            <Registration />
        </main>
    )
}

export default AuthPage