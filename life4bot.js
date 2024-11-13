//Life4DDRBot
//Created by Steve Sefchick
//Program curated by the LIFE4 Admin Team
//2019 - 2023
//Tweets to @Life4DDRBot
//built using NodeJS

//TODO: Dependabot updates
//TODO: Add discord messaging

//TODO: Code cleanup, create another .js for functions
//TODO: ^ Queries
//TODO: ^ Old RR functions

//TODO: Add detailed error handling
//TODO: ^ Add try/catch that works
//TODO: ^ Auto disable bot
//TODO: ^ Discord error messaging

//fs used for file loading / trial images
const fs = require('fs');
const readline = require('readline');

//dotenv for environment variables
require('dotenv').config();

//functions
//image/icon functions
var twitterTrialImageFunction = require('./image_icon_functions/getTwitterTrialImageURL.js');
var twitterImageFunction = require('./image_icon_functions/getTwitterImageURL.js');
var discordIconFunction = require('./image_icon_functions/getDiscordIcon.js');
var discordTrialIconFunction = require('./image_icon_functions/getTrialDiscordIcon.js');
var discordLampIconFunction = require('./image_icon_functions/getDiscordLampIcon.js');

//twitter v2
const {TwitterApi} = require('twitter-api-v2');
const twitterClient = new TwitterApi({
  appKey: process.env.CONSUMER_KEY,
  appSecret: process.env.CONSUMER_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_TOKEN_SECRET
});


//discord
var Discord = require('discord.js');
var bot = new Discord.Client();
bot.login(process.env.DISCORD_BOT_TOKEN);

//discord channels
var adminchannel;
var playerrankupchannel;
var trialrankupchannel;
var rankupsroyalechannel;


/*
async function blueskytest() {
  const {Bot} = await import("@skyware/bot");
  var bsky_bot = new Bot();
  await bsky_bot.login({
    identifier: process.env.BSKY_USERNAME,
    password: process.env.BSKY_PASSWORD,
  });
  const post = await bsky_bot.post({
    text:"test! @stevec0re.bsky.social"
  });

}

blueskytest();
*/



//mysql
var mysql = require('mysql');
var connection;


//debug flag
var isDebug = false;



//BOT LOG IN
//This runs automatically in order to log in on discord and listen to activity
bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
  });






//connect to rankup channels
//give it some time to connect
function connectToRankupChannels(){

  return new Promise((resolve) => {

      setTimeout( function(){

        //connecting to rankup channels
        adminchannel = bot.channels.cache.get('596168285477666832');
        playerrankupchannel= bot.channels.cache.get('530616617571319809');
        trialrankupchannel= bot.channels.cache.get('556390024938258433');
        rankupsroyalechannel= bot.channels.cache.get('923765429518884895');

        resolve("done");

        
    }, 1000);
});


};

//wait function
function waitASec(ms){
  return new Promise((resolve) => {

        setTimeout( function(){

            resolve("done!");

      }, ms);

  });

}


//TODO - move this to function folder
function getTrialMetaKeyFieldNameOrLevel(trialname,nameorlevel)
{
  //name_ex = ex score
  //name_minus = minus ex score
  //level = trial level
  //rankingview = view mapping for overall ranking

  return new Promise((resolve) => {

  setTimeout( function(){


    if (isDebug)
    {
      resolve("ex minus value returned");
    }
    else
    {
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
    else if (trialname == "Confectionary")
    {
      if (nameorlevel=="name_ex")
      {
        returnedvalue="trial_Confectionary_ex";
      }
      else if (nameorlevel=="name_minus")
      {
        returnedvalue="trial_Confectionary_missing_ex";
      }
      else if (nameorlevel=="level")
      {
        returnedvalue=12;
      }
      else if (nameorlevel=="rankingview")
      {
        returnedvalue="wp_trial_confectionary_rankings";
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
    else if (trialname=="Storybook")
    {
      if (nameorlevel=="name_ex")
      {
        returnedvalue="trial_Storybook_ex";
      }
      else if (nameorlevel=="name_minus")
      {
        returnedvalue="trial_Storybook_missing_ex";
      }
      else if (nameorlevel=="level")
      {
        returnedvalue=13;
      }
      else if (nameorlevel=="rankingview")
      {
        returnedvalue="wp_trial_storybook_rankings";
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
    
    else if (trialname=="Sidequest")
    {
      if (nameorlevel=="name_ex")
      {
        returnedvalue="trial_Sidequest_ex";
      }
      else if (nameorlevel=="name_minus")
      {
        returnedvalue="trial_Sidequest_missing_ex";
      }
      else if (nameorlevel=="level")
      {
        returnedvalue=14;
      }
      else if (nameorlevel=="rankingview")
      {
        returnedvalue="wp_trial_sidequest_rankings";
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
    
    else if (trialname=="Dogfight")
    {
      if (nameorlevel=="name_ex")
      {
        returnedvalue="trial_Dogfight_ex";
      }
      else if (nameorlevel=="name_minus")
      {
        returnedvalue="trial_Dogfight_missing_ex";
      }
      else if (nameorlevel=="level")
      {
        returnedvalue=18;
      }
      else if (nameorlevel=="rankingview")
      {
        returnedvalue="wp_trial_dogfight_rankings";
      }
    }
    
    
    resolve(returnedvalue);
  }

}, 250);

  });

};



//Gets a player's discord "ID" from their handle (username)
function GetDiscordUserID()
{
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = bot.users.cache.find(u => u.username === 'stevesef')
      console.log(user.id);
      resolve(bot.users.cache.get("stevesef"));
    });
  });

};


function getBotStatus(){

  return new Promise((resolve) => {
 
    setTimeout( function(){

          if (isDebug)
          {
            console.log("debug time! bot is on!");
              resolve("ON");
          }
          else
          {
              var appStatus = "SELECT varValue from life4controls where varName='appStatus'";


              connection.query(appStatus, function (error, results) {
                if (error) throw error;
                resolve(results[0].varValue);

              });
          }
          
      }, 2000);

    });

}; 




//gets COUNT of approved forms with type
function getNumberOfApprovedFormsWithType(){


  return new Promise((resolve) => {

      setTimeout( function(){


        if (isDebug)
        {
          resolve(1);
        }
        else
        {
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
              resolve(count);

            });

      }
        
    }, 250);

});


};


