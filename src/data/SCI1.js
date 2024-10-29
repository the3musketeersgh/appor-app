const questionsData = [
  {
    question: "What is a binary compound?",
    answers: [
      "A compound with only one element",
      "A compound with two elements",
      "A compound with multiple elements",
      "A compound that is liquid at room temperature",
    ],
    correctAnswer: "A compound with two elements",
  },
  {
    question: "Which of these is an example of a binary compound?",
    answers: ["Water (H2O)", "Glucose (C6H12O6)", "Carbon", "Gold"],
    correctAnswer: "Water (H2O)",
  },
  {
    question: "What is the chemical formula for table salt?",
    answers: ["NaCl", "H2O", "CO2", "CaCO3"],
    correctAnswer: "NaCl",
  },
  {
    question: "Which binary compound is commonly used as a preservative?",
    answers: ["Sodium Chloride", "Glucose", "Calcium Carbonate", "Ethanol"],
    correctAnswer: "Sodium Chloride",
  },
  {
    question: "Which of these compounds is used to clean surfaces?",
    answers: ["Vinegar", "Sand", "Sugar", "Oxygen"],
    correctAnswer: "Vinegar",
  },
  {
    question: "What is the chemical formula for vinegar?",
    answers: ["CH3COOH", "H2O", "NaCl", "CO2"],
    correctAnswer: "CH3COOH",
  },
  {
    question: "What is the chemical symbol for water?",
    answers: ["O", "H2O", "HO2", "H"],
    correctAnswer: "H2O",
  },
  {
    question: "Which binary compound is found in fuel?",
    answers: ["Methane", "Salt", "Sand", "Iron"],
    correctAnswer: "Methane",
  },
  {
    question: "Which of these is an acid?",
    answers: ["Vinegar", "Soap", "Salt", "Baking soda"],
    correctAnswer: "Vinegar",
  },
  {
    question: "What is a common base found in soap?",
    answers: ["Sodium Hydroxide", "Sulfuric Acid", "Magnesium Oxide", "Water"],
    correctAnswer: "Sodium Hydroxide",
  },
  {
    question: "Which of these is a characteristic of acids?",
    answers: ["Sour taste", "Slippery feel", "Sweet taste", "Neutral smell"],
    correctAnswer: "Sour taste",
  },
  {
    question: "What pH value indicates a strong acid?",
    answers: ["1", "7", "9", "14"],
    correctAnswer: "1",
  },
  {
    question: "Which indicator can show the pH of a solution?",
    answers: ["Litmus paper", "Salt", "Iron", "Copper"],
    correctAnswer: "Litmus paper",
  },
  {
    question: "What pH value is considered neutral?",
    answers: ["7", "1", "14", "3"],
    correctAnswer: "7",
  },
  {
    question: "Which compound can neutralize an acid?",
    answers: ["Base", "Salt", "Acid", "Sugar"],
    correctAnswer: "Base",
  },
  {
    question: "Which of these compounds is a base?",
    answers: ["Baking Soda", "Vinegar", "Water", "Salt"],
    correctAnswer: "Baking Soda",
  },
  {
    question: "Which of these is a characteristic of bases?",
    answers: ["Bitter taste", "Sour taste", "Sweet taste", "No taste"],
    correctAnswer: "Bitter taste",
  },
  {
    question: "What happens when an acid reacts with a base?",
    answers: [
      "It produces a salt and water",
      "It releases oxygen gas",
      "It produces heat and light",
      "It becomes neutral only",
    ],
    correctAnswer: "It produces a salt and water",
  },
  {
    question: "What pH value indicates a strong base?",
    answers: ["14", "7", "1", "5"],
    correctAnswer: "14",
  },
  {
    question: "Which of these is an example of a salt?",
    answers: ["Sodium Chloride", "Water", "Oxygen", "Glucose"],
    correctAnswer: "Sodium Chloride",
  },
  {
    question: "What type of compound is Magnesium Oxide (MgO)?",
    answers: [
      "Binary compound",
      "Tertiary compound",
      "Molecular compound",
      "Polymeric compound",
    ],
    correctAnswer: "Binary compound",
  },
  {
    question: "Which of these elements form a binary compound?",
    answers: [
      "Sodium and Chlorine",
      "Carbon and Hydrogen",
      "Sulfur and Oxygen",
      "All of the above",
    ],
    correctAnswer: "All of the above",
  },
  {
    question: "What element is represented by 'Na' in a compound?",
    answers: ["Sodium", "Nitrogen", "Neon", "Nickel"],
    correctAnswer: "Sodium",
  },
  {
    question: "Which of these is a binary acid?",
    answers: [
      "Hydrochloric Acid",
      "Sulfuric Acid",
      "Phosphoric Acid",
      "Carbonic Acid",
    ],
    correctAnswer: "Hydrochloric Acid",
  },
  {
    question: "Which of the following is a binary base?",
    answers: [
      "Sodium Hydroxide",
      "Ammonium Hydroxide",
      "Calcium Hydroxide",
      "Magnesium Hydroxide",
    ],
    correctAnswer: "Sodium Hydroxide",
  },
  {
    question: "What is a molecule?",
    answers: [
      "Two or more atoms bonded together",
      "A single atom",
      "A large compound",
      "A type of salt",
    ],
    correctAnswer: "Two or more atoms bonded together",
  },
  {
    question: "Which gas is released when an acid reacts with a metal?",
    answers: ["Hydrogen", "Oxygen", "Carbon Dioxide", "Nitrogen"],
    correctAnswer: "Hydrogen",
  },
  {
    question: "Which of the following is a weak acid?",
    answers: ["Vinegar", "Sulfuric acid", "Hydrochloric acid", "Nitric acid"],
    correctAnswer: "Vinegar",
  },
  {
    question: "Which of the following is a common binary salt?",
    answers: ["Table salt", "Baking soda", "Vinegar", "Iron"],
    correctAnswer: "Table salt",
  },
  {
    question: "What is the chemical formula for carbon dioxide?",
    answers: ["CO2", "H2O", "O2", "NaCl"],
    correctAnswer: "CO2",
  },
  {
    question: "What element does the symbol 'C' represent?",
    answers: ["Carbon", "Calcium", "Copper", "Chlorine"],
    correctAnswer: "Carbon",
  },
  {
    question: "Which of these is an example of a binary ionic compound?",
    answers: ["Sodium Chloride", "Water", "Glucose", "Ethanol"],
    correctAnswer: "Sodium Chloride",
  },
  {
    question: "Which compound has a pH below 7?",
    answers: ["Vinegar", "Baking soda", "Saltwater", "Distilled water"],
    correctAnswer: "Vinegar",
  },
  {
    question: "How many elements are in a binary compound?",
    answers: ["2", "1", "3", "4"],
    correctAnswer: "2",
  },
  {
    question: "What is the primary use of sodium bicarbonate?",
    answers: [
      "Baking and cooking",
      "Electrical insulation",
      "As a building material",
      "As a fuel",
    ],
    correctAnswer: "Baking and cooking",
  },
  {
    question: "What is the chemical formula for common salt?",
    answers: ["NaCl", "KCl", "H2O", "CO2"],
    correctAnswer: "NaCl",
  },
  {
    question: "Which of the following is a neutral substance?",
    answers: ["Pure water", "Vinegar", "Lemon juice", "Soap"],
    correctAnswer: "Pure water",
  },
];

export default questionsData;
