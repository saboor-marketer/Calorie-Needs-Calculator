# 🔥 Calorie Needs Calculator

A web application that calculates your estimated daily calorie needs based on personal information and activity level using the Mifflin-St Jeor Equation.

## 🛠️ Tech Stack

- **HTML5** - Structure
- **CSS3** - Styling with custom gradient design
- **JavaScript (ES6)** - Calculations and interactivity
- **Bootstrap 5** - Responsive UI framework

## ✨ Features

- ✅ Select Gender (Male/Female)
- ✅ Enter Age
- ✅ Enter Height (cm)
- ✅ Enter Weight (kg)
- ✅ Choose Activity Level
- ✅ Calculate Basal Metabolic Rate (BMR)
- ✅ Display Total Daily Energy Expenditure (TDEE)
- ✅ Show calorie recommendations for:
  - Weight Loss (-500 kcal/day)
  - Weight Maintenance
  - Weight Gain (+500 kcal/day)
- ✅ Input Validation
- ✅ Reset Button
- ✅ Responsive Design (mobile-friendly)

## 📊 Activity Levels

| Activity Level | Multiplier | Description |
|----------------|------------|-------------|
| Sedentary | 1.2 | Little or no exercise |
| Lightly Active | 1.375 | Light exercise 1-3 days/week |
| Moderately Active | 1.55 | Moderate exercise 3-5 days/week |
| Very Active | 1.725 | Hard exercise 6-7 days/week |
| Extra Active | 1.9 | Very hard exercise & physical job |

## 🧮 Formulas

### Male BMR
```
BMR = (10 × weight) + (6.25 × height) - (5 × age) + 5
```

### Female BMR
```
BMR = (10 × weight) + (6.25 × height) - (5 × age) - 161
```

### Daily Calories (TDEE)
```
TDEE = BMR × Activity Multiplier
```

## 🚀 How to Use

1. Open `index.html` in a web browser
2. Select your gender
3. Enter your age, height (cm), and weight (kg)
4. Choose your activity level
5. Click "Calculate Calories"
6. View your personalized results

## 📋 Example

**Input:**
- Gender: Male
- Age: 24
- Height: 175 cm
- Weight: 70 kg
- Activity: Moderately Active

**Output:**
- BMR: 1,674 kcal/day
- Maintenance: 2,594 kcal/day
- Weight Loss: 2,094 kcal/day
- Weight Gain: 3,094 kcal/day

## 📁 Project Structure

```
Calorie Needs Calculator/
├── index.html      # Main HTML file
├── styles.css      # Custom styling
├── script.js       # JavaScript logic
└── README.md       # Project documentation
```

## 🎯 JavaScript Concepts Used

- Form handling
- Event listeners
- Conditional statements
- Mathematical calculations
- DOM manipulation
- Number formatting with `toLocaleString()`
- Input validation

## 🎨 UI Features

- Modern gradient background (purple theme)
- Card-based layout
- Color-coded results:
  - **Purple** - BMR
  - **Green** - Maintenance
  - **Yellow** - Weight Loss
  - **Red** - Weight Gain
- Hover animations
- Responsive design for all screen sizes

## 📝 Notes

- The Mifflin-St Jeor Equation is considered one of the most accurate BMR calculation methods
- Results are estimates and should be used as a general guide
- Consult a healthcare professional for personalized nutrition advice
- Weight loss/gain recommendations use a standard 500 kcal/day adjustment

## 🔧 Browser Compatibility

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge
- Opera

## 📄 License

This project is open source and available for educational purposes.
