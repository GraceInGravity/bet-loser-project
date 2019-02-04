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

function User(userName, userEmail, userBank) {
  this.userName = userName;
  this.userEmail = userEmail;
  this.userBank = userBank;
}
