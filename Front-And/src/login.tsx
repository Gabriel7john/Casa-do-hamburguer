import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./components/input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubimt(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro ao fazer login");
      }

      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      navigate("/home");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Erro ao conectar com o servidor",
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      className="flex h-screen items-center justify-center bg-[#161410]"
      onSubmit={handleSubimt}
    >
      <div className="flex flex-col justify-center gap-2">
        <img src="./logo.png" alt="" className="mb-4" />
        <Input
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="text-center text-sm text-red-500">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full cursor-pointer rounded-md bg-[#C92A0E] py-2 text-sm text-white disabled:opacity-50"
        >
          {loading ? "Carregando..." : "Login"}
        </button>
      </div>
    </form>
  );
};

export default Login;
