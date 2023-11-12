//function that returns a URL for a twitter trial image

module.exports = {
    getTwitterTrialImageURL: function(trial,rank) {
       
        var twitterImageURL = "";

        console.log("Get image for " + trial + " " + rank);
        
        //CONFECTIONARY (12)
      if (rank == "Silver" && (trial == "CONFECTIONARY (12)" || trial == "Confectionary"))
      {
        twitterImageURL = './trial_images/CONFECTIONARY/LIFE4_BotGraphic_Confectionary_Silver.webp';
      }
      else if (rank == "Gold" && (trial == "CONFECTIONARY (12)" || trial == "Confectionary"))
      {
        twitterImageURL = './trial_images/CONFECTIONARY/LIFE4_BotGraphic_Confectionary_Gold.webp';
      }
      else if (rank == "Diamond" && (trial == "CONFECTIONARY (12)" || trial == "Confectionary"))
      {
        twitterImageURL = './trial_images/CONFECTIONARY/LIFE4_BotGraphic_Confectionary_Diamond.webp';
      }
      else if (rank == "Cobalt" && (trial == "CONFECTIONARY (12)" || trial == "Confectionary"))
      {
        twitterImageURL = './trial_images/CONFECTIONARY/LIFE4_BotGraphic_Confectionary_Cobalt.webp';
      }
      else if (rank == "Amethyst" && (trial == "CONFECTIONARY (12)" || trial == "Confectionary"))
      {
        twitterImageURL = './trial_images/CONFECTIONARY/LIFE4_BotGraphic_Confectionary_Amethyst.webp';
      }
      else if (rank == "Emerald" && (trial == "CONFECTIONARY (12)" || trial == "Confectionary"))
      {
        twitterImageURL = './trial_images/CONFECTIONARY/LIFE4_BotGraphic_Confectionary_Emerald.webp';
      }
      else if (rank == "Platinum" && (trial == "CONFECTIONARY (12)" || trial == "Confectionary"))
      {
        twitterImageURL = './trial_images/CONFECTIONARY/LIFE4_BotGraphic_Confectionary_Platinum.webp';
      }
      else if (rank == "Onyx" && (trial == "CONFECTIONARY (12)" || trial == "Confectionary"))
      {
        twitterImageURL = './trial_images/CONFECTIONARY/LIFE4_BotGraphic_Confectionary_Onyx.webp';
      }
      else if (rank == "Pearl" && (trial == "CONFECTIONARY (12)" || trial == "Confectionary"))
      {
        twitterImageURL = './trial_images/CONFECTIONARY/Confectionary Pearl.webp';
      }

      //CELESTIAL(13)
      else if (rank == "Silver" && (trial == "Celestial" || trial == "CELESTIAL (13)"))
      {
        twitterImageURL = './trial_images/CELESTIAL/Celestial Silver.webp';
      }
      else if (rank == "Gold" && (trial == "Celestial" || trial == "CELESTIAL (13)"))
      {
        twitterImageURL = './trial_images/CELESTIAL/Celestial Gold.webp';
      }
      else if (rank == "Diamond" && (trial == "Celestial" || trial == "CELESTIAL (13)"))
      {
        twitterImageURL = './trial_images/CELESTIAL/Celestial Diamond.webp';
      }
      else if (rank == "Cobalt" && (trial == "Celestial" || trial == "CELESTIAL (13)"))
      {
        twitterImageURL = './trial_images/CELESTIAL/Celestial Cobalt.webp';
      }
      else if (rank == "Amethyst" && (trial == "Celestial" || trial == "CELESTIAL (13)"))
      {
        twitterImageURL = './trial_images/CELESTIAL/Celestial Amethyst.webp';
      }
      else if (rank == "Emerald" && (trial == "Celestial" || trial == "CELESTIAL (13)"))
      {
        twitterImageURL = './trial_images/CELESTIAL/Celestial Emerald.webp';
      }
      else if (rank == "Platinum" && (trial == "Celestial" || trial == "CELESTIAL (13)"))
      {
        twitterImageURL = './trial_images/CELESTIAL/Celestial Platinum.webp';
      }
      else if (rank == "Onyx" && (trial == "Celestial" || trial == "CELESTIAL (13)"))
      {
        twitterImageURL = './trial_images/CELESTIAL/Celestial Onyx.webp';
      }
      else if (rank == "Pearl" && (trial == "Celestial" || trial == "CELESTIAL (13)"))
      {
        twitterImageURL = './trial_images/CELESTIAL/Celestial Pearl.webp';
      }

      //DAYBREAK(14)
      else if (rank == "Silver" && (trial == "Daybreak" || trial == "DAYBREAK (14)"))
      {
        twitterImageURL = './trial_images/DAYBREAK/Daybreak Silver.webp';
      }
      else if (rank == "Gold" && (trial == "Daybreak" || trial == "DAYBREAK (14)"))
      {
        twitterImageURL = './trial_images/DAYBREAK/Daybreak Gold.webp';
      }
      else if (rank == "Diamond" && (trial == "Daybreak" || trial == "DAYBREAK (14)"))
      {
        twitterImageURL = './trial_images/DAYBREAK/Daybreak Diamond.webp';
      }
      else if (rank == "Cobalt" && (trial == "Daybreak" || trial == "DAYBREAK (14)"))
      {
        twitterImageURL = './trial_images/DAYBREAK/Daybreak Cobalt.webp';
      }
      else if (rank == "Amethyst" && (trial == "Daybreak" || trial == "DAYBREAK (14)"))
      {
        twitterImageURL = './trial_images/DAYBREAK/Daybreak Amethyst.webp';
      }
      else if (rank == "Emerald" && (trial == "Daybreak" || trial == "DAYBREAK (14)"))
      {
        twitterImageURL = './trial_images/DAYBREAK/Daybreak Emerald.webp';
      }
      else if (rank == "Platinum" && (trial == "Daybreak" || trial == "DAYBREAK (14)"))
      {
        twitterImageURL = './trial_images/DAYBREAK/Daybreak Platinum.webp';
      }
      else if (rank == "Onyx" && (trial == "Daybreak" || trial == "DAYBREAK (14)"))
      {
        twitterImageURL = './trial_images/DAYBREAK/Daybreak Onyx.webp';
      }
      else if (rank == "Pearl" && (trial == "Daybreak" || trial == "DAYBREAK (14)"))
      {
        twitterImageURL = './trial_images/DAYBREAK/Daybreak Pearl.webp';
      }

      //HELLSCAPE(15)
      else if (rank == "Silver" && (trial == "Hellscape" || trial == "HELLSCAPE (15)"))
      {
        twitterImageURL = './trial_images/HELLSCAPE/Hellscape Silver.webp';
      }
      else if (rank == "Gold" && (trial == "Hellscape" || trial == "HELLSCAPE (15)"))
      {
        twitterImageURL = './trial_images/HELLSCAPE/Hellscape Gold.webp';
      }
      else if (rank == "Diamond" && (trial == "Hellscape" || trial == "HELLSCAPE (15)"))
      {
        twitterImageURL = './trial_images/HELLSCAPE/Hellscape Diamond.webp';
      }
      else if (rank == "Cobalt" && (trial == "Hellscape" || trial == "HELLSCAPE (15)"))
      {
        twitterImageURL = './trial_images/HELLSCAPE/Hellscape Cobalt.webp';
      }
      else if (rank == "Amethyst" && (trial == "Hellscape" || trial == "HELLSCAPE (15)"))
      {
        twitterImageURL = './trial_images/HELLSCAPE/Hellscape Amethyst.webp';
      }
      else if (rank == "Emerald" && (trial == "Hellscape" || trial == "HELLSCAPE (15)"))
      {
        twitterImageURL = './trial_images/HELLSCAPE/Hellscape Emerald.webp';
      }
      else if (rank == "Platinum" && (trial == "Hellscape" || trial == "HELLSCAPE (15)"))
      {
        twitterImageURL = './trial_images/HELLSCAPE/Hellscape Platinum.webp';
      }
      else if (rank == "Onyx" && (trial == "Hellscape" || trial == "HELLSCAPE (15)"))
      {
        twitterImageURL = './trial_images/HELLSCAPE/Hellscape Onyx.webp';
      }
      else if (rank == "Pearl" && (trial == "Hellscape" || trial == "HELLSCAPE (15)"))
      {
        twitterImageURL = './trial_images/HELLSCAPE/Hellscape Pearl.webp';
      }


      //CLOCKWORK(15)
      else if (rank == "Silver" && (trial == "Clockwork" || trial == "CLOCKWORK (15)"))
      {
        twitterImageURL = './trial_images/CLOCKWORK/Clockwork Silver.webp';
      }
      else if (rank == "Gold" && (trial == "Clockwork" || trial == "CLOCKWORK (15)"))
      {
        twitterImageURL = './trial_images/CLOCKWORK/Clockwork Gold.webp';
      }
      else if (rank == "Diamond" && (trial == "Clockwork" || trial == "CLOCKWORK (15)"))
      {
        twitterImageURL = './trial_images/CLOCKWORK/Clockwork Diamond.webp';
      }
      else if (rank == "Cobalt" && (trial == "Clockwork" || trial == "CLOCKWORK (15)"))
      {
        twitterImageURL = './trial_images/CLOCKWORK/Clockwork Cobalt.webp';
      }
      else if (rank == "Amethyst" && (trial == "Clockwork" || trial == "CLOCKWORK (15)"))
      {
        twitterImageURL = './trial_images/CLOCKWORK/Clockwork Amethyst.webp';
      }
      else if (rank == "Emerald" && (trial == "Clockwork" || trial == "CLOCKWORK (15)"))
      {
        twitterImageURL = './trial_images/CLOCKWORK/Clockwork Emerald.webp';
      }
      else if (rank == "Platinum" && (trial == "Clockwork" || trial == "CLOCKWORK (15)"))
      {
        twitterImageURL = './trial_images/CLOCKWORK/Clockwork Platinum.webp';
      }
      else if (rank == "Onyx" && (trial == "Clockwork" || trial == "CLOCKWORK (15)"))
      {
        twitterImageURL = './trial_images/CLOCKWORK/Clockwork Onyx.webp';
      }
      else if (rank == "Pearl" && (trial == "Clockwork" || trial == "CLOCKWORK (15)"))
      {
        twitterImageURL = './trial_images/CLOCKWORK/Clockwork Pearl.webp';
      }


      //PHARAOH(15)
      else if (rank == "Silver" && (trial == "Pharaoh" || trial == "PHARAOH (15)"))
      {
        twitterImageURL = './trial_images/PHARAOH/Pharaoh Silver.webp';
      }
      else if (rank == "Gold" &&  (trial == "Pharaoh" || trial == "PHARAOH (15)"))
      {
        twitterImageURL = './trial_images/PHARAOH/Pharaoh Gold.webp';
      }
      else if (rank == "Diamond" && (trial == "Pharaoh" || trial == "PHARAOH (15)"))
      {
        twitterImageURL = './trial_images/PHARAOH/Pharaoh Diamond.webp';
      }
      else if (rank == "Cobalt" && (trial == "Pharaoh" || trial == "PHARAOH (15)"))
      {
        twitterImageURL = './trial_images/PHARAOH/Pharaoh Cobalt.webp';
      }
      else if (rank == "Amethyst" && (trial == "Pharaoh" || trial == "PHARAOH (15)"))
      {
        twitterImageURL = './trial_images/PHARAOH/Pharaoh Amethyst.webp';
      }
      else if (rank == "Emerald" && (trial == "Pharaoh" || trial == "PHARAOH (15)"))
      {
        twitterImageURL = './trial_images/PHARAOH/Pharaoh Emerald.webp';
      }
      else if (rank == "Platinum" && (trial == "Pharaoh" || trial == "PHARAOH (15)"))
      {
        twitterImageURL = './trial_images/PHARAOH/Pharaoh Platinum.webp';
      }
      else if (rank == "Onyx" && (trial == "Pharaoh" || trial == "PHARAOH (15)"))
      {
        twitterImageURL = './trial_images/PHARAOH/Pharaoh Onyx.webp';
      }
      else if (rank == "Pearl" &&  (trial == "Pharaoh" || trial == "PHARAOH (15)"))
      {
        twitterImageURL = './trial_images/PHARAOH/Pharaoh Pearl.webp';
      }


      //PARADOX(16)
      else if (rank == "Gold" && (trial == "Paradox" || trial == "PARADOX (16)"))
      {
        twitterImageURL = './trial_images/PARADOX/Paradox Gold.webp';
      }
      else if (rank == "Diamond" && (trial == "Paradox" || trial == "PARADOX (16)"))
      {
        twitterImageURL = './trial_images/PARADOX/Paradox Diamond.webp';
      }
      else if (rank == "Cobalt" && (trial == "Paradox" || trial == "PARADOX (16)"))
      {
        twitterImageURL = './trial_images/PARADOX/Paradox Cobalt.webp';
      }
      else if (rank == "Amethyst" && (trial == "Paradox" || trial == "PARADOX (16)"))
      {
        twitterImageURL = './trial_images/PARADOX/Paradox Amethyst.webp';
      }
      else if (rank == "Emerald" && (trial == "Paradox" || trial == "PARADOX (16)"))
      {
        twitterImageURL = './trial_images/PARADOX/Paradox Emerald.webp';
      }
      else if (rank == "Platinum" && (trial == "Paradox" || trial == "PARADOX (16)"))
      {
        twitterImageURL = './trial_images/PARADOX/Paradox Platinum.webp';
      }
      else if (rank == "Onyx" && (trial == "Paradox" || trial == "PARADOX (16)"))
      {
        twitterImageURL = './trial_images/PARADOX/Paradox Onyx.webp';
      }
      else if (rank == "Pearl" && (trial == "Paradox" || trial == "PARADOX (16)"))
      {
        twitterImageURL = './trial_images/PARADOX/Paradox Pearl.webp';
      }


      //INHUMAN(16)
      else if (rank == "Gold" && (trial == "Inhuman" || trial == "INHUMAN (16)"))
      {
        twitterImageURL = './trial_images/INHUMAN/Inhuman Gold.webp';
      }
      else if (rank == "Diamond" && (trial == "Inhuman" || trial == "INHUMAN (16)"))
      {
        twitterImageURL = './trial_images/INHUMAN/Inhuman Diamond.webp';
      }
      else if (rank == "Cobalt" && (trial == "Inhuman" || trial == "INHUMAN (16)"))
      {
        twitterImageURL = './trial_images/INHUMAN/Inhuman Cobalt.webp';
      }
      else if (rank == "Amethyst" && (trial == "Inhuman" || trial == "INHUMAN (16)"))
      {
        twitterImageURL = './trial_images/INHUMAN/Inhuman Amethyst.webp';
      }
      else if (rank == "Emerald" && (trial == "Inhuman" || trial == "INHUMAN (16)"))
      {
        twitterImageURL = './trial_images/INHUMAN/Inhuman Emerald.webp';
      }
      else if (rank == "Platinum" && (trial == "Inhuman" || trial == "INHUMAN (16)"))
      {
        twitterImageURL = './trial_images/INHUMAN/Inhuman Platinum.webp';
      }
      else if (rank == "Onyx" && (trial == "Inhuman" || trial == "INHUMAN (16)"))
      {
        twitterImageURL = './trial_images/INHUMAN/Inhuman Onyx.webp';
      }
      else if (rank == "Pearl" && (trial == "Inhuman" || trial == "INHUMAN (16)"))
      {
        twitterImageURL = './trial_images/INHUMAN/Inhuman Pearl.webp';
      }



      //CHEMICAL(17)
      else if (rank == "Diamond" && (trial == "Chemical" ||  trial == "CHEMICAL (17)"))
      {
        twitterImageURL = './trial_images/CHEMICAL/Chemical Diamond.webp';
      }
      else if (rank == "Cobalt" && (trial == "Chemical" ||  trial == "CHEMICAL (17)"))
      {
        twitterImageURL = './trial_images/CHEMICAL/Chemical Cobalt.webp';
      }
      else if (rank == "Amethyst" && (trial == "Chemical" ||  trial == "CHEMICAL (17)"))
      {
        twitterImageURL = './trial_images/CHEMICAL/Chemical Amethyst.webp';
      }
      else if (rank == "Emerald" && (trial == "Chemical" ||  trial == "CHEMICAL (17)"))
      {
        twitterImageURL = './trial_images/CHEMICAL/Chemical Emerald.webp';
      }
      else if (rank == "Platinum" && (trial == "Chemical" ||  trial == "CHEMICAL (17)"))
      {
        twitterImageURL = './trial_images/CHEMICAL/Chemical Platinum.webp';
      }
      else if (rank == "Onyx" && (trial == "Chemical" ||  trial == "CHEMICAL (17)"))
      {
        twitterImageURL = './trial_images/CHEMICAL/Chemical Onyx.webp';
      }
      else if (rank == "Pearl" && (trial == "Chemical" ||  trial == "CHEMICAL (17)"))
      {
        twitterImageURL = './trial_images/CHEMICAL/Chemical Pearl.webp';
      }


      //DOGFIGHT (18)
      if (rank == "Silver" && (trial == "Dogfight" || trial == "DOGFIGHT (18)"))
      {
        twitterImageURL = './trial_images/DOGFIGHT/LIFE4_BotGraphic_Dogfight_Silver.webp';
      }
      else if (rank == "Gold" && (trial == "Dogfight" || trial == "DOGFIGHT (18)"))
      {
        twitterImageURL = './trial_images/DOGFIGHT/LIFE4_BotGraphic_Dogfight_Gold.webp';
      }
      else if (rank == "Diamond" && (trial == "Dogfight" || trial == "DOGFIGHT (18)"))
      {
        twitterImageURL = './trial_images/DOGFIGHT/LIFE4_BotGraphic_Dogfight_Diamond.webp';
      }
      else if (rank == "Cobalt" && (trial == "Dogfight" || trial == "DOGFIGHT (18)"))
      {
        twitterImageURL = './trial_images/DOGFIGHT/LIFE4_BotGraphic_Dogfight_Cobalt.webp';
      }
      else if (rank == "Amethyst" && (trial == "Dogfight" || trial == "DOGFIGHT (18)"))
      {
        twitterImageURL = './trial_images/DOGFIGHT/LIFE4_BotGraphic_Dogfight_Amethyst.webp';
      }
      else if (rank == "Emerald" && (trial == "Dogfight" || trial == "DOGFIGHT (18)"))
      {
        twitterImageURL = './trial_images/DOGFIGHT/LIFE4_BotGraphic_Dogfight_Emerald.webp';
      }
      else if (rank == "Platinum" && (trial == "Dogfight" || trial == "DOGFIGHT (18)"))
      {
        twitterImageURL = './trial_images/DOGFIGHT/LIFE4_BotGraphic_Dogfight_Platinum.webp';
      }
      else if (rank == "Onyx" && (trial == "Dogfight" || trial == "DOGFIGHT (18)"))
      {
        twitterImageURL = './trial_images/DOGFIGHT/LIFE4_BotGraphic_Dogfight_Onyx.webp';
      }
      else if (rank == "Pearl" && (trial == "Dogfight" || trial == "DOGFIGHT (18)"))
      {
        twitterImageURL = './trial_images/DOGFIGHT/Dogfight Pearl.webp';
      }
            
      //ASCENSION (17)
      else if (rank == "Diamond" && (trial == "Ascension" || trial == "ASCENSION (17)"))
      {
        twitterImageURL = './trial_images/ASCENSION/Ascension Diamond.webp';
      }
      else if (rank == "Cobalt" && (trial == "Ascension" || trial == "ASCENSION (17)"))
      {
        twitterImageURL = './trial_images/ASCENSION/Ascension Cobalt.webp';
      }
      else if (rank == "Amethyst" && (trial == "Ascension" || trial == "ASCENSION (17)"))
      {
        twitterImageURL = './trial_images/ASCENSION/Ascension Amethyst.webp';
      }
      else if (rank == "Emerald" && (trial == "Ascension" || trial == "ASCENSION (17)"))
      {
        twitterImageURL = './trial_images/ASCENSION/Ascension Emerald.webp';
      }
      else if (rank == "Platinum" && (trial == "Ascension" || trial == "ASCENSION (17)"))
      {
        twitterImageURL = './trial_images/ASCENSION/Ascension Platinum.webp';
      }
      else if (rank == "Onyx" && (trial == "Ascension" || trial == "ASCENSION (17)"))
      {
        twitterImageURL = './trial_images/ASCENSION/Ascension Onyx.webp';
      }
      else if (rank == "Pearl" && (trial == "Ascension" || trial == "ASCENSION (17)"))
      {
        twitterImageURL = './trial_images/ASCENSION/Ascension Pearl.webp';
      }


      //STORYBOOK (13)
      if (rank == "Silver" && (trial == "Storybook" || trial == "STORYBOOK (13)"))
      {
        twitterImageURL = './trial_images/STORYBOOK/LIFE4_BotGraphic_Storybook_Silver.webp';
      }
      else if (rank == "Gold" && (trial == "Storybook" || trial == "STORYBOOK (13)"))
      {
        twitterImageURL = './trial_images/STORYBOOK/LIFE4_BotGraphic_Storybook_Gold.webp';
      }
      else if (rank == "Diamond" && (trial == "Storybook" || trial == "STORYBOOK (13)"))
      {
        twitterImageURL = './trial_images/STORYBOOK/LIFE4_BotGraphic_Storybook_Diamond.webp';
      }
      else if (rank == "Cobalt" && (trial == "Storybook" || trial == "STORYBOOK (13)"))
      {
        twitterImageURL = './trial_images/STORYBOOK/LIFE4_BotGraphic_Storybook_Cobalt.webp';
      }
      else if (rank == "Amethyst" && (trial == "Storybook" || trial == "STORYBOOK (13)"))
      {
        twitterImageURL = './trial_images/STORYBOOK/LIFE4_BotGraphic_Storybook_Amethyst.webp';
      }
      else if (rank == "Emerald" && (trial == "Storybook" || trial == "STORYBOOK (13)"))
      {
        twitterImageURL = './trial_images/STORYBOOK/LIFE4_BotGraphic_Storybook_Emerald.webp';
      }
      else if (rank == "Platinum" && (trial == "Storybook" || trial == "STORYBOOK (13)"))
      {
        twitterImageURL = './trial_images/STORYBOOK/LIFE4_BotGraphic_Storybook_Platinum.webp';
      }
      else if (rank == "Onyx" && (trial == "Storybook" || trial == "STORYBOOK (13)"))
      {
        twitterImageURL = './trial_images/STORYBOOK/LIFE4_BotGraphic_Storybook_Onyx.webp';
      }
      else if (rank == "Pearl" && (trial == "Storybook" || trial == "STORYBOOK (13)"))
      {
        twitterImageURL = './trial_images/STORYBOOK/Storybook Pearl.webp';
      }



      //HEATWAVE (15)
      else if (rank == "Silver" && (trial == "Heatwave" || trial == "HEATWAVE (15)"))
      {
        twitterImageURL = './trial_images/HEATWAVE/Heatwave Silver.webp';
      }
      else if (rank == "Gold" && (trial == "Heatwave" || trial == "HEATWAVE (15)"))
      {
        twitterImageURL = './trial_images/HEATWAVE/Heatwave Gold.webp';
      }
      else if (rank == "Diamond" && (trial == "Heatwave" || trial == "HEATWAVE (15)"))
      {
        twitterImageURL = './trial_images/HEATWAVE/Heatwave Diamond.webp';
      }
      else if (rank == "Cobalt" && (trial == "Heatwave" || trial == "HEATWAVE (15)"))
      {
        twitterImageURL = './trial_images/HEATWAVE/Heatwave Cobalt.webp';
      }
      else if (rank == "Amethyst" && (trial == "Heatwave" || trial == "HEATWAVE (15)"))
      {
        twitterImageURL = './trial_images/HEATWAVE/Heatwave Amethyst.webp';
      }
      else if (rank == "Emerald" && (trial == "Heatwave" || trial == "HEATWAVE (15)"))
      {
        twitterImageURL = './trial_images/HEATWAVE/Heatwave Emerald.webp';
      }
      else if (rank == "Platinum" && (trial == "Heatwave" || trial == "HEATWAVE (15)"))
      {
        twitterImageURL = './trial_images/HEATWAVE/Heatwave Platinum.webp';
      }
      else if (rank == "Onyx" && (trial == "Heatwave" || trial == "HEATWAVE (15)"))
      {
        twitterImageURL = './trial_images/HEATWAVE/Heatwave Onyx.webp';
      }
      else if (rank == "Pearl" && (trial == "Heatwave" || trial == "HEATWAVE (15)"))
      {
        twitterImageURL = './trial_images/HEATWAVE/Heatwave Pearl.webp';
      }



      //MAINFRAME (13)
      else if (rank == "Silver" && (trial == "Mainframe" || trial == "MAINFRAME (13)"))
      {
        twitterImageURL = './trial_images/MAINFRAME/Mainframe Silver.webp';
      }
      else if (rank == "Gold" && (trial == "Mainframe" || trial == "MAINFRAME (13)"))
      {
        twitterImageURL = './trial_images/MAINFRAME/Mainframe Gold.webp';
      }
      else if (rank == "Diamond" && (trial == "Mainframe" || trial == "MAINFRAME (13)"))
      {
        twitterImageURL = './trial_images/MAINFRAME/Mainframe Diamond.webp';
      }
      else if (rank == "Cobalt" && (trial == "Mainframe" || trial == "MAINFRAME (13)"))
      {
        twitterImageURL = './trial_images/MAINFRAME/Mainframe Cobalt.webp';
      }
      else if (rank == "Amethyst" && (trial == "Mainframe" || trial == "MAINFRAME (13)"))
      {
        twitterImageURL = './trial_images/MAINFRAME/Mainframe Amethyst.webp';
      }
      else if (rank == "Emerald" && (trial == "Mainframe" || trial == "MAINFRAME (13)"))
      {
        twitterImageURL = './trial_images/MAINFRAME/Mainframe Emerald.webp';
      }
      else if (rank == "Platinum" && (trial == "Mainframe" || trial == "MAINFRAME (13)"))
      {
        twitterImageURL = './trial_images/MAINFRAME/Mainframe Platinum.webp';
      }
      else if (rank == "Onyx" && (trial == "Mainframe" || trial == "MAINFRAME (13)"))
      {
        twitterImageURL = './trial_images/MAINFRAME/Mainframe Onyx.webp';
      }
      else if (rank == "Pearl" && (trial == "Mainframe" || trial == "MAINFRAME (13)"))
      {
        twitterImageURL = './trial_images/MAINFRAME/Mainframe Pearl.webp';
      }



      //SNOWDRIFT (16)
      else if (rank == "Gold" && (trial == "Snowdrift" || trial == "SNOWDRIFT (16)"))
      {
        twitterImageURL = './trial_images/SNOWDRIFT/Snowdrift Gold.webp';
      }
      else if (rank == "Diamond" && (trial == "Snowdrift" || trial == "SNOWDRIFT (16)"))
      {
        twitterImageURL = './trial_images/SNOWDRIFT/Snowdrift Diamond.webp';
      }
      else if (rank == "Cobalt" && (trial == "Snowdrift" || trial == "SNOWDRIFT (16)"))
      {
        twitterImageURL = './trial_images/SNOWDRIFT/Snowdrift Cobalt.webp';
      }
      else if (rank == "Amethyst" && (trial == "Snowdrift" || trial == "SNOWDRIFT (16)"))
      {
        twitterImageURL = './trial_images/SNOWDRIFT/Snowdrift Amethyst.webp';
      }
      else if (rank == "Emerald" && (trial == "Snowdrift" || trial == "SNOWDRIFT (16)"))
      {
        twitterImageURL = './trial_images/SNOWDRIFT/Snowdrift Emerald.webp';
      }
      else if (rank == "Platinum" && (trial == "Snowdrift" || trial == "SNOWDRIFT (16)"))
      {
        twitterImageURL = './trial_images/SNOWDRIFT/Snowdrift Platinum.webp';
      }
      else if (rank == "Onyx" && (trial == "Snowdrift" || trial == "SNOWDRIFT (16)"))
      {
        twitterImageURL = './trial_images/SNOWDRIFT/Snowdrift Onyx.webp';
      }
      else if (rank == "Pearl" && (trial == "Snowdrift" || trial == "SNOWDRIFT (16)"))
      {
        twitterImageURL = './trial_images/SNOWDRIFT/Snowdrift Pearl.webp';
      }



      //SIDEQUEST (14)
      if (rank == "Silver" && (trial == "Sidequest" || trial == "SIDEQUEST (14)"))
      {
        twitterImageURL = './trial_images/SIDEQUEST/LIFE4_BotGraphic_Sidequest_Silver.webp';
      }
      else if (rank == "Gold" && (trial == "Sidequest" || trial == "SIDEQUEST (14)"))
      {
        twitterImageURL = './trial_images/SIDEQUEST/LIFE4_BotGraphic_Sidequest_Gold.webp';
      }
      else if (rank == "Diamond" && (trial == "Sidequest" || trial == "SIDEQUEST (14)"))
      {
        twitterImageURL = './trial_images/SIDEQUEST/LIFE4_BotGraphic_Sidequest_Diamond.webp';
      }
      else if (rank == "Cobalt" && (trial == "Sidequest" || trial == "SIDEQUEST (14)"))
      {
        twitterImageURL = './trial_images/SIDEQUEST/LIFE4_BotGraphic_Sidequest_Cobalt.webp';
      }
      else if (rank == "Amethyst" && (trial == "Sidequest" || trial == "SIDEQUEST (14)"))
      {
        twitterImageURL = './trial_images/SIDEQUEST/LIFE4_BotGraphic_Sidequest_Amethyst.webp';
      }
      else if (rank == "Emerald" && (trial == "Sidequest" || trial == "SIDEQUEST (14)"))
      {
        twitterImageURL = './trial_images/SIDEQUEST/LIFE4_BotGraphic_Sidequest_Emerald.webp';
      }
      else if (rank == "Platinum" && (trial == "Sidequest" || trial == "SIDEQUEST (14)"))
      {
        twitterImageURL = './trial_images/SIDEQUEST/LIFE4_BotGraphic_Sidequest_Platinum.webp';
      }
      else if (rank == "Onyx" && (trial == "Sidequest" || trial == "SIDEQUEST (14)"))
      {
        twitterImageURL = './trial_images/SIDEQUEST/LIFE4_BotGraphic_Sidequest_Onyx.webp';
      }
      else if (rank == "Pearl" && (trial == "Sidequest" || trial == "SIDEQUEST (14)"))
      {
        twitterImageURL = './trial_images/SIDEQUEST/Sidequest Pearl.webp';
      }

      //Wanderlust (15)
      else if (rank == "Silver" && (trial == "Wanderlust" || trial == "WANDERLUST (15)"))
      {
        twitterImageURL = './trial_images/WANDERLUST/Wanderlust Silver.webp';
      }
      else if (rank == "Gold" && (trial == "Wanderlust" || trial == "WANDERLUST (15)"))
      {
        twitterImageURL = './trial_images/WANDERLUST/Wanderlust Gold.webp';
      }
      else if (rank == "Diamond" && (trial == "Wanderlust" || trial == "WANDERLUST (15)"))
      {
        twitterImageURL = './trial_images/WANDERLUST/Wanderlust Diamond.webp';
      }
      else if (rank == "Cobalt" && (trial == "Wanderlust" || trial == "WANDERLUST (15)"))
      {
        twitterImageURL = './trial_images/WANDERLUST/Wanderlust Cobalt.webp';
      }
      else if (rank == "Amethyst" && (trial == "Wanderlust" || trial == "WANDERLUST (15)"))
      {
        twitterImageURL = './trial_images/WANDERLUST/Wanderlust Amethyst.webp';
      }
      else if (rank == "Emerald" && (trial == "Wanderlust" || trial == "WANDERLUST (15)"))
      {
        twitterImageURL = './trial_images/WANDERLUST/Wanderlust Emerald.webp';
      }
      else if (rank == "Platinum" && (trial == "Wanderlust" || trial == "WANDERLUST (15)"))
      {
        twitterImageURL = './trial_images/WANDERLUST/Wanderlust Platinum.webp';
      }
      else if (rank == "Onyx" && (trial == "Wanderlust" || trial == "WANDERLUST (15)"))
      {
        twitterImageURL = './trial_images/WANDERLUST/Wanderlust Onyx.webp';
      }
      else if (rank == "Pearl" && (trial == "Wanderlust" || trial == "WANDERLUST (15)"))
      {
        twitterImageURL = './trial_images/WANDERLUST/Wanderlust Pearl.webp';
      }



      //CIRCADIA (16)
      else if (rank == "Gold" && (trial == "Circadia" || trial == "CIRCADIA (16)"))
      {
        twitterImageURL = './trial_images/CIRCADIA/Circadia Gold.webp';
      }
      else if (rank == "Diamond" && (trial == "Circadia" || trial == "CIRCADIA (16)"))
      {
        twitterImageURL = './trial_images/CIRCADIA/Circadia Diamond.webp';
      }
      else if (rank == "Cobalt" && (trial == "Circadia" || trial == "CIRCADIA (16)"))
      {
        twitterImageURL = './trial_images/CIRCADIA/Circadia Cobalt.webp';
      }
      else if (rank == "Amethyst" && (trial == "Circadia" || trial == "CIRCADIA (16)"))
      {
        twitterImageURL = './trial_images/CIRCADIA/Circadia Amethyst.webp';
      }
      else if (rank == "Emerald" && (trial == "Circadia" || trial == "CIRCADIA (16)"))
      {
        twitterImageURL = './trial_images/CIRCADIA/Circadia Emerald.webp';
      }
      else if (rank == "Platinum" && (trial == "Circadia" || trial == "CIRCADIA (16)"))
      {
        twitterImageURL = './trial_images/CIRCADIA/Circadia Platinum.webp';
      }
      else if (rank == "Onyx" && (trial == "Circadia" || trial == "CIRCADIA (16)"))
      {
        twitterImageURL = './trial_images/CIRCADIA/Circadia Onyx.webp';
      }
      else if (rank == "Pearl" && (trial == "Circadia" || trial == "CIRCADIA (16)"))
      {
        twitterImageURL = './trial_images/CIRCADIA/Circadia Pearl.webp';
      }



      //QUANTUM (18)
      else if (rank == "Diamond" && (trial == "Quantum" || trial == "QUANTUM (18)"))
      {
        twitterImageURL = './trial_images/QUANTUM/Quantum Diamond.webp';
      }
      else if (rank == "Cobalt" && (trial == "Quantum" || trial == "QUANTUM (18)"))
      {
        twitterImageURL = './trial_images/QUANTUM/Quantum Cobalt.webp';
      }
      else if (rank == "Amethyst" && (trial == "Quantum" || trial == "QUANTUM (18)"))
      {
        twitterImageURL = './trial_images/QUANTUM/Quantum Amethyst.webp';
      }
      else if (rank == "Emerald" && (trial == "Quantum" || trial == "QUANTUM (18)"))
      {
        twitterImageURL = './trial_images/QUANTUM/Quantum Emerald.webp';
      }
      else if (rank == "Platinum" && (trial == "Quantum" || trial == "QUANTUM (18)"))
      {
        twitterImageURL = './trial_images/QUANTUM/Quantum Platinum.webp';
      }
      else if (rank == "Onyx" && (trial == "Quantum" || trial == "QUANTUM (18)"))
      {
        twitterImageURL = './trial_images/QUANTUM/Quantum Onyx.webp';
      }
      else if (rank == "Pearl" && (trial == "Quantum" || trial == "QUANTUM (18)"))
      {
        twitterImageURL = './trial_images/QUANTUM/Quantum Pearl.webp';
      }



      //SPECIES (13)
      else if (rank == "Silver" && (trial == "Species" || trial == "SPECIES (13)"))
      {
        twitterImageURL = './trial_images/SPECIES/Species Silver.webp';
      }
      else if (rank == "Gold" && (trial == "Species" || trial == "SPECIES (13)"))
      {
        twitterImageURL = './trial_images/SPECIES/Species Gold.webp';
      }
      else if (rank == "Diamond" && (trial == "Species" || trial == "SPECIES (13)"))
      {
        twitterImageURL = './trial_images/SPECIES/Species Diamond.webp';
      }
      else if (rank == "Cobalt" && (trial == "Species" || trial == "SPECIES (13)"))
      {
        twitterImageURL = './trial_images/SPECIES/Species Cobalt.webp';
      }
      else if (rank == "Amethyst" && (trial == "Species" || trial == "SPECIES (13)"))
      {
        twitterImageURL = './trial_images/SPECIES/Species Amethyst.webp';
      }
      else if (rank == "Emerald" && (trial == "Species" || trial == "SPECIES (13)"))
      {
        twitterImageURL = './trial_images/SPECIES/Species Emerald.webp';
      }
      else if (rank == "Platinum" && (trial == "Species" || trial == "SPECIES (13)"))
      {
        twitterImageURL = './trial_images/SPECIES/Species Platinum.webp';
      }
      else if (rank == "Onyx" && (trial == "Species" || trial == "SPECIES (13)"))
      {
        twitterImageURL = './trial_images/SPECIES/Species Onyx.webp';
      }
      else if (rank == "Pearl" && (trial == "Species" || trial == "SPECIES (13)"))
      {
        twitterImageURL = './trial_images/SPECIES/Species Pearl.webp';
      }




      //TEMPEST (15)
      else if (rank == "Silver" && (trial == "Tempest" || trial == "TEMPEST (15)"))
      {
        twitterImageURL = './trial_images/TEMPEST/Tempest Silver.webp';
      }
      else if (rank == "Gold" && (trial == "Tempest" || trial == "TEMPEST (15)"))
      {
        twitterImageURL = './trial_images/TEMPEST/Tempest Gold.webp';
      }
      else if (rank == "Diamond" && (trial == "Tempest" || trial == "TEMPEST (15)"))
      {
        twitterImageURL = './trial_images/TEMPEST/Tempest Diamond.webp';
      }
      else if (rank == "Cobalt" && (trial == "Tempest" || trial == "TEMPEST (15)"))
      {
        twitterImageURL = './trial_images/TEMPEST/Tempest Cobalt.webp';
      }
      else if (rank == "Amethyst" && (trial == "Tempest" || trial == "TEMPEST (15)"))
      {
        twitterImageURL = './trial_images/TEMPEST/Tempest Amethyst.webp';
      }
      else if (rank == "Emerald" && (trial == "Tempest" || trial == "TEMPEST (15)"))
      {
        twitterImageURL = './trial_images/TEMPEST/Tempest Emerald.webp';
      }
      else if (rank == "Platinum" && (trial == "Tempest" || trial == "TEMPEST (15)"))
      {
        twitterImageURL = './trial_images/TEMPEST/Tempest Platinum.webp';
      }
      else if (rank == "Onyx" && (trial == "Tempest" || trial == "TEMPEST (15)"))
      {
        twitterImageURL = './trial_images/TEMPEST/Tempest Onyx.webp';
      }
      else if (rank == "Pearl" && (trial == "Tempest" || trial == "TEMPEST (15)"))
      {
        twitterImageURL = './trial_images/TEMPEST/Tempest Pearl.webp';
      }



      //UPHEAVAL (14)
      else if (rank == "Silver" && (trial == "Upheaval" || trial == "UPHEAVAL (14)"))
      {
        twitterImageURL = './trial_images/UPHEAVAL/Upheaval Silver.webp';
      }
      else if (rank == "Gold" && (trial == "Upheaval" || trial == "UPHEAVAL (14)"))
      {
        twitterImageURL = './trial_images/UPHEAVAL/Upheaval Gold.webp';
      }
      else if (rank == "Diamond" && (trial == "Upheaval" || trial == "UPHEAVAL (14)"))
      {
        twitterImageURL = './trial_images/UPHEAVAL/Upheaval Diamond.webp';
      }
      else if (rank == "Cobalt" && (trial == "Upheaval" || trial == "UPHEAVAL (14)"))
      {
        twitterImageURL = './trial_images/UPHEAVAL/Upheaval Cobalt.webp';
      }
      else if (rank == "Amethyst" && (trial == "Upheaval" || trial == "UPHEAVAL (14)"))
      {
        twitterImageURL = './trial_images/UPHEAVAL/Upheaval Amethyst.webp';
      }
      else if (rank == "Emerald" && (trial == "Upheaval" || trial == "UPHEAVAL (14)"))
      {
        twitterImageURL = './trial_images/UPHEAVAL/Upheaval Emerald.webp';
      }
      else if (rank == "Platinum" && (trial == "Upheaval" || trial == "UPHEAVAL (14)"))
      {
        twitterImageURL = './trial_images/UPHEAVAL/Upheaval Platinum.webp';
      }
      else if (rank == "Onyx" && (trial == "Upheaval" || trial == "UPHEAVAL (14)"))
      {
        twitterImageURL = './trial_images/UPHEAVAL/Upheaval Onyx.webp';
      }
      else if (rank == "Pearl" && (trial == "Upheaval" || trial == "UPHEAVAL (14)"))
      {
        twitterImageURL = './trial_images/UPHEAVAL/Upheaval Pearl.webp';
      }



      //DEVOTION (12)
      else if (rank == "Silver" && (trial == "Devotion" || trial == "DEVOTION (12)"))
      {
        twitterImageURL = './trial_images/DEVOTION/Devotion Silver.webp';
      }
      else if (rank == "Gold" && (trial == "Devotion" || trial == "DEVOTION (12)"))
      {
        twitterImageURL = './trial_images/DEVOTION/Devotion Gold.webp';
      }
      else if (rank == "Diamond" && (trial == "Devotion" || trial == "DEVOTION (12)"))
      {
        twitterImageURL = './trial_images/DEVOTION/Devotion Diamond.webp';
      }
      else if (rank == "Cobalt" && (trial == "Devotion" || trial == "DEVOTION (12)"))
      {
        twitterImageURL = './trial_images/DEVOTION/Devotion Cobalt.webp';
      }
      else if (rank == "Amethyst" && (trial == "Devotion" || trial == "DEVOTION (12)"))
      {
        twitterImageURL = './trial_images/DEVOTION/Devotion Amethyst.webp';
      }
      else if (rank == "Emerald" && (trial == "Devotion" || trial == "DEVOTION (12)"))
      {
        twitterImageURL = './trial_images/DEVOTION/Devotion Emerald.webp';
      }
      else if (rank == "Platinum" && (trial == "Devotion" || trial == "DEVOTION (12)"))
      {
        twitterImageURL = './trial_images/DEVOTION/Devotion Platinum.webp';
      }
      else if (rank == "Onyx" && (trial == "Devotion" || trial == "DEVOTION (12)"))
      {
        twitterImageURL = './trial_images/DEVOTION/Devotion Onyx.webp';
      }
      else if (rank == "Pearl" && (trial == "Devotion" || trial == "DEVOTION (12)"))
      {
        twitterImageURL = './trial_images/DEVOTION/Devotion Pearl.webp';
      }



      //BELIEVE (12)
      else if (rank == "Silver" && (trial == "Believe" || trial == "BELIEVE (12)"))
      {
        twitterImageURL = './trial_images/BELIEVE/Believe Silver.webp';
      }
      else if (rank == "Gold" && (trial == "Believe" || trial == "BELIEVE (12)"))
      {
        twitterImageURL = './trial_images/BELIEVE/Believe Gold.webp';
      }
      else if (rank == "Diamond" && (trial == "Believe" || trial == "BELIEVE (12)"))
      {
        twitterImageURL = './trial_images/BELIEVE/Believe Diamond.webp';
      }
      else if (rank == "Cobalt" && (trial == "Believe" || trial == "BELIEVE (12)"))
      {
        twitterImageURL = './trial_images/BELIEVE/Believe Cobalt.webp';
      }
      else if (rank == "Amethyst" && (trial == "Believe" || trial == "BELIEVE (12)"))
      {
        twitterImageURL = './trial_images/BELIEVE/Believe Amethyst.webp';
      }
      else if (rank == "Emerald" && (trial == "Believe" || trial == "BELIEVE (12)"))
      {
        twitterImageURL = './trial_images/BELIEVE/Believe Emerald.webp';
      }
      else if (rank == "Platinum" && (trial == "Believe" || trial == "BELIEVE (12)"))
      {
        twitterImageURL = './trial_images/BELIEVE/Believe Platinum.webp';
      }
      else if (rank == "Onyx" && (trial == "Believe" || trial == "BELIEVE (12)"))
      {
        twitterImageURL = './trial_images/BELIEVE/Believe Onyx.webp';
      }
      else if (rank == "Pearl" && (trial == "Believe" || trial == "BELIEVE (12)"))
      {
        twitterImageURL = './trial_images/BELIEVE/Believe Pearl.webp';
      }



      //PASSPORT (13)
      else if (rank == "Silver" && (trial == "Passport" || trial == "PASSPORT (13)"))
      {
        twitterImageURL = './trial_images/PASSPORT/Passport Silver.webp';
      }
      else if (rank == "Gold" && (trial == "Passport" || trial == "PASSPORT (13)"))
      {
        twitterImageURL = './trial_images/PASSPORT/Passport Gold.webp';
      }
      else if (rank == "Diamond" && (trial == "Passport" || trial == "PASSPORT (13)"))
      {
        twitterImageURL = './trial_images/PASSPORT/Passport Diamond.webp';
      }
      else if (rank == "Cobalt" && (trial == "Passport" || trial == "PASSPORT (13)"))
      {
        twitterImageURL = './trial_images/PASSPORT/Passport Cobalt.webp';
      }
      else if (rank == "Amethyst" && (trial == "Passport" || trial == "PASSPORT (13)"))
      {
        twitterImageURL = './trial_images/PASSPORT/Passport Amethyst.webp';
      }
      else if (rank == "Emerald" && (trial == "Passport" || trial == "PASSPORT (13)"))
      {
        twitterImageURL = './trial_images/PASSPORT/Passport Emerald.webp';
      }
      else if (rank == "Platinum" && (trial == "Passport" || trial == "PASSPORT (13)"))
      {
        twitterImageURL = './trial_images/PASSPORT/Passport Platinum.webp';
      }
      else if (rank == "Onyx" && (trial == "Passport" || trial == "PASSPORT (13)"))
      {
        twitterImageURL = './trial_images/PASSPORT/Passport Onyx.webp';
      }
      else if (rank == "Pearl" && (trial == "Passport" || trial == "PASSPORT (13)"))
      {
        twitterImageURL = './trial_images/PASSPORT/Passport Pearl.webp';
      }


      //SPECTACLE (16)
      else if (rank == "Gold" && (trial == "Spectacle" || trial == "SPECTACLE (16)"))
      {
        twitterImageURL = './trial_images/SPECTACLE/Spectacle Gold.webp';
      }
      else if (rank == "Diamond" && (trial == "Spectacle" || trial == "SPECTACLE (16)"))
      {
        twitterImageURL = './trial_images/SPECTACLE/Spectacle Diamond.webp';
      }
      else if (rank == "Cobalt" && (trial == "Spectacle" || trial == "SPECTACLE (16)"))
      {
        twitterImageURL = './trial_images/SPECTACLE/Spectacle Cobalt.webp';
      }
      else if (rank == "Amethyst" && (trial == "Spectacle" || trial == "SPECTACLE (16)"))
      {
        twitterImageURL = './trial_images/SPECTACLE/Spectacle Amethyst.webp';
      }
      else if (rank == "Emerald" && (trial == "Spectacle" || trial == "SPECTACLE (16)"))
      {
        twitterImageURL = './trial_images/SPECTACLE/Spectacle Emerald.webp';
      }
      else if (rank == "Platinum" && (trial == "Spectacle" || trial == "SPECTACLE (16)"))
      {
        twitterImageURL = './trial_images/SPECTACLE/Spectacle Platinum.webp';
      }
      else if (rank == "Onyx" && (trial == "Spectacle" || trial == "SPECTACLE (16)"))
      {
        twitterImageURL = './trial_images/SPECTACLE/Spectacle Onyx.webp';
      }
      else if (rank == "Pearl" && (trial == "Spectacle" || trial == "SPECTACLE (16)"))
      {
        twitterImageURL = './trial_images/SPECTACLE/Spectacle Pearl.webp';
      }



      //GOSPEL (13)
      else if (rank == "Silver" && (trial == "Gospel" || trial == "GOSPEL (13)"))
      {
        twitterImageURL = './trial_images/GOSPEL/Gospel Silver.webp';
      }
      else if (rank == "Gold" && (trial == "Gospel" || trial == "GOSPEL (13)"))
      {
        twitterImageURL = './trial_images/GOSPEL/Gospel Gold.webp';
      }
      else if (rank == "Diamond" && (trial == "Gospel" || trial == "GOSPEL (13)"))
      {
        twitterImageURL = './trial_images/GOSPEL/Gospel Diamond.webp';
      }
      else if (rank == "Cobalt" && (trial == "Gospel" || trial == "GOSPEL (13)"))
      {
        twitterImageURL = './trial_images/GOSPEL/Gospel Cobalt.webp';
      }
      else if (rank == "Amethyst" && (trial == "Gospel" || trial == "GOSPEL (13)"))
      {
        twitterImageURL = './trial_images/GOSPEL/Gospel Amethyst.webp';
      }
      else if (rank == "Emerald" && (trial == "Gospel" || trial == "GOSPEL (13)"))
      {
        twitterImageURL = './trial_images/GOSPEL/Gospel Emerald.webp';
      }
      else if (rank == "Platinum" && (trial == "Gospel" || trial == "GOSPEL (13)"))
      {
        twitterImageURL = './trial_images/GOSPEL/Gospel Platinum.webp';
      }
      else if (rank == "Onyx" && (trial == "Gospel" || trial == "GOSPEL (13)"))
      {
        twitterImageURL = './trial_images/GOSPEL/Gospel Onyx.webp';
      }
      else if (rank == "Pearl" && (trial == "Gospel" || trial == "GOSPEL (13)"))
      {
        twitterImageURL = './trial_images/GOSPEL/Gospel Pearl.webp';
      }



      //MYTHOS (15)
      else if (rank == "Silver" && (trial == "Mythos" || trial == "MYTHOS (15)"))
      {
        twitterImageURL = './trial_images/MYTHOS/Mythos Silver.webp';
      }
      else if (rank == "Gold" && (trial == "Mythos" || trial == "MYTHOS (15)"))
      {
        twitterImageURL = './trial_images/MYTHOS/Mythos Gold.webp';
      }
      else if (rank == "Diamond" && (trial == "Mythos" || trial == "MYTHOS (15)"))
      {
        twitterImageURL = './trial_images/MYTHOS/Mythos Diamond.webp';
      }
      else if (rank == "Cobalt" && (trial == "Mythos" || trial == "MYTHOS (15)"))
      {
        twitterImageURL = './trial_images/MYTHOS/Mythos Cobalt.webp';
      }
      else if (rank == "Amethyst" && (trial == "Mythos" || trial == "MYTHOS (15)"))
      {
        twitterImageURL = './trial_images/MYTHOS/Mythos Amethyst.webp';
      }
      else if (rank == "Emerald" && (trial == "Mythos" || trial == "MYTHOS (15)"))
      {
        twitterImageURL = './trial_images/MYTHOS/Mythos Emerald.webp';
      }
      else if (rank == "Platinum" && (trial == "Mythos" || trial == "MYTHOS (15)"))
      {
        twitterImageURL = './trial_images/MYTHOS/Mythos Platinum.webp';
      }
      else if (rank == "Onyx" && (trial == "Mythos" || trial == "MYTHOS (15)"))
      {
        twitterImageURL = './trial_images/MYTHOS/Mythos Onyx.webp';
      }
      else if (rank == "Pearl" && (trial == "Mythos" || trial == "MYTHOS (15)"))
      {
        twitterImageURL = './trial_images/MYTHOS/Mythos Pearl.webp';
      }



      //RENDITION (15)
      else if (rank == "Silver" && (trial == "Rendition" || trial == "RENDITION (15)"))
      {
        twitterImageURL = './trial_images/RENDITION/Rendition Silver.webp';
      }
      else if (rank == "Gold" && (trial == "Rendition" || trial == "RENDITION (15)"))
      {
        twitterImageURL = './trial_images/RENDITION/Rendition Gold.webp';
      }
      else if (rank == "Diamond" && (trial == "Rendition" || trial == "RENDITION (15)"))
      {
        twitterImageURL = './trial_images/RENDITION/Rendition Diamond.webp';
      }
      else if (rank == "Cobalt" && (trial == "Rendition" || trial == "RENDITION (15)"))
      {
        twitterImageURL = './trial_images/RENDITION/Rendition Cobalt.webp';
      }
      else if (rank == "Amethyst" && (trial == "Rendition" || trial == "RENDITION (15)"))
      {
        twitterImageURL = './trial_images/RENDITION/Rendition Amethyst.webp';
      }
      else if (rank == "Emerald" && (trial == "Rendition" || trial == "RENDITION (15)"))
      {
        twitterImageURL = './trial_images/RENDITION/Rendition Emerald.webp';
      }
      else if (rank == "Platinum" && (trial == "Rendition" || trial == "RENDITION (15)"))
      {
        twitterImageURL = './trial_images/RENDITION/Rendition Platinum.webp';
      }
      else if (rank == "Onyx" && (trial == "Rendition" || trial == "RENDITION (15)"))
      {
        twitterImageURL = './trial_images/RENDITION/Rendition Onyx.webp';
      }
      else if (rank == "Pearl" && (trial == "Rendition" || trial == "RENDITION (15)"))
      {
        twitterImageURL = './trial_images/RENDITION/Rendition Pearl.webp';
      }



      //SUPERSTAR (14)
      else if (rank == "Silver" && (trial == "Superstar" || trial == "SUPERSTAR (14)"))
      {
        twitterImageURL = './trial_images/SUPERSTAR/Superstar Silver.webp';
      }
      else if (rank == "Gold" && (trial == "Superstar" || trial == "SUPERSTAR (14)"))
      {
        twitterImageURL = './trial_images/SUPERSTAR/Superstar Gold.webp';
      }
      else if (rank == "Diamond" && (trial == "Superstar" || trial == "SUPERSTAR (14)"))
      {
        twitterImageURL = './trial_images/SUPERSTAR/Superstar Diamond.webp';
      }
      else if (rank == "Cobalt" && (trial == "Superstar" || trial == "SUPERSTAR (14)"))
      {
        twitterImageURL = './trial_images/SUPERSTAR/Superstar Cobalt.webp';
      }
      else if (rank == "Amethyst" && (trial == "Superstar" || trial == "SUPERSTAR (14)"))
      {
        twitterImageURL = './trial_images/SUPERSTAR/Superstar Amethyst.webp';
      }
      else if (rank == "Emerald" && (trial == "Superstar" || trial == "SUPERSTAR (14)"))
      {
        twitterImageURL = './trial_images/SUPERSTAR/Superstar Emerald.webp';
      }
      else if (rank == "Platinum" && (trial == "Superstar" || trial == "SUPERSTAR (14)"))
      {
        twitterImageURL = './trial_images/SUPERSTAR/Superstar Platinum.webp';
      }
      else if (rank == "Onyx" && (trial == "Superstar" || trial == "SUPERSTAR (14)"))
      {
        twitterImageURL = './trial_images/SUPERSTAR/Superstar Onyx.webp';
      }
      else if (rank == "Pearl" && (trial == "Superstar" || trial == "SUPERSTAR (14)"))
      {
        twitterImageURL = './trial_images/SUPERSTAR/Superstar Pearl.webp';
      }


      return twitterImageURL;

      }
   };