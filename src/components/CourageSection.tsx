import { Heart, Flame, Zap, Award, Rocket, Star } from 'lucide-react';

export default function CourageSection() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 md:p-12 mb-12 border border-orange-100">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Sila odvahy</h1>
            <p className="text-slate-600 mt-2">Konať napriek strachu, žiť autenticky</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
              <Flame className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Odvaha nie je absencia strachu</h2>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            Odvaha znamená konať napriek strachu. Pocítiť neistotu, pochybnosti a aj tak urobiť to,
            čo považujeme za správne. To je pravá sila charakteru.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
              <span className="text-slate-600">Priznať si vlastný strach</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
              <span className="text-slate-600">Konať aj s trasúcimi kolenami</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
              <span className="text-slate-600">Rásť s každým prekonaným strachom</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Krok mimo komfortnú zónu</h2>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            Rast sa deje mimo našej pohodlie. Každý odvážny krok do neznáma nás posúva bližšie
            k tomu, kým môžeme skutočne byť.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
              <span className="text-slate-600">Vítanie nových výziev</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
              <span className="text-slate-600">Učenie sa z neúspechov</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
              <span className="text-slate-600">Oslava malých víťazstiev</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-12 text-white mb-12 shadow-xl">
        <div className="max-w-3xl mx-auto text-center">
          <Rocket className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            "Odvaha nie je len pre hrdinov. Je pre každého, kto sa rozhodne žiť naplno."
          </h2>
          <p className="text-orange-100 text-lg">
            Každodenná odvaha v malých rozhodnutiach formuje náš charakter viac než veľké činy.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
          <Award className="w-10 h-10 text-orange-500 mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-3">Riskovať</h3>
          <p className="text-slate-600 leading-relaxed">
            Bez rizika nie je odmeňa. Odvaha riskovať je kľúč k novým možnostiam a príležitostiam.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
          <Star className="w-10 h-10 text-orange-500 mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-3">Autenticita</h3>
          <p className="text-slate-600 leading-relaxed">
            Odvaha byť sebou samým v svete, ktorý chce, aby sme boli niekto iný.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
          <Flame className="w-10 h-10 text-orange-500 mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-3">Vášeň</h3>
          <p className="text-slate-600 leading-relaxed">
            Nasledovať svoju vášeň aj keď sa ostatní smejú. To je odvaha žiť svoj vlastný život.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Cesta k odvážnemu životu</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <h4 className="font-bold text-slate-900">Identifikuj svoj strach</h4>
            </div>
            <p className="text-slate-600 text-sm">
              Čo ťa skutočne blokuje? Pomenuj to nahlas.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <h4 className="font-bold text-slate-900">Začni malým krokom</h4>
            </div>
            <p className="text-slate-600 text-sm">
              Nemusíš hneď skočiť do hlbokej vody. Začni mlákou.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <h4 className="font-bold text-slate-900">Oslavuj každý pokrok</h4>
            </div>
            <p className="text-slate-600 text-sm">
              Každý krok von z komfortnej zóny je víťazstvo.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <h4 className="font-bold text-slate-900">Buď súcitný k sebe</h4>
            </div>
            <p className="text-slate-600 text-sm">
              Nie vždy sa podarí. A to je úplne v poriadku.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
