// Get form elements
const form = document.getElementById('calorieForm');
const resetBtn = document.getElementById('resetBtn');
const resultsSection = document.getElementById('results');

// Get result display elements
const bmrValue = document.getElementById('bmrValue');
const maintenanceValue = document.getElementById('maintenanceValue');
const lossValue = document.getElementById('lossValue');
const gainValue = document.getElementById('gainValue');

// Form submission handler
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get input values
    const gender = document.getElementById('gender').value;
    const age = parseFloat(document.getElementById('age').value);
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const activity = parseFloat(document.getElementById('activity').value);
    
    // Validate inputs
    if (!validateInputs(gender, age, height, weight, activity)) {
        return;
    }
    
    // Calculate BMR using Mifflin-St Jeor Equation
    const bmr = calculateBMR(gender, weight, height, age);
    
    // Calculate TDEE (Total Daily Energy Expenditure)
    const tdee = calculateTDEE(bmr, activity);
    
    // Calculate calorie recommendations
    const weightLoss = tdee - 500;
    const weightGain = tdee + 500;
    
    // Display results
    displayResults(bmr, tdee, weightLoss, weightGain);
});

// Reset button handler
resetBtn.addEventListener('click', function() {
    form.reset();
    resultsSection.classList.remove('show');
    clearResults();
});

// Calculate BMR using Mifflin-St Jeor Equation
function calculateBMR(gender, weight, height, age) {
    let bmr;
    
    if (gender === 'male') {
        // Male BMR: (10 × weight) + (6.25 × height) - (5 × age) + 5
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        // Female BMR: (10 × weight) + (6.25 × height) - (5 × age) - 161
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
    
    return bmr;
}

// Calculate TDEE (Total Daily Energy Expenditure)
function calculateTDEE(bmr, activityMultiplier) {
    return bmr * activityMultiplier;
}

// Validate input values
function validateInputs(gender, age, height, weight, activity) {
    if (!gender) {
        alert('Please select a gender.');
        return false;
    }
    
    if (isNaN(age) || age < 1 || age > 120) {
        alert('Please enter a valid age between 1 and 120.');
        return false;
    }
    
    if (isNaN(height) || height < 50 || height > 300) {
        alert('Please enter a valid height between 50 and 300 cm.');
        return false;
    }
    
    if (isNaN(weight) || weight < 20 || weight > 300) {
        alert('Please enter a valid weight between 20 and 300 kg.');
        return false;
    }
    
    if (isNaN(activity)) {
        alert('Please select an activity level.');
        return false;
    }
    
    return true;
}

// Display results with formatted numbers
function displayResults(bmr, tdee, weightLoss, weightGain) {
    bmrValue.textContent = `${Math.round(bmr).toLocaleString()} kcal/day`;
    maintenanceValue.textContent = `${Math.round(tdee).toLocaleString()} kcal/day`;
    lossValue.textContent = `${Math.round(weightLoss).toLocaleString()} kcal/day`;
    gainValue.textContent = `${Math.round(weightGain).toLocaleString()} kcal/day`;
    
    resultsSection.classList.add('show');
}

// Clear result displays
function clearResults() {
    bmrValue.textContent = '-- kcal/day';
    maintenanceValue.textContent = '-- kcal/day';
    lossValue.textContent = '-- kcal/day';
    gainValue.textContent = '-- kcal/day';
}
