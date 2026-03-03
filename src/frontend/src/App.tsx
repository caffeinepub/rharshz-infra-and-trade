import { Toaster } from "@/components/ui/sonner";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { useEffect } from "react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { useActor } from "./hooks/useActor";
import { useSeedSampleData } from "./hooks/useQueries";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { PropertiesPage } from "./pages/PropertiesPage";
import { TradeServicesPage } from "./pages/TradeServicesPage";

// Layout wrapper
function RootLayout() {
  const { actor } = useActor();
  const { mutate: seed } = useSeedSampleData();

  // Seed sample data once on mount when actor is ready
  useEffect(() => {
    if (actor) {
      seed();
    }
  }, [actor, seed]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}

// Routes
const rootRoute = createRootRoute({ component: RootLayout });

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const propertiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/properties",
  component: PropertiesPage,
});

const tradeServicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/trade-services",
  component: TradeServicesPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  propertiesRoute,
  tradeServicesRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
