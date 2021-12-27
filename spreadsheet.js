//Life4DDRBot
//Created by Steve Sefchick
//Program curated by the LIFE4 Admin Team
//2019 - 2021
//Tweets to @Life4DDRBot
//built using NodeJS

//TODO: Dependabot updates
//TODO: Add discord messaging

//TODO: Code cleanup, create another .js for functions
//TODO: ^ Images
//TODO: ^ Icons
//TODO: ^ Queries

//TODO: Add detailed error handling
//TODO: ^ Add try/catch that works
//TODO: ^ Auto disable bot
//TODO: ^ Discord error messaging

const fs = require('fs');
const readline = require('readline');
require('dotenv').config();

//functions
//image/icon functions
var twitterTrialImageFunction = require('./image_icon_functions/getTwitterTrialImageURL.js');
var twitterImageFunction = require('./image_icon_functions/getTwitterImageURL.js');

//twitter
var twit = require('twit');
var config = require('./config.js');
var Twitter = new twit(config);

//discord
var Discord = require('discord.js');
//var Intents = require('discord.js');
//var bot = new Discord.Client({ intents: [Intents.Guild] });
//var bot = new Discord.Client({ ws: { intents: ['GUILD_MEMBERS'] }});
var bot = new Discord.Client();

var adminchannel;
var playerrankupchannel;
var trialrankupchannel;
var rankupsroyalechannel;

//waitfor
var wait = require('wait.for');


bot.login(process.env.DISCORD_BOT_TOKEN);

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);

    //var boy = bot.users.fetch('');

    //const members = guild.members.fetch().then((user) => {
    //  console.log(user);
    //}).catch(console.error);


    wait.launchFiber(LIFE4sequence);
  });


//mysql
var mysql = require('mysql');
var connection;



//connect to rankup channels
//give it some time to connect
function connectToRankupChannels(callback){

  setTimeout( function(){

    //connecting to rankup channels
    adminchannel = bot.channels.cache.get('596168285477666832');
    playerrankupchannel= bot.channels.cache.get('530616617571319809');
    trialrankupchannel= bot.channels.cache.get('556390024938258433');
    rankupsroyalechannel= bot.channels.cache.get('923765429518884895');

      callback(null,"done");

    
}, 1000);

};


var getDiscordIcon = function(rank)
{
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


  return discordemoji;
}


function getDiscordLampIcon(lampname,callback){
  setTimeout( function(){

    var discordemoji="";
    if (lampname == "Great Full Combo")
    {
      discordemoji = "<:GreatLamp:530924491522441217>, ";
    }
    else if (lampname == "LIFE4 Clear")
    {
      discordemoji = "<:RedLamp:530924491971493928>, ";
    }
    else if (lampname == "Perfect Full Combo")
    {
      discordemoji = "<:PerfectLamp:530924491870830592>, ";
    }
    else if (lampname == "Good Full Combo")
    {
      discordemoji = "<:GoodLamp:530924491824431113>, ";
    }
    else if (lampname == "Marvelous Full Combo")
    {
      discordemoji = "<:MarvelousLamp:530924491853791251>, ";
    }
    else
    {
      discordemoji="";
    }
    
      callback(null,discordemoji);

      
    
}, 25);

}; 

var getTrialDiscordIcon = function(rank)
{
  var discordemoji="";

  if (rank == "Gold")
  {
    discordemoji = "<:g5:825469581481082940>";
  }
  else if (rank == "Silver")
  {
    discordemoji = "<:s5:825469538685419550>";
  }
  else if (rank == "Bronze")
  {
    discordemoji = "<:b5:825469496742903828>";
  }
  else if (rank == "Diamond")
  {
    discordemoji = "<:d5:825469716003815465>";
  }
  else if (rank == "Platinum")
  {
    discordemoji = "<:p5:825469675420385371>";
  }
  else if (rank == "Cobalt")
  {
    discordemoji = "<:c5:825469750825189427>";
  }
  else if (rank == "Amethyst")
  {
    discordemoji = "<:a5:837270346096181258>";
  }
  else if (rank == "Emerald")
  {
    discordemoji = "<:e5:825469838125826093>";
  }
  else if (rank == "Onyx")
  {
    discordemoji = "<:on5:825471412578811955>";
  }

  //special
  else if (rank == "Wood/Bronze/Silver")
  {
    discordemoji ="<:cp3:540808178108203018> <:b3:530665367417389097> <:s3:530666660051419136>";
  }
  else if (rank == "Amethyst and Above")
  {
    discordemoji ="<:a3:540807991373594633> <:e3:592474998564716544>";
  }

  return discordemoji;
}

