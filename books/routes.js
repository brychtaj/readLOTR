// The saga's journeys — shared across all volumes and injected into every build (like the cast).
// One continuous, canonical route map (after the classic "journey map"), coloured by travelling group.
// Each leg belongs to a volume (vol) and its points carry the chapter (gi) at which they're reached, so
// the whole thing draws CUMULATIVELY: earlier volumes shown in full, the current volume up to where you've
// read (Kids), later volumes hidden. Legs of the same group across volumes share endpoints, so they connect.
//   point = [x, y, gi]   (x,y = % of the map image; gi = chapter within that leg's volume)
var ROUTES = [
  // ── Volume I–II · The Fellowship (Hobbiton → down the Anduin → Rauros) ──
  { id:'fellowship', group:{en:'The Fellowship',cs:'Společenstvo'}, color:'#c0392b', vol:1, pts:[
    [30.5,28,1],[33.5,28,4],[34.5,28.5,6],[35.5,29.5,8],[36.5,30,9],[40.5,23.5,11],[49.5,25,12],
    [47,33,15],[45,42,15],[47,37.5,16],[46.5,41,17],[48.5,42.5,18],[49,44,18],
    [50.5,46,21],[52,49,21],[53.5,52,21],[54.5,55,22],[55.5,57,22],[56.5,58,22] ] },

  // ── Volume III (Two Towers) — the company splits at Rauros ──
  // Merry & Pippin: captured across Rohan → Fangorn (Treebeard) → Isengard (with the Ents)
  { id:'ttt-merry', group:{en:'Merry & Pippin',cs:'Smíšek & Pipin'}, color:'#2f6cb0', vol:2, pts:[
    [56.5,58,1],[53.5,56,3],[50.5,54,3],[47.5,52.5,4],[45,50.5,8],[42.5,49,8] ] },
  // The Hunters (Aragorn, Legolas & Gimli, later + Gandalf): the chase → Rohan → Helm's Deep → Isengard
  { id:'ttt-hunters', group:{en:'Aragorn, Legolas & Gimli',cs:'Aragorn, Legolas & Gimli'}, color:'#8e3b9c', vol:2, pts:[
    [56.5,58,1],[52,56.5,2],[48,53,5],[46,62,6],[44,60.5,7],[43,54,8],[42.5,49,8] ] },
  // Frodo & Sam: Emyn Muil → Dead Marshes → the Black Gate → Ithilien → the pass of Cirith Ungol
  { id:'ttt-frodo', group:{en:'Frodo & Sam',cs:'Frodo & Sam'}, color:'#2e8b57', vol:2, pts:[
    [56.5,58,12],[56,56,12],[58,57,13],[62,53.5,14],[60,58,15],[59,63,15],[59,65,16],[59.5,66,18],[60.5,66.5,19],[61,66,20] ] },

  // ── Volume V–VI (Return of the King) ──
  // Gandalf & Pippin ride from Isengard to Minas Tirith
  { id:'rotk-gandalf', group:{en:'Gandalf & Pippin',cs:'Gandalf & Pipin'}, color:'#6a3fb0', vol:3, pts:[
    [42.5,49,1],[48,55,1],[52,61,1],[56.5,66,1] ] },
  // Aragorn: the Paths of the Dead → Erech → Pelargir → and up the Anduin by ship to the Pelennor
  { id:'rotk-aragorn', group:{en:'Aragorn’s ride',cs:'Aragornova jízda'}, color:'#e07b1f', vol:3, pts:[
    [46.5,64,2],[44.5,66,2],[47,71,4],[50,75,4],[53,77,4],[54.5,72,6],[55.5,69,6],[56,67,6] ] },
  // The Riders of Rohan ride to the aid of Gondor
  { id:'rotk-rohan', group:{en:'The Riders of Rohan',cs:'Rohanská jízda'}, color:'#17a0a0', vol:3, pts:[
    [46.5,64,3],[50,64,5],[53.5,65.5,5],[56,67,6] ] },
  // Frodo & Sam go on across Mordor to Mount Doom, then to Cormallen (same green — connects at the pass)
  { id:'rotk-frodo', group:{en:'Frodo & Sam',cs:'Frodo & Sam'}, color:'#2e8b57', vol:3, pts:[
    [61,66,11],[62.5,66.5,12],[63,67,13],[61,61,14],[60,57.5,14] ] },
  // The host of the West marches from Minas Tirith to the Black Gate (the diversion)
  { id:'rotk-host', group:{en:'March to the Black Gate',cs:'Pochod k Černé bráně'}, color:'#5a5a5a', vol:3, pts:[
    [56.5,66,10],[59,60,10],[61.5,55,10],[62,53.5,10] ] },
  // The long road home: Cormallen → across Rohan → the Shire → the Grey Havens
  { id:'rotk-home', group:{en:'The road home',cs:'Cesta domů'}, color:'#8a5a2b', vol:3, pts:[
    [60,57.5,15],[52,60,16],[46,62,16],[41,47,17],[38,35,18],[36.5,30,18],[30.5,28,18],[26,27,19],[22,26,19] ] }
];
