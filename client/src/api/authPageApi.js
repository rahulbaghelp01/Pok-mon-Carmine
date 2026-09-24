
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:6969";

//Function to get the pokemon data for the registration page
export async function getPokemons() {
    const response = await fetch(`${API_URL}/auth`)

    const data = await response.json();

    return {
        ok: response.ok,
        data
    }
}

// Function to validate the token
export async function validateToken() {

    try{
 
    const response = await fetch(`${API_URL}/auth/validate`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    });

    const data = await response.json();

    return {
        ok: response.ok,
        data
    };
    } catch (error) {
        console.error("Error validating token:", error);
        return {
            ok: false,
            data: null
        };
    }
}


// Function to register a new user
export async function register(username, email, password, pokemonId) {
    

    const response = await fetch(`${API_URL}/auth/register`, {
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

    if (response.ok) {
        localStorage.setItem("token", data.token);
    }

    return {
        ok: response.ok,
        status: response.status
    }
}



//FUNCTION TO LOGIN A USER

export async function login(identifier, password) {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            identifier,
            password
        })
    });

    const data = await response.json();

    if (response.ok) {
        localStorage.setItem("token", data.token);
    }

    return {
        status: response.status,
        ok: response.ok,
        data
    };
}