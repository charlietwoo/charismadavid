import { Shield, Flame, Target, Calendar, ArrowRight, CheckCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Flame className="w-8 h-8 text-orange-500" />
            <span className="text-2xl font-bold text-white">Charizma</span>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
            Začať Program
          </button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Ako Zaujať Ženu
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 mt-2">
              S Prirodzenou Charizmo
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Objavte tri piliere, ktoré transformujú každodenného muža na charizmatickú osobnosť.
            28-dňový program, ktorý zmení váš život.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              Spustiť 28-dňový Program
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300">
              Zistiť Viac
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Tri Piliere Charizmy
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Základné vlastnosti, ktoré robia z muža neodolateľného
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600 hover:border-orange-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-orange-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Pokora</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Skutočná sila prichádza z pokory. Schopnosť počúvať, učiť sa a rásť.
                Muž s pokorou vie, že nie je dokonalý, ale neustále sa zlepšuje.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <span>Aktívne počúvanie</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <span>Prijímanie spätnej väzby</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <span>Rešpekt k druhým</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-b from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600 hover:border-orange-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-orange-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Flame className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Odvaha</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Odvaha konať napriek strachu. Riskovať odmietnutie. Vyjadriť sa autenticky.
                Ženy sú prirodzene priťahované k odvážnym mužom.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <span>Prvý krok v komunikácii</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <span>Autentické vyjadrovanie</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <span>Prekonávanie komfortnej zóny</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-b from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600 hover:border-orange-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-orange-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Disciplína</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Konzistentnosť je kľúčom k transformácii. Disciplína v každodenných návykoch
                buduje sebadôveru, ktorá ženy cítia na kilometre.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <span>Denné rutiny a návyky</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <span>Fyzická kondícia</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <span>Sebarozvoj</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-12 h-12 text-white" />
                <span className="text-white/90 font-semibold text-lg">28-Dňový Program</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transformuj Sa Za 28 Dní
              </h2>

              <p className="text-xl text-white/90 mb-8 max-w-3xl leading-relaxed">
                Štruktúrovaný program, ktorý krok za krokom buduje všetky tri piliere.
                Každý deň nové výzvy, cvičenia a praktické úlohy, ktoré ťa posunú bližšie k cieľu.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h4 className="font-bold text-white text-lg mb-3">Týždeň 1-2: Základy</h4>
                  <p className="text-white/80">Budovanie pokory a sebapoznania. Pochopenie svojich silných stránok a oblasti na zlepšenie.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h4 className="font-bold text-white text-lg mb-3">Týždeň 3-4: Akcia</h4>
                  <p className="text-white/80">Rozvoj odvahy cez reálne sociálne interakcie a prekonávanie strachu z odmietnutia.</p>
                </div>
              </div>

              <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Začať Program Teraz
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Si Pripravený Na Zmenu?
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Tisíce mužov už prešli týmto programom a transformovali svoj život.
            Čo keby ďalší mohol byť ty?
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-lg font-bold text-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
            Začať Teraz
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-slate-700">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p className="mb-2">© 2026 Charizma. Všetky práva vyhradené.</p>
          <p className="text-sm">Transformuj svoj život s prirodzenou charizmo.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
