const questionsData = [
  {
    question: "What is the concept of family in society?",
    answers: [
      "A social unit bound by wealth and power",
      "A social unit whose members are bound by blood ties, marriage, or covenant",
      "A community of friends living together",
      "A group that lives independently",
    ],
    correctAnswer:
      "A social unit whose members are bound by blood ties, marriage, or covenant",
  },
  {
    question: "Which family system includes only parents and their children?",
    answers: [
      "Nuclear family",
      "Extended family",
      "Traditional family",
      "Community family",
    ],
    correctAnswer: "Nuclear family",
  },
  {
    question:
      "Which type of family includes relatives from both paternal and maternal sides?",
    answers: [
      "Extended family",
      "Nuclear family",
      "Traditional family",
      "Modern family",
    ],
    correctAnswer: "Extended family",
  },
  {
    question: "One merit of the nuclear family system is:",
    answers: [
      "Effective supervision",
      "Economic assistance",
      "Moral guidance",
      "Security of family members",
    ],
    correctAnswer: "Effective supervision",
  },
  {
    question: "A disadvantage of the nuclear family system is:",
    answers: [
      "Lack of support in the absence of parents",
      "Too many family members",
      "Privacy issues",
      "Difficulty in bonding",
    ],
    correctAnswer: "Lack of support in the absence of parents",
  },
  {
    question:
      "Which of the following is a merit of the extended family system?",
    answers: [
      "Family support in terms of economic assistance",
      "Limited family members",
      "Increased privacy",
      "Ease of supervision",
    ],
    correctAnswer: "Family support in terms of economic assistance",
  },
  {
    question: "A demerit of the extended family system is:",
    answers: [
      "Encourages laziness",
      "Lack of family support",
      "Difficulty in supervision",
      "Inadequate bonding",
    ],
    correctAnswer: "Encourages laziness",
  },
  {
    question: "What trait promotes good relationships in families?",
    answers: ["Patience", "Argumentative behavior", "Indifference", "Secrecy"],
    correctAnswer: "Patience",
  },
  {
    question:
      "Why is it important to maintain good relationships in the family?",
    answers: [
      "For peaceful co-existence and unity",
      "To reduce family members",
      "To allow strict rules",
      "For competition among members",
    ],
    correctAnswer: "For peaceful co-existence and unity",
  },
  {
    question: "One role of children in the family is to:",
    answers: [
      "Run errands",
      "Provide shelter",
      "Make rules",
      "Offer financial support",
    ],
    correctAnswer: "Run errands",
  },
  {
    question:
      "Which family member often provides basic needs like food and shelter?",
    answers: ["Parents", "Grandparents", "Children", "Relatives"],
    correctAnswer: "Parents",
  },
  {
    question: "Which family member traditionally plays an advisory role?",
    answers: ["Grandparents", "Parents", "Uncles", "Aunts"],
    correctAnswer: "Grandparents",
  },
  {
    question: "The family helps promote unity by:",
    answers: [
      "Resolving conflicts peacefully",
      "Increasing family size",
      "Reducing the number of responsibilities",
      "Limiting interaction with others",
    ],
    correctAnswer: "Resolving conflicts peacefully",
  },
  {
    question: "Self-examination in family conflicts helps to:",
    answers: [
      "Avoid false accusations",
      "Encourage blame",
      "Involve third parties",
      "Create more conflicts",
    ],
    correctAnswer: "Avoid false accusations",
  },
  {
    question: "What is a major factor in creating a harmonious family?",
    answers: ["Respect", "Disobedience", "Secrecy", "Competition"],
    correctAnswer: "Respect",
  },
  {
    question: "Tolerance in a family helps to:",
    answers: [
      "Reduce conflicts",
      "Create arguments",
      "Discourage unity",
      "Increase family members",
    ],
    correctAnswer: "Reduce conflicts",
  },
  {
    question: "Forgiveness in a family contributes to:",
    answers: [
      "Peaceful co-existence",
      "Family separation",
      "Increased conflicts",
      "Reduced bonding",
    ],
    correctAnswer: "Peaceful co-existence",
  },
  {
    question: "Which of these is a key trait in cultural appreciation?",
    answers: ["Respect", "Ridicule", "Indifference", "Neglect"],
    correctAnswer: "Respect",
  },
  {
    question: "One role of religious leaders is to:",
    answers: [
      "Provide moral guidance",
      "Disrupt family traditions",
      "Promote competition",
      "Discourage cultural practices",
    ],
    correctAnswer: "Provide moral guidance",
  },
  {
    question: "Who is a notable figure in Ghanaian indigenous religion?",
    answers: ["Okomfo Anokye", "Martin Luther", "Moses", "Socrates"],
    correctAnswer: "Okomfo Anokye",
  },
  {
    question: "The birth and early life of a religious leader often convey:",
    answers: [
      "Moral lessons",
      "Family disputes",
      "Economic issues",
      "Political goals",
    ],
    correctAnswer: "Moral lessons",
  },
  {
    question: "The birth of Prophet Muhammad took place in:",
    answers: ["Makkah", "Medina", "Jerusalem", "Bethlehem"],
    correctAnswer: "Makkah",
  },
  {
    question: "Jesus Christ's call to ministry began with his:",
    answers: ["Baptism", "Crucifixion", "Birth", "Miracles"],
    correctAnswer: "Baptism",
  },
  {
    question: "The call to prophethood for Muhammad (SAW) was followed by:",
    answers: [
      "Migration to Madinah",
      "Travel to Jerusalem",
      "Birth of his son",
      "Marriage",
    ],
    correctAnswer: "Migration to Madinah",
  },
  {
    question: "A key value taught by many religious leaders is:",
    answers: ["Forgiveness", "Greed", "Dishonesty", "Hatred"],
    correctAnswer: "Forgiveness",
  },
  {
    question: "Accountability in family relationships builds:",
    answers: ["Trust", "Mistrust", "Confusion", "Indifference"],
    correctAnswer: "Trust",
  },
  {
    question: "Which of the following promotes family unity?",
    answers: [
      "Open communication",
      "Keeping secrets",
      "Avoiding discussions",
      "Creating divisions",
    ],
    correctAnswer: "Open communication",
  },
  {
    question: "In which family system is privacy more likely to be limited?",
    answers: [
      "Extended family",
      "Nuclear family",
      "Single-parent family",
      "Childless family",
    ],
    correctAnswer: "Extended family",
  },
  {
    question: "What can lead to conflicts in a family?",
    answers: [
      "Lack of communication",
      "Frequent family meetings",
      "Shared responsibilities",
      "Mutual respect",
    ],
    correctAnswer: "Lack of communication",
  },
  {
    question:
      "What is an example of a traditional family role for grandparents?",
    answers: [
      "Providing economic support",
      "Running errands for children",
      "Playing an advisory role",
      "Maintaining the household",
    ],
    correctAnswer: "Playing an advisory role",
  },
  {
    question: "Which quality is essential for resolving family conflicts?",
    answers: ["Empathy", "Anger", "Indifference", "Defensiveness"],
    correctAnswer: "Empathy",
  },
  {
    question: "What is the role of cultural values in family systems?",
    answers: [
      "They create divisions among family members",
      "They guide behaviors and interactions within families",
      "They are irrelevant to family life",
      "They only affect extended families",
    ],
    correctAnswer: "They guide behaviors and interactions within families",
  },
];

export default questionsData;
