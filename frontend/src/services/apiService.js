export async function register(userData) {
  try {
    const response = await fetch("http://localhost:3000/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailAddress: userData.email,
        personType: userData.personType,
        fullName: userData.fullName,
        cpf: userData.cpf,
        birthdate: userData.birthdate,
        phone: userData.phone,
        password: userData.password,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to register. Please try again.");
    }
    const json = await response.json();
    return json.message;
  } catch (error) {
    throw error;
  }
}
