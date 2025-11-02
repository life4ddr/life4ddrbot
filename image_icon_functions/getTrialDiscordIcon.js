//function that returns a discord icon code based on a rank

module.exports = {
    getTrialDiscordIcon: function(rank) {
       
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
  else if (rank == "Pearl")
  {
    discordemoji = "<:pe5:1088289686478397510>";
  }
  //TODO
  else if (rank == "Ruby")
  {
    discordemoji = "<:pe5:1088289686478397510>";
  }
  else if (rank == "Topaz")
  {
    discordemoji = "<:pe5:1088289686478397510>";
  }

  return discordemoji;

       }
   };