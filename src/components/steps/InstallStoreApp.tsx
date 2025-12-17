import { ExternalLink, Download } from 'lucide-react';
import { Platform } from '../OnBoarding';

interface InstallStoreAppProps {
  platform: Platform;
  onComplete: () => void;
}

function InstallStoreApp({ platform, onComplete }: InstallStoreAppProps) {
  return (
    <div className="max-w-md">
      <h2 className="text-xl font-semibold text-gray-900 mb-2">
        Install Store App
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        Add the Try On button to your product pages.
      </p>

      {platform === 'shopify' ? (
        <div className="space-y-6">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="font-medium text-gray-900 mb-3">Shopify App Installation</h3>
            <p className="text-sm text-gray-600 mb-4">
              Install the TryonAR app from the Shopify App Store to enable AR try-on on your product pages.
            </p>
            <a
              href="https://shopify.tryonar.net"
              target='_blank'
              className="inline-flex items-center justify-center w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Install App
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h4 className="text-sm font-medium text-gray-900 mb-3">After installation:</h4>
            <ol className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="font-medium text-gray-900 mr-2">1.</span>
                <span>Go to your Shopify theme editor</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-gray-900 mr-2">2.</span>
                <span>Enable the "Try On" button from the app block</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-gray-900 mr-2">3.</span>
                <span>Save and publish your theme</span>
              </li>
            </ol>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="font-medium text-gray-900 mb-3">WooCommerce Plugin</h3>
            <p className="text-sm text-gray-600 mb-4">
              Download and install the TryonAR plugin to add AR try-on to your WooCommerce store.
            </p>
            <a
              href="#"
              download
              className="inline-flex items-center justify-center w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Download Plugin
              <Download className="w-4 h-4 ml-2" />
            </a>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h4 className="text-sm font-medium text-gray-900 mb-3">Installation steps:</h4>
            <ol className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="font-medium text-gray-900 mr-2">1.</span>
                <span>Go to WordPress Admin → Plugins → Add New</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-gray-900 mr-2">2.</span>
                <span>Click "Upload Plugin" and select the downloaded ZIP file</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-gray-900 mr-2">3.</span>
                <span>Activate the plugin</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-gray-900 mr-2">4.</span>
                <span>Enable the "Try On" button in plugin settings</span>
              </li>
            </ol>
          </div>
        </div>
      )}

      <button
        onClick={onComplete}
        className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 mt-6"
      >
        Continue
      </button>
    </div>
  );
}

export default InstallStoreApp;
