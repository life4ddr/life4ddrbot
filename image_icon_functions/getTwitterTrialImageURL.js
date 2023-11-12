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
      else if (rank == "Pearl" && trial == "CELESTIAL (13)")
      {
        twitterImageURL = './trial_images/CELESTIAL/Celestial Pearl.webp';
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
      else if (rank == "Pearl" && trial == "DAYBREAK (14)")
      {
        twitterImageURL = './trial_images/DAYBREAK/Daybreak Pearl.webp';
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
      else if (rank == "Pearl" && trial == "HELLSCAPE (15)")
      {
        twitterImageURL = './trial_images/HELLSCAPE/Hellscape Pearl.webp';
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
      else if (rank == "Pearl" && trial == "CLOCKWORK (15)")
      {
        twitterImageURL = './trial_images/CLOCKWORK/Clockwork Pearl.webp';
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
      else if (rank == "Pearl" && trial == "PHARAOH (15)")
      {
        twitterImageURL = './trial_images/PHARAOH/Pharaoh Pearl.webp';
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
      else if (rank == "Pearl" && trial == "PARADOX (16)")
      {
        twitterImageURL = './trial_images/PARADOX/Paradox Pearl.webp';
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
      else if (rank == "Pearl" && trial == "INHUMAN (16)")
      {
        twitterImageURL = './trial_images/INHUMAN/Inhuman Pearl.webp';
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
      else if (rank == "Pearl" && trial == "CHEMICAL (17)")
      {
        twitterImageURL = './trial_images/CHEMICAL/Chemical Pearl.webp';
      }


      //DOGFIGHT (18)
      if (rank == "Silver" && trial == "DOGFIGHT (18)")
      {
        twitterImageURL = './trial_images/DOGFIGHT/LIFE4_BotGraphic_Dogfight_Silver.webp';
      }
      else if (rank == "Gold" && trial == "DOGFIGHT (18)")
      {
        twitterImageURL = './trial_images/DOGFIGHT/LIFE4_BotGraphic_Dogfight_Gold.webp';
      }
      else if (rank == "Diamond" && trial == "DOGFIGHT (18)")
      {
        twitterImageURL = './trial_images/DOGFIGHT/LIFE4_BotGraphic_Dogfight_Diamond.webp';
      }
      else if (rank == "Cobalt" && trial == "DOGFIGHT (18)")
      {
        twitterImageURL = './trial_images/DOGFIGHT/LIFE4_BotGraphic_Dogfight_Cobalt.webp';
      }
      else if (rank == "Amethyst" && trial == "DOGFIGHT (18)")
      {
        twitterImageURL = './trial_images/DOGFIGHT/LIFE4_BotGraphic_Dogfight_Amethyst.webp';
      }
      else if (rank == "Emerald" && trial == "DOGFIGHT (18)")
      {
        twitterImageURL = './trial_images/DOGFIGHT/LIFE4_BotGraphic_Dogfight_Emerald.webp';
      }
      else if (rank == "Platinum" && trial == "DOGFIGHT (18)")
      {
        twitterImageURL = './trial_images/DOGFIGHT/LIFE4_BotGraphic_Dogfight_Platinum.webp';
      }
      else if (rank == "Onyx" && trial == "DOGFIGHT (18)")
      {
        twitterImageURL = './trial_images/DOGFIGHT/LIFE4_BotGraphic_Dogfight_Onyx.webp';
      }
      else if (rank == "Pearl" && trial == "DOGFIGHT (18)")
      {
        twitterImageURL = './trial_images/DOGFIGHT/Dogfight Pearl.webp';
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
      else if (rank == "Pearl" && trial == "ASCENSION (17)")
      {
        twitterImageURL = './trial_images/ASCENSION/Ascension Pearl.webp';
      }


      //STORYBOOK (13)
      if (rank == "Silver" && trial == "STORYBOOK (13)")
      {
        twitterImageURL = './trial_images/STORYBOOK/LIFE4_BotGraphic_Storybook_Silver.webp';
      }
      else if (rank == "Gold" && trial == "STORYBOOK (13)")
      {
        twitterImageURL = './trial_images/STORYBOOK/LIFE4_BotGraphic_Storybook_Gold.webp';
      }
      else if (rank == "Diamond" && trial == "STORYBOOK (13)")
      {
        twitterImageURL = './trial_images/STORYBOOK/LIFE4_BotGraphic_Storybook_Diamond.webp';
      }
      else if (rank == "Cobalt" && trial == "STORYBOOK (13)")
      {
        twitterImageURL = './trial_images/STORYBOOK/LIFE4_BotGraphic_Storybook_Cobalt.webp';
      }
      else if (rank == "Amethyst" && trial == "STORYBOOK (13)")
      {
        twitterImageURL = './trial_images/STORYBOOK/LIFE4_BotGraphic_Storybook_Amethyst.webp';
      }
      else if (rank == "Emerald" && trial == "STORYBOOK (13)")
      {
        twitterImageURL = './trial_images/STORYBOOK/LIFE4_BotGraphic_Storybook_Emerald.webp';
      }
      else if (rank == "Platinum" && trial == "STORYBOOK (13)")
      {
        twitterImageURL = './trial_images/STORYBOOK/LIFE4_BotGraphic_Storybook_Platinum.webp';
      }
      else if (rank == "Onyx" && trial == "STORYBOOK (13)")
      {
        twitterImageURL = './trial_images/STORYBOOK/LIFE4_BotGraphic_Storybook_Onyx.webp';
      }
      else if (rank == "Pearl" && trial == "STORYBOOK (13)")
      {
        twitterImageURL = './trial_images/STORYBOOK/Storybook Pearl.webp';
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
      else if (rank == "Pearl" && trial == "HEATWAVE (15)")
      {
        twitterImageURL = './trial_images/HEATWAVE/Heatwave Pearl.webp';
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
      else if (rank == "Pearl" && trial == "MAINFRAME (13)")
      {
        twitterImageURL = './trial_images/MAINFRAME/Mainframe Pearl.webp';
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
      else if (rank == "Pearl" && trial == "SNOWDRIFT (16)")
      {
        twitterImageURL = './trial_images/SNOWDRIFT/Snowdrift Pearl.webp';
      }



      //SIDEQUEST (14)
      if (rank == "Silver" && trial == "SIDEQUEST (14)")
      {
        twitterImageURL = './trial_images/SIDEQUEST/LIFE4_BotGraphic_Sidequest_Silver.webp';
      }
      else if (rank == "Gold" && trial == "SIDEQUEST (14)")
      {
        twitterImageURL = './trial_images/SIDEQUEST/LIFE4_BotGraphic_Sidequest_Gold.webp';
      }
      else if (rank == "Diamond" && trial == "SIDEQUEST (14)")
      {
        twitterImageURL = './trial_images/SIDEQUEST/LIFE4_BotGraphic_Sidequest_Diamond.webp';
      }
      else if (rank == "Cobalt" && trial == "SIDEQUEST (14)")
      {
        twitterImageURL = './trial_images/SIDEQUEST/LIFE4_BotGraphic_Sidequest_Cobalt.webp';
      }
      else if (rank == "Amethyst" && trial == "SIDEQUEST (14)")
      {
        twitterImageURL = './trial_images/SIDEQUEST/LIFE4_BotGraphic_Sidequest_Amethyst.webp';
      }
      else if (rank == "Emerald" && trial == "SIDEQUEST (14)")
      {
        twitterImageURL = './trial_images/SIDEQUEST/LIFE4_BotGraphic_Sidequest_Emerald.webp';
      }
      else if (rank == "Platinum" && trial == "SIDEQUEST (14)")
      {
        twitterImageURL = './trial_images/SIDEQUEST/LIFE4_BotGraphic_Sidequest_Platinum.webp';
      }
      else if (rank == "Onyx" && trial == "SIDEQUEST (14)")
      {
        twitterImageURL = './trial_images/SIDEQUEST/LIFE4_BotGraphic_Sidequest_Onyx.webp';
      }
      else if (rank == "Pearl" && trial == "SIDEQUEST (14)")
      {
        twitterImageURL = './trial_images/SIDEQUEST/Sidequest Pearl.webp';
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
      else if (rank == "Pearl" && trial == "WANDERLUST (15)")
      {
        twitterImageURL = './trial_images/WANDERLUST/Wanderlust Pearl.webp';
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
      else if (rank == "Pearl" && trial == "CIRCADIA (16)")
      {
        twitterImageURL = './trial_images/CIRCADIA/Circadia Pearl.webp';
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
      else if (rank == "Pearl" && trial == "QUANTUM (18)")
      {
        twitterImageURL = './trial_images/QUANTUM/Quantum Pearl.webp';
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
      else if (rank == "Pearl" && trial == "SPECIES (13)")
      {
        twitterImageURL = './trial_images/SPECIES/Species Pearl.webp';
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
      else if (rank == "Pearl" && trial == "TEMPEST (15)")
      {
        twitterImageURL = './trial_images/TEMPEST/Tempest Pearl.webp';
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
      else if (rank == "Pearl" && trial == "UPHEAVAL (14)")
      {
        twitterImageURL = './trial_images/UPHEAVAL/Upheaval Pearl.webp';
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
      else if (rank == "Pearl" && trial == "DEVOTION (12)")
      {
        twitterImageURL = './trial_images/DEVOTION/Devotion Pearl.webp';
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
      else if (rank == "Pearl" && trial == "BELIEVE (12)")
      {
        twitterImageURL = './trial_images/BELIEVE/Believe Pearl.webp';
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
      else if (rank == "Pearl" && trial == "PASSPORT (13)")
      {
        twitterImageURL = './trial_images/PASSPORT/Passport Pearl.webp';
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
      else if (rank == "Pearl" && trial == "SPECTACLE (16)")
      {
        twitterImageURL = './trial_images/SPECTACLE/Spectacle Pearl.webp';
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
      else if (rank == "Pearl" && trial == "GOSPEL (13)")
      {
        twitterImageURL = './trial_images/GOSPEL/Gospel Pearl.webp';
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
      else if (rank == "Pearl" && trial == "MYTHOS (15)")
      {
        twitterImageURL = './trial_images/MYTHOS/Mythos Pearl.webp';
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
      else if (rank == "Pearl" && trial == "RENDITION (15)")
      {
        twitterImageURL = './trial_images/RENDITION/Rendition Pearl.webp';
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
      else if (rank == "Pearl" && trial == "SUPERSTAR (14)")
      {
        twitterImageURL = './trial_images/SUPERSTAR/Superstar Pearl.webp';
      }


      return twitterImageURL;

      }
   };