-- Create table for club registrations
CREATE TABLE public.club_registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  enrollment_number TEXT NOT NULL UNIQUE,
  branch TEXT NOT NULL CHECK (branch IN ('CSE', 'IT', 'ECE', 'EE', 'ME', 'Civil', 'AIML')),
  year TEXT NOT NULL CHECK (year IN ('1st', '2nd', '3rd', '4th')),
  email TEXT NOT NULL CHECK (email LIKE '%@mitsgwalior.in'),
  reason_to_join TEXT NOT NULL CHECK (length(reason_to_join) >= 150),
  club_name TEXT NOT NULL,
  registration_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.club_registrations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert registrations (public registration)
CREATE POLICY "Anyone can register for clubs" 
ON public.club_registrations 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow reading registrations (for admin purposes later)
CREATE POLICY "Public can view registrations" 
ON public.club_registrations 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_club_registrations_updated_at
BEFORE UPDATE ON public.club_registrations
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for faster queries
CREATE INDEX idx_club_registrations_club_name ON public.club_registrations(club_name);
CREATE INDEX idx_club_registrations_enrollment ON public.club_registrations(enrollment_number);
CREATE INDEX idx_club_registrations_registration_date ON public.club_registrations(registration_date DESC);