//gets only latest post
//use form_id to retrieve the form type from the form meta table
function getNextApprovedQueue(){


  return new Promise((resolve) => {

    setTimeout( function(){


          if (isDebug)
          {
            resolve("debug found a next record!");
          }
          else
          {
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
              //callback(null,nextselected)
              resolve(nextselected);

            });
          }
        
        }, 500);
      });


};




//get player name
//meta value 42 = name
function getPostPlayerName(postid){

  return new Promise((resolve) => {

        setTimeout( function(){

          if (isDebug)
          {
              resolve("cool guy!");
          }
          else
          {
              var getQuery = "select meta_value from wp_kikf_postmeta where post_id="+postid+" and meta_key='_field_42'";

              connection.query(getQuery, function (error, results) {
                if (error) throw error;
                resolve(results[0].meta_value);
              });
          }
          
      }, 250);

  });

};

//get player rank
//meta value 5 = rank
function getPostPlayerRank(postid){

  return new Promise((resolve) => {

      setTimeout( function(){

        if (isDebug)
        {
            resolve("Gold V");
        }
        else
        {

          var getQuery = "select meta_value from wp_kikf_postmeta where post_id="+postid+" and meta_key='_field_5'";

          connection.query(getQuery, function (error, results) {
            if (error) throw error;
            resolve(results[0].meta_value);

          });
        }
        
    }, 250);

});

};

//get player subrank
//meta value 6 = subrank
function getPostPlayerSubRank(postid){

  return new Promise((resolve) => {

      setTimeout( function(){

        if (isDebug)
        {
            resolve("69");
        }
        else
        {
            var getQuery = "select meta_value from wp_kikf_postmeta where post_id="+postid+" and meta_key='_field_6'";

            connection.query(getQuery, function (error, results) {
              if (error) throw error;
              resolve(results[0].meta_value);

            });
        }
        
    }, 250);
  });

};

//get player player_id
//meta value 41 = user_fk
function getPostPlayerID(postid){

  return new Promise((resolve) => {

        setTimeout( function(){

          if (isDebug)
          {
            resolve("69");
          }
          else
          {
              var getQuery = "select meta_value from wp_kikf_postmeta where post_id="+postid+" and meta_key='_field_41'";

              connection.query(getQuery, function (error, results) {
                if (error) throw error;
                resolve(results[0].meta_value)

              });
        }
          
      }, 250);

  });

};


//get placement player_id
//meta value 58 = user_fk
function getPlacementPostPlayerID(postid){

  return new Promise((resolve) => {

      setTimeout( function(){


        if (isDebug)
        {
          resolve("Debug player id");
        }
        else
        {
            var getQuery = "select meta_value from wp_kikf_postmeta where post_id="+postid+" and meta_key='_field_58'";

            connection.query(getQuery, function (error, results) {
              if (error) throw error;
              resolve(results[0].meta_value);

            });
      }
        
    }, 25);

  });

};

//get RR submission player_id
//meta value 185 = user_fk
function getRRsubmissionPlayerID(postid){

  return new Promise((resolve) => {

  setTimeout( function(){

    var getQuery = "select meta_value from wp_kikf_postmeta where post_id="+postid+" and meta_key='_field_185'";

    connection.query(getQuery, function (error, results) {
      if (error) throw error;
      resolve(results[0].meta_value)

    });
    
}, 25);

  });

};

//get RR all submissions for that player
function getRRAllPlayerSubmissions(playerid){

  return new Promise((resolve) => {

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
      resolve(postcount);

    });
    
}, 25);

  });

};

//get RR submission player name
//meta value 187 = user_fk
function getRRsubmissionPlayerName(postid){


  return new Promise((resolve) => {

  setTimeout( function(){

    var getQuery = "select meta_value from wp_kikf_postmeta where post_id="+postid+" and meta_key='_field_184'";

    connection.query(getQuery, function (error, results) {
      if (error) throw error;
      resolve(results[0].meta_value);

    });
    
}, 25);

  });

};

//get RR song name
//meta value 181 = rr song name
function getRRsubmissionTourneySongName(postid){

  return new Promise((resolve) => {

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
      resolve(songcorrect);

    });
    
}, 25);

  });

};

//get RR song ex
//meta value 190 = ex song value
function getRRSubmissionEXScore(postid){

  return new Promise((resolve) => {

      setTimeout( function(){

        var getQuery = "select meta_value from wp_kikf_postmeta where post_id="+postid+" and meta_key='_field_190'";

        connection.query(getQuery, function (error, results) {
          if (error) throw error;
          resolve(results[0].meta_value);

        });
        
    }, 25);

  });

};

//RR Add string to end of ex score
function RRAddEXString(exvalue,minusexvalue){

  return new Promise((resolve) => {

        setTimeout( function(){

            var newstring = exvalue + " EX " + "(" + minusexvalue + ") ";
            resolve(newstring);
      }, 25);

  });

};

