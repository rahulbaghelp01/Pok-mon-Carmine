
//Function to get the pokemon data for the registration page
export async function getPokemons() {
    const response = await fetch("http://localhost:6969/auth")

    const data = await response.json();

    return {
        ok: response.ok,
        data
    }
}

// Function to validate the token
export async function validateToken() {
    const response = await fetch("http://localhost:6969/auth/validate", {
        method: "POST",
        headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`
        }
    });

    const data = await response.json();

    return {
        ok: response.ok,
        data
    };
}


// Function to register a new user
export async function register(username, email, password, pokemonId) {
    const response = await fetch("http://localhost:6969/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            email,
            password,
            pokemonId,
        }),
    });

    const data = await response.json();

    localStorage.setItem("token", data.token);

    return {
        ok:response.ok
    }
}