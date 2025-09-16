import HeroSection from "@/components/HeroSection";
import ClubCard from "@/components/ClubCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const clubsData = [
  {
    id: "gfg",
    name: "GeeksforGeeks Student Chapter",
    description: "Learn programming, data structures, algorithms, and prepare for technical interviews with like-minded peers.",
    logo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhMSEBMVFhMXGBgYFxgXGBUYFxgXFRYXGhcYExkYHSggGRslGxYYIjMhJSssMC4uGB8/RDMtNygtLisBCgoKDg0OGhAQGi8lHyUtKy0tLy0tLS8tLS0tNy0tLSstLS0vLSstLS0rLS0tKy0tLS0tLSstLS0tLS0tLSstLf/AABEIALwBDAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcBBAUDAgj/xABFEAABAwIDBAYHBQYFAwUAAAABAAIDBBEFEiUGMUFRBxMiUmGBFDJxkZOh0RUWQlSxIzNjc//EABkBAQADAQEAAAAAAAAAAAAAAAABAwQCBf/EACYRAQACAgAGAwEAAwEAAAAAAAABAgMRBBITITFRIkFSFGGBsTL/2gAMAwEAAhEDEQA/ALxREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERULwbCRfKdxmJDRz9l+19b3JjnWPFV79C+I0jBmeHLI5cmu1mN1mN8e7Kbkta1kdRQzVTi1kbJT3XOD3lv0DotxkGj/YXvprprr/F2mo77/AC13YbXW9rUlMehc9sg6lQgW6Q5vZG4P+d8w/tvFiw6m4B12yrI6UsSeqZlQqoauo3p2KOLJ9X8rAUJnReUmhqNJJ2PM0aHlfKnKkGYa94zt5aaOPub84eJ1Xu4AqYzk3vdWvJE/MRuw7cHqBfVffL8JfF5O9JWnR+93laDd2lPd477zfCEJxrEB5yOsHdxLKb3BvxvsBbgfwS4u1p1tyHjdrKjEhbnyBo3+jNv/ANzmxfFRRHDohtsBz3I6xj5P1pt9TlTxOMxtgntn6No+kZgTe2ctD/8AxGn8kpHeb2w3xOb3WM0999Wf6G3yJxuEnAj/ADMr/m1TyXrBTxKDqvWpm6XL1pWKM8S0+CaZOpy6CaaZJpk6XKNhMnaFhkJSbRqtGa0LKZOkizr8N57saSB+vJ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",
    category: "Technical",
    memberCount: 150,
    meetingTime: "Saturdays 2:00 PM",
    location: "Computer Science Lab",
    highlights: [
      "Weekly coding sessions and algorithm workshops",
      "Interview preparation and mock interviews", 
      "Participation in national coding competitions",
      "Industry expert guest lectures"
    ]
  },
  {
    id: "gdg",
    name: "Google Developer Group",
    description: "Explore Google technologies, Android development, web development, and cloud computing in a collaborative environment.",
    logo: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-goog/chapter_banners/gdg_new_logo_%282%292_SfOu7dp.png",
    category: "Technical", 
    memberCount: 120,
    meetingTime: "Sundays 3:00 PM",
    location: "Innovation Lab",
    highlights: [
      "Android app development workshops",
      "Google Cloud Platform training",
      "Flutter development sessions",
      "Hackathons and tech talks"
    ]
  },
  {
    id: "ai-club",
    name: "AI Club",
    description: "Dive into artificial intelligence, machine learning, deep learning, and explore the future of technology.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5N_eDPc_huYbH-p37FMfJZ7xSOsHDc4frtA&s",
    category: "Technical",
    memberCount: 95,
    meetingTime: "Fridays 4:00 PM", 
    location: "AI Research Lab",
    highlights: [
      "Machine learning project development",
      "Python and TensorFlow workshops",
      "Research paper discussions",
      "AI competition participation"
    ]
  },
  {
    id: "nritya-sangham",
    name: "Nritya Sangham - Dance Club",
    description: "Express yourself through classical, contemporary, and folk dance forms. Celebrate Indian culture through movement.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_LtOfnUOTzClgaOfeha18csZee3qS5BdcRw&s",
    category: "Cultural",
    memberCount: 80,
    meetingTime: "Mondays & Thursdays 5:00 PM",
    location: "Auditorium",
    highlights: [
      "Classical dance training (Bharatanatyam, Odissi)",
      "Contemporary and Bollywood choreography",
      "Annual cultural fest performances",
      "Inter-college dance competitions"
    ]
  },
  {
    id: "robotics",
    name: "Robotics Club",
    description: "Design, build, and program robots. Participate in national robotics competitions and innovative projects.",
    logo: "https://cdn-icons-png.flaticon.com/512/2166/2166823.png",
    category: "Technical",
    memberCount: 75,
    meetingTime: "Wednesdays 3:30 PM",
    location: "Robotics Workshop",
    highlights: [
      "Arduino and Raspberry Pi projects",
      "Autonomous robot development",
      "RoboWar and line following competitions",
      "IoT integration workshops"
    ]
  },
  {
    id: "photography",
    name: "Photography Club", 
    description: "Capture moments, tell stories, and explore the art of photography with fellow enthusiasts.",
    logo: "https://cdn-icons-png.flaticon.com/512/685/685655.png",
    category: "Creative",
    memberCount: 60,
    meetingTime: "Saturdays 10:00 AM",
    location: "Media Room",
    highlights: [
      "Weekend photography walks",
      "Portrait and landscape workshops", 
      "Photo editing with Lightroom/Photoshop",
      "Annual photography exhibition"
    ]
  },
  {
    id: "literary",
    name: "Literary Society",
    description: "Explore the world of literature, poetry, creative writing, and public speaking in a supportive environment.",
    logo: "https://cdn-icons-png.flaticon.com/512/3389/3389081.png", 
    category: "Cultural",
    memberCount: 55,
    meetingTime: "Tuesdays 4:30 PM",
    location: "Library Hall",
    highlights: [
      "Creative writing workshops",
      "Poetry recitation sessions",
      "Debate and elocution competitions",
      "Literary magazine publication"
    ]
  },
  {
    id: "music",
    name: "Music Club",
    description: "Create harmony through vocals and instruments. From classical to contemporary, express your musical passion.",
    logo: "https://cdn-icons-png.flaticon.com/512/3659/3659899.png",
    category: "Cultural", 
    memberCount: 70,
    meetingTime: "Thursdays 6:00 PM",
    location: "Music Room",
    highlights: [
      "Vocal training and instrument lessons",
      "Band formation and jam sessions",
      "Cultural event performances",
      "Music composition workshops"
    ]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background">
      <HeroSection />
      
      <main id="clubs-section" className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent">
              Our Student Clubs
            </h2>
            <Sparkles className="w-8 h-8 text-accent" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join our vibrant community of learners, creators, and innovators. 
            Find your passion and build lifelong connections.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Badge variant="secondary" className="px-4 py-2">
              8 Active Clubs
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              500+ Members
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              Year-round Events
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {clubsData.map((club) => (
            <ClubCard key={club.id} club={club} />
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Join?</h3>
            <p className="text-muted-foreground mb-6">
              Take the first step towards an amazing college experience. 
              Choose your club and start your journey today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gradient-primary text-white font-semibold">
                Contact Club Coordinators
              </Button>
              <Button variant="outline" className="border-white/30 backdrop-blur-sm">
                Learn More About MITS
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
