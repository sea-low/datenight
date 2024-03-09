const potentialDates = [
    {dateType: 'in', dateActivity: 'Gaming Night: Video Game Edition', dateDesciption: 'Choose a video game to play together! Hop on a discord call and enjoy games and conversation.'},
    {dateType: 'in', dateActivity: 'Gaming Night: Board Game Edition', dateDesciption: 'Select a two player board game and get your competitive side on!'},
    {dateType: 'in', dateActivity: 'Movie Night', dateDesciption: 'Make some snacky food for dinner and get cozy for a movie night!'},
    {dateType: 'in', dateActivity: 'Hobby/Project Night', dateDesciption: 'Pick a project that one of you is working on and help the other one out working on it!'},
    {dateType: 'in', dateActivity: 'Lego', dateDesciption: 'Grab a set of legos--either a large set that can be done together or individual ones--and enjoy.'},
    {dateType: 'in', dateActivity: 'Cat Night', dateDesciption: 'Follow around the cat and act like her for a few hours.'},
    {dateType: 'in', dateActivity: 'Yoga', dateDesciption: 'Find a yoga video on Youtube and follow along.'},
    {dateType: 'in', dateActivity: 'Painting Night', dateDesciption: 'Select a guided painting video and paint along with it. Best paired with charcuterie.'},
    {dateType: 'in', dateActivity: 'Try Brand New Recipe', dateDesciption: 'All those TikToks and Instagram recipes that you have shared to each other and drooled over? Tonight, y`all are making one!'},
    {dateType: 'in', dateActivity: 'Competitive Origami', dateDesciption: 'Find a Youtube video for an origami that neither of you have made. See who can fold it the best!'},
    {dateType: 'in', dateActivity: 'Fort Night', dateDesciption: 'Find as many blankets as possible and work together to build a fort! What do you do in the fort? Well...it`s up to your imagination.'},
    {dateType: 'out', dateActivity: 'Gone Fishing', dateDesciption: 'Two poles. The water. The serentiy. What more do you need?'},
    {dateType: 'out', dateActivity: 'Mini Golf', dateDesciption: 'Time to get your golf on! Who knows? Maybe one of you will win that Icee.'},
    {dateType: 'out', dateActivity: 'Picnic and Walk', dateDesciption: 'All you need is some sandwiches or '},
    {dateType: 'out', dateActivity: 'Double Date with Friends', dateDesciption: 'Hit up the buds and see who wants to do an activity out!'},
    {dateType: 'out', dateActivity: 'Try a New Food Place', dateDesciption: 'Remember that place you drove by and thought `I wonder what that place is like?` Today, you`re trying it!'},
    {dateType: 'out', dateActivity: '"First Date" Date', dateDesciption: 'Go thrifting. Pick outfits for each other. Make up a character. Select a place that you don`t normally go to and have a first date!'},
    {dateType: 'out', dateActivity: 'Museum', dateDesciption: 'Find a museum or historical site and check it out together.'},
    {dateType: 'out', dateActivity: 'Hike', dateDesciption: 'Get your comfy clothes and good walking shoes on and hit the trail!'},
    {dateType: 'out', dateActivity: 'VR Laser Tag', dateDesciption: 'Head on over to Broken Controller and see who can '},
    {dateType: 'out', dateActivity: 'Water Gun Fight at Piedra', dateDesciption: 'Load up your super soakers and get ready for the hunt!'},
    {dateType: 'out', dateActivity: 'Bumper Cars', dateDesciption: 'Go to the track and hit on each other!'},
    {dateType: 'out', dateActivity: 'Day Trip', dateDesciption: 'Plan out a day trip together and hit the road.'},
    {dateType: 'out', dateActivity: 'Shooting Range', dateDesciption: 'Go to the shooting range and see who can get the most bullseyes!'},
];

let selectedDates = [];

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex > 0) {
  
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
  
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

const inFilter = (element) => {
	return element.dateType === "in";
};

const outFilter = (element) => {
	return element.dateType === "out";
};

const outs = potentialDates.filter(outFilter);

const ins = potentialDates.filter(inFilter);

const dateDescription = [];

function checkButton() {
    if(document.getElementById("in").checked === true) {
        shuffle(ins);
        selectedDates.push(ins[0].dateActivity);
        dateDescription.push(ins[0].dateDesciption);
       // DateDescription.push(ins[0])
    } else if(document.getElementById("out").checked === true) {
        shuffle(outs);
        selectedDates.push(outs[0].dateActivity);
        dateDescription.push(outs[0].dateDesciption);
    } else {
        shuffle(potentialDates);
        selectedDates.push(potentialDates[0].dateActivity);
        dateDescription.push(potentialDates[0].dateDesciption);
    };
    document.getElementById("date-activity").innerHTML=`${selectedDates[(selectedDates.length - 1)]}`
    document.getElementById("date-description").innerHTML=`${dateDescription[(dateDescription.length - 1)]}`
    console.log(selectedDates);
}

$("input:checkbox").on('click', function() {
    var $box = $(this);
    if ($box.is(":checked")) {
      var group = "input:checkbox[name='" + $box.attr("name") + "']";
      $(group).prop("checked", false);
      $box.prop("checked", true);
    } else {
      $box.prop("checked", false);
    }
  });
  
    function isAtLeastOneChecked() {
        if(document.getElementById("in-check").checked === false && document.getElementById("out-check").checked === false) {
            alert('Must choose date type.');
        }
    }

    function isThereText() {
        if($("#new-description").val().trim().length < 1) {
            alert("Enter a description for the new date.");
            return;
        }
    }

  function requirementsMet() {
    isAtLeastOneChecked();
    isThereText();
    console.log(document.getElementsByName("new-description").textarea);
  }