function getTrialMetaKeyFieldNameOrLevel(trialname,nameorlevel,callback)
{
  //name_ex = ex score
  //name_minus = minus ex score
  //level = trial level
  //rankingview = view mapping for overall ranking

  setTimeout( function(){

    var returnedvalue;

    if (trialname=="Devotion")
    {
      if (nameorlevel=="name_ex")
      {
        returnedvalue="trial_Devotion_ex";
      }
      else if (nameorlevel=="name_minus")
      {
        returnedvalue="trial_Devotion_missing_ex";
      }
      else if (nameorlevel=="level")
      {
        returnedvalue=12;
      }
      else if (nameorlevel=="rankingview")
      {
        returnedvalue="wp_trial_devotion_rankings";
      }
    }
    else if (trialname=="Heartbreak")
    {
      if (nameorlevel=="name_ex")
      {
        returnedvalue="trial_Heartbreak_ex";
      }
      else if (nameorlevel=="name_minus")
      {
        returnedvalue="trial_Heartbreak_missing_ex";
      }
      else if (nameorlevel=="level")
      {
        returnedvalue=12;
      }
      else if (nameorlevel=="rankingview")
      {
        returnedvalue="wp_trial_heartbreak_rankings";
      }
    }
    else if (trialname=="Believe")
    {
      if (nameorlevel=="name_ex")
      {
        returnedvalue="trial_Believe_ex";
      }
      else if (nameorlevel=="name_minus")
      {
        returnedvalue="trial_Believe_missing_ex";
      }
      else if (nameorlevel=="level")
      {
        returnedvalue=12;
      }
      else if (nameorlevel=="rankingview")
      {
        returnedvalue="wp_trial_believe_rankings";
      }
    }
    else if (trialname=="Celestial")
    {
      if (nameorlevel=="name_ex")
      {
        returnedvalue="trial_Celestial_ex";
      }
      else if (nameorlevel=="name_minus")
      {
        returnedvalue="trial_Celestial_missing_ex";
      }
      else if (nameorlevel=="level")
      {
        returnedvalue=13;
      }
      else if (nameorlevel=="rankingview")
      {
        returnedvalue="wp_trial_celestial_rankings";
      }
    }
    else if (trialname=="Gospel")
    {
      if (nameorlevel=="name_ex")
      {
        returnedvalue="trial_Gospel_ex";
      }
      else if (nameorlevel=="name_minus")
      {
        returnedvalue="trial_Gospel_missing_ex";
      }
      else if (nameorlevel=="level")
      {
        returnedvalue=13;
      }
      else if (nameorlevel=="rankingview")
      {
        returnedvalue="wp_trial_gospel_rankings";
      }
    }
    else if (trialname=="Mainframe")
    {
      if (nameorlevel=="name_ex")
      {
        returnedvalue="trial_Mainframe_ex";
      }
      else if (nameorlevel=="name_minus")
      {
        returnedvalue="trial_Mainframe_missing_ex";
      }
      else if (nameorlevel=="level")
      {
        returnedvalue=13;
      }
      else if (nameorlevel=="rankingview")
      {
        returnedvalue="wp_trial_mainframe_rankings";
      }
    }
    else if (trialname=="Primal")
    {
      if (nameorlevel=="name_ex")
      {
        returnedvalue="trial_Primal_ex";
      }
      else if (nameorlevel=="name_minus")
      {
        returnedvalue="trial_Primal_missing_ex";
      }
      else if (nameorlevel=="level")
      {
        returnedvalue=13;
      }
      else if (nameorlevel=="rankingview")
      {
        returnedvalue="wp_trial_primal_rankings";
      }
    }
    else if (trialname=="Species")
    {
      if (nameorlevel=="name_ex")
      {
        returnedvalue="trial_Species_ex";
      }
      else if (nameorlevel=="name_minus")
      {
        returnedvalue="trial_Species_missing_ex";
      }
      else if (nameorlevel=="level")
      {
        returnedvalue=13;
      }
      else if (nameorlevel=="rankingview")
      {
        returnedvalue="wp_trial_species_rankings";
      }
    }
    else if (trialname=="Passport")
    {
      if (nameorlevel=="name_ex")
      {
        returnedvalue="trial_Passport_ex";
      }
      else if (nameorlevel=="name_minus")
      {
        returnedvalue="trial_Passport_missing_ex";
      }
      else if (nameorlevel=="level")
      {
        returnedvalue=13;
      }
      else if (nameorlevel=="rankingview")
      {
        returnedvalue="wp_trial_passport_rankings";
      }
    }
    else if (trialname=="Daybreak")
    {
      if (nameorlevel=="name_ex")
      {
        returnedvalue="trial_Daybreak_ex";
      }
      else if (nameorlevel=="name_minus")
      {
        returnedvalue="trial_Daybreak_missing_ex";
      }
      else if (nameorlevel=="level")
      {
        returnedvalue=14;
      }
      else if (nameorlevel=="rankingview")
      {
        returnedvalue="wp_trial_daybreak_rankings";
      }
    }
    else if (trialname=="Upheaval")
    {
      if (nameorlevel=="name_ex")
      {
        returnedvalue="trial_Upheaval_ex";
      }
      else if (nameorlevel=="name_minus")
      {
        returnedvalue="trial_Upheaval_missing_ex";
      }
      else if (nameorlevel=="level")
      {
        returnedvalue=14;
      }
      else if (nameorlevel=="rankingview")
      {
        returnedvalue="wp_trial_upheaval_rankings";
      }
    }
    else if (trialname=="Superstar")
    {
      if (nameorlevel=="name_ex")
      {
        returnedvalue="trial_Superstar_ex";
      }
      else if (nameorlevel=="name_minus")
      {
        returnedvalue="trial_Superstar_missing_ex";
      }
      else if (nameorlevel=="level")
      {
        returnedvalue=14;
      }
      else if (nameorlevel=="rankingview")
      {
        returnedvalue="wp_trial_superstar_rankings";
      }
    }
    else if (trialname=="Countdown")
    {
      if (nameorlevel=="name_ex")
      {
        returnedvalue="trial_Countdown_ex";
      }
      else if (nameorlevel=="name_minus")
      {
        returnedvalue="trial_Countdown_missing_ex";
      }
      else if (nameorlevel=="level")
      {
        returnedvalue=14;
      }
      else if (nameorlevel=="rankingview")
      {
        returnedvalue="wp_trial_countdown_rankings";
      }
    }
    else if (trialname=="Hellscape")
    {
      if (nameorlevel=="name_ex")
      {
        returnedvalue="trial_Hellscape_ex";
      }
      else if (nameorlevel=="name_minus")
      {
        returnedvalue="trial_Hellscape_missing_ex";
      }
      else if (nameorlevel=="level")
      {
        returnedvalue=15;
      }
      else if (nameorlevel=="rankingview")
      {
        returnedvalue="wp_trial_hellscape_rankings";
      }
    }
    else if (trialname=="Clockwork")
    {
      if (nameorlevel=="name_ex")
      {
        returnedvalue="trial_Clockwork_ex";
      }
      else if (nameorlevel=="name_minus")
      {
        returnedvalue="trial_Clockwork_missing_ex";
      }
      else if (nameorlevel=="level")
      {
        returnedvalue=15;
      }
      else if (nameorlevel=="rankingview")
      {
        returnedvalue="wp_trial_clockwork_rankings";
      }
    }
    else if (trialname=="Heatwave")
    {
      if (nameorlevel=="name_ex")
      {
        returnedvalue="trial_Heatwave_ex";
      }
      else if (nameorlevel=="name_minus")
      {
        returnedvalue="trial_Heatwave_missing_ex";
      }
      else if (nameorlevel=="level")
      {
        returnedvalue=15;
      }
      else if (nameorlevel=="rankingview")
      {
        returnedvalue="wp_trial_heatwave_rankings";
      }
    }
    else if (trialname=="Tempest")
    {
      if (nameorlevel=="name_ex")
      {
        returnedvalue="trial_Tempest_ex";
      }
      else if (nameorlevel=="name_minus")
      {
        returnedvalue="trial_Tempest_missing_ex";
      }
      else if (nameorlevel=="level")
      {
        returnedvalue=15;
      }
      else if (nameorlevel=="rankingview")
      {
        returnedvalue="wp_trial_tempest_rankings";
      }
    }
    else if (trialname=="Mythos")
    {
      if (nameorlevel=="name_ex")
      {
        returnedvalue="trial_Mythos_ex";
      }
      else if (nameorlevel=="name_minus")
      {
        returnedvalue="trial_Mythos_missing_ex";
      }
      else if (nameorlevel=="level")
      {
        returnedvalue=15;
      }
      else if (nameorlevel=="rankingview")
      {
        returnedvalue="wp_trial_mythos_rankings";
      }
    }
    else if (trialname=="Pharaoh")
    {
      if (nameorlevel=="name_ex")
      {
        returnedvalue="trial_Pharaoh_ex";
      }
      else if (nameorlevel=="name_minus")
      {
        returnedvalue="trial_Pharaoh_missing_ex";
      }
      else if (nameorlevel=="level")
      {
        returnedvalue=15;
      }
      else if (nameorlevel=="rankingview")
      {
        returnedvalue="wp_trial_pharaoh_rankings";
      }
    }
    else if (trialname=="Rendition")
    {
      if (nameorlevel=="name_ex")
      {
        returnedvalue="trial_Rendition_ex";
      }
      else if (nameorlevel=="name_minus")
      {
        returnedvalue="trial_Rendition_missing_ex";
      }
      else if (nameorlevel=="level")
      {
        returnedvalue=15;
      }
      else if (nameorlevel=="rankingview")
      {
        returnedvalue="wp_trial_rendition_rankings";
      }
    }
    else if (trialname=="Wanderlust")
    {
      if (nameorlevel=="name_ex")
      {
        returnedvalue="trial_Wanderlust_ex";
      }
      else if (nameorlevel=="name_minus")
      {
        returnedvalue="trial_Wanderlust_missing_ex";
      }
      else if (nameorlevel=="level")
      {
        returnedvalue=15;
      }
      else if (nameorlevel=="rankingview")
      {
        returnedvalue="wp_trial_wanderlust_rankings";
      }
    }
    else if (trialname=="Circadia")
    {
      if (nameorlevel=="name_ex")
      {
        returnedvalue="trial_Circadia_ex";
      }
      else if (nameorlevel=="name_minus")
      {
        returnedvalue="trial_Circadia_missing_ex";
      }
      else if (nameorlevel=="level")
      {
        returnedvalue=16;
      }
      else if (nameorlevel=="rankingview")
      {
        returnedvalue="wp_trial_circadia_rankings";
      }
    }
    else if (trialname=="Snowdrift")
    {
      if (nameorlevel=="name_ex")
      {
        returnedvalue="trial_Snowdrift_ex";
      }
      else if (nameorlevel=="name_minus")
      {
        returnedvalue="trial_Snowdrift_missing_ex";
      }
      else if (nameorlevel=="level")
      {
        returnedvalue=16;
      }
      else if (nameorlevel=="rankingview")
      {
        returnedvalue="wp_trial_snowdrift_rankings";
      }
    }
    else if (trialname=="Paradox")
    {
      if (nameorlevel=="name_ex")
      {
        returnedvalue="trial_Paradox_ex";
      }
      else if (nameorlevel=="name_minus")
      {
        returnedvalue="trial_Paradox_missing_ex";
      }
      else if (nameorlevel=="level")
      {
        returnedvalue=16;
      }
      else if (nameorlevel=="rankingview")
      {
        returnedvalue="wp_trial_paradox_rankings";
      }
    }
    else if (trialname=="Spectacle")
    {
      if (nameorlevel=="name_ex")
      {
        returnedvalue="trial_Spectacle_ex";
      }
      else if (nameorlevel=="name_minus")
      {
        returnedvalue="trial_Spectacle_missing_ex";
      }
      else if (nameorlevel=="level")
      {
        returnedvalue=16;
      }
      else if (nameorlevel=="rankingview")
      {
        returnedvalue="wp_trial_spectacle_rankings";
      }
    }
    else if (trialname=="Inhuman")
    {
      if (nameorlevel=="name_ex")
      {
        returnedvalue="trial_Inhuman_ex";
      }
      else if (nameorlevel=="name_minus")
      {
        returnedvalue="trial_Inhuman_missing_ex";
      }
      else if (nameorlevel=="level")
      {
        returnedvalue=16;
      }
      else if (nameorlevel=="rankingview")
      {
        returnedvalue="wp_trial_inhuman_rankings";
      }
    }
    else if (trialname=="Chemical")
    {
      if (nameorlevel=="name_ex")
      {
        returnedvalue="trial_Chemical_ex";
      }
      else if (nameorlevel=="name_minus")
      {
        returnedvalue="trial_Chemical_missing_ex";
      }
      else if (nameorlevel=="level")
      {
        returnedvalue=17;
      }
      else if (nameorlevel=="rankingview")
      {
        returnedvalue="wp_trial_chemical_rankings";
      }
    }
    else if (trialname=="Ascension")
    {
      if (nameorlevel=="name_ex")
      {
        returnedvalue="trial_Ascension_ex";
      }
      else if (nameorlevel=="name_minus")
      {
        returnedvalue="trial_Ascension_missing_ex";
      }
      else if (nameorlevel=="level")
      {
        returnedvalue=17;
      }
      else if (nameorlevel=="rankingview")
      {
        returnedvalue="wp_trial_ascension_rankings";
      }
    }
    else if (trialname=="Quantum")
    {
      if (nameorlevel=="name_ex")
      {
        returnedvalue="trial_Quantum_ex";
      }
      else if (nameorlevel=="name_minus")
      {
        returnedvalue="trial_Quantum_missing_ex";
      }
      else if (nameorlevel=="level")
      {
        returnedvalue=18;
      }
      else if (nameorlevel=="rankingview")
      {
        returnedvalue="wp_trial_quantum_rankings";
      }
    }
    else if (trialname=="Origin")
    {
      if (nameorlevel=="name_ex")
      {
        returnedvalue="trial_Origin_ex";
      }
      else if (nameorlevel=="name_minus")
      {
        returnedvalue="trial_Origin_missing_ex";
      }
      else if (nameorlevel=="level")
      {
        returnedvalue=18;
      }
      else if (nameorlevel=="rankingview")
      {
        returnedvalue="wp_trial_origin_rankings";
      }
    }



    callback(null,returnedvalue)

}, 25);

};

