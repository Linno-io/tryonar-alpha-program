function PreviewFinish() {
  return (
    <div className="max-w-2xl">
      <h2 className="text-xl font-semibold text-gray-900 mb-2">
        Setup Complete!
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        Your store is now connected and ready for AR Try-On.
        You can now open your product page(s) to see the Try-On button for the
        product(s) you uploaded images for using the iOS app.
      </p>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <p className="text-sm text-green-800">
          Thank you for helping us test the TryonAR alpha experience.
        </p>
      </div>

      <div className="mt-6">
        <button
          type="button"
          className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}

export default PreviewFinish;
