function BetBook() {
  this.bets = [];
  this.betId = 0;
}

BetBook.prototype.addBet = function (bet) {
  this.bets.push(bet);
};

BetBook.prototype.assignId = function (bet) {
  this.betId += 1;
  bet.id = this.betId;
}

function Bet(betName, betTerms, betPenalty) {
  this.betName = betName;
  this.betUsers = [];
  this.betTerms = betTerms;
  this.betPenalty = betPenalty;
  this.betLoser = "";
  this.currentId = 0;
}


function Penalty(penaltyCategory, penaltyTimeLimit, penaltyAmount) {
  this.penaltyCategory = penaltyCategory;
  this.penaltyTimeLimit = penaltyTimeLimit;
  this.penaltyAmount = penaltyAmount;
}

Penalty.prototype.cashBet = function(penaltyAmount, userName, whichCharity){

  // + userName;
  // How do we choose the other username??

  // A   Enter Bet Amount into betPenalty
  // C   Choose charity or random
  //     Send out email with Amount and Charity
  //     User message saying email was sent and open website
  // T   Choose etsy, craigslist category etc
  //     Send out email with Amount and Item and website

  var charityName = ["Habitat for Humanity", "Planned Parenthood", "Housing First", "Meals on Wheels" ]
  var charityEmail = ["darcie@habitatportlandmetro.org", "contact.us@ppfa.org", "info@naeh.org", "info@mealsonwheelsamerica.org" ]
  var charityWebsite = ["habitat.org", "plannedparenthood.org", "endhomelessness.org", "mealsonwheelsamerica.org" ]
  // Email donation letter to charityEmail[whichCharity];

  return "You owe " + penaltyAmount + "dollars to " + charityName[whichCharity] + "the winner!";
    // Button to continue
    // Display/open charityWebsite[whichCharity;]
}


Penalty.prototype.timeBet = function(penaltyChoice, timeLevel){

  var timeChoice = ["laundry", "child or pet sitting", "house cleaning", "car washing", "volunteer at charity of winner's choice", "jogging"]
  return "You owe" + timeLevel + "hours doing " + timeChoice[penaltyChoice] + "for the winner";
  // Replace for the winner with winner name
}

Penalty.prototype.prankBet = function(prankLevel){

  var prankList = ["sing in public 'Do You Want To Snowman'", "deliver flowers to your crush",  " get at least $20 from strangers", "Jump into the Willamette", " do the naked bike ride but not actually during the Naked Bike Ride", "wear a Make America Great Again hat to People's Coop"];

  return "You must" + prankList[prankLevel];  // ** prank needs to be defined
}

function User(userName, userEmail, userBank) {
  this.userName = userName;
  this.userEmail = userEmail;
  this.userBank = userBank;
}

Bet.prototype.addUser = function(user) {
  this.assignId(user);
  this.betUsers.push(user);
}

Bet.prototype.assignId = function(user) {
  this.currentId += 1;
  user.id = this.currentId;
}

Bet.prototype.getDisplayHTML = function () {
  var html  = '\
  <li class="col-md-4"> \
    <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#bet-details" aria-expanded="false" aria-controls="collapseExample">' + this.betName + '</button> \
    <div class="collapse" id="bet-details">' + this.betTerms + '<button type="button" class="complete" name="win-btn">select winner</button></div> \
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
  var betBook = new BetBook();

  $("#bet-form").submit(function(event){
    console.log("hello from submit button");
    event.preventDefault();
    var betName = $("input[name='bet-name']").val();
    var betUser1 = $("input[name='user1']").val();
    var betUser1Email = $("input[name='email1']").val();
    var betUser2 = $("input[name='user2']").val();
    var betUser2Email = $("input[name='email2']").val();
    var betCategory = $("option[name='money']").val();
    var betAmount = $("input[name='amount']").val();
    var betNotes = $("textarea[name='bet-notes']").val();
    var betPenalty = "Bet Penalty Goes Here";

    var user1 = new User(betUser1, betUser1Email, 0);
    var user2 = new User(betUser2, betUser2Email, 0);
    var betPenalty = new Penalty(betCategory, 0, betAmount);

    var newBet = new Bet(betName, betNotes, betPenalty, false);

    newBet.addUser(user1);
    newBet.addUser(user2);

    betBook.addBet(newBet);

    $("#active-bets").append(newBet.getDisplayHTML());


    $("#bet-form").hide();
    $("#active-bets").show();
    var currentBet = new Bet()
  });

  $("#addBet").click(function() {
    $("#active-bets").hide();
    $("#bet-form").show();
  });

  $("#active-bets").on("click", ".complete", function(){
    console.log("hello from complete button");
    $(".results-display").show();
    $("label[for='user1']").text(betBook.bets[0].betUsers[0].userName);
    $("label[for='user2']").text(betBook.bets[0].betUsers[1].userName);
  });

  $("#bet-details button").click()

  // working with #win-chooser button
  $("#win-chooser").click(function(){
    var winner = $("input:radio[name='winner']:checked").val();
    var user1 = betBook.bets[0].betUsers[0].userName
    var user2 = betBook.bets[0].betUsers[1].userName
    if (winner == 1) {
      $(".resolution").text(user1 + " is the winner!");
    } else if (winner ==2) {
      $(".resolution").text(user2+ " is the winner!");
    }

  })
});
