import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Globe, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* MITS Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">MITS Gwalior</h3>
            <p className="text-background/80 leading-relaxed">
              Madhav Institute of Technology & Science, a premier engineering institution 
              committed to excellence in technical education and research.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">About MITS</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Academics</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Admissions</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Placements</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Research</a></li>
            </ul>
          </div>

          {/* Student Life */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Student Life</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Student Clubs</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Events</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Campus Facilities</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Hostel</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Sports</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-background/80">
                  <p>Madhav Institute of Technology & Science</p>
                  <p>AB Road, Gola Ka Mandir</p>
                  <p>Gwalior, MP 474005</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-background/80">+91 751 2409309</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-background/80">info@mitsgwalior.in</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-primary" />
                <span className="text-background/80">www.mitsgwalior.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © 2024 MITS Gwalior. All rights reserved. | Developed by Student Developer Community
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;