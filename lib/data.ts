// Demo/sample content for the public IWLF website.
// This is clearly-labelled placeholder data for a static site — not production federation records.

export type EventStatus = 'Upcoming' | 'Ongoing' | 'Completed'

export type NewsItem = {
  slug: string
  title: string
  category: string
  date: string
  excerpt: string
  featured?: boolean
}

export type EventItem = {
  slug: string
  title: string
  status: EventStatus
  startDate: string
  endDate: string
  venue: string
  city: string
  state: string
  level: 'National' | 'International' | 'Zonal' | 'State'
  category: string
  description: string
}

export type Athlete = {
  slug: string
  name: string
  gender: 'Men' | 'Women'
  state: string
  weightCategory: string
  ageGroup: 'Youth' | 'Junior' | 'Senior'
  active: boolean
  bestTotal: number
  medals: number
  bio: string
}

export type Awardee = {
  name: string
  award: string
  year: number
  achievement: string
}

export type DocItem = {
  title: string
  category: string
  year: number
  type: 'PDF' | 'DOCX' | 'XLSX'
  size: string
  important?: boolean
}

export type Camp = {
  slug: string
  title: string
  status: EventStatus
  startDate: string
  endDate: string
  location: string
  category: string
  athletes: number
}

export type Competition = {
  slug: string
  title: string
  level: 'National' | 'International'
  season: string
  ageGroup: string
  venue: string
  status: EventStatus
}

export type ResultRow = {
  competition: string
  year: number
  gender: 'Men' | 'Women'
  ageGroup: string
  weightCategory: string
  rank: number
  athlete: string
  state: string
  bodyWeight: number
  snatch: number
  cleanJerk: number
  total: number
  medal: 'Gold' | 'Silver' | 'Bronze' | '-'
  record?: boolean
}

export type RankingRow = {
  rank: number
  athlete: string
  state: string
  gender: 'Men' | 'Women'
  weightCategory: string
  points: number
  bestTotal: number
}

export const stats = [
  { label: 'Affiliated State Units', value: '35+' },
  { label: 'Registered Athletes', value: '4,200+' },
  { label: 'National Championships / Year', value: '12' },
  { label: 'Years of Legacy', value: '85+' },
]

export const news: NewsItem[] = [
  {
    slug: 'senior-nationals-2026-schedule',
    title: 'Senior National Weightlifting Championships 2026 schedule announced',
    category: 'Press Release',
    date: '2026-09-02',
    excerpt:
      'The federation has confirmed dates and the host city for the flagship senior national championships, with entries opening for all affiliated state units.',
    featured: true,
  },
  {
    slug: 'youth-team-worlds-selection',
    title: 'India names youth squad for the World Youth Championships',
    category: 'Selection',
    date: '2026-08-24',
    excerpt:
      'A 14-member squad has been selected following performances at the national camp and recent domestic competitions.',
    featured: true,
  },
  {
    slug: 'anti-doping-education-drive',
    title: 'Nationwide clean sport and anti-doping education drive begins',
    category: 'Anti-Doping',
    date: '2026-08-15',
    excerpt:
      'Workshops for athletes, coaches and support staff will be held across all zones in partnership with national anti-doping bodies.',
  },
  {
    slug: 'new-training-centre-inaugurated',
    title: 'New high-performance training centre inaugurated',
    category: 'Announcement',
    date: '2026-07-30',
    excerpt:
      'The centre adds modern platforms, recovery facilities and sports-science support for the national pool of lifters.',
  },
  {
    slug: 'coach-certification-programme',
    title: 'Coach certification programme applications now open',
    category: 'Careers',
    date: '2026-07-12',
    excerpt:
      'The federation invites applications for its structured multi-level coaching certification programme.',
  },
  {
    slug: 'tender-equipment-supply',
    title: 'Tender notice: supply of competition equipment',
    category: 'Tender',
    date: '2026-06-28',
    excerpt:
      'Sealed bids are invited from eligible vendors for the supply of certified competition barbells and platforms.',
  },
]