function getBotStatus(callback){
  setTimeout( function(){

    var appStatus = "SELECT varValue from life4controls where varName='appStatus'";


    connection.query(appStatus, function (error, results) {
      if (error) throw error;
      callback(null,results)

    });
    
}, 25);

}; 




//gets COUNT of approved forms with type
function getNumberOfApprovedFormsWithType(callback){

  setTimeout( function(){

    var getQuery = "select pm.post_id as 'post_id', (SELECT pm3.meta_value from wp_kikf_postmeta pm3 where pm3.meta_key='state' and pm3.meta_value='approved' and pm.post_id=pm3.post_id) as 'approvalvalue',(SELECT fm.title from wp_kikf_postmeta pm2, wp_kikf_nf3_forms fm where pm2.meta_key='_form_id' and pm.post_id=pm2.post_id and pm2.meta_value=fm.id) as 'formtype' from wp_kikf_postmeta pm where pm.meta_key='state' and pm.meta_value='approved'";


    connection.query(getQuery, function (error, results) {
      if (error) throw error;
      var count=0;
      for (var i=0;i<results.length;i++)
      {
        if (results[i].formtype=="Placement" || results[i].formtype=="Comprehensive Placement" || results[i].formtype=="Trial Submission" || results[i].formtype=="Rankup" || results[i].formtype=="Submit Scores!")
        {
          count+=1;
        }
      }

      console.log(count);
      callback(null,count)

    });
    
}, 25);

};


//gets only latest post
//use form_id to retrieve the form type from the form meta table
function getNextApprovedQueue(callback){

  setTimeout( function(){

    var getQuery = "select pm.post_id as 'post_id',(SELECT fm.title from wp_kikf_postmeta pm2, wp_kikf_nf3_forms fm where pm2.meta_key='_form_id' and pm.post_id=pm2.post_id and pm2.meta_value=fm.id) as 'formtype' from wp_kikf_postmeta pm where pm.meta_key='state' and pm.meta_value='approved'";
    var nextselected;

    connection.query(getQuery, function (error, results) {
      if (error) throw error;
      for (var i=0;i<results.length;i++)
      {
        if (nextselected==undefined && (results[i].formtype=="Placement" || results[i].formtype=="Comprehensive Placement" || results[i].formtype=="Trial Submission" || results[i].formtype=="Rankup" || results[i].formtype=="Submit Scores!"))
        {
          nextselected=results[i];
        }
      }      
      console.log(nextselected);
      callback(null,nextselected)

    });
    
}, 25);

};




