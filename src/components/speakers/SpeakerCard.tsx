import Image from "next/image";
import { Github, Linkedin, Globe, Twitter } from "lucide-react";

interface SpeakerCardProps {
  id: string;
  name: string;
  title: string;
  organization: string;
  bio: string;
  imageSrc: any;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
  featured?: boolean;
  track?: "oosc" | "ubucon" | "both";
}

export default function SpeakerCard({
  id,
  name,
  title,
  organization,
  bio,
  imageSrc,
  social,
  featured = false,
  track = "oosc",
}: SpeakerCardProps) {
  const trackColors = {
    oosc: "from-[#1d3958] to-[#27496d]",
    ubucon: "from-[#e95420] to-[#ff7235]",
    both: "from-purple-600 to-purple-400",
  };

  const badgeColor = trackColors[track];

  return (
    <div className="bg-{themeProvider.theme === 'dark' ? 'white' : 'black'} rounded-xl overflow-hidden shadow-md border transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
      <div className="relative">
        <Image
          src={imageSrc}
          alt={name}
          className="object-cover object-center w-full aspect-[4/4]"
        />
      </div>

      <div className="p-5 flex flex-col h-full">
        <h3 className="text-lg w-full text-center font-bold text-{themeProvider.theme === 'dark' ? 'white' : 'black'} mb-1">
          {name}
        </h3>
        <p className="text-sm  w-full text-center  text-{themeProvider.theme === 'dark' ? 'white' : 'black'} mb-3">
          {title}
          {organization ? `, ${organization}` : ""}
        </p>

        {/* Social Links */}
        <div className="flex space-x-4  w-full justify-center ">
          {social?.twitter && (
            <a href={social.twitter} target="_blank" rel="noopener noreferrer">
              <Twitter
                className="text-{themeProvider.theme === 'dark' ? 'white' : 'black'} hover:text-blue-800"
                size={20}
              />
            </a>
          )}
          {social?.linkedin && (
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin
                className="text-{themeProvider.theme === 'dark' ? 'white' : 'black'} hover:text-blue-800"
                size={20}
              />
            </a>
          )}
          {social?.github && (
            <a href={social.github} target="_blank" rel="noopener noreferrer">
              <Github
                className="text-{themeProvider.theme === 'dark' ? 'white' : 'black'} hover:text-blue-800"
                size={20}
              />
            </a>
          )}
          {social?.website && (
            <a href={social.website} target="_blank" rel="noopener noreferrer">
              <Globe
                className="text-{themeProvider.theme === 'dark' ? 'white' : 'black'} hover:text-blue-800"
                size={20}
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
