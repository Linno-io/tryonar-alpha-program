import { Check } from 'lucide-react';

interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
}

function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <div className="border-b border-gray-200">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;
          const isUpcoming = index > currentStep;

          return (
            <div key={step} className="flex-1 relative">
              <div className="flex items-center">
                {index > 0 && (
                  <div
                    className={`flex-1 h-0.5 ${
                      isCompleted ? 'bg-gray-900' : 'bg-gray-200'
                    }`}
                  />
                )}
                <div className="flex flex-col items-center px-3 pb-4">
                  <div
                    className={`
                      w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mb-2
                      ${isCompleted ? 'bg-gray-900 text-white' : ''}
                      ${isCurrent ? 'bg-gray-900 text-white' : ''}
                      ${isUpcoming ? 'bg-gray-100 text-gray-400 border border-gray-200' : ''}
                    `}
                  >
                    {isCompleted ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                  <span
                    className={`text-xs whitespace-nowrap ${
                      isCurrent ? 'text-gray-900 font-medium' : 'text-gray-500'
                    }`}
                  >
                    {step}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 ${
                      isCompleted ? 'bg-gray-900' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StepIndicator;
