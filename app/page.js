import { Badge } from "@/components/ui/badge";
import TrustIndicators from "@/components/TrustIndicators";
import { howItWorksData, trustIndicatorsData } from "@/data";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg text-white pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              You Are Not Alone
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Connect with trained listeners in a safe, anonymous
              space. Share your thoughts, feelings, and struggles
              without judgment. Sometimes, all you need is someone who
              truly listens.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors">
                Start Listening Session
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors">
                Become a Listener
              </button>
            </div>
            <div className="mt-12 flex justify-center space-x-8">
              <div className="flex items-center space-x-2">
                <Badge
                  variant={"outline"}
                  className={
                    "text-white py-1 border-purple-400/40 hover:border-purple-400/70 text-sm rounded-full opacity-75 transition-all"
                  }>
                  <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                  <span>100% Anonymous</span>
                </Badge>
              </div>
              <div className="flex items-center space-x-2">
                <Badge
                  variant={"outline"}
                  className={
                    "text-white py-1 border-purple-400/40 hover:border-purple-400/70 text-sm rounded-full opacity-75 transition-all"
                  }>
                  <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                  <span>24/7 Available</span>
                </Badge>
              </div>
              <div className="flex items-center space-x-2">
                <Badge
                  variant={"outline"}
                  className={
                    "text-white py-1 border-purple-400/40 hover:border-purple-400/70 text-sm rounded-full opacity-75 transition-all"
                  }>
                  <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                  <span>Trained Listeners</span>
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust-Indicator Section */}
      <TrustIndicators data={trustIndicatorsData} />

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Getting support is simple and completely anonymous
            </p>
          </div>
          <HowItWorks data={howItWorksData} />
        </div>
      </section>
    </>
  );
}
