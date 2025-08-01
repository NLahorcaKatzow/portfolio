export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold mb-4">Tailwind CSS v4 🎉</h1>
        <p className="text-xl opacity-90">¡Está funcionando correctamente!</p>
        <div className="mt-8 space-y-2">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <p className="text-sm">Custom colors from config:</p>
            <div className="flex gap-2 mt-2">
              <div className="w-8 h-8 bg-primary rounded"></div>
              <div className="w-8 h-8 bg-secondary rounded border border-gray-300"></div>
              <div className="w-8 h-8 bg-accent rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}