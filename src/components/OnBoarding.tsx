import { useState } from 'react';
import StepIndicator from './StepIndicator';
import CreateAccount from './steps/CreateAccount';
import ChoosePlatform from './steps/ChoosePlatform';
import ConnectStore from './steps/ConnectStore';
import InstallIOSApp from './steps/InstallIOSApp';
import InstallStoreApp from './steps/InstallStoreApp';
import PreviewFinish from './steps/PreviewFinish';

export type Platform = 'shopify' | 'woocommerce' | null;

export interface OnboardingUser {
  id: string;
  email: string;
}

export interface OnboardingState {
  accessToken: string;
  refreshToken: string;
  platform: Platform;
  storeId: string;
  user: OnboardingUser | null;
}

const steps = [
  'Create Account',
  'Choose Platform',
  'Connect Store',
  'Install iOS App',
  'Install Store App',
  'Finish'
];

function Onboarding() {
  const [currentStep, setCurrentStep] = useState(0);
  const [state, setState] = useState<OnboardingState>({
    accessToken: '',
    refreshToken: '',
    platform: null,
    storeId: '',
    user: null
  });

  const updateState = (updates: Partial<OnboardingState>) => {
    setState(prev => ({ ...prev, ...updates }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Welcome to TryonAR
          </h1>
          <p className="text-gray-600">
            Complete setup to start offering AR try-on experiences
          </p>
        </div>

        <StepIndicator steps={steps} currentStep={currentStep} />

        <div className="mt-12">
          {currentStep === 0 && (
            <CreateAccount
              onSuccess={({ tokens, user }) => {
                updateState({
                  accessToken: tokens.accessToken,
                  refreshToken: tokens.refreshToken,
                  user
                });
                nextStep();
              }}
            />
          )}
          {currentStep === 1 && (
            <ChoosePlatform
              selected={state.platform}
              onSelect={(platform) => {
                updateState({ platform });
                nextStep();
              }}
            />
          )}
          {currentStep === 2 && (
            <ConnectStore
              platform={state.platform!}
              accessToken={state.accessToken}
              onSuccess={(storeId) => {
                updateState({ storeId });
                nextStep();
              }}
            />
          )}
          {currentStep === 3 && (
            <InstallIOSApp onComplete={nextStep} />
          )}
          {currentStep === 4 && (
            <InstallStoreApp
              platform={state.platform!}
              onComplete={nextStep}
            />
          )}
          {currentStep === 5 && <PreviewFinish />}
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
