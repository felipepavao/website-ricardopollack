import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ricardo Pollack</title>
        <meta name="description" content="" />
      </Helmet>

      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-5xl font-black">Ricardo Pollack</h1>
          <p className="text-muted-foreground text-lg">Em breve.</p>
        </div>
      </main>
    </>
  );
};

export default Index;
