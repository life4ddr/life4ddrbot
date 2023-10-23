//function that returns a discord icon code based on a rank

module.exports = {
    getDiscordLampIcon: function(lampname) {
       
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


  return discordemoji;

       }
   };