//get RR pb best
//meta value 191 = song letter score
function getRRSubmissionPersonalBestText(postid){

  return new Promise((resolve) => {

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
      resolve(returnedString);

    });
    
}, 25);

  });

};

//get RR song letter score
//meta value 189 = song letter score
function getRRSubmissionLetterScore(postid){

  return new Promise((resolve) => {

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

      resolve(lettervalue);

    });
    
}, 25);

  });

};

//TODO: Add this to its own function
//get RR -EX
function getRRMinusEXAmount(examount,songname){


  return new Promise((resolve) => {

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
      else if (songname=="ACE FOR ACES")
      {
        totalexforsong=2406;
      }

      var minusexamount = examount - totalexforsong;

      console.log(songname);
      console.log(examount);
      console.log(totalexforsong);
      console.log(minusexamount);

      resolve(minusexamount);

    
}, 25);

  });

};

//get RR player team
function getRRSubmissionPlayerTeamID(playerid){

  return new Promise((resolve) => {

  setTimeout( function(){

        var getQuery = "select rank_royale_team from wp_rr_rankings where user_id="+playerid+" limit 1";


        connection.query(getQuery, function (error, results) {
          if (error) throw error;
          resolve(results[0].rank_royale_team);

        });
        
    }, 25);

  });

};

//get RR player division
function getRRSubmissionPlayerDivision(playerid){

  return new Promise((resolve) => {

  setTimeout( function(){

        var getQuery = "select rank_royale_division from wp_rr_rankings where user_id="+playerid+" limit 1";


        connection.query(getQuery, function (error, results) {
          if (error) throw error;
          resolve(results[0].rank_royale_division);

        });
        
    }, 25);

  });

};

//get RR player team id
//meta value 188 = song letter score
function getRRSubmissionLamp(postid){

  return new Promise((resolve) => {

      setTimeout( function(){

        var getQuery = "select meta_value from wp_kikf_postmeta where post_id="+postid+" and meta_key='_field_188'";

        connection.query(getQuery, function (error, results) {
          if (error) throw error;
          resolve(results[0].meta_value);

        });
        
    }, 25);

  });

};

//get comp placement player_id
//meta value 67 = user_fk
function getCompPlacementPostPlayerID(postid){


  return new Promise((resolve) => {

      setTimeout( function(){

        if (isDebug)
        {
            resolve("Debug Player ID");
        }
        else
        {
            var getQuery = "select meta_value from wp_kikf_postmeta where post_id="+postid+" and meta_key='_field_67'";

            connection.query(getQuery, function (error, results) {
              if (error) throw error;
              resolve(results[0].meta_value);
            });
      }
        
    }, 250);

  });

};


//get placement player_id
//meta value 59 = player name
function getPlacementPostPlayerName(postid){

  return new Promise((resolve) => {

      setTimeout( function(){

        if (isDebug)
        {
            resolve("Debug Player Name");
        }
        else
        {
            var getQuery = "select meta_value from wp_kikf_postmeta where post_id="+postid+" and meta_key='_field_59'";

            connection.query(getQuery, function (error, results) {
              if (error) throw error;
              resolve(results[0].meta_value);

            });
        }
        
    }, 25);

  });

};

//get comp placement player_id
//meta value 68 = player name
function getCompPlacementPostPlayerName(postid){

  return new Promise((resolve) => {

      setTimeout( function(){

        if (isDebug)
        {
          resolve("Debug Player Name");
        }
        else
        {
        var getQuery = "select meta_value from wp_kikf_postmeta where post_id="+postid+" and meta_key='_field_68'";

        connection.query(getQuery, function (error, results) {
          if (error) throw error;
          resolve(results[0].meta_value);

        });
        }
        
    }, 250);

  });

};

//get placement player rank
//use player profile as that is what got approved
function getPlacementPostPlayerRank(userid){

  return new Promise((resolve) => {

      setTimeout( function(){

        if (isDebug)
        {
          resolve("Debug player rank");
        }
        else
        {
            var getQuery = "SELECT meta_value FROM wp_kikf_usermeta where user_id="+userid+" && meta_key='rank'";

            connection.query(getQuery, function (error, results) {
              if (error) throw error;
              resolve(results[0].meta_value);

            });
        }
        
    }, 25);

  });

};

//get player player_id
//meta value 53 = user_fk
function getTrialPostPlayerID(postid){

  return new Promise((resolve) => {

      setTimeout( function(){

        if (isDebug)
        {
            resolve("Trial Player Post Returned successfully!");
        }
        else
        {
            var getQuery = "select meta_value from wp_kikf_postmeta where post_id="+postid+" and meta_key='_field_53'";

            connection.query(getQuery, function (error, results) {
              if (error) throw error;
              //console.log(results);
              resolve(results[0].meta_value);
              //callback(null,results[0].meta_value)

            });
      }
        
    }, 250);

});

};

//get player name
//meta value 54 = name
function getTrialPostName(postid){

  return new Promise((resolve) => {

        setTimeout( function(){


          if (isDebug)
          {
            resolve("Test Name");
          }
          else
          {

              var getQuery = "select meta_value from wp_kikf_postmeta where post_id="+postid+" and meta_key='_field_54'";

              connection.query(getQuery, function (error, results) {
                if (error) throw error;
                resolve(results[0].meta_value);

              });
          }
          
      }, 250);

  });

};

//get trial title
//meta value 46 = trial title
function getTrialTitle(postid){

  return new Promise((resolve) => {

      setTimeout( function(){

        if (isDebug)
        {
          resolve("Trial Title");
        }
        else
        {
        var getQuery = "select meta_value from wp_kikf_postmeta where post_id="+postid+" and meta_key='_field_46'";

        connection.query(getQuery, function (error, results) {
          if (error) throw error;
          //console.log(results);
          //callback(null,results[0].meta_value)
          resolve(results[0].meta_value);

        });
      }
        
      }, 250);
  });

};

