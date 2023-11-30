// event listener
document.getElementById("button").addEventListener("click", function1);

// event function
function function1() {
  let pluralNoun = document.getElementById("I").value;
  let adjective = document.getElementById("II").value;
  let presentTenseVerb = document.getElementById("III").value;
  let noun = document.getElementById("IV").value;

  let results = `There are too many ${pluralNoun.toLowerCase()} on this ${adjective.toLowerCase()} airplane", I screamed. "Somebody has to ${presentTenseVerb.toLowerCase()} on the ${noun.toLowerCase()} to solve this problem!`;
  document.getElementById("results").innerHTML = results;
}
