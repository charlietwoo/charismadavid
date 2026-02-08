import { Sparkles, Heart, Moon, Sun, Flower2, BookOpen } from 'lucide-react';

export default function WomenSection() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8 md:p-12 mb-12 border border-rose-100">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Sila ženskej energie</h1>
            <p className="text-slate-600 mt-2">Intuícia, empatia a vnútorná múdrosť</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Emocionálna inteligencia</h2>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            Ženy majú prirodzenú schopnosť vnímať emócie, nielen tie svoje, ale aj ľudí okolo seba.
            Táto empatia im umožňuje budovať hlboké vzťahy a vytvárať harmóniu v prostredí.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-rose-400 rounded-full mt-2"></div>
              <span className="text-slate-600">Schopnosť počúvať a rozumieť bez slov</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-rose-400 rounded-full mt-2"></div>
              <span className="text-slate-600">Empatia ako most k druhým ľuďom</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-rose-400 rounded-full mt-2"></div>
              <span className="text-slate-600">Vytváranie bezpečného priestoru pre emócie</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl flex items-center justify-center">
              <Moon className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Intuícia a vnútorný hlas</h2>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            Ženská intuícia nie je mystika, ale hlboké prepojenie s vlastným vnútrom a jemným
            vnímaním detailov, ktoré iní prehliadajú. Je to múdrosť, ktorá hovorí šepotom.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-rose-400 rounded-full mt-2"></div>
              <span className="text-slate-600">Dôvera vo vnútorné vedenie</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-rose-400 rounded-full mt-2"></div>
              <span className="text-slate-600">Vnímanie jemných signálov z okolia</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-rose-400 rounded-full mt-2"></div>
              <span className="text-slate-600">Rovnováha medzi rozumom a cítením</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl p-12 text-white mb-12 shadow-xl">
        <div className="max-w-3xl mx-auto text-center">
          <Sun className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            "Skutočná krása ženy je v jej sile byť zraniteľná a zároveň neotrasiteľná."
          </h2>
          <p className="text-pink-100 text-lg">
            Ženská sila nespočíva v tvrdosti, ale v schopnosti objať všetky aspekty života s gráciou a odvahou.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
          <Flower2 className="w-10 h-10 text-rose-500 mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-3">Sebaláska</h3>
          <p className="text-slate-600 leading-relaxed">
            Prijatie seba samej v plnosti, s chybami i dokonalosťou. To je základ vnútornej sily.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
          <BookOpen className="w-10 h-10 text-rose-500 mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-3">Múdrosť generácií</h3>
          <p className="text-slate-600 leading-relaxed">
            Poznanie prenášané z matky na dcéru, hlboké porozumenie životu a jeho cyklom.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
          <Heart className="w-10 h-10 text-rose-500 mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-3">Starostlivosť</h3>
          <p className="text-slate-600 leading-relaxed">
            Prirodzená schopnosť pestovať, chrániť a podporovať rast - v sebe i v druhých.
          </p>
        </div>
      </div>
    </div>
  );
}
