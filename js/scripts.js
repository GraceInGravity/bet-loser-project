function BetBook() {
  this.bets = [];
  this.currentBetIndex = 0;
}

BetBook.prototype.addBet = function (bet) {
  this.assignId(bet);
  this.bets.push(bet);
};

BetBook.prototype.assignId = function (bet) {
  this.currentBetIndex += 1;
  bet.id = this.currentBetIndex;
}

function Bet(betName, betTerms, betPenalty) {
  this.betName = betName;
  this.betUsers = [];
  this.betTerms = betTerms;
  this.betPenalty = betPenalty;
  this.betLoser = "";
  this.currentUserIndex = 0;
}

Bet.prototype.addUser = function(user) {
  this.assignId(user);
  this.betUsers.push(user);
}

Bet.prototype.assignId = function(user) {
  this.currentUserIndex += 1;
  user.id = this.currentUserIndex;
}

Bet.prototype.getDisplayHTML = function () {
  var html  = '\
  <li class="col-md-4 card" id="' + this.id + '"> \
    <button class="card-header" type="button" data-toggle="collapse" data-target="#details'+ this.id + '" aria-expanded="false" aria-controls="collapseExample">' + this.betName + '</button> \
    <div class="collapse" id="details' + this.id + '"> \
      <div class="card-body"> \
        <p class="card-text">' + this.betTerms + '</p> \
        <h5 class="card-title">Participants</h5> \
        <p class="card-text"><span class="betUser>">' + this.betUsers[0].userName + '</span><span class="betUser">' + this.betUsers[1].userName + '</span></p> \
        <h5 class="card-title">Stakes</h5> \
        <p class="card-text">' + this.betPenalty.penaltyCategory + '</p> \
        <p class="card-text">' + this.betPenalty.penaltyAmount + '</p> \
      </div> \
    <button type="button" class="complete" id="win-btn' + this.id + '" name="win-btn" data-toggle="modal" data-target="#declareWinnerModal">Select Winner</button></div> \
  </li>'

  return html;
};


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
    console.log(betPenalty);
    var newBet = new Bet(betName, betNotes, betPenalty, false);

    newBet.addUser(user1);
    newBet.addUser(user2);

    betBook.addBet(newBet);

    $("#active-bets").append(newBet.getDisplayHTML());


    $("#addBetModal").modal("hide");
    $("#active-bets").show();
    var currentBet = new Bet()
  });

  $("#addBet").click(function() {
    $("#active-bets").hide();
    $("#bet-form").show();
  });

  $("#active-bets").on("click", ".complete", function(){
    $(".results-display").show();
    $("label[for='user1']").text(betBook.bets[0].betUsers[0].userName);
    $("label[for='user2']").text(betBook.bets[0].betUsers[1].userName);
    $(".active-bet-name").text(betBook.bets[0].betName);
  });


  $("#bet-details button").click()

  // working with #win-chooser button
  $("#win-chooser").click(function(){
    $(".results-display").hide();
    var winner = $("input:radio[name='winner']:checked").val();
    var user1 = betBook.bets[0].betUsers[0].userName;
    var user2 = betBook.bets[0].betUsers[1].userName;
    var amount = betBook.bets[0].betPenalty.penaltyAmount;
    var time = betBook.bets[0].betPenalty.penaltyTimeLimit;
    if (winner == 1) {
      $("li#1 .card-body").append(user1 + " is the winner! <br>" + "You have " + time + " days to pay " + user2 + " $" + amount );
      $("#1 button:last-child").hide();
      console.log(time);
    } else if (winner ==2) {
      $("li#1 .card-body").append(user2+ " is the winner! <br>" + "You have " + time + " days to pay " + user2 + " $" + amount);
      $("#1 button:last-child").hide();
    }


  })
});
