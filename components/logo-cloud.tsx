import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { asset } from "@/lib/utils";

export default function LogoCloud() {
  return (
    <section className="bg-background overflow-hidden py-16">
      <div className="group relative m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6"></div>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
              <div className="flex items-center">
                <img
                  className="mx-auto h-8 w-fit dark:invert"
                  src={asset("/logos/git.svg")}
                  alt="Git Logo"
                  height="20"
                  width="auto"
                />
              </div>
              <div className="flex items-center gap-2">
                <img
                  className="mx-auto h-8 w-fit dark:invert"
                  src={asset("/logos/github.svg")}
                  alt="GitHub Logo"
                  height="20"
                  width="auto"
                />
                <img
                  className="mx-auto h-8 w-fit dark:invert"
                  src={asset("/logos/github.png")}
                  alt="GitHub Logo"
                  height="20"
                  width="auto"
                />
              </div>
              <div className="flex items-center gap-2">
                <img
                  className="mx-auto h-8 w-fit dark:invert"
                  src={asset("/logos/tslogo.svg")}
                  alt="TypeScript Logo"
                  height="20"
                  width="auto"
                />
                <h2 className="text-center text-[#3178C6] justify-center flex">
                  TypeScript
                </h2>
              </div>
              <div className="flex items-center">
                <img
                  className="mx-auto h-14 w-fit dark:invert"
                  src={asset("/logos/java.svg")}
                  alt="Java Logo"
                  height="20"
                  width="auto"
                />
              </div>
              <div className="flex items-center">
                <img
                  className="mx-auto h-8 w-fit dark:invert"
                  src={asset("/logos/nodejs.svg")}
                  alt="Node.js Logo"
                  height="20"
                  width="auto"
                />
              </div>
              <div className="flex items-center gap-2">
                <img
                  className="mx-auto h-8 w-fit dark:invert"
                  src={asset("/logos/react.svg")}
                  alt="React Logo"
                  height="20"
                  width="auto"
                />
                <h2 className="text-center text-[#58C4DC] justify-center flex">
                  React
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <img
                  className="mx-auto h-8 w-fit dark:invert"
                  src={asset("/logos/nextlogo.svg")}
                  alt="Next.js Logo"
                  height="20"
                  width="auto"
                />
                <img
                  className="mx-auto h-5 w-fit dark:invert"
                  src={asset("/logos/next.svg")}
                  alt="Next.js Logo"
                  height="20"
                  width="auto"
                />
              </div>
              <div className="flex items-center">
                <img
                  className="mx-auto h-12 w-fit dark:invert"
                  src={asset("/logos/python.svg")}
                  alt="Python Logo"
                  height="20"
                  width="auto"
                />
              </div>
              <div className="flex items-center">
                <img
                  className="mx-auto h-8 w-fit dark:invert"
                  src={asset("/logos/docker.svg")}
                  alt="Docker Logo"
                  height="20"
                  width="auto"
                />
              </div>
              <div className="flex items-center">
                <img
                  className="mx-auto h-8 w-fit dark:invert"
                  src={asset("/logos/flutter.svg")}
                  alt="Flutter Logo"
                  height="20"
                  width="auto"
                />
              </div>
              <div className="flex items-center">
                <img
                  className="mx-auto h-14 w-fit dark:invert"
                  src={asset("/logos/aws.svg")}
                  alt="AWS Logo"
                  height="20"
                  width="auto"
                />
              </div>
            </InfiniteSlider>

            <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
            <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
