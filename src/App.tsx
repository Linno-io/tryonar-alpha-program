import { Zap } from 'lucide-react';
import Onboarding from './components/OnBoarding';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-2xl font-semibold text-gray-900">TryonAR</h1>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Alpha Testing Program</h2>
            <p className="text-gray-600">Test 3D models on your products and help us improve.</p>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Onboarding />
      </main>

      <footer className="border-t border-gray-200 mt-16">
        <div className="max-w-3xl mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              Alpha version – bugs expected
            </p>
            <p className="text-sm text-gray-600">
              © 2025 TryonAR. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
