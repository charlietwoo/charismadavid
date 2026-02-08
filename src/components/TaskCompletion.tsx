import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { supabase, ChallengeDay } from '../lib/supabase';
import { X, CheckCircle, FileText, Loader } from 'lucide-react';

type TaskCompletionProps = {
  day: ChallengeDay;
  onClose: () => void;
  onComplete: () => void;
};

export default function TaskCompletion({ day, onClose, onComplete }: TaskCompletionProps) {
  const { user } = useAuth();
  const [completionText, setCompletionText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      women: 'from-rose-400 to-pink-500',
      men: 'from-blue-600 to-sky-600',
      courage: 'from-orange-500 to-red-600',
      presence: 'from-emerald-500 to-teal-600',
      wellbeing: 'from-amber-400 to-yellow-500',
      general: 'from-slate-500 to-slate-600'
    };
    return colors[category] || colors.general;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !completionText.trim()) {
      setError('Prosím, popíš čo si urobil');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const { error: upsertError } = await supabase
        .from('user_progress')
        .upsert({
          user_id: user.id,
          day_number: day.id,
          completed: true,
          completion_type: 'description',
          completion_text: completionText,
          completed_at: new Date().toISOString()
        }, {
          onConflict: 'user_id,day_number'
        });

      if (upsertError) throw upsertError;

      onComplete();
    } catch (err: any) {
      setError(err.message || 'Nastala chyba. Skús to znova.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className={`bg-gradient-to-br ${getCategoryColor(day.category)} p-8 text-white relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-xl transition-all backdrop-blur-sm"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm text-2xl font-bold">
              {day.id}
            </div>
            <div>
              <p className="text-sm text-white/80 mb-1">Deň {day.id} z 28</p>
              <h2 className="text-3xl font-bold">{day.title}</h2>
            </div>
          </div>

          <p className="text-white/90 text-lg leading-relaxed">
            {day.description}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Popíš svoju skúsenosť</h3>
                <p className="text-sm text-slate-600">Čo si urobil? Ako sa cítiš?</p>
              </div>
            </div>

            <textarea
              value={completionText}
              onChange={(e) => setCompletionText(e.target.value)}
              placeholder="Dnes som... Cítil som sa... Naučil som sa..."
              className="w-full h-40 p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
              required
              minLength={20}
            />
            <p className="text-xs text-slate-500 mt-2">
              Minimálne 20 znakov ({completionText.length}/20)
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-all"
            >
              Zrušiť
            </button>
            <button
              type="submit"
              disabled={loading || completionText.length < 20}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  Ukladám...
                </>
              ) : (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Dokončiť úlohu
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