//get trial title
//meta value 46 = trial title
function getTrialRank(postid){

  return new Promise((resolve) => {

      setTimeout( function(){

        if (isDebug)
        {
            resolve("Diamond");
        }
        else
        {

            var getQuery = "select meta_value from wp_kikf_postmeta where post_id="+postid+" and meta_key='_field_49'";

            connection.query(getQuery, function (error, results) {
              if (error) throw error;
              resolve(results[0].meta_value);

            });
        }
        
    }, 250);

  });

};


//get player twitter handle
function getProfileTwitterHandle(playerid){

  return new Promise((resolve) => {

      setTimeout( function(){

        if (isDebug)
        {
            resolve("@coolguy");
        }
        else
        {
            var getQuery = "SELECT meta_value FROM wp_kikf_usermeta where meta_key='twitter_handle' and user_id="+playerid+"";

            connection.query(getQuery, function (error, results) {
              if (error) throw error;
              //console.log(results);
              //callback(null,results[0].meta_value)
              resolve(results[0].meta_value);

            });
        }
        
    }, 250);
});

};

//get player bluesky handle
function getProfileBlueskyHandle(playerid){

  return new Promise((resolve) => {

      setTimeout( function(){

        if (isDebug)
        {
            resolve("@coolguy");
        }
        else
        {
            var getQuery = "SELECT meta_value FROM wp_kikf_usermeta where meta_key='bluesky_handle' and user_id="+playerid+"";

            connection.query(getQuery, function (error, results) {
              if (error) throw error;
              //console.log(results);
              //callback(null,results[0].meta_value)
              if (results[0]==undefined)
              {
                resolve("");
              }
              else 
              {
                resolve(results[0].meta_value);
              }
            });
        }
        
    }, 250);
});

};

//get player discord handle
function getProfileDiscordHandle(playerid){

  return new Promise((resolve) => {

        setTimeout( function(){

          if (isDebug)
          {
            resolve("a discord handle!");
          }
          else
          {
          var getQuery = "SELECT meta_value FROM wp_kikf_usermeta where meta_key='discord_handle' and user_id="+playerid+"";

          connection.query(getQuery, function (error, results) {
            if (error) throw error;
            //callback(null,results[0].meta_value)
            resolve(results[0].meta_value);
          });
        }
          
      }, 250);

  });

};


function getTrialEXMinusfromMapping(user_id,mappingvalue){

  return new Promise((resolve) => {

        setTimeout( function(){

          if (isDebug)
          {
            resolve("EX Value returned!");
          }
          else
          {
              var trialquery = "select meta_value from wp_kikf_usermeta where meta_key='"+mappingvalue+"' and user_id="+user_id+"";


              connection.query(trialquery, function (error, results) {
                if (error) throw error;
                //callback(null,results[0].meta_value)
                resolve(results[0].meta_value);

              });
          }
          
      }, 250);

  });

}

function getTrialEXfromMapping(user_id,mappingvalue){

  return new Promise((resolve) => {

      setTimeout( function(){

        if (isDebug)
        {
          resolve("EX Value! is returned");
        }
        else
        {
            var trialquery = "select meta_value from wp_kikf_usermeta where meta_key='"+mappingvalue+"' and user_id="+user_id+"";


            connection.query(trialquery, function (error, results) {
              if (error) throw error;
              resolve(results[0].meta_value)
            });
        }
        
    }, 250);

  });

}


function setRankingVariable(){

  return new Promise((resolve) => {

      setTimeout( function(){

        if (isDebug)
        {
          resolve("sure!");
        }
        else
        {
          var trialquery = "set @ranking=0;";


          connection.query(trialquery, function (error, results) {
            if (error) throw error;
            resolve(results);

          });

        }
        
    }, 100);

});

}

function getTrialUserRanking(user_id,viewmapping){

  
  return new Promise((resolve) => {

      setTimeout( function(){

        if (isDebug)
        {
          resolve("test! a #1");
        }
        else
        {
          var trialquery = "select * from ( select @ranking:=@ranking+1 as 'ranking', username,user_id,trial_ex from "+viewmapping+" order by trial_ex desc ) as rankings where user_id="+user_id+"";

          connection.query(trialquery, function (error, results) {
            if (error) throw error;
            resolve(results[0].ranking);

          });
        }
        
    }, 250);

  });

}


function playerTrialTwitterPost(playerName, playerRank,playerScore,playerDiff,playerTwitterHandle,trialName,numberRank)
{

  return new Promise((resolve) => {

  setTimeout( function(){


    if (isDebug)
    {

      resolve("debug twitter announce done");

    }
    else
    {
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
        post = "Player " + playerName + " (" + playerTwitterHandle + ") scored " + playerScore + " EX (" + playerDiff + ") on the Limited Edition Trial " + trialName + " for a " + playerRank + " division rank of #"+numberRank+"!";
      }
      else
      {
        post = "Player " + playerName + " scored " + playerScore + " EX (" + playerDiff + ") on the Limited Edition Trial " + trialName + " for a " + playerRank + " division rank of #"+numberRank+"!";
      }
    }
    else if (isEvent == false)
    {
      if (playerTwitterHandle != "" && playerTwitterHandle != "undefined")
      {
        post = "Player " + playerName + " (" + playerTwitterHandle + ") has earned the " + playerRank + " Trial Rank for " + trialName + " with " + playerScore + " EX (" + playerDiff + ") for a Trial Ranking of #"+numberRank+"!";
      }
      else
      {
        post = "Player " + playerName + " has earned the " + playerRank + " Trial Rank for " + trialName + " with " + playerScore + " EX (" + playerDiff + ") for a Trial Ranking of #"+numberRank+"!";
      }
    }
    console.log(trialName + "||" + playerRank);
    
    resolve(post);
  }


}, 10000);

  });

}

