// The saga cast — shared across all ten volumes and injected into every build.
// L(en, cs) keeps the bilingual data compact. intro = first appearance {vol, gi}.
// arc.beats are tagged with the volume (vol) and movement (gi) they belong to, so a character's
// "story so far" grows across the whole saga and never spoils anything the reader has not reached.
var L = function (en, cs) { return { en: en, cs: cs }; };

var CAST = [
  {
    id: 'paran', intro: { vol: 1, gi: 1 },
    name: L('Ganoes Paran', 'Ganoes Paran'), en: 'Ganoes Paran',
    race: 'malazan', rlab: L('Malazan captain', 'Malazský kapitán'), ic: 'sword',
    kid: L('A young noble who wanted to be a soldier more than anything. He is clever and stubborn, and the gods take an inconvenient interest in him.', 'Mladý šlechtic, který chtěl být vojákem víc než co jiného. Je chytrý a tvrdohlavý a bohové se o něj nepohodlně zajímají.'),
    dad: L('A captain of the Malazan Empire, son of a noble house and a reluctant pawn of Oponn. His death and return make him one of the saga’s strangest witnesses.', 'Kapitán Malazské říše, syn šlechtického rodu a neochotný pěšák Oponn. Jeho smrt a návrat z něj dělají jednoho z nejpodivnějších svědků ságy.'),
    arc: { ahead: L('Can a man stay loyal to an empire that no longer deserves him?', 'Může člověk zůstat věrný říši, která si ho už nezaslouží?'),
      beats: [
        { vol: 1, gi: 1, text: L('Witnesses the siege of Pale and is given command of the decimated Bridgeburners.', 'Přihlíží obléhání Pale a dostane velení nad zdecimovanými Paliči mostů.') },
        { vol: 1, gi: 3, text: L('Is killed by the Hounds of Shadow — and returned to life by the twin gods of chance.', 'Zabijí ho Honiči stínu — a dvojčata náhody ho vrátí do života.') },
        { vol: 3, gi: 6, text: L('Becomes Master of the Deck of Dragons, a mortal voice among the gods.', 'Stane se Pánem Balíčku draků, smrtelným hlasem mezi bohy.') },
        { vol: 6, gi: 2, text: L('Takes command of Onearm’s Host after Dujek’s death.', 'Po Dujekově smrti převezme velení Onearmova vojska.') },
        { vol: 10, gi: 5, text: L('Stands at the centre of the final game of the Deck.', 'Stojí ve středu poslední hry Balíčku.') }
      ] }
  },
  {
    id: 'whiskeyjack', intro: { vol: 1, gi: 1 },
    name: L('Whiskeyjack', 'Whiskeyjack'), en: 'Whiskeyjack',
    race: 'malazan', rlab: L('Bridgeburner sergeant', 'Seržant Paličů mostů'), ic: 'sword',
    kid: L('The calm, gruff leader of the Bridgeburners. His soldiers would follow him anywhere, and he carries old wounds from a war he no longer believes in.', 'Klidný, mrzutý vůdce Paličů mostů. Vojáci by ho následovali kamkoli a on si nese staré rány z války, které už nevěří.'),
    dad: L('A legendary sergeant of the old guard, demoted by Laseen and sent to die. His loyalty to his soldiers is the closest thing the saga has to a moral centre.', 'Legendární seržant staré gardy, degradovaný Laseen a poslaný na smrt. Jeho věrnost vojákům je sáze nejblíž morálnímu středu.'),
    arc: { ahead: L('What is a soldier owed by the empire he served?', 'Co dluží říše vojákovi, kterému sloužil?'),
      beats: [
        { vol: 1, gi: 1, text: L('Survives the slaughter at Pale with a handful of Bridgeburners.', 'Přežije masakr u Pale s hrstkou Paličů mostů.') },
        { vol: 1, gi: 6, text: L('Joins Dujek in open rebellion against the Empress.', 'Přidá se k Dujekovi v otevřené vzpouře proti císařovně.') },
        { vol: 3, gi: 1, text: L('Negotiates the alliance with Caladan Brood and Anomander Rake.', 'Vyjedná spojenectví s Caladanem Broodem a Anomanderem Rakem.') },
        { vol: 3, gi: 5, text: L('Is struck down by Kallor before the walls of Coral.', 'Před hradbami Coral ho srazí Kallor.') },
        { vol: 3, gi: 6, text: L('Is laid to rest with his fallen soldiers inside Moon’s Spawn.', 'Je uložen k odpočinku se svými padlými vojáky uvnitř Měsíčního přízraku.') }
      ] }
  },
  {
    id: 'quickben', intro: { vol: 1, gi: 1 },
    name: L('Quick Ben', 'Quick Ben'), en: 'Quick Ben',
    race: 'malazan', rlab: L('Bridgeburner mage', 'Mág Paličů mostů'), ic: 'warren',
    kid: L('A wizard with more secrets than sleeves. He always has a plan, usually several, and he never tells anyone the whole truth.', 'Čaroděj, který má víc tajemství než rukávů. Vždycky má plán, obvykle několik, a nikdy nikomu neřekne celou pravdu.'),
    dad: L('A Bridgeburner cadre mage of impossible versatility. He carries the souls of twelve other mages and treats gods as problems to be out-thought.', 'Cadre mág Paličů mostů s nemožnou všestranností. Nese duše dvanácti dalších mágů a bohy považuje za problém, který se dá přechytračit.'),
    arc: { ahead: L('How much of victory is preparation, and how much is nerve?', 'Kolik z vítězství je příprava a kolik kuráž?'),
      beats: [
        { vol: 1, gi: 1, text: L('Helps hold the Bridgeburners together at Pale.', 'Pomůže udržet Paliče mostů pohromadě u Pale.') },
        { vol: 1, gi: 5, text: L('Fights the Claw and the Hounds through the streets of Darujhistan.', 'Bojuje s Claw a Honiči v ulicích Darujhistanu.') },
        { vol: 3, gi: 5, text: L('Uses Hood’s own warren to trap the Pannion Seer.', 'Použije samotný warren Hooda, aby polapil Pannionského Vědmu.') },
        { vol: 6, gi: 3, text: L('Defends the First Throne against the Letherii.', 'Brání První trůn proti Letheriům.') },
        { vol: 9, gi: 5, text: L('Faces the Nah’ruk beside the Bonehunters.', 'Postaví se Nah’rukům po boku Lovců kostí.') }
      ] }
  },
  {
    id: 'kalam', intro: { vol: 1, gi: 1 },
    name: L('Kalam Mekhar', 'Kalam Mekhar'), en: 'Kalam Mekhar',
    race: 'malazan', rlab: L('Bridgeburner assassin', 'Vrah Paličů mostů'), ic: 'sword',
    kid: L('A huge, quiet assassin from Seven Cities. He is dangerous when he is angry, and he is angry most of the time.', 'Obrovský tichý vrah ze Sedmi měst. Když se rozzlobí, je nebezpečný — a rozzlobený je většinou.'),
    dad: L('A Claw-trained killer who chose the Bridgeburners over the Empress. His loyalty is personal, never institutional.', 'Vrah vycvičený v Claw, který dal přednost Paličům mostů před císařovnou. Jeho věrnost je osobní, nikdy institucionální.'),
    arc: { ahead: L('When does vengeance become just another chain?', 'Kdy se pomsta stane jen dalším řetězem?'),
      beats: [
        { vol: 1, gi: 1, text: L('Survives Pale and takes the fight into Darujhistan.', 'Přežije Pale a přenese boj do Darujhistanu.') },
        { vol: 2, gi: 3, text: L('Carries the Book of the Apocalypse to Sha’ik in Raraku.', 'Nese Knihu apokalypsy Ša’ik do Raraku.') },
        { vol: 6, gi: 4, text: L('Escapes the trap in Malaz City, badly wounded but alive.', 'Unikne pasti v Malaz City, těžce raněný, ale živý.') }
      ] }
  },
  {
    id: 'fiddler', intro: { vol: 1, gi: 1 },
    name: L('Fiddler', 'Fiddler'), en: 'Fiddler',
    race: 'malazan', rlab: L('Bridgeburner sapper', 'Ženista Paličů mostů'), ic: 'flame',
    kid: L('A soldier who loves explosions and cards. He looks ordinary, which is exactly why people keep underestimating him.', 'Voják, který miluje výbuchy a karty. Vypadá obyčejně, a právě proto ho lidé pořád podceňují.'),
    dad: L('A sapper and squad mage with a gift for reading the Deck. He survives more massacres than anyone should and keeps choosing to march anyway.', 'Ženista a eskadronní mág s darem číst Balíček. Přežije víc masakrů, než by kdokoli měl, a přesto se pořád rozhoduje jít dál.'),
    arc: { ahead: L('What keeps a veteran marching after he has seen enough?', 'Co drží veterána na pochodu, když už viděl dost?'),
      beats: [
        { vol: 1, gi: 1, text: L('Fights at Pale and later in the streets of Darujhistan.', 'Bojuje u Pale a později v ulicích Darujhistanu.') },
        { vol: 2, gi: 1, text: L('Sets out across Seven Cities with Kalam, Crokus and Apsalar.', 'Vydá se přes Sedm měst s Kalamem, Crokusem a Apsalar.') },
        { vol: 3, gi: 5, text: L('Fights in the tunnels beneath Coral.', 'Bojuje v tunelech pod Coralem.') },
        { vol: 6, gi: 1, text: L('Survives the fire of Y’Ghatan and becomes one of the Bonehunters.', 'Přežije požár Y’Ghatanu a stane se jedním z Lovců kostí.') },
        { vol: 9, gi: 1, text: L('Marches with Tavore into the Letherii wastelands.', 'Vyráží s Tavore do letherských pustin.') }
      ] }
  },
  {
    id: 'apsalar', intro: { vol: 1, gi: 1 },
    name: L('Apsalar', 'Apsalar'), en: 'Apsalar (Sorry)',
    race: 'human', rlab: L('Possessed assassin', 'Posadnutá vražedkyně'), ic: 'mask',
    kid: L('A quiet young woman from a fishing village. For a while something else looked out through her eyes — and she is still learning who she is.', 'Tichá mladá žena z rybářské vesnice. Nějakou dobu se jí dívala z očí něco jiného — a ona se pořád učí, kdo vlastně je.'),
    dad: L('Once the vessel of Cotillion, the Rope. Freed from possession, she inherits his skills and a great deal of his guilt. Her name means “sorry” for a reason.', 'Kdysi nádoba Cotilliona, Provazu. Po osvobození z posednutí zdědí jeho dovednosti i velkou část jeho viny. Její jméno znamená „promiň" oprávněně.'),
    arc: { ahead: L('Can you ever be free of something that used your body?', 'Můžeš se někdy osvobodit od něčeho, co používalo tvé tělo?'),
      beats: [
        { vol: 1, gi: 1, text: L('Arrives with the Bridgeburners as Sorry, a killer with no memory of her crimes.', 'Přijde s Paliči mostů jako Sorry, vražedkyně bez paměti na své zločiny.') },
        { vol: 1, gi: 5, text: L('Is released from Cotillion’s possession during the convergence in Darujhistan.', 'Během střetu v Darujhistanu je osvobozena z Cotillionova posednutí.') },
        { vol: 2, gi: 3, text: L('Crosses Raraku and begins to understand what was done to her.', 'Přejde Raraku a začne chápat, co jí bylo uděláno.') },
        { vol: 4, gi: 3, text: L('Guards the Throne of Shadow on Drift Avalii.', 'Střeží Trůn stínu na Drift Avalii.') },
        { vol: 4, gi: 6, text: L('Accepts Cotillion’s service again — on her own terms.', 'Přijme Cotillionovu službu znovu — ale za svých podmínek.') }
      ] }
  },
  {
    id: 'tattersail', intro: { vol: 1, gi: 1 },
    name: L('Tattersail', 'Tattersail'), en: 'Tattersail',
    race: 'malazan', rlab: L('Cadre mage', 'Cadre mágyně'), ic: 'warren',
    kid: L('A powerful and kind-hearted army wizard. She is one of the few people at Pale who tries to save lives instead of spending them.', 'Mocná a laskavá armádní čarodějka. Je jednou z mála lidí u Pale, kdo se snaží životy zachraňovat, ne jimi platit.'),
    dad: L('A veteran cadre mage, large of body and heart, caught between the Empire’s orders and her own conscience. Her story does not end when her body does.', 'Zkušená cadre mágyně velkého těla i srdce, rozpolcená mezi rozkazy říše a vlastním svědomím. Její příběh nekončí, když skončí její tělo.'),
    arc: { ahead: L('What survives us — memory, love, or just power?', 'Co po nás zůstává — paměť, láska, nebo jen moc?'),
      beats: [
        { vol: 1, gi: 1, text: L('Brings the survivors of Pale together and protects the Bridgeburners.', 'Shromáždí přeživší z Pale a ochrání Paliče mostů.') },
        { vol: 1, gi: 4, text: L('Faces the Jaghut Tyrant and pays a terrible price.', 'Postaví se Jaghutskému Tyranovi a zaplatí strašlivou cenu.') },
        { vol: 3, gi: 3, text: L('Returns as part of Silverfox, carrying old grief and new power.', 'Vrátí se jako součást Silverfox, se starým žalem i novou mocí.') }
      ] }
  },
  {
    id: 'rake', intro: { vol: 1, gi: 1 },
    name: L('Anomander Rake', 'Anomander Rake'), en: 'Anomander Rake',
    race: 'tiste', rlab: L('Lord of Moon’s Spawn', 'Pán Měsíčního přízraku'), ic: 'moon',
    kid: L('A tall, silver-haired lord of the Tiste Andii who lives in a floating fortress. He carries a huge sword and is far older than the empire.', 'Vysoký stříbrovlasý pán Tiste Andii, který žije v létajícím hradu. Nese obrovský meč a je mnohem starší než říše.'),
    dad: L('The Son of Darkness, last great lord of the Tiste Andii, and master of the floating Moon’s Spawn. He is feared as a monster and chooses, again and again, to be something else.', 'Syn temnoty, poslední velký pán Tiste Andii a vládce létajícího Měsíčního přízraku. Bojí se ho jako netvora a on se znovu a znovu rozhoduje být něčím jiným.'),
    arc: { ahead: L('Is mercy strength, or the last disguise of despair?', 'Je milosrdenství síla, nebo poslední převlek zoufalství?'),
      beats: [
        { vol: 1, gi: 1, text: L('Withdraws from Pale after a duel with the Malazan mages.', 'Po duelu s malazskými mágy se stáhne z Pale.') },
        { vol: 1, gi: 4, text: L('Fights the Jaghut Tyrant above Darujhistan.', 'Bojuje s Jaghutským Tyranem nad Darujhistánem.') },
        { vol: 1, gi: 6, text: L('Offers an alliance to the outlawed Malazan army.', 'Nabídne spojenectví vyvržené malazské armádě.') },
        { vol: 3, gi: 5, text: L('Rises from the sea in Moon’s Spawn to break the Pannion siege.', 'Vynoří se z moře v Měsíčním přízraku a zlomí pannionské obléhání.') },
        { vol: 8, gi: 6, text: L('Makes the choice that ends his long story — and changes Dragnipur forever.', 'Učiní volbu, která ukončí jeho dlouhý příběh — a navždy změní Dragnipur.') }
      ] }
  },
  {
    id: 'kruppe', intro: { vol: 1, gi: 2 },
    name: L('Kruppe', 'Kruppe'), en: 'Kruppe',
    race: 'human', rlab: L('Darujhistan schemer', 'Darujhistanský intrikán'), ic: 'book',
    kid: L('A round, talkative little man who loves pastries and knows everybody’s business. He pretends to be a fool, but he notices everything.', 'Kulatý upovídaný mužík, který miluje koláče a zná všechny záležitosti. Dělá ze sebe blázna, ale všímá si všeho.'),
    dad: L('A Darujhistan broker of secrets, pastries and improbable schemes. Behind the comedy is one of the sharpest minds in the city — and perhaps in the saga.', 'Darujhistanský prostředník tajemství, koláčů a nepravděpodobných plánů. Za komedií se skrývá jedna z nejbystřejších myslí města — a možná celé ságy.'),
    arc: { ahead: L('Why do the powerful always underestimate the fool?', 'Proč mocní vždycky podceňují blázna?'),
      beats: [
        { vol: 1, gi: 2, text: L('Welcomes the reader to Darujhistan and immediately starts meddling.', 'Přivítá čtenáře v Darujhistánu a okamžitě začne do všeho mluvit.') },
        { vol: 1, gi: 5, text: L('Helps turn the fête into a very bad night for the Claw.', 'Pomůže proměnit slavnost ve velmi špatnou noc pro Claw.') },
        { vol: 3, gi: 6, text: L('Brokers peace between Silverfox and the Mhybe.', 'Zprostředkuje smír mezi Silverfox a Mhybe.') },
        { vol: 8, gi: 2, text: L('Is still in Darujhistan, still eating, still three steps ahead.', 'Je pořád v Darujhistánu, pořád jí a pořád o tři kroky napřed.') }
      ] }
  },
  {
    id: 'crokus', intro: { vol: 1, gi: 2 },
    name: L('Crokus', 'Crokus'), en: 'Crokus (Cutter)',
    race: 'human', rlab: L('Darujhistan thief', 'Darujhistanský zloděj'), ic: 'sword',
    kid: L('A young thief with a good heart and bad luck. He would rather be brave than sensible, especially when someone he cares about is in danger.', 'Mladý zloděj s dobrým srdcem a špatným štěstím. Radši je statečný než rozumný, zvlášť když je v nebezpečí někdo, na kom mu záleží.'),
    dad: L('A Darujhistan thief touched by Oponn and later remade as the killer Cutter. His growing up is one of the saga’s quiet tragedies.', 'Darujhistanský zloděj poznamenaný Oponn a později přetvořený v zabijáka Cuttera. Jeho dospívání je jednou z tichých tragédií ságy.'),
    arc: { ahead: L('What does love cost when it asks you to become someone else?', 'Co stojí láska, když po tobě chce, abys byl někým jiným?'),
      beats: [
        { vol: 1, gi: 2, text: L('Steals a foreign coin and catches the attention of Oponn.', 'Ukradne cizí minci a upoutá pozornost Oponn.') },
        { vol: 1, gi: 5, text: L('Fights through the fête beside Apsalar and the Bridgeburners.', 'Probojuje se slavností po boku Apsalar a Paličů mostů.') },
        { vol: 2, gi: 1, text: L('Travels into Seven Cities with Fiddler, Kalam and Apsalar.', 'Cestuje do Sedmi měst s Fiddlerem, Kalamem a Apsalar.') },
        { vol: 4, gi: 3, text: L('Guards the Throne of Shadow and takes the name Cutter.', 'Střeží Trůn stínu a přijme jméno Cutter.') },
        { vol: 8, gi: 2, text: L('Returns to Darujhistan as a very different man.', 'Vrátí se do Darujhistánu jako velmi jiný muž.') }
      ] }
  },
  {
    id: 'lorn', intro: { vol: 1, gi: 2 },
    name: L('Adjunct Lorn', 'Pobočník Lorn'), en: 'Adjunct Lorn',
    race: 'malazan', rlab: L('Adjunct to the Empress', 'Pobočník císařovny'), ic: 'crown',
    kid: L('The Empress’s right hand in the field. She is calm, elegant and absolutely certain that the empire comes first.', 'Pravá ruka císařovny v poli. Je klidná, elegantní a naprosto přesvědčená, že říše je na prvním místě.'),
    dad: L('Laseen’s Adjunct, sent to Genabackis to solve the Darujhistan problem by any means. Her certainty is both her strength and her undoing.', 'Laseenin pobočník, vyslaný na Genabackis, aby vyřešil darujhistanský problém jakýmikoli prostředky. Její jistota je její silou i záhubou.'),
    arc: { ahead: L('What happens when duty asks you to become a monster?', 'Co se stane, když povinnost požaduje, abys byl netvor?'),
      beats: [
        { vol: 1, gi: 2, text: L('Arrives in Genabackis with Tool and a secret plan.', 'Přijde na Genabackis s Toolem a tajným plánem.') },
        { vol: 1, gi: 4, text: L('Releases the Jaghut Tyrant as a weapon against Darujhistan.', 'Vypustí Jaghutského Tyrana jako zbraň proti Darujhistánu.') },
        { vol: 1, gi: 5, text: L('Her plan collapses in the fires of the fête.', 'Její plán se zhroutí v ohni slavnosti.') }
      ] }
  },
  {
    id: 'tool', intro: { vol: 1, gi: 2 },
    name: L('Onos Toolan', 'Onos Toolan'), en: 'Onos Toolan (Tool)',
    race: 'imass', rlab: L('T’lan Imass warrior', 'T’lan Imasský bojovník'), ic: 'imass',
    kid: L('An undead warrior made of dust and old stone. He speaks little, keeps his promises, and is much kinder than he looks.', 'Nemrtvý bojovník z prachu a starého kamene. Moc nemluví, drží slovo a je mnohem laskavější, než vypadá.'),
    dad: L('A T’lan Imass Bonecaster’s kin, bound to Lorn’s service and then to his own long search for meaning. His journey from weapon to person is one of the saga’s great arcs.', 'Příbuzný t’lan imasské kostěné kouzelnice, připoutaný k Lornině službě a pak k vlastnímu dlouhému hledání smyslu. Jeho cesta od zbraně k osobě je jedním z velkých oblouků ságy.'),
    arc: { ahead: L('Can something that has forgotten how to live learn again?', 'Může se něco, co zapomnělo žít, znovu naučit?'),
      beats: [
        { vol: 1, gi: 2, text: L('Serves Adjunct Lorn as her executioner and guide.', 'Slouží pobočníkovi Lorn jako kat a průvodce.') },
        { vol: 1, gi: 4, text: L('Fights the Tyrant he helped release.', 'Bojuje s Tyranem, kterého pomohl vypustit.') },
        { vol: 3, gi: 6, text: L('Is restored to mortal flesh at the end of the Pannion war.', 'Na konci pannionské války je navrácen do smrtelného těla.') },
        { vol: 7, gi: 2, text: L('Witnesses Toc’s sacrifice among the Awl.', 'Je svědkem Tocovy oběti mezi Awly.') },
        { vol: 9, gi: 3, text: L('Faces the destruction of his family and his people.', 'Čelí zničení své rodiny a svého lidu.') }
      ] }
  },
  {
    id: 'cotillion', intro: { vol: 1, gi: 1 },
    name: L('Cotillion', 'Cotillion'), en: 'Cotillion (The Rope)',
    race: 'god', rlab: L('God of assassins', 'Bůh vrahů'), ic: 'mask',
    kid: L('The patron god of assassins, who moves through the world on secret errands. He is not as cruel as his reputation suggests — but he is not safe either.', 'Patron vrahů, který světem prochází na tajných úkolech. Není tak krutý, jak tvrdí jeho pověst — ale ani bezpečný.'),
    dad: L('Dancer, the Emperor’s friend, who escaped death by ascending to godhood. He shares the House of Shadow with Shadowthrone and plays a very long game with the Crippled God.', 'Dancer, císařův přítel, který unikl smrti vystoupením mezi bohy. S Shadowthronem sdílí Dům stínu a hraje velmi dlouhou hru s Chromým bohem.'),
    arc: { ahead: L('Can a god repay a debt to a mortal?', 'Může bůh splatit dluh smrtelníkovi?'),
      beats: [
        { vol: 1, gi: 1, text: L('Possesses Sorry and uses her to move through the Malazan camp.', 'Posedne Sorry a použije ji k pohybu v malazském táboře.') },
        { vol: 1, gi: 5, text: L('Withdraws from Sorry as part of a bargain with Rake.', 'Stáhne se ze Sorry v rámci dohody s Rakem.') },
        { vol: 2, gi: 3, text: L('Reveals that he and Shadowthrone were Kellanved and Dancer.', 'Prozradí, že on a Shadowthrone byli Kellanved a Dancer.') },
        { vol: 4, gi: 3, text: L('Sends Cutter and Apsalar to guard the Throne of Shadow.', 'Pošle Cuttera a Apsalar střežit Trůn stínu.') },
        { vol: 10, gi: 5, text: L('Takes his place in the final game for the Crippled God.', 'Zaujme své místo v poslední hře o Chromého boha.') }
      ] }
  },
  {
    id: 'shadowthrone', intro: { vol: 1, gi: 2 },
    name: L('Shadowthrone', 'Shadowthrone'), en: 'Shadowthrone',
    race: 'god', rlab: L('God of shadow', 'Bůh stínu'), ic: 'tower',
    kid: L('The strange, giggling god of shadow. He appears where he is least wanted and always seems to know more than he says.', 'Podivný, chichotající se bůh stínu. Objevuje se tam, kde ho chtějí nejméně, a vždycky vypadá, že ví víc, než říká.'),
    dad: L('Kellanved, the first Emperor, who cheated death and made himself a god. His humour is impossible to read and his plans span centuries.', 'Kellanved, první císař, který obešel smrt a udělal ze sebe boha. Jeho humor se nedá číst a jeho plány sahají staletí dopředu.'),
    arc: { ahead: L('Is a joke ever just a joke with a god?', 'Je kdy u boha vtip jen vtipem?'),
      beats: [
        { vol: 1, gi: 2, text: L('Watches the Darujhistan game from the shadows.', 'Sleduje darujhistanskou hru ze stínů.') },
        { vol: 2, gi: 3, text: L('Works with Cotillion to steer the Whirlwind.', 'Spolupracuje s Cotillionem na usměrnění Vichru.') },
        { vol: 6, gi: 2, text: L('Helps Paran contain the plague of Poliel.', 'Pomůže Paranovi zadržet mor Poliel.') },
        { vol: 10, gi: 5, text: L('Brings his House into the final convergence.', 'Přivede svůj Dům do závěrečného střetu.') }
      ] }
  },
  {
    id: 'dujek', intro: { vol: 1, gi: 1 },
    name: L('Dujek Onearm', 'Dujek Jednoruký'), en: 'Dujek Onearm',
    race: 'malazan', rlab: L('High Fist', 'Vysoký pěst'), ic: 'crown',
    kid: L('A famous general with one arm. He is tough, fair and tired of wars that never end.', 'Slavný generál s jednou rukou. Je drsný, spravedlivý a unavený z válek, které nikdy nekončí.'),
    dad: L('High Fist of the Malazan 2nd Army in Genabackis. He loves his soldiers more than his career, which makes him dangerous to an Empress.', 'Vysoký pěst malazské 2. armády na Genabackis. Miluje své vojáky víc než kariéru, což ho dělá nebezpečným pro císařovnu.'),
    arc: { ahead: L('What is the difference between treason and conscience?', 'Jaký je rozdíl mezi velezradou a svědomím?'),
      beats: [
        { vol: 1, gi: 1, text: L('Takes Pale at a cost he will never forget.', 'Dobude Pale za cenu, kterou nikdy nezapomene.') },
        { vol: 1, gi: 6, text: L('Turns his army against Laseen and joins Rake’s alliance.', 'Obrátí svou armádu proti Laseen a přidá se k Rakově alianci.') },
        { vol: 3, gi: 1, text: L('Marches with the 5th Army against the Pannion Domin.', 'Vyráží s 5. armádou proti Pannionskému Dómu.') },
        { vol: 6, gi: 2, text: L('Dies of the plague before the rebellion is finally broken.', 'Zemře na mor, než je rebelie konečně zlomena.') }
      ] }
  },
  {
    id: 'laseen', intro: { vol: 1, gi: 1 },
    name: L('Empress Laseen', 'Císařovna Laseen'), en: 'Empress Laseen',
    race: 'malazan', rlab: L('Empress of Malaz', 'Císařovna Malazu'), ic: 'crown',
    kid: L('The ruler of the Malazan Empire. She took the throne from the old Emperor and trusts almost no one.', 'Vládkyně Malazské říše. Vzala trůn starému císaři a skoro nikomu nevěří.'),
    dad: L('The Empress who ended the old guard and built an empire on fear and efficiency. She is not a simple villain — only a ruler who has run out of safe choices.', 'Císařovna, která skoncovala se starou gardou a postavila říši na strachu a výkonnosti. Není jednoduchá záporačka — jen vládkyně, které došly bezpečné volby.'),
    arc: { ahead: L('Can you rule by fear and still be just?', 'Můžeš vládnout strachem a přitom být spravedlivý?'),
      beats: [
        { vol: 1, gi: 1, text: L('Sends the old guard to die in Genabackis.', 'Pošle starou gardu zemřít na Genabackis.') },
        { vol: 1, gi: 6, text: L('Declares Dujek and the Bridgeburners outlaws.', 'Prohlásí Dujeka a Paliče mostů za vyvrhele.') },
        { vol: 6, gi: 4, text: L('Faces Tavore and the Bonehunters in Malaz City.', 'V Malaz City čelí Tavore a Lovcům kostí.') }
      ] }
  },
  {
    id: 'felisin', intro: { vol: 2, gi: 1 },
    name: L('Felisin Paran', 'Felisin Paran'), en: 'Felisin Paran',
    race: 'human', rlab: L('Noble outcast', 'Vyvržená šlechtična'), ic: 'mask',
    kid: L('A young noble girl who loses everything and is sent to a terrible island prison. She is clever, angry and determined to survive.', 'Mladá šlechtična, která ztratí všechno a je poslána na hrozný ostrovní trestanecký tábor. Je chytrá, rozzlobená a rozhodnutá přežít.'),
    dad: L('The youngest Paran sister, handed to the otataral mines as a political prisoner. Her survival hardens into something the Whirlwind can use.', 'Nejmladší ze sester Paranových, vydaná otataralským dolům jako politický vězeň. Její přežití ztvrdne v něco, co Vichr dokáže využít.'),
    arc: { ahead: L('Does suffering make a person stronger, or merely more dangerous?', 'Dělá utrpení člověka silnějším, nebo jen nebezpečnějším?'),
      beats: [
        { vol: 2, gi: 1, text: L('Is stripped of her name and sent to the otataral mines.', 'Je zbavena jména a poslána do otataralských dolů.') },
        { vol: 2, gi: 3, text: L('Escapes the island with Heboric and Baudin.', 'Uteče z ostrova s Heboricem a Baudinem.') },
        { vol: 2, gi: 5, text: L('Becomes the new Sha’ik, vessel of the Whirlwind.', 'Stane se novou Ša’ik, nádobou Vichru.') },
        { vol: 4, gi: 5, text: L('Is killed by her sister Tavore, who does not recognise her.', 'Zabije ji sestra Tavore, která ji nepozná.') }
      ] }
  },
  {
    id: 'heboric', intro: { vol: 2, gi: 1 },
    name: L('Heboric Light Touch', 'Heboric Light Touch'), en: 'Heboric',
    race: 'human', rlab: L('Excommunicated priest', 'Exkomunikovaný kněz'), ic: 'flask',
    kid: L('A former priest with no hands, exiled for telling the truth. He is bitter, brave and strangely gentle.', 'Bývalý kněz bez rukou, vyhnaný za to, že řekl pravdu. Je zatrpklý, statečný a podivně jemný.'),
    dad: L('A historian and High Priest of Fener whose hands were taken as punishment. His touch becomes a bridge between gods, jade and the dead.', 'Historik a velekněz Fenera, kterému byly jako trest odebrány ruce. Jeho dotek se stane mostem mezi bohy, jádem a mrtvými.'),
    arc: { ahead: L('What is a priest without a god — and what is a god without a priest?', 'Co je kněz bez boha — a co je bůh bez kněze?'),
      beats: [
        { vol: 2, gi: 1, text: L('Is shipped to the otataral mines with Felisin.', 'Je poslán do otataralských dolů s Felisin.') },
        { vol: 2, gi: 2, text: L('Touches the jade finger and pulls Fener into the mortal world.', 'Dotkne se jádrového prstu a vtáhne Fenera do smrtelného světa.') },
        { vol: 2, gi: 6, text: L('Becomes Ghost Hands, a living relic of the Whirlwind.', 'Stane se Rukama duchů, živou relikvií Vichru.') },
        { vol: 4, gi: 5, text: L('Witnesses the end of the Whirlwind and the death of Felisin.', 'Je svědkem konce Vichru a smrti Felisin.') }
      ] }
  },
  {
    id: 'duiker', intro: { vol: 2, gi: 1 },
    name: L('Duiker', 'Duiker'), en: 'Duiker',
    race: 'malazan', rlab: L('Imperial historian', 'Císařský historik'), ic: 'book',
    kid: L('A historian who follows the army with a notebook. He wants to write down what really happened, even when the truth is unbearable.', 'Historik, který chodí s armádou a zápisníkem. Chce zaznamenat, co se skutečně stalo, i když je pravda nesnesitelná.'),
    dad: L('The Imperial Historian attached to Coltaine’s 7th Army. His account of the Chain of Dogs turns a defeat into a story that will outlive the empire.', 'Císařský historik přidělený ke 7. armádě Coltaina. Jeho záznam Řetězu psů promění porážku v příběh, který přežije říši.'),
    arc: { ahead: L('Who decides what history remembers?', 'Kdo rozhoduje, co si historie zapamatuje?'),
      beats: [
        { vol: 2, gi: 1, text: L('Joins Coltaine’s march with the refugees of Seven Cities.', 'Připojí se k pochodování Coltaina s uprchlíky Sedmi měst.') },
        { vol: 2, gi: 4, text: L('Records the battles of the Chain of Dogs as they happen.', 'Zaznamenává bitvy Řetězu psů tak, jak se dějí.') },
        { vol: 2, gi: 6, text: L('Survives to tell what happened at Aren — though not unchanged.', 'Přežije, aby mohl vyprávět, co se stalo u Aren — i když ne nezměněn.') },
        { vol: 3, gi: 6, text: L('Tells the story of the Chain of Dogs to the surviving Bridgeburners.', 'Vypráví příběh Řetězu psů přeživším Paličům mostů.') }
      ] }
  },
  {
    id: 'coltaine', intro: { vol: 2, gi: 1 },
    name: L('Coltaine', 'Coltaine'), en: 'Coltaine',
    race: 'human', rlab: L('Wickan warleader', 'Wickanský válečník'), ic: 'crown',
    kid: L('A fierce warleader with crow feathers in his hair. He has to lead thousands of ordinary people across a hostile land.', 'Divoký válečník s havraními pery ve vlasech. Musí vést tisíce obyčejných lidí přes nepřátelskou zemi.'),
    dad: L('The Wickan commander of the 7th Army, given an impossible evacuation. His Chain of Dogs becomes the defining legend of Malazan courage.', 'Wickanský velitel 7. armády, kterému bylo svěřeno nemožné evakuovat. Jeho Řetěz psů se stane určující legendou malazské odvahy.'),
    arc: { ahead: L('What is a leader willing to spend to save strangers?', 'Co je vůdce ochoten vydat, aby zachránil cizí lidi?'),
      beats: [
        { vol: 2, gi: 1, text: L('Takes command of the 7th and the refugee column.', 'Převezme velení 7. armády a uprchlického proudu.') },
        { vol: 2, gi: 4, text: L('Beats the rebel army at Hissar against impossible odds.', 'Porazí rebelskou armádu u Hissaru proti nemožné přesile.') },
        { vol: 2, gi: 6, text: L('Dies at Aren after bringing the refugees through.', 'Zemře u Aren poté, co provedl uprchlíky.') }
      ] }
  },
  {
    id: 'icarium', intro: { vol: 2, gi: 2 },
    name: L('Icarium', 'Icarium'), en: 'Icarium',
    race: 'jaghut', rlab: L('Half-Jaghut wanderer', 'Poloviční Jaghut'), ic: 'jaghut',
    kid: L('A gentle wanderer who builds clocks and cannot remember his past. When he gets angry, terrible things happen that he never remembers.', 'Jemný poutník, který staví hodiny a nepamatuje si svou minulost. Když se rozzlobí, dějí se hrozné věci, na které si nikdy nevzpomene.'),
    dad: L('An immortal half-Jaghut whose rage has emptied cities. His companion Mappo keeps him from remembering — and from becoming the destroyer again.', 'Nesmrtelný poloviční Jaghut, jehož vztek vyprázdnil města. Jeho společník Mappo mu brání vzpomínat — a znovu se stát ničitelem.'),
    arc: { ahead: L('Is forgetting a mercy, or the cruelest kind of prison?', 'Je zapomnění milost, nebo nejkrutější druh vězení?'),
      beats: [
        { vol: 2, gi: 2, text: L('Crosses Raraku with Mappo, seeking the Path of Hands.', 'Přejde Raraku s Mappem a hledá Cestu rukou.') },
        { vol: 6, gi: 3, text: L('Unleashes his full power at the First Throne.', 'Uvolní svou plnou moc u Prvního trůnu.') },
        { vol: 7, gi: 1, text: L('Arrives in Letheras as a challenger to Rhulad.', 'Přijde do Letherasu jako vyzývatel Rhulada.') },
        { vol: 7, gi: 6, text: L('Tries to remake K’rul’s warrens and breaks something vast.', 'Pokusí se předělat K’rulovy warreny a rozbije něco obrovského.') }
      ] }
  },
  {
    id: 'mappo', intro: { vol: 2, gi: 2 },
    name: L('Mappo Runt', 'Mappo Runt'), en: 'Mappo Runt',
    race: 'human', rlab: L('Trell warrior', 'Trellský bojovník'), ic: 'sword',
    kid: L('A huge, kind traveler who looks after Icarium. He carries a secret that makes him sad even when he smiles.', 'Obrovský laskavý poutník, který se stará o Icaria. Nese tajemství, kvůli kterému je smutný, i když se usmívá.'),
    dad: L('A Trell warrior sworn to watch Icarium and, if necessary, stop him. His friendship is real; so is his betrayal.', 'Trellský bojovník zavázaný hlídat Icaria a v případě potřeby ho zastavit. Jeho přátelství je opravdové — a stejně opravdová je jeho zrada.'),
    arc: { ahead: L('Can you love someone you were sent to destroy?', 'Můžeš milovat někoho, koho tě poslali zničit?'),
      beats: [
        { vol: 2, gi: 2, text: L('Guides Icarium through the Holy Desert.', 'Provází Icaria Svatou pouští.') },
        { vol: 2, gi: 6, text: L('Chooses friendship over the Nameless Ones’ orders — for now.', 'Zvolí přátelství před rozkazy Bezjmenných — prozatím.') },
        { vol: 6, gi: 3, text: L('Is separated from Icarium by the Nameless Ones.', 'Je od Icaria oddělen Bezjmennými.') },
        { vol: 8, gi: 2, text: L('Searches for Icarium across the world.', 'Hledá Icaria po celém světě.') }
      ] }
  },
  {
    id: 'pust', intro: { vol: 2, gi: 2 },
    name: L('Iskaral Pust', 'Iskaral Pust'), en: 'Iskaral Pust',
    race: 'human', rlab: L('High Priest of Shadow', 'Velekněz stínu'), ic: 'mask',
    kid: L('A scruffy, giggling priest who talks to himself and lives in a dusty temple. Nobody can tell whether he is mad or the cleverest person in the room.', 'Otrhaný chichotající se kněz, který mluví sám se sebou a žije v zaprášeném chrámu. Nikdo nepozná, jestli je šílený, nebo nejchytřejší v místnosti.'),
    dad: L('Shadowthrone’s High Priest in Raraku, a master of misdirection and domestic chaos. His wife and his mule are nearly as dangerous as he is.', 'Shadowthronův velekněz v Raraku, mistr klamání a domácího chaosu. Jeho žena a jeho mula jsou skoro stejně nebezpečné jako on.'),
    arc: { ahead: L('Is madness a mask, a method, or both?', 'Je šílenství maska, metoda, nebo obojí?'),
      beats: [
        { vol: 2, gi: 2, text: L('Shelters Icarium and Mappo in his temple in Raraku.', 'Ukryje Icaria a Mappa ve svém chrámu v Raraku.') },
        { vol: 2, gi: 6, text: L('Helps the travellers find the road to Tremorlor.', 'Pomůže poutníkům najít cestu k Tremorloru.') },
        { vol: 4, gi: 6, text: L('Keeps meddling in the affairs of gods and mortals alike.', 'Plete se do záležitostí bohů i smrtelníků.') }
      ] }
  },
  {
    id: 'karsa', intro: { vol: 2, gi: 3 },
    name: L('Karsa Orlong', 'Karsa Orlong'), en: 'Karsa Orlong (Toblakai)',
    race: 'human', rlab: L('Teblor warrior', 'Teblorský bojovník'), ic: 'sword',
    kid: L('A gigantic warrior from the mountains who wants to see the world and conquer it. He is arrogant, brave and slowly learning that strength is not enough.', 'Obrovský bojovník z hor, který chce vidět svět a dobýt ho. Je arogantní, statečný a pomalu zjišťuje, že síla nestačí.'),
    dad: L('A Teblor of the Uryd, descendant of the Toblakai. His war on civilisation begins as conquest and becomes a long, brutal education in consequence.', 'Teblor z rodu Urydů, potomek Toblakaiů. Jeho válka s civilizací začíná jako dobývání a stává se dlouhým, brutálním vzděláváním v následcích.'),
    arc: { ahead: L('Can a man who trusts only his sword ever learn to trust anything else?', 'Může muž, který věří jen svému meči, někdy uvěřit něčemu jinému?'),
      beats: [
        { vol: 2, gi: 3, text: L('Appears as the Toblakai guarding Sha’ik in Raraku.', 'Objeví se jako Toblakai střežící Ša’ik v Raraku.') },
        { vol: 4, gi: 1, text: L('Leaves his mountain home with two companions and a promise of glory.', 'Opustí svůj horský domov se dvěma druhy a slibem slávy.') },
        { vol: 4, gi: 4, text: L('Refuses the Crippled God’s offer to become his Knight of Chains.', 'Odmítne nabídku Chromého boha stát se jeho Rytířem řetězů.') },
        { vol: 7, gi: 1, text: L('Comes to Letheras to challenge Emperor Rhulad.', 'Přijde do Letherasu vyzvat císaře Rhulada.') },
        { vol: 7, gi: 5, text: L('Cuts down Rhulad and walks away from the sword.', 'Sekne Rhulada a odejde od meče.') }
      ] }
  },
  {
    id: 'leoman', intro: { vol: 2, gi: 3 },
    name: L('Leoman of the Flails', 'Leoman z cepů'), en: 'Leoman of the Flails',
    race: 'human', rlab: L('Whirlwind commander', 'Velitel Vichru'), ic: 'flame',
    kid: L('A rebel commander with a burning hatred of the empire. He is charming, ruthless and always thinking about the next battle.', 'Rebelský velitel s planoucí nenávistí k říši. Je okouzlující, nemilosrdný a pořád myslí na další bitvu.'),
    dad: L('Sha’ik’s most trusted captain, a master of desert war and betrayal. He believes in the Whirlwind long after its goddess stops believing in him.', 'Nejdůvěryhodnější kapitán Ša’ik, mistr pouštní války a zrady. Věří ve Vichr ještě dlouho poté, co v něj přestane věřit jeho bohyně.'),
    arc: { ahead: L('What remains of a holy war when the prophecy fails?', 'Co zůstane ze svaté války, když proroctví selže?'),
      beats: [
        { vol: 2, gi: 3, text: L('Guards Sha’ik in Raraku and receives the Book of the Apocalypse.', 'Střeží Ša’ik v Raraku a přijme Knihu apokalypsy.') },
        { vol: 2, gi: 5, text: L('Survives the fall of the old Sha’ik and keeps fighting.', 'Přežije pád staré Ša’ik a bojuje dál.') },
        { vol: 4, gi: 5, text: L('Withdraws from Raraku with the last of the rebels.', 'Stáhne se z Raraku s posledními rebely.') },
        { vol: 6, gi: 1, text: L('Turns Y’Ghatan into a trap for the 14th Army.', 'Promění Y’Ghatan v past pro 14. armádu.') }
      ] }
  },
  {
    id: 'itkovian', intro: { vol: 3, gi: 1 },
    name: L('Itkovian', 'Itkovian'), en: 'Itkovian',
    race: 'human', rlab: L('Grey Swords priest', 'Kněz Šedých mečů'), ic: 'flame',
    kid: L('A quiet warrior-priest who believes that pain should be carried, not passed on. He is gentle in a world that has no use for gentleness.', 'Tichý bojovník-kněz, který věří, že bolest se má nést, ne předávat dál. Je jemný ve světě, který pro jemnost nemá využití.'),
    dad: L('A Grey Swords priest of Fener who takes the suffering of others into himself. His mercy becomes a new kind of godhood.', 'Kněz Šedých mečů Fenera, který do sebe bere utrpení jiných. Jeho milosrdenství se stane novým druhem božství.'),
    arc: { ahead: L('Can compassion be a weapon?', 'Může být soucit zbraní?'),
      beats: [
        { vol: 3, gi: 1, text: L('Leads the Grey Swords’ defense of Capustan.', 'Vede obranu Capustanu Šedými meči.') },
        { vol: 3, gi: 2, text: L('Faces the cannibal Anaster and refuses to look away.', 'Čelí kanibalovi Anasterovi a odmítá odvrátit zrak.') },
        { vol: 3, gi: 6, text: L('Takes the pain of the T’lan Imass into himself and dies giving peace.', 'Vezme do sebe bolest T’lan Imassů a zemře, aby dal mír.') },
        { vol: 8, gi: 3, text: L('Is remembered as the Redeemer, founder of a new cult.', 'Je připomínán jako Vykupitel, zakladatel nového kultu.') }
      ] }
  },
  {
    id: 'gruntle', intro: { vol: 3, gi: 1 },
    name: L('Gruntle', 'Gruntle'), en: 'Gruntle',
    race: 'human', rlab: L('Caravan guard', 'Karavanní strážce'), ic: 'sword',
    kid: L('A big, grumpy caravan guard with a soft spot for his friends. When something terrible happens, something tiger-like wakes up inside him.', 'Velký mrzutý strážce karavan, který má slabost pro přátele. Když se stane něco hrozného, probudí se v něm něco tygřího.'),
    dad: L('A caravan guard who becomes the Mortal Sword of Treach, the Tiger of Summer. His rage is holy, and it is not entirely his own.', 'Strážce karavan, který se stane Smrtelným mečem Treache, Tygra léta. Jeho vztek je svatý — a ne úplně jeho vlastní.'),
    arc: { ahead: L('Is rage a gift, a curse, or simply a god looking for a hand?', 'Je vztek dar, prokletí, nebo jen bůh hledající ruku?'),
      beats: [
        { vol: 3, gi: 1, text: L('Escorts a caravan toward Capustan and meets the Grey Swords.', 'Doprovází karavanu k Capustanu a potká Šedé meče.') },
        { vol: 3, gi: 2, text: L('Loses someone he loves in the sack of the city.', 'Při vyplenění města ztratí někoho, koho miluje.') },
        { vol: 3, gi: 3, text: L('Becomes Treach’s Mortal Sword and hunts the Pannion army.', 'Stane se Treachovým Smrtelným mečem a loví pannionskou armádu.') },
        { vol: 8, gi: 2, text: L('Returns to Darujhistan, still followed by Trake’s priests.', 'Vrátí se do Darujhistánu, pořád následován Trakeovými kněžími.') }
      ] }
  },
  {
    id: 'toc', intro: { vol: 3, gi: 1 },
    name: L('Toc the Younger', 'Toc mladší'), en: 'Toc the Younger',
    race: 'human', rlab: L('Malazan scout', 'Malazský zvěd'), ic: 'eye',
    kid: L('A one-eyed scout who has been through more than most soldiers. He keeps doing the right thing even when it costs him everything.', 'Jednooký zvěd, který si prošel víc než většina vojáků. Pořád dělá správnou věc, i když ho to stojí všechno.'),
    dad: L('A Malazan outrider lost in the warren of chaos, then used as a vessel by the elder god Togg. His fate is one of the saga’s quietest tragedies.', 'Malazský jezdec ztracený ve warrenu chaosu, kterého později použije starý bůh Togg jako nádobu. Jeho osud je jednou z nejtišších tragédií ságy.'),
    arc: { ahead: L('What is left of a man when gods use him as a door?', 'Co zůstane z člověka, když ho bohové použijí jako dveře?'),
      beats: [
        { vol: 3, gi: 1, text: L('Emerges from the warren of chaos with Togg inside him.', 'Vynoří se z warrenu chaosu s Toggem uvnitř.') },
        { vol: 3, gi: 4, text: L('Is captured and tortured by the Pannion Seer.', 'Je zajat a mučen Pannionským Vědmou.') },
        { vol: 3, gi: 6, text: L('Receives a new body and a second chance.', 'Dostane nové tělo a druhou šanci.') },
        { vol: 7, gi: 2, text: L('Dies saving Awl children from the Letherii.', 'Zemře, když zachraňuje awlské děti před Letherii.') }
      ] }
  },
  {
    id: 'kallor', intro: { vol: 3, gi: 1 },
    name: L('Kallor', 'Kallor'), en: 'Kallor',
    race: 'ascendant', rlab: L('The High King', 'Vysoký král'), ic: 'crown',
    kid: L('An ancient king who destroyed his own empire rather than give it up. He is still alive, still bitter and still dangerous.', 'Dávný král, který radši zničil svou říši, než aby se jí vzdal. Je pořád naživu, pořád zatrpklý a pořád nebezpečný.'),
    dad: L('Kallor Egwene Vayl, the High King who burned a continent to deny his enemies victory. He serves Caladan Brood now, and his patience is older than empires.', 'Kallor Egwene Vayl, Vysoký král, který spálil kontinent, aby svým nepřátelům odepřel vítězství. Teď slouží Caladanu Broodovi a jeho trpělivost je starší než říše.'),
    arc: { ahead: L('Can someone who has betrayed everything ever be trusted?', 'Dá se věřit někomu, kdo zradil všechno?'),
      beats: [
        { vol: 3, gi: 1, text: L('Serves as Caladan Brood’s second in the allied camp.', 'Slouží jako druhý muž Caladana Brooda ve spojeneckém táboře.') },
        { vol: 3, gi: 5, text: L('Kills Whiskeyjack before the walls of Coral.', 'Zabije Whiskeyjacka před hradbami Coral.') },
        { vol: 8, gi: 3, text: L('Joins Nimander’s group on the road to Black Coral.', 'Přidá se ke skupině Nimandera na cestě k Černému Coral.') }
      ] }
  },
  {
    id: 'korlat', intro: { vol: 3, gi: 1 },
    name: L('Korlat', 'Korlat'), en: 'Korlat',
    race: 'tiste', rlab: L('Tiste Andii commander', 'Velitelka Tiste Andii'), ic: 'moon',
    kid: L('A Tiste Andii warrior who commands Rake’s soldiers. She is calm in battle and much less calm around the man she loves.', 'Tiste Andii válečnice, která velí Rakovým vojákům. V bitvě je klidná a mnohem méně klidná kolem muže, kterého miluje.'),
    dad: L('Anomander Rake’s field commander and, briefly, Whiskeyjack’s hope for a life after war. Her grief is one of the quiet engines of the later books.', 'Polní velitelka Anomandera Raka a na krátko Whiskeyjackova naděje na život po válce. Její žal je jedním z tichých motorů pozdějších knih.'),
    arc: { ahead: L('How does an immortal grieve?', 'Jak truchlí nesmrtelný?'),
      beats: [
        { vol: 3, gi: 1, text: L('Commands the Tiste Andii in the march against the Pannion.', 'Velí Tiste Andii na pochodu proti Pannionům.') },
        { vol: 3, gi: 5, text: L('Loses Whiskeyjack at Coral.', 'Ztratí Whiskeyjacka u Coral.') },
        { vol: 3, gi: 6, text: L('Carries his memory into the long peace that follows.', 'Nese jeho památku do dlouhého míru, který následuje.') }
      ] }
  },
  {
    id: 'silverfox', intro: { vol: 3, gi: 3 },
    name: L('Silverfox', 'Silverfox'), en: 'Silverfox',
    race: 'ascendant', rlab: L('Reborn shaman', 'Znovuzrozená šamanka'), ic: 'star',
    kid: L('A strange child who grows too fast and remembers lives she never lived. She is loved and feared by the people who made her.', 'Podivné dítě, které roste příliš rychle a pamatuje si životy, které nežilo. Lidé, kteří ji stvořili, ji milují i se jí bojí.'),
    dad: L('The joint rebirth of Tattersail, Nightchill and the Mhybe’s daughter — a new being carrying old souls. She becomes the focus of the T’lan Imass’s hope.', 'Společné znovuzrození Tattersail, Nightchill a dcery Mhybe — nová bytost nesoucí staré duše. Stane se ohniskem naděje T’lan Imassů.'),
    arc: { ahead: L('Whose life is it when you carry three?', 'Čí život to je, když neseš tři?'),
      beats: [
        { vol: 3, gi: 3, text: L('Is born from the convergence of old powers.', 'Zrodí se ze střetu starých mocí.') },
        { vol: 3, gi: 6, text: L('Opens the warren of Tellann to the T’lan Imass and makes peace with her mother.', 'Otevře warren Tellann T’lan Imassům a usmíří se s matkou.') }
      ] }
  },
  {
    id: 'tavore', intro: { vol: 2, gi: 1 },
    name: L('Tavore Paran', 'Tavore Paran'), en: 'Tavore Paran',
    race: 'human', rlab: L('Adjunct of the 14th', 'Pobočník 14. armády'), ic: 'crown',
    kid: L('A cold, controlled commander who never explains herself. She carries more guilt than anyone knows and keeps marching anyway.', 'Chladná, sebeovládaná velitelka, která se nikdy nevysvětluje. Nese víc viny, než kdokoli ví, a přesto jde dál.'),
    dad: L('The Adjunct who takes command of the 14th Army and turns recruits into the Bonehunters. Her discipline hides a grief that will shape the end of the world.', 'Pobočník, který převezme velení 14. armády a promění rekruty v Lovce kostí. Její disciplína skrývá žal, který ovlivní konec světa.'),
    arc: { ahead: L('How much of yourself can you sacrifice before there is nothing left to command?', 'Kolik ze sebe můžeš obětovat, než nezbude nic, čemu velet?'),
      beats: [
        { vol: 2, gi: 1, text: L('Is named Adjunct after her sister is sent to the mines.', 'Je jmenována pobočníkem poté, co je její sestra poslána do dolů.') },
        { vol: 4, gi: 1, text: L('Takes the 14th Army into Seven Cities to end the Whirlwind.', 'Vede 14. armádu do Sedmi měst, aby ukončila Vichr.') },
        { vol: 4, gi: 5, text: L('Kills Sha’ik without knowing it is Felisin.', 'Zabije Ša’ik, aniž by věděla, že je to Felisin.') },
        { vol: 6, gi: 1, text: L('Leads the Bonehunters out of the fire of Y’Ghatan.', 'Vyvede Lovce kostí z ohně Y’Ghatanu.') },
        { vol: 9, gi: 1, text: L('Marches into the Letherii wastelands on a mission no one understands.', 'Vyráží do letherských pustin na misi, které nikdo nerozumí.') }
      ] }
  },
  {
    id: 'trull', intro: { vol: 4, gi: 2 },
    name: L('Trull Sengar', 'Trull Sengar'), en: 'Trull Sengar',
    race: 'tiste', rlab: L('Tiste Edur exile', 'Tiste Edur ve vyhnanství'), ic: 'tiste',
    kid: L('A Tiste Edur prince who was shamed and cast out by his own people. He is thoughtful, gentle and trying to understand a world that keeps hurting him.', 'Tiste Edur princ, který byl zahanben a vyhnán vlastním lidem. Je přemýšlivý, jemný a snaží se pochopit svět, který ho pořád zraňuje.'),
    dad: L('A Tiste Edur warrior exiled for a crime he did not commit. His friendship with the T’lan Imass Onrack becomes one of the saga’s great partnerships.', 'Tiste Edur válečník vyhnaný za zločin, který nespáchal. Jeho přátelství s T’lan Imassem Onrackem se stane jedním z velkých partnerství ságy.'),
    arc: { ahead: L('Can an exile ever go home?', 'Může se vyhnanec někdy vrátit domů?'),
      beats: [
        { vol: 4, gi: 2, text: L('Is freed from his imprisonment by Onrack.', 'Onrack ho osvobodí z vězení.') },
        { vol: 4, gi: 6, text: L('Reaches the First Throne with Onrack and begins his story.', 'Dostane se s Onrackem k Prvnímu trůnu a začne vyprávět svůj příběh.') },
        { vol: 5, gi: 1, text: L('Returns to his brothers and the sword that will destroy them.', 'Vrátí se ke svým bratrům a meči, který je zničí.') },
        { vol: 7, gi: 5, text: L('Is stabbed in the ruins of Letheras.', 'Je bodnut v troskách Letherasu.') }
      ] }
  },
  {
    id: 'onrack', intro: { vol: 4, gi: 2 },
    name: L('Onrack the Broken', 'Onrack Zlomený'), en: 'Onrack the Broken',
    race: 'imass', rlab: L('T’lan Imass warrior', 'T’lan Imasský bojovník'), ic: 'imass',
    kid: L('An undead warrior who has been alone for a very long time. He is patient, curious and surprisingly good company.', 'Nemrtvý bojovník, který byl velmi dlouho sám. Je trpělivý, zvědavý a překvapivě dobrá společnost.'),
    dad: L('A T’lan Imass broken from his clan and his purpose. His journey with Trull restores something he thought long dead.', 'T’lan Imass odloučený od svého klanu i smyslu. Jeho cesta s Trollem obnoví něco, co považoval za dávno mrtvé.'),
    arc: { ahead: L('What is a purpose worth after the war it served is over?', 'Co stojí účel po válce, které sloužil?'),
      beats: [
        { vol: 4, gi: 2, text: L('Frees Trull Sengar from his long imprisonment.', 'Osvobodí Trulla Sengara z dlouhého vězení.') },
        { vol: 4, gi: 6, text: L('Escorts Trull to the First Throne.', 'Doprovodí Trulla k Prvnímu trůnu.') },
        { vol: 7, gi: 3, text: L('Defends the Refugium against Silchas Ruin’s betrayal.', 'Brání Refugium proti zradě Silchase Ruina.') }
      ] }
  },
  {
    id: 'tehol', intro: { vol: 5, gi: 1 },
    name: L('Tehol Beddict', 'Tehol Beddict'), en: 'Tehol Beddict',
    race: 'human', rlab: L('Letherii financier', 'Letherský finančník'), ic: 'book',
    kid: L('A brilliant, ragged man who lives on a roof and seems to own nothing. He is secretly smarter than everyone in the city.', 'Geniální otrhaný muž, který žije na střeše a zdá se, že nic nevlastní. Tajně je chytřejší než celé město.'),
    dad: L('A former financial genius who destroyed his own fortune and now works to destroy Lether’s economy from within. His jokes are a weapon and a shield.', 'Bývalý finanční génius, který zničil vlastní jmění a teď pracuje na zničení letherské ekonomiky zevnitř. Jeho vtipy jsou zbraň i štít.'),
    arc: { ahead: L('Can one man bankrupt an empire — and survive it?', 'Může jeden muž zbankrotovat říši — a přežít to?'),
      beats: [
        { vol: 5, gi: 1, text: L('Plots against Lether’s rulers from a rooftop with his servant Bugg.', 'Kuje plány proti letherským vládcům na střeše se svým sluhou Buggem.') },
        { vol: 5, gi: 6, text: L('Is nearly killed — and saved by a god.', 'Je téměř zabit — a zachrání ho bůh.') },
        { vol: 7, gi: 4, text: L('Returns to public life as the Letherii Empire collapses.', 'Vrátí se do veřejného života, když se letherská říše hroutí.') },
        { vol: 7, gi: 6, text: L('Is proclaimed Emperor by the will of the people.', 'Je prohlášen císařem z vůle lidu.') }
      ] }
  },
  {
    id: 'bugg', intro: { vol: 5, gi: 1 },
    name: L('Bugg', 'Bugg'), en: 'Bugg (Mael)',
    race: 'god', rlab: L('Tehol’s manservant', 'Teholův sluha'), ic: 'water',
    kid: L('Tehol’s quiet, polite servant. He does the washing, fixes the roof and is much, much more than he appears.', 'Teholův tichý, zdvořilý sluha. Pere prádlo, opravuje střechu a je mnohem, mnohem víc, než se zdá.'),
    dad: L('Mael, the Elder God of the Sea, walking the world as a very patient manservant. He is one of the oldest powers in existence and prefers to be underestimated.', 'Mael, starý bůh moře, který chodí světem jako velmi trpělivý sluha. Je jednou z nejstarších mocností a radši je podceňován.'),
    arc: { ahead: L('Why would a god choose to serve?', 'Proč by si bůh vybral sloužit?'),
      beats: [
        { vol: 5, gi: 1, text: L('Serves Tehol and quietly keeps him alive.', 'Slouží Teholovi a potichu ho drží naživu.') },
        { vol: 5, gi: 4, text: L('Deals with the creatures escaping the Azath House.', 'Vypořádá se s bytostmi unikajícími z Domu Azath.') },
        { vol: 5, gi: 6, text: L('Reveals himself as Mael and saves Tehol’s life.', 'Odhalí se jako Mael a zachrání Teholovi život.') },
        { vol: 7, gi: 4, text: L('Returns to Letheras to face the Crippled God’s plans.', 'Vrátí se do Letherasu čelit plánům Chromého boha.') }
      ] }
  },
  {
    id: 'brys', intro: { vol: 5, gi: 1 },
    name: L('Brys Beddict', 'Brys Beddict'), en: 'Brys Beddict',
    race: 'human', rlab: L('King’s champion', 'Králův šampion'), ic: 'sword',
    kid: L('Tehol’s brother, a noble soldier who follows the rules and fights with a sword better than anyone. He is loyal to a kingdom that does not deserve him.', 'Teholův bratr, ušlechtilý voják, který dodržuje pravidla a umí šermovat lépe než kdokoli. Je věrný království, které si ho nezaslouží.'),
    dad: L('The Letherii King’s champion, a man of duty caught between a rotten court and a family of plotters. His death and return are both very Letherii.', 'Šampion letherského krále, muž povinnosti mezi shnilým dvorem a rodinou intrikánů. Jeho smrt i návrat jsou velmi letherské.'),
    arc: { ahead: L('What does honour mean in a state that has none?', 'Co znamená čest ve státě, který ji nemá?'),
      beats: [
        { vol: 5, gi: 1, text: L('Serves King Diskanar while trying to protect his brothers.', 'Slouží králi Diskanarovi a snaží se ochránit bratry.') },
        { vol: 5, gi: 5, text: L('Fights Rhulad and is forced to drink poison.', 'Bojuje s Rhuladem a je donucen vypít jed.') },
        { vol: 7, gi: 4, text: L('Returns from death, changed and claimed by a forgotten god.', 'Vrátí se ze smrti, změněný a nárokovaný zapomenutým bohem.') },
        { vol: 7, gi: 6, text: L('Helps bring down the old Letherii order.', 'Pomůže svrhnout starý letherský řád.') }
      ] }
  },
  {
    id: 'rhulad', intro: { vol: 5, gi: 1 },
    name: L('Rhulad Sengar', 'Rhulad Sengar'), en: 'Rhulad Sengar',
    race: 'tiste', rlab: L('Emperor of the Edur', 'Císař Edurů'), ic: 'crown',
    kid: L('The youngest Sengar brother, who wanted glory more than anything. A cursed sword gives him power — and takes everything else.', 'Nejmladší z bratrů Sengarů, který chtěl slávu víc než cokoli. Prokletý meč mu dá moc — a vezme všechno ostatní.'),
    dad: L('A Tiste Edur prince resurrected by the Crippled God and made Emperor of a war he cannot stop. Every death remakes him, and every remaking costs him more of himself.', 'Tiste Edur princ vzkříšený Chromým bohem a učiněný císařem války, kterou nedokáže zastavit. Každá smrt ho přetvoří a každé přetvoření ho stojí víc z něj samého.'),
    arc: { ahead: L('How many times can a man die before he stops being himself?', 'Kolikrát může člověk zemřít, než přestane být sám sebou?'),
      beats: [
        { vol: 5, gi: 1, text: L('Takes the cursed sword and is killed by the Jheck.', 'Vezme prokletý meč a zabijí ho Jheckové.') },
        { vol: 5, gi: 3, text: L('Is resurrected and seizes the Edur throne.', 'Je vzkříšen a zmocní se edurského trůnu.') },
        { vol: 5, gi: 5, text: L('Is maimed by Brys and left screaming on the palace floor.', 'Brys ho zmrzačí a nechá ho křičet na podlaze paláce.') },
        { vol: 7, gi: 5, text: L('Is cut down by Karsa Orlong and finally released.', 'Karsa Orlong ho nakonec srazí a osvobodí.') }
      ] }
  },
  {
    id: 'udinaas', intro: { vol: 5, gi: 2 },
    name: L('Udinaas', 'Udinaas'), en: 'Udinaas',
    race: 'human', rlab: L('Indebted slave', 'Zadlužený otrok'), ic: 'eye',
    kid: L('A quiet slave who sees things others cannot. He is trying to survive a world that treats him as property.', 'Tichý otrok, který vidí věci, které jiní nevidí. Snaží se přežít ve světě, který s ním zachází jako s majetkem.'),
    dad: L('A Letherii slave bound to the Sengar household, haunted by visions and marked by the Crippled God. His survival is a series of compromises he refuses to call surrender.', 'Letherský otrok připoutaný k domu Sengarů, pronásledovaný vidinami a poznamenaný Chromým bohem. Jeho přežití je série kompromisů, které odmítá nazvat kapitulací.'),
    arc: { ahead: L('What is freedom worth if it costs someone else theirs?', 'Co stojí svoboda, když stojí někoho jiného tu jeho?'),
      beats: [
        { vol: 5, gi: 2, text: L('Serves the Sengar brothers and witnesses Rhulad’s resurrection.', 'Slouží bratrům Sengarovým a je svědkem Rhuladova vzkříšení.') },
        { vol: 5, gi: 4, text: L('Enters the Azath House and frees Silchas Ruin.', 'Vstoupí do Domu Azath a osvobodí Silchase Ruina.') },
        { vol: 5, gi: 6, text: L('Escapes Letheras with the survivors of the Azath.', 'Uteče z Letherasu s přeživšími z Azathu.') },
        { vol: 7, gi: 3, text: L('Flees through the Refugium with Silchas Ruin’s group.', 'Uteče přes Refugium se skupinou Silchase Ruina.') }
      ] }
  },
  {
    id: 'seren', intro: { vol: 5, gi: 2 },
    name: L('Seren Pedac', 'Seren Pedac'), en: 'Seren Pedac',
    race: 'human', rlab: L('Letherii envoy', 'Letherská vyslankyně'), ic: 'scroll',
    kid: L('A clever diplomat who is used to being the only woman in the room. She wants to stop a war, but nobody wants to listen.', 'Chytrá diplomatka, která je zvyklá být v místnosti jediná žena. Chce zastavit válku, ale nikdo ji neposlouchá.'),
    dad: L('A Letherii envoy and translator who understands both the Edur and the empire better than their rulers do. Her greatest weapon is refusing to lie.', 'Letherská vyslankyně a překladatelka, která rozumí Edurům i říši lépe než jejich vládci. Její největší zbraní je odmítání lhát.'),
    arc: { ahead: L('Can words stop a war that has already begun?', 'Mohou slova zastavit válku, která už začala?'),
      beats: [
        { vol: 5, gi: 2, text: L('Negotiates with the Edur and watches the treaty collapse.', 'Vyjednává s Edury a sleduje zhroucení smlouvy.') },
        { vol: 5, gi: 5, text: L('Survives the fall of Letheras and the Edur conquest.', 'Přežije pád Letherasu a edurské dobytí.') },
        { vol: 7, gi: 3, text: L('Travels through the Refugium with Trull and the survivors.', 'Cestuje přes Refugium s Trollem a přeživšími.') }
      ] }
  },
  {
    id: 'hellian', intro: { vol: 6, gi: 1 },
    name: L('Hellian', 'Hellian'), en: 'Hellian',
    race: 'malazan', rlab: L('Bonehunter sergeant', 'Seržantka Lovců kostí'), ic: 'flame',
    kid: L('A sergeant who is always looking for a drink and somehow always finds a way to win. Her soldiers would die for her, mostly because they have no choice.', 'Seržantka, která pořád hledá něco na pití a nějak vždycky najde cestu k vítězství. Její vojáci by pro ni zemřeli, hlavně protože nemají na výběr.'),
    dad: L('A drunken, foul-mouthed sergeant of the 14th who turns out to be one of its best officers. Her chaos is carefully aimed.', 'Opilá, sprostá seržantka 14. armády, která se ukáže jako jedna z jejích nejlepších důstojnic. Její chaos je pečlivě mířený.'),
    arc: { ahead: L('How much can you hide behind a bottle?', 'Kolik se dá schovat za láhev?'),
      beats: [
        { vol: 6, gi: 1, text: L('Fights her way out of Y’Ghatan with her squad.', 'Probojuje se se svou četou z Y’Ghatanu.') },
        { vol: 6, gi: 5, text: L('Becomes one of the Bonehunters’ most reliable sergeants.', 'Stane se jednou z nejspolehlivějších seržantek Lovců kostí.') },
        { vol: 9, gi: 3, text: L('Marches into the Letherii wastelands with Tavore.', 'Vyráží s Tavore do letherských pustin.') }
      ] }
  },
  {
    id: 'bottle', intro: { vol: 6, gi: 1 },
    name: L('Bottle', 'Bottle'), en: 'Bottle',
    race: 'malazan', rlab: L('Bonehunter mage', 'Mág Lovců kostí'), ic: 'warren',
    kid: L('A young mage who can talk to rats and hates being noticed. He is braver than he thinks and cleverer than he lets on.', 'Mladý mág, který umí mluvit s krysami a nesnáší, když si ho někdo všimne. Je statečnější, než si myslí, a chytřejší, než dává najevo.'),
    dad: L('A squad mage of the 14th with a gift for rats, ghosts and uncomfortable truths. He grows from a nervous recruit into one of the Bonehunters’ quiet pillars.', 'Eskadronní mág 14. armády s darem pro krysy, duchy a nepříjemné pravdy. Z nervózního rekruta vyroste v jednoho z tichých pilířů Lovců kostí.'),
    arc: { ahead: L('Can a person who fears everything still be brave?', 'Může být člověk, který se bojí všeho, pořád statečný?'),
      beats: [
        { vol: 6, gi: 1, text: L('Survives the fire of Y’Ghatan with his squad.', 'Přežije požár Y’Ghatanu se svou četou.') },
        { vol: 6, gi: 3, text: L('Uses his rats and his wits at the First Throne.', 'Použije své krysy a důvtip u Prvního trůnu.') },
        { vol: 9, gi: 4, text: L('Faces the Nah’ruk in the Glass Desert.', 'Čelí Nah’rukům ve Skleněné poušti.') }
      ] }
  },
  {
    id: 'mallick', intro: { vol: 6, gi: 2 },
    name: L('Mallick Rel', 'Mallick Rel'), en: 'Mallick Rel',
    race: 'human', rlab: L('Imperial adviser', 'Císařský rádce'), ic: 'mask',
    kid: L('A smooth, smiling official who always seems to be on the winning side. He is very good at making other people take the blame.', 'Hladký usměvavý úředník, který jako by vždycky stál na vítězné straně. Velmi dobře umí ostatním podstrčit vinu.'),
    dad: L('A Jhistal priest and political survivor who serves whoever is useful and betrays whoever is not. His rise is one of the saga’s most unsettling arcs.', 'Jhistalský kněz a politický přeživší, který slouží, dokud je to užitečné, a zrazuje, když už ne. Jeho vzestup je jedním z nejznepokojivějších oblouků ságy.'),
    arc: { ahead: L('How far can a man rise without ever fighting?', 'Jak vysoko může člověk vystoupat, aniž kdy bojoval?'),
      beats: [
        { vol: 6, gi: 2, text: L('Advises Laseen while the empire comes apart.', 'Radí Laseen, zatímco se říše rozpadá.') },
        { vol: 6, gi: 4, text: L('Survives the Malaz City confrontation and keeps his influence.', 'Přežije střet v Malaz City a udrží si vliv.') },
        { vol: 10, gi: 6, text: L('Is left standing when the old order falls.', 'Zůstane stát, když starý řád padne.') }
      ] }
  },
  {
    id: 'redmask', intro: { vol: 7, gi: 1 },
    name: L('Redmask', 'Redmask'), en: 'Redmask',
    race: 'human', rlab: L('Awl warleader', 'Awlský válečník'), ic: 'mask',
    kid: L('A masked warleader who wants to unite his people against the Letherii. Nobody knows who he really is, including him.', 'Maskovaný válečník, který chce sjednotit svůj lid proti Letheriům. Nikdo neví, kdo doopravdy je — možná ani on sám.'),
    dad: L('The mysterious leader of the Awl, raised among enemies and armed with K’Chain Che’Malle guardians. His war is just and his methods are not.', 'Záhadný vůdce Awlů, vychovaný mezi nepřáteli a vyzbrojený strážci K’Chain Che’Malle. Jeho válka je spravedlivá a jeho metody ne.'),
    arc: { ahead: L('Is a leader’s cause more important than the truth?', 'Je vůdcova věc důležitější než pravda?'),
      beats: [
        { vol: 7, gi: 1, text: L('Unites the Awl and defeats the first Letherii army.', 'Sjednotí Awly a porazí první letherskou armádu.') },
        { vol: 7, gi: 2, text: L('Is executed by his own K’Chain guardians when he fails them.', 'Je popraven vlastními strážci K’Chain, když je zklame.') }
      ] }
  },
  {
    id: 'samar', intro: { vol: 7, gi: 1 },
    name: L('Samar Dev', 'Samar Dev'), en: 'Samar Dev',
    race: 'human', rlab: L('Bonecaster / inventor', 'Kostěná kouzelnice / vynálezkyně'), ic: 'scroll',
    kid: L('A sharp-tongued traveller who knows old magic and how to fix things. She finds Karsa infuriating and cannot quite leave him.', 'Ostrá poutnice, která zná starou magii a umí opravit skoro všechno. Karsa ji nesmírně štve a přesto ho nedokáže úplně opustit.'),
    dad: L('A self-taught Bonecaster and maker of clever devices, bound to Karsa by a knife and a debt. Her patience with him is a kind of heroism.', 'Samouká kostěná kouzelnice a tvůrkyně důmyslných přístrojů, připoutaná k Karsovi nožem a dluhem. Její trpělivost s ním je druh hrdinství.'),
    arc: { ahead: L('Can you change a man who refuses to change?', 'Můžeš změnit muže, který se odmítá změnit?'),
      beats: [
        { vol: 7, gi: 1, text: L('Travels with Karsa to Letheras as his reluctant companion.', 'Cestuje s Karsou do Letherasu jako neochotná společnice.') },
        { vol: 7, gi: 5, text: L('Witnesses Karsa’s fight with Rhulad and the Crippled God’s offer.', 'Je svědkem Karsova boje s Rhuladem a nabídky Chromého boha.') },
        { vol: 8, gi: 2, text: L('Crosses the Plain of Lamatath with Karsa.', 'Přejde Planinu Lamatath s Karsou.') }
      ] }
  },
  {
    id: 'beak', intro: { vol: 7, gi: 4 },
    name: L('Beak', 'Beak'), en: 'Beak',
    race: 'malazan', rlab: L('Bonehunter mage', 'Mág Lovců kostí'), ic: 'flame',
    kid: L('A gentle young soldier who is much smarter than people think. He carries a light inside him that can save everyone — once.', 'Jemný mladý voják, který je mnohem chytřejší, než si lidé myslí. Nese v sobě světlo, které může zachránit všechny — jednou.'),
    dad: L('A mage of the 14th with a terrible gift and a childlike kindness. His brief life is one of the series’ most beloved and most devastating.', 'Mág 14. armády se strašlivým darem a dětskou laskavostí. Jeho krátký život je jedním z nejmilovanějších a nejničivějších v sérii.'),
    arc: { ahead: L('What is a light worth if it can only be used once?', 'Co stojí světlo, které se dá použít jen jednou?'),
      beats: [
        { vol: 7, gi: 4, text: L('Joins the marines outside Letheras and makes friends at last.', 'Připojí se k námořníkům před Letherasem a konečně najde přátele.') },
        { vol: 7, gi: 4, text: L('Spends his life to save the army from a wave of magic.', 'Obětuje život, aby armádu zachránil před vlnou magie.') }
      ] }
  },
  {
    id: 'endest', intro: { vol: 8, gi: 1 },
    name: L('Endest Silann', 'Endest Silann'), en: 'Endest Silann',
    race: 'tiste', rlab: L('High Mage of Moon’s Spawn', 'Velekněz Měsíčního přízraku'), ic: 'moon',
    kid: L('An old Tiste Andii mage who has served Rake for a very long time. He is tired, faithful and full of regrets.', 'Starý Tiste Andii mág, který Rakovi slouží velmi dlouho. Je unavený, věrný a plný výčitek.'),
    dad: L('The broken High Mage of Moon’s Spawn, keeper of Rake’s oldest promises. His weariness hides a devotion that outlasts empires.', 'Zlomený velekněz Měsíčního přízraku, strážce Rakových nejstarších slibů. Jeho únava skrývá oddanost, která přežije říše.'),
    arc: { ahead: L('What do you do when your purpose finally asks everything of you?', 'Co uděláš, když tvůj účel konečně chce všechno?'),
      beats: [
        { vol: 8, gi: 1, text: L('Is summoned by Rake for a task he does not want to understand.', 'Rake ho povolá k úkolu, kterému nechce rozumět.') },
        { vol: 8, gi: 6, text: L('Helps Rake make his final choice over Dragnipur.', 'Pomůže Rakovi učinit poslední volbu nad Dragnipur.') }
      ] }
  },
  {
    id: 'seerd', intro: { vol: 8, gi: 1 },
    name: L('Seerdomin', 'Seerdomin'), en: 'Seerdomin',
    race: 'human', rlab: L('Former Pannion officer', 'Bývalý pannionský důstojník'), ic: 'sword',
    kid: L('A former enemy soldier who now guards a shrine. He is trying to be better than the man he was.', 'Bývalý nepřátelský voják, který teď střeží svatyni. Snaží se být lepším člověkem, než byl.'),
    dad: L('A Pannion officer who served the Seer and now guards the Redeemer’s cult in Black Coral. His penance is quiet, daily and never finished.', 'Pannionský důstojník, který sloužil Vědmovi a teď střeží kult Vykupitele v Černém Coral. Jeho pokání je tiché, každodenní a nikdy nekončí.'),
    arc: { ahead: L('Can a former monster become a guardian?', 'Může se z bývalého netvora stát strážce?'),
      beats: [
        { vol: 8, gi: 1, text: L('Guards the Redeemer’s shrine against a corrupting god.', 'Střeží Vykupitelovu svatyni před korumpujícím bohem.') },
        { vol: 8, gi: 3, text: L('Faces the thing that wants to bend Itkovian’s cult.', 'Čelí věci, která chce zohnout Itkovianův kult.') },
        { vol: 8, gi: 6, text: L('Survives the convergence and chooses to keep serving.', 'Přežije střet a rozhodne se sloužit dál.') }
      ] }
  },
  {
    id: 'kalyth', intro: { vol: 9, gi: 1 },
    name: L('Kalyth', 'Kalyth'), en: 'Kalyth',
    race: 'human', rlab: L('Destriant of the K’Chain', 'Destriant K’Chain'), ic: 'kchain',
    kid: L('A woman chosen by the K’Chain Che’Malle to speak for them. She is terrified, stubborn and the only hope of a dying people.', 'Žena vyvolená K’Chain Che’Malle, aby za ně mluvila. Je vyděšená, tvrdohlavá a jediná naděje umírajícího lidu.'),
    dad: L('The Destriant of the K’Chain Che’Malle, elevated by the Matron and burdened with a species’ survival. Her courage is the ordinary kind: getting up anyway.', 'Destriant K’Chain Che’Malle, povýšená Matronou a obtížená přežitím druhu. Její odvaha je toho obyčejného druhu: prostě vstát a jít dál.'),
    arc: { ahead: L('What do you owe a people that chose you without asking?', 'Co dlužíš lidu, který si tě vybral, aniž by se ptal?'),
      beats: [
        { vol: 9, gi: 1, text: L('Is named Destriant and sent to find the K’Chain’s Mortal Sword and Shield Anvil.', 'Je jmenována Destriant a vyslána najít K’Chainí Smrtelný meč a Kovadlinu štítu.') },
        { vol: 9, gi: 5, text: L('Faces the Nah’ruk attack with the Bonehunters.', 'Čelí útoku Nah’ruků s Lovci kostí.') },
        { vol: 10, gi: 5, text: L('Stands with the K’Chain in the final battle at the Spire.', 'Stojí s K’Chain v poslední bitvě u Věže.') }
      ] }
  },
  {
    id: 'hetan', intro: { vol: 9, gi: 1 },
    name: L('Hetan', 'Hetan'), en: 'Hetan',
    race: 'human', rlab: L('Barghast warleader', 'Barghastská válečnice'), ic: 'sword',
    kid: L('A fierce Barghast woman who leads warriors and argues with gods. She loves her family fiercely and shows it by shouting.', 'Divoká Barghastská žena, která vede bojovníky a hádá se s bohy. Svou rodinu miluje zuřivě a dává to najevo křikem.'),
    dad: L('Tool’s wife and a warleader of the White Face Barghast. Her death at the hands of her own people breaks something in Tool that cannot be repaired.', 'Toolova žena a válečnice Bílých tváří Barghastů. Její smrt rukama vlastního lidu zlomí v Toolovi něco, co se nedá opravit.'),
    arc: { ahead: L('What happens to a people when its leaders stop listening?', 'Co se stane s lidem, když jeho vůdci přestanou naslouchat?'),
      beats: [
        { vol: 9, gi: 1, text: L('Leads her clan toward the Barghast gathering.', 'Vede svůj klan k barghastskému shromáždění.') },
        { vol: 9, gi: 3, text: L('Is murdered by Barghast warriors during the succession struggle.', 'Je zavražděna barghastskými bojovníky během boje o nástupnictví.') }
      ] }
  },
  {
    id: 'stormy', intro: { vol: 6, gi: 1 },
    name: L('Stormy', 'Stormy'), en: 'Stormy',
    race: 'malazan', rlab: L('Bonehunter sergeant', 'Seržant Lovců kostí'), ic: 'flame',
    kid: L('A tough soldier with a loud voice and a soft heart. He has survived so many battles that he has stopped expecting to survive the next one.', 'Drsný voják s hlasitým hlasem a měkkým srdcem. Přežil tolik bitev, že už ani nečeká, že přežije další.'),
    dad: L('A veteran sergeant of the 14th, one of the few soldiers who has been everywhere and still complains about the food. His friendship with Gesler is legendary.', 'Zkušený seržant 14. armády, jeden z mála vojáků, kteří byli všude a pořád si stěžují na jídlo. Jeho přátelství s Geslerem je legendární.'),
    arc: { ahead: L('What keeps a soldier going when he has already outlived his luck?', 'Co drží vojáka na nohou, když už dávno přežil své štěstí?'),
      beats: [
        { vol: 6, gi: 1, text: L('Fights through the Y’Ghatan fire with Gesler.', 'Probojuje se ohněm Y’Ghatanu s Geslerem.') },
        { vol: 9, gi: 4, text: L('Faces the Nah’ruk in the Glass Desert.', 'Čelí Nah’rukům ve Skleněné poušti.') },
        { vol: 10, gi: 5, text: L('Stands with the Bonehunters at the Spire.', 'Stojí s Lovci kostí u Věže.') }
      ] }
  },
  {
    id: 'gesler', intro: { vol: 6, gi: 1 },
    name: L('Gesler', 'Gesler'), en: 'Gesler',
    race: 'malazan', rlab: L('Bonehunter sergeant', 'Seržant Lovců kostí'), ic: 'sword',
    kid: L('A calm, sarcastic soldier who has seen it all. He pretends not to care, but he cares more than almost anyone.', 'Klidný, sarkastický voják, který už viděl všechno. Předstírá, že ho to nezajímá, ale zajímá ho to víc než skoro kohokoli.'),
    dad: L('A veteran of the 14th and Stormy’s oldest friend. He carries the weight of command lightly, which is how his soldiers know he feels it.', 'Veterán 14. armády a nejstarší přítel Stormyho. Nese tíhu velení lehce, a právě proto jeho vojáci vědí, že ji cítí.'),
    arc: { ahead: L('Is there such a thing as a good soldier in a bad war?', 'Existuje něco jako dobrý voják ve špatné válce?'),
      beats: [
        { vol: 6, gi: 1, text: L('Leads his squad out of the Y’Ghatan fire.', 'Vyvede svou četu z ohně Y’Ghatanu.') },
        { vol: 9, gi: 4, text: L('Fights the Nah’ruk beside Stormy and the K’Chain.', 'Bojuje s Nah’ruky po boku Stormyho a K’Chain.') },
        { vol: 10, gi: 5, text: L('Makes his last stand at the Spire.', 'Padne v posledním boji u Věže.') }
      ] }
  },
  {
    id: 'crippled', intro: { vol: 10, gi: 1 },
    name: L('The Crippled God', 'Chromý bůh'), en: 'The Crippled God',
    race: 'god', rlab: L('The chained god', 'Spoutaný bůh'), ic: 'chain',
    kid: L('A broken god from another world, chained and used by powerful people. He is terrifying, but he is also in terrible pain.', 'Zlomený bůh z jiného světa, spoutaný a využívaný mocnými. Je děsivý, ale také strašně trpí.'),
    dad: L('A god torn from his own world, broken and chained beneath the earth. His pain poisons the warrens; his freedom is the prize every faction in the saga is really fighting over.', 'Bůh vytržený ze svého světa, zlomený a spoutaný pod zemí. Jeho bolest otravuje warreny; jeho svoboda je cena, o kterou ve skutečnosti bojují všechny frakce ságy.'),
    arc: { ahead: L('Does a god deserve mercy?', 'Zaslouží si bůh milosrdenství?'),
      beats: [
        { vol: 1, gi: 2, text: L('His influence is felt in the games of gods and mortals.', 'Jeho vliv je cítit ve hrách bohů i smrtelníků.') },
        { vol: 3, gi: 5, text: L('Kallor serves his interests during the Pannion war.', 'Kallor během pannionské války slouží jeho zájmům.') },
        { vol: 5, gi: 3, text: L('Resurrects Rhulad and makes him Emperor of the Edur.', 'Vzkřísí Rhulada a učiní ho císařem Edurů.') },
        { vol: 7, gi: 5, text: L('Offers Karsa the sword and is refused.', 'Nabídne Karsovi meč a je odmítnut.') },
        { vol: 10, gi: 5, text: L('Faces the final choice between revenge and release.', 'Čelí poslední volbě mezi pomstou a vysvobozením.') }
      ] }
  }
];