export const events: EventItem[] = [
  {
    slug: 'senior-nationals-2026',
    title: 'Senior National Weightlifting Championships 2026',
    status: 'Upcoming',
    startDate: '2026-11-18',
    endDate: '2026-11-25',
    venue: 'Indira Gandhi Indoor Stadium',
    city: 'New Delhi',
    state: 'Delhi',
    level: 'National',
    category: 'Senior',
    description:
      'The premier annual national championship featuring men and women across all senior bodyweight categories.',
  },
  {
    slug: 'junior-nationals-2026',
    title: 'Junior National Championships 2026',
    status: 'Ongoing',
    startDate: '2026-09-12',
    endDate: '2026-09-18',
    venue: 'JLN Stadium Complex',
    city: 'Chennai',
    state: 'Tamil Nadu',
    level: 'National',
    category: 'Junior',
    description:
      'National-level competition for junior athletes, doubling as a key selection event for international duty.',
  },
  {
    slug: 'zonal-championships-east-2026',
    title: 'East Zone Championships 2026',
    status: 'Upcoming',
    startDate: '2026-10-05',
    endDate: '2026-10-09',
    venue: 'Netaji Indoor Stadium',
    city: 'Kolkata',
    state: 'West Bengal',
    level: 'Zonal',
    category: 'All',
    description:
      'Zonal qualifying competition for athletes from the eastern states and units.',
  },
  {
    slug: 'youth-nationals-2026',
    title: 'Youth National Championships 2026',
    status: 'Completed',
    startDate: '2026-05-20',
    endDate: '2026-05-26',
    venue: 'Sree Kanteerava Stadium',
    city: 'Bengaluru',
    state: 'Karnataka',
    level: 'National',
    category: 'Youth',
    description:
      'National championship for youth-category athletes with record-setting performances across weight classes.',
  },
  {
    slug: 'national-games-weightlifting-2026',
    title: 'National Games — Weightlifting 2026',
    status: 'Completed',
    startDate: '2026-02-10',
    endDate: '2026-02-16',
    venue: 'State Sports Complex',
    city: 'Panaji',
    state: 'Goa',
    level: 'National',
    category: 'Senior',
    description:
      'Weightlifting discipline of the multi-sport National Games featuring state contingents.',
  },
]

export const athletes: Athlete[] = [
  {
    slug: 'meera-devi',
    name: 'Meera Devi',
    gender: 'Women',
    state: 'Manipur',
    weightCategory: '49 kg',
    ageGroup: 'Senior',
    active: true,
    bestTotal: 205,
    medals: 12,
    bio: 'A consistent podium finisher in the 49 kg category with multiple national records.',
  },
  {
    slug: 'arjun-rana',
    name: 'Arjun Rana',
    gender: 'Men',
    state: 'Haryana',
    weightCategory: '73 kg',
    ageGroup: 'Senior',
    active: true,
    bestTotal: 322,
    medals: 9,
    bio: 'Explosive lifter known for a strong clean & jerk and international experience.',
  },
  {
    slug: 'kavya-nair',
    name: 'Kavya Nair',
    gender: 'Women',
    state: 'Kerala',
    weightCategory: '59 kg',
    ageGroup: 'Junior',
    active: true,
    bestTotal: 198,
    medals: 6,
    bio: 'Rising junior talent with rapid progression in total over the last two seasons.',
  },
  {
    slug: 'devinder-singh',
    name: 'Devinder Singh',
    gender: 'Men',
    state: 'Punjab',
    weightCategory: '96 kg',
    ageGroup: 'Senior',
    active: true,
    bestTotal: 355,
    medals: 11,
    bio: 'Powerhouse in the heavier categories with a decorated national record.',
  },
  {
    slug: 'ananya-reddy',
    name: 'Ananya Reddy',
    gender: 'Women',
    state: 'Telangana',
    weightCategory: '64 kg',
    ageGroup: 'Senior',
    active: true,
    bestTotal: 221,
    medals: 8,
    bio: 'Technically refined lifter and multiple-time national champion.',
  },
  {
    slug: 'rohit-thapa',
    name: 'Rohit Thapa',
    gender: 'Men',
    state: 'Uttarakhand',
    weightCategory: '81 kg',
    ageGroup: 'Junior',
    active: true,
    bestTotal: 318,
    medals: 5,
    bio: 'Junior international with a bright future in the middleweight divisions.',
  },
  {
    slug: 'lakshmi-patel',
    name: 'Lakshmi Patel',
    gender: 'Women',
    state: 'Gujarat',
    weightCategory: '71 kg',
    ageGroup: 'Senior',
    active: false,
    bestTotal: 214,
    medals: 7,
    bio: 'Veteran campaigner and mentor to the next generation of lifters.',
  },
  {
    slug: 'sanjay-kumar',
    name: 'Sanjay Kumar',
    gender: 'Men',
    state: 'Uttar Pradesh',
    weightCategory: '109 kg',
    ageGroup: 'Senior',
    active: true,
    bestTotal: 372,
    medals: 10,
    bio: 'Super-heavyweight contender and national record holder in the total.',
  },
]

