import { Target, Sparkles, Users, Heart, Clock, Smile, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-3xl p-12 md:p-16 text-white mb-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm">
              <Target className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold">28-Dňová výzva</h1>
              <p className="text-xl text-white/90 mt-2">Transformuj svoj život za jeden mesiac</p>
            </div>
          </div>

          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl">
            Každý deň nová úloha, ktorá ťa posunie bližšie k lepšej verzii seba. Od rannej vďačnosti
            až po odvážne kroky mimo komfortnej zóny. Dokáž splnenie úlohy opisom svojej skúsenosti
            a postupne sa ti odomkne celá cesta.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2">28</div>
              <p className="text-white/80">Dní transformácie</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2">5</div>
              <p className="text-white/80">Tematických oblastí</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2">∞</div>
              <p className="text-white/80">Možností rastu</p>
            </div>
          </div>

          <button className="bg-white text-violet-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-xl">
            Začať výzvu teraz
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
          Objavuj životné témy
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-14 h-14 bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl flex items-center justify-center mb-4 shadow-md">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Ženy</h3>
            <p className="text-slate-600 leading-relaxed">
              Sila ženskej energie, intuície a emocionálnej inteligencie. Objavuj hlboké spojenie
              so sebou aj druhými.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-sky-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Muži</h3>
            <p className="text-slate-600 leading-relaxed">
              Mužská sila, zodpovednosť a vnútorná pevnosť. Cesta k autentickej mužskej
              zrelosti a integrite.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Odvaha</h3>
            <p className="text-slate-600 leading-relaxed">
              Prekonávanie strachu, autentický život a kroky mimo komfortnej zóny. Odvaha
              byť sebou navzdory všetkému.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Prítomnosť</h3>
            <p className="text-slate-600 leading-relaxed">
              Mindfulness, žitie v teraz a vnútorný pokoj. Umenie byť plne prítomný v každom
              momente svojho života.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center mb-4 shadow-md">
              <Smile className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Pohoda</h3>
            <p className="text-slate-600 leading-relaxed">
              Sebastarostlivosť, denné rituály a vnútorná rovnováha. Cesta k trvácnej pohode
              a spokojnosti so životom.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-14 h-14 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center mb-4 shadow-md">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">A ďalšie...</h3>
            <p className="text-slate-600 leading-relaxed">
              Všetky tieto témy sa prelínajú v 28-dňovej výzve. Začni svoju cestu dnes
              a objavuj nové aspekty seba.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Ako to funguje?
          </h2>
          <div className="space-y-6 text-left">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-violet-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Prihlás sa</h3>
                <p className="text-slate-600">
                  Vytvor si účet a začni svoju 28-dňovú cestu transformácie.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-violet-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Plň denné úlohy</h3>
                <p className="text-slate-600">
                  Každý deň ťa čaká nová výzva. Po splnení napíš popis svojej skúsenosti.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-violet-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Sleduj svoj pokrok</h3>
                <p className="text-slate-600">
                  Každý dokončený deň odomkne ďalší. Postupne prechádzaš celou výzvou.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-violet-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Zmeň svoj život</h3>
                <p className="text-slate-600">
                  Po 28 dňoch budeš iný človek - silnejší, odvážnejší a spokojnejší.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
