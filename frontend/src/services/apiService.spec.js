import { register } from "./apiService";
global.fetch = jest.fn(() =>
  Promise.reject(new Error("Network error"))
);

describe("register function", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("handles network error", async () => {
    const userData = {
      email: "test@example.com",
      personType: "individual",
      fullName: "Test User",
      cpf: "12345678901",
      birthdate: "1990-01-01",
      phone: "1234567890",
      password: "password123",
    };

    await expect(register(userData)).rejects.toThrow("Network error");
  });

  test("handles network error with different user data", async () => {
    const userData = {
      email: "test2@example.com",
      personType: "company",
      fullName: "Test Company",
      cpf: "98765432100",
      birthdate: "1980-02-02",
      phone: "0987654321",
      password: "password456",
    };

    await expect(register(userData)).rejects.toThrow("Network error");
  });

  test("handles network error with invalid email", async () => {
    const userData = {
      email: "invalid_email",
      personType: "individual",
      fullName: "Test User",
      cpf: "12345678901",
      birthdate: "1990-01-01",
      phone: "1234567890",
      password: "password123",
    };

    await expect(register(userData)).rejects.toThrow("Network error");
  });

  test("handles network error with missing required fields", async () => {
    const userData = {
      personType: "individual",
      fullName: "Test User",
      cpf: "12345678901",
      birthdate: "1990-01-01",
      phone: "1234567890",
      password: "password123",
    };

    await expect(register(userData)).rejects.toThrow("Network error");
  });

  test("handles network error with invalid person type", async () => {
    const userData = {
      email: "test@example.com",
      personType: "invalid",
      fullName: "Test User",
      cpf: "12345678901",
      birthdate: "1990-01-01",
      phone: "1234567890",
      password: "password123",
    };

    await expect(register(userData)).rejects.toThrow("Network error");
  });
});