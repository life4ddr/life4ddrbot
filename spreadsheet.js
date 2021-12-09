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



const fs = require('fs');
const readline = require('readline');
require('dotenv').config();

//functions
//image/icon functions
var twitterTrialImageFunction = require('./image_icon_functions/getTwitterTrialImageURL.js');

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

      callback(null,"done");

    
}, 1000);

};

var getTwitterTrialImageURL = function(trial,rank)
{
  var twitterImageURL = "";

  //HEARTBREAK(12)
  if (rank == "Silver" && trial == "HEARTBREAK (12)")
  {
    twitterImageURL = './trial_images/HEARTBREAK/Heartbreak Silver.webp';
  }
  else if (rank == "Gold" && trial == "HEARTBREAK (12)")
  {
    twitterImageURL = './trial_images/HEARTBREAK/Heartbreak Gold.webp';
  }
  else if (rank == "Diamond" && trial == "HEARTBREAK (12)")
  {
    twitterImageURL = './trial_images/HEARTBREAK/Heartbreak Diamond.webp';
  }
  else if (rank == "Cobalt" && trial == "HEARTBREAK (12)")
  {
    twitterImageURL = './trial_images/HEARTBREAK/Heartbreak Cobalt.webp';
  }
  else if (rank == "Amethyst" && trial == "HEARTBREAK (12)")
  {
    twitterImageURL = './trial_images/HEARTBREAK/Heartbreak Amethyst.webp';
  }
  else if (rank == "Emerald" && trial == "HEARTBREAK (12)")
  {
    twitterImageURL = './trial_images/HEARTBREAK/Heartbreak Emerald.webp';
  }
  else if (rank == "Platinum" && trial == "HEARTBREAK (12)")
  {
    twitterImageURL = './trial_images/HEARTBREAK/Heartbreak Platinum.webp';
  }
  else if (rank == "Onyx" && trial == "HEARTBREAK (12)")
  {
    twitterImageURL = './trial_images/HEARTBREAK/Heartbreak Onyx.webp';
  }

//CELESTIAL(13)
else if (rank == "Silver" && trial == "CELESTIAL (13)")
{
  twitterImageURL = './trial_images/CELESTIAL/Celestial Silver.webp';
}
else if (rank == "Gold" && trial == "CELESTIAL (13)")
{
  twitterImageURL = './trial_images/CELESTIAL/Celestial Gold.webp';
}
else if (rank == "Diamond" && trial == "CELESTIAL (13)")
{
  twitterImageURL = './trial_images/CELESTIAL/Celestial Diamond.webp';
}
else if (rank == "Cobalt" && trial == "CELESTIAL (13)")
{
  twitterImageURL = './trial_images/CELESTIAL/Celestial Cobalt.webp';
}
else if (rank == "Amethyst" && trial == "CELESTIAL (13)")
{
  twitterImageURL = './trial_images/CELESTIAL/Celestial Amethyst.webp';
}
else if (rank == "Emerald" && trial == "CELESTIAL (13)")
{
  twitterImageURL = './trial_images/CELESTIAL/Celestial Emerald.webp';
}
else if (rank == "Platinum" && trial == "CELESTIAL (13)")
{
  twitterImageURL = './trial_images/CELESTIAL/Celestial Platinum.webp';
}
else if (rank == "Onyx" && trial == "CELESTIAL (13)")
{
  twitterImageURL = './trial_images/CELESTIAL/Celestial Onyx.webp';
}

//DAYBREAK(14)
else if (rank == "Silver" && trial == "DAYBREAK (14)")
{
  twitterImageURL = './trial_images/DAYBREAK/Daybreak Silver.webp';
}
else if (rank == "Gold" && trial == "DAYBREAK (14)")
{
  twitterImageURL = './trial_images/DAYBREAK/Daybreak Gold.webp';
}
else if (rank == "Diamond" && trial == "DAYBREAK (14)")
{
  twitterImageURL = './trial_images/DAYBREAK/Daybreak Diamond.webp';
}
else if (rank == "Cobalt" && trial == "DAYBREAK (14)")
{
  twitterImageURL = './trial_images/DAYBREAK/Daybreak Cobalt.webp';
}
else if (rank == "Amethyst" && trial == "DAYBREAK (14)")
{
  twitterImageURL = './trial_images/DAYBREAK/Daybreak Amethyst.webp';
}
else if (rank == "Emerald" && trial == "DAYBREAK (14)")
{
  twitterImageURL = './trial_images/DAYBREAK/Daybreak Emerald.webp';
}
else if (rank == "Platinum" && trial == "DAYBREAK (14)")
{
  twitterImageURL = './trial_images/DAYBREAK/Daybreak Platinum.webp';
}
else if (rank == "Onyx" && trial == "DAYBREAK (14)")
{
  twitterImageURL = './trial_images/DAYBREAK/Daybreak Onyx.webp';
}

//HELLSCAPE(15)
else if (rank == "Silver" && trial == "HELLSCAPE (15)")
{
  twitterImageURL = './trial_images/HELLSCAPE/Hellscape Silver.webp';
}
else if (rank == "Gold" && trial == "HELLSCAPE (15)")
{
  twitterImageURL = './trial_images/HELLSCAPE/Hellscape Gold.webp';
}
else if (rank == "Diamond" && trial == "HELLSCAPE (15)")
{
  twitterImageURL = './trial_images/HELLSCAPE/Hellscape Diamond.webp';
}
else if (rank == "Cobalt" && trial == "HELLSCAPE (15)")
{
  twitterImageURL = './trial_images/HELLSCAPE/Hellscape Cobalt.webp';
}
else if (rank == "Amethyst" && trial == "HELLSCAPE (15)")
{
  twitterImageURL = './trial_images/HELLSCAPE/Hellscape Amethyst.webp';
}
else if (rank == "Emerald" && trial == "HELLSCAPE (15)")
{
  twitterImageURL = './trial_images/HELLSCAPE/Hellscape Emerald.webp';
}
else if (rank == "Platinum" && trial == "HELLSCAPE (15)")
{
  twitterImageURL = './trial_images/HELLSCAPE/Hellscape Platinum.webp';
}
else if (rank == "Onyx" && trial == "HELLSCAPE (15)")
{
  twitterImageURL = './trial_images/HELLSCAPE/Hellscape Onyx.webp';
}

//CLOCKWORK(15)
else if (rank == "Silver" && trial == "CLOCKWORK (15)")
{
  twitterImageURL = './trial_images/CLOCKWORK/Clockwork Silver.webp';
}
else if (rank == "Gold" && trial == "CLOCKWORK (15)")
{
  twitterImageURL = './trial_images/CLOCKWORK/Clockwork Gold.webp';
}
else if (rank == "Diamond" && trial == "CLOCKWORK (15)")
{
  twitterImageURL = './trial_images/CLOCKWORK/Clockwork Diamond.webp';
}
else if (rank == "Cobalt" && trial == "CLOCKWORK (15)")
{
  twitterImageURL = './trial_images/CLOCKWORK/Clockwork Cobalt.webp';
}
else if (rank == "Amethyst" && trial == "CLOCKWORK (15)")
{
  twitterImageURL = './trial_images/CLOCKWORK/Clockwork Amethyst.webp';
}
else if (rank == "Emerald" && trial == "CLOCKWORK (15)")
{
  twitterImageURL = './trial_images/CLOCKWORK/Clockwork Emerald.webp';
}
else if (rank == "Platinum" && trial == "CLOCKWORK (15)")
{
  twitterImageURL = './trial_images/CLOCKWORK/Clockwork Platinum.webp';
}
else if (rank == "Onyx" && trial == "CLOCKWORK (15)")
{
  twitterImageURL = './trial_images/CLOCKWORK/Clockwork Onyx.webp';
}

//PHARAOH(15)
else if (rank == "Silver" && trial == "PHARAOH (15)")
{
  twitterImageURL = './trial_images/PHARAOH/Pharaoh Silver.webp';
}
else if (rank == "Gold" && trial == "PHARAOH (15)")
{
  twitterImageURL = './trial_images/PHARAOH/Pharaoh Gold.webp';
}
else if (rank == "Diamond" && trial == "PHARAOH (15)")
{
  twitterImageURL = './trial_images/PHARAOH/Pharaoh Diamond.webp';
}
else if (rank == "Cobalt" && trial == "PHARAOH (15)")
{
  twitterImageURL = './trial_images/PHARAOH/Pharaoh Cobalt.webp';
}
else if (rank == "Amethyst" && trial == "PHARAOH (15)")
{
  twitterImageURL = './trial_images/PHARAOH/Pharaoh Amethyst.webp';
}
else if (rank == "Emerald" && trial == "PHARAOH (15)")
{
  twitterImageURL = './trial_images/PHARAOH/Pharaoh Emerald.webp';
}
else if (rank == "Platinum" && trial == "PHARAOH (15)")
{
  twitterImageURL = './trial_images/PHARAOH/Pharaoh Platinum.webp';
}
else if (rank == "Onyx" && trial == "PHARAOH (15)")
{
  twitterImageURL = './trial_images/PHARAOH/Pharaoh Onyx.webp';
}

//PARADOX(16)
else if (rank == "Gold" && trial == "PARADOX (16)")
{
  twitterImageURL = './trial_images/PARADOX/Paradox Gold.webp';
}
else if (rank == "Diamond" && trial == "PARADOX (16)")
{
  twitterImageURL = './trial_images/PARADOX/Paradox Diamond.webp';
}
else if (rank == "Cobalt" && trial == "PARADOX (16)")
{
  twitterImageURL = './trial_images/PARADOX/Paradox Cobalt.webp';
}
else if (rank == "Amethyst" && trial == "PARADOX (16)")
{
  twitterImageURL = './trial_images/PARADOX/Paradox Amethyst.webp';
}
else if (rank == "Emerald" && trial == "PARADOX (16)")
{
  twitterImageURL = './trial_images/PARADOX/Paradox Emerald.webp';
}
else if (rank == "Platinum" && trial == "PARADOX (16)")
{
  twitterImageURL = './trial_images/PARADOX/Paradox Platinum.webp';
}
else if (rank == "Onyx" && trial == "PARADOX (16)")
{
  twitterImageURL = './trial_images/PARADOX/Paradox Onyx.webp';
}

//INHUMAN(16)
else if (rank == "Gold" && trial == "INHUMAN (16)")
{
  twitterImageURL = './trial_images/INHUMAN/Inhuman Gold.webp';
}
else if (rank == "Diamond" && trial == "INHUMAN (16)")
{
  twitterImageURL = './trial_images/INHUMAN/Inhuman Diamond.webp';
}
else if (rank == "Cobalt" && trial == "INHUMAN (16)")
{
  twitterImageURL = './trial_images/INHUMAN/Inhuman Cobalt.webp';
}
else if (rank == "Amethyst" && trial == "INHUMAN (16)")
{
  twitterImageURL = './trial_images/INHUMAN/Inhuman Amethyst.webp';
}
else if (rank == "Emerald" && trial == "INHUMAN (16)")
{
  twitterImageURL = './trial_images/INHUMAN/Inhuman Emerald.webp';
}
else if (rank == "Platinum" && trial == "INHUMAN (16)")
{
  twitterImageURL = './trial_images/INHUMAN/Inhuman Platinum.webp';
}
else if (rank == "Onyx" && trial == "INHUMAN (16)")
{
  twitterImageURL = './trial_images/INHUMAN/Inhuman Onyx.webp';
}

//CHEMICAL(17)
else if (rank == "Diamond" && trial == "CHEMICAL (17)")
{
  twitterImageURL = './trial_images/CHEMICAL/Chemical Diamond.webp';
}
else if (rank == "Cobalt" && trial == "CHEMICAL (17)")
{
  twitterImageURL = './trial_images/CHEMICAL/Chemical Cobalt.webp';
}
else if (rank == "Amethyst" && trial == "CHEMICAL (17)")
{
  twitterImageURL = './trial_images/CHEMICAL/Chemical Amethyst.webp';
}
else if (rank == "Emerald" && trial == "CHEMICAL (17)")
{
  twitterImageURL = './trial_images/CHEMICAL/Chemical Emerald.webp';
}
else if (rank == "Platinum" && trial == "CHEMICAL (17)")
{
  twitterImageURL = './trial_images/CHEMICAL/Chemical Platinum.webp';
}
else if (rank == "Onyx" && trial == "CHEMICAL (17)")
{
  twitterImageURL = './trial_images/CHEMICAL/Chemical Onyx.webp';
}

//ORIGIN(18)
else if (rank == "Diamond" && trial == "ORIGIN (18)")
{
  twitterImageURL = './trial_images/ORIGIN/Origin Diamond.webp';
}
else if (rank == "Cobalt" && trial == "ORIGIN (18)")
{
  twitterImageURL = './trial_images/ORIGIN/Origin Cobalt.webp';
}
else if (rank == "Amethyst" && trial == "ORIGIN (18)")
{
  twitterImageURL = './trial_images/ORIGIN/Origin Amethyst.webp';
}
else if (rank == "Emerald" && trial == "ORIGIN (18)")
{
  twitterImageURL = './trial_images/ORIGIN/Origin Emerald.webp';
}
else if (rank == "Platinum" && trial == "ORIGIN (18)")
{
  twitterImageURL = './trial_images/ORIGIN/Origin Platinum.webp';
}
else if (rank == "Onyx" && trial == "ORIGIN (18)")
{
  twitterImageURL = './trial_images/ORIGIN/Origin Onyx.webp';
}


//ASCENSION (17)
else if (rank == "Diamond" && trial == "ASCENSION (17)")
{
  twitterImageURL = './trial_images/ASCENSION/Ascension Diamond.webp';
}
else if (rank == "Cobalt" && trial == "ASCENSION (17)")
{
  twitterImageURL = './trial_images/ASCENSION/Ascension Cobalt.webp';
}
else if (rank == "Amethyst" && trial == "ASCENSION (17)")
{
  twitterImageURL = './trial_images/ASCENSION/Ascension Amethyst.webp';
}
else if (rank == "Emerald" && trial == "ASCENSION (17)")
{
  twitterImageURL = './trial_images/ASCENSION/Ascension Emerald.webp';
}
else if (rank == "Platinum" && trial == "ASCENSION (17)")
{
  twitterImageURL = './trial_images/ASCENSION/Ascension Platinum.webp';
}
else if (rank == "Onyx" && trial == "ASCENSION (17)")
{
  twitterImageURL = './trial_images/ASCENSION/Ascension Onyx.webp';
}

//COUNTDOWN (14)
else if (rank == "Silver" && trial == "COUNTDOWN (14)")
{
  twitterImageURL = './trial_images/COUNTDOWN/Countdown Silver.webp';
}
else if (rank == "Gold" && trial == "COUNTDOWN (14)")
{
  twitterImageURL = './trial_images/COUNTDOWN/Countdown Gold.webp';
}
else if (rank == "Diamond" && trial == "COUNTDOWN (14)")
{
  twitterImageURL = './trial_images/COUNTDOWN/Countdown Diamond.webp';
}
else if (rank == "Cobalt" && trial == "COUNTDOWN (14)")
{
  twitterImageURL = './trial_images/COUNTDOWN/Countdown Cobalt.webp';
}
else if (rank == "Amethyst" && trial == "COUNTDOWN (14)")
{
  twitterImageURL = './trial_images/COUNTDOWN/Countdown Amethyst.webp';
}
else if (rank == "Emerald" && trial == "COUNTDOWN (14)")
{
  twitterImageURL = './trial_images/COUNTDOWN/Countdown Emerald.webp';
}
else if (rank == "Platinum" && trial == "COUNTDOWN (14)")
{
  twitterImageURL = './trial_images/COUNTDOWN/Countdown Platinum.webp';
}
else if (rank == "Onyx" && trial == "COUNTDOWN (14)")
{
  twitterImageURL = './trial_images/COUNTDOWN/Countdown Onyx.webp';
}


//HEATWAVE (15)
else if (rank == "Silver" && trial == "HEATWAVE (15)")
{
  twitterImageURL = './trial_images/HEATWAVE/Heatwave Silver.webp';
}
else if (rank == "Gold" && trial == "HEATWAVE (15)")
{
  twitterImageURL = './trial_images/HEATWAVE/Heatwave Gold.webp';
}
else if (rank == "Diamond" && trial == "HEATWAVE (15)")
{
  twitterImageURL = './trial_images/HEATWAVE/Heatwave Diamond.webp';
}
else if (rank == "Cobalt" && trial == "HEATWAVE (15)")
{
  twitterImageURL = './trial_images/HEATWAVE/Heatwave Cobalt.webp';
}
else if (rank == "Amethyst" && trial == "HEATWAVE (15)")
{
  twitterImageURL = './trial_images/HEATWAVE/Heatwave Amethyst.webp';
}
else if (rank == "Emerald" && trial == "HEATWAVE (15)")
{
  twitterImageURL = './trial_images/HEATWAVE/Heatwave Emerald.webp';
}
else if (rank == "Platinum" && trial == "HEATWAVE (15)")
{
  twitterImageURL = './trial_images/HEATWAVE/Heatwave Platinum.webp';
}
else if (rank == "Onyx" && trial == "HEATWAVE (15)")
{
  twitterImageURL = './trial_images/HEATWAVE/Heatwave Onyx.webp';
}

//MAINFRAME (13)
else if (rank == "Silver" && trial == "MAINFRAME (13)")
{
  twitterImageURL = './trial_images/MAINFRAME/Mainframe Silver.webp';
}
else if (rank == "Gold" && trial == "MAINFRAME (13)")
{
  twitterImageURL = './trial_images/MAINFRAME/Mainframe Gold.webp';
}
else if (rank == "Diamond" && trial == "MAINFRAME (13)")
{
  twitterImageURL = './trial_images/MAINFRAME/Mainframe Diamond.webp';
}
else if (rank == "Cobalt" && trial == "MAINFRAME (13)")
{
  twitterImageURL = './trial_images/MAINFRAME/Mainframe Cobalt.webp';
}
else if (rank == "Amethyst" && trial == "MAINFRAME (13)")
{
  twitterImageURL = './trial_images/MAINFRAME/Mainframe Amethyst.webp';
}
else if (rank == "Emerald" && trial == "MAINFRAME (13)")
{
  twitterImageURL = './trial_images/MAINFRAME/Mainframe Emerald.webp';
}
else if (rank == "Platinum" && trial == "MAINFRAME (13)")
{
  twitterImageURL = './trial_images/MAINFRAME/Mainframe Platinum.webp';
}
else if (rank == "Onyx" && trial == "MAINFRAME (13)")
{
  twitterImageURL = './trial_images/MAINFRAME/Mainframe Onyx.webp';
}

//SNOWDRIFT (16)
else if (rank == "Gold" && trial == "SNOWDRIFT (16)")
{
  twitterImageURL = './trial_images/SNOWDRIFT/Snowdrift Gold.webp';
}
else if (rank == "Diamond" && trial == "SNOWDRIFT (16)")
{
  twitterImageURL = './trial_images/SNOWDRIFT/Snowdrift Diamond.webp';
}
else if (rank == "Cobalt" && trial == "SNOWDRIFT (16)")
{
  twitterImageURL = './trial_images/SNOWDRIFT/Snowdrift Cobalt.webp';
}
else if (rank == "Amethyst" && trial == "SNOWDRIFT (16)")
{
  twitterImageURL = './trial_images/SNOWDRIFT/Snowdrift Amethyst.webp';
}
else if (rank == "Emerald" && trial == "SNOWDRIFT (16)")
{
  twitterImageURL = './trial_images/SNOWDRIFT/Snowdrift Emerald.webp';
}
else if (rank == "Platinum" && trial == "SNOWDRIFT (16)")
{
  twitterImageURL = './trial_images/SNOWDRIFT/Snowdrift Platinum.webp';
}
else if (rank == "Onyx" && trial == "SNOWDRIFT (16)")
{
  twitterImageURL = './trial_images/SNOWDRIFT/Snowdrift Onyx.webp';
}

//Primal (13)
else if (rank == "Silver" && trial == "PRIMAL (13)")
{
  twitterImageURL = './trial_images/PRIMAL/Primal Silver.webp';
}
else if (rank == "Gold" && trial == "PRIMAL (13)")
{
  twitterImageURL = './trial_images/PRIMAL/Primal Gold.webp';
}
else if (rank == "Diamond" && trial == "PRIMAL (13)")
{
  twitterImageURL = './trial_images/PRIMAL/Primal Diamond.webp';
}
else if (rank == "Cobalt" && trial == "PRIMAL (13)")
{
  twitterImageURL = './trial_images/PRIMAL/Primal Cobalt.webp';
}
else if (rank == "Amethyst" && trial == "PRIMAL (13)")
{
  twitterImageURL = './trial_images/PRIMAL/Primal Amethyst.webp';
}
else if (rank == "Emerald" && trial == "PRIMAL (13)")
{
  twitterImageURL = './trial_images/PRIMAL/Primal Emerald.webp';
}
else if (rank == "Platinum" && trial == "PRIMAL (13)")
{
  twitterImageURL = './trial_images/PRIMAL/Primal Platinum.webp';
}
else if (rank == "Onyx" && trial == "PRIMAL (13)")
{
  twitterImageURL = './trial_images/PRIMAL/Primal Onyx.webp';
}


//Wanderlust (15)
else if (rank == "Silver" && trial == "WANDERLUST (15)")
{
  twitterImageURL = './trial_images/WANDERLUST/Wanderlust Silver.webp';
}
else if (rank == "Gold" && trial == "WANDERLUST (15)")
{
  twitterImageURL = './trial_images/WANDERLUST/Wanderlust Gold.webp';
}
else if (rank == "Diamond" && trial == "WANDERLUST (15)")
{
  twitterImageURL = './trial_images/WANDERLUST/Wanderlust Diamond.webp';
}
else if (rank == "Cobalt" && trial == "WANDERLUST (15)")
{
  twitterImageURL = './trial_images/WANDERLUST/Wanderlust Cobalt.webp';
}
else if (rank == "Amethyst" && trial == "WANDERLUST (15)")
{
  twitterImageURL = './trial_images/WANDERLUST/Wanderlust Amethyst.webp';
}
else if (rank == "Emerald" && trial == "WANDERLUST (15)")
{
  twitterImageURL = './trial_images/WANDERLUST/Wanderlust Emerald.webp';
}
else if (rank == "Platinum" && trial == "WANDERLUST (15)")
{
  twitterImageURL = './trial_images/WANDERLUST/Wanderlust Platinum.webp';
}
else if (rank == "Onyx" && trial == "WANDERLUST (15)")
{
  twitterImageURL = './trial_images/WANDERLUST/Wanderlust Onyx.webp';
}

//CIRCADIA (16)
else if (rank == "Gold" && trial == "CIRCADIA (16)")
{
  twitterImageURL = './trial_images/CIRCADIA/Circadia Gold.webp';
}
else if (rank == "Diamond" && trial == "CIRCADIA (16)")
{
  twitterImageURL = './trial_images/CIRCADIA/Circadia Diamond.webp';
}
else if (rank == "Cobalt" && trial == "CIRCADIA (16)")
{
  twitterImageURL = './trial_images/CIRCADIA/Circadia Cobalt.webp';
}
else if (rank == "Amethyst" && trial == "CIRCADIA (16)")
{
  twitterImageURL = './trial_images/CIRCADIA/Circadia Amethyst.webp';
}
else if (rank == "Emerald" && trial == "CIRCADIA (16)")
{
  twitterImageURL = './trial_images/CIRCADIA/Circadia Emerald.webp';
}
else if (rank == "Platinum" && trial == "CIRCADIA (16)")
{
  twitterImageURL = './trial_images/CIRCADIA/Circadia Platinum.webp';
}
else if (rank == "Onyx" && trial == "CIRCADIA (16)")
{
  twitterImageURL = './trial_images/CIRCADIA/Circadia Onyx.webp';
}

//QUANTUM (18)
else if (rank == "Diamond" && trial == "QUANTUM (18)")
{
  twitterImageURL = './trial_images/QUANTUM/Quantum Diamond.webp';
}
else if (rank == "Cobalt" && trial == "QUANTUM (18)")
{
  twitterImageURL = './trial_images/QUANTUM/Quantum Cobalt.webp';
}
else if (rank == "Amethyst" && trial == "QUANTUM (18)")
{
  twitterImageURL = './trial_images/QUANTUM/Quantum Amethyst.webp';
}
else if (rank == "Emerald" && trial == "QUANTUM (18)")
{
  twitterImageURL = './trial_images/QUANTUM/Quantum Emerald.webp';
}
else if (rank == "Platinum" && trial == "QUANTUM (18)")
{
  twitterImageURL = './trial_images/QUANTUM/Quantum Platinum.webp';
}
else if (rank == "Onyx" && trial == "QUANTUM (18)")
{
  twitterImageURL = './trial_images/QUANTUM/Quantum Onyx.webp';
}

//SPECIES (13)
else if (rank == "Silver" && trial == "SPECIES (13)")
{
  twitterImageURL = './trial_images/SPECIES/Species Silver.webp';
}
else if (rank == "Gold" && trial == "SPECIES (13)")
{
  twitterImageURL = './trial_images/SPECIES/Species Gold.webp';
}
else if (rank == "Diamond" && trial == "SPECIES (13)")
{
  twitterImageURL = './trial_images/SPECIES/Species Diamond.webp';
}
else if (rank == "Cobalt" && trial == "SPECIES (13)")
{
  twitterImageURL = './trial_images/SPECIES/Species Cobalt.webp';
}
else if (rank == "Amethyst" && trial == "SPECIES (13)")
{
  twitterImageURL = './trial_images/SPECIES/Species Amethyst.webp';
}
else if (rank == "Emerald" && trial == "SPECIES (13)")
{
  twitterImageURL = './trial_images/SPECIES/Species Emerald.webp';
}
else if (rank == "Platinum" && trial == "SPECIES (13)")
{
  twitterImageURL = './trial_images/SPECIES/Species Platinum.webp';
}
else if (rank == "Onyx" && trial == "SPECIES (13)")
{
  twitterImageURL = './trial_images/SPECIES/Species Onyx.webp';
}

//TEMPEST (15)
else if (rank == "Silver" && trial == "TEMPEST (15)")
{
  twitterImageURL = './trial_images/TEMPEST/Tempest Silver.webp';
}
else if (rank == "Gold" && trial == "TEMPEST (15)")
{
  twitterImageURL = './trial_images/TEMPEST/Tempest Gold.webp';
}
else if (rank == "Diamond" && trial == "TEMPEST (15)")
{
  twitterImageURL = './trial_images/TEMPEST/Tempest Diamond.webp';
}
else if (rank == "Cobalt" && trial == "TEMPEST (15)")
{
  twitterImageURL = './trial_images/TEMPEST/Tempest Cobalt.webp';
}
else if (rank == "Amethyst" && trial == "TEMPEST (15)")
{
  twitterImageURL = './trial_images/TEMPEST/Tempest Amethyst.webp';
}
else if (rank == "Emerald" && trial == "TEMPEST (15)")
{
  twitterImageURL = './trial_images/TEMPEST/Tempest Emerald.webp';
}
else if (rank == "Platinum" && trial == "TEMPEST (15)")
{
  twitterImageURL = './trial_images/TEMPEST/Tempest Platinum.webp';
}
else if (rank == "Onyx" && trial == "TEMPEST (15)")
{
  twitterImageURL = './trial_images/TEMPEST/Tempest Onyx.webp';
}

//UPHEAVAL (14)
else if (rank == "Silver" && trial == "UPHEAVAL (14)")
{
  twitterImageURL = './trial_images/UPHEAVAL/Upheaval Silver.webp';
}
else if (rank == "Gold" && trial == "UPHEAVAL (14)")
{
  twitterImageURL = './trial_images/UPHEAVAL/Upheaval Gold.webp';
}
else if (rank == "Diamond" && trial == "UPHEAVAL (14)")
{
  twitterImageURL = './trial_images/UPHEAVAL/Upheaval Diamond.webp';
}
else if (rank == "Cobalt" && trial == "UPHEAVAL (14)")
{
  twitterImageURL = './trial_images/UPHEAVAL/Upheaval Cobalt.webp';
}
else if (rank == "Amethyst" && trial == "UPHEAVAL (14)")
{
  twitterImageURL = './trial_images/UPHEAVAL/Upheaval Amethyst.webp';
}
else if (rank == "Emerald" && trial == "UPHEAVAL (14)")
{
  twitterImageURL = './trial_images/UPHEAVAL/Upheaval Emerald.webp';
}
else if (rank == "Platinum" && trial == "UPHEAVAL (14)")
{
  twitterImageURL = './trial_images/UPHEAVAL/Upheaval Platinum.webp';
}
else if (rank == "Onyx" && trial == "UPHEAVAL (14)")
{
  twitterImageURL = './trial_images/UPHEAVAL/Upheaval Onyx.webp';
}

//DEVOTION (12)
else if (rank == "Silver" && trial == "DEVOTION (12)")
{
  twitterImageURL = './trial_images/DEVOTION/Devotion Silver.webp';
}
else if (rank == "Gold" && trial == "DEVOTION (12)")
{
  twitterImageURL = './trial_images/DEVOTION/Devotion Gold.webp';
}
else if (rank == "Diamond" && trial == "DEVOTION (12)")
{
  twitterImageURL = './trial_images/DEVOTION/Devotion Diamond.webp';
}
else if (rank == "Cobalt" && trial == "DEVOTION (12)")
{
  twitterImageURL = './trial_images/DEVOTION/Devotion Cobalt.webp';
}
else if (rank == "Amethyst" && trial == "DEVOTION (12)")
{
  twitterImageURL = './trial_images/DEVOTION/Devotion Amethyst.webp';
}
else if (rank == "Emerald" && trial == "DEVOTION (12)")
{
  twitterImageURL = './trial_images/DEVOTION/Devotion Emerald.webp';
}
else if (rank == "Platinum" && trial == "DEVOTION (12)")
{
  twitterImageURL = './trial_images/DEVOTION/Devotion Platinum.webp';
}
else if (rank == "Onyx" && trial == "DEVOTION (12)")
{
  twitterImageURL = './trial_images/DEVOTION/Devotion Onyx.webp';
}

//BELIEVE (12)
else if (rank == "Silver" && trial == "BELIEVE (12)")
{
  twitterImageURL = './trial_images/BELIEVE/Believe Silver.webp';
}
else if (rank == "Gold" && trial == "BELIEVE (12)")
{
  twitterImageURL = './trial_images/BELIEVE/Believe Gold.webp';
}
else if (rank == "Diamond" && trial == "BELIEVE (12)")
{
  twitterImageURL = './trial_images/BELIEVE/Believe Diamond.webp';
}
else if (rank == "Cobalt" && trial == "BELIEVE (12)")
{
  twitterImageURL = './trial_images/BELIEVE/Believe Cobalt.webp';
}
else if (rank == "Amethyst" && trial == "BELIEVE (12)")
{
  twitterImageURL = './trial_images/BELIEVE/Believe Amethyst.webp';
}
else if (rank == "Emerald" && trial == "BELIEVE (12)")
{
  twitterImageURL = './trial_images/BELIEVE/Believe Emerald.webp';
}
else if (rank == "Platinum" && trial == "BELIEVE (12)")
{
  twitterImageURL = './trial_images/BELIEVE/Believe Platinum.webp';
}
else if (rank == "Onyx" && trial == "BELIEVE (12)")
{
  twitterImageURL = './trial_images/BELIEVE/Believe Onyx.webp';
}

//PASSPORT (13)
else if (rank == "Silver" && trial == "PASSPORT (13)")
{
  twitterImageURL = './trial_images/PASSPORT/Passport Silver.webp';
}
else if (rank == "Gold" && trial == "PASSPORT (13)")
{
  twitterImageURL = './trial_images/PASSPORT/Passport Gold.webp';
}
else if (rank == "Diamond" && trial == "PASSPORT (13)")
{
  twitterImageURL = './trial_images/PASSPORT/Passport Diamond.webp';
}
else if (rank == "Cobalt" && trial == "PASSPORT (13)")
{
  twitterImageURL = './trial_images/PASSPORT/Passport Cobalt.webp';
}
else if (rank == "Amethyst" && trial == "PASSPORT (13)")
{
  twitterImageURL = './trial_images/PASSPORT/Passport Amethyst.webp';
}
else if (rank == "Emerald" && trial == "PASSPORT (13)")
{
  twitterImageURL = './trial_images/PASSPORT/Passport Emerald.webp';
}
else if (rank == "Platinum" && trial == "PASSPORT (13)")
{
  twitterImageURL = './trial_images/PASSPORT/Passport Platinum.webp';
}
else if (rank == "Onyx" && trial == "PASSPORT (13)")
{
  twitterImageURL = './trial_images/PASSPORT/Passport Onyx.webp';
}

//SPECTACLE (16)
else if (rank == "Gold" && trial == "SPECTACLE (16)")
{
  twitterImageURL = './trial_images/SPECTACLE/Spectacle Gold.webp';
}
else if (rank == "Diamond" && trial == "SPECTACLE (16)")
{
  twitterImageURL = './trial_images/SPECTACLE/Spectacle Diamond.webp';
}
else if (rank == "Cobalt" && trial == "SPECTACLE (16)")
{
  twitterImageURL = './trial_images/SPECTACLE/Spectacle Cobalt.webp';
}
else if (rank == "Amethyst" && trial == "SPECTACLE (16)")
{
  twitterImageURL = './trial_images/SPECTACLE/Spectacle Amethyst.webp';
}
else if (rank == "Emerald" && trial == "SPECTACLE (16)")
{
  twitterImageURL = './trial_images/SPECTACLE/Spectacle Emerald.webp';
}
else if (rank == "Platinum" && trial == "SPECTACLE (16)")
{
  twitterImageURL = './trial_images/SPECTACLE/Spectacle Platinum.webp';
}
else if (rank == "Onyx" && trial == "SPECTACLE (16)")
{
  twitterImageURL = './trial_images/SPECTACLE/Spectacle Onyx.webp';
}

//GOSPEL (13)
else if (rank == "Silver" && trial == "GOSPEL (13)")
{
  twitterImageURL = './trial_images/GOSPEL/Gospel Silver.webp';
}
else if (rank == "Gold" && trial == "GOSPEL (13)")
{
  twitterImageURL = './trial_images/GOSPEL/Gospel Gold.webp';
}
else if (rank == "Diamond" && trial == "GOSPEL (13)")
{
  twitterImageURL = './trial_images/GOSPEL/Gospel Diamond.webp';
}
else if (rank == "Cobalt" && trial == "GOSPEL (13)")
{
  twitterImageURL = './trial_images/GOSPEL/Gospel Cobalt.webp';
}
else if (rank == "Amethyst" && trial == "GOSPEL (13)")
{
  twitterImageURL = './trial_images/GOSPEL/Gospel Amethyst.webp';
}
else if (rank == "Emerald" && trial == "GOSPEL (13)")
{
  twitterImageURL = './trial_images/GOSPEL/Gospel Emerald.webp';
}
else if (rank == "Platinum" && trial == "GOSPEL (13)")
{
  twitterImageURL = './trial_images/GOSPEL/Gospel Platinum.webp';
}
else if (rank == "Onyx" && trial == "GOSPEL (13)")
{
  twitterImageURL = './trial_images/GOSPEL/Gospel Onyx.webp';
}

//MYTHOS (15)
else if (rank == "Silver" && trial == "MYTHOS (15)")
{
  twitterImageURL = './trial_images/MYTHOS/Mythos Silver.webp';
}
else if (rank == "Gold" && trial == "MYTHOS (15)")
{
  twitterImageURL = './trial_images/MYTHOS/Mythos Gold.webp';
}
else if (rank == "Diamond" && trial == "MYTHOS (15)")
{
  twitterImageURL = './trial_images/MYTHOS/Mythos Diamond.webp';
}
else if (rank == "Cobalt" && trial == "MYTHOS (15)")
{
  twitterImageURL = './trial_images/MYTHOS/Mythos Cobalt.webp';
}
else if (rank == "Amethyst" && trial == "MYTHOS (15)")
{
  twitterImageURL = './trial_images/MYTHOS/Mythos Amethyst.webp';
}
else if (rank == "Emerald" && trial == "MYTHOS (15)")
{
  twitterImageURL = './trial_images/MYTHOS/Mythos Emerald.webp';
}
else if (rank == "Platinum" && trial == "MYTHOS (15)")
{
  twitterImageURL = './trial_images/MYTHOS/Mythos Platinum.webp';
}
else if (rank == "Onyx" && trial == "MYTHOS (15)")
{
  twitterImageURL = './trial_images/MYTHOS/Mythos Onyx.webp';
}

//RENDITION (15)
else if (rank == "Silver" && trial == "RENDITION (15)")
{
  twitterImageURL = './trial_images/RENDITION/Rendition Silver.webp';
}
else if (rank == "Gold" && trial == "RENDITION (15)")
{
  twitterImageURL = './trial_images/RENDITION/Rendition Gold.webp';
}
else if (rank == "Diamond" && trial == "RENDITION (15)")
{
  twitterImageURL = './trial_images/RENDITION/Rendition Diamond.webp';
}
else if (rank == "Cobalt" && trial == "RENDITION (15)")
{
  twitterImageURL = './trial_images/RENDITION/Rendition Cobalt.webp';
}
else if (rank == "Amethyst" && trial == "RENDITION (15)")
{
  twitterImageURL = './trial_images/RENDITION/Rendition Amethyst.webp';
}
else if (rank == "Emerald" && trial == "RENDITION (15)")
{
  twitterImageURL = './trial_images/RENDITION/Rendition Emerald.webp';
}
else if (rank == "Platinum" && trial == "RENDITION (15)")
{
  twitterImageURL = './trial_images/RENDITION/Rendition Platinum.webp';
}
else if (rank == "Onyx" && trial == "RENDITION (15)")
{
  twitterImageURL = './trial_images/RENDITION/Rendition Onyx.webp';
}

//SUPERSTAR (14)
else if (rank == "Silver" && trial == "SUPERSTAR (14)")
{
  twitterImageURL = './trial_images/SUPERSTAR/Superstar Silver.webp';
}
else if (rank == "Gold" && trial == "SUPERSTAR (14)")
{
  twitterImageURL = './trial_images/SUPERSTAR/Superstar Gold.webp';
}
else if (rank == "Diamond" && trial == "SUPERSTAR (14)")
{
  twitterImageURL = './trial_images/SUPERSTAR/Superstar Diamond.webp';
}
else if (rank == "Cobalt" && trial == "SUPERSTAR (14)")
{
  twitterImageURL = './trial_images/SUPERSTAR/Superstar Cobalt.webp';
}
else if (rank == "Amethyst" && trial == "SUPERSTAR (14)")
{
  twitterImageURL = './trial_images/SUPERSTAR/Superstar Amethyst.webp';
}
else if (rank == "Emerald" && trial == "SUPERSTAR (14)")
{
  twitterImageURL = './trial_images/SUPERSTAR/Superstar Emerald.webp';
}
else if (rank == "Platinum" && trial == "SUPERSTAR (14)")
{
  twitterImageURL = './trial_images/SUPERSTAR/Superstar Platinum.webp';
}
else if (rank == "Onyx" && trial == "SUPERSTAR (14)")
{
  twitterImageURL = './trial_images/SUPERSTAR/Superstar Onyx.webp';
}

  return twitterImageURL;

}