//get player name
//meta value 42 = name
function getPostPlayerName(postid,callback){

  setTimeout( function(){

    var getQuery = "select meta_value from wp_kikf_postmeta where post_id="+postid+" and meta_key='_field_42'";

    connection.query(getQuery, function (error, results) {
      if (error) throw error;
      //console.log(results);
      callback(null,results[0].meta_value)

    });
    
}, 25);

};

//get player rank
//meta value 5 = rank
function getPostPlayerRank(postid,callback){

  setTimeout( function(){

    var getQuery = "select meta_value from wp_kikf_postmeta where post_id="+postid+" and meta_key='_field_5'";

    connection.query(getQuery, function (error, results) {
      if (error) throw error;
      //console.log(results);
      callback(null,results[0].meta_value)

    });
    
}, 25);

};

//get player subrank
//meta value 6 = subrank
function getPostPlayerSubRank(postid,callback){

  setTimeout( function(){

    var getQuery = "select meta_value from wp_kikf_postmeta where post_id="+postid+" and meta_key='_field_6'";

    connection.query(getQuery, function (error, results) {
      if (error) throw error;
      //console.log(results);
      callback(null,results[0].meta_value)

    });
    
}, 25);

};

//get player player_id
//meta value 41 = user_fk
function getPostPlayerID(postid,callback){

  setTimeout( function(){

    var getQuery = "select meta_value from wp_kikf_postmeta where post_id="+postid+" and meta_key='_field_41'";

    connection.query(getQuery, function (error, results) {
      if (error) throw error;
      //console.log(results);
      callback(null,results[0].meta_value)

    });
    
}, 25);

};


//get placement player_id
//meta value 58 = user_fk
function getPlacementPostPlayerID(postid,callback){

  setTimeout( function(){

    var getQuery = "select meta_value from wp_kikf_postmeta where post_id="+postid+" and meta_key='_field_58'";

    connection.query(getQuery, function (error, results) {
      if (error) throw error;
      callback(null,results[0].meta_value)

    });
    
}, 25);

};

//get RR submission player_id
//meta value 185 = user_fk
function getRRsubmissionPlayerID(postid,callback){

  setTimeout( function(){

    var getQuery = "select meta_value from wp_kikf_postmeta where post_id="+postid+" and meta_key='_field_185'";

    connection.query(getQuery, function (error, results) {
      if (error) throw error;
      callback(null,results[0].meta_value)

    });
    
}, 25);

};

//get RR all submissions for that player
function getRRAllPlayerSubmissions(playerid,callback){

  setTimeout( function(){

    var getQuery = "select pm.post_id as 'post_id', (SELECT pm3.meta_value from wp_kikf_postmeta pm3 where pm3.meta_key='state' and pm3.meta_value='approved' and pm.post_id=pm3.post_id) as 'approvalvalue', (SELECT pm4.meta_value from wp_kikf_postmeta pm4 where pm4.meta_key='_field_185' and pm4.meta_value="+playerid+" and pm.post_id=pm4.post_id) as 'username', (SELECT fm.title from wp_kikf_postmeta pm2, wp_kikf_nf3_forms fm where pm2.meta_key='_form_id' and pm.post_id=pm2.post_id and pm2.meta_value=fm.id) as 'formtype' from wp_kikf_postmeta pm where pm.meta_key='state' and pm.meta_value='approved'";

    connection.query(getQuery, function (error, results) {
      if (error) throw error;
      var postcount = [];
      for (var i=0;i<results.length;i++)
      {
        if (results[i].username!=undefined && results[i].formtype=="Submit Scores!")
        {
          postcount.push(results[i].post_id);
        }
      }      
      
      callback(null,postcount);

    });
    
}, 25);

};

//get RR submission player name
//meta value 187 = user_fk
function getRRsubmissionPlayerName(postid,callback){

  setTimeout( function(){

    var getQuery = "select meta_value from wp_kikf_postmeta where post_id="+postid+" and meta_key='_field_184'";

    connection.query(getQuery, function (error, results) {
      if (error) throw error;
      callback(null,results[0].meta_value)

    });
    
}, 25);

};

//get RR song name
//meta value 181 = rr song name
function getRRsubmissionTourneySongName(postid,callback){

  setTimeout( function(){

    var getQuery = "select meta_value from wp_kikf_postmeta where post_id="+postid+" and (meta_key='_field_181' or meta_key='_field_180' or meta_key='_field_178') and meta_value != ''";

    connection.query(getQuery, function (error, results) {
      if (error) throw error;
      var songcorrect = results[0].meta_value;
      if (results[0].meta_value == "DOWNER  UPPER")
      {
        songcorrect = "DOWNER & UPPER";
      }
      else if (results[0].meta_value == "Reach The Sky Without You")
      {
        songcorrect = "Reach The Sky, Without You";
      } 
      callback(null,songcorrect)

    });
    
}, 25);

};

//get RR song ex
//meta value 190 = ex song value
function getRRSubmissionEXScore(postid,callback){

  setTimeout( function(){

    var getQuery = "select meta_value from wp_kikf_postmeta where post_id="+postid+" and meta_key='_field_190'";

    connection.query(getQuery, function (error, results) {
      if (error) throw error;
      callback(null,results[0].meta_value)

    });
    
}, 25);

};

//RR Add string to end of ex score
function RRAddEXString(exvalue,minusexvalue,callback){

  setTimeout( function(){

      var newstring = exvalue + " EX " + "(" + minusexvalue + ") ";
      callback(null,newstring)

    
}, 25);

};

//get RR pb best
//meta value 191 = song letter score
function getRRSubmissionPersonalBestText(postid,callback){

  setTimeout( function(){

    var getQuery = "select meta_value from wp_kikf_postmeta where post_id="+postid+" and meta_key='_field_191'";

    connection.query(getQuery, function (error, results) {
      if (error) throw error;
      var returnedString="";
      if (results[0].meta_value="true")
      {
        returnedString="PB";
      }
      else
      {
        returnedString="";
      }
      callback(null,returnedString)

    });
    
}, 25);

};

//get RR song letter score
//meta value 189 = song letter score
function getRRSubmissionLetterScore(postid,callback){

  setTimeout( function(){

    var getQuery = "select meta_value from wp_kikf_postmeta where post_id="+postid+" and meta_key='_field_189'";

    connection.query(getQuery, function (error, results) {
      if (error) throw error;
      var lettervalue=results[0].meta_value;
      
      if (lettervalue=="AAP")
      {
        lettervalue="AA+, ";
      }
      else if (lettervalue=="Other")
      {
        lettervalue="";
      }
      else
      {
        lettervalue=results[0].meta_value+", ";
      }

      
      callback(null,lettervalue)

    });
    
}, 25);

};

