// add solution here
function theBeatlesPlay(musicians, instruments) {
  var allMusicians = []

  for (var i = 0; i < musicians.length ; i++){
  allMusicians.push(musicians[i] + " plays " + instruments[i])
  }
  return allMusicians;
}

function johnLennonFacts() {
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var fanFacts = [];
  var i = 0
  while (i < facts.length) {
    fanFacts.push(facts[i] + "!!!");
    i++;
  }
  return fanFacts;
}

function iLoveTheBeatles(number) {
  var love = [];
  do {
    love.push("I love the Beatles!");
    number++
  } while (number < 15);

return love;
}