// Two internal books of three movements each, for every volume.
// gi (the global movement index inside a volume) is computed by the engine from book + n.
var VOLBOOKS = {
  '1': [
    { count: 3, label: 'I', title: L('The Fall of Pale', 'Pád Pale') },
    { count: 3, label: 'II', title: L('The City of Blue Fire', 'Město modrého ohně') }
  ],
  '2': [
    { count: 3, label: 'I', title: L('The Road of Slaves', 'Cesta otroků') },
    { count: 3, label: 'II', title: L('The Chain of Dogs', 'Řetěz psů') }
  ],
  '3': [
    { count: 3, label: 'I', title: L('The Alliance', 'Spojenectví') },
    { count: 3, label: 'II', title: L('The Pannion War', 'Pannionská válka') }
  ],
  '4': [
    { count: 3, label: 'I', title: L('The Teblor', 'Teblor') },
    { count: 3, label: 'II', title: L('The Whirlwind’s End', 'Konec Vichru') }
  ],
  '5': [
    { count: 3, label: 'I', title: L('The Sengar Brothers', 'Bratři Sengarové') },
    { count: 3, label: 'II', title: L('The Fall of Letheras', 'Pád Letherasu') }
  ],
  '6': [
    { count: 3, label: 'I', title: L('The Fire of Y’Ghatan', 'Oheň Y’Ghatanu') },
    { count: 3, label: 'II', title: L('The Bonehunters', 'Lovci kostí') }
  ],
  '7': [
    { count: 3, label: 'I', title: L('The Challengers', 'Vyzývatelé') },
    { count: 3, label: 'II', title: L('The Reaper’s Gale', 'Vichr smrti') }
  ],
  '8': [
    { count: 3, label: 'I', title: L('The City of Sorrows', 'Město žalu') },
    { count: 3, label: 'II', title: L('Toll the Hounds', 'Daň pro ohaře') }
  ],
  '9': [
    { count: 3, label: 'I', title: L('The Wastelands', 'Pustiny') },
    { count: 3, label: 'II', title: L('The Dust of Dreams', 'Prach snů') }
  ],
  '10': [
    { count: 3, label: 'I', title: L('The Last March', 'Poslední pochod') },
    { count: 3, label: 'II', title: L('The Book of the Fallen', 'Kniha padlých') }
  ]
};