export const awardees: Awardee[] = [
  { name: 'Meera Devi', award: 'Arjuna Award', year: 2024, achievement: 'Sustained excellence in international weightlifting.' },
  { name: 'Devinder Singh', award: 'Arjuna Award', year: 2022, achievement: 'Multiple continental medals in the 96 kg category.' },
  { name: 'Sanjay Kumar', award: 'Major Dhyan Chand Khel Ratna', year: 2023, achievement: 'Outstanding performance at global championships.' },
  { name: 'Ananya Reddy', award: 'Arjuna Award', year: 2025, achievement: 'National records and consistent podium finishes.' },
  { name: 'Coach R. Menon', award: 'Dronacharya Award', year: 2021, achievement: 'Producing multiple international medallists.' },
  { name: 'Lakshmi Patel', award: 'Padma Shri', year: 2020, achievement: 'Lifetime contribution to Indian weightlifting.' },
]

export const documents: DocItem[] = [
  { title: 'Senior Nationals 2026 — General Circular', category: 'Circular', year: 2026, type: 'PDF', size: '480 KB', important: true },
  { title: 'National Team Selection Policy', category: 'Selection Policy', year: 2026, type: 'PDF', size: '1.2 MB', important: true },
  { title: 'IWLF Constitution', category: 'Constitution', year: 2024, type: 'PDF', size: '2.4 MB' },
  { title: 'Anti-Doping Guidelines for Athletes', category: 'Anti-Doping', year: 2026, type: 'PDF', size: '760 KB' },
  { title: 'Athlete Registration Form', category: 'Forms', year: 2026, type: 'DOCX', size: '95 KB' },
  { title: 'Tender — Competition Equipment Supply', category: 'Tender', year: 2026, type: 'PDF', size: '540 KB' },
  { title: 'Executive Committee Meeting Minutes', category: 'Minutes', year: 2025, type: 'PDF', size: '320 KB' },
  { title: 'Election Notice — Office Bearers', category: 'Elections', year: 2025, type: 'PDF', size: '210 KB' },
  { title: 'Technical Rules & Regulations', category: 'Rules', year: 2024, type: 'PDF', size: '1.8 MB' },
  { title: 'Annual Disclosure Statement', category: 'Disclosures', year: 2025, type: 'XLSX', size: '140 KB' },
]

export const camps: Camp[] = [
  {
    slug: 'senior-camp-patiala-2026',
    title: 'Senior National Coaching Camp',
    status: 'Ongoing',
    startDate: '2026-08-01',
    endDate: '2026-10-30',
    location: 'Patiala',
    category: 'Senior',
    athletes: 28,
  },
  {
    slug: 'youth-camp-bengaluru-2026',
    title: 'Youth Development Camp',
    status: 'Upcoming',
    startDate: '2026-11-05',
    endDate: '2026-12-15',
    location: 'Bengaluru',
    category: 'Youth',
    athletes: 22,
  },
  {
    slug: 'junior-camp-aurangabad-2026',
    title: 'Junior Preparatory Camp',
    status: 'Completed',
    startDate: '2026-03-10',
    endDate: '2026-04-25',
    location: 'Aurangabad',
    category: 'Junior',
    athletes: 24,
  },
]

export const competitions: Competition[] = [
  {
    slug: 'senior-national-championship',
    title: 'Senior National Championship',
    level: 'National',
    season: '2026',
    ageGroup: 'Senior',
    venue: 'New Delhi',
    status: 'Upcoming',
  },
  {
    slug: 'asian-championships',
    title: 'Asian Weightlifting Championships',
    level: 'International',
    season: '2026',
    ageGroup: 'Senior',
    venue: 'Doha, Qatar',
    status: 'Completed',
  },
  {
    slug: 'commonwealth-championships',
    title: 'Commonwealth Weightlifting Championships',
    level: 'International',
    season: '2026',
    ageGroup: 'All',
    venue: 'Birmingham, UK',
    status: 'Completed',
  },
  {
    slug: 'junior-national-championship',
    title: 'Junior National Championship',
    level: 'National',
    season: '2026',
    ageGroup: 'Junior',
    venue: 'Chennai',
    status: 'Ongoing',
  },
]

