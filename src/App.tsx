import { useState } from 'react';
import { Menu, X, Users, Sparkles, Heart, Clock, Smile, Home } from 'lucide-react';
import HomePage from './components/HomePage';
import WomenSection from './components/WomenSection';
import MenSection from './components/MenSection';
import CourageSection from './components/CourageSection';
import PresenceSection from './components/PresenceSection';
import WellbeingSection from './components/WellbeingSection';

type Section = 'home' | 'women' | 'men' | 'courage' | 'presence' | 'wellbeing';

function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { id: 'home' as Section, name: 'Domov', icon: Home, color: 'bg-gradient-to-br from-blue-500 to-cyan-500' },
    { id: 'women' as Section, name: 'Ženy', icon: Sparkles, color: 'bg-gradient-to-br from-rose-400 to-pink-500' },
    { id: 'men' as Section, name: 'Muži', icon: Users, color: 'bg-gradient-to-br from-blue-600 to-sky-600' },
    { id: 'courage' as Section, name: 'Odvaha', icon: Heart, color: 'bg-gradient-to-br from-orange-500 to-red-600' },
    { id: 'presence' as Section, name: 'Prítomnosť', icon: Clock, color: 'bg-gradient-to-br from-emerald-500 to-teal-600' },
    { id: 'wellbeing' as Section, name: 'Pohoda', icon: Smile, color: 'bg-gradient-to-br from-amber-400 to-yellow-500' },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomePage />;
      case 'women':
        return <WomenSection />;
      case 'men':
        return <MenSection />;
      case 'courage':
        return <CourageSection />;
      case 'presence':
        return <PresenceSection />;
      case 'wellbeing':
        return <WellbeingSection />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="p-6 border-b border-slate-200">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Životná múdrosť
          </h1>
          <p className="text-sm text-slate-500 mt-1">Objavuj, inšpiruj sa, rasti</p>
        </div>

        <nav className="p-4 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-slate-100 shadow-md scale-105'
                    : 'hover:bg-slate-50 hover:scale-102'
                }`}
              >
                <div className={`p-2 rounded-lg ${item.color} shadow-sm`}>
                  <Icon size={20} className="text-white" />
                </div>
                <span className={`font-semibold ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>
                  {item.name}
                </span>
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-200 bg-gradient-to-t from-slate-50">
          <p className="text-xs text-slate-400 text-center">
            © 2026 Životná múdrosť
          </p>
        </div>
      </aside>

      <main className="lg:ml-72 min-h-screen">
        <div className="p-4 lg:p-8">
          {renderSection()}
        </div>
      </main>

      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
