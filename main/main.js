module.exports = function main(email, suffixes) {
  var fix="";
  for (var i=0;i<email.length;i++)
  {
    if (email.charAt(i)!="@")
      continue;
    for (var j=i+1;j<email.length;j++)
    {
        fix+=email.charAt(j);
    }
  }console.log(fix);
  for (i=0;i<suffixes.length;i++)
  {
    if (fix==suffixes[i])
    {
      return true;
    }
  }
  return false;
};
