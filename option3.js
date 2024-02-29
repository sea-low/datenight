const potentialDates = [
    {dateType: 'in', dateActivity: 'video games'},
    {dateType: 'in', dateActivity: 'board games'},
    {dateType: 'in', dateActivity: 'movie night'},
    {dateType: 'in', dateActivity: 'hobby/project night'},
    {dateType: 'in', dateActivity: 'lego'},
    {dateType: 'in', dateActivity: 'cat night'},
    {dateType: 'in', dateActivity: 'yoga'},
    {dateType: 'in', dateActivity: 'painting night'},
    {dateType: 'in', dateActivity: 'try brand new recipe'},
    {dateType: 'in', dateActivity: 'competitive origami'},
    {dateType: 'out', dateActivity: 'fishing'},
    {dateType: 'out', dateActivity: 'mini golf'},
    {dateType: 'out', dateActivity: 'picnic and walk'},
    {dateType: 'out', dateActivity: 'double date with friends'},
    {dateType: 'out', dateActivity: 'try a new food place'},
    {dateType: 'out', dateActivity: 'first date date'},
    {dateType: 'out', dateActivity: 'museum'},
    {dateType: 'out', dateActivity: 'hike'},
    {dateType: 'out', dateActivity: 'vr laser tag'},
    {dateType: 'out', dateActivity: 'water gun fight at piedra'},
    {dateType: 'out', dateActivity: 'bumper cart'},
    {dateType: 'out', dateActivity: 'day trip'},
    {dateType: 'out', dateActivity: 'shooting range'},
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

shuffle(potentialDates);

const inFilter = (element) => {
	return element.dateType === "in";
};

const outFilter = (element) => {
	return element.dateType === "out";
};

const outs = potentialDates.filter(outFilter);

const ins = potentialDates.filter(inFilter);