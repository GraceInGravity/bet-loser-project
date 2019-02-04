function Bet(betName, betUser, betTerms, betPenalty, betLoser) {
  this.betName = betName;
  this.betUser = [];
  this.betTerms = betTerms;
  this.betPenalty = betPenalty;
  this.betLoser = betLoser;
  this.currentId = 0;
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
  return "You must" + prank;  // ** prank needs to be defined
}

function User(userName, userEmail, userBank) {
  this.userName = userName;
  this.userEmail = userEmail;
  this.userBank = userBank;
}

Bet.prototype.addUser = function(user) {
  this.users.push(user);
}

Bet.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Bet.prototype.getDisplayHTML = function () {
  var html  = "<h1>" + this.betName  + "</h1> \
  <p>" + this.betUser.userName + " is involved in this bet for " + this.betTerms;

  return html;
};


$(function(){
  $("#bet-form").submit(function(event){
    console.log("hello from submit button");
    event.preventDefault();
    var betName = $("input[name='bet-name']").val();
    var betUser1 = $("input[name='user1']").val();
    var betUser1Email = $("input[name='email1']").val();
    var betUser2 = $("input[name='user2']").val();
    var betUser2Email = $("input[name='email2']").val();
    var betNotes = $("textarea[name='bet-notes']").val();
    var betPenalty = "Bet Penalty Goes Here";

    var user1 = new User(betUser1, betUser1Email, 0);
    var user2 = new User(betUser2, betUser2Email, 0);

    var newBet = new Bet(betName, user1, betNotes, betPenalty, false);

    $(".bets").html(newBet.getDisplayHTML());



    var currentBet = new Bet()
  })
});
