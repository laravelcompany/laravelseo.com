import * as Tabs from '@radix-ui/react-tabs';
import {
  ShoppingCart,
  Heart,
  Car,
  Laptop,
  Package,
  UtensilsCrossed,
  CheckCircle2,
  AlertCircle,
  Lightbulb
} from 'lucide-react';

interface UseCase {
  industry: string;
  iconName: string;
  image: { src: string;[key: string]: any };
  challenge: string;
  solution: string;
  results: string[];
}

interface Props {
  useCases: UseCase[];
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShoppingCart,
  Heart,
  Car,
  Laptop,
  Package,
  UtensilsCrossed,
};

export default function UseCaseTabs({ useCases }: Props) {
  // Get unique industries
  const industries = Array.from(new Set(useCases.map((uc) => uc.industry)));

  return (
    <Tabs.Root defaultValue={industries[0]} className="w-full">
      <Tabs.List className="flex flex-wrap gap-2 border-b-2 border-slate-700 mb-8 pb-2">
        {industries.map((industry) => {
          const useCase = useCases.find((uc) => uc.industry === industry);
          const IconComponent = useCase ? iconMap[useCase.iconName] : null;

          return (
            <Tabs.Trigger
              key={industry}
              value={industry}
              className="group px-6 py-3 text-sm font-semibold text-slate-400 border-b-2 border-transparent hover:text-violet-400 hover:border-violet-400 transition-all duration-200 data-[state=active]:text-violet-400 data-[state=active]:border-violet-400 flex items-center gap-2"
            >
              {IconComponent && (
                <IconComponent className="w-4 h-4 group-data-[state=active]:text-violet-400" />
              )}
              {industry}
            </Tabs.Trigger>
          );
        })}
      </Tabs.List>

      {industries.map((industry) => {
        const useCase = useCases.find((uc) => uc.industry === industry);
        if (!useCase) return null;

        const IconComponent = iconMap[useCase.iconName];

        return (
          <Tabs.Content
            key={industry}
            value={industry}
            className="space-y-6 animate-fadeIn"
          >
            <div className="bg-slate-800 rounded-2xl border border-slate-700 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Image Section */}
                <div className="lg:col-span-5 relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={useCase.image.src}
                    alt={useCase.industry}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <div className="w-16 h-16 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      {IconComponent && (
                        <IconComponent className="w-8 h-8 text-violet-600" />
                      )}
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                      {useCase.industry}
                    </h2>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:col-span-7 p-8 lg:p-10">
                  <div className="space-y-6">
                    {/* Challenge */}
                    <div className="bg-red-900/30 border-l-4 border-red-500 rounded-r-lg p-5">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                        <div>
                          <h3 className="text-lg font-bold text-red-100 mb-2">
                            Challenge
                          </h3>
                          <p className="text-slate-300 leading-relaxed">
                            {useCase.challenge}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Solution */}
                    <div className="bg-violet-900/30 border-l-4 border-violet-500 rounded-r-lg p-5">
                      <div className="flex items-start gap-3">
                        <Lightbulb className="w-6 h-6 text-violet-400 shrink-0 mt-0.5" />
                        <div>
                          <h3 className="text-lg font-bold text-violet-100 mb-2">
                            Solution
                          </h3>
                          <p className="text-slate-300 leading-relaxed">
                            {useCase.solution}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                        Results
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {useCase.results.map((result, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 bg-green-900/30 rounded-lg p-4 border border-green-800"
                          >
                            <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                            <span className="text-slate-200 font-medium text-sm leading-relaxed">
                              {result}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tabs.Content>
        );
      })}
    </Tabs.Root>
  );
}
