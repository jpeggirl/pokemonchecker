export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center space-y-4 py-12">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center text-2xl">
          🔮
        </div>
      </div>
      <div className="text-center space-y-2">
        <p className="text-lg font-medium text-gray-700">
          Analyzing tweets...
        </p>
        <p className="text-sm text-gray-500">
          Finding your perfect Pokémon match!
        </p>
      </div>
    </div>
  );
}