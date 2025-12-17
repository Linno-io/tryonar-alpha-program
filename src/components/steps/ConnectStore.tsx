import { useState, FormEvent } from 'react';
import { Platform } from '../OnBoarding';
import { fetchWithAuth } from '../../api';

interface ConnectStoreProps {
  platform: Platform;
  accessToken: string;
  onSuccess: (storeId: string) => void;
}

function ConnectStore({ platform, accessToken, onSuccess }: ConnectStoreProps) {
  const [storeUrl, setStoreUrl] = useState('');
  const [adminApiToken, setAdminApiToken] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [consumerKey, setConsumerKey] = useState('');
  const [consumerSecret, setConsumerSecret] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const isValidUrl = (value: string) => {
    try {
      // Add protocol if missing to allow "mystore.myshopify.com"
      const url = value.startsWith('http') ? value : `https://${value}`;
      // eslint-disable-next-line no-new
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (platform === 'shopify') {
      if (!storeUrl || !isValidUrl(storeUrl)) {
        setError('Please enter a valid store URL');
        return;
      }
      if (!adminApiToken) {
        setError('Admin API Token is required');
        return;
      }
    } else {
      if (!websiteUrl || !isValidUrl(websiteUrl)) {
        setError('Please enter a valid website URL');
        return;
      }
      if (!consumerKey || !consumerSecret) {
        setError('Consumer Key and Consumer Secret are required');
        return;
      }
    }

    setLoading(true);

    try {
      const payload =
        platform === 'shopify'
          ? {
              name: 'My Shopify Store',
              platform: 'shopify',
              domain: storeUrl,
              logoUrl: '/logos/shopify.svg',
              credentials: [
                {
                  keyName: 'admin_api_token',
                  keyValue: adminApiToken,
                },
              ],
            }
          : {
              name: 'My WooCommerce Store',
              platform: 'woocommerce',
              domain: websiteUrl,
              logoUrl: '/logos/woocommerce.svg',
              credentials: [
                {
                  keyName: 'consumer_key',
                  keyValue: consumerKey,
                },
                {
                  keyName: 'consumer_secret',
                  keyValue: consumerSecret,
                },
              ],
            };

      const response = await fetchWithAuth('/api/v1/stores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }, accessToken);

      if (!response.ok) {
        throw new Error('Failed to connect store');
      }

      const data = await response.json();
      onSuccess(data.storeId);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to connect store');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md">
      <h2 className="text-xl font-semibold text-gray-900 mb-2">
        Connect Store
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        This allows TryonAR to sync your products.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {platform === 'shopify' ? (
          <>
            <div>
              <label htmlFor="storeUrl" className="block text-sm font-medium text-gray-700 mb-1">
                Store URL
              </label>
              <input
                id="storeUrl"
                type="text"
                value={storeUrl}
                onChange={(e) => setStoreUrl(e.target.value)}
                placeholder="mystore.myshopify.com"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="adminApiToken" className="block text-sm font-medium text-gray-700 mb-1">
                Admin API Token
              </label>
              <input
                id="adminApiToken"
                type="password"
                value={adminApiToken}
                onChange={(e) => setAdminApiToken(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <label htmlFor="websiteUrl" className="block text-sm font-medium text-gray-700 mb-1">
                Website URL
              </label>
              <input
                id="websiteUrl"
                type="url"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                placeholder="https://mystore.com"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="consumerKey" className="block text-sm font-medium text-gray-700 mb-1">
                Consumer Key
              </label>
              <input
                id="consumerKey"
                type="text"
                value={consumerKey}
                onChange={(e) => setConsumerKey(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="consumerSecret" className="block text-sm font-medium text-gray-700 mb-1">
                Consumer Secret
              </label>
              <input
                id="consumerSecret"
                type="password"
                value={consumerSecret}
                onChange={(e) => setConsumerSecret(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>
          </>
        )}

        {error && (
          <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Connecting...' : 'Connect Store'}
        </button>
      </form>
    </div>
  );
}

export default ConnectStore;
