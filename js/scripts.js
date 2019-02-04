function Bet(betName, betUser, betTerms, betPenalty, betLoser) {
  this.betName = betName;
  this.betUser = betUser;
  this.betTerms = betTerms;
  this.betPenalty = betPenalty;
  this.betLoser = betLoser;
}

function Penalty(penaltyCategory, penaltyTimeLimit, penaltyAmount) {
  this.penaltyCategory = penaltyCategory;
  this.penaltyTimeLimit = penaltyTimeLimit;
  this.penaltyAmount = penaltyAmount;
}

Penalty.prototype.cashBet = function(penaltyAmount, userName){
  return "You owe " + penaltyAmount + "dollars to " + "the winner!";
  // + userName;
  // How do we choose the other username??

  // A   Enter Bet Amount into betPenalty
  // C   Choose charity or random
  //     Send out email with Amount and Charity
  //     User message saying email was sent and open website
  // T   Choose etsy, craigslist category etc
  //     Send out email with Amount and Item and website

}

Penalty.prototype.timeBet = function(penaltyAmount){
  return "You owe" + penaltyAmount + "hours working " + "for the winner";

}

Penalty.prototype.prankBet = function(){
  return "You must" + "sing in the train station";


}

function User(userName, userEmail, userBank) {
  this.userName = userName;
  this.userEmail = userEmail;
  this.userBank = userBank;
}

User.prototype.mirrorInfo = function(){
  return "Welcome to Bet Loser" + this.userName + " !";
}
