/*
  # 28-Day Challenge System

  1. New Tables
    - `challenge_days`
      - `id` (integer, primary key) - Day number (1-28)
      - `title` (text) - Title of the daily challenge
      - `description` (text) - Detailed description of the task
      - `category` (text) - Category (women, men, courage, presence, wellbeing)
      - `created_at` (timestamptz) - Creation timestamp
    
    - `user_progress`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to auth.users)
      - `day_number` (integer, foreign key to challenge_days)
      - `completed` (boolean) - Whether task is completed
      - `completion_type` (text) - 'photo' or 'description'
      - `completion_text` (text) - Description of what they did
      - `photo_url` (text, optional) - URL to photo if uploaded
      - `completed_at` (timestamptz) - When task was completed
      - `created_at` (timestamptz) - Creation timestamp

  2. Security
    - Enable RLS on both tables
    - challenge_days: Public read access for authenticated users
    - user_progress: Users can only read/write their own progress

  3. Important Notes
    - Days unlock sequentially (must complete day N before day N+1)
    - Each user can only have one progress entry per day
    - Challenge data is pre-populated with 28 days of tasks
*/

CREATE TABLE IF NOT EXISTS challenge_days (
  id integer PRIMARY KEY,
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL CHECK (category IN ('women', 'men', 'courage', 'presence', 'wellbeing', 'general')),
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS user_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  day_number integer REFERENCES challenge_days(id) NOT NULL,
  completed boolean DEFAULT false,
  completion_type text CHECK (completion_type IN ('photo', 'description')),
  completion_text text,
  photo_url text,
  completed_at timestamptz,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, day_number)
);

ALTER TABLE challenge_days ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view challenge days"
  ON challenge_days FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can view own progress"
  ON user_progress FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress"
  ON user_progress FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress"
  ON user_progress FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_day_number ON user_progress(day_number);

INSERT INTO challenge_days (id, title, description, category) VALUES
  (1, 'Ranná vďačnosť', 'Napíš si 3 věci, za ktoré si dnes vďačný. Uvedom si pozitívne aspekty svojho života a začni deň s vďačnosťou.', 'wellbeing'),
  (2, 'Pozdrav cudzinca', 'Úsmev a pozdrav cudzincovi. Prelom bariéru a prines radosť niekomu neznámemu.', 'courage'),
  (3, 'Bezpečný priestor', 'Vytvor si priestor, kde sa cítiš úplne bezpečne. Môže to byť kútik doma, miesto v prírode, alebo len chvíľa v tichu.', 'presence'),
  (4, 'Pomôž niekomu', 'Urob niečo pekné pre niekoho iného bez očakávania niečoho na oplátku. Môže to byť malá pozornosť alebo pomoc.', 'courage'),
  (5, 'Meditácia 10 minút', 'Venuj 10 minút meditácii alebo tichému sedeniu. Pozoruj svoj dych a myšlienky bez súdenia.', 'presence'),
  (6, 'Napíš list sebe', 'Napíš láskavý list sebe zo súčasnosti alebo budúcnosti. Buď k sebe milý a podporujúci.', 'wellbeing'),
  (7, 'Pohyb v prírode', 'Strávť aspoň 30 minút pohybom vonku. Prechádzka, beh, joga v parku - čokoľvek, čo ťa napojí na prírodu.', 'wellbeing'),
  (8, 'Poviem NIE', 'Povedz nie na niečo, čo nechceš robiť. Nauč sa chrániť svoje hranice a energiu.', 'courage'),
  (9, 'Kreatívna chvíľa', 'Venuj sa tvorivosti - kreslenie, písanie, tanec, hudba. Nechaj svoju kreativitu tiecť bez súdenia.', 'wellbeing'),
  (10, 'Hlboký rozhovor', 'Porozprávaj sa s niekým o niečom dôležitom. Pýtaj sa hlbokých otázok a naozaj počúvaj.', 'presence'),
  (11, 'Ranný rituál', 'Vytvor si ranný rituál, ktorý ťa nabije energiou. Môže obsahovať cvičenie, meditáciu, čítanie alebo čokoľvek iné.', 'wellbeing'),
  (12, 'Vyjadri city', 'Otvorene vyjadri svoje emócie niekomu blízkemu. Použi "cítim sa..." vyjadrenia.', 'courage'),
  (13, 'Digital detox', 'Jeden deň bez sociálnych sietí. Všimni si, ako sa menil tvoj stav mysle počas dňa.', 'presence'),
  (14, 'Oslávť úspech', 'Pripomeň si a oslávť jeden svoj úspech z minulosti. Uvedom si svoju silu.', 'courage'),
  (15, 'Upratovanie priestoru', 'Uprac a zorganizuj jeden priestor vo svojom domove. Vonkajší poriadok prináša vnútorný pokoj.', 'wellbeing'),
  (16, 'Odpusť niekomu', 'Vyber si niekoho, komu chceš odpustiť (alebo sebe). Odpustenie je dar pre teba.', 'courage'),
  (17, 'Jesť v tichu', 'Zjedz jedno jedlo v úplnom tichu, bez telefónu a rozptýlenia. Vychutnaj si každé sústo.', 'presence'),
  (18, 'Poviem áno novému', 'Povedz áno na niečo nové, čo ťa vystraší, ale vzrušuje. Krok mimo komfortnej zóny.', 'courage'),
  (19, 'Pohľad do zrkadla', 'Pozri sa do zrkadla a povedz si 3 pozitívne afirmácie. Uveř im.', 'wellbeing'),
  (20, 'Spí 8 hodín', 'Zaručiť si plných 8 hodín kvalitného spánku. Spánok je základ pohody.', 'wellbeing'),
  (21, 'Zdieľaj príbeh', 'Zdieľaj svoj osobný príbeh alebo zraniteľnosť s niekým, komu dôveruješ.', 'courage'),
  (22, 'Dýchanie 5-5-5', 'Cvič hlboké dýchanie: 5 sekúnd nádych, 5 sekúnd zadržanie, 5 sekúnd výdych. Opakuj 10x.', 'presence'),
  (23, 'Akt láskavosti', 'Urob nečakaný akt láskavosti. Môže to byť zaplatenie kávy pre niekoho, list, alebo čokoľvek od srdca.', 'courage'),
  (24, 'Odpojím sa večer', 'Večer bez obrazoviek hodinu pred spaním. Prečítaj knihu alebo sa porozprávaj s blízkymi.', 'wellbeing'),
  (25, 'Telo ako chrám', 'Celý deň jedz len zdravé jedlo a venuj pozornosť svojmu telu. Telo je tvoj domov.', 'wellbeing'),
  (26, 'Nauč sa niečo nové', 'Začni sa učiť niečo úplne nové - jazyk, nástroj, skill. Urob prvý krok.', 'courage'),
  (27, 'Byť prítomný', 'Celý deň sa snaž byť plne prítomný v každej aktivite. Všimni si, keď ti utečie myseľ.', 'presence'),
  (28, 'Reflexia a oslava', 'Zhodnoť celú cestu 28 dní. Čo si sa naučil? Ako si rástol? Oslávuj svoj pokrok!', 'general')
ON CONFLICT (id) DO NOTHING;
