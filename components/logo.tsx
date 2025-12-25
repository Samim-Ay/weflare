export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon 
      <div className="w-8 h-8 rounded-md bg-gradient-to-br from-purple-500 via-pink-500 to-fuchsia-400 flex items-center justify-center text-white font-bold">
      </div>
      */}

      {/* Schriftzug */}
      <span className="text-lg font-semibold tracking-tight">
        <span className="bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Dev
        </span>
        <span className="text-foreground">say</span>
      </span>
    </div>
  );
}
