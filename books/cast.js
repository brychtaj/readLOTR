// The saga cast — shared across all volumes and injected into every build.
// One entry per character, in a fixed saga order (Fellowship, then Two Towers newcomers, then Return of the King).
// intro = first appearance {vol, gi}; arc.beats are tagged with the book (vol) they belong to, so a
// character's "story so far" grows across the whole saga.
var CAST = [
 {
  "id": "bilbo",
  "intro": {
   "vol": 1,
   "gi": 1
  },
  "name": {
   "en": "Bilbo Baggins",
   "cs": "Bilbo Pytlík"
  },
  "en": "Bilbo Baggins",
  "race": "hobit",
  "rlab": {
   "en": "Hobbit",
   "cs": "Hobit"
  },
  "ic": "hobit",
  "say": {
   "cs": "BIL-bo"
  },
  "portrait": "__IMG_bilbo__",
  "short": {
   "en": "Bilbo",
   "cs": "Bilbo"
  },
  "kid": {
   "en": "An old adventurer and Frodo’s uncle. He once found the magic Ring. He loves stories, poems and a quiet life.",
   "cs": "Starý dobrodruh a Frodův strýček. Kdysi ten kouzelný prsten našel. Miluje příběhy, básničky a klid."
  },
  "dad": {
   "en": "The Ring’s original finder, and Frodo’s relative. After the party he leaves for Rivendell.",
   "cs": "Původní nálezce Prstenu, Frodův příbuzný. Po oslavě odchází do Roklinky."
  },
  "arc": {
   "ahead": {
    "en": "Why is it sometimes so hard to give up something we love?",
    "cs": "Proč je někdy tak těžké vzdát se něčeho, co máme rádi?"
   },
   "beats": [
    {
     "vol": 1,
     "gi": 1,
     "text": {
      "en": "Celebrates his 111th birthday and vanishes using the Ring.",
      "cs": "Oslaví 111. narozeniny a pomocí prstenu zmizí."
     }
    },
    {
     "vol": 1,
     "gi": 2,
     "text": {
      "en": "It comes up that he was the one who found the Ring long ago.",
      "cs": "Připomene se, že prsten kdysi našel právě on."
     }
    },
    {
     "vol": 1,
     "gi": 13,
     "text": {
      "en": "Happily meets Frodo again in Rivendell.",
      "cs": "Znovu se šťastně setká s Frodem v Roklince."
     }
    },
    {
     "vol": 1,
     "gi": 14,
     "text": {
      "en": "Offers to carry the Ring — but he’s grown too old.",
      "cs": "Nabídne se, že prsten odnese — ale je už moc starý."
     }
    },
    {
     "vol": 3,
     "gi": 19,
     "text": {
      "en": "Very old and sleepy now, he sails West from the Grey Havens with Frodo.",
      "cs": "Teď už velmi starý a ospalý odpluje s Frodem na západ ze Šedých přístavů."
     }
    }
   ]
  }
 },
 {
  "id": "frodo",
  "intro": {
   "vol": 1,
   "gi": 1
  },
  "name": {
   "en": "Frodo Baggins",
   "cs": "Frodo Pytlík"
  },
  "en": "Frodo Baggins",
  "race": "hobit",
  "rlab": {
   "en": "Hobbit",
   "cs": "Hobit"
  },
  "ic": "hobit",
  "say": {
   "cs": "FRO-do"
  },
  "portrait": "__IMG_frodo__",
  "short": {
   "en": "Frodo",
   "cs": "Frodo"
  },
  "kid": {
   "en": "The hero. A young hobbit who agrees to carry the dangerous Ring. Small, but brave and kind.",
   "cs": "Hlavní hrdina. Mladý hobit, který se uvolí odnést nebezpečný prsten. Malý, ale statečný a hodný."
  },
  "dad": {
   "en": "The Ring-bearer.",
   "cs": "Nositel Prstenu."
  },
  "arc": {
   "ahead": {
    "en": "Can such a small hobbit walk that huge road all the way to the end?",
    "cs": "Dokáže tak malý hobit tu obrovskou cestu ujít až do konce?"
   },
   "beats": [
    {
     "vol": 1,
     "gi": 1,
     "text": {
      "en": "At the party, Bilbo gives him the magic Ring and the house at Bag End.",
      "cs": "Na oslavě dostane od Bilba kouzelný prsten a domek Dno pytle."
     }
    },
    {
     "vol": 1,
     "gi": 2,
     "text": {
      "en": "Gandalf tells him how dangerous the Ring is — he must leave the Shire.",
      "cs": "Od Gandalfa se dozví, jak nebezpečný prsten je — musí odejít z Kraje."
     }
    },
    {
     "vol": 1,
     "gi": 3,
     "text": {
      "en": "He sets out; for the first time a Black Rider appears before him.",
      "cs": "Vyráží na cestu; poprvé se před ním objeví Černý jezdec."
     }
    },
    {
     "vol": 1,
     "gi": 4,
     "text": {
      "en": "He hurries across the fields and mushrooms down to the river.",
      "cs": "Utíká přes pole a houby až k řece."
     }
    },
    {
     "vol": 1,
     "gi": 5,
     "text": {
      "en": "He finds out his friends know everything and will go with him.",
      "cs": "Zjistí, že kamarádi o všem vědí a půjdou s ním."
     }
    },
    {
     "vol": 1,
     "gi": 6,
     "text": {
      "en": "In the Old Forest he tries to free his friends from Old Man Willow.",
      "cs": "Ve Starém hvozdu se snaží vysvobodit kamarády ze Staré vrby."
     }
    },
    {
     "vol": 1,
     "gi": 7,
     "text": {
      "en": "He rests at Tom Bombadil’s; his Ring has no power over Tom.",
      "cs": "Odpočine si u Toma Bombadila; jeho prsten na Toma nefunguje."
     }
    },
    {
     "vol": 1,
     "gi": 8,
     "text": {
      "en": "In the barrow a wight nearly gets him — bravely he calls for Tom.",
      "cs": "V mohyle ho málem dostane duch — statečně přivolá Toma."
     }
    },
    {
     "vol": 1,
     "gi": 9,
     "text": {
      "en": "In the inn the Ring slips onto his finger by accident and he vanishes.",
      "cs": "V hospodě mu omylem sklouzne prsten na prst a zmizí."
     }
    },
    {
     "vol": 1,
     "gi": 10,
     "text": {
      "en": "He decides to trust the mysterious Strider.",
      "cs": "Rozhodne se věřit tajemnému Chodci."
     }
    },
    {
     "vol": 1,
     "gi": 11,
     "text": {
      "en": "On Weathertop a Black Rider stabs him with a cursed knife.",
      "cs": "Na Větrově ho Černý jezdec bodne prokletým nožem."
     }
    },
    {
     "vol": 1,
     "gi": 12,
     "text": {
      "en": "Wounded, he escapes on an elven horse to the Ford.",
      "cs": "Zraněný unikne na elfském koni k Brodu."
     }
    },
    {
     "vol": 1,
     "gi": 13,
     "text": {
      "en": "He wakes up healed in Rivendell, among friends.",
      "cs": "Probudí se uzdravený v Roklince mezi přáteli."
     }
    },
    {
     "vol": 1,
     "gi": 14,
     "text": {
      "en": "He offers, himself, to carry the Ring to Mordor.",
      "cs": "Sám se nabídne, že odnese prsten do Mordoru."
     }
    },
    {
     "vol": 1,
     "gi": 15,
     "text": {
      "en": "He sets out south with the Nine companions.",
      "cs": "Vyráží s Devíti společníky na jih."
     }
    },
    {
     "vol": 1,
     "gi": 16,
     "text": {
      "en": "At Moria’s gate a tentacle grabs him — he only just escapes.",
      "cs": "U brány Morie ho chytí chapadlo — jen tak tak unikne."
     }
    },
    {
     "vol": 1,
     "gi": 17,
     "text": {
      "en": "In Moria he loses Gandalf.",
      "cs": "V Morii přijde o Gandalfa."
     }
    },
    {
     "vol": 1,
     "gi": 18,
     "text": {
      "en": "He finds comfort in the magic wood of Lórien.",
      "cs": "Najde útěchu v kouzelném lese Lórien."
     }
    },
    {
     "vol": 1,
     "gi": 19,
     "text": {
      "en": "He offers the Ring to Galadriel; she resists.",
      "cs": "Nabídne prsten Galadriel; ta odolá."
     }
    },
    {
     "vol": 1,
     "gi": 20,
     "text": {
      "en": "He is given a phial of light and sails off down the river.",
      "cs": "Dostane lahvičku se světlem a vyplouvá po řece."
     }
    },
    {
     "vol": 1,
     "gi": 21,
     "text": {
      "en": "He sails the Great River and feels someone is watching.",
      "cs": "Pluje po Velké řece a cítí, že je někdo sleduje."
     }
    },
    {
     "vol": 1,
     "gi": 22,
     "text": {
      "en": "He decides to go on alone — so as not to endanger his friends.",
      "cs": "Rozhodne se jít dál sám — aby neohrozil přátele."
     }
    },
    {
     "vol": 2,
     "gi": 12,
     "text": {
      "en": "Catches Gollum in Emyn Muil and, out of pity, spares him and takes him as a guide.",
      "cs": "V Emyn Muil chytí Gluma a ze soucitu ho ušetří a vezme jako průvodce."
     }
    },
    {
     "vol": 2,
     "gi": 14,
     "text": {
      "en": "Finds the Black Gate shut, and dares to trust Gollum’s secret way south.",
      "cs": "Najde Černou bránu zavřenou a odváží se svěřit Glumově tajné cestě na jih."
     }
    },
    {
     "vol": 2,
     "gi": 16,
     "text": {
      "en": "Meets Faramir and passes the great test — the Ring goes on, untaken.",
      "cs": "Potká Faramira a projde velkou zkouškou — Prsten jde dál, nevzat."
     }
    },
    {
     "vol": 2,
     "gi": 20,
     "text": {
      "en": "Is stung by Shelob in the dark and falls as if dead.",
      "cs": "Ve tmě ho bodne Odula a padne jako mrtvý."
     }
    },
    {
     "vol": 3,
     "gi": 11,
     "text": {
      "en": "Rescued from the orc-tower by Sam, he takes up the Ring for the last, hardest stretch.",
      "cs": "Sam ho zachrání z věže skřetů; on vezme Prsten na poslední, nejtěžší úsek."
     }
    },
    {
     "vol": 3,
     "gi": 13,
     "text": {
      "en": "At the fire he cannot let the Ring go — yet it is destroyed all the same, and he is freed of it.",
      "cs": "U ohně nedokáže Prsten pustit — a přesto je zničen, a on je ho zbaven."
     }
    },
    {
     "vol": 3,
     "gi": 14,
     "text": {
      "en": "Wakes safe at Cormallen, honoured before all as the hero who bore the Ring.",
      "cs": "Probudí se v bezpečí na Cormallenu, ctěn přede všemi jako hrdina, který nesl Prsten."
     }
    },
    {
     "vol": 3,
     "gi": 19,
     "text": {
      "en": "Wounded deep within, he sails from the Grey Havens into the West to find peace.",
      "cs": "Zraněn hluboko uvnitř odpluje ze Šedých přístavů do Zámoří, aby našel klid."
     }
    }
   ]
  }
 },
 {
  "id": "gandalf",
  "intro": {
   "vol": 1,
   "gi": 1
  },
  "name": {
   "en": "Gandalf",
   "cs": "Gandalf"
  },
  "en": "Gandalf",
  "race": "carodej",
  "rlab": {
   "en": "Wizard",
   "cs": "Čaroděj"
  },
  "ic": "carodej",
  "say": {
   "cs": "GEN-dalf"
  },
  "portrait": "__IMG_gandalf__",
  "short": {
   "en": "Gandalf",
   "cs": "Gandalf"
  },
  "kid": {
   "en": "A wise wizard with a long beard, a hat and a staff. He can do fireworks and mighty magic. A friend to hobbits.",
   "cs": "Moudrý čaroděj s dlouhým vousem, kloboukem a holí. Umí ohňostroje i mocná kouzla. Přítel hobitů."
  },
  "dad": {
   "en": "The Grey wizard, guide and protector. In Moria he falls with the Balrog into the deep.",
   "cs": "Šedý čaroděj, průvodce a ochránce. V Morii padá s Balrogem do hlubiny."
  },
  "arc": {
   "ahead": {
    "en": "What would you do if someone so wise suddenly vanished?",
    "cs": "Co byste dělali, kdyby vám najednou zmizel někdo tak moudrý?"
   },
   "beats": [
    {
     "vol": 1,
     "gi": 1,
     "text": {
      "en": "Brings the fireworks and helps Bilbo slip away.",
      "cs": "Přiveze ohňostroj a pomůže Bilbovi odejít."
     }
    },
    {
     "vol": 1,
     "gi": 2,
     "text": {
      "en": "Reveals that Frodo’s ring is the One.",
      "cs": "Odhalí, že Frodův prsten je ten Jeden."
     }
    },
    {
     "vol": 1,
     "gi": 13,
     "text": {
      "en": "Meets Frodo again in Rivendell.",
      "cs": "Znovu se sejde s Frodem v Roklince."
     }
    },
    {
     "vol": 1,
     "gi": 14,
     "text": {
      "en": "At the Council he helps decide the Ring’s fate.",
      "cs": "Na Radě pomáhá rozhodnout o osudu prstenu."
     }
    },
    {
     "vol": 1,
     "gi": 15,
     "text": {
      "en": "Leads the Nine companions south.",
      "cs": "Vede Devět společníků na jih."
     }
    },
    {
     "vol": 1,
     "gi": 16,
     "text": {
      "en": "Leads them into Moria when the mountain won’t let them pass.",
      "cs": "Zavede je do Morie, když je hora nepustí."
     }
    },
    {
     "vol": 1,
     "gi": 17,
     "text": {
      "en": "On the bridge he faces the Balrog and falls with it into the deep.",
      "cs": "Na mostě se postaví Balrogovi a padne s ním do hlubiny."
     }
    },
    {
     "vol": 2,
     "gi": 5,
     "text": {
      "en": "Returns from death as Gandalf the White and reunites with the hunters.",
      "cs": "Vrátí se ze smrti jako Gandalf Bílý a znovu se setká s lovci."
     }
    },
    {
     "vol": 2,
     "gi": 6,
     "text": {
      "en": "Frees King Théoden from the shadow on his mind.",
      "cs": "Osvobodí krále Théodena od stínu na jeho mysli."
     }
    },
    {
     "vol": 2,
     "gi": 7,
     "text": {
      "en": "Rides off and returns at dawn with help to turn the battle.",
      "cs": "Odjede a za rozbřesku se vrátí s pomocí, která zvrátí bitvu."
     }
    },
    {
     "vol": 2,
     "gi": 11,
     "text": {
      "en": "Sees the danger of the seeing-stone and races to Gondor with Pippin.",
      "cs": "Prohlédne nebezpečí vidoucího kamene a tryskem míří do Gondoru s Pipinem."
     }
    },
    {
     "vol": 3,
     "gi": 1,
     "text": {
      "en": "Brings Pippin to Gondor and rouses the city to prepare for war.",
      "cs": "Přiveze Pipina do Gondoru a vyburcuje město k přípravě na válku."
     }
    },
    {
     "vol": 3,
     "gi": 4,
     "text": {
      "en": "Stands alone in the broken gate to face the Witch-king himself.",
      "cs": "Postaví se sám do prolomené brány, aby čelil samotnému králi-čaroději."
     }
    },
    {
     "vol": 3,
     "gi": 9,
     "text": {
      "en": "Counsels the last, desperate march to the Black Gate.",
      "cs": "Doporučí poslední, zoufalý pochod k Černé bráně."
     }
    },
    {
     "vol": 3,
     "gi": 14,
     "text": {
      "en": "The eagles come; his long, patient labour is crowned at last with victory.",
      "cs": "Přiletí orli; jeho dlouhá, trpělivá práce je konečně korunována vítězstvím."
     }
    },
    {
     "vol": 3,
     "gi": 19,
     "text": {
      "en": "His task in Middle-earth done, he sails over Sea from the Grey Havens.",
      "cs": "Když je jeho úkol ve Středozemi splněn, odpluje přes Moře ze Šedých přístavů."
     }
    }
   ]
  }
 },
 {
  "id": "sam",
  "intro": {
   "vol": 1,
   "gi": 2
  },
  "name": {
   "en": "Samwise Gamgee",
   "cs": "Samvěd „Sam\" Křepelka"
  },
  "en": "Samwise Gamgee",
  "race": "hobit",
  "rlab": {
   "en": "Hobbit",
   "cs": "Hobit"
  },
  "ic": "hobit",
  "say": {
   "cs": "SAM-věd"
  },
  "portrait": "__IMG_sam__",
  "short": {
   "en": "Sam",
   "cs": "Sam"
  },
  "kid": {
   "en": "Frodo’s gardener and truest friend. A brave heart who never leaves Frodo’s side.",
   "cs": "Frodův zahradník a nejvěrnější kamarád. Statečné srdce, které Froda nikdy neopustí."
  },
  "dad": {
   "en": "Frodo’s loyal companion; his gardener. A key character in the whole story.",
   "cs": "Frodův věrný společník; zahradník. Klíčová postava celého příběhu."
  },
  "arc": {
   "ahead": {
    "en": "Could you be as good a friend as Sam?",
    "cs": "Dokázali byste být takový kamarád jako Sam?"
   },
   "beats": [
    {
     "vol": 1,
     "gi": 2,
     "text": {
      "en": "Caught under the window — and at once becomes Frodo’s companion.",
      "cs": "Přistižen pod oknem — a hned se stane Frodovým společníkem."
     }
    },
    {
     "vol": 1,
     "gi": 3,
     "text": {
      "en": "Sets out on the road with Frodo.",
      "cs": "Vyráží s Frodem na cestu."
     }
    },
    {
     "vol": 1,
     "gi": 6,
     "text": {
      "en": "Comes through the dangerous Old Forest with the others.",
      "cs": "S ostatními projde nebezpečným Starým hvozdem."
     }
    },
    {
     "vol": 1,
     "gi": 8,
     "text": {
      "en": "Survives the barrow thanks to Tom.",
      "cs": "Přežije mohylu díky Tomovi."
     }
    },
    {
     "vol": 1,
     "gi": 11,
     "text": {
      "en": "On Weathertop he helps fend off the Riders.",
      "cs": "Na Větrově pomáhá bránit se jezdcům."
     }
    },
    {
     "vol": 1,
     "gi": 13,
     "text": {
      "en": "In Rivendell he never takes his eyes off Frodo.",
      "cs": "V Roklince nespustí z Froda oči."
     }
    },
    {
     "vol": 1,
     "gi": 15,
     "text": {
      "en": "Joins the Fellowship.",
      "cs": "Přidá se ke Společenstvu."
     }
    },
    {
     "vol": 1,
     "gi": 17,
     "text": {
      "en": "Grieves for Gandalf with the others.",
      "cs": "Truchlí s ostatními pro Gandalfa."
     }
    },
    {
     "vol": 1,
     "gi": 19,
     "text": {
      "en": "In Galadriel’s mirror he glimpses home.",
      "cs": "V Galadrielině zrcadle zahlédne domov."
     }
    },
    {
     "vol": 1,
     "gi": 20,
     "text": {
      "en": "Galadriel gives him seeds and a rope.",
      "cs": "Dostane od Galadriel semínka a provaz."
     }
    },
    {
     "vol": 1,
     "gi": 22,
     "text": {
      "en": "Won’t let Frodo leave alone, and goes with him.",
      "cs": "Nenechá Froda odejít samotného a jde s ním."
     }
    },
    {
     "vol": 2,
     "gi": 12,
     "text": {
      "en": "Watches Gollum like a hawk — he does not trust him one bit.",
      "cs": "Hlídá Gluma jako ostříž — ani trochu mu nevěří."
     }
    },
    {
     "vol": 2,
     "gi": 20,
     "text": {
      "en": "Alone, takes up the light and sword and drives the giant spider off.",
      "cs": "Sám se chopí světla a meče a zažene obří pavučici."
     }
    },
    {
     "vol": 2,
     "gi": 21,
     "text": {
      "en": "Makes the hardest choice — and learns his master is alive after all.",
      "cs": "Učiní nejtěžší rozhodnutí — a zjistí, že jeho pán přece jen žije."
     }
    },
    {
     "vol": 3,
     "gi": 11,
     "text": {
      "en": "Alone, he saves Frodo from the tower — and gives the Ring straight back.",
      "cs": "Sám zachrání Froda z věže — a Prsten mu hned vrátí."
     }
    },
    {
     "vol": 3,
     "gi": 13,
     "text": {
      "en": "Carries Frodo up the last slope of Mount Doom: “I can’t carry it, but I can carry you.”",
      "cs": "Vynese Froda po posledním svahu Hory osudu: „Nést to za tebe nemůžu, ale tebe unesu.\""
     }
    },
    {
     "vol": 3,
     "gi": 18,
     "text": {
      "en": "Helps free the Shire from bullies, then plants it green and lovely again.",
      "cs": "Pomůže osvobodit Kraj od surovců a pak ho zas vysází zelený a krásný."
     }
    },
    {
     "vol": 3,
     "gi": 19,
     "text": {
      "en": "“Well, I’m back.” Home to Rosie and a family — the truest happy ending of all.",
      "cs": "„Tak jsem se vrátil.\" Domů k Růžence a rodině — nejopravdovější šťastný konec ze všech."
     }
    }
   ]
  }
 },
 {
  "id": "glum",
  "intro": {
   "vol": 1,
   "gi": 2
  },
  "name": {
   "en": "Gollum",
   "cs": "Glum"
  },
  "en": "Gollum",
  "race": "zlo",
  "rlab": {
   "en": "Creature",
   "cs": "Tvor"
  },
  "ic": "wraith",
  "say": {
   "cs": "GLUM"
  },
  "portrait": "__IMG_glum__",
  "short": {
   "en": "Gollum",
   "cs": "Glum"
  },
  "kid": {
   "en": "A scrawny little creature the Ring has completely taken over. He whispers “my precious” and longs to get it back.",
   "cs": "Vyzáblý tvoreček, kterého prsten úplně ovládl. Šeptá si „miláššku\" a touží prsten získat zpátky."
  },
  "dad": {
   "en": "Sméagol — a former bearer of the Ring. He shadows the company from afar.",
   "cs": "Sméagol — dřívější nositel Prstenu. Zpovzdálí sleduje výpravu."
  },
  "arc": {
   "ahead": {
    "en": "What does wanting something so badly do to a creature?",
    "cs": "Co s tvorem udělá, když po něčem strašně touží?"
   },
   "beats": [
    {
     "vol": 1,
     "gi": 2,
     "text": {
      "en": "The story goes that the Ring once completely took him over.",
      "cs": "Vypráví se, že ho prsten kdysi úplně ovládl."
     }
    },
    {
     "vol": 1,
     "gi": 21,
     "text": {
      "en": "He secretly swims after the boats down the Great River.",
      "cs": "Potají plave za loďmi po Velké řece."
     }
    },
    {
     "vol": 2,
     "gi": 12,
     "text": {
      "en": "Caught and tamed, he swears on the Ring to guide the hobbits.",
      "cs": "Chycen a zkrocen přísahá na Prsten, že hobity povede."
     }
    },
    {
     "vol": 2,
     "gi": 17,
     "text": {
      "en": "Feels betrayed when Frodo calls him from the forbidden pool.",
      "cs": "Cítí se zrazen, když ho Frodo zavolá ze zapovězené tůně."
     }
    },
    {
     "vol": 2,
     "gi": 19,
     "text": {
      "en": "His last flicker of goodness slips away on the stairs.",
      "cs": "Jeho poslední záblesk dobra se na schodech vytratí."
     }
    },
    {
     "vol": 3,
     "gi": 13,
     "text": {
      "en": "Seizes the Ring at the very last — and falls with it into the fire, destroying it by chance.",
      "cs": "V úplně poslední chvíli se Prstenu zmocní — a spadne s ním do ohně a nechtěně ho zničí."
     }
    }
   ]
  }
 },
 {
  "id": "sauron",
  "intro": {
   "vol": 1,
   "gi": 2
  },
  "name": {
   "en": "Sauron",
   "cs": "Sauron"
  },
  "en": "Sauron",
  "race": "zlo",
  "rlab": {
   "en": "Dark Lord",
   "cs": "Temný pán"
  },
  "ic": "eye",
  "say": {
   "cs": "SAU-ron"
  },
  "portrait": "__IMG_sauron__",
  "short": {
   "en": "Sauron",
   "cs": "Sauron"
  },
  "kid": {
   "en": "The evil dark lord who long ago made the One Ring. He hunts for it to rule the whole land. We see him as a great fiery eye.",
   "cs": "Zlý temný pán, který kdysi vyrobil Jeden prsten. Hledá ho, aby ovládl celou zem. Vídáme ho jako velké ohnivé oko."
  },
  "dad": {
   "en": "The Enemy, maker of the One Ring. He never appears in person, but his shadow lies over everything.",
   "cs": "Nepřítel, tvůrce Jednoho prstenu. Přímo se neobjeví, ale jeho stín leží nad vším."
  },
  "arc": {
   "ahead": {
    "en": "Why does evil grow stronger once we start to fear it?",
    "cs": "Proč bývá zlo silnější, když se ho začneme bát?"
   },
   "beats": [
    {
     "vol": 1,
     "gi": 2,
     "text": {
      "en": "It’s revealed that he is the one who made the Ring and now hunts for it.",
      "cs": "Odhalí se, že je to on, kdo prsten vyrobil a teď ho hledá."
     }
    }
   ]
  }
 },
 {
  "id": "pippin",
  "intro": {
   "vol": 1,
   "gi": 3
  },
  "name": {
   "en": "Pippin Took",
   "cs": "Peregrin „Pipin\" Bral"
  },
  "en": "Pippin Took",
  "race": "hobit",
  "rlab": {
   "en": "Hobbit",
   "cs": "Hobit"
  },
  "ic": "hobit",
  "say": {
   "cs": "PI-pin"
  },
  "portrait": "__IMG_pippin__",
  "short": {
   "en": "Pippin",
   "cs": "Pipin"
  },
  "kid": {
   "en": "The youngest and most curious of the hobbits. He loves to eat and gets up to the odd bit of mischief.",
   "cs": "Nejmladší a nejzvědavější z hobitů. Rád jí a občas provede nějakou lumpárnu."
  },
  "dad": {
   "en": "The youngest member of the company.",
   "cs": "Nejmladší člen výpravy."
  },
  "arc": {
   "ahead": {
    "en": "Can even the youngest and most curious one be a hero?",
    "cs": "Může i ten nejmladší a nejzvědavější být hrdina?"
   },
   "beats": [
    {
     "vol": 1,
     "gi": 3,
     "text": {
      "en": "Sets out on the road with Frodo and Sam.",
      "cs": "Vyráží na cestu s Frodem a Samem."
     }
    },
    {
     "vol": 1,
     "gi": 6,
     "text": {
      "en": "In the Old Forest, Old Man Willow swallows him.",
      "cs": "Ve Starém hvozdu ho spolkne Stará vrba."
     }
    },
    {
     "vol": 1,
     "gi": 8,
     "text": {
      "en": "Survives the barrow.",
      "cs": "Přežije mohylu."
     }
    },
    {
     "vol": 1,
     "gi": 13,
     "text": {
      "en": "Rests in Rivendell.",
      "cs": "Odpočívá v Roklince."
     }
    },
    {
     "vol": 1,
     "gi": 15,
     "text": {
      "en": "Joins the Fellowship.",
      "cs": "Přidá se ke Společenstvu."
     }
    },
    {
     "vol": 1,
     "gi": 16,
     "text": {
      "en": "Out of curiosity he drops a stone down a well in Moria.",
      "cs": "Ze zvědavosti hodí kámen do studny v Morii."
     }
    },
    {
     "vol": 1,
     "gi": 22,
     "text": {
      "en": "Stays with the group at the parting.",
      "cs": "Zůstává s partou při rozdělení."
     }
    },
    {
     "vol": 2,
     "gi": 3,
     "text": {
      "en": "Captured, he cleverly drops his brooch as a clue and later cuts free.",
      "cs": "V zajetí chytře upustí sponu jako stopu a později se osvobodí."
     }
    },
    {
     "vol": 2,
     "gi": 4,
     "text": {
      "en": "Meets Treebeard in Fangorn and is carried into the Ents’ world.",
      "cs": "Ve Fangornu potká Stromovouse a je vzat do světa Entů."
     }
    },
    {
     "vol": 2,
     "gi": 11,
     "text": {
      "en": "Cannot resist the dark seeing-stone — and looks into the Eye of the Enemy.",
      "cs": "Neodolá temnému vidoucímu kameni — a nakoukne do Oka Nepřítele."
     }
    },
    {
     "vol": 3,
     "gi": 1,
     "text": {
      "en": "Rides to Minas Tirith and swears to serve Denethor, Steward of Gondor.",
      "cs": "Přijede do Minas Tirith a přísahá, že bude sloužit Denethorovi, Správci Gondoru."
     }
    },
    {
     "vol": 3,
     "gi": 7,
     "text": {
      "en": "Runs to fetch Gandalf and saves Faramir from his father’s pyre.",
      "cs": "Běží pro Gandalfa a zachrání Faramira z otcovy hranice."
     }
    },
    {
     "vol": 3,
     "gi": 10,
     "text": {
      "en": "Marches with the tiny host to the Black Gate, brave to the end.",
      "cs": "Táhne s nepatrným vojskem k Černé bráně, statečný až do konce."
     }
    },
    {
     "vol": 3,
     "gi": 18,
     "text": {
      "en": "Now a knight of Gondor, he fights bravely to set the Shire free.",
      "cs": "Teď rytíř Gondoru statečně bojuje za osvobození Kraje."
     }
    }
   ]
  }
 },
 {
  "id": "nazgul",
  "intro": {
   "vol": 1,
   "gi": 3
  },
  "name": {
   "en": "The Black Riders (Nazgûl)",
   "cs": "Černí jezdci (Nazgûl)"
  },
  "en": "Ringwraiths",
  "race": "zlo",
  "rlab": {
   "en": "Wraiths",
   "cs": "Přízraky"
  },
  "ic": "wraith",
  "say": {
   "cs": "NAZ-gúl"
  },
  "portrait": "__IMG_nazgul__",
  "short": {
   "en": "Nazgûl",
   "cs": "Nazgûl"
  },
  "kid": {
   "en": "Nine cloaked riders on black horses. They have no faces, they sniff out the Ring and spread terror.",
   "cs": "Devět zahalených jezdců na černých koních. Nemají tvář, čenichají prsten a nahánějí hrůzu."
  },
  "dad": {
   "en": "The Ringwraiths, Sauron’s servants. They hunt Frodo for the Ring.",
   "cs": "Prstenové přízraky, Sauronovi služebníci. Honí Froda za Prstenem."
  },
  "arc": {
   "ahead": {
    "en": "What makes the Black Riders so frightening?",
    "cs": "Co dělá Černé jezdce tak děsivé?"
   },
   "beats": [
    {
     "vol": 1,
     "gi": 3,
     "text": {
      "en": "The first of them sniffs after the hobbits on the road.",
      "cs": "První z nich čenichá po hobitech na cestě."
     }
    },
    {
     "vol": 1,
     "gi": 11,
     "text": {
      "en": "On Weathertop they wound Frodo with a cursed knife.",
      "cs": "Na Větrově zraní Froda prokletým nožem."
     }
    },
    {
     "vol": 1,
     "gi": 12,
     "text": {
      "en": "At the Ford a magic wave washes them away.",
      "cs": "V Brodu je odplaví kouzelná vlna."
     }
    }
   ]
  }
 },
 {
  "id": "merry",
  "intro": {
   "vol": 1,
   "gi": 5
  },
  "name": {
   "en": "Merry Brandybuck",
   "cs": "Smíšek Brandorád"
  },
  "en": "Merry Brandybuck",
  "race": "hobit",
  "rlab": {
   "en": "Hobbit",
   "cs": "Hobit"
  },
  "ic": "hobit",
  "say": {
   "cs": "SMÍ-šek"
  },
  "portrait": "__IMG_merry__",
  "short": {
   "en": "Merry",
   "cs": "Smíšek"
  },
  "kid": {
   "en": "A clever, reliable hobbit and Pippin’s best friend. He’s good at making plans.",
   "cs": "Chytrý a spolehlivý hobit, Pipinův nejlepší kamarád. Umí dobře plánovat."
  },
  "dad": {
   "en": "Meriadoc Brandybuck; a member of the company.",
   "cs": "Meriadok Brandorád; člen výpravy."
  },
  "arc": {
   "ahead": {
    "en": "How handy is it to have a friend who’s good at making plans?",
    "cs": "K čemu je dobré mít kamaráda, co umí dobře plánovat?"
   },
   "beats": [
    {
     "vol": 1,
     "gi": 5,
     "text": {
      "en": "Reveals that the friends have known about the Ring all along.",
      "cs": "Odhalí, že s kamarády celou dobu vědí o prstenu."
     }
    },
    {
     "vol": 1,
     "gi": 6,
     "text": {
      "en": "In the Old Forest, Old Man Willow swallows him.",
      "cs": "Ve Starém hvozdu ho spolkne Stará vrba."
     }
    },
    {
     "vol": 1,
     "gi": 8,
     "text": {
      "en": "Survives the barrow.",
      "cs": "Přežije mohylu."
     }
    },
    {
     "vol": 1,
     "gi": 13,
     "text": {
      "en": "Meets Frodo again in Rivendell.",
      "cs": "Znovu se setká s Frodem v Roklince."
     }
    },
    {
     "vol": 1,
     "gi": 15,
     "text": {
      "en": "Joins the Fellowship.",
      "cs": "Přidá se ke Společenstvu."
     }
    },
    {
     "vol": 1,
     "gi": 22,
     "text": {
      "en": "Stays with the group when the paths divide.",
      "cs": "Zůstává s partou, když se cesty dělí."
     }
    },
    {
     "vol": 2,
     "gi": 3,
     "text": {
      "en": "Captured by the Uruk-hai, he keeps his head and escapes into Fangorn with Pippin.",
      "cs": "V zajetí skurutů neztratí hlavu a s Pipinem uteče do Fangornu."
     }
    },
    {
     "vol": 2,
     "gi": 4,
     "text": {
      "en": "Meets Treebeard and helps stir the Ents to act.",
      "cs": "Potká Stromovouse a pomůže pobídnout Enty k činu."
     }
    },
    {
     "vol": 2,
     "gi": 8,
     "text": {
      "en": "Waits cheerfully among Isengard’s ruins to greet his friends.",
      "cs": "Vesele čeká mezi troskami Železného pasu, aby přivítal přátele."
     }
    },
    {
     "vol": 3,
     "gi": 3,
     "text": {
      "en": "Refuses to be left behind; Dernhelm carries him secretly to war.",
      "cs": "Odmítne zůstat doma; Dernhelm ho tajně odveze do války."
     }
    },
    {
     "vol": 3,
     "gi": 6,
     "text": {
      "en": "Strikes the Witch-king from behind so Éowyn can bring him down.",
      "cs": "Zezadu bodne krále-čaroděje, aby ho Éowyn mohla skolit."
     }
    },
    {
     "vol": 3,
     "gi": 18,
     "text": {
      "en": "Home at last, he helps rouse the Shire-folk and lead the fight to free it.",
      "cs": "Konečně doma pomůže vyburcovat lid Kraje a vést boj za jeho osvobození."
     }
    }
   ]
  }
 },
 {
  "id": "bombadil",
  "intro": {
   "vol": 1,
   "gi": 6
  },
  "name": {
   "en": "Tom Bombadil",
   "cs": "Tom Bombadil"
  },
  "en": "Tom Bombadil",
  "race": "carodej",
  "rlab": {
   "en": "Enigma",
   "cs": "Záhada"
  },
  "ic": "star",
  "say": {
   "cs": "TOM"
  },
  "portrait": "__IMG_bombadil__",
  "short": {
   "en": "Tom Bombadil",
   "cs": "Tom Bombadil"
  },
  "kid": {
   "en": "A merry lord of the forest who is always singing. He is very old and powerful — and the Ring simply doesn’t work on him!",
   "cs": "Veselý pán lesa, co pořád zpívá. Je moc starý a mocný — a prsten na něj vůbec nefunguje!"
  },
  "dad": {
   "en": "The oldest and most mysterious of all. The Ring has no power over him. He saves the hobbits from Old Man Willow and from the barrow.",
   "cs": "Nejstarší a nejzáhadnější. Prsten nad ním nemá moc. Zachrání hobity od Staré vrby i z mohyly."
  },
  "arc": {
   "ahead": {
    "en": "Why do you think the Ring doesn’t work on Tom at all?",
    "cs": "Proč asi prsten na Toma vůbec nefunguje?"
   },
   "beats": [
    {
     "vol": 1,
     "gi": 6,
     "text": {
      "en": "Frees the hobbits from Old Man Willow and takes them home.",
      "cs": "Vysvobodí hobity ze Staré vrby a odvede je domů."
     }
    },
    {
     "vol": 1,
     "gi": 7,
     "text": {
      "en": "Feasts the hobbits; the Ring has no power over him.",
      "cs": "Pohostí hobity; prsten na něj nemá žádnou moc."
     }
    },
    {
     "vol": 1,
     "gi": 8,
     "text": {
      "en": "Rushes to the barrow, saves the hobbits and gives them daggers.",
      "cs": "Přispěchá do mohyly, zachrání hobity a dá jim dýky."
     }
    }
   ]
  }
 },
 {
  "id": "stara-vrba",
  "intro": {
   "vol": 1,
   "gi": 6
  },
  "name": {
   "en": "Old Man Willow",
   "cs": "Stará vrba"
  },
  "en": "Old Man Willow",
  "race": "zlo",
  "rlab": {
   "en": "Danger",
   "cs": "Nebezpečí"
  },
  "ic": "forest",
  "say": {
   "cs": "—"
  },
  "portrait": "__IMG_stara-vrba__",
  "short": {
   "en": "Old Man Willow",
   "cs": "Stará vrba"
  },
  "kid": {
   "en": "A wicked old willow in the Old Forest that lulls hobbits to sleep and swallows them into its trunk.",
   "cs": "Zlá stará vrba ve Starém hvozdu, co uspává a polyká hobity do svého kmene."
  },
  "dad": {
   "en": "The malevolent tree of the Old Forest.",
   "cs": "Zlovolný strom Starého hvozdu."
  },
  "arc": {
   "ahead": {
    "en": "Can even an ordinary tree be dangerous?",
    "cs": "Může být nebezpečný i obyčejný strom?"
   },
   "beats": [
    {
     "vol": 1,
     "gi": 6,
     "text": {
      "en": "Lulls the hobbits to sleep and traps two of them in its trunk.",
      "cs": "Uspí hobity a dva z nich polapí do svého kmene."
     }
    }
   ]
  }
 },
 {
  "id": "aragorn",
  "intro": {
   "vol": 1,
   "gi": 9
  },
  "name": {
   "en": "Aragorn, called Strider",
   "cs": "Aragorn zvaný Chodec"
  },
  "en": "Aragorn / Strider",
  "race": "clovek",
  "rlab": {
   "en": "Man",
   "cs": "Člověk"
  },
  "ic": "clovek",
  "say": {
   "cs": "A-ra-gorn"
  },
  "portrait": "__IMG_aragorn__",
  "short": {
   "en": "Aragorn",
   "cs": "Aragorn"
  },
  "kid": {
   "en": "A mysterious hooded traveller who is really a great hero and protector. He can both fight and heal.",
   "cs": "Tajemný pocestný v kápi, který je ve skutečnosti velký hrdina a ochránce. Umí bojovat i léčit."
  },
  "dad": {
   "en": "A Ranger, and the future king. He leads the hobbits to Rivendell, then joins the Fellowship.",
   "cs": "Hraničář, budoucí král. Vede hobity do Roklinky, pak je součástí Společenstva."
  },
  "arc": {
   "ahead": {
    "en": "Do you know a good person by their looks, or by their deeds?",
    "cs": "Pozná se dobrý člověk podle vzhledu, nebo podle činů?"
   },
   "beats": [
    {
     "vol": 1,
     "gi": 9,
     "text": {
      "en": "As the mysterious Strider he watches the hobbits in the inn.",
      "cs": "Jako tajemný Chodec pozoruje hobity v hospodě."
     }
    },
    {
     "vol": 1,
     "gi": 10,
     "text": {
      "en": "Reveals he is a friend of Gandalf and offers to guide them.",
      "cs": "Svěří se, že je přítel Gandalfa, a nabídne se je vést."
     }
    },
    {
     "vol": 1,
     "gi": 11,
     "text": {
      "en": "On Weathertop he drives the Riders off with fire.",
      "cs": "Na Větrově zažene jezdce ohněm."
     }
    },
    {
     "vol": 1,
     "gi": 12,
     "text": {
      "en": "Brings the wounded Frodo to the Ford.",
      "cs": "Dovede zraněného Froda k Brodu."
     }
    },
    {
     "vol": 1,
     "gi": 14,
     "text": {
      "en": "At the Council he joins the Fellowship.",
      "cs": "Na Radě se přidá ke Společenstvu."
     }
    },
    {
     "vol": 1,
     "gi": 15,
     "text": {
      "en": "Helps lead the company south.",
      "cs": "Pomáhá vést výpravu na jih."
     }
    },
    {
     "vol": 1,
     "gi": 17,
     "text": {
      "en": "After Gandalf’s fall he leads the company on.",
      "cs": "Po Gandalfově pádu vede společenstvo dál."
     }
    },
    {
     "vol": 1,
     "gi": 18,
     "text": {
      "en": "Leads the weary friends to Lórien.",
      "cs": "Zavede unavené druhy do Lórienu."
     }
    },
    {
     "vol": 1,
     "gi": 22,
     "text": {
      "en": "Tries to hold the breaking Fellowship together.",
      "cs": "Snaží se udržet rozpadající se společenstvo pohromadě."
     }
    },
    {
     "vol": 2,
     "gi": 1,
     "text": {
      "en": "He reaches the dying Boromir, then chooses to chase the orcs and save Merry and Pippin.",
      "cs": "Doběhne k umírajícímu Boromirovi a pak se rozhodne pronásledovat skřety a zachránit Smíška a Pipina."
     }
    },
    {
     "vol": 2,
     "gi": 2,
     "text": {
      "en": "Leads the great run across Rohan and wins the friendship of Éomer.",
      "cs": "Vede velký běh přes Rohan a získá přátelství Éomera."
     }
    },
    {
     "vol": 2,
     "gi": 5,
     "text": {
      "en": "Meets Gandalf the White in Fangorn and turns toward Edoras.",
      "cs": "Ve Fangornu potká Gandalfa Bílého a zamíří k Edorasu."
     }
    },
    {
     "vol": 2,
     "gi": 7,
     "text": {
      "en": "Fights through the night at Helm’s Deep, a leader men will follow.",
      "cs": "Probojuje se nocí u Helmova žlebu jako vůdce, za nímž lidé půjdou."
     }
    },
    {
     "vol": 2,
     "gi": 8,
     "text": {
      "en": "Rides to Isengard and is joyfully reunited with Merry and Pippin.",
      "cs": "Přijede k Železnému pasu a radostně se shledá se Smíškem a Pipinem."
     }
    },
    {
     "vol": 3,
     "gi": 2,
     "text": {
      "en": "Dares the Paths of the Dead and wins the ghost-army to his cause.",
      "cs": "Odváží se na Stezky mrtvých a získá přízračné vojsko pro svou věc."
     }
    },
    {
     "vol": 3,
     "gi": 6,
     "text": {
      "en": "Arrives in the black ships to turn the battle of the Pelennor.",
      "cs": "Připluje na černých lodích a zvrátí bitvu na Pelennoru."
     }
    },
    {
     "vol": 3,
     "gi": 8,
     "text": {
      "en": "Heals the dying with athelas — the sign of the returning king.",
      "cs": "Uzdraví umírající bylinou athelas — znamení navracejícího se krále."
     }
    },
    {
     "vol": 3,
     "gi": 15,
     "text": {
      "en": "Crowned King Elessar and weds Arwen — the king has returned at last.",
      "cs": "Korunován králem Elessarem a vezme si Arwen — král se konečně vrátil."
     }
    }
   ]
  }
 },
 {
  "id": "glorfindel",
  "intro": {
   "vol": 1,
   "gi": 12
  },
  "name": {
   "en": "Glorfindel",
   "cs": "Glorfindel"
  },
  "en": "Glorfindel",
  "race": "elf",
  "rlab": {
   "en": "Elf",
   "cs": "Elf"
  },
  "ic": "elf",
  "say": {
   "cs": "GLOR-fin-del"
  },
  "portrait": "__IMG_glorfindel__",
  "short": {
   "en": "Glorfindel",
   "cs": "Glorfindel"
  },
  "kid": {
   "en": "A shining elf-rider who races to Frodo’s aid and carries him to safety.",
   "cs": "Zářivý elfský jezdec, který přispěchá Frodovi na pomoc a doveze ho k bezpečí."
  },
  "dad": {
   "en": "A mighty elf of Rivendell; he helps during the flight to the Ford.",
   "cs": "Mocný elf z Roklinky; pomůže při útěku k Brodu."
  },
  "arc": {
   "ahead": {
    "en": "When is it good for help to arrive at the very last moment?",
    "cs": "Kdy se hodí, aby přišla pomoc na poslední chvíli?"
   },
   "beats": [
    {
     "vol": 1,
     "gi": 12,
     "text": {
      "en": "Finds the wounded Frodo and lends him his swift horse.",
      "cs": "Najde zraněného Froda a půjčí mu svého rychlého koně."
     }
    },
    {
     "vol": 1,
     "gi": 13,
     "text": {
      "en": "In Rivendell he is among Elrond’s people.",
      "cs": "V Roklince je mezi Elrondovým lidem."
     }
    }
   ]
  }
 },
 {
  "id": "elrond",
  "intro": {
   "vol": 1,
   "gi": 13
  },
  "name": {
   "en": "Elrond",
   "cs": "Elrond"
  },
  "en": "Elrond",
  "race": "elf",
  "rlab": {
   "en": "Elf",
   "cs": "Elf"
  },
  "ic": "star",
  "say": {
   "cs": "EL-rond"
  },
  "portrait": "__IMG_elrond__",
  "short": {
   "en": "Elrond",
   "cs": "Elrond"
  },
  "kid": {
   "en": "The wise and kind lord of the elves of Rivendell. He can heal, and he remembers ancient tales.",
   "cs": "Moudrý a laskavý pán elfů z Roklinky. Umí léčit a pamatuje si dávné příběhy."
  },
  "dad": {
   "en": "The lord of Rivendell. He heals Frodo and calls the Council.",
   "cs": "Pán Roklinky. Uzdraví Froda a svolá Radu."
  },
  "arc": {
   "ahead": {
    "en": "Why is it good to have someone wise to give advice?",
    "cs": "Proč je dobré mít někoho moudrého, kdo poradí?"
   },
   "beats": [
    {
     "vol": 1,
     "gi": 13,
     "text": {
      "en": "With his power he heals the wounded Frodo.",
      "cs": "Svou mocí uzdraví zraněného Froda."
     }
    },
    {
     "vol": 1,
     "gi": 14,
     "text": {
      "en": "He calls the great Council and helps decide about the Ring.",
      "cs": "Svolá velkou Radu a pomůže rozhodnout o prstenu."
     }
    },
    {
     "vol": 3,
     "gi": 19,
     "text": {
      "en": "He leads the last of the elves to the Havens and passes over Sea.",
      "cs": "Odvede poslední elfy k přístavům a odpluje přes Moře."
     }
    }
   ]
  }
 },
 {
  "id": "boromir",
  "intro": {
   "vol": 1,
   "gi": 14
  },
  "name": {
   "en": "Boromir",
   "cs": "Boromir"
  },
  "en": "Boromir",
  "race": "clovek",
  "rlab": {
   "en": "Man",
   "cs": "Člověk"
  },
  "ic": "clovek",
  "say": {
   "cs": "BO-ro-mir"
  },
  "portrait": "__IMG_boromir__",
  "short": {
   "en": "Boromir",
   "cs": "Boromir"
  },
  "kid": {
   "en": "A strong, brave warrior from the southern land of Gondor. He wants to protect his people — and the Ring tempts him.",
   "cs": "Silný a statečný válečník z jižní země Gondor. Chce chránit svůj lid — a prsten ho svádí."
  },
  "dad": {
   "en": "Son of the Steward of Gondor. He gives in to the Ring’s temptation at Amon Hen.",
   "cs": "Syn gondorského správce. Podlehne pokušení Prstenu u Amon Hen."
  },
  "arc": {
   "ahead": {
    "en": "Can even a brave hero make a mistake?",
    "cs": "Může i statečný hrdina udělat chybu?"
   },
   "beats": [
    {
     "vol": 1,
     "gi": 14,
     "text": {
      "en": "At the Council he joins the Fellowship to protect his people.",
      "cs": "Na Radě se přidá ke Společenstvu, aby chránil svůj lid."
     }
    },
    {
     "vol": 1,
     "gi": 15,
     "text": {
      "en": "Sets out south with the company.",
      "cs": "Vyráží s výpravou na jih."
     }
    },
    {
     "vol": 1,
     "gi": 16,
     "text": {
      "en": "In Moria he helps carry the younger hobbits.",
      "cs": "V Morii pomáhá nést mladší hobity."
     }
    },
    {
     "vol": 1,
     "gi": 17,
     "text": {
      "en": "After Gandalf’s fall he keeps the group together.",
      "cs": "Po Gandalfově pádu drží partu při sobě."
     }
    },
    {
     "vol": 1,
     "gi": 22,
     "text": {
      "en": "At the falls he gives in to his longing for the Ring.",
      "cs": "U vodopádů podlehne touze po prstenu."
     }
    },
    {
     "vol": 2,
     "gi": 1,
     "text": {
      "en": "He dies defending Merry and Pippin, sorry at the last for having wanted the Ring.",
      "cs": "Umírá, když brání Smíška a Pipina, a v poslední chvíli lituje, že po Prstenu zatoužil."
     }
    }
   ]
  }
 },
 {
  "id": "legolas",
  "intro": {
   "vol": 1,
   "gi": 14
  },
  "name": {
   "en": "Legolas",
   "cs": "Legolas"
  },
  "en": "Legolas",
  "race": "elf",
  "rlab": {
   "en": "Elf",
   "cs": "Elf"
  },
  "ic": "elf",
  "say": {
   "cs": "LE-go-las"
  },
  "portrait": "__IMG_legolas__",
  "short": {
   "en": "Legolas",
   "cs": "Legolas"
  },
  "kid": {
   "en": "An elf archer with keen eyes. He is nimble, quiet and a brilliant shot with a bow.",
   "cs": "Elfí lučištník s bystrým zrakem. Je hbitý, tichý a skvěle střílí z luku."
  },
  "dad": {
   "en": "An elf of Mirkwood; a member of the Fellowship.",
   "cs": "Elf z Temného hvozdu; člen Společenstva."
  },
  "arc": {
   "ahead": {
    "en": "How useful is it to have someone with such keen eyes in the group?",
    "cs": "Jak se hodí mít v partě někoho s tak bystrým zrakem?"
   },
   "beats": [
    {
     "vol": 1,
     "gi": 14,
     "text": {
      "en": "At the Council he joins the Fellowship as the elf archer.",
      "cs": "Na Radě se přidá ke Společenstvu jako elfí lučištník."
     }
    },
    {
     "vol": 1,
     "gi": 15,
     "text": {
      "en": "Sets out south with the company.",
      "cs": "Vyráží s výpravou na jih."
     }
    },
    {
     "vol": 1,
     "gi": 16,
     "text": {
      "en": "With his sharp eyes he watches the path in dark Moria.",
      "cs": "Svým zrakem hlídá cestu v temné Morii."
     }
    },
    {
     "vol": 1,
     "gi": 18,
     "text": {
      "en": "In Lórien he is among his own — the elves.",
      "cs": "V Lórienu je mezi svými — elfy."
     }
    },
    {
     "vol": 2,
     "gi": 2,
     "text": {
      "en": "On the plains he meets the Riders of Rohan and, with Aragorn, wins their trust.",
      "cs": "Na pláních potká Rohanské jezdce a s Aragornem si získá jejich důvěru."
     }
    },
    {
     "vol": 2,
     "gi": 5,
     "text": {
      "en": "In Fangorn he is the first to sense the White Rider — and rejoices to find it is Gandalf.",
      "cs": "Ve Fangornu jako první vytuší Bílého jezdce — a zaraduje se, že je to Gandalf."
     }
    },
    {
     "vol": 2,
     "gi": 7,
     "text": {
      "en": "At Helm’s Deep he keeps a friendly running count of foes with Gimli.",
      "cs": "U Helmova žlebu si s Gimlim přátelsky počítá přemožené nepřátele."
     }
    }
   ]
  }
 },
 {
  "id": "gimli",
  "intro": {
   "vol": 1,
   "gi": 14
  },
  "name": {
   "en": "Gimli",
   "cs": "Gimli"
  },
  "en": "Gimli",
  "race": "trpaslik",
  "rlab": {
   "en": "Dwarf",
   "cs": "Trpaslík"
  },
  "ic": "trpaslik",
  "say": {
   "cs": "GIM-li"
  },
  "portrait": "__IMG_gimli__",
  "short": {
   "en": "Gimli",
   "cs": "Gimli"
  },
  "kid": {
   "en": "A brave dwarf with an axe and a proper beard. Stout-hearted and loyal.",
   "cs": "Statečný trpaslík se sekerou a pořádným plnovousem. Srdnatý a věrný."
  },
  "dad": {
   "en": "A dwarf, son of Glóin; a member of the Fellowship.",
   "cs": "Trpaslík, syn Glóina; člen Společenstva."
  },
  "arc": {
   "ahead": {
    "en": "Can a dwarf and an elf end up as friends?",
    "cs": "Můžou být trpaslík a elf nakonec kamarádi?"
   },
   "beats": [
    {
     "vol": 1,
     "gi": 14,
     "text": {
      "en": "At the Council he joins the Fellowship with his axe.",
      "cs": "Na Radě se přidá ke Společenstvu se svou sekerou."
     }
    },
    {
     "vol": 1,
     "gi": 15,
     "text": {
      "en": "Sets out south with the company.",
      "cs": "Vyráží s výpravou na jih."
     }
    },
    {
     "vol": 1,
     "gi": 16,
     "text": {
      "en": "In Moria he grieves at the tomb of his kinsman Balin.",
      "cs": "V Morii truchlí nad hrobem svého příbuzného Balina."
     }
    },
    {
     "vol": 1,
     "gi": 18,
     "text": {
      "en": "In Lórien, Lady Galadriel enchants him.",
      "cs": "V Lórienu ho okouzlí paní Galadriel."
     }
    },
    {
     "vol": 2,
     "gi": 5,
     "text": {
      "en": "Wary of the old forest, he follows the hunters into Fangorn and meets Gandalf returned.",
      "cs": "Nedůvěřivý ke starému lesu jde s lovci do Fangornu a potká navráceného Gandalfa."
     }
    },
    {
     "vol": 2,
     "gi": 7,
     "text": {
      "en": "Fights valiantly at Helm’s Deep — and loses his heart to its glittering caves.",
      "cs": "Statečně bojuje u Helmova žlebu — a zamiluje si jeho třpytivé jeskyně."
     }
    }
   ]
  }
 },
 {
  "id": "balrog",
  "intro": {
   "vol": 1,
   "gi": 17
  },
  "name": {
   "en": "Balrog",
   "cs": "Balrog"
  },
  "en": "Balrog",
  "race": "zlo",
  "rlab": {
   "en": "Demon",
   "cs": "Démon"
  },
  "ic": "flame",
  "say": {
   "cs": "BAL-rog"
  },
  "portrait": "__IMG_balrog__",
  "short": {
   "en": "Balrog",
   "cs": "Balrog"
  },
  "kid": {
   "en": "A huge, ancient monster of fire and shadow that sleeps deep in Moria. Terribly powerful and fearsome.",
   "cs": "Obrovský dávný netvor z ohně a stínu, který spí hluboko v Morii. Strašně mocný a hrozivý."
  },
  "dad": {
   "en": "A demon of Moria. On the bridge it drags Gandalf into the deep.",
   "cs": "Démon z Morie. Na mostě strhne Gandalfa do hlubiny."
  },
  "arc": {
   "ahead": {
    "en": "Why was Gandalf willing to face such a monster alone?",
    "cs": "Proč byl Gandalf ochotný postavit se takové obludě sám?"
   },
   "beats": [
    {
     "vol": 1,
     "gi": 17,
     "text": {
      "en": "It wakes in the depths of Moria and clashes with Gandalf.",
      "cs": "Probudí se v hlubinách Morie a utká se s Gandalfem."
     }
    }
   ]
  }
 },
 {
  "id": "galadriel",
  "intro": {
   "vol": 1,
   "gi": 18
  },
  "name": {
   "en": "Galadriel",
   "cs": "Galadriel"
  },
  "en": "Galadriel",
  "race": "elf",
  "rlab": {
   "en": "Elf",
   "cs": "Elf"
  },
  "ic": "star",
  "say": {
   "cs": "Ga-LAD-ri-el"
  },
  "portrait": "__IMG_galadriel__",
  "short": {
   "en": "Galadriel",
   "cs": "Galadriel"
  },
  "kid": {
   "en": "A beautiful and powerful lady of the elves from the golden wood. She has a magic mirror and great wisdom.",
   "cs": "Krásná a mocná paní elfů ze zlatého lesa. Má kouzelné zrcadlo a velkou moudrost."
  },
  "dad": {
   "en": "The Lady of Lórien. She resists the Ring and gives the Fellowship gifts.",
   "cs": "Paní Lórienu. Odolá Prstenu a obdaruje Společenstvo."
  },
  "arc": {
   "ahead": {
    "en": "Can you resist when someone offers you great power?",
    "cs": "Dá se odolat, když nám někdo nabízí velkou moc?"
   },
   "beats": [
    {
     "vol": 1,
     "gi": 18,
     "text": {
      "en": "Welcomes the weary Fellowship into her golden wood.",
      "cs": "Přivítá unavené společenstvo ve svém zlatém lese."
     }
    },
    {
     "vol": 1,
     "gi": 19,
     "text": {
      "en": "Shows Frodo the magic mirror and resists the Ring.",
      "cs": "Ukáže Frodovi kouzelné zrcadlo a odolá prstenu."
     }
    },
    {
     "vol": 1,
     "gi": 20,
     "text": {
      "en": "Gives everyone a gift for the road and says farewell.",
      "cs": "Obdaruje každého na cestu a rozloučí se."
     }
    },
    {
     "vol": 3,
     "gi": 19,
     "text": {
      "en": "Her long work in Middle-earth done, she departs over the Sea.",
      "cs": "Když je její dlouhé dílo ve Středozemi u konce, odejde přes Moře."
     }
    }
   ]
  }
 },
 {
  "id": "eomer",
  "intro": {
   "vol": 2,
   "gi": 2
  },
  "name": {
   "en": "Éomer",
   "cs": "Éomer"
  },
  "en": "Éomer",
  "race": "clovek",
  "rlab": {
   "en": "Rider of Rohan",
   "cs": "Jezdec z Rohanu"
  },
  "ic": "clovek",
  "say": {
   "cs": "É-o-mer"
  },
  "portrait": "__IMG_eomer__",
  "short": {
   "en": "Éomer",
   "cs": "Éomer"
  },
  "kid": {
   "en": "A proud young captain of the horse-riders of Rohan. Bold and quick to help, once he trusts you.",
   "cs": "Hrdý mladý velitel jezdců z Rohanu. Smělý a ochotný pomoci, jakmile ti uvěří."
  },
  "dad": {
   "en": "Nephew of King Théoden. He lends the hunters horses and becomes their firm friend.",
   "cs": "Synovec krále Théodena. Půjčí lovcům koně a stane se jejich pevným přítelem."
  },
  "arc": {
   "ahead": {
    "en": "How do you decide whom to trust when you meet a stranger?",
    "cs": "Jak se rozhodneš, komu věřit, když potkáš cizince?"
   },
   "beats": [
    {
     "vol": 2,
     "gi": 2,
     "text": {
      "en": "Meets the hunters on the plains and, trusting them, lends them horses.",
      "cs": "Potká lovce na pláních a z důvěry jim půjčí koně."
     }
    },
    {
     "vol": 2,
     "gi": 7,
     "text": {
      "en": "Fights beside Aragorn at Helm’s Deep.",
      "cs": "Bojuje po boku Aragorna u Helmova žlebu."
     }
    }
   ]
  }
 },
 {
  "id": "uruk",
  "intro": {
   "vol": 2,
   "gi": 3
  },
  "name": {
   "en": "The Uruk-hai",
   "cs": "Skurut-hai"
  },
  "en": "Saruman’s orcs",
  "race": "zlo",
  "rlab": {
   "en": "Orcs",
   "cs": "Skřeti"
  },
  "ic": "orc",
  "say": {
   "cs": "SKU-rut"
  },
  "portrait": "__IMG_uruk__",
  "short": {
   "en": "Uruk-hai",
   "cs": "Skuruti"
  },
  "kid": {
   "en": "Big, strong orcs bred by Saruman that can march even in daylight. They carry the hobbits off.",
   "cs": "Velcí silní skřeti, které vypěstoval Saruman a kteří snesou i denní světlo. Ti unesou hobity."
  },
  "dad": {
   "en": "Saruman’s fighting-orcs. Their quarrel with Sauron’s orcs, and a night attack, give the hobbits their chance.",
   "cs": "Sarumanovi bojoví skřeti. Jejich hádka se Sauronovými skřety a noční přepad dají hobitům šanci."
  }
 },
 {
  "id": "stromovous",
  "intro": {
   "vol": 2,
   "gi": 4
  },
  "name": {
   "en": "Treebeard",
   "cs": "Stromovous"
  },
  "en": "Treebeard / Fangorn",
  "race": "carodej",
  "rlab": {
   "en": "Ent",
   "cs": "Ent"
  },
  "ic": "forest",
  "say": {
   "cs": "—"
  },
  "portrait": "__IMG_stromovous__",
  "short": {
   "en": "Treebeard",
   "cs": "Stromovous"
  },
  "kid": {
   "en": "The oldest Ent — a giant, gentle being like a walking tree, with slow deep speech and kind eyes.",
   "cs": "Nejstarší Ent — obří, laskavý tvor jako chodící strom, s pomalou hlubokou řečí a hodnýma očima."
  },
  "dad": {
   "en": "Shepherd of the trees of Fangorn. Roused by Saruman’s wanton felling, he leads the Ents to war.",
   "cs": "Pastýř stromů Fangornu. Rozhněván Sarumanovým bezohledným kácením vede Enty do války."
  },
  "arc": {
   "ahead": {
    "en": "When is it right for the patient and peaceful to finally stand up?",
    "cs": "Kdy je správné, aby se trpěliví a mírní konečně postavili na odpor?"
   },
   "beats": [
    {
     "vol": 2,
     "gi": 4,
     "text": {
      "en": "Takes in Merry and Pippin and calls the Ents to council.",
      "cs": "Ujme se Smíška a Pipina a svolá Enty na poradu."
     }
    },
    {
     "vol": 2,
     "gi": 7,
     "text": {
      "en": "Leads the Ents to tear down Isengard while the battle rages.",
      "cs": "Vede Enty, aby rozervali Železný pas, zatímco zuří bitva."
     }
    }
   ]
  }
 },
 {
  "id": "theoden",
  "intro": {
   "vol": 2,
   "gi": 6
  },
  "name": {
   "en": "Théoden",
   "cs": "Théoden"
  },
  "en": "Théoden, King of Rohan",
  "race": "clovek",
  "rlab": {
   "en": "King of Rohan",
   "cs": "Král Rohanu"
  },
  "ic": "clovek",
  "say": {
   "cs": "THÉ-o-den"
  },
  "portrait": "__IMG_theoden__",
  "short": {
   "en": "Théoden",
   "cs": "Théoden"
  },
  "kid": {
   "en": "The old king of Rohan. He seems weak and grey at first — until Gandalf helps him find his courage again.",
   "cs": "Starý král Rohanu. Zprvu se zdá slabý a šedý — dokud mu Gandalf nepomůže znovu najít odvahu."
  },
  "dad": {
   "en": "A king freed from despair. He rides out to Helm’s Deep and stands tall among his people once more.",
   "cs": "Král vysvobozený ze zoufalství. Vyjede k Helmovu žlebu a znovu se hrdě postaví po bok svého lidu."
  },
  "arc": {
   "ahead": {
    "en": "What helps a person find their courage again after they’ve lost it?",
    "cs": "Co člověku pomůže znovu najít odvahu, když ji ztratil?"
   },
   "beats": [
    {
     "vol": 2,
     "gi": 6,
     "text": {
      "en": "Freed by Gandalf from Gríma’s spell, the old king rises and takes up his sword.",
      "cs": "Gandalf ho zbaví Grímova kouzla; starý král povstane a chopí se meče."
     }
    },
    {
     "vol": 2,
     "gi": 7,
     "text": {
      "en": "Rides to Helm’s Deep and stands with his people in the great battle.",
      "cs": "Vyjede k Helmovu žlebu a stojí se svým lidem ve velké bitvě."
     }
    },
    {
     "vol": 3,
     "gi": 3,
     "text": {
      "en": "Gathers all the Riders of Rohan at Dunharrow and rides to Gondor’s aid.",
      "cs": "Shromáždí v Dunharrow všechny Rohanské jezdce a jede Gondoru na pomoc."
     }
    },
    {
     "vol": 3,
     "gi": 5,
     "text": {
      "en": "Leads the dawn charge that breaks the siege of Minas Tirith.",
      "cs": "Vede útok za rozbřesku, který prolomí obležení Minas Tirith."
     }
    },
    {
     "vol": 3,
     "gi": 6,
     "text": {
      "en": "Falls gloriously on the Pelennor, a king to the very last.",
      "cs": "Slavně padne na Pelennoru jako král až do úplného konce."
     }
    }
   ]
  }
 },
 {
  "id": "grima",
  "intro": {
   "vol": 2,
   "gi": 6
  },
  "name": {
   "en": "Gríma Wormtongue",
   "cs": "Gríma Červivec"
  },
  "en": "Gríma Wormtongue",
  "race": "clovek",
  "rlab": {
   "en": "Traitor",
   "cs": "Zrádce"
  },
  "ic": "wraith",
  "say": {
   "cs": "GRÍ-ma"
  },
  "portrait": "__IMG_grima__",
  "short": {
   "en": "Gríma",
   "cs": "Gríma"
  },
  "kid": {
   "en": "The king’s sly advisor, who whispers gloomy words to keep Théoden weak. He secretly serves Saruman.",
   "cs": "Králův úlisný rádce, který mu šeptá chmurná slova, aby zůstal slabý. Tajně slouží Sarumanovi."
  },
  "dad": {
   "en": "Saruman’s spy in Edoras. Cast out when the king wakes, he skulks back to his master.",
   "cs": "Sarumanův špeh v Edorasu. Vyhnán, když se král probudí, odplíží se zpět ke svému pánovi."
  },
  "arc": {
   "ahead": {
    "en": "Why is it easy to believe someone who only tells you gloomy things?",
    "cs": "Proč se snadno věří někomu, kdo říká jen chmurné věci?"
   },
   "beats": [
    {
     "vol": 2,
     "gi": 6,
     "text": {
      "en": "Exposed as Saruman’s spy and cast out of Edoras.",
      "cs": "Odhalen jako Sarumanův špeh a vyhnán z Edorasu."
     }
    },
    {
     "vol": 2,
     "gi": 11,
     "text": {
      "en": "Throws down the seeing-stone from the tower — a mistake for his master.",
      "cs": "Shodí z věže vidoucí kámen — chyba, která uškodí jeho pánovi."
     }
    },
    {
     "vol": 3,
     "gi": 18,
     "text": {
      "en": "At the bitter end he turns on Saruman, his cruel master.",
      "cs": "V trpkém závěru se obrátí proti Sarumanovi, svému krutému pánu."
     }
    }
   ]
  }
 },
 {
  "id": "eowyn",
  "intro": {
   "vol": 2,
   "gi": 6
  },
  "name": {
   "en": "Éowyn",
   "cs": "Éowyn"
  },
  "en": "Éowyn of Rohan",
  "race": "clovek",
  "rlab": {
   "en": "Lady of Rohan",
   "cs": "Paní z Rohanu"
  },
  "ic": "clovek",
  "say": {
   "cs": "É-o-vin"
  },
  "portrait": "__IMG_eowyn__",
  "short": {
   "en": "Éowyn",
   "cs": "Éowyn"
  },
  "kid": {
   "en": "The king’s brave niece, as bold as any warrior. She longs to fight for her people, not just wait at home.",
   "cs": "Králova statečná neteř, smělá jako každý bojovník. Touží bojovat za svůj lid, ne jen čekat doma."
  },
  "dad": {
   "en": "A shieldmaiden of Rohan, watchful and courageous. Her part in the tale grows greatly in the next book.",
   "cs": "Štítonoška z Rohanu, ostražitá a odvážná. Její role v příběhu velmi vyroste v příští knize."
  },
  "arc": {
   "ahead": {
    "en": "Is it fair that some are told to stay behind while others go to fight?",
    "cs": "Je spravedlivé, že někdo má zůstat doma, zatímco jiní jdou bojovat?"
   },
   "beats": [
    {
     "vol": 2,
     "gi": 6,
     "text": {
      "en": "Stands out in the hall of Edoras, brave and watchful as the king wakes.",
      "cs": "Vynikne v síni Edorasu, statečná a ostražitá, když se král probouzí."
     }
    },
    {
     "vol": 3,
     "gi": 3,
     "text": {
      "en": "Told to stay behind, she rides to war in secret as “Dernhelm”.",
      "cs": "Řeknou jí, ať zůstane, ale ona jede do války tajně jako „Dernhelm\"."
     }
    },
    {
     "vol": 3,
     "gi": 6,
     "text": {
      "en": "Stands over fallen Théoden and slays the Witch-king no man could kill.",
      "cs": "Postaví se nad padlého Théodena a skolí krále-čaroděje, kterého žádný muž zabít nemohl."
     }
    },
    {
     "vol": 3,
     "gi": 15,
     "text": {
      "en": "Healed of her sorrow, she turns from war toward love — and toward Faramir.",
      "cs": "Uzdravena ze svého žalu se odvrátí od války k lásce — a k Faramirovi."
     }
    }
   ]
  }
 },
 {
  "id": "saruman",
  "intro": {
   "vol": 2,
   "gi": 8
  },
  "name": {
   "en": "Saruman",
   "cs": "Saruman"
  },
  "en": "Saruman the White",
  "race": "carodej",
  "rlab": {
   "en": "Fallen wizard",
   "cs": "Padlý čaroděj"
  },
  "ic": "carodej",
  "say": {
   "cs": "SA-ru-man"
  },
  "portrait": "__IMG_saruman__",
  "short": {
   "en": "Saruman",
   "cs": "Saruman"
  },
  "kid": {
   "en": "A powerful wizard who turned bad. From his tower Orthanc he built an army — but a voice can only trick you if you listen.",
   "cs": "Mocný čaroděj, který se zkazil. Ze své věže Orthanc vybudoval vojsko — ale hlas tě oklame, jen když ho posloucháš."
  },
  "dad": {
   "en": "Once head of the wizards, now Sauron’s rival for power. His weapons are machines, armies — and a bewitching voice.",
   "cs": "Kdysi hlava čarodějů, teď Sauronův sok o moc. Jeho zbraně jsou stroje, vojska — a okouzlující hlas."
  },
  "arc": {
   "ahead": {
    "en": "How can just a voice be a weapon?",
    "cs": "Jak může být obyčejný hlas zbraní?"
   },
   "beats": [
    {
     "vol": 2,
     "gi": 8,
     "text": {
      "en": "His fortress is found smashed by the Ents; he is trapped in Orthanc.",
      "cs": "Jeho pevnost je nalezena rozbitá Enty; je uvězněn v Orthancu."
     }
    },
    {
     "vol": 2,
     "gi": 10,
     "text": {
      "en": "Tries his enchanting voice on everyone — and has his staff broken by Gandalf.",
      "cs": "Zkusí na všechny svůj okouzlující hlas — a Gandalf mu zlomí hůl."
     }
    },
    {
     "vol": 3,
     "gi": 18,
     "text": {
      "en": "As “Sharkey” he has spoiled the Shire — and here he is overthrown and undone.",
      "cs": "Jako „Šarkan\" zpustošil Kraj — a tady je svržen a zničen."
     }
    }
   ]
  }
 },
 {
  "id": "faramir",
  "intro": {
   "vol": 2,
   "gi": 16
  },
  "name": {
   "en": "Faramir",
   "cs": "Faramir"
  },
  "en": "Faramir of Gondor",
  "race": "clovek",
  "rlab": {
   "en": "Captain of Gondor",
   "cs": "Velitel z Gondoru"
  },
  "ic": "clovek",
  "say": {
   "cs": "FA-ra-mir"
  },
  "portrait": "__IMG_faramir__",
  "short": {
   "en": "Faramir",
   "cs": "Faramir"
  },
  "kid": {
   "en": "Boromir’s younger brother, a wise and gentle captain. He is offered the Ring — and, unlike his brother, he says no.",
   "cs": "Boromirův mladší bratr, moudrý a laskavý velitel. Prsten se mu nabízí — a on, na rozdíl od bratra, řekne ne."
  },
  "dad": {
   "en": "Noble and clear-eyed. His refusal of the Ring is one of the quiet high points of the whole tale.",
   "cs": "Ušlechtilý a jasnozřivý. Jeho odmítnutí Prstenu je jedním z tichých vrcholů celého příběhu."
  },
  "arc": {
   "ahead": {
    "en": "What makes it possible to say no to something you really want?",
    "cs": "Co ti umožní říct ne něčemu, co opravdu chceš?"
   },
   "beats": [
    {
     "vol": 2,
     "gi": 16,
     "text": {
      "en": "Captures the hobbits, learns of Boromir’s death — and refuses the Ring.",
      "cs": "Zajme hobity, dozví se o Boromirově smrti — a odmítne Prsten."
     }
    },
    {
     "vol": 2,
     "gi": 17,
     "text": {
      "en": "Lets the travellers go, warning them against Cirith Ungol.",
      "cs": "Nechá poutníky jít a varuje je před Cirith Ungolem."
     }
    },
    {
     "vol": 3,
     "gi": 4,
     "text": {
      "en": "Rides out to hold the failing defences and is gravely wounded.",
      "cs": "Vyjede držet hroutící se obranu a je těžce raněn."
     }
    },
    {
     "vol": 3,
     "gi": 8,
     "text": {
      "en": "Healed by Aragorn in the Houses of Healing, and wakes to new hope.",
      "cs": "Aragorn ho uzdraví v Domech uzdravování a on se probudí k nové naději."
     }
    },
    {
     "vol": 3,
     "gi": 15,
     "text": {
      "en": "Made Prince of Ithilien; he and Éowyn find happiness together.",
      "cs": "Stane se knížetem Ithilienu; on a Éowyn najdou štěstí spolu."
     }
    }
   ]
  }
 },
 {
  "id": "odula",
  "intro": {
   "vol": 2,
   "gi": 20
  },
  "name": {
   "en": "Shelob",
   "cs": "Odula"
  },
  "en": "Shelob",
  "race": "zlo",
  "rlab": {
   "en": "Giant spider",
   "cs": "Obří pavučice"
  },
  "ic": "wraith",
  "say": {
   "cs": "O-du-la"
  },
  "portrait": "__IMG_odula__",
  "short": {
   "en": "Shelob",
   "cs": "Odula"
  },
  "kid": {
   "en": "A monstrous ancient spider who lurks in a dark tunnel in the mountains, waiting to trap travellers.",
   "cs": "Obludná prastará pavučice, která číhá v temném tunelu v horách a čeká, až polapí poutníky."
  },
  "dad": {
   "en": "An evil older than Sauron’s realm. Gollum leads the hobbits to her — the trap at the top of the stairs.",
   "cs": "Zlo starší než Sauronova říše. Glum k ní hobity zavede — past na vršku schodů."
  }
 },
 {
  "id": "skretivelitele",
  "intro": {
   "vol": 2,
   "gi": 21
  },
  "name": {
   "en": "The orc-captains",
   "cs": "Skřetí velitelé"
  },
  "en": "Shagrat & Gorbag",
  "race": "zlo",
  "rlab": {
   "en": "Orc-captains",
   "cs": "Velitelé skřetů"
  },
  "ic": "orc",
  "say": {
   "cs": "—"
  },
  "portrait": "__IMG_skretivelitele__",
  "short": {
   "en": "Orc-captains",
   "cs": "Skřeti"
  },
  "kid": {
   "en": "Two quarrelling orc leaders at the tower of Cirith Ungol. Sam overhears their squabble — and that is how he learns Frodo is still alive!",
   "cs": "Dva hašteřící se velitelé skřetů u věže Cirith Ungol. Sam vyslechne jejich rozepři — a tak se dozví, že Frodo pořád žije!"
  },
  "dad": {
   "en": "Shagrat and Gorbag. Their argument over Frodo’s captured gear reveals the crucial secret: the sting only sent him to sleep.",
   "cs": "Šagrat a Gorbag. Jejich hádka o Frodovy zabavené věci prozradí zásadní tajemství: bodnutí ho jen uspalo."
  }
 },
 {
  "id": "denethor",
  "intro": {
   "vol": 3,
   "gi": 1
  },
  "name": {
   "en": "Denethor",
   "cs": "Denethor"
  },
  "en": "Steward of Gondor",
  "race": "clovek",
  "rlab": {
   "en": "Steward of Gondor",
   "cs": "Správce Gondoru"
  },
  "ic": "clovek",
  "say": {
   "cs": "DE-ne-tor"
  },
  "portrait": "__IMG_denethor__",
  "short": {
   "en": "Denethor",
   "cs": "Denethor"
  },
  "kid": {
   "en": "The proud ruler of Gondor who guards the throne until a king returns. Grief and despair have made him grim and hard to please.",
   "cs": "Hrdý vládce Gondoru, který střeží trůn, dokud se nevrátí král. Žal a zoufalství ho učinily ponurým a těžko potěšitelným."
  },
  "dad": {
   "en": "The Steward, worn down by a secret window on the Enemy’s power. His despair over Faramir turns to a terrible madness.",
   "cs": "Správce, zlomený tajným nahlížením do Nepřítelovy moci. Jeho zoufalství nad Faramirem se změní v hrozné šílenství."
  },
  "arc": {
   "ahead": {
    "en": "What can despair do to even a strong and clever person?",
    "cs": "Co dokáže zoufalství udělat i se silným a chytrým člověkem?"
   },
   "beats": [
    {
     "vol": 3,
     "gi": 1,
     "text": {
      "en": "Receives Pippin’s service, but is cold, proud and full of grief.",
      "cs": "Přijme Pipinovu službu, ale je chladný, hrdý a plný žalu."
     }
    },
    {
     "vol": 3,
     "gi": 7,
     "text": {
      "en": "Overcome by despair, he tries to burn himself and Faramir — and dies.",
      "cs": "Přemožen zoufalstvím se pokusí upálit sebe i Faramira — a zahyne."
     }
    }
   ]
  }
 },
 {
  "id": "mrtvi",
  "intro": {
   "vol": 3,
   "gi": 2
  },
  "name": {
   "en": "The Army of the Dead",
   "cs": "Armáda mrtvých"
  },
  "en": "The Oathbreakers",
  "race": "zlo",
  "rlab": {
   "en": "Ghost-host",
   "cs": "Přízračné vojsko"
  },
  "ic": "star",
  "say": {
   "cs": "—"
  },
  "portrait": "__IMG_mrtvi__",
  "short": {
   "en": "The Dead",
   "cs": "Mrtví"
  },
  "kid": {
   "en": "Ghostly warriors who long ago broke their promise. Aragorn calls them to keep it at last — and no enemy can stand against them.",
   "cs": "Přízrační bojovníci, kteří kdysi porušili svůj slib. Aragorn je povolá, aby ho konečně dodrželi — a žádný nepřítel před nimi neobstojí."
  },
  "dad": {
   "en": "The Dead of the mountains follow the true king to Pelargir, sweep the enemy from the ships, and are then set free.",
   "cs": "Mrtví z hor následují pravého krále do Pelargiru, smetou nepřítele z lodí a jsou pak propuštěni na svobodu."
  }
 },
 {
  "id": "arwen",
  "intro": {
   "vol": 3,
   "gi": 15
  },
  "name": {
   "en": "Arwen",
   "cs": "Arwen"
  },
  "en": "Arwen Evenstar",
  "race": "elf",
  "rlab": {
   "en": "Elf",
   "cs": "Elf"
  },
  "ic": "star",
  "say": {
   "cs": "AR-ven"
  },
  "portrait": "__IMG_arwen__",
  "short": {
   "en": "Arwen",
   "cs": "Arwen"
  },
  "kid": {
   "en": "The beautiful elf-lady Aragorn has loved for years. When he becomes king, she chooses to stay in Middle-earth and marry him.",
   "cs": "Krásná elfí paní, kterou Aragorn už léta miluje. Když se stane králem, rozhodne se zůstat ve Středozemi a vzít si ho."
  },
  "dad": {
   "en": "Elrond’s daughter, the Evenstar of her people. She weds King Elessar — and later gives Frodo her own place on the ship into the West.",
   "cs": "Elrondova dcera, Večernice svého lidu. Vezme si krále Elessara — a později dá Frodovi své místo na lodi do Zámoří."
  },
  "arc": {
   "ahead": {
    "en": "Would you give up something precious to be with the one you love?",
    "cs": "Vzdal by ses něčeho vzácného, abys byl s tím, koho miluješ?"
   },
   "beats": [
    {
     "vol": 3,
     "gi": 15,
     "text": {
      "en": "Weds King Elessar and becomes Queen of Gondor — and gives Frodo her place on the ship West.",
      "cs": "Vezme si krále Elessara a stane se královnou Gondoru — a dá Frodovi své místo na lodi do Zámoří."
     }
    }
   ]
  }
 }
];

// The saga's internal books (I–VI) and their chapter counts — the single source of truth for book labels.
var VOLBOOKS = {
 "1": [
  {
   "label": "I",
   "title": {
    "en": "Book One",
    "cs": "Kniha první"
   },
   "count": 12
  },
  {
   "label": "II",
   "title": {
    "en": "Book Two",
    "cs": "Kniha druhá"
   },
   "count": 10
  }
 ],
 "2": [
  {
   "label": "III",
   "title": {
    "en": "Book Three",
    "cs": "Kniha třetí"
   },
   "count": 11
  },
  {
   "label": "IV",
   "title": {
    "en": "Book Four",
    "cs": "Kniha čtvrtá"
   },
   "count": 10
  }
 ],
 "3": [
  {
   "label": "V",
   "title": {
    "en": "Book Five",
    "cs": "Kniha pátá"
   },
   "count": 10
  },
  {
   "label": "VI",
   "title": {
    "en": "Book Six",
    "cs": "Kniha šestá"
   },
   "count": 9
  }
 ]
};
