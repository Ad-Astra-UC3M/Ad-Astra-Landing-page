import HeroSection from './sections/HeroSection.jsx';
import ProjectsPreviewSection from './sections/ProjectsPreviewSection.jsx';
import BootcampArea from './sections/BootcampArea.jsx';
import TeamPreviewSection from './sections/TeamPreviewSection.jsx';
import TechnicalAreasSection from './sections/TechnicalAreasSection.jsx';
import CompetitionsTimelineSection from './sections/CompetitionsTimelineSection.jsx';
import SponsorsPreviewSection from './sections/SponsorsPreviewSection.jsx';
import AboutUsPreviewSection from './sections/AboutUsPreviewSection.jsx';
import JoinCTASection from './sections/JoinCTASection.jsx';


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsPreviewSection />
      <BootcampArea />
      <TeamPreviewSection />
      <TechnicalAreasSection />
      <CompetitionsTimelineSection />
      <SponsorsPreviewSection />
      <AboutUsPreviewSection />
      <JoinCTASection />
    </>
  );
}
