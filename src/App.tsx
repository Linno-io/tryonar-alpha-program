import { ArrowRight, Store, Smartphone, Box, Plug, MessageSquare, CheckCircle2, Sparkles } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 py-12 sm:px-8 lg:px-12">
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Alpha Program
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            TryonAR Alpha Testing Program
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Test 3D models on your products and help us improve.
          </p>
        </header>

        <div className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Sign Up / Dashboard
            </h2>
            <p className="text-gray-700 mb-6">
              Sign up or log in to your TryonAR dashboard to start testing.
            </p>
            <a
              href="https://dashboard.tryonar.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Go to Dashboard
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden sm:block" />

          <section
            className="relative mb-12 group cursor-pointer"
            onMouseEnter={() => setActiveStep(1)}
            onMouseLeave={() => setActiveStep(null)}
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-xl z-10 group-hover:bg-blue-600 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                1
              </div>
              <div className="flex-1 pt-2 bg-white rounded-lg p-6 group-hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <Store className="w-6 h-6 text-gray-700" />
                  <h2 className="text-2xl font-bold text-gray-900">Connect Your Store</h2>
                </div>
                <p className="text-gray-700 mb-6">
                  Add your Shopify or WooCommerce store to the dashboard.
                </p>

                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-5 border border-gray-200 hover:border-blue-200 hover:shadow transition-all duration-300">
                    <h3 className="font-semibold text-gray-900 mb-3">Shopify</h3>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
                      <li>Enter your store URL and Admin API Token</li>
                      <li>Click "Connect"</li>
                    </ol>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-5 border border-gray-200 hover:border-blue-200 hover:shadow transition-all duration-300">
                    <h3 className="font-semibold text-gray-900 mb-3">WooCommerce</h3>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
                      <li>Enter your website URL, Consumer Key, and Consumer Secret</li>
                      <li>Click "Connect"</li>
                    </ol>
                  </div>
                </div>

                <div className="mt-4 flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>After connecting, your products will appear on the dashboard.</span>
                </div>
              </div>
            </div>
          </section>

          <section
            className="relative mb-12 group cursor-pointer"
            onMouseEnter={() => setActiveStep(2)}
            onMouseLeave={() => setActiveStep(null)}
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-xl z-10 group-hover:bg-blue-600 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                2
              </div>
              <div className="flex-1 pt-2 bg-white rounded-lg p-6 group-hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <Smartphone className="w-6 h-6 text-gray-700" />
                  <h2 className="text-2xl font-bold text-gray-900">Install the TryonAR iOS App</h2>
                </div>
                <p className="text-gray-700 mb-5">
                  Install the TryonAR app on your iPhone via TestFlight. Use the same credentials as your dashboard login.
                </p>
                <a
                  href="https://testflight.apple.com/join/QRdY41h7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-5 py-2.5 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 mb-4"
                >
                  Install via TestFlight
                  <ArrowRight className="w-4 h-4" />
                </a>
                <div className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Upload product images and generate 3D models using the app.</span>
                </div>
              </div>
            </div>
          </section>

          <section
            className="relative mb-12 group cursor-pointer"
            onMouseEnter={() => setActiveStep(3)}
            onMouseLeave={() => setActiveStep(null)}
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-xl z-10 group-hover:bg-blue-600 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                3
              </div>
              <div className="flex-1 pt-2 bg-white rounded-lg p-6 group-hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <Box className="w-6 h-6 text-gray-700" />
                  <h2 className="text-2xl font-bold text-gray-900">Add 3D Models</h2>
                </div>
                <p className="text-gray-700 mb-6">
                  Create 3D models from product images using the iOS app.
                </p>

                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-200">
                  <ol className="list-decimal list-inside space-y-3 text-gray-700 text-sm">
                    <li>
                      <span className="font-medium">Install the app</span> and log in with your dashboard credentials
                    </li>
                    <li>
                      <span className="font-medium">Select your store</span> from the app
                    </li>
                    <li>
                      <span className="font-medium">Choose a product</span> from your store's catalog
                    </li>
                    <li>
                      <span className="font-medium">Upload product images</span> (multiple angles recommended)
                    </li>
                    <li>
                      <span className="font-medium">Generate the 3D model</span> using the app's AI processing
                    </li>
                    <li>
                      <span className="font-medium">Review on dashboard</span> – generated models appear in your dashboard
                    </li>
                    <li>
                      <span className="font-medium">Publish the model</span> from the web dashboard to make it live on your store
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          <section
            className="relative mb-12 group cursor-pointer"
            onMouseEnter={() => setActiveStep(4)}
            onMouseLeave={() => setActiveStep(null)}
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-xl z-10 group-hover:bg-blue-600 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                4
              </div>
              <div className="flex-1 pt-2 bg-white rounded-lg p-6 group-hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <Plug className="w-6 h-6 text-gray-700" />
                  <h2 className="text-2xl font-bold text-gray-900">Install TryonAR on Your Store</h2>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-5 border border-gray-200 hover:border-blue-200 hover:shadow transition-all duration-300">
                    <h3 className="font-semibold text-gray-900 mb-3">Shopify</h3>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4 text-sm">
                      <li>Go to the Shopify install page</li>
                      <li>Enter your store URL</li>
                      <li>Click "Install"</li>
                      <li>Configure the Tryon button via theme editor</li>
                    </ol>
                    <a
                      href="https://shopify.tryonar.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 hover:scale-105 font-medium text-sm transition-all duration-300"
                    >
                      Shopify Install Page
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-5 border border-gray-200 hover:border-blue-200 hover:shadow transition-all duration-300">
                    <h3 className="font-semibold text-gray-900 mb-3">WooCommerce</h3>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4 text-sm">
                      <li>Download the plugin zip file</li>
                      <li>Upload and activate plugin in WordPress</li>
                      <li>Configure the Tryon button in plugin settings</li>
                    </ol>
                    <a
                      href="https://dashboard.tryonar.net/files-storage/downloads/tryonar-alpha-v1.0.1.zip"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 hover:scale-105 font-medium text-sm transition-all duration-300"
                    >
                      Download Plugin
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="relative mb-12 group cursor-pointer"
            onMouseEnter={() => setActiveStep(5)}
            onMouseLeave={() => setActiveStep(null)}
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-xl z-10 group-hover:bg-blue-600 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                5
              </div>
              <div className="flex-1 pt-2 bg-white rounded-lg p-6 group-hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquare className="w-6 h-6 text-gray-700" />
                  <h2 className="text-2xl font-bold text-gray-900">Test & Provide Feedback</h2>
                </div>
                <p className="text-gray-700 mb-5">
                  Visit your product pages, test the Tryon button, and share feedback on any issues or improvements.
                </p>
                <a
                  href="https://linnoglobal.sg.larksuite.com/share/base/form/shrlgcCuSAWl6t84GICz3bHcoef"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2.5 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Submit Feedback
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </section>
        </div>

        <footer className="mt-20 pt-8 border-t border-gray-200 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium mb-4">
            <span className="w-2 h-2 bg-yellow-600 rounded-full animate-pulse" />
            Alpha version – bugs expected
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} TryonAR. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
