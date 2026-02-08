import { Smile, Sun, Coffee, Music, Heart, Star } from 'lucide-react';

export default function WellbeingSection() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl p-8 md:p-12 mb-12 border border-amber-100">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
            <Smile className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Umenie pohody</h1>
            <p className="text-slate-600 mt-2">Vnútorný pokoj, radosť a rovnováha v živote</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center">
              <Sun className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Vnútorný pokoj</h2>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            Pravá pohoda neprichádza z vonkajších okolností, ale z vnútorného stavu mysle.
            Je to schopnosť byť v pokoji aj uprostred búrky života.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
              <span className="text-slate-600">Prijímanie toho, čo nemôžeme zmeniť</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
              <span className="text-slate-600">Vďačnosť za to, čo máme</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
              <span className="text-slate-600">Odpustenie sebe aj druhým</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Sebaopatera</h2>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            Staráme sa o druhých, ale zabúdame na seba. Skutočná pohoda začína láskavosťou
            k sebe samému a starostlivosťou o svoje potreby.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
              <span className="text-slate-600">Pravidelný odpočinok a spánok</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
              <span className="text-slate-600">Zdravé jedlo a pohyb</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
              <span className="text-slate-600">Čas na veci, ktoré nás napĺňajú</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-br from-amber-400 to-yellow-500 rounded-3xl p-12 text-white mb-12 shadow-xl">
        <div className="max-w-3xl mx-auto text-center">
          <Star className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            "Pohoda nie je cieľ, je to spôsob cestovania životom."
          </h2>
          <p className="text-amber-100 text-lg">
            Každý deň máme možnosť vybrať si pokoj, radosť a vďačnosť bez ohľadu na okolnosti.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
          <Coffee className="w-10 h-10 text-amber-400 mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-3">Malé radosti</h3>
          <p className="text-slate-600 leading-relaxed">
            Šálka rannej kávy, úsmev cudzinca, zvuk vtákov. Všímať si krásu v maličkostiach.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
          <Music className="w-10 h-10 text-amber-400 mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-3">Tvorivosť</h3>
          <p className="text-slate-600 leading-relaxed">
            Hudba, maľovanie, písanie. Tvorivosť je liek pre dušu a zdroj hlbokej pohody.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
          <Heart className="w-10 h-10 text-amber-400 mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-3">Vzťahy</h3>
          <p className="text-slate-600 leading-relaxed">
            Kvalitný čas s milovanými ľuďmi. To sú chvíle, na ktoré sa pamätá navždy.
          </p>
        </div>
      </div>

      <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
          Denná rutina pre pohodu
        </h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">🌅</div>
              <h4 className="font-bold text-slate-900">Ráno</h4>
            </div>
            <ul className="space-y-2 text-slate-600">
              <li>• Vďačnosť za nový deň</li>
              <li>• 5 minút meditácie alebo dýchania</li>
              <li>• Zdravá snídaňa</li>
              <li>• Pozitívna afirmácia</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">☀️</div>
              <h4 className="font-bold text-slate-900">Poludnie</h4>
            </div>
            <ul className="space-y-2 text-slate-600">
              <li>• Prestávka od práce</li>
              <li>• Krátka prechádzka vonku</li>
              <li>• Vedomé jedenie</li>
              <li>• Kontakt s priateľom</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">🌆</div>
              <h4 className="font-bold text-slate-900">Večer</h4>
            </div>
            <ul className="space-y-2 text-slate-600">
              <li>• Reflexia dňa</li>
              <li>• Čas s rodinou</li>
              <li>• Koníčky a záľuby</li>
              <li>• Príprava na zajtrajšok</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">🌙</div>
              <h4 className="font-bold text-slate-900">Pred spánkom</h4>
            </div>
            <ul className="space-y-2 text-slate-600">
              <li>• Žiadne obrazovky 1h pred spaním</li>
              <li>• Čítanie knihy</li>
              <li>• Upokojujúca hudba</li>
              <li>• Vďačnosť za všetko dobré</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 p-6 bg-amber-50 rounded-xl border border-amber-100">
          <p className="text-center text-slate-700 leading-relaxed">
            <span className="font-bold text-slate-900">Pamätaj:</span> Pohoda nie je stav,
            ktorý raz dosiahneme a potom máme navždy. Je to každodenná prax láskavosti,
            prijatia a prítomnosti. Každý deň je nová príležitosť vybrať si pokoj.
          </p>
        </div>
      </div>
    </div>
  );
}
