import PageWrapper from "@/components/layout/PageWrapper";
import { teamData } from "./teamData";
import Image from "next/image";
import { Linkedin } from "lucide-react";

type Member = {
  name: string;
  linkedin?: string;
  image: any;
};

type TeamCategory = {
  category: string;
  members: Member[];
};

export default function TeamPage() {
  const teams = teamData as TeamCategory[];

  return (
    <PageWrapper>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-20 px-6 mx-auto max-w-screen-xl text-center">
          <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
            Our Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Meet our dedicated team
          </p>

          {teams.map((group, idx) => (
            <div key={idx} className="mb-16">
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                {group.category}
              </h3>

              <div className="flex flex-wrap justify-center gap-10">
                {group.members.map((member, mi) => (
                  <div
                    key={`${idx}-${mi}`}
                    className="w-64 relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300 bg-white dark:bg-gray-800 flex flex-col"
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={500}
                      className="object-cover w-full h-64 rounded-t-2xl"
                    />
                    <div className="flex-grow p-5 text-left">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {member.name}
                        </h4>
                        {member.linkedin && (
                          <a
                            href={`${member.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 transition"
                            aria-label="LinkedIn"
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                      {member.phone && member.phone.trim() !== "" && (
                        <div className="mt-2 text-gray-700 dark:text-gray-300 text-sm">
                          Phone : {member.phone}
                        </div>
                      )}
                      {member.email && member.email.trim() !== "" && (
                        <div className="mt-2 text-gray-700 dark:text-gray-300 text-sm">
                          Email : {member.email}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
