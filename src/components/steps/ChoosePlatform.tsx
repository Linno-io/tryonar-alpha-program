import { ShoppingBag } from 'lucide-react';
import { Platform } from '../Onboarding';

interface ChoosePlatformProps {
  selected: Platform;
  onSelect: (platform: 'shopify' | 'woocommerce') => void;
}

function ChoosePlatform({ selected, onSelect }: ChoosePlatformProps) {
  return (
    <div className="max-w-md">
      <h2 className="text-xl font-semibold text-gray-900 mb-2">
        Choose Platform
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        Don't worry — you can change this later.
      </p>

      <div className="space-y-3">
        <button
          onClick={() => onSelect('shopify')}
          className={`
            w-full p-4 border-2 rounded-lg text-left transition-all
            ${selected === 'shopify'
              ? 'border-gray-900 bg-gray-50'
              : 'border-gray-200 hover:border-gray-300'
            }
          `}
        >
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center mr-3">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-medium text-gray-900">Shopify</div>
              <div className="text-sm text-gray-600">Connect your Shopify store</div>
            </div>
          </div>
        </button>

        <button
          onClick={() => onSelect('woocommerce')}
          className={`
            w-full p-4 border-2 rounded-lg text-left transition-all
            ${selected === 'woocommerce'
              ? 'border-gray-900 bg-gray-50'
              : 'border-gray-200 hover:border-gray-300'
            }
          `}
        >
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center mr-3">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-medium text-gray-900">WooCommerce</div>
              <div className="text-sm text-gray-600">Connect your WooCommerce store</div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default ChoosePlatform;
