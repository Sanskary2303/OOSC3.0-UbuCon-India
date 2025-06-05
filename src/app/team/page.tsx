import PageWrapper from "@/components/layout/PageWrapper";
import { teamData } from "./teamData";
import Image from "next/image";

type Member = {
  name: string;
  phone?: string;
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
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {teams.map((group, idx) =>
              group.members.map((member, mi) => (
                <div
                  key={`${idx}-${mi}`}
                  className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300 bg-white dark:bg-gray-800"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={500}
                    className="object-cover w-full h-64"
                  />
                  <div className="p-5 text-left">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                    <p className="text-sm text-blue-600 dark:text-blue-300">{group.category}</p>
                    {member.phone && (
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{member.phone}</p>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
