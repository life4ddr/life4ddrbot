//function that returns a discord icon code based on a rank

module.exports = {
    getDiscordIcon: function(rank) {
       
        var discordemoji="";

  if (rank == "Gold I" || rank ==  "Gold I (P)")
  {
    discordemoji = "<:g1:530666992189964309>";
  }
  else if (rank == "Gold II" || rank ==  "Gold II (P)")
  {
    discordemoji = "<:g2:530667245911670784>";
  }
  else if (rank == "Gold III" || rank ==  "Gold III (P)")
  {
    discordemoji = "<:g3:530667268099670016>";
  }
  else if (rank == "Gold IV" || rank ==  "Gold IV (P)")
  {
    discordemoji = "<:g4:825469563965407283>";
  }
  else if (rank == "Gold V" || rank ==  "Gold V (P)")
  {
    discordemoji = "<:g5:825469581481082940>";
  }
  else if (rank == "Silver I" || rank == "Silver I (P)")
  {
    discordemoji = "<:s1:530666613595308034>";
  }
  else if (rank == "Silver II"  || rank ==  "Silver II (P)")
  {
    discordemoji = "<:s2:530666638903738379>";
  }
  else if (rank == "Silver III"  || rank ==  "Silver III (P)")
  {
    discordemoji = "<:s3:530666660051419136>";
  }
  else if (rank == "Silver IV"  || rank ==  "Silver IV (P)")
  {
    discordemoji = "<:s4:825469523855540274>";
  }
  else if (rank == "Silver V"  || rank ==  "Silver V (P)")
  {
    discordemoji = "<:s5:825469538685419550>";
  }
  else if (rank == "Bronze I"  || rank ==  "Bronze I (P)")
  {
    discordemoji = "<:b1:530665305694011404>";
  }
  else if (rank == "Bronze II"  || rank ==  "Bronze II (P)")
  {
    discordemoji = "<:b2:530665345858666496>";
  }
  else if (rank == "Bronze III"  || rank ==  "Bronze III (P)")
  {
    discordemoji = "<:b3:530665367417389097>";
  }
  else if (rank == "Bronze IV"  || rank ==  "Bronze IV (P)")
  {
    discordemoji = "<:b4:825469480623931482>";
  }
  else if (rank == "Bronze V"  || rank ==  "Bronze V (P)")
  {
    discordemoji = "<:b5:825469496742903828>";
  }
  else if (rank == "Diamond (P)")
  {
    discordemoji = "<:d1:530667766487842826>";
  }
  else if (rank == "Diamond I")
  {
    discordemoji = "<:d1:530667766487842826>";
  }
  else if (rank == "Diamond II")
  {
    discordemoji = "<:d2:530667779775397889>";
  }
  else if (rank == "Diamond III")
  {
    discordemoji = "<:d3:530667792303783937>";
  }
  else if (rank == "Diamond IV")
  {
    discordemoji = "<:d4:825469702008340550>";
  }
  else if (rank == "Diamond V")
  {
    discordemoji = "<:d5:825469716003815465>";
  }
  else if (rank == "Cobalt (P)")
  {
    discordemoji = "<:c1:530667803498250252>";
  }
  else if (rank == "Cobalt I")
  {
    discordemoji = "<:c1:530667803498250252>";
  }
  else if (rank == "Cobalt II")
  {
    discordemoji = "<:c2:530667816836399114>";
  }
  else if (rank == "Cobalt III")
  {
    discordemoji = "<:c3:530667834418921482>";
  }
  else if (rank == "Cobalt IV")
  {
    discordemoji = "<:c4:825469738154852362>";
  }
  else if (rank == "Cobalt V")
  {
    discordemoji = "<:c5:825469750825189427>";
  }
  else if (rank == "Copper I" || rank ==  "Copper I (P)")
  {
    discordemoji = "<:cp1:540808051284901898>";
  }
  else if (rank == "Copper II" || rank ==  "Copper II (P)")
  {
    discordemoji = "<:cp2:540808115994492948>";
  }
  else if (rank == "Copper III" || rank ==  "Copper III (P)")
  {
    discordemoji = "<:cp3:540808178108203018>";
  }
  else if (rank == "Copper IV" || rank ==  "Copper IV (P)")
  {
    discordemoji = "<:cp4:825469237954084893>";
  }
  else if (rank == "Copper V" || rank ==  "Copper V (P)")
  {
    discordemoji = "<:cp5:825469270259269672>";
  }
  else if (rank == "Amethyst (P)")
  {
    discordemoji = "<:a1:837270276634705991>";
  }
  else if (rank == "Amethyst I")
  {
    discordemoji = "<:a1:837270276634705991>";
  }
  else if (rank == "Amethyst II")
  {
    discordemoji = "<:a2:540807915850956810>";
  }
  else if (rank == "Amethyst III")
  {
    discordemoji = "<:a3:837270327514890280>";
  }
  else if (rank == "Amethyst IV")
  {
    discordemoji = "<:a4:825469782458499083>";
  }
  else if (rank == "Amethyst V")
  {
    discordemoji = "<:a5:837270346096181258>";
  }
  else if (rank == "Emerald I" || rank == "Emerald (P)" || rank == "Emerald I (P)")
  {
    discordemoji = "<:e1:592474998820569088>";
  }
  else if (rank == "Emerald II")
  {
    discordemoji = "<:e2:592474998367715347>";
  }
  else if (rank == "Emerald III")
  {
    discordemoji = "<:e3:592474998564716544>";
  }
  else if (rank == "Emerald IV")
  {
    discordemoji = "<:e4:825469824347406348>";
  }
  else if (rank == "Emerald V")
  {
    discordemoji = "<:e5:825469838125826093>";
  }
  else if (rank == "Platinum I" || rank =="Platinum I (P)" || rank == "Platinum (P)")
  {
    discordemoji = "<:p1:645457791942918164>";
  }
  else if (rank == "Platinum II" || rank =="Platinum II (P)")
  {
    discordemoji = "<:p2:645457792022347806>";
  }
  else if (rank == "Platinum III" || rank =="Platinum III (P)")
  {
    discordemoji = "<:p3:645457792081330193>";
  }
  else if (rank == "Platinum IV" || rank =="Platinum IV (P)")
  {
    discordemoji = "<:p4:825469652532592681>";
  }
  else if (rank == "Platinum V" || rank =="Platinum V (P)")
  {
    discordemoji = "<:p5:825469675420385371>";
  }
  else if (rank == "Onyx I" || rank == "Onyx (P)" || rank == "Onyx I (P)")
  {
    discordemoji = "<:on1:825471342387134474>";
  }
  else if (rank == "Onyx II")
  {
    discordemoji = "<:on2:825471359408275516>";
  }
  else if (rank == "Onyx III")
  {
    discordemoji = "<:on3:825471377259626566>";
  }
  else if (rank == "Onyx IV")
  {
    discordemoji = "<:on4:825471394988294156>";
  }
  else if (rank == "Onyx V")
  {
    discordemoji = "<:on5:825471412578811955>";
  }
  else if (rank == "Pearl I")
  {

  }
  else if (rank == "Pearl II")
  {

  }
  else if (rank == "Pearl III")
  {

  }
  else if (rank == "Pearl IV")
  {

  }
  else if (rank == "Pearl V")
  {
    
  }


  return discordemoji;

       }
   };