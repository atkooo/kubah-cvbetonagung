import { useState } from "react";
import Header from "./components/Header";
import ProjectModal from "./components/ProjectModal";
import Footer from "./components/Footer";
import PlaceholderPage from "./pages/PlaceholderPage";
import { ClosingGuideFaqSection } from "./components/home/ClosingGuideFaqSection";
import { ContactSection } from "./components/home/ContactSection";
import { DomeModelsSection } from "./components/home/DomeModelsSection";
import { FloatingActions } from "./components/home/FloatingActions";
import { HeroSection } from "./components/home/HeroSection";
import { ProjectShowcaseSection } from "./components/home/ProjectShowcaseSection";
import { ProductTypesSection } from "./components/home/ProductTypesSection";
import { TestimonialsSection } from "./components/home/TestimonialsSection";
import { WhyChooseUsSection } from "./components/home/WhyChooseUsSection";
import { Project } from "./types";
import { allPageRoutes } from "./siteRoutes";

export default function App() {
  const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
  const pageRoute = allPageRoutes.find((route) => route.path === currentPath);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (pageRoute) {
    return <PlaceholderPage title={pageRoute.label} />;
  }

  return (
    <div
      id="home"
      className="min-h-screen bg-[#030a16] font-serif text-[#E2E8F0] selection:bg-[#C5A85C] selection:text-[#030a16]"
    >
      {/* Top Header */}
      <Header />

      <HeroSection />

      <ProductTypesSection />

      <DomeModelsSection />

      <ProjectShowcaseSection onProjectSelect={setSelectedProject} />

      <WhyChooseUsSection />

      <TestimonialsSection />

      <ContactSection />

      <ClosingGuideFaqSection />

      {/* Footer component */}
      <Footer />

      {/* Modal Lightbox for Project Analysis */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <FloatingActions />
    </div>
  );
}
