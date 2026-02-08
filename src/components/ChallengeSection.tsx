import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { supabase, ChallengeDay, UserProgress } from '../lib/supabase';
import { Trophy, Lock, CheckCircle, Calendar, LogOut, Loader } from 'lucide-react';
import TaskCompletion from './TaskCompletion';

export default function ChallengeSection() {
  const { user, signOut } = useAuth();
  const [challenges, setChallenges] = useState<ChallengeDay[]>([]);
  const [progress, setProgress] = useState<UserProgress[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  useEffect(() => {
    loadData();
  }, [user]);

  const loadData = async () => {
    if (!user) return;

    setLoading(true);
    try {
      const { data: challengeData } = await supabase
        .from('challenge_days')
        .select('*')
        .order('id');

      const { data: progressData } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id);

      setChallenges(challengeData || []);
      setProgress(progressData || []);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getDayStatus = (dayNumber: number) => {
    const dayProgress = progress.find(p => p.day_number === dayNumber);
    if (dayProgress?.completed) return 'completed';

    const previousDay = dayNumber - 1;
    if (dayNumber === 1) return 'unlocked';

    const previousProgress = progress.find(p => p.day_number === previousDay);
    if (previousProgress?.completed) return 'unlocked';

    return 'locked';
  };

  const getCompletedCount = () => {
    return progress.filter(p => p.completed).length;
  };

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

  const handleTaskComplete = () => {
    setSelectedDay(null);
    loadData();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  const completedCount = getCompletedCount();
  const progressPercentage = (completedCount / 28) * 100;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 mb-8 text-white shadow-xl">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">28-Dňová výzva</h1>
              <p className="text-blue-100">Transformuj svoj život za 28 dní</p>
            </div>
          </div>
          <button
            onClick={() => signOut()}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all backdrop-blur-sm"
            title="Odhlásiť sa"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Tvoj pokrok
            </span>
            <span className="font-bold">{completedCount} / 28 dní</span>
          </div>
          <div className="w-full h-4 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className="h-full bg-white rounded-full transition-all duration-500 shadow-lg"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4">
        {challenges.map((challenge) => {
          const status = getDayStatus(challenge.id);
          const isLocked = status === 'locked';
          const isCompleted = status === 'completed';
          const isUnlocked = status === 'unlocked';

          return (
            <button
              key={challenge.id}
              onClick={() => !isLocked && setSelectedDay(challenge.id)}
              disabled={isLocked}
              className={`
                relative p-4 rounded-2xl transition-all duration-300
                ${isCompleted ? 'bg-green-50 border-2 border-green-300 shadow-md' : ''}
                ${isUnlocked ? 'bg-white border-2 border-blue-300 shadow-md hover:shadow-xl hover:scale-105' : ''}
                ${isLocked ? 'bg-slate-100 border-2 border-slate-200 opacity-60 cursor-not-allowed' : ''}
              `}
            >
              <div className="flex flex-col items-center gap-2">
                <div className={`
                  w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg
                  ${isCompleted ? 'bg-green-500 text-white' : ''}
                  ${isUnlocked ? `bg-gradient-to-br ${getCategoryColor(challenge.category)} text-white` : ''}
                  ${isLocked ? 'bg-slate-300 text-slate-500' : ''}
                `}>
                  {isCompleted ? <CheckCircle className="w-6 h-6" /> : isLocked ? <Lock className="w-6 h-6" /> : challenge.id}
                </div>
                <span className={`text-xs font-semibold text-center ${isLocked ? 'text-slate-400' : 'text-slate-700'}`}>
                  Deň {challenge.id}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {selectedDay && (
        <TaskCompletion
          day={challenges.find(c => c.id === selectedDay)!}
          onClose={() => setSelectedDay(null)}
          onComplete={handleTaskComplete}
        />
      )}

      {completedCount === 28 && (
        <div className="mt-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-12 text-white text-center shadow-2xl">
          <Trophy className="w-20 h-20 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Gratulujem!</h2>
          <p className="text-xl text-white/90">
            Dokončil si celú 28-dňovú výzvu! Si úžasný a mali by si byť na seba hrdý.
          </p>
        </div>
      )}
    </div>
  );
}