//get RR -EX
function getRRMinusEXAmount(examount,songname,callback){

  setTimeout( function(){

      var totalexforsong;
      if (songname=="Beautiful Dream")
      {
        totalexforsong=1275;
      }
      else if (songname=="Condor")
      {
        totalexforsong=1638;
      }
      else if (songname=="Far east nightbird")
      {
        totalexforsong=1005;
      }
      else if (songname=="Emera")
      {
        totalexforsong=1851;
      }
      else if (songname=="Illegal Function Call")
      {
        totalexforsong=2133;
      }
      else if (songname=="DOWNER & UPPER")
      {
        totalexforsong=1251;
      }
      else if (songname=="Reach The Sky, Without You")
      {
        totalexforsong=1446;
      }
      else if (songname=="RISING FIRE HAWK")
      {
        totalexforsong=1221;
      }
      else if (songname =="ACES FOR ACES")
      {
        totalexforsong=2406;
      }

      var minusexamount = examount - totalexforsong;

      console.log(examount);
      console.log(totalexforsong);
      console.log(minusexamount);

      callback(null,minusexamount)

    
}, 25);

};

//get RR player team
function getRRSubmissionPlayerTeamID(playerid,callback){

  setTimeout( function(){

    var getQuery = "select rank_royale_team from wp_rr_rankings where user_id="+playerid+" limit 1";


    connection.query(getQuery, function (error, results) {
      if (error) throw error;
      callback(null,results[0].rank_royale_team)

    });
    
}, 25);

};

//get RR player division
function getRRSubmissionPlayerDivision(playerid,callback){

  setTimeout( function(){

    var getQuery = "select rank_royale_division from wp_rr_rankings where user_id="+playerid+" limit 1";


    connection.query(getQuery, function (error, results) {
      if (error) throw error;
      callback(null,results[0].rank_royale_division)

    });
    
}, 25);

};

//get RR player team id
//meta value 188 = song letter score
function getRRSubmissionLamp(postid,callback){

  setTimeout( function(){

    var getQuery = "select meta_value from wp_kikf_postmeta where post_id="+postid+" and meta_key='_field_188'";

    connection.query(getQuery, function (error, results) {
      if (error) throw error;
      callback(null,results[0].meta_value)

    });
    
}, 25);

};

//get comp placement player_id
//meta value 67 = user_fk
function getCompPlacementPostPlayerID(postid,callback){

  setTimeout( function(){

    var getQuery = "select meta_value from wp_kikf_postmeta where post_id="+postid+" and meta_key='_field_67'";

    connection.query(getQuery, function (error, results) {
      if (error) throw error;
      callback(null,results[0].meta_value)

    });
    
}, 25);

};


//get placement player_id
//meta value 59 = player name
function getPlacementPostPlayerName(postid,callback){

  setTimeout( function(){

    var getQuery = "select meta_value from wp_kikf_postmeta where post_id="+postid+" and meta_key='_field_59'";

    connection.query(getQuery, function (error, results) {
      if (error) throw error;
      callback(null,results[0].meta_value)

    });
    
}, 25);

};

//get comp placement player_id
//meta value 68 = player name
function getCompPlacementPostPlayerName(postid,callback){

  setTimeout( function(){

    var getQuery = "select meta_value from wp_kikf_postmeta where post_id="+postid+" and meta_key='_field_68'";

    connection.query(getQuery, function (error, results) {
      if (error) throw error;
      callback(null,results[0].meta_value)

    });
    
}, 25);

};

//get placement player rank
//use player profile as that is what got approved
function getPlacementPostPlayerRank(userid,callback){

  setTimeout( function(){

    var getQuery = "SELECT meta_value FROM wp_kikf_usermeta where user_id="+userid+" && meta_key='rank'";

    connection.query(getQuery, function (error, results) {
      if (error) throw error;
      callback(null,results[0].meta_value)

    });
    
}, 25);

};

//get player player_id
//meta value 53 = user_fk
function getTrialPostPlayerID(postid,callback){

  setTimeout( function(){

    var getQuery = "select meta_value from wp_kikf_postmeta where post_id="+postid+" and meta_key='_field_53'";

    connection.query(getQuery, function (error, results) {
      if (error) throw error;
      //console.log(results);
      callback(null,results[0].meta_value)

    });
    
}, 25);

};

//get player name
//meta value 54 = name
function getTrialPostName(postid,callback){

  setTimeout( function(){

    var getQuery = "select meta_value from wp_kikf_postmeta where post_id="+postid+" and meta_key='_field_54'";

    connection.query(getQuery, function (error, results) {
      if (error) throw error;
      //console.log(results);
      callback(null,results[0].meta_value)

    });
    
}, 25);

};

//get trial title
//meta value 46 = trial title
function getTrialTitle(postid,callback){

  setTimeout( function(){

    var getQuery = "select meta_value from wp_kikf_postmeta where post_id="+postid+" and meta_key='_field_46'";

    connection.query(getQuery, function (error, results) {
      if (error) throw error;
      //console.log(results);
      callback(null,results[0].meta_value)

    });
    
}, 25);

};

//get trial title
//meta value 46 = trial title
function getTrialRank(postid,callback){

  setTimeout( function(){

    var getQuery = "select meta_value from wp_kikf_postmeta where post_id="+postid+" and meta_key='_field_49'";

    connection.query(getQuery, function (error, results) {
      if (error) throw error;
      //console.log(results);
      callback(null,results[0].meta_value)

    });
    
}, 25);

};


//get player twitter handle
function getProfileTwitterHandle(playerid,callback){

  setTimeout( function(){

    var getQuery = "SELECT meta_value FROM wp_kikf_usermeta where meta_key='twitter_handle' and user_id="+playerid+"";

    connection.query(getQuery, function (error, results) {
      if (error) throw error;
      //console.log(results);
      callback(null,results[0].meta_value)

    });
    
}, 25);

};

//get player discord handle
function getProfileDiscordHandle(playerid,callback){

  setTimeout( function(){

    var getQuery = "SELECT meta_value FROM wp_kikf_usermeta where meta_key='discord_handle' and user_id="+playerid+"";

    connection.query(getQuery, function (error, results) {
      if (error) throw error;
      callback(null,results[0].meta_value)

    });
    
}, 25);

};


function getTrialEXMinusfromMapping(user_id,mappingvalue,callback){

  setTimeout( function(){

    var trialquery = "select meta_value from wp_kikf_usermeta where meta_key='"+mappingvalue+"' and user_id="+user_id+"";


    connection.query(trialquery, function (error, results) {
      if (error) throw error;
      callback(null,results[0].meta_value)

    });
    
}, 25);

}

function getTrialEXfromMapping(user_id,mappingvalue,callback){

  setTimeout( function(){

    var trialquery = "select meta_value from wp_kikf_usermeta where meta_key='"+mappingvalue+"' and user_id="+user_id+"";


    connection.query(trialquery, function (error, results) {
      if (error) throw error;
      callback(null,results[0].meta_value)

    });
    
}, 25);

}

function setRankingVariable(callback){

  setTimeout( function(){

    var trialquery = "set @ranking=0;";


    connection.query(trialquery, function (error, results) {
      if (error) throw error;
      callback(null,results)

    });
    
}, 25);

}

function getTrialUserRanking(user_id,viewmapping,callback){

  setTimeout( function(){

    var trialquery = "select * from ( select @ranking:=@ranking+1 as 'ranking', username,user_id,trial_ex from "+viewmapping+" order by trial_ex desc ) as rankings where user_id="+user_id+"";


    connection.query(trialquery, function (error, results) {
      if (error) throw error;
      callback(null,results[0].ranking)

    });
    
}, 25);

}