export const results: ResultRow[] = [
  { competition: 'Senior National Championship', year: 2026, gender: 'Women', ageGroup: 'Senior', weightCategory: '49 kg', rank: 1, athlete: 'Meera Devi', state: 'Manipur', bodyWeight: 48.6, snatch: 90, cleanJerk: 115, total: 205, medal: 'Gold', record: true },
  { competition: 'Senior National Championship', year: 2026, gender: 'Women', ageGroup: 'Senior', weightCategory: '49 kg', rank: 2, athlete: 'S. Bora', state: 'Assam', bodyWeight: 48.9, snatch: 85, cleanJerk: 108, total: 193, medal: 'Silver' },
  { competition: 'Senior National Championship', year: 2026, gender: 'Women', ageGroup: 'Senior', weightCategory: '49 kg', rank: 3, athlete: 'P. Kumari', state: 'Bihar', bodyWeight: 48.4, snatch: 82, cleanJerk: 104, total: 186, medal: 'Bronze' },
  { competition: 'Senior National Championship', year: 2026, gender: 'Men', ageGroup: 'Senior', weightCategory: '73 kg', rank: 1, athlete: 'Arjun Rana', state: 'Haryana', bodyWeight: 72.7, snatch: 145, cleanJerk: 177, total: 322, medal: 'Gold' },
  { competition: 'Senior National Championship', year: 2026, gender: 'Men', ageGroup: 'Senior', weightCategory: '73 kg', rank: 2, athlete: 'V. Yadav', state: 'Rajasthan', bodyWeight: 72.9, snatch: 140, cleanJerk: 172, total: 312, medal: 'Silver' },
  { competition: 'Senior National Championship', year: 2026, gender: 'Men', ageGroup: 'Senior', weightCategory: '96 kg', rank: 1, athlete: 'Devinder Singh', state: 'Punjab', bodyWeight: 95.4, snatch: 160, cleanJerk: 195, total: 355, medal: 'Gold', record: true },
  { competition: 'Junior National Championship', year: 2026, gender: 'Women', ageGroup: 'Junior', weightCategory: '59 kg', rank: 1, athlete: 'Kavya Nair', state: 'Kerala', bodyWeight: 58.8, snatch: 88, cleanJerk: 110, total: 198, medal: 'Gold' },
  { competition: 'Junior National Championship', year: 2026, gender: 'Men', ageGroup: 'Junior', weightCategory: '81 kg', rank: 1, athlete: 'Rohit Thapa', state: 'Uttarakhand', bodyWeight: 80.6, snatch: 143, cleanJerk: 175, total: 318, medal: 'Gold' },
  { competition: 'Senior National Championship', year: 2026, gender: 'Women', ageGroup: 'Senior', weightCategory: '64 kg', rank: 1, athlete: 'Ananya Reddy', state: 'Telangana', bodyWeight: 63.7, snatch: 97, cleanJerk: 124, total: 221, medal: 'Gold' },
  { competition: 'Senior National Championship', year: 2026, gender: 'Men', ageGroup: 'Senior', weightCategory: '109 kg', rank: 1, athlete: 'Sanjay Kumar', state: 'Uttar Pradesh', bodyWeight: 107.8, snatch: 168, cleanJerk: 204, total: 372, medal: 'Gold', record: true },
]

export const rankings: RankingRow[] = [
  { rank: 1, athlete: 'Sanjay Kumar', state: 'Uttar Pradesh', gender: 'Men', weightCategory: '109 kg', points: 980, bestTotal: 372 },
  { rank: 2, athlete: 'Devinder Singh', state: 'Punjab', gender: 'Men', weightCategory: '96 kg', points: 945, bestTotal: 355 },
  { rank: 3, athlete: 'Arjun Rana', state: 'Haryana', gender: 'Men', weightCategory: '73 kg', points: 902, bestTotal: 322 },
  { rank: 4, athlete: 'Ananya Reddy', state: 'Telangana', gender: 'Women', weightCategory: '64 kg', points: 889, bestTotal: 221 },
  { rank: 5, athlete: 'Meera Devi', state: 'Manipur', gender: 'Women', weightCategory: '49 kg', points: 875, bestTotal: 205 },
  { rank: 6, athlete: 'Rohit Thapa', state: 'Uttarakhand', gender: 'Men', weightCategory: '81 kg', points: 848, bestTotal: 318 },
  { rank: 7, athlete: 'Kavya Nair', state: 'Kerala', gender: 'Women', weightCategory: '59 kg', points: 830, bestTotal: 198 },
]

export const officeBearers = [
  { name: 'Dr. A. Krishnan', role: 'President' },
  { name: 'Smt. R. Deshmukh', role: 'Secretary General' },
  { name: 'Shri M. Iqbal', role: 'Treasurer' },
  { name: 'Shri T. Rao', role: 'Vice President' },
  { name: 'Smt. N. Fernandes', role: 'Executive Member' },
  { name: 'Shri P. Chauhan', role: 'Executive Member' },
]

export const quickLinks = [
  { label: 'International Weightlifting Federation (IWF)', href: 'https://iwf.sport' },
  { label: 'Asian Weightlifting Federation', href: 'https://www.asianweightlifting.org' },
  { label: 'Sports Authority of India (SAI)', href: 'https://sportsauthorityofindia.nic.in' },
  { label: 'National Anti-Doping Agency (NADA)', href: 'https://www.nadaindia.org' },
  { label: 'Indian Olympic Association', href: 'https://olympic.ind.in' },
  { label: 'Ministry of Youth Affairs & Sports', href: 'https://yas.gov.in' },
]

export const galleryCategories = [
  'Senior Nationals',
  'Junior Nationals',
  'National Camps',
  'Award Ceremonies',
  'International Meets',
  'Training',
]
