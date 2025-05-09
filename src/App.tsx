
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import OverviewPage from "./pages/OverviewPage";
import TypesPage from "./pages/TypesPage";
import IonicPage from "./pages/IonicPage";
import CovalentPage from "./pages/CovalentPage";
import ApplicationPage from "./pages/ApplicationPage";
import GalleryPage from "./pages/GalleryPage";
import NotFound from "./pages/NotFound";
import SidebarProvider from "./components/SidebarProvider";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="overview" element={<OverviewPage />} />
              <Route path="types" element={<TypesPage />} />
              <Route path="ionic" element={<IonicPage />} />
              <Route path="covalent" element={<CovalentPage />} />
              <Route path="application" element={<ApplicationPage />} />
              <Route path="gallery" element={<GalleryPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