function announceUpdatePlayerTrialTwitter(playerName, playerRank,playerScore,playerDiff,playerTwitterHandle,trialName,numberRank,callback)
{
  setTimeout( function(){

    var post = "";
    var isEvent = false;
    if (trialName == "HALLOWED (13)")
    {
        isEvent = true;
    }
    
    if (isEvent == true)
    {
      if (playerTwitterHandle != "" && playerTwitterHandle != "undefined")
      {
        post = "Player " + playerName + " (" + playerTwitterHandle + ") scored " + playerScore + " EX " + playerDiff + " on the Limited Edition Trial " + trialName + " for a " + playerRank + " division rank of #"+numberRank+"!";
      }
      else
      {
        post = "Player " + playerName + " scored " + playerScore + " EX " + playerDiff + " on the Limited Edition Trial " + trialName + " for a " + playerRank + " division rank of #"+numberRank+"!";
      }
    }
    else if (isEvent == false)
    {
      if (playerTwitterHandle != "" && playerTwitterHandle != "undefined")
      {
        post = "Player " + playerName + " (" + playerTwitterHandle + ") has earned the " + playerRank + " Trial Rank for " + trialName + " with " + playerScore + " EX " + playerDiff + " for a Trial Ranking of #"+numberRank+"!";
      }
      else
      {
        post = "Player " + playerName + " has earned the " + playerRank + " Trial Rank for " + trialName + " with " + playerScore + " EX " + playerDiff + " for a Trial Ranking of #"+numberRank+"!";
      }
    }
    console.log(trialName + "||" + playerRank);
    
    //old
    //var b64content = fs.readFileSync(getTwitterTrialImageURL(trialName,playerRank), { encoding: 'base64' })
    //new
    var b64content = fs.readFileSync(twitterTrialImageFunction.getTwitterTrialImageURL(trialName,playerRank), { encoding: 'base64' });
    

    // get the new image media on twitter!
    
    Twitter.post('media/upload', { media_data: b64content }, function (err, data, response) {
      var mediaIdStr = data.media_id_string
      var altText = "LIFE4 Trial rankup"
      var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
    
      Twitter.post('media/metadata/create', meta_params, function (err, data, response) {
        if (!err) {
          // post the tweet!
          var params = { status: post.toString(), media_ids: [mediaIdStr] }
    
          Twitter.post('statuses/update', params, function (err, data, response) {
            console.log(data)
          })
        }
      })
    });


    callback(null,"done");


}, 1000);

}

function announceNewPlayerTwitter(playerName, playerRank,playerTwitterHandle,callback)
{
  setTimeout( function(){

    var twitterpost ="";
    if (playerTwitterHandle != "" && playerTwitterHandle != "undefined")
    {
      twitterpost = "Player " + playerName + " (" + playerTwitterHandle + ") has joined LIFE4! Their current rank is " + playerRank + "!";
    }
    else
    {
      twitterpost = "Player " + playerName + " has joined LIFE4! Their current rank is " + playerRank + "!";
    }

    //old
    //var b64content = fs.readFileSync(getTwitterImageURL(playerRank), { encoding: 'base64' })
    //new
    var b64content = fs.readFileSync(twitterImageFunction.getTwitterImageURL(playerRank), { encoding: 'base64' });

    

    // get the new image media on twitter!
    Twitter.post('media/upload', { media_data: b64content }, function (err, data, response) {
      var mediaIdStr = data.media_id_string
      var altText = "LIFE4 Player Rank"
      var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
    
      Twitter.post('media/metadata/create', meta_params, function (err, data, response) {
        if (!err) {
          // post the tweet!
          var params = { status: twitterpost.toString(), media_ids: [mediaIdStr] }
    
          Twitter.post('statuses/update', params, function (err, data, response) {
            console.log(data)
          })
        }
      })
    })


    callback(null,"done");


}, 1000);

}

function updateRRSubmissionsToBotAnnounced(postlist,callback){

  setTimeout( function(){

    console.log("updating");
    var updateall = "update wp_kikf_postmeta set meta_value='bot_announced' where meta_key='state' and meta_value='approved' and post_id in ("+postlist+")";

    connection.query(updateall, function (error, results) {
      if (error) throw error;
      callback(null,results)
    });
    
}, 25);

}

function updatedSubmissionToBotAnnounced(post_id,callback){

  setTimeout( function(){

    console.log("updating");
    var updateall = "update wp_kikf_postmeta set meta_value='bot_announced' where meta_key='state' and meta_value='approved' and post_id ="+post_id+"";
    console.log(updateall);

    connection.query(updateall, function (error, results) {
      if (error) throw error;
      callback(null,results)
    });
    
}, 25);

}

function announcePlayerRankupTwitter(playerName, playerRank,playerTwitterHandle,callback)
{
  setTimeout( function(){

    var twitterpost ="";
    if (playerTwitterHandle != "" && playerTwitterHandle != "undefined")
    {
      twitterpost = "Player " + playerName + " (" + playerTwitterHandle + ") has earned a new rank! They are now " + playerRank +"! Congratulations! ";
    }
    else
    {
      twitterpost = "Player " + playerName + " has earned a new rank! They are now " + playerRank +"! Congratulations! ";
    }

    console.log(twitterpost);

    //old
    //var b64content = fs.readFileSync(getTwitterImageURL(playerRank), { encoding: 'base64' })
    //new
    var b64content = fs.readFileSync(twitterImageFunction.getTwitterImageURL(playerRank), { encoding: 'base64' });       
    
    
    // get the new image media on twitter!
    

    Twitter.post('media/upload', { media_data: b64content }, function (err, data, response) {
      var mediaIdStr = data.media_id_string
      var altText = "LIFE4 Player Rank"
      var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
    
      Twitter.post('media/metadata/create', meta_params, function (err, data, response) {
        if (!err) {
          // post the tweet!
          var params = { status: twitterpost.toString(), media_ids: [mediaIdStr] }
    
          Twitter.post('statuses/update', params, function (err, data, response) {
            console.log(data)
          })
        }
      })
    })
    

    callback(null,"done");


}, 1000);

}


//TODO: Add Discord Handle
function announcePlayerRankupDiscord(playerName, playerRank,callback)
{
  setTimeout( function(){

    var discordpost = "Player " + playerName + " has earned a new rank! They are now " + playerRank +"! Congratulations! "  + getDiscordIcon(playerRank);

    console.log(discordpost);
    
    playerrankupchannel.send(discordpost)
    .then(msg => { msg.react(getDiscordIcon(playerRank))})
    .catch(console.error);

    callback(null,"done");


}, 750);

}


