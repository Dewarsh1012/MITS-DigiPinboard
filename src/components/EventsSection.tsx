import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

const eventsData = [
  {
    id: 1,
    title: "Tech Fest 2024",
    date: "March 15-17, 2024",
    location: "Main Campus",
    description: "Annual technical festival featuring coding competitions, robotics challenges, and tech exhibitions.",
    attendees: 500,
    category: "Technical",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop"
  },
  {
    id: 2,
    title: "Cultural Night",
    date: "February 28, 2024",
    location: "Auditorium",
    description: "A vibrant evening of music, dance, and artistic performances by our talented student clubs.",
    attendees: 300,
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop"
  },
  {
    id: 3,
    title: "AI Workshop Series",
    date: "Every Saturday",
    location: "Computer Lab",
    description: "Weekly hands-on workshops covering machine learning, deep learning, and AI applications.",
    attendees: 50,
    category: "Technical",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop"
  },
  {
    id: 4,
    title: "Photography Exhibition",
    date: "April 5-10, 2024",
    location: "Library Gallery",
    description: "Showcasing the best captures from our photography club members throughout the year.",
    attendees: 200,
    category: "Creative",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400&h=200&fit=crop"
  }
];

const EventsSection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't miss out on exciting events, workshops, and competitions organized by our student clubs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventsData.map((event) => (
            <div
              key={event.id}
              className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-spring hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="bg-white/90 text-foreground">
                    {event.category}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-foreground">
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="px-8">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;