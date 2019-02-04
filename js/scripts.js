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

Bet.prototype.getDisplayHTML = function () {
  var html  = "<h1>" + this.betName  + "</h1> \
  <p>" + this.betUser + " is involved in this bet for " + this.betTerms;

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

    var newBet = new Bet(betName, betUser1, betNotes, betPenalty, false);

    $(".bets").html(newBet.getDisplayHTML());



    var currentBet = new Bet()
  })
});
