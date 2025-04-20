import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Globe, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SpeakerCardProps {
  id: string;
  name: string;
  title: string;
  organization: string;
  bio: string;
  imageSrc: string;
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
  track = "oosc"
}: SpeakerCardProps) {
  // Determine border color based on track
  const trackColor = track === "ubucon"
    ? "border-[#e95420]"
    : track === "both"
      ? "border-purple-500"
      : "border-[#1d3958]";

  // Feature style
  const featureStyle = featured
    ? "md:col-span-2 md:grid md:grid-cols-2 md:gap-6"
    : "";

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden border-t-4 ${trackColor} ${featureStyle}`}>
      <div className="relative">
        <div className="aspect-square relative overflow-hidden">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        {/* Track badge */}
        <div className="absolute top-2 right-2">
          {track === "ubucon" && (
            <span className="bg-[#e95420] text-white text-xs font-bold px-2 py-1 rounded-full">
              UbuCon
            </span>
          )}
          {track === "both" && (
            <span className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              OOSC + UbuCon
            </span>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-gray-600 mb-3">{title}{organization ? `, ${organization}` : ''}</p>

        <p className="text-gray-700 mb-4 line-clamp-3">
          {bio}
        </p>

        {/* Social links */}
        {social && (
          <div className="flex space-x-2 mb-4">
            {social.twitter && (
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500"
              >
                <Twitter size={18} />
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-700"
              >
                <Linkedin size={18} />
              </a>
            )}
            {social.github && (
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Github size={18} />
              </a>
            )}
            {social.website && (
              <a
                href={social.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600"
              >
                <Globe size={18} />
              </a>
            )}
          </div>
        )}

        <Button asChild variant="outline" className="w-full">
          <Link href={`/speakers/${id}`}>
            View Profile
          </Link>
        </Button>
      </div>
    </div>
  );
}
