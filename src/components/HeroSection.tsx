import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Trophy, Lightbulb } from "lucide-react";

const HeroSection = () => {
  const scrollToClubs = () => {
    const clubsSection = document.getElementById("clubs-section");
    clubsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://insight.mitsgwalior.in/wp-content/uploads/2024/12/Madhav_Institute_of_Technology__Science.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            MITS Gwalior
            <span className="block text-accent">Student Clubs</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto">
            Discover your passion, build your skills, and create lasting memories with our vibrant student community
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="glass-effect rounded-xl p-6 text-center transition-spring hover:scale-105">
            <Users className="w-12 h-12 mx-auto mb-4 text-accent" />
            <h3 className="font-semibold text-lg mb-2">Active Community</h3>
            <p className="text-white/80 text-sm">Join 500+ passionate students</p>
          </div>
          
          <div className="glass-effect rounded-xl p-6 text-center transition-spring hover:scale-105">
            <Lightbulb className="w-12 h-12 mx-auto mb-4 text-accent" />
            <h3 className="font-semibold text-lg mb-2">Innovation Hub</h3>
            <p className="text-white/80 text-sm">Explore cutting-edge technology</p>
          </div>
          
          <div className="glass-effect rounded-xl p-6 text-center transition-spring hover:scale-105">
            <Trophy className="w-12 h-12 mx-auto mb-4 text-accent" />
            <h3 className="font-semibold text-lg mb-2">Competitions</h3>
            <p className="text-white/80 text-sm">Participate in hackathons & events</p>
          </div>
          
          <div className="glass-effect rounded-xl p-6 text-center transition-spring hover:scale-105">
            <GraduationCap className="w-12 h-12 mx-auto mb-4 text-accent" />
            <h3 className="font-semibold text-lg mb-2">Skill Development</h3>
            <p className="text-white/80 text-sm">Learn from industry experts</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={scrollToClubs}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 text-lg transition-spring hover:scale-105"
          >
            Explore Clubs
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 text-lg transition-spring hover:scale-105"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
    </section>
  );
};

export default HeroSection;