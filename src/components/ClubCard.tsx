import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, MapPin } from "lucide-react";
import RegistrationModal from "./RegistrationModal";

interface ClubCardProps {
  club: {
    id: string;
    name: string;
    description: string;
    logo: string;
    category: string;
    memberCount: number;
    meetingTime: string;
    location: string;
    highlights: string[];
  };
}

const ClubCard = ({ club }: ClubCardProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Card className="glass-effect rounded-xl overflow-hidden transition-spring hover:scale-105 hover:shadow-2xl group border-white/30">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-smooth" />
          <CardHeader className="relative z-10 text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-white/90 shadow-lg">
              <img
                src={club.logo}
                alt={`${club.name} logo`}
                className="w-full h-full object-cover"
              />
            </div>
            <CardTitle className="text-xl font-bold text-primary">{club.name}</CardTitle>
            <Badge variant="secondary" className="w-fit mx-auto">
              {club.category}
            </Badge>
          </CardHeader>
          
          <CardContent className="relative z-10 space-y-4">
            <CardDescription className="text-center text-foreground/80 leading-relaxed">
              {club.description}
            </CardDescription>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>{club.memberCount} members</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>{club.meetingTime}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>{club.location}</span>
              </div>
            </div>
            
            <div className="space-y-1">
              <h4 className="font-semibold text-sm">Key Highlights:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                {club.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
          
          <CardFooter className="relative z-10">
            <Button
              onClick={() => setShowModal(true)}
              className="w-full gradient-primary hover:shadow-lg transition-spring text-white font-semibold"
            >
              Join Now
            </Button>
          </CardFooter>
        </div>
      </Card>

      <RegistrationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        clubName={club.name}
      />
    </>
  );
};

export default ClubCard;