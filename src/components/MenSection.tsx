import { Shield, Mountain, Target, Compass, Anchor, TrendingUp } from 'lucide-react';

export default function MenSection() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-3xl p-8 md:p-12 mb-12 border border-blue-100">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-sky-600 rounded-2xl flex items-center justify-center shadow-lg">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Cesta zrelého muža</h1>
            <p className="text-slate-600 mt-2">Zodpovednosť, stabilita a vnútorná sila</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-sky-600 rounded-xl flex items-center justify-center">
              <Mountain className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Vnútorná pevnosť</h2>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            Skutočná mužská sila nie je v agresii, ale v schopnosti zostať pokojný uprostred búrky.
            Je to stabilita, na ktorú sa môžu ostatní spoľahnúť.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <span className="text-slate-600">Emocionálna vyrovnanosť v ťažkých časoch</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <span className="text-slate-600">Schopnosť prijímať zodpovednosť</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <span className="text-slate-600">Byť oporou pre seba aj ostatných</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-sky-600 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Zmysel a účel</h2>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            Muž potrebuje smer, víziu a zmysel svojho konania. Jasný cieľ mu dává energiu
            prekonávať prekážky a neustále sa zlepšovať.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <span className="text-slate-600">Nachádzanie vlastnej misie v živote</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <span className="text-slate-600">Disciplína v dosahovaní cieľov</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <span className="text-slate-600">Vytrvalosť pri prekážkach</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-600 to-sky-700 rounded-3xl p-12 text-white mb-12 shadow-xl">
        <div className="max-w-3xl mx-auto text-center">
          <Compass className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            "Skutočný muž nie je ten, kto nepadá, ale ten, kto vždy vstane."
          </h2>
          <p className="text-blue-100 text-lg">
            Mužnosť je o charaktere, integrite a schopnosti čeliť životu s hrdosťou a pokorou zároveň.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
          <Anchor className="w-10 h-10 text-blue-600 mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-3">Stabilita</h3>
          <p className="text-slate-600 leading-relaxed">
            Byť skala v oceáne zmien. Poskytovať istotu a bezpečie v neistých časoch.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
          <TrendingUp className="w-10 h-10 text-blue-600 mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-3">Neustály rast</h3>
          <p className="text-slate-600 leading-relaxed">
            Nikdy neprestať rásť. Každý deň sa stať o niečo lepšou verziou seba samého.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
          <Shield className="w-10 h-10 text-blue-600 mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-3">Ochrana</h3>
          <p className="text-slate-600 leading-relaxed">
            Nie agresivita, ale rozhodnosť chrániť to, čo je dôležité a stáť si za svojím.
          </p>
        </div>
      </div>
    </div>
  );
}