//TODO: Test discord announce
//TODO: Re-enable twitter
function announceNewPlayerDiscord(playerName, playerRank,playerDiscordHandle,callback)
{
  setTimeout( function(){

    /*
    //test new
    var discordpost="";
    
    if (playerDiscordHandle != "" && playerDiscordHandle != "undefined")
    {
      var userid = bot.users.find(u => u.tag === playerDiscordHandle).id;
      var id = "<@" + userid + ">";

      discordpost = "Player " + playerName + " (" + id + ") has joined LIFE4! Their current rank is " + playerRank + "! Welcome! "+ getDiscordIcon(playerRank);
    }
    else
    {
      discordpost = "Player " + playerName + " has joined LIFE4! Their current rank is " + playerRank + "! Welcome! " + getDiscordIcon(playerRank);
    }

    const channel = bot.channels.find('name', 'rankups')
    channel.send(discordpost)
    .then(message => console.log(discordpost))
    .catch(console.error);

    callback(null,"done");
*/


    //old
    var discordpost = "Player " + playerName + " has joined LIFE4! Their current rank is " + playerRank + "! Welcome! " + getDiscordIcon(playerRank);

    
    playerrankupchannel.send(discordpost)
    //.then(message => console.log(discordpost))
    .then(msg => { msg.react(getDiscordIcon(playerRank)) })
    .catch(console.error);
    

    callback(null,"done");

    

}, 750);

}


function announceRRDiscordScore(playerName, playerscorecount,playerteam,playersong,playerexscore,playerlettergrade,playerlamp,pbbest,division,callback)
{
  setTimeout( function(){

    var discordpost;

    //if (playerscorecount==1)
    //{
      discordpost = playerName + " - " + playerteam + "\n"+playersong+" - Division "+ division+"\nScore: "+playerexscore + "\nBonuses: " + playerlettergrade  + playerlamp  + pbbest + "";
    //}
    //else
    //{
    //  discordpost = playerName + " has " + playerscorecount + " new rank royale scores!";
    //}


    
    rankupsroyalechannel.send(discordpost)
    .catch(console.error);
    

    callback(null,"done");

    

}, 750);

}


//TODO: Add Discord Handle
function announceUpdatePlayerTrialDiscord(playerName, playerRank,playerScore,playerDiff,trialName, numberRank,callback)
{
  setTimeout( function(){

    var discordpost = "";
    
    discordpost = playerName + "\n" + trialName + " - " + playerRank + " " + getTrialDiscordIcon(playerRank) +"\nScore: " + playerScore + " EX " + playerDiff + "\nTrial Rank: #"+numberRank;

    trialrankupchannel.send(discordpost)
    //.then(message => console.log(discordpost))
    .then(msg => { msg.react(getTrialDiscordIcon(playerRank)) })
    .catch(console.error);

    callback(null,"done");


}, 750);

}




