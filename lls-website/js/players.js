// ── Player profiles ──
const PLAYERS = {
  mansterninja: {
    tag:'Mansterninja', real:'Måns Hedqvist', flag:'🇸🇪', nat:'Swedish', role:'Top Laner',
    bio:'Måns "Mansterninja" Hedqvist is a Swedish top laner active in the Nordic competitive scene. He came to LLS from LEO, a Swedish team, where he joined in January 2026 alongside coaches Path, BlueBerry and Rycer.',
    history:[
      {yr:'2026',team:'LEO (Swedish team) — January 2026'},
      {yr:'2026',team:'Lundqvist Lightside — NLC 2026 Spring'},
    ],
    trivia:[
      'Part of a predominantly Swedish starting roster, representing Sweden at NLC level.',
      'Previously listed as top laner for LEO in the Swedish national scene before joining LLS.',
      'Leaguepedia page: lol.fandom.com/wiki/Mansterninja',
    ]
  },
  spiderlair: {
    tag:'Spiderlair', real:'Ludvig Sällberg', flag:'🇸🇪', nat:'Swedish', role:'Jungler',
    bio:'Ludvig "Spiderlair" Sällberg is a Swedish jungler. He has a Master-tier SoloQ ranking on EUW (1599 LP) and brings strong mechanical fundamentals and jungle expertise to the Lundqvist Lightside NLC roster.',
    history:[
      {yr:'2025',team:'AaB Esport'},
      {yr:'2026',team:'Lundqvist Lightside — NLC 2026 Spring'},
    ],
    trivia:[
      'Ranked Master 1599 LP on EUW with a 51% win rate over 1200+ games.',
      'Known for Nidalee (57% WR) and Viego in SoloQ.',
      'Leaguepedia page: lol.fandom.com/wiki/Spiderlair',
    ]
  },
  unicow: {
    tag:'Unicow', real:'Simon Larsson', flag:'🇸🇪', nat:'Swedish', role:'Mid Laner',
    bio:'Simon "Unicow" Larsson is a Swedish mid laner who has competed across the Nordic and Swedish esports scenes. He has experience with both Lundqvist Darkside and Spartans EU, making him a familiar face within the Lightside organisation.',
    history:[
      {yr:'2024–25',team:'Spartans EU'},
      {yr:'2025',team:'Lundqvist Darkside — Rivals League'},
      {yr:'2026',team:'Lundqvist Lightside — NLC 2026 Spring'},
    ],
    trivia:[
      'One of few players to represent both Lundqvist Lightside and Lundqvist Darkside.',
      'Brings internal knowledge of the Lightside organisation from his time on the academy squad.',
      'Leaguepedia page: lol.fandom.com/wiki/Unicow',
    ]
  },
  bjoernen: {
    tag:'Bjoernen', real:'Mikkel Bjørn', flag:'🇩🇰', nat:'Danish', role:'Bot Laner (ADC)',
    bio:'Mikkel "Bjoernen" Bjørn is a Danish bot laner who joins Lundqvist Lightside for the NLC 2026 Spring Split. He previously competed with AaB Esport in the Danish scene.',
    history:[
      {yr:'2025',team:'AaB Esport'},
      {yr:'2026',team:'Lundqvist Lightside — NLC 2026 Spring'},
    ],
    trivia:[
      'One of two international players on the 2026 Spring roster alongside French support Lyrokun.',
      'Leaguepedia page: lol.fandom.com/wiki/Bjoernen',
    ]
  },
  lyrokun: {
    tag:'Lyrokun', real:'Emre Kadioglu', flag:'🇫🇷', nat:'French', role:'Support',
    bio:'Emre "Lyrokun" Kadioglu is a French support player with competitive experience across multiple European regional leagues including LPLOL, the Elite Series, and the French Nexus Tour.',
    history:[
      {yr:'2023',team:'LPLOL Summer — 14 games'},
      {yr:'2023',team:'Iberian Cup'},
      {yr:'2024',team:'LPLOL Promotion — 10 games'},
      {yr:'2024',team:'Hitpoint 2nd Division Challengers Spring — 8 games'},
      {yr:'2024',team:'Elite Series Summer — 14 games'},
      {yr:'2025',team:'Nexus Tour Etape 5 — 4 games'},
      {yr:'2025',team:'Once Upon A Team'},
      {yr:'2026',team:'Lundqvist Lightside — NLC 2026 Spring'},
    ],
    trivia:[
      'Brings the most cross-regional competitive experience on the 2026 Spring roster.',
      'Has played in the Portuguese, Czech/Slovak, Benelux and French circuits.',
      'Leaguepedia page: lol.fandom.com/wiki/Lyrokun',
    ]
  },
  ted_guru: {
    tag:'Ted Guru', real:'Andreas Rapp', flag:'🇸🇪', nat:'Swedish', role:'Head of LoL',
    bio:'Andreas "Ted Guru" Rapp is a Swedish esports personality serving as Head of LoL for Lundqvist Lightside. According to Leaguepedia he is currently listed as performance coach for LLS, reflecting his broader off-stage leadership role spanning coaching and organisational oversight.',
    history:[
      {yr:'2025',team:'Lundqvist Lightside — Head Coach, NLC 2025 Winter'},
      {yr:'2026',team:'Lundqvist Lightside — Head of LoL / Performance Coach, NLC 2026 Spring'},
    ],
    trivia:[
      'One of the longest-serving figures in the Lundqvist Lightside organisation.',
      'Has worked across both player-facing and management roles within LLS.',
      'Leaguepedia page: lol.fandom.com/wiki/Ted_Guru',
    ]
  },
  utama: {
    tag:'Utama', real:'Kristoffer Renè Odland', flag:'🇳🇴', nat:'Norwegian', role:'Head Coach',
    bio:'Kristoffer "Utama" Renè Odland is a Norwegian League of Legends coach with extensive international experience. He has coached at a high level across Europe, CIS, and South America, working with organisations including Natus Vincere CIS, mYinsanity (Prime League), Gamespace MCE, and ProGaming Esports in Brazil — making him one of the most seasoned coaches in LLS history.',
    history:[
      {yr:'2017',team:'Natus Vincere CIS — Head Coach'},
      {yr:'2018',team:'ProGaming Esports (Brazil) — Head Coach'},
      {yr:'2020',team:'mYinsanity — Head Coach (Prime League)'},
      {yr:'2020',team:'mYinsanity — Assistant Coach'},
      {yr:'2024–25',team:'Gamespace MCE — Head Coach'},
      {yr:'2026',team:'Lundqvist Lightside — Head Coach, NLC 2026 Spring'},
    ],
    trivia:[
      'One of few Nordic coaches to have coached professionally across Europe, CIS and South America.',
      'Started his career by qualifying for the GPL (Garena Pro League) when Taiwan lacked its own server.',
      'Was invited to coach a Greek team that featured FORG1VEN — one of the most iconic EU ADCs.',
      'Leaguepedia page: lol.fandom.com/wiki/Utama',
    ]
  },
  narco: {
    tag:'Narco', real:'—', flag:'', nat:'', role:'Assistant Coach',
    bio:'Narco is an assistant coach for Lundqvist Lightside\'s NLC 2026 Spring roster, supporting head coach Utama in strategic preparation.',
    history:[{yr:'2026',team:'Lundqvist Lightside — Assistant Coach, NLC 2026 Spring'}],
    trivia:['Part of a large multi-role coaching staff that LLS is known for running.']
  },
  amarillo: {
    tag:'Amarillo', real:'—', flag:'', nat:'', role:'Strategic Coach',
    bio:'Amarillo serves as Strategic Coach for Lundqvist Lightside\'s NLC roster, focusing on macro strategy and opponent preparation.',
    history:[{yr:'2026',team:'Lundqvist Lightside — Strategic Coach, NLC 2026 Spring'}],
    trivia:['Strategic coaches have become a key part of NLC-level teams, handling patch-by-patch adaptation.']
  },
  craith: {
    tag:'Craith', real:'—', flag:'', nat:'', role:'Data Analyst',
    bio:'Craith is the Data Analyst for Lundqvist Lightside\'s NLC roster, handling performance data, opponent scouting and draft analytics.',
    history:[{yr:'2026',team:'Lundqvist Lightside — Data Analyst, NLC 2026 Spring'}],
    trivia:['Works alongside analyst ThunderYordle to provide comprehensive data coverage.']
  },
  ayvar: {
    tag:'Ayvar', real:'—', flag:'', nat:'', role:'Manager',
    bio:'Ayvar is the Manager for Lundqvist Lightside, one of the organisation\'s continuity figures having also served in the 2026 Winter split. Handles logistics, scheduling and player welfare.',
    history:[
      {yr:'2026',team:'Lundqvist Lightside — Assistant Manager, NLC 2026 Winter'},
      {yr:'2026',team:'Lundqvist Lightside — Manager, NLC 2026 Spring'},
    ],
    trivia:['One of the few staff members to bridge both the 2026 Winter and Spring rosters.']
  },
  luwey: {
    tag:'Luwey', real:'—', flag:'', nat:'', role:'Assistant Manager',
    bio:'Luwey is the Assistant Manager for Lundqvist Lightside\'s 2026 Spring roster, supporting manager Ayvar with day-to-day operations.',
    history:[{yr:'2026',team:'Lundqvist Lightside — Assistant Manager, NLC 2026 Spring'}],
    trivia:['Team management is a critical behind-the-scenes function that keeps the organisation running.']
  },
  lyovik: {
    tag:'Lyovik', real:'—', flag:'', nat:'', role:'Coach',
    bio:'Lyovik is a coach for Lundqvist Lightside\'s NLC 2026 Spring roster, providing additional coaching support alongside the head and assistant coaches.',
    history:[{yr:'2026',team:'Lundqvist Lightside — Coach, NLC 2026 Spring'}],
    trivia:['Part of LLS\'s well-known large coaching staff setup.']
  },
  mysterias: {
    tag:'Mysterias', real:'—', flag:'🇳🇱', nat:'Dutch', role:'Coach / Sub',
    bio:'Mysterias is a Dutch coach and substitute player who has been part of the Lightside ecosystem across multiple seasons, serving as positional coach in 2025 and taking a coach/sub role for the 2026 Spring Split.',
    history:[
      {yr:'2025',team:'Lundqvist Lightside — Positional Coach, NLC 2025 Winter'},
      {yr:'2026',team:'Lundqvist Lightside — Coach / Sub, NLC 2026 Spring'},
    ],
    trivia:[
      'One of only a handful of coach/player hybrids operating in the NLC.',
      'His dual role gives LLS flexibility to field him as a substitute if needed.',
      'Leaguepedia page: lol.fandom.com/wiki/Mysterias (as @mysteriaslol)',
    ]
  },
  thunderyordle: {
    tag:'ThunderYordle', real:'—', flag:'', nat:'', role:'Analyst',
    bio:'ThunderYordle is an analyst for Lundqvist Lightside\'s NLC roster, a continuity figure who has worked with the organisation across both the 2026 Winter and Spring rosters.',
    history:[
      {yr:'2026',team:'Lundqvist Lightside — Data Analyst, NLC 2026 Winter'},
      {yr:'2026',team:'Lundqvist Lightside — Analyst, NLC 2026 Spring'},
    ],
    trivia:['One of the longest-serving current staff members within the 2026 cycle.']
  },
  kobbe: {
    tag:'Kobbe', real:'Kasper Kobberup', flag:'🇩🇰', nat:'Danish', role:'ADC (Stand-in / Alumni)',
    bio:'Kasper "Kobbe" Kobberup is one of the most decorated bot laners to have represented Lundqvist Lightside. A genuine LCS and LEC veteran, Kobbe stood in as substitute ADC for LLS during NLC 2026 Winter Week 4.',
    history:[
      {yr:'2015–2018',team:'Splyce (LCS/EU LCS)'},
      {yr:'2018–2020',team:'Schalke 04 (LEC)'},
      {yr:'2020–2021',team:'Misfits Gaming (LEC)'},
      {yr:'2026',team:'Stand-in for LLS — NLC 2026 Winter Week 4'},
    ],
    trivia:[
      'One of the longest-serving Danish LoL professionals — active since the early days of EU eSports.',
      'His stand-in appearance for LLS in 2026 gave the team a significant experience boost.',
      'Known for his mechanics on Ezreal and other marksmen.',
    ]
  },
};