import PageWrapper from "@/components/layout/PageWrapper";

export default function CalendarPage() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 py-24 pt-32 md:pt-40">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Calendar</h1>
        <p className="text-lg mb-8">
          Our event schedule will be published here soon. Check back for updates!
        </p>
      </div>
    </PageWrapper>
  );
}
