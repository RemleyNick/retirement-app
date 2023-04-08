// Form elements
const form = document.querySelector('form');
const currentAgeInput = document.getElementById('current-age');
const retirementAgeInput = document.getElementById('retirement-age');
const retirementIncomeInput = document.getElementById('retirement-income');
const monthlySavingsResult = document.getElementById('monthly-savings');

// Form submission
form.addEventListener('submit', calculateSavings);

// Calculate monthly savings needed for retirement
function calculateSavings(event) {
  event.preventDefault();

  const currentAge = parseInt(currentAgeInput.value);
  const retirementAge = parseInt(retirementAgeInput.value);
  const retirementIncome = parseInt(retirementIncomeInput.value);

  const yearsToRetirement = retirementAge - currentAge;
  const monthsToRetirement = yearsToRetirement * 12;
  const monthlySavingsNeeded = retirementIncome / monthsToRetirement;

  // Display result
  monthlySavingsResult.textContent = `$${monthlySavingsNeeded.toFixed(2)}`;
}
