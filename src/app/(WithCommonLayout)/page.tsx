import About from "@/components/about/About";
import Banner from "@/components/banner/Banner";
import Marque from "@/components/marquee/Marque";
import TestimonialSlider from "@/components/review/Testimonials";
import ConsultingCardSlider from "@/components/service/ConsultingCardSlider";
import RecentWorks from "@/components/showcase/RecentWorks";
import StatsSection from "@/components/status/StatsSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <Marque />
      <About />
      <StatsSection />
      <ConsultingCardSlider />
      <RecentWorks />
      <TestimonialSlider />
    </div>
  );
}