function playerTrialBlueskyPost(playerName, playerRank,playerScore,playerDiff,trialName,numberRank,playerBlueskyHandle)
{

  return new Promise((resolve) => {

  setTimeout( function(){


    if (isDebug)
    {

      resolve("debug twitter announce done");

    }
    else
    {
    var post = "";
    var isEvent = false;
    if (trialName == "HALLOWED (13)")
    {
        isEvent = true;
    }
    
    if (isEvent == true)
    {
      if (playerBlueskyHandle != "" && playerBlueskyHandle != "undefined")
      {
        post = "Player " + playerName + " (" + playerBlueskyHandle + ") scored " + playerScore + " EX (" + playerDiff + ") on the Limited Edition Trial " + trialName + " for a " + playerRank + " division rank of #"+numberRank+"!";
      }
      else
      {
        post = "Player " + playerName + " scored " + playerScore + " EX (" + playerDiff + ") on the Limited Edition Trial " + trialName + " for a " + playerRank + " division rank of #"+numberRank+"!";
      }
    }
    else if (isEvent == false)
    {
      
      if (playerBlueskyHandle != "" && playerBlueskyHandle != "undefined")
      {
        post = "Player " + playerName + " (" + playerBlueskyHandle + ") has earned the " + playerRank + " Trial Rank for " + trialName + " with " + playerScore + " EX (" + playerDiff + ") for a Trial Ranking of #"+numberRank+"!";
      }
      else
      {
        post = "Player " + playerName + " has earned the " + playerRank + " Trial Rank for " + trialName + " with " + playerScore + " EX (" + playerDiff + ") for a Trial Ranking of #"+numberRank+"!";
      }
    }
    console.log(trialName + "||" + playerRank);
    
    resolve(post);
  }


}, 10000);

  });

}



function newPlayerTwitterPost(playerName, playerRank,playerTwitterHandle)
{
  return new Promise((resolve) => {

      setTimeout( function(){

        if (isDebug)
        {
          resolve("debug done");
        }
        else
        {
            var twitterpost ="";
            if (playerTwitterHandle != "" && playerTwitterHandle != "undefined")
            {
              twitterpost = "Player " + playerName + " (" + playerTwitterHandle + ") has joined LIFE4! Their current rank is " + playerRank + "!";
            }
            else
            {
              twitterpost = "Player " + playerName + " has joined LIFE4! Their current rank is " + playerRank + "!";
            }


            resolve(twitterpost);
      }


    }, 10000);
  });

}

function newPlayerBlueskyPost(playerName, playerRank,playerBlueskyHandle)
{
  return new Promise((resolve) => {

      setTimeout( function(){

        if (isDebug)
        {
          resolve("debug done");
        }
        else
        {
          var twitterpost ="";

            if (playerBlueskyHandle != "" && playerBlueskyHandle != "undefined")
            {
              twitterpost = "Player " + playerName + " (" + playerBlueskyHandle + ") has joined LIFE4! Their current rank is " + playerRank + "!";
            }
            else
            {
              twitterpost = "Player " + playerName + " has joined LIFE4! Their current rank is " + playerRank + "!";
            }


            resolve(twitterpost);
      }


    }, 10000);
  });

}


function updateRRSubmissionsToBotAnnounced(postlist){

  return new Promise((resolve) => {

      setTimeout( function(){

        console.log("updating");
        var updateall = "update wp_kikf_postmeta set meta_value='bot_announced' where meta_key='state' and meta_value='approved' and post_id in ("+postlist+")";

        connection.query(updateall, function (error, results) {
          if (error) throw error;
          resolve(results);
        });
        
    }, 25);

  });

}

function updatedSubmissionToBotAnnounced(post_id){

  return new Promise((resolve) => {

      setTimeout( function(){

        if (isDebug)
        {
            resolve("submission was announced! just kidding.");
        }
        else
        {
            console.log("updating");
            var updateall = "update wp_kikf_postmeta set meta_value='bot_announced' where meta_key='state' and meta_value='approved' and post_id ="+post_id+"";
            console.log(updateall);

            connection.query(updateall, function (error, results) {
              if (error) throw error;
              //callback(null,results)
              resolve(results);
            });
        }
        
    }, 25);

});

}


function playerRankupTwitterPost(playerName, playerRank,playerTwitterHandle)
{

  return new Promise((resolve) => {

        setTimeout( function(){

          if (isDebug)
          {
            resolve("I assure you, a posting was made");
          }
          else
          {

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

              resolve(twitterpost);
        }

    }, 10000);

  });

}

function playerRankupBlueskyPost(playerName, playerRank,playerBlueskyHandle)
{

  return new Promise((resolve) => {

        setTimeout( function(){

          if (isDebug)
          {
            resolve("I assure you, a posting was made");
          }
          else
          {
            var bskypost ="";

            
              if (playerBlueskyHandle != "" && playerBlueskyHandle != "undefined")
              {
                bskypost = "Player " + playerName + " (" + playerBlueskyHandle + ") has earned a new rank! They are now " + playerRank +"! Congratulations! ";
              }
              else
              {
                
                bskypost = "Player " + playerName + " has earned a new rank! They are now " + playerRank +"! Congratulations! ";
              }

              console.log(bskypost);

              resolve(bskypost);
        }

    }, 10000);

  });

}



