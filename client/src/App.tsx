import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import GamePage from "@/pages/GamePage";
import HistoryPage from "@/pages/HistoryPage";
import ChallengeCreatePage from "@/pages/ChallengeCreatePage";
import ChallengeJoinPage from "@/pages/ChallengeJoinPage";
import ChallengeResultPage from "@/pages/ChallengeResultPage";
import AboutPage from "@/pages/AboutPage";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import SplashScreen from "./components/SplashScreen";
import { ThemeProvider } from "./contexts/ThemeContext";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/jogo" component={GamePage} />
      <Route path="/historico" component={HistoryPage} />
      <Route path="/desafio" component={ChallengeCreatePage} />
      <Route path="/entrar-desafio" component={ChallengeJoinPage} />
      <Route path="/resultado-desafio" component={ChallengeResultPage} />
      <Route path="/sobre" component={AboutPage} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Mostrar splash screen apenas na primeira vez
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    if (hasSeenSplash) {
      setShowSplash(false);
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    sessionStorage.setItem("hasSeenSplash", "true");
  };

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