var getTwitterImageURL = function(rank)
{
  var twitterImageURL = "";

  if (rank == "Gold I")
  {
    twitterImageURL = './rankup_images/Gold I.webp';
  }
  else if (rank ==  "Gold I (P)")
  {
    twitterImageURL = './rankup_images/GoldI_P.webp';
  }
  else if (rank == "Gold II")
  {
    twitterImageURL = './rankup_images/Gold II.webp';
  }
  else if (rank ==  "Gold II (P)")
  {
    twitterImageURL = './rankup_images/GoldII_P.webp';
  }
  else if (rank == "Gold III")
  {
    twitterImageURL = './rankup_images/Gold III.webp';
  }
  else if (rank ==  "Gold III (P)")
  {
    twitterImageURL = './rankup_images/GoldIII_P.webp';
  }
  else if (rank == "Gold IV")
  {
    twitterImageURL = './rankup_images/Gold IV.webp';
  }
  else if (rank ==  "Gold IV (P)")
  {
    twitterImageURL = './rankup_images/GoldIV_P.webp';
  }
  else if (rank == "Gold V")
  {
    twitterImageURL = './rankup_images/Gold V.webp';
  }
  else if (rank ==  "Gold V (P)")
  {
    twitterImageURL = './rankup_images/GoldV_P.webp';
  }


  else if (rank == "Silver I")
  {
    twitterImageURL = './rankup_images/Silver I.webp';
  }
  else if (rank == "Silver I (P)")
  {
    twitterImageURL = './rankup_images/SilverI_P.webp';
  }
  else if (rank == "Silver II")
  {
    twitterImageURL = './rankup_images/Silver II.webp';
  }
  else if (rank == "Silver II (P)")
  {
    twitterImageURL = './rankup_images/SilverII_P.webp';
  }
  else if (rank == "Silver III")
  {
    twitterImageURL = './rankup_images/Silver III.webp';
  }
  else if (rank == "Silver III (P)")
  {
    twitterImageURL = './rankup_images/SilverIII_P.webp';
  }
  else if (rank == "Silver IV")
  {
    twitterImageURL = './rankup_images/Silver IV.webp';
  }
  else if (rank == "Silver IV (P)")
  {
    twitterImageURL = './rankup_images/SilverIV_P.webp';
  }
  else if (rank == "Silver V")
  {
    twitterImageURL = './rankup_images/Silver V.webp';
  }
  else if (rank == "Silver V (P)")
  {
    twitterImageURL = './rankup_images/SilverV_P.webp';
  }


  else if (rank == "Bronze I")
  {
    twitterImageURL = './rankup_images/Bronze I.webp';
  }
  else if (rank ==  "Bronze I (P)")
  {
    twitterImageURL = './rankup_images/BronzeI_P.webp';
  }
  else if (rank == "Bronze II")
  {
    twitterImageURL = './rankup_images/Bronze II.webp';
  }
  else if (rank ==  "Bronze II (P)")
  {
    twitterImageURL = './rankup_images/BronzeII_P.webp';
  }
  else if (rank == "Bronze III")
  {
    twitterImageURL = './rankup_images/Bronze III.webp';
  }
  else if (rank ==  "Bronze III (P)")
  {
    twitterImageURL = './rankup_images/BronzeIII_P.webp';
  }
  else if (rank == "Bronze IV")
  {
    twitterImageURL = './rankup_images/Bronze IV.webp';
  }
  else if (rank ==  "Bronze IV (P)")
  {
    twitterImageURL = './rankup_images/BronzeIV_P.webp';
  }
  else if (rank == "Bronze V")
  {
    twitterImageURL = './rankup_images/Bronze V.webp';
  }
  else if (rank ==  "Bronze V (P)")
  {
    twitterImageURL = './rankup_images/BronzeV_P.webp';
  }


  else if (rank == "Diamond (P)")
  {
    twitterImageURL = './rankup_images/Diamond_GenericP.webp';
  }
  else if (rank == "Diamond I")
  {
    twitterImageURL = './rankup_images/Diamond I.webp';
  }
  else if (rank == "Diamond II")
  {
    twitterImageURL = './rankup_images/Diamond II.webp';
  }
  else if (rank == "Diamond III")
  {
    twitterImageURL = './rankup_images/Diamond III.webp';
  }
  else if (rank == "Diamond IV")
  {
    twitterImageURL = './rankup_images/Diamond IV.webp';
  }
  else if (rank == "Diamond V")
  {
    twitterImageURL = './rankup_images/Diamond V.webp';
  }
  

  else if (rank == "Cobalt (P)")
  {
    twitterImageURL = './rankup_images/Cobalt_GenericP.webp';
  }
  else if (rank == "Cobalt I")
  {
    twitterImageURL = './rankup_images/Cobalt I.webp';
  }
  else if (rank == "Cobalt II")
  {
    twitterImageURL = './rankup_images/Cobalt II.webp';
  }
  else if (rank == "Cobalt III")
  {
    twitterImageURL = './rankup_images/Cobalt III.webp';
  }
  else if (rank == "Cobalt IV")
  {
    twitterImageURL = './rankup_images/Cobalt IV.webp';
  }
  else if (rank == "Cobalt V")
  {
    twitterImageURL = './rankup_images/Cobalt V.webp';
  }
  
  else if (rank == "Copper I")
  {
    twitterImageURL = './rankup_images/Copper I.webp';
  }
  else if ( rank ==  "Copper I (P)")
  {
    twitterImageURL = './rankup_images/CopperI_P.webp';
  }
  else if (rank == "Copper II")
  {
    twitterImageURL = './rankup_images/Copper II.webp';
  }
  else if ( rank ==  "Copper II (P)")
  {
    twitterImageURL = './rankup_images/CopperII_P.webp';
  }
  else if (rank == "Copper III")
  {
    twitterImageURL = './rankup_images/Copper III.webp';
  }
  else if ( rank ==  "Copper III (P)")
  {
    twitterImageURL = './rankup_images/CopperIII_P.webp';
  }
  else if (rank == "Copper IV")
  {
    twitterImageURL = './rankup_images/Copper IV.webp';
  }
  else if ( rank ==  "Copper IV (P)")
  {
    twitterImageURL = './rankup_images/CopperIV_P.webp';
  }
  else if (rank == "Copper V")
  {
    twitterImageURL = './rankup_images/Copper V.webp';
  }
  else if ( rank ==  "Copper V (P)")
  {
    twitterImageURL = './rankup_images/CopperV_P.webp';
  }


  else if (rank == "Amethyst (P)")
  {
    twitterImageURL = './rankup_images/Amethyst_GenericP.webp';
  }
  else if (rank == "Amethyst I")
  {
    twitterImageURL = './rankup_images/Amethyst I.webp';
  }
  else if (rank == "Amethyst II")
  {
    twitterImageURL = './rankup_images/Amethyst II.webp';
  }
  else if (rank == "Amethyst III")
  {
    twitterImageURL = './rankup_images/Amethyst III.webp';
  }
  else if (rank == "Amethyst IV")
  {
    twitterImageURL = './rankup_images/Amethyst IV.webp';
  }
  else if (rank == "Amethyst V")
  {
    twitterImageURL = './rankup_images/Amethyst V.webp';
  }
  
  else if (rank == "Emerald (P)")
  {
    twitterImageURL = './rankup_images/Emerald_GenericP.webp';
  }
  else if (rank == "Emerald I")
  {
    twitterImageURL = './rankup_images/Emerald I.webp';
  }
  else if (rank == "Emerald II")
  {
    twitterImageURL = './rankup_images/Emerald II.webp';
  }
  else if (rank == "Emerald III")
  {
    twitterImageURL = './rankup_images/Emerald III.webp';
  }
  else if (rank == "Emerald IV")
  {
    twitterImageURL = './rankup_images/Emerald IV.webp';
  }
  else if (rank == "Emerald V")
  {
    twitterImageURL = './rankup_images/Emerald V.webp';
  }
  

  else if (rank == "Platinum (P)")
  {
    twitterImageURL = './rankup_images/Platinum_GenericP.webp';
  }
  else if (rank == "Platinum I")
  {
    twitterImageURL = './rankup_images/Platinum I.webp';
  }
  else if (rank == "Platinum II")
  {
    twitterImageURL = './rankup_images/Platinum II.webp';
  }
  else if (rank == "Platinum III")
  {
    twitterImageURL = './rankup_images/Platinum III.webp';
  }
  else if (rank == "Platinum IV")
  {
    twitterImageURL = './rankup_images/Platinum IV.webp';
  }
  else if (rank == "Platinum V")
  {
    twitterImageURL = './rankup_images/Platinum V.webp';
  }


  else if (rank == "Onyx (P)")
  {
    twitterImageURL = './rankup_images/Onyx_GenericP.webp';
  }
  else if (rank == "Onyx I")
  {
    twitterImageURL = './rankup_images/Onyx I.webp';
  }
  else if (rank == "Onyx II")
  {
    twitterImageURL = './rankup_images/Onyx II.webp';
  }
  else if (rank == "Onyx III")
  {
    twitterImageURL = './rankup_images/Onyx III.webp';
  }
  else if (rank == "Onyx IV")
  {
    twitterImageURL = './rankup_images/Onyx IV.webp';
  }
  else if (rank == "Onyx V")
  {
    twitterImageURL = './rankup_images/Onyx V.webp';
  }
  
  return twitterImageURL;
}

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
        if (results[i].formtype=="Placement" || results[i].formtype=="Comprehensive Placement" || results[i].formtype=="Trial Submission" || results[i].formtype=="Rankup")
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
        if (nextselected==undefined && (results[i].formtype=="Placement" || results[i].formtype=="Comprehensive Placement" || results[i].formtype=="Trial Submission" || results[i].formtype=="Rankup"))
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

    var b64content = fs.readFileSync(getTwitterImageURL(playerRank), { encoding: 'base64' })
                 
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

function updatedSubmissionToBotAnnounced(post_id,callback){

  setTimeout( function(){

    console.log("updating");
    var appStatus = "update wp_kikf_postmeta set meta_value='bot_announced' where meta_key='state' and meta_value='approved' and post_id="+post_id+"";
    console.log(appStatus);

    connection.query(appStatus, function (error, results) {
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

    var b64content = fs.readFileSync(getTwitterImageURL(playerRank), { encoding: 'base64' })
                  
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