//TODO: Add Discord Handle
function announcePlayerRankupDiscord(playerName, playerRank)
{

  return new Promise((resolve) => {

        setTimeout( function(){
          
          if (isDebug)
          {
                resolve("discord was announced");
          }
          else
          {
                var discordpost = "Player " + playerName + " has earned a new rank! They are now " + playerRank +"! Congratulations! "  + discordIconFunction.getDiscordIcon(playerRank);

                console.log(discordpost);
                
                playerrankupchannel.send(discordpost)
                .then(msg => { msg.react(discordIconFunction.getDiscordIcon(playerRank))})
                .catch(console.error);
                resolve("done");
                //callback(null,"done");
          }

      }, 750);

  });

}


//TODO: Test discord announce
//TODO: Re-enable twitter
function announceNewPlayerDiscord(playerName, playerRank,playerDiscordHandle)
{

  return new Promise((resolve) => {

      setTimeout( function(){

        if (isDebug)
        {
          resolve("debug done");
        }
        else
        {
          var discordpost = "Player " + playerName + " has joined LIFE4! Their current rank is " + playerRank + "! Welcome! " + discordIconFunction.getDiscordIcon(playerRank);

          
          playerrankupchannel.send(discordpost)
          //.then(message => console.log(discordpost))
          .then(msg => { msg.react(discordIconFunction.getDiscordIcon(playerRank)) })
          .catch(console.error);
          

          resolve("done");

        }

    }, 750); 

  });

}


function announceRRDiscordScore(playerName, playerscorecount,playerteam,playersong,playerexscore,playerlettergrade,playerlamp,pbbest,division)
{

  return new Promise((resolve) => {

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
          
          resolve("done");

          

      }, 750);

  });

}


//TODO: Add Discord Handle
function announceUpdatePlayerTrialDiscord(playerName, playerRank,playerScore,playerDiff,trialName, numberRank,callback)
{

  return new Promise((resolve) => {

  setTimeout( function(){

    if (isDebug)
    {
      resolve("debug done!");
    }
    else
    {
        var discordpost = "";
        
        discordpost = playerName + "\n" + trialName + " - " + playerRank + " " + discordTrialIconFunction.getTrialDiscordIcon(playerRank) +"\nScore: " + playerScore + " EX " + playerDiff + "\nTrial Rank: #"+numberRank;

        trialrankupchannel.send(discordpost)
        //.then(message => console.log(discordpost))
        .then(msg => { msg.react(discordTrialIconFunction.getTrialDiscordIcon(playerRank)) })
        .catch(console.error);

        resolve("done!");
    }


}, 750);

  });

}


//Make a database connection
function GetConnection(){
  return new Promise((resolve) => {
    setTimeout(() => {

      if (isDebug)
      {
        console.log("ok!");
        resolve("debug");
        
      }
      else
      {
        console.log("Starting connection...");
        connection = mysql.createConnection({
          host     : process.env.MYSQLHOST,
          user     : process.env.MYSQLUSER,
          password : process.env.MYSQLPW,
          database : process.env.MYSQLPLAYERDB
        });
        connection.connect();
        console.log("Connection get!");
        resolve(connection);
      }

    }, 5000);

});
};

//Return current time
function GetCurrentTime(){

  return new Promise((resolve) => {
    setTimeout(() => {

      var base_time = Date.now();
      resolve(new Date(base_time));

    }, 500);

  });
};

//Return current hours based on time
function GetCurrentHour(base_time){

  return new Promise((resolve) => {
    setTimeout(() => {

      resolve(base_time.getHours())

    }, 500);

  });
};

