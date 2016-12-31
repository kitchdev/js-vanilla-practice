var rockSpearguns = {
  Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
  Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
  Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
  Firefork: {barbs: 6, weight: 8, heft: "overhand"},
  "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
};

// convert listGuns function
rockSpearguns["listGuns"] = function() {
  for (var speargun in this) {
  speargun["barbs"] ? console.log("Behold! " + speargun + ", with " +
                this[speargun]["heft"] + " heft!")  : null;
  }
};

rockSpearguns.listGuns();