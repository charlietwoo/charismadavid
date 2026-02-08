import { ArrowRight, Sparkles, Heart, Brain, TrendingUp } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          Vitajte v <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Životnej múdrosti</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Platforma pre osobný rozvoj, sebapoznanie a transformáciu. Objavte tajomstvo harmonických vzťahov,
          vnútornej sily a pravej pohody.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
          <div className="w-14 h-14 bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl flex items-center justify-center mb-6">
            <Sparkles className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Ženy</h3>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Sila ženskej energie, intuície a empatie. Objavte tajomstvá ženského sveta a harmónie.
          </p>
          <button className="text-rose-500 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
            Prečítať viac <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-sky-600 rounded-xl flex items-center justify-center mb-6">
            <Brain className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Muži</h3>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Mužská sila, zodpovednosť a stabilita. Cesta k zrelej maskulinite a sebaistote.
          </p>
          <button className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
            Prečítať viac <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
          <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
            <Heart className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Odvaha</h3>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Prekonávanie strachu a limitov. Odvaha žiť autenticky a naplno, bez masiek.
          </p>
          <button className="text-orange-500 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
            Prečítať viac <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
        <div className="max-w-3xl mx-auto">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Začnite svoju transformáciu dnes
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Každá veľká cesta začína prvým krokom. Objavte, čo v vás dremle a prebuďte svoj plný potenciál.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl">
              Preskúmať témy
            </button>
            <button className="bg-slate-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-600 transition-all">
              O projekte
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
        <div>
          <div className="text-4xl font-bold text-slate-900 mb-2">500+</div>
          <div className="text-slate-600">Článkov a zdrojov</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-slate-900 mb-2">10K+</div>
          <div className="text-slate-600">Spokojných čitateľov</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-slate-900 mb-2">5</div>
          <div className="text-slate-600">Kľúčových tém</div>
        </div>
      </div>
    </div>
  );
}
