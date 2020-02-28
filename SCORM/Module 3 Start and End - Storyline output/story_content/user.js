function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6LtaPasyTpa":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var user_15_submission = player.GetVar("user_15_submission");
var user_15_submission = user_15_submission + " "; 
var initial_whitespace_rExp = /^[^A-Za-z0-9.']+/gi;
var left_trimmedStr = user_15_submission.replace(initial_whitespace_rExp, "");
var non_alphanumerics_rExp = rExp = /[^A-Za-z0-9.']+/gi;
var cleanedStr = left_trimmedStr.replace(non_alphanumerics_rExp, " ");
var splitString = cleanedStr.split(" ");
var user_15_wordcount = splitString.length -1;
player.SetVar("user_15_wordcount", user_15_wordcount);
}

