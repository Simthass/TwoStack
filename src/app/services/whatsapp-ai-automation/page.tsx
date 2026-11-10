import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WhatsApp AI Business Automation | TwoStack",
  description:
    "Deploy a fully custom WhatsApp AI chatbot for your business. Automate customer queries, process voice notes, match product images to your inventory, and provide support in English, Tamil, Sinhala, Thanglish, and Singlish.",
  keywords: [
    "WhatsApp AI Chatbot",
    "WhatsApp Business Automation",
    "AI Customer Support Sri Lanka",
    "Multilingual AI Chatbot",
    "Voice Note AI Recognition",
    "Product Image Matching AI",
    "TwoStack AI Services",
  ],
  alternates: {
    canonical: "/services/whatsapp-ai-automation",
  },
  openGraph: {
    title: "WhatsApp AI Business Automation | TwoStack",
    description:
      "Custom AI chatbots that understand text, voice, and images in multiple local languages.",
    url: "https://twostack.com/services/whatsapp-ai-automation",
    type: "website",
  },
};

export default function WhatsAppAIAutomation() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-20 px-6 sm:px-12 bg-black text-white">
      <section className="max-w-4xl w-full space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            WhatsApp AI Business Automation
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Stop missing sales while you sleep. We build fully custom AI
            chatbots for your business that instantly answer product questions,
            process orders, and handle customer support directly on WhatsApp.
          </p>
        </div>

        {/* Core Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h3 className="text-2xl font-semibold mb-4 text-[#eb1e79]">
              Multilingual Fluency
            </h3>
            <p className="text-gray-300">
              Speak to your customers in the language they are most comfortable
              with. Our AI natively understands and replies in{" "}
              <strong>English, Tamil, Sinhala, Thanglish, and Singlish</strong>{" "}
              without losing context.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h3 className="text-2xl font-semibold mb-4 text-[#eb1e79]">
              Voice Note Recognition
            </h3>
            <p className="text-gray-300">
              Not everyone likes to type. When a customer sends a voice note
              asking about a product or their order status, the AI accurately
              listens, transcribes, and replies instantly.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h3 className="text-2xl font-semibold mb-4 text-[#eb1e79]">
              Visual Inventory Matching
            </h3>
            <p className="text-gray-300">
              If a customer forwards a picture of a product and asks &quot;Is
              this available?&quot;, our vision AI analyzes the image,
              cross-checks it against your actual product database, and
              immediately confirms availability.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h3 className="text-2xl font-semibold mb-4 text-[#eb1e79]">
              Automated Order Management
            </h3>
            <p className="text-gray-300">
              Free up your team. The AI autonomously answers repetitive queries
              regarding shipping times, return policies, order tracking, and
              inventory levels 24/7.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 pt-12 border-t border-white/10">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Automate Your WhatsApp?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Let TwoStack engineer a smart, custom AI solution tailored perfectly
            to your products and customer base.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-[#eb1e79] text-white font-semibold rounded-lg hover:bg-[#d1196a] transition-colors"
          >
            Get a Custom Demo
          </a>
        </div>
      </section>
    </main>
  );
}
