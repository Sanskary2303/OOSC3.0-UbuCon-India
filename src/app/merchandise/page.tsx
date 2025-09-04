import PageWrapper from "@/components/layout/PageWrapper";
import Image from "next/image";
import merch from "./merchandise.jpg";

export default function MerchandisePage() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 py-24 pt-32 md:pt-40 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Merchandise</h1>
        <p className="text-lg mb-8">
          Official OOSC 3.0 merchandise is here! Order yours now and rep the
          community.
        </p>

        <a
          href="https://forms.gle/N7Co9NdtrPd4nm2Y9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-blue-700 transition"
        >
          Order Merchandise
        </a>

        <div className="mt-12 flex justify-center">
          <div className="w-[500px] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={merch}
              alt="OOSC 3.0 Merchandise"
              width={500}
              height={500}
              className="object-cover object-bottom scale-110"
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
