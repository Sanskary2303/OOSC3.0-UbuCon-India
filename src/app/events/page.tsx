import PageWrapper from "@/components/layout/PageWrapper";

export default function EventsPage() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 py-24 pt-32 md:pt-40">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Events</h1>
        <p className="text-lg mb-8">
          Details about our events coming soon. Check back later for more information.
        </p>
      </div>
    </PageWrapper>
  );
}
