var config_data = `
{

  "title": "Scouting App 2023",
  "page_title": "Charged Up",
  "checkboxAs": "YN",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2023gacar",
      "required": "true",
      "disabled": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "elims": "Double Elimination<br>",
        "finals": "Finals"
      },
      "defaultValue": "quals",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 100,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "red1": "Red-1",
        "blue1": "Blue-1<br>",
        "red2": "Red-2",
        "blue2": "Blue-2<br>",
        "red3": "Red-3",
        "blue3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    {
    "name": "On Field",
      "code": "ON",
      "type": "bool"
    },
    { "name": "Auto Start Position",
      "code": "as",
      "type": "field_image",
      "filename": "2023/field_image.png"
    }
  ],
  "auton": [
    { "name": "Mobility?",
      "code": "am",
      "type": "bool"
    },
    { "name": "🟪 High Cube Scored",
      "code": "auh",
      "type": "counter"
    },
    { "name": "🟪 Medium Cube Scored",
      "code": "aum",
      "type": "counter"
    },
    { "name": "🟪 Low Cube Scored",
      "code": "aul",
      "type": "counter"
    },
    { "name": "⚠️ High Cone Scored",
      "code": "aoh",
      "type": "counter"
    },
    { "name": "⚠️ Medium Cone Scored",
      "code": "aom",
      "type": "counter"
    },
    { "name": "⚠️ Low Cone Scored",
      "code": "aol",
      "type": "counter"
    },
    { "name": "Docked",
      "code": "ad",
      "type":"radio",
      "choices": {
        "DE": "Docked (not Engaged)<br>",
        "E": "Engaged<br>",
        "AF": "Attempted but failed<br>",
        "NA": "Not attempted"
      },
      "defaultValue": "docked"
    }
  ],
  "teleop": [
    { "name": "Cycle Timer",
      "code": "tct",
      "type": "cycle"
    },
    { "name": "🟪 High Cube Scored",
      "code": "tuh",
      "type": "counter"
    },
    { "name": "🟪 Medium Cube Scored",
      "code": "tum",
      "type": "counter"
    },
    { "name": "🟪 Low Cube Scored",
      "code": "tul",
      "type": "counter"
    },
    { "name": "⚠️ High Cone Scored",
      "code": "toh",
      "type": "counter"
    },
    { "name": "⚠️ Medium Cone Scored",
      "code": "tom",
      "type": "counter"
    },
    { "name": "⚠️ Low Cone Scored",
      "code": "tol",
      "type": "counter"
    },
    { "name": "Feeder Count",
      "code": "tfc",
      "type": "counter"
    },
    { "name": "Was Defended",
      "code": "wd",
      "type": "bool"
    },
    { "name": "Smart Placement (creates Links)",
      "code": "lnk",
      "type": "bool"
    },
    { "name": "Cargo Intake From",
      "code": "cif",
      "type": "radio",
      "choices": {
        "SU": "Substation<br>",
        "G": "Ground<br>",
        "B": "Both<br>",
        "NA": "Not Attempted"
      },
      "defaultValue": "both"
    }
  ],
  "endgame": [
    { "name": "Docking Timer",
      "code": "dt",
      "type": "timer"
    },
    { "name": "Final Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "P": "Parked<br>",
        "DE": "Docked (Not Engaged)<br>",
        "E": "Engaged<br>",
        "AF": "Attempted but failed<br>",
        "NA": "Not attempted"
      },
      "defaultValue": "parked"
    },
    { "name": "# of alliance bots docked/engaged",
      "code": "cn",
      "type": "counter"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "code": "ds",
      "type": "radio",
      "choices": {
        "1": "1<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5"
      },
      "defaultValue": "3"
    },
    { "name": "Links Scored",
      "code": "ls",
      "type": "counter"
    },
    { "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "1": "1<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5<br>", 
        "NA": "NA"
      },
      "defaultValue": "3"
    },
    { "name": "Speed Rating",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "1 (slow)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5 (fast)"
      },
      "defaultValue":"3"
    },
    { "name": "Died/Tipped",
      "code": "d",
      "type": "bool"
    },
    { "name": "Avoided coopertition",
      "code": "coo",
      "type": "bool"
    },
    { "name": "Make good alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 25
    },
    { "name": "Confidence Rating",
      "code": "cnf",
      "type": "radio",
      "choices": {
        "1": "1<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5"
        },
      "defaultValue": "3"
    }
  ]
}`;