//
//ASYNC FUNCTION ZONE
//
async function MainLIFE4Sequence()
{

    console.log("Starting main sequence");

    //make connection
    connection = await GetConnection();
    //get bot status
    console.log("Getting bot status..");
    const botStatus = await getBotStatus();

    //Bot error - end!
    if (botStatus=="ERROR")
    {
      console.log("Bot is having issues! Bot will not run!");
    }
    //Bot off - end!
    else if (botStatus=="OFF")
    {
      console.log("Bot is off! Nothing will run!");
    }
    //Bot on - main flow
    else if (botStatus == "ON")
    {
      //get time and hours
      var time_ust = await GetCurrentTime();
      var time_hours = await GetCurrentHour(time_ust);
      console.log("TIME! It is " + time_hours+ " UTC right now");

      //check for new records
      console.log("Bot is checking the new postID queue");
      console.log("checking for new approved records");
      var queue_count = await getNumberOfApprovedFormsWithType();
      console.log(queue_count + " records found");

      //if more than 0 records are found, identify what to do next and announce!
      if (queue_count > 0)
      {

        //connect to rankup channels and get next record
        const rankup_channel_connect = await connectToRankupChannels();
        console.log("Connected to channnels! Checking for next new record...");
        var next_approved_record = await getNextApprovedQueue();
        
        //sort results into variables
        var post_id = next_approved_record.post_id;
        var queue_type = next_approved_record.formtype;
        console.log("queue type: " + queue_type);
        console.log("post_id:" + post_id + " and queuetype: "+queue_type+"");


        //Player Rankup
        if (queue_type == "Rankup")
        //if (isDebug)
        {
          //Get Player information for rankup
          console.log("Starting player rankup flow...");
          var player_id = await getPostPlayerID(post_id);
          console.log("Player ID: " + player_id);
          var player_name = await getPostPlayerName(post_id);
          console.log("Player Name: " + player_name);
          var player_rank = await getPostPlayerRank(post_id);
          console.log("Player Rank: " + player_rank);
          var player_sub_rank = await getPostPlayerSubRank(post_id);
          console.log("Player Rank Number: " + player_sub_rank);
          var player_twitter = await getProfileTwitterHandle(player_id);
          console.log("Player Twitter Handle: " + player_twitter);
          var player_bluesky = await getProfileBlueskyHandle(player_id);
          console.log("Player Bluesky Handle: " + player_bluesky);
          var player_discord = await getProfileDiscordHandle(player_id);
          console.log("Player Discord Handle: " + player_discord);
          
          //Perform Messaging
          var twitter_message = await playerRankupTwitterPost(player_name,player_rank + " " + player_sub_rank,player_twitter);
          var twitter_image = await twitterImageFunction.getTwitterImageURL(player_rank + " " + player_sub_rank);
          var twitter_image_posted = await twitterClient.v1.uploadMedia(twitter_image);
          var twitter_post = await twitterClient.v2.tweet({
            text: twitter_message,
            media: { media_ids: [twitter_image_posted]}
          });

          var discord_announce = await announcePlayerRankupDiscord(player_name, player_rank + " " + player_sub_rank)
          console.log("Discord announcement complete!");

          var bsky_message = await playerRankupBlueskyPost(player_name,player_rank + " " + player_sub_rank,player_bluesky);
          const {Bot} = await import("@skyware/bot");
          var bsky_bot = new Bot();
          await bsky_bot.login({
            identifier: process.env.BSKY_USERNAME,
            password: process.env.BSKY_PASSWORD,
          });
          const bsky_post = await bsky_bot.post({
            text:bsky_message
          });
          console.log("Bluesky announcement complete!");


          //Update Record
          var bot_announce_update = await updatedSubmissionToBotAnnounced(post_id);
          console.log("Post completed!");

          //Wait for processes to finish up
          console.log("Waiting for a minute to let the twitter/discord callbacks finish up...");
          var second_is_waited = await (waitASec,10000);
          console.log("\n\nDone retrieving record!\n\n");

        }
        //Trial Submission
        else if (queue_type == "Trial Submission")
        //else if (isDebug)
        {
          console.log("Starting trial submission flow...");

          //Get player information for trial submission
          var player_id = await getTrialPostPlayerID(post_id);
          console.log("Player ID: " + player_id);
          var player_name = await getTrialPostName(post_id);
          console.log("Player name: " + player_name);
          var player_twitter = await getProfileTwitterHandle(player_id);
          console.log("Player Twitter Handle: " + player_twitter);
          var player_bluesky = await getProfileBlueskyHandle(player_id);
          console.log("Player Bluesky Handle: " + player_bluesky);
          var player_discord = await getProfileDiscordHandle(player_id);
          console.log("Player Discord Handle: " + player_discord);

          //Get trial information related to trial submission
          var trial_title = await getTrialTitle(post_id);
          console.log("Trial Title: " + trial_title);
          var trial_ex_score_minus_mapping = await getTrialMetaKeyFieldNameOrLevel(trial_title,"name_minus");
          console.log("EX Minus Mapping: " + trial_ex_score_minus_mapping);
          var trial_ex_minus_score = await getTrialEXMinusfromMapping(player_id,trial_ex_score_minus_mapping);
          console.log("Minus EX: " + trial_ex_minus_score);
          var trial_ex_score_ex_mapping = await getTrialMetaKeyFieldNameOrLevel(trial_title,"name_ex");
          console.log("EX Mapping: " + trial_ex_score_ex_mapping);
          var trial_ex_score = await getTrialEXfromMapping(player_id,trial_ex_score_ex_mapping);
          console.log("Actual EX: " + trial_ex_score);
          var trial_score_level = await getTrialMetaKeyFieldNameOrLevel(trial_title,"level");
          console.log("Trial Level: " + trial_score_level);
          var trial_rank = await getTrialRank(post_id);
          console.log("Trial Rank: " + trial_rank)

          //Get Trial # Ranking
          var mapping_view = await getTrialMetaKeyFieldNameOrLevel(trial_title,"rankingview");
          console.log("Mapping View: " + mapping_view);
          var set_var = await setRankingVariable();
          var trial_number_ranking = await getTrialUserRanking(player_id,mapping_view);
          console.log("# rank: " + trial_number_ranking);

          //Announcements
          var twitter_message = await playerTrialTwitterPost(player_name,trial_rank,trial_ex_score,trial_ex_minus_score,player_twitter,trial_title,trial_number_ranking);
          var twitter_image = await twitterTrialImageFunction.getTwitterTrialImageURL(trial_title,trial_rank);
          var twitter_image_posted = await twitterClient.v1.uploadMedia(twitter_image);
          var twitter_post = await twitterClient.v2.tweet({
            text: twitter_message,
            media: { media_ids: [twitter_image_posted]}
          });
          console.log("Twitter announcement complete!");


          var discord_announce = await announceUpdatePlayerTrialDiscord(player_name, trial_rank,trial_ex_score,trial_ex_minus_score, trial_title.toUpperCase() + " ("+trial_score_level+")",trial_number_ranking)
          console.log("Announcements done!");

          var bsky_message = await playerTrialBlueskyPost(player_name,trial_rank,trial_ex_score,trial_ex_minus_score,trial_title,trial_number_ranking,player_bluesky);
          const {Bot} = await import("@skyware/bot");
          var bsky_bot = new Bot();
          await bsky_bot.login({
            identifier: process.env.BSKY_USERNAME,
            password: process.env.BSKY_PASSWORD,
          });
          const bsky_post = await bsky_bot.post({
            text:bsky_message
          });
          console.log("Bluesky announcement complete!");


          //Update Record
          var bot_announce_update = await updatedSubmissionToBotAnnounced(post_id);
          console.log("Post completed!");

          //Wait for processes to finish up
          console.log("Waiting for a minute to let the twitter/discord callbacks finish up...");
          var second_is_waited = await (waitASec,10000);
          console.log("\n\nDone retrieving record!\n\n");

        }
        //Placement
        else if (queue_type == "Placement")
        //else if (isDebug)
        {
          console.log("Starting placement flow...");

          //Get player information
          var player_id = await getPlacementPostPlayerID(post_id);
          console.log("Player ID: " + player_id);
          var player_name = await getPlacementPostPlayerName(post_id);
          console.log("Player Name: " + player_name);
          var player_rank = await getPlacementPostPlayerRank(player_id);
          console.log("Player Rank: " + player_rank);
          var player_twitter = await getProfileTwitterHandle(player_id);
          console.log("Player Twitter Handle: " + player_twitter);
          var player_bluesky = await getProfileBlueskyHandle(player_id);
          console.log("Player Bluesky Handle: " + player_bluesky);
          var player_discord = await getProfileDiscordHandle(player_id);
          console.log("Player Discord Handle: " + player_discord);

          //Announce on socials
          var twitter_message = await newPlayerTwitterPost(player_name,player_rank,player_twitter);
          var twitter_image = await twitterImageFunction.getTwitterImageURL(player_rank);
          var twitter_image_posted = await twitterClient.v1.uploadMedia(twitter_image);
          var twitter_post = await twitterClient.v2.tweet({
            text: twitter_message,
            media: { media_ids: [twitter_image_posted]}
          });
          console.log("Twitter announcement complete!");

          var discord_announce = await announceNewPlayerDiscord(player_name,player_rank,player_discord);
          console.log("Discord announcement complete!");

          var bsky_message = await newPlayerBlueskyPost(player_name,player_rank);
          const {Bot} = await import("@skyware/bot");
          var bsky_bot = new Bot();
          await bsky_bot.login({
            identifier: process.env.BSKY_USERNAME,
            password: process.env.BSKY_PASSWORD,
          });
          const bsky_post = await bsky_bot.post({
            text:bsky_message
          });
          console.log("Bluesky announcement complete!");


          //Update Record
          var bot_announce_update = await updatedSubmissionToBotAnnounced(post_id);
          console.log("Post completed!");

          //Wait for processes to finish up
          console.log("Waiting for a minute to let the twitter/discord callbacks finish up...");
          var second_is_waited = await (waitASec,10000);
          console.log("\n\nDone retrieving record!\n\n");

        }
        //Comprehensive Placement
        else if (queue_type == "Comprehensive Placement")
        //else if (isDebug)
        {
          console.log("Starting Comprehensive Placement flow...");

          //Get player information
          var player_id = await getCompPlacementPostPlayerID(post_id);
          console.log("Player ID: " + player_id);
          var player_name = await getCompPlacementPostPlayerName(post_id);
          console.log("Player Name: " + player_name);
          var player_twitter = await getProfileTwitterHandle(player_id);
          console.log("Player Twitter Handle: " + player_twitter);
          var player_discord = await getProfileDiscordHandle(player_id);
          console.log("Player Discord Handle: " + player_discord);
          var player_bluesky = await getProfileBlueskyHandle(player_id);
          console.log("Player Bluesky Handle: " + player_bluesky);
          var player_rank = await getPlacementPostPlayerRank(player_id);
          console.log("Player Rank: " + player_rank);

          //Announce on socials
          var twitter_message = await newPlayerTwitterPost(player_name,player_rank,player_twitter);
          var twitter_image = await twitterImageFunction.getTwitterImageURL(player_rank);
          var twitter_image_posted = await twitterClient.v1.uploadMedia(twitter_image);
          var twitter_post = await twitterClient.v2.tweet({
            text: twitter_message,
            media: { media_ids: [twitter_image_posted]}
          });
          console.log("Twitter announcement complete!");

          var bsky_message = await newPlayerBlueskyPost(player_name,player_rank,player_bluesky);
          const {Bot} = await import("@skyware/bot");
          var bsky_bot = new Bot();
          await bsky_bot.login({
            identifier: process.env.BSKY_USERNAME,
            password: process.env.BSKY_PASSWORD,
          });
          const bsky_post = await bsky_bot.post({
            text:bsky_message
          });
          console.log("Bluesky announcement complete!");

          
          var discord_announce = await announceNewPlayerDiscord(player_name,player_rank,player_discord);
          console.log("Discord announcement complete!");

          //Update Record
          var bot_announce_update = await updatedSubmissionToBotAnnounced(post_id);
          console.log("Post completed!");

          //Wait for processes to finish up
          console.log("Waiting for a minute to let the twitter/discord callbacks finish up...");
          var second_is_waited = await (waitASec,10000);
          console.log("\n\nDone retrieving record!\n\n");

        }
        //RR - Submit Score
        else if (queue_type == "Submit Scores!")
        {
          //carryover this over, this all needs to be updated if we reintroduce RR



          //console.log("RR Score submission!");

              //commented out, uncomment for future RR events!

              /*
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
              var lampdiscordicon=wait.for(discordLampIconFunction.getDiscordLampIcon(songlamp));
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
              */


              //update ALL records to "bot announced"
              //var botannounceupdate = wait.for(updateRRSubmissionsToBotAnnounced, post_id);//change to postcount
              //console.log("post completed!");

              //console.log("Done retrieving record!\n\n");

        }

      }
      else 
      {
        console.log("Queue count is 0! Nothing will run right now");
      }

    }

  //TODO: Close Connection
  //connection.end();
  //process.exit(0);
}



MainLIFE4Sequence();
