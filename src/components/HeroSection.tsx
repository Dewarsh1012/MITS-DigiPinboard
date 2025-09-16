import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Trophy, Lightbulb } from "lucide-react";

const HeroSection = () => {
  const scrollToClubs = () => {
    const clubsSection = document.getElementById("clubs-section");
    clubsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('https://insight.mitsgwalior.in/wp-content/uploads/2024/12/Madhav_Institute_of_Technology__Science.jpg')"
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
            MITS Gwalior
            <span className="block text-primary">Student Clubs</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Discover your passion, build your skills, and create lasting memories with our vibrant student community
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-card shadow-lg rounded-xl p-6 text-center transition-spring hover:scale-105 hover:shadow-xl">
            <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold text-lg mb-2 text-foreground">Active Community</h3>
            <p className="text-muted-foreground text-sm">Join 500+ passionate students</p>
          </div>
          
          <div className="bg-card shadow-lg rounded-xl p-6 text-center transition-spring hover:scale-105 hover:shadow-xl">
            <Lightbulb className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold text-lg mb-2 text-foreground">Innovation Hub</h3>
            <p className="text-muted-foreground text-sm">Explore cutting-edge technology</p>
          </div>
          
          <div className="bg-card shadow-lg rounded-xl p-6 text-center transition-spring hover:scale-105 hover:shadow-xl">
            <Trophy className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold text-lg mb-2 text-foreground">Competitions</h3>
            <p className="text-muted-foreground text-sm">Participate in hackathons & events</p>
          </div>
          
          <div className="bg-card shadow-lg rounded-xl p-6 text-center transition-spring hover:scale-105 hover:shadow-xl">
            <GraduationCap className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold text-lg mb-2 text-foreground">Skill Development</h3>
            <p className="text-muted-foreground text-sm">Learn from industry experts</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={scrollToClubs}
            size="lg"
            className="font-semibold px-8 py-4 text-lg"
          >
            Explore Clubs
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="font-semibold px-8 py-4 text-lg"
          >
            Learn More
          </Button>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;