import { Clock, Leaf, Eye, Wind, Mountain, Waves } from 'lucide-react';

export default function PresenceSection() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 md:p-12 mb-12 border border-emerald-100">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
            <Clock className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Sila prítomnosti</h1>
            <p className="text-slate-600 mt-2">Žiť v teraz, uvoľniť minulosť, neprekračovať budúcnosť</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Život sa deje teraz</h2>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            Minulosť je už preč, budúcnosť ešte neprišla. Jediný moment, ktorý skutočne máme,
            je tento práve teraz. V ňom je skrytá celá sila života.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
              <span className="text-slate-600">Vnímanie okamžiku všetkými zmyslami</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
              <span className="text-slate-600">Uvoľnenie starostí o minulosť</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
              <span className="text-slate-600">Upustenie úzkosti o budúcnosť</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
              <Wind className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Dýchanie ako kotva</h2>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            Dych je most medzi telom a mysľou. Kedykoľvek sa stratíme v myšlienkach,
            dych nás privedie späť do tohto magického momentu prítomnosti.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
              <span className="text-slate-600">Vedomé dýchanie upokojuje myseľ</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
              <span className="text-slate-600">Každý nádech je nový začiatok</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
              <span className="text-slate-600">Výdych uvoľňuje napätie</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-12 text-white mb-12 shadow-xl">
        <div className="max-w-3xl mx-auto text-center">
          <Leaf className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            "Ak si depresívny, žiješ v minulosti. Ak si úzkostný, žiješ v budúcnosti.
            Ak si pokojný, žiješ v prítomnosti."
          </h2>
          <p className="text-emerald-100 text-lg">
            Prítomnosť nie je miesto, kam ideme. Je to spôsob, akým žijeme každý okamžik.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
          <Mountain className="w-10 h-10 text-emerald-500 mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-3">Meditácia</h3>
          <p className="text-slate-600 leading-relaxed">
            Pravidelná prax meditácie nás učí byť prítomní aj uprostred chaosu života.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
          <Waves className="w-10 h-10 text-emerald-500 mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-3">Tok</h3>
          <p className="text-slate-600 leading-relaxed">
            Stav plného ponorenia do činnosti, kde čas prestáva existovať a sme jedným s momentom.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
          <Leaf className="w-10 h-10 text-emerald-500 mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-3">Príroda</h3>
          <p className="text-slate-600 leading-relaxed">
            Čas v prírode nás automaticky vracia do prítomnosti. Stromy neponáhľajú a predsa rastú.
          </p>
        </div>
      </div>

      <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
          5-minútové cvičenie prítomnosti
        </h3>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Zastav sa</h4>
                <p className="text-slate-600">
                  Prestaň robiť čokoľvek. Len sa zastav a dýchaj.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">5 zmyslov</h4>
                <p className="text-slate-600">
                  Všímaj si 5 vecí, ktoré vidíš, 4 ktoré počuješ, 3 ktoré cítiš na dotyk,
                  2 vône a 1 chuť.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Vedomé dýchanie</h4>
                <p className="text-slate-600">
                  Sústred' sa len na svoj dych. Nádych... výdych... nádych... výdych...
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Prijmi tento moment</h4>
                <p className="text-slate-600">
                  Takýto, aký je. Bez hodnotenia, bez zmeny. Len byť tu a teraz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