function LIFE4sequence()
{
  //connecting to DB
  connection = mysql.createConnection({
    host     : process.env.MYSQLHOST,
    user     : process.env.MYSQLUSER,
    password : process.env.MYSQLPW,
    database : process.env.MYSQLPLAYERDB
  });

  connection.connect();

  //GET BOT STATUS
  var botStatus = "ON";
  botStatus = wait.for(getBotStatus);
  botStatus = botStatus[0].varValue;

  //OFF
  //
  //
  if (botStatus =="OFF")
  {
    console.log("Bot is off! Nothing will run!");

  }
  //ERROR
  //
  //
  else if (botStatus == "ERROR")
  {
    console.log("Bot is having issues! Bot will not run!");
  }
  //ON
  //
  //
  else if (botStatus == "ON")
  {

    //get current time
    var timedude = Date.now();
    var timedude_supreme = new Date(timedude);
    //get hours
    var hoursdude = timedude_supreme.getHours();
    console.log("TIME! It is " + hoursdude+ " UTC right now");

    console.log("Bot is checking the new postID queue");

    //pull count of approved records
    console.log("checking for new approved records")
    //var queuecount=wait.for(getNumberOfApprovedForms);

    //test
    var queuecount=wait.for(getNumberOfApprovedFormsWithType);
    console.log(queuecount + " records found");

    //check for UTC window
    if (queuecount>0 && (hoursdude > 13 || hoursdude < 4))
    {
      //connect to rankup channels
      var channelsdone=wait.for(connectToRankupChannels);
      console.log("connected to channels!");

      //get new record
      console.log("Starting check for new records!");
      var nextapprovedvalues=wait.for(getNextApprovedQueue);

      //sort into vars
      var post_id = nextapprovedvalues.post_id;
      var queuetype = nextapprovedvalues.formtype;

      console.log("post_id:" + post_id + " and queuetype: "+queuetype+"");

      //Player Rankup
      if (queuetype=="Rankup")
      {
            console.log("Player Rankup!");
            //get player player_id
            var playerid=wait.for(getPostPlayerID,post_id);
            console.log("Player ID: " + playerid);
            //get player name
            var playername=wait.for(getPostPlayerName,post_id);
            console.log("Player Name: " + playername);
            //get player rank
            var playerrank=wait.for(getPostPlayerRank,post_id);
            console.log("Player Rank: " + playerrank);
            //get player subrank
            var playersubrank=wait.for(getPostPlayerSubRank,post_id);
            console.log("Player Rank Number: " + playersubrank);
            //get player twitter handle
            var playertwitter=wait.for(getProfileTwitterHandle,playerid);
            console.log("Player Twitter Handle: " + playertwitter);
            //get player discord handle
            var playerdiscord=wait.for(getProfileDiscordHandle,playerid);
            console.log("Player Discord Handle: " + playerdiscord);

            //messaging
            //Twitter Message
            var twitterannounce = wait.for(announcePlayerRankupTwitter, playername, playerrank + " " + playersubrank, playertwitter);
            console.log("Twitter announcement complete!");
            //Discord Message
            var discordannounce = wait.for(announcePlayerRankupDiscord, playername, playerrank + " " + playersubrank);
            console.log("Discord announcement complete!");
          
            //Update record to "bot_announced"
            var botannounceupdate = wait.for(updatedSubmissionToBotAnnounced, post_id);
            console.log("post completed!");

            console.log("Done retrieving record!\n\n");
      }
      //Placement (New Player)
      else if (queuetype == "Placement")
      {
        console.log("New Player - Placement!");
        //get player id
        var playerid=wait.for(getPlacementPostPlayerID,post_id);
        console.log("Player ID: " + playerid);

        //get player name
        var playername=wait.for(getPlacementPostPlayerName,post_id);
        console.log("Player Name: " + playername);

        //get player rank
        var playerrank=wait.for(getPlacementPostPlayerRank,playerid);
        console.log("Player Rank: " + playerrank);

        //get player twitter handle
        var playertwitter=wait.for(getProfileTwitterHandle,playerid);
        console.log("Player Twitter Handle: " + playertwitter);        
        //get player discord handle
        var playerdiscord=wait.for(getProfileDiscordHandle,playerid);
        console.log("Player Discord Handle: " + playerdiscord);


        var twitterannounce = wait.for(announceNewPlayerTwitter, playername, playerrank, playertwitter);
        //console.log("Twitter announcement complete!");
        var discordannounce = wait.for(announceNewPlayerDiscord, playername, playerrank, playertwitter);
        console.log("Discord announcement complete!");

        //Update record to "bot_announced"
        var botannounceupdate = wait.for(updatedSubmissionToBotAnnounced, post_id);
        console.log("post completed!");

        console.log("Done retrieving record!\n\n");

      }
      else if (queuetype == "Comprehensive Placement")
      {
        console.log("New Player - Comprehensive Placement!");

        //get player id
        var playerid=wait.for(getCompPlacementPostPlayerID,post_id);
        console.log("Player ID: " + playerid);

        //get player name
        var playername=wait.for(getCompPlacementPostPlayerName,post_id);
        console.log("Player Name: " + playername);

        //get player rank
        var playerrank=wait.for(getPlacementPostPlayerRank,playerid);
        console.log("Player Rank: " + playerrank);

        //get player twitter handle
        var playertwitter=wait.for(getProfileTwitterHandle,playerid);
        console.log("Player Twitter Handle: " + playertwitter);      
        //get player discord handle
        var playerdiscord=wait.for(getProfileDiscordHandle,playerid);
        console.log("Player Discord Handle: " + playerdiscord);

        var twitterannounce = wait.for(announceNewPlayerTwitter, playername, playerrank, playertwitter);
        //console.log("Twitter announcement complete!");
        var discordannounce = wait.for(announceNewPlayerDiscord, playername, playerrank, playertwitter);
        console.log("Discord announcement complete!");

        //Update record to "bot_announced"
        var botannounceupdate = wait.for(updatedSubmissionToBotAnnounced, post_id);
        console.log("post completed!");

        console.log("Done retrieving record!\n\n");

      }
      //RR Score Submission
      else if (queuetype == "Submit Scores!")
      {
        console.log("RR Score submission!");

        //get player id
        var playerid=wait.for(getRRsubmissionPlayerID,post_id);
        console.log("Player ID: " + playerid);

        //get player name
        var playername=wait.for(getRRsubmissionPlayerName,post_id);
        console.log("Player Name: " + playername);

        //get rr song name
        var songname=wait.for(getRRsubmissionTourneySongName,post_id);
        console.log("Song Name: " + songname);

        //get rr ex value
        var songexvalue=wait.for(getRRSubmissionEXScore,post_id);
        console.log("EX Value: " + songexvalue);

        //get rr ex minus value
        var songexminusvalue=wait.for(getRRMinusEXAmount,songexvalue,songname);
        console.log("EX Minus Value: " + songexminusvalue);

        //clean up ex string
        var songexfinalvalues=wait.for(RRAddEXString,songexvalue,songexminusvalue);
        console.log("Cleaned up EX String: " + songexfinalvalues);

        //get rr letter grade
        var songlettergrade=wait.for(getRRSubmissionLetterScore,post_id);
        console.log("Letter Grade: " + songlettergrade);

        //get rr lamp
        var songlamp=wait.for(getRRSubmissionLamp,post_id);
        console.log("Lamp: " + songlamp);
        var lampdiscordicon=wait.for(getDiscordLampIcon,songlamp);
        console.log(lampdiscordicon);

        //get pb best
        var pbbesttext=wait.for(getRRSubmissionPersonalBestText,post_id);
        console.log("PB Best?: " + pbbesttext);

        //get rr player team
        var playerteamname=wait.for(getRRSubmissionPlayerTeamID,playerid);
        console.log("Team Name: " + playerteamname);

        //get rr player division
        var playerdivision=wait.for(getRRSubmissionPlayerDivision,playerid);
        console.log("Player Division: " + playerdivision);

        //get all submissions
        var postcount=wait.for(getRRAllPlayerSubmissions,playerid);
        console.log("all posts:" + postcount);

        //discord announce
        var discordannounce = wait.for(announceRRDiscordScore, playername, postcount.length,playerteamname,songname,songexfinalvalues,songlettergrade,lampdiscordicon,pbbesttext,playerdivision);
        console.log("Discord announcement complete!");
        
        //update ALL records to "bot announced"
        var botannounceupdate = wait.for(updateRRSubmissionsToBotAnnounced, post_id);//change to postcount
        console.log("post completed!");

        console.log("Done retrieving record!\n\n");

      }
      //Trial Submission
      else if (queuetype == "Trial Submission")
      {
        console.log("Trial Submission!");
        //get player player_id
        var playerid=wait.for(getTrialPostPlayerID,post_id);
        console.log("Player ID: " + playerid);
        //get Trial Title
        var trialtitle=wait.for(getTrialTitle,post_id);
        console.log("Trial Title: " + trialtitle);

        // Get trial ex minus mapping
        var trialexscoreexminusmapping=wait.for(getTrialMetaKeyFieldNameOrLevel,trialtitle,"name_minus");
        console.log("Ex Minus Mapping: " + trialexscoreexminusmapping);
        //Get EX from Mapping
        var trialExMinusScore=wait.for(getTrialEXMinusfromMapping,playerid,trialexscoreexminusmapping);
        console.log("Actual Minus EX: " + trialExMinusScore);

        // Get trial ex score mapping
        var trialexscoreexmapping=wait.for(getTrialMetaKeyFieldNameOrLevel,trialtitle,"name_ex");
        console.log("Ex  Mapping: " + trialexscoreexmapping);
        //Get EX from Mapping
        var trialExScore=wait.for(getTrialEXfromMapping,playerid,trialexscoreexmapping);
        console.log("Actual EX: " + trialExScore);

        //Get trial level
        var trialscorelevel=wait.for(getTrialMetaKeyFieldNameOrLevel,trialtitle,"level");
        console.log("Level Mapping: " + trialscorelevel);

        //get player name
        var playername=wait.for(getTrialPostName,post_id);
        console.log("Player Name: " + playername);

        //get Trial Rank
        var trialrank=wait.for(getTrialRank,post_id);
        console.log("Trial Rank: " + trialrank);

        //Get Trial # Ranking
        // Get mapping for ranking view
        var mappingview=wait.for(getTrialMetaKeyFieldNameOrLevel,trialtitle,"rankingview");
        console.log("Mapping View: " + mappingview);
        //set var to 0 for rankings
        var setvar=wait.for(setRankingVariable);
        //get rank # from list of ranked players
        var trialnumberrankings=wait.for(getTrialUserRanking,playerid,mappingview);
        console.log("# rank: " +trialnumberrankings);

        //get player twitter handle
        var playertwitter=wait.for(getProfileTwitterHandle,playerid);
        console.log("Player Twitter Handle: " + playertwitter);

        //get player discord handle
        var playerdiscord=wait.for(getProfileDiscordHandle,playerid);
        console.log("Player Discord Handle: " + playerdiscord);

        var twitterannounce = wait.for(announceUpdatePlayerTrialTwitter, playername, trialrank,trialExScore,"("+trialExMinusScore+")", playertwitter, trialtitle.toUpperCase() + " ("+trialscorelevel+")",trialnumberrankings);
        console.log("Twitter announcement complete!");
        //TODO: Add discord handle
        var discordannounce = wait.for(announceUpdatePlayerTrialDiscord, playername, trialrank,trialExScore,trialExMinusScore, trialtitle.toUpperCase() + " ("+trialscorelevel+")",trialnumberrankings);
        console.log("Discord announcement complete!");


        //Update record to "bot_announced"
        var botannounceupdate = wait.for(updatedSubmissionToBotAnnounced, post_id);
        console.log("post completed!");

        console.log("Done retrieving record!\n\n");

      }
      //TODO: Badge Earned
      else if (queuetype == "Badge Earned")
      {

      }
      //TODO: RR Score Improved
      else if (queuetype == "RR Score Improved")
      {

      }
    }


  }
  
  
connection.end();
}



