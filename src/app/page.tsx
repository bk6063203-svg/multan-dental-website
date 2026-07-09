import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Features from "@/components/Features";
import Doctor from "@/components/Doctor";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-0">
      <Navbar />
      <Hero />
      <Features />
      <Doctor />
      <Services />
      {/* Reviews component ko yahan add karna tha */}
      <Reviews /> 
      <Gallery />
      <BookingForm />
      <Footer />
    </main>
  );
}