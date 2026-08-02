import Image from "next/image";
import { asset } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2${className}`}>
      <Image
        src={asset("/WeflareIconDark.png")}
        alt="Weflare Logo"
        width={28}
        height={28}
        className="shrink-0"
      />

      {/* Schriftzug */}
      <span className="text-lg font-semibold tracking-tight">
        <span className="bg-linear-to-r from-purple-500 to-purple-400 bg-clip-text text-transparent">
          We
        </span>
        <span className="text-foreground">flare</span>
      </span>
    </div>
  );
}
