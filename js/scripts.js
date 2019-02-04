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

Bet.prototype.getDisplayHTML = function () {
  var html  = '\
  <li> \
    <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#bet-details" aria-expanded="false" aria-controls="collapseExample">' + this.betName + '</button> \
    <div class="collapse" id="bet-details">' + this.betTerms + '</div> \
  </li>'

  return html;
};

/*
<p>
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-target
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  </div>
</div>
*/

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

    $("#active-bets").append(newBet.getDisplayHTML());


    $("#bet-form").hide();
    $("#active-bets").show();
    var currentBet = new Bet()
  })
});
