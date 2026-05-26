import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4 animate-fade-in">
        <h1 className="text-6xl font-black text-muted-foreground">404</h1>
        <p className="text-lg text-foreground">Página não encontrada.</p>
        <button
          onClick={() => navigate("/")}
          className="btn-cta mt-4"
        >
          Voltar ao início
        </button>
      </div>
    </main>
  );
};

export default NotFound;
