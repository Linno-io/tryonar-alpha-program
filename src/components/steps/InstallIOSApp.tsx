import { useState } from 'react';
import { Smartphone, ExternalLink } from 'lucide-react';

interface InstallIOSAppProps {
  onComplete: () => void;
}

function InstallIOSApp({ onComplete }: InstallIOSAppProps) {
  const [confirmed, setConfirmed] = useState(false);

  const handleContinue = () => {
    if (confirmed) {
      onComplete();
    }
  };

  return (
    <div className="max-w-md">
      <h2 className="text-xl font-semibold text-gray-900 mb-2">
        Install iOS App
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        Upload product images and adjust 3D pivot using the iOS app.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
        <div className="flex items-start mb-4">
          <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center mr-4">
            <Smartphone className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-900 mb-1">TryonAR iOS App</h3>
            <p className="text-sm text-gray-600 mb-3">
              Log in using the same credentials you just created.
            </p>
            <a
              href="https://testflight.apple.com/join/QRdY41h7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-700"
            >
              Install iOS App (TestFlight)
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">What you'll do:</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start">
              <span className="text-gray-400 mr-2">•</span>
              <span>Upload product images from your catalog</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-400 mr-2">•</span>
              <span>Adjust 3D pivot points for accurate AR placement</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-400 mr-2">•</span>
              <span>Create and manage AR models for your products</span>
            </li>
          </ul>
        </div>
      </div>

      <label className="flex items-start cursor-pointer mb-6">
        <input
          type="checkbox"
          checked={confirmed}
          onChange={(e) => setConfirmed(e.target.checked)}
          className="mt-1 h-4 w-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
        />
        <span className="ml-2 text-sm text-gray-700">
          I've installed the app and created a model
        </span>
      </label>

      <button
        onClick={handleContinue}
        disabled={!confirmed}
        className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Continue
      </button>
    </div>
  );
}

export default InstallIOSApp;
