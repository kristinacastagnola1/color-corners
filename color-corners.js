function displayTabs() {

   let springChecked = document.getElementById('spring-checkbox').checked;
   let summerChecked = document.getElementById('summer-checkbox').checked;
   let autumnChecked = document.getElementById('autumn-checkbox').checked;
   let winterChecked = document.getElementById('winter-checkbox').checked;
   let springDisplay = document.getElementById('spring').style;
   let summerDisplay = document.getElementById('summer').style;
   let autumnDisplay = document.getElementById('autumn').style;
   let winterDisplay = document.getElementById('winter').style;

   if (springChecked === true) {
      springDisplay.display = 'inline';
   };
   if (springChecked === false) {
      springDisplay.display = 'none';
   };
   if (summerChecked === true) {
      summerDisplay.display = 'inline';
   };
   if (summerChecked === false) {
      summerDisplay.display = 'none';
   };
   if (autumnChecked === true) {
      autumnDisplay.display = 'inline';
   };
   if (autumnChecked === false) {
      autumnDisplay.display = 'none';
   };
   if (winterChecked === true) {
      winterDisplay.display = 'inline';
   };
   if (winterChecked === false) {
      winterDisplay.display = 'none';
   };
}

/* I want the function above to be shorter. The code below is getting there, but is still too vague to work.

let whateverCheckBox;
let matchingColorTab;

function displayTab(whateverCheckBox, matchingColorTab) {
   if (whateverCheckBox === true) {
      matchingColorTab.display = 'inline';
   } else (whateverCheckBox === false) {
      matchingColorTab.display = 'none';
   }
}

*/
