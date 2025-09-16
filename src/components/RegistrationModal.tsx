import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { GraduationCap, Mail, User, Hash, Building2, Clock } from "lucide-react";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  clubName: string;
}

interface FormData {
  name: string;
  enrollmentNumber: string;
  branch: string;
  year: string;
  email: string;
  reasonToJoin: string;
}

const RegistrationModal = ({ isOpen, onClose, clubName }: RegistrationModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    enrollmentNumber: "",
    branch: "",
    year: "",
    email: "",
    reasonToJoin: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const branches = ["CSE", "IT", "ECE", "EE", "ME", "Civil", "AIML"];
  const years = ["1st", "2nd", "3rd", "4th"];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateEmail = (email: string) => {
    return email.endsWith("@mitsgwalior.in");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.enrollmentNumber || !formData.branch || 
        !formData.year || !formData.email || !formData.reasonToJoin) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please use your college email with @mitsgwalior.in domain.",
        variant: "destructive"
      });
      return;
    }

    if (formData.reasonToJoin.length < 150) {
      toast({
        title: "Reason Too Short",
        description: "Please write at least 150 characters explaining why you want to join.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you would normally send the data to your backend
      // For now, we'll simulate a successful registration
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Registration Successful! 🎉",
        description: `You've successfully registered for ${clubName}. Welcome aboard!`,
      });

      // Reset form and close modal
      setFormData({
        name: "",
        enrollmentNumber: "",
        branch: "",
        year: "",
        email: "",
        reasonToJoin: ""
      });
      onClose();
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-effect border-white/30 max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl gradient-primary bg-clip-text text-transparent">
            <GraduationCap className="w-6 h-6 text-primary" />
            Join {clubName}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Fill in your details to register for {clubName}. All fields are required.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter your full name"
                className="bg-white/50 border-white/30"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="enrollment" className="flex items-center gap-2">
                <Hash className="w-4 h-4" />
                Enrollment Number *
              </Label>
              <Input
                id="enrollment"
                value={formData.enrollmentNumber}
                onChange={(e) => handleInputChange("enrollmentNumber", e.target.value)}
                placeholder="e.g., 0827CS211234"
                className="bg-white/50 border-white/30"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="branch" className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                Branch *
              </Label>
              <Select value={formData.branch} onValueChange={(value) => handleInputChange("branch", value)}>
                <SelectTrigger className="bg-white/50 border-white/30">
                  <SelectValue placeholder="Select your branch" />
                </SelectTrigger>
                <SelectContent>
                  {branches.map((branch) => (
                    <SelectItem key={branch} value={branch}>
                      {branch}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="year" className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Year *
              </Label>
              <Select value={formData.year} onValueChange={(value) => handleInputChange("year", value)}>
                <SelectTrigger className="bg-white/50 border-white/30">
                  <SelectValue placeholder="Select your year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>
                      {year} Year
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              College Gmail ID *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="yourname@mitsgwalior.in"
              className="bg-white/50 border-white/30"
              pattern=".*@mitsgwalior\.in$"
              title="Please use your college email ending with @mitsgwalior.in"
              required
            />
            <p className="text-xs text-muted-foreground">
              Must be a valid @mitsgwalior.in email address
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="reason" className="text-sm font-medium">
              Why do you want to join {clubName}? * (Minimum 150 characters)
            </Label>
            <Textarea
              id="reason"
              value={formData.reasonToJoin}
              onChange={(e) => handleInputChange("reasonToJoin", e.target.value)}
              placeholder="Tell us about your interests, goals, and what you hope to contribute to the club..."
              className="bg-white/50 border-white/30 min-h-[100px]"
              minLength={150}
              required
            />
            <p className="text-xs text-muted-foreground">
              {formData.reasonToJoin.length}/150 characters minimum
            </p>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 bg-white/50 border-white/30"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 gradient-primary text-white font-semibold hover:shadow-lg transition-spring"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Registering..." : "Register Now"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationModal;