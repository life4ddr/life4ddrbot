const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
require('dotenv').config();


//twitter
var twit = require('twit');
var config = require('./config.js');
var Twitter = new twit(config);

//discord
var Discord = require('discord.js');
var bot = new Discord.Client();

//waitfor
var wait = require('wait.for');


bot.login(process.env.DISCORD_BOT_TOKEN);

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
  });


//mysql
var mysql = require('mysql');
var connection;


var getTwitterImageURL = function(rank)
{
  var twitterImageURL = "";

  if (rank == "Gold I" || rank ==  "Gold I (P)")
  {
    twitterImageURL = './rankup_images/G1.png';
  }
  else if (rank == "Gold II" || rank ==  "Gold II (P)")
  {
    twitterImageURL = './rankup_images/G2.png';
  }
  else if (rank == "Gold III" || rank ==  "Gold III (P)")
  {
    twitterImageURL = './rankup_images/G3.png';
  }
  else if (rank == "Silver I" || rank == "Silver I (P)")
  {
    twitterImageURL = './rankup_images/S1.png';
  }
  else if (rank == "Silver II"  || rank ==  "Silver II (P)")
  {
    twitterImageURL = './rankup_images/S2.png';
  }
  else if (rank == "Silver III"  || rank ==  "Silver III (P)")
  {
    twitterImageURL = './rankup_images/S3.png';
  }
  else if (rank == "Bronze I"  || rank ==  "Bronze I (P)")
  {
    twitterImageURL = './rankup_images/B1.png';
  }
  else if (rank == "Bronze II"  || rank ==  "Bronze II (P)")
  {
    twitterImageURL = './rankup_images/B2.png';
  }
  else if (rank == "Bronze III"  || rank ==  "Bronze III (P)")
  {
    twitterImageURL = './rankup_images/B3.png';
  }
  else if (rank == "Diamond I")
  {
    twitterImageURL = './rankup_images/D1.png';
  }
  else if (rank == "Diamond II")
  {
    twitterImageURL = './rankup_images/D2.png';
  }
  else if (rank == "Diamond III")
  {
    twitterImageURL = './rankup_images/D3.png';
  }
  else if (rank == "Cobalt I")
  {
    twitterImageURL = './rankup_images/C1.png';
  }
  else if (rank == "Cobalt II")
  {
    twitterImageURL = './rankup_images/C2.png';
  }
  else if (rank == "Cobalt III")
  {
    twitterImageURL = './rankup_images/C3.png';
  }
  else if (rank == "Wood I" || rank ==  "Wood I (P)")
  {
    twitterImageURL = './rankup_images/W1.png';
  }
  else if (rank == "Wood II" || rank ==  "Wood II (P)")
  {
    twitterImageURL = './rankup_images/W1.png';
  }
  else if (rank == "Wood III" || rank ==  "Wood III (P)")
  {
    twitterImageURL = './rankup_images/W3.png';
  }
  else if (rank == "Amethyst I")
  {
    twitterImageURL = './rankup_images/A1.png';
  }
  else if (rank == "Amethyst II")
  {
    twitterImageURL = './rankup_images/A2.png';
  }
  else if (rank == "Amethyst III")
  {
    twitterImageURL = './rankup_images/A3.png';
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
  else if (rank == "Wood I" || rank ==  "Wood I (P)")
  {
    discordemoji = "<:w1:540808051284901898>";
  }
  else if (rank == "Wood II" || rank ==  "Wood II (P)")
  {
    discordemoji = "<:w2:540808115994492948>";
  }
  else if (rank == "Wood III" || rank ==  "Wood III (P)")
  {
    discordemoji = "<:w3:540808178108203018>";
  }
  else if (rank == "Amethyst I")
  {
    discordemoji = "<:a1:540807826323537930>";
  }
  else if (rank == "Amethyst II")
  {
    discordemoji = "<:a2:540807915850956810>";
  }
  else if (rank == "Amethyst III")
  {
    discordemoji = "<:a3:540807991373594633>";
  }


  return discordemoji;
}

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
const TOKEN_PATH = 'token.json';



function readSecretsFromFile()
{
  //load client secrets
    fs.readFile('credentials.json', (err, content) => {
      if (err) return console.log('Error loading client secret file:', err);
      authorize(JSON.parse(content), getFromPlayerSpreadsheet);
    });

}

function getCredentials(callback){
  setTimeout( function(){
                fs.readFile('credentials.json', (err, content) => {
                  if (err) return console.log('Error loading client secret file:', err);
                  var creddata = JSON.parse(content);
                  callback(null,creddata);
                  //authorize(JSON.parse(content), newGetTrials);
                });
                //callback(null,'hi '+param);
      }, 1000);
};

function trialGetSpreadsheetRowNameValue(row, callback){
  setTimeout( function(){

            var returnedName = `${row[0]}`;

            console.log("name = " + returnedName);

            callback(null,returnedName)

  }, 100);
}; 


function trialGetSpreadsheetRowRankValue(row, callback){
  setTimeout( function(){

            var returnedRank = `${row[1]}`;

            console.log("rank = " + returnedRank);

            callback(null,returnedRank)

  }, 100);
}; 


function trialGetSpreadsheetRowTwitterHandleValue(row, callback){
  setTimeout( function(){

            var returnedtwitter = `${row[4]}`;

            console.log("twitter  = " + returnedtwitter);

            callback(null,returnedtwitter)

  }, 100);
}; 

function trialGetSpreadsheetRowRivalCodeValue(row, callback){
  setTimeout( function(){

            var returnedrival = `${row[3]}`;

            console.log("rival  = " + returnedrival);

            callback(null,returnedrival)

  }, 100);
}; 

function trialGetSpreadsheetRowScoreValue(row, callback){
  setTimeout( function(){

            var returnedScore = `${row[2]}`;
            returnedScore = returnedScore.substr(0, returnedScore.indexOf(' '));
            console.log("score = " + returnedScore);

            callback(null,returnedScore)

  }, 100);
}; 

function trialGetSpreadsheetRowDiffValue(row, callback){
  setTimeout( function(){

            var returnedDiff = `${row[2]}`;
            returnedDiff = returnedDiff.substr(returnedDiff.indexOf('('), returnedDiff.indexOf(')'));
            console.log("diff = " + returnedDiff);

            callback(null,returnedDiff)

  }, 100);
}; 

//checks existing DB for player
/*
function trialCheckForPlayer(playername,callback){
  setTimeout( function(){

        var playerquery = "SELECT playerName, playerRank, playerID, playerDateEarned FROM playerList WHERE playerName = '" + playername + "'";
          connection.query(playerquery, function (error, results) {
            if (error) throw error;
            callback(null,results)

          });


}, 250);
}
*/

function trialCheckForExistingTrial(playerName,trialName, callback){

  setTimeout( function(){

    var checkfortrialquery = "SELECT playerTrialRankID, playerRank, playerScore FROM playertrialrank where playerName = '" + playerName + "' and trialName = '" + trialName + "'";
    connection.query(checkfortrialquery, function (error, results) {
        if (error) throw error;
        callback(null,results)

      });


}, 250);

}


function insertNewTrialRecord(playerName,playerRivalCode,trialName,playerRank,playerScore,playerDiff,playerTwitterHandle, callback){

  setTimeout( function(){

    var insertquery = "INSERT INTO playertrialrank (playerName, playerRivalCode, trialName, playerRank, playerScore, playerDiff, playerTwitterHandle, playerUpdateDate) VALUES ('"+playerName+"','"+playerRivalCode+"','"+trialName+"','"+playerRank+"','"+playerScore+"','"+playerDiff+"','"+playerTwitterHandle+"',now())";
    connection.query(insertquery, function (error, results) {
        if (error) throw error;
        callback(null,results)

      });


}, 250);

}

function insertNewTrialAuditRecord(playerTrialID,playerRank,playerScore,playerDiff,callback)
{
  setTimeout( function(){

    var insertquery = "INSERT INTO playertrialrankhistory (playerTrialRankID, playerRank, playerScore, playerDiff, playerUpdateDate) VALUES ('"+playerTrialID+"','"+playerRank+"','"+playerScore+"','"+playerDiff+"',now())";
    connection.query(insertquery, function (error, results) {
        if (error) throw error;
        callback(null,results)

      });


}, 250);

}


var getTwitterTrialImageURL = function(trial,rank)
{
  var twitterImageURL = "";

  //HEARTBREAK(12)
  if (rank == "Silver" && trial == "HEARTBREAK(12)")
  {
    twitterImageURL = './trial_images/HEARTBREAK/HEARTBREAK SILVER.png';
  }
  else if (rank == "Gold" && trial == "HEARTBREAK(12)")
  {
    twitterImageURL = './trial_images/HEARTBREAK/HEARTBREAK GOLD.png';
  }
  else if (rank == "Diamond" && trial == "HEARTBREAK(12)")
  {
    twitterImageURL = './trial_images/HEARTBREAK/HEARTBREAK DIAMOND.png';
  }
  else if (rank == "Cobalt" && trial == "HEARTBREAK(12)")
  {
    twitterImageURL = './trial_images/HEARTBREAK/HEARTBREAK COBALT.png';
  }
  else if (rank == "Amethyst" && trial == "HEARTBREAK(12)")
  {
    twitterImageURL = './trial_images/HEARTBREAK/HEARTBREAK AMETHYST.png';
  }
//CELESTIAL(13)
else if (rank == "Silver" && trial == "CELESTIAL(13)")
{
  twitterImageURL = './trial_images/CELESTIAL/CELESTIAL SILVER.png';
}
else if (rank == "Gold" && trial == "CELESTIAL(13)")
{
  twitterImageURL = './trial_images/CELESTIAL/CELESTIAL GOLD.png';
}
else if (rank == "Diamond" && trial == "CELESTIAL(13)")
{
  twitterImageURL = './trial_images/CELESTIAL/CELESTIAL DIAMOND.png';
}
else if (rank == "Cobalt" && trial == "CELESTIAL(13)")
{
  twitterImageURL = './trial_images/CELESTIAL/CELESTIAL COBALT.png';
}
else if (rank == "Amethyst" && trial == "CELESTIAL(13)")
{
  twitterImageURL = './trial_images/CELESTIAL/CELESTIAL AMETHYST.png';
}
//DAYBREAK(14)
else if (rank == "Silver" && trial == "DAYBREAK(14)")
{
  twitterImageURL = './trial_images/DAYBREAK/DAYBREAK SILVER.png';
}
else if (rank == "Gold" && trial == "DAYBREAK(14)")
{
  twitterImageURL = './trial_images/DAYBREAK/DAYBREAK GOLD.png';
}
else if (rank == "Diamond" && trial == "DAYBREAK(14)")
{
  twitterImageURL = './trial_images/DAYBREAK/DAYBREAK DIAMOND.png';
}
else if (rank == "Cobalt" && trial == "DAYBREAK(14)")
{
  twitterImageURL = './trial_images/DAYBREAK/DAYBREAK COBALT.png';
}
else if (rank == "Amethyst" && trial == "DAYBREAK(14)")
{
  twitterImageURL = './trial_images/DAYBREAK/DAYBREAK AMETHYST.png';
}
//HELLSCAPE(14)
else if (rank == "Silver" && trial == "HELLSCAPE(14)")
{
  twitterImageURL = './trial_images/HELLSCAPE/HELLSCAPE SILVER.png';
}
else if (rank == "Gold" && trial == "HELLSCAPE(14)")
{
  twitterImageURL = './trial_images/HELLSCAPE/HELLSCAPE GOLD.png';
}
else if (rank == "Diamond" && trial == "HELLSCAPE(14)")
{
  twitterImageURL = './trial_images/HELLSCAPE/HELLSCAPE DIAMOND.png';
}
else if (rank == "Cobalt" && trial == "HELLSCAPE(14)")
{
  twitterImageURL = './trial_images/HELLSCAPE/HELLSCAPE COBALT.png';
}
else if (rank == "Amethyst" && trial == "HELLSCAPE(14)")
{
  twitterImageURL = './trial_images/HELLSCAPE/HELLSCAPE AMETHYST.png';
}
//CLOCKWORK(15)
else if (rank == "Silver" && trial == "CLOCKWORK(15)")
{
  twitterImageURL = './trial_images/CLOCKWORK/CLOCKWORK SILVER.png';
}
else if (rank == "Gold" && trial == "CLOCKWORK(15)")
{
  twitterImageURL = './trial_images/CLOCKWORK/CLOCKWORK GOLD.png';
}
else if (rank == "Diamond" && trial == "CLOCKWORK(15)")
{
  twitterImageURL = './trial_images/CLOCKWORK/CLOCKWORK DIAMOND.png';
}
else if (rank == "Cobalt" && trial == "CLOCKWORK(15)")
{
  twitterImageURL = './trial_images/CLOCKWORK/CLOCKWORK COBALT.png';
}
else if (rank == "Amethyst" && trial == "CLOCKWORK(15)")
{
  twitterImageURL = './trial_images/CLOCKWORK/CLOCKWORK AMETHYST.png';
}
//PHARAOH(15)
else if (rank == "Silver" && trial == "PHARAOH(15)")
{
  twitterImageURL = './trial_images/PHARAOH/PHARAOH SILVER.png';
}
else if (rank == "Gold" && trial == "PHARAOH(15)")
{
  twitterImageURL = './trial_images/PHARAOH/PHARAOH GOLD.png';
}
else if (rank == "Diamond" && trial == "PHARAOH(15)")
{
  twitterImageURL = './trial_images/PHARAOH/PHARAOH DIAMOND.png';
}
else if (rank == "Cobalt" && trial == "PHARAOH(15)")
{
  twitterImageURL = './trial_images/PHARAOH/PHARAOH COBALT.png';
}
else if (rank == "Amethyst" && trial == "PHARAOH(15)")
{
  twitterImageURL = './trial_images/PHARAOH/PHARAOH AMETHYST.png';
}
//PARADOX(16)
else if (rank == "Gold" && trial == "PARADOX(16)")
{
  twitterImageURL = './trial_images/PARADOX/PARADOX GOLD.png';
}
else if (rank == "Diamond" && trial == "PARADOX(16)")
{
  twitterImageURL = './trial_images/PARADOX/PARADOX DIAMOND.png';
}
else if (rank == "Cobalt" && trial == "PARADOX(16)")
{
  twitterImageURL = './trial_images/PARADOX/PARADOX COBALT.png';
}
else if (rank == "Amethyst" && trial == "PARADOX(16)")
{
  twitterImageURL = './trial_images/PARADOX/PARADOX AMETHYST.png';
}
//INHUMAN(16)
else if (rank == "Gold" && trial == "INHUMAN(16)")
{
  twitterImageURL = './trial_images/INHUMAN/INHUMAN GOLD.png';
}
else if (rank == "Diamond" && trial == "INHUMAN(16)")
{
  twitterImageURL = './trial_images/INHUMAN/INHUMAN DIAMOND.png';
}
else if (rank == "Cobalt" && trial == "INHUMAN(16)")
{
  twitterImageURL = './trial_images/INHUMAN/INHUMAN COBALT.png';
}
else if (rank == "Amethyst" && trial == "INHUMAN(16)")
{
  twitterImageURL = './trial_images/INHUMAN/INHUMAN AMETHYST.png';
}
//CHEMICAL(17)
else if (rank == "Gold" && trial == "CHEMICAL(17)")
{
  twitterImageURL = './trial_images/CHEMICAL/CHEMICAL GOLD.png';
}
else if (rank == "Diamond" && trial == "CHEMICAL(17)")
{
  twitterImageURL = './trial_images/CHEMICAL/CHEMICAL DIAMOND.png';
}
else if (rank == "Cobalt" && trial == "CHEMICAL(17)")
{
  twitterImageURL = './trial_images/CHEMICAL/CHEMICAL COBALT.png';
}
else if (rank == "Amethyst" && trial == "CHEMICAL(17)")
{
  twitterImageURL = './trial_images/CHEMICAL/CHEMICAL AMETHYST.png';
}
//ORIGIN(18)
else if (rank == "Diamond" && trial == "ORIGIN(18)")
{
  twitterImageURL = './trial_images/ORIGIN/ORIGIN DIAMOND.png';
}
else if (rank == "Cobalt" && trial == "ORIGIN(18)")
{
  twitterImageURL = './trial_images/ORIGIN/ORIGIN COBALT.png';
}
else if (rank == "Amethyst" && trial == "ORIGIN(18)")
{
  twitterImageURL = './trial_images/ORIGIN/ORIGIN AMETHYST.png';
}

  return twitterImageURL;

}


function announceNewPlayerTrialTwitter(playerName, playerRank,playerScore,playerDiff,playerTwitterHandle,trialName,callback)
{
  setTimeout( function(){

    //TODO: Need to add @ to players with Twitter handles
    var post = "Player " + playerName + " has earned the " + playerRank + " Trial Rank for " + trialName + " with " + playerScore + " EX " + playerDiff + "!";

    var b64content = fs.readFileSync(getTwitterTrialImageURL(trialName,playerRank), { encoding: 'base64' })
                  
    // get the new image media on twitter!
    Twitter.post('media/upload', { media_data: b64content }, function (err, data, response) {
      var mediaIdStr = data.media_id_string
      var altText = "Player trial rank rank"
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


}, 250);

}

function announceNewPlayerTrialDiscord(playerName, playerRank,playerScore,playerDiff,trialName,callback)
{
  setTimeout( function(){

    //TODO: Need to add discord icons
    var discordpost = "Player " + playerName + " has earned the " + playerRank + " Trial Rank for " + trialName + " with " + playerScore + " EX " + playerDiff + "!";

    const channel = bot.channels.find('name', 'trial-rankups')
    channel.send(discordpost)
    .then(message => console.log(discordpost))
    .catch(console.error);



    callback(null,"done");


}, 250);

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

  //TODO: Add update here for players!




  var listOfTrials = [
    "HEARTBREAK(12)",
    "CELESTIAL(13)",
    "DAYBREAK(14)",
    "HELLSCAPE(14)",
    "CLOCKWORK(15)",
    "PHARAOH(15)",
    "PARADOX(16)",
    "INHUMAN(16)",
    "CHEMICAL(17)",
    "ORIGIN(18)"
  ];

  var trialRanges = [
    'ALL TRIALS!A2:E',
    'ALL TRIALS!F2:J',
    'ALL TRIALS!K2:O',
    'ALL TRIALS!P2:T',
    'ALL TRIALS!U2:Y',
    'ALL TRIALS!Z2:AD',
    'ALL TRIALS!AE2:AI',
    'ALL TRIALS!AJ2:AN',
    'ALL TRIALS!AO2:AS',
    'ALL TRIALS!AT2:AX'
  ];

  console.log("Trials starting");
  var getTrialJSON = wait.for(getCredentials);
  console.log("JSON Cred object retrieved!");
  var getauth = wait.for(newauthorize,getTrialJSON);
  console.log("Authorization complete! Hot damn!");

  for (var i = 0; i < listOfTrials.length;i++)
  {
  console.log("Beginning " + listOfTrials[i]);

  //get the list of players
  var trialPlayerList = wait.for(newGetTrials, getauth, trialRanges[i]);

  console.log(listOfTrials[i] +" LIST RETRIEVED!");
  //for each player
  if (trialPlayerList.length)
  {
    console.log("Retrieving" + listOfTrials[i] + " player info...");
    trialPlayerList.map((row) => {
      var playerName = wait.for(trialGetSpreadsheetRowNameValue,row);
      var playerRank = wait.for(trialGetSpreadsheetRowRankValue,row);
      var playerScore = wait.for(trialGetSpreadsheetRowScoreValue,row);
      var playerDiff = wait.for(trialGetSpreadsheetRowDiffValue,row);
      var playerTwitter = wait.for(trialGetSpreadsheetRowTwitterHandleValue,row);
      var playerRival = wait.for(trialGetSpreadsheetRowRivalCodeValue,row);
      //check for player in DB
      //NO LONGER NEEDED
      //var playerresults = wait.for(trialCheckForPlayer,heartbreakName);

          //check for player in trials DB
          var trialresults = wait.for(trialCheckForExistingTrial, playerName, listOfTrials[i]);
          if (trialresults && trialresults.length)
          {
            console.log("exists!");
            //run the update
          }
          else
          {
            console.log("Player does not exist! Inserting new record!");
            var insertresults = wait.for(insertNewTrialRecord, playerName, playerRival, listOfTrials[i],playerRank, playerScore, playerDiff,playerTwitter);
            trialresults = wait.for(trialCheckForExistingTrial, playerName, listOfTrials[i]);
            console.log("Insert complete! Preparing audit update");
            insertresults = wait.for(insertNewTrialAuditRecord, trialresults[0].playerTrialRankID,playerRank, playerScore, playerDiff);
            console.log("Insert complete! Preparing announcement...");
            //TODO: need to determine ranking
            var twitterannounce = wait.for(announceNewPlayerTrialTwitter, playerName, playerRank,playerScore,playerDiff, playerTwitter, listOfTrials[i]);
            console.log("Twitter announcement complete!");
            var discordannounce = wait.for(announceNewPlayerTrialDiscord, playerName, playerRank,playerScore,playerDiff, listOfTrials[i]);
            console.log("Discord announcement complete!");

          }

    });
  }

  console.log(listOfTrials[i] + " complete!");

}

//TODO: Close the MySQL connection

}

function newauthorize(credentials, callback) {

  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(null,oAuth2Client);
  });


};


//authorize the app
function authorize(credentials, callback) {

  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });


};

//get google token
function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error while trying to retrieve access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

//check to see if a player has deranked
var checkForDerank = function(existingRank,newRank)
{
  console.log("Old Rank = " + existingRank);
  console.log("New Rank = " + newRank);

  if (existingRank == "Wood II (P)" && newRank =="Wood I")
  {
    return true;
  }
  else if (existingRank == "Wood III (P)" && newRank =="Wood II")
  {
    return true;
  }
  else if (existingRank == "Bronze I (P)" && newRank =="Wood III")
  {
    return true;
  }
  else if (existingRank == "Bronze II (P)" && newRank =="Bronze I")
  {
    return true;
  }
  else if (existingRank == "Bronze III (P)" && newRank =="Bronze II")
  {
    return true;
  }
  else if (existingRank == "Silver I (P)" && newRank =="Bronze III")
  {
    return true;
  }
  else if (existingRank == "Silver II (P)" && newRank =="Silver I")
  {
    return true;
  }
  else if (existingRank == "Silver III (P)" && newRank =="Silver II")
  {
    return true;
  }
  else if (existingRank == "Gold I (P)" && newRank =="Silver III")
  {
    return true;
  }
  else if (existingRank == "Gold II (P)" && newRank =="Gold I")
  {
    return true;
  }
  else if (existingRank == "Gold III (P)" && newRank =="Gold II")
  {
    return true;
  }
  //for testing
  else if (existingRank == "Diamond I (P)" && newRank =="Gold III")
  {
    return true;
  }

  return false;
}


//for player ranks! retrieve from the spreadsheet
function getFromPlayerSpreadsheet(auth) {

  
  connection = mysql.createConnection({
    host     : process.env.MYSQLHOST,
    user     : process.env.MYSQLUSER,
    password : process.env.MYSQLPW,
    database : process.env.MYSQLPLAYERDB
  });

  const sheets = google.sheets({version: 'v4', auth});
  sheets.spreadsheets.values.get({
    spreadsheetId: '1FPiO1h9XDSeTB6tWmRi7ursSqFOBYitiVweu3eOQ8tg',
    range: 'User List!A2:E',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;

    console.log('BEGINNING PLAYER RANK FUNCTION');


    if (rows.length) {

      connection.connect();



      rows.map((row) => {


        
        var playerName = `${row[0]}`;
        var playerRank = `${row[1]}`;
        var playerRivalCode = `${row[2]}`;
        var playerTwitterHandle = `${row[3]}`;
        var playerDateEarned = `${row[4]}`;

        if (playerName === undefined || playerRank === undefined || (playerRank === undefined && playerName === undefined))
        {
          console.log("This is undefined!");
        }
        else
        {


        var playerquery = "SELECT playerName, playerRank, playerID, playerDateEarned from playerList WHERE playerName = '" + playerName + "'";
        var insertplayerquery = "INSERT INTO playerList (playerName, playerRank, playerRivalCode, twitterHandle, playerDateEarned) VALUES ('" + playerName + "','" + playerRank + "','" + playerRivalCode + "','"+playerTwitterHandle+"','" + playerDateEarned + "')";

        //not used
        //var playerCountQuery = "select COUNT(*) AS playercount from playerList";


        connection.query(playerquery, function (error, results) {
          if (error) throw error;
          //player exists!
          if (results && results.length)
          {
            console.log("Player " + playerName +" exists!");
            console.log(results);

            //query for update inserts!
            var playerHistoryInsert = "INSERT INTO playerHistory (playerID, playerRank, playerUpdate) VALUES ('" + results[0].playerID + "','" +results[0].playerRank + "', now())";


            //check for rank-up
            if (results[0].playerRank == playerRank)
            {
                //rank is the same!
                console.log(playerName +"'s rank has not changed!");
            }
            else
            {
                //rank change!
                console.log(playerName +"'s rank has changed! Was: " + playerRank + " | is now: " + results[0].playerRank);
                var updateplayerquery = "UPDATE playerList set playerRank='" + playerRank + "', playerRivalCode='"+playerRivalCode+"', twitterHandle='"+ playerTwitterHandle + "', playerDateEarned='" + playerDateEarned + "' where playerName = '" + playerName +"'";
                console.log(updateplayerquery);



                //run the main table update
                connection.query(updateplayerquery, function (ierror,iresults) {
                  if (ierror) throw ierror;
                  console.log("Player " + playerName + " rank updated!");

                  //derank check
                  var isDerank = checkForDerank(results[0].playerRank, playerRank);

                  var twitterpost ="";
                  var discordpost = "";
                  if (playerTwitterHandle != "")
                  {
                    if (isDerank == true)
                    {
                      twitterpost = "Player " + playerName + " (" + playerTwitterHandle + ") has de-ranked out of their placement rank to " + playerRank +". Don't give up, you can do it!";
                    }
                    else
                    {
                      twitterpost = "Player " + playerName + " (" + playerTwitterHandle + ") has earned a new rank! They are now " + playerRank +"! Congratulations! ";
                    }
                  }
                  else
                  {
                    if (isDerank == true)
                    {
                      twitterpost = "Player " + playerName + " has de-ranked out of their placement rank to " + playerRank +". Don't give up, you can do it! ";
                    }
                    else
                    {
                      twitterpost = "Player " + playerName + " has earned a new rank! They are now " + playerRank +"! Congratulations! ";
                    }
                  }

                  if (isDerank == true)
                  {
                    discordpost = "Player " + playerName + " has de-ranked out of their placement rank to " + playerRank +". Don't give up, you can do it!" + getDiscordIcon(playerRank);
                  }
                  else
                  {
                    discordpost = "Player " + playerName + " has earned a new rank! They are now " + playerRank +"! Congratulations! "  + getDiscordIcon(playerRank);
                  }



                  //update don't do anything if it's a derank!
                  if (isDerank == false)
                  {

                  
                  // read the file
                  var b64content = fs.readFileSync(getTwitterImageURL(playerRank), { encoding: 'base64' })
                  
                  // get the new image media on twitter!
                  Twitter.post('media/upload', { media_data: b64content }, function (err, data, response) {
                    var mediaIdStr = data.media_id_string
                    var altText = "Player rank"
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



                  const channel = bot.channels.find('name', 'rankups')
                  channel.send(discordpost)
                  .then(message => console.log(discordpost))
                  .catch(console.error);
                  
                }


                //run the history table query
                connection.query(playerHistoryInsert, function(error,results2)
                {
                  if (error) throw error;
                  console.log(results2);
                });
                
              });


            }
          }
          //player doesn't exist! Create a record and tweet it out!
          else
          {
            console.log("Player " + playerName + " does not exist!");

            connection.query(insertplayerquery, function (ierror,iresults) {
                if (ierror) throw ierror;
                console.log("Player " + playerName + " created!");
                //var post = playerName + " has joined LIFE4!";

                var twitterpost ="";
                var discordpost = "";
                if (playerTwitterHandle != "")
                {
                  twitterpost = "Player " + playerName + " (" + playerTwitterHandle + ") has joined LIFE4! Their current rank is " + playerRank + "!";
                }
                else
                {
                  twitterpost = "Player " + playerName + " has joined LIFE4! Their current rank is " + playerRank + "!";
                }

                discordpost = "Player " + playerName + " has joined LIFE4! Their current rank is " + playerRank + "! Welcome! " + getDiscordIcon(playerRank);

                  // read the file
                  var b64content = fs.readFileSync(getTwitterImageURL(playerRank), { encoding: 'base64' })
                  
                  // get the new image media on twitter!
                  Twitter.post('media/upload', { media_data: b64content }, function (err, data, response) {
                    var mediaIdStr = data.media_id_string
                    var altText = "Player rank"
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

                const channel = bot.channels.find('name', 'rankups')
                channel.send(discordpost)
                .then(message => console.log(discordpost))
                .catch(console.error);


            });


            //GET THE PLAYER ID
            var getPlayerID = "SELECT playerID from playerList where playerName='" + playerName + "'";
            connection.query(getPlayerID, function(error,results3)
            {
              if (error) throw error;
                //DO THE INSERT
                var playerHistoryInsert = "INSERT INTO playerHistory (playerID, playerRank, playerUpdate) VALUES ('" + results3[0].playerID + "','" + playerRank + "', now())";
                connection.query(playerHistoryInsert, function(error,results4)
                {
                  if (error) throw error;
                  console.log(results4);
                });            
          });
            



            //check counts!
            /*
            connection.query(playerCountQuery, function (error, results) {
              if (error) throw error;
              if (results && results.length)
              {
                var count = results[0].playercount;

                console.log(count);

                if (count % 50 == 0)
                {
                    var milestoneposttwitter = "Wow! " + count + " players have joined @LIFE4DDR!";
                    var milestonepostdiscord = "Wow! " + count + " players have joined LIFE4!";

                    Twitter.post('statuses/update', {status: milestoneposttwitter}, function(err, data, response) {
                        console.log(data)
                    });

                    const channel = bot.channels.find('name', 'general')
                    channel.send(milestonepostdiscord)
                    .then(message => console.log(milestonepostdiscord))
                    .catch(console.error);
                }
                else if (count == 420)
                {
                  var milestoneposttwitter = "Wow! " + count + " players have joined @LIFE4DDR! Nice.";
                  var milestonepostdiscord = "Wow! " + count + " players have joined LIFE4!";

                  Twitter.post('statuses/update', {status: milestoneposttwitter}, function(err, data, response) {
                      console.log(data)
                  });

                  const channel = bot.channels.find('name', 'general')
                  channel.send(milestonepostdiscord)
                  .then(message => console.log(milestonepostdiscord))
                  .catch(console.error);
                }
              }
            })
            */


          }
          console.log(`${row[0]}, ${row[1]}`);

        });

      //connection.end();

      }


      });

      connection.end();


    } else {
      console.log('No data found.');
    }


  });



}


function newGetTrials(auth,trialRange,callback)
{
  const sheets = google.sheets({version: 'v4', auth});
  sheets.spreadsheets.values.get({
    spreadsheetId: '1RfhOYUMcFoqfvaNG153YfE-bfeItMP0-ziGco5H-Gz4',
    range: trialRange,
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    callback(null,rows);
  });
}

// RUN THE STUFF HERE
//readSecretsFromFile();


wait.launchFiber(LIFE4sequence);
