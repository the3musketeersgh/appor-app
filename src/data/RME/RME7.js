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
    question: "What are the two main types of family systems in Ghana?",
    answers: [
      "Nuclear and Blended",
      "Nuclear and Extended",
      "Extended and Joint",
      "Traditional and Modern",
    ],
    correctAnswer: "Nuclear and Extended",
  },
  {
    question: "Who typically makes up a nuclear family?",
    answers: [
      "Only grandparents and grandchildren",
      "A father, mother, and children (if any)",
      "Aunts, uncles, and cousins",
      "Distant relatives and family friends",
    ],
    correctAnswer: "A father, mother, and children (if any)",
  },
  {
    question: "What is a common characteristic of an extended family?",
    answers: [
      "Members include only the parents and children",
      "It consists of all relatives from both paternal and maternal sides",
      "It excludes relatives from the maternal side",
      "Only one parent is present with the children",
    ],
    correctAnswer:
      "It consists of all relatives from both paternal and maternal sides",
  },
  {
    question: "What is one advantage of the nuclear family system?",
    answers: [
      "Higher economic support",
      "Effective supervision of family members",
      "More privacy",
      "Encourages dependency",
    ],
    correctAnswer: "Effective supervision of family members",
  },
  {
    question: "What is a disadvantage of the nuclear family system?",
    answers: [
      "Inadequate support if parents are absent",
      "Lack of unity among members",
      "Too many family members to supervise",
      "Difficulty in decision-making",
    ],
    correctAnswer: "Inadequate support if parents are absent",
  },
  {
    question: "Which of these is a benefit of the extended family system?",
    answers: [
      "Better security and protection",
      "Increased independence",
      "Smaller family size",
      "Lack of privacy",
    ],
    correctAnswer: "Better security and protection",
  },
  {
    question: "What is a drawback of the extended family system?",
    answers: [
      "Encourages laziness",
      "Increased privacy",
      "Reduced family size",
      "Minimal support system",
    ],
    correctAnswer: "Encourages laziness",
  },
  {
    question:
      "Who is usually responsible for providing basic needs in a family?",
    answers: ["Children", "Grandparents", "Parents", "Neighbors"],
    correctAnswer: "Parents",
  },
  {
    question: "What role do grandparents often play in the family?",
    answers: [
      "Running errands",
      "Providing basic needs",
      "Advisory role and character formation",
      "Enforcing discipline",
    ],
    correctAnswer: "Advisory role and character formation",
  },
  {
    question: "What is one typical role of children in a family?",
    answers: [
      "Managing family finances",
      "Providing shelter",
      "Running errands and household chores",
      "Organizing family events",
    ],
    correctAnswer: "Running errands and household chores",
  },
  {
    question: "What is an important skill in understanding family discussions?",
    answers: [
      "Memorizing all details",
      "Identifying themes and issues",
      "Ignoring different perspectives",
      "Only focusing on economic support",
    ],
    correctAnswer: "Identifying themes and issues",
  },
  {
    question: "What is the significance of appreciating different cultures?",
    answers: [
      "It promotes unity and respect",
      "It discourages teamwork",
      "It leads to forgetting one’s own culture",
      "It promotes stereotypes",
    ],
    correctAnswer: "It promotes unity and respect",
  },
  {
    question: "Which skill is essential for group work?",
    answers: [
      "Being highly critical of others’ ideas",
      "Working independently at all times",
      "Demonstrating cooperation and helping achieve group goals",
      "Ignoring others' suggestions",
    ],
    correctAnswer: "Demonstrating cooperation and helping achieve group goals",
  },
  {
    question: "How does globalization affect cultural traditions?",
    answers: [
      "It strengthens local languages exclusively",
      "It has no impact on traditions",
      "It can influence changes in cultural practices",
      "It reduces technological advancement",
    ],
    correctAnswer: "It can influence changes in cultural practices",
  },
  {
    question: "What is a typical merit of the nuclear family system?",
    answers: [
      "More familial privacy",
      "Wider support system",
      "Decreased independence",
      "Increased family members",
    ],
    correctAnswer: "More familial privacy",
  },
  {
    question:
      "What is an important alternative when dealing with family issues?",
    answers: [
      "Seeking guidance from community",
      "Ignoring the issue",
      "Relying only on immediate family",
      "Leaving the decision to one person",
    ],
    correctAnswer: "Seeking guidance from community",
  },
  {
    question: "How does one demonstrate respect for cultural diversity?",
    answers: [
      "By adopting only modern practices",
      "By learning and appreciating other cultures",
      "By avoiding other cultures",
      "By encouraging stereotypes",
    ],
    correctAnswer: "By learning and appreciating other cultures",
  },
  {
    question: "What is one role of parents in a family?",
    answers: [
      "Providing entertainment",
      "Offering moral guidance",
      "Handling only financial matters",
      "Assisting only the children",
    ],
    correctAnswer: "Offering moral guidance",
  },
  {
    question: "Why is critical listening important in family discussions?",
    answers: [
      "It allows you to ignore certain views",
      "It helps to understand different perspectives",
      "It encourages only your viewpoint",
      "It is only useful in large families",
    ],
    correctAnswer: "It helps to understand different perspectives",
  },
  {
    question: "What is an example of an extended family?",
    answers: [
      "A family of two parents and their children",
      "A group of unrelated individuals",
      "A household that includes grandparents, uncles, and aunts",
      "A single-parent household",
    ],
    correctAnswer: "A household that includes grandparents, uncles, and aunts",
  },
  {
    question: "What does the term 'cultural identity' refer to?",
    answers: [
      "Ignoring one’s background",
      "The sense of belonging to one’s culture",
      "Only modern beliefs",
      "Disregarding cultural norms",
    ],
    correctAnswer: "The sense of belonging to one’s culture",
  },
  {
    question: "Which is a common merit of the extended family system?",
    answers: [
      "Reduced dependency",
      "Strong economic support from relatives",
      "Increased family size",
      "Limited social interactions",
    ],
    correctAnswer: "Strong economic support from relatives",
  },
  {
    question: "What is one cultural practice that globalization might affect?",
    answers: [
      "Technology advancements",
      "Family gatherings",
      "Traditional attire and language",
      "Workplace dynamics",
    ],
    correctAnswer: "Traditional attire and language",
  },
  {
    question: "How do family members influence character formation?",
    answers: [
      "Through enforcing only rules",
      "Through negative reinforcement",
      "Through guidance and support",
      "Through criticism",
    ],
    correctAnswer: "Through guidance and support",
  },
  {
    question: "What is one challenge of the nuclear family system?",
    answers: [
      "More complex decision-making",
      "High dependence on limited members",
      "Overwhelming economic resources",
      "Reduced sense of independence",
    ],
    correctAnswer: "High dependence on limited members",
  },
  {
    question: "What role do children play in family support?",
    answers: [
      "Providing financial support",
      "Offering advice on family management",
      "Running errands and household chores",
      "Supporting grandparents only",
    ],
    correctAnswer: "Running errands and household chores",
  },
  {
    question: "What is one disadvantage of the extended family system?",
    answers: [
      "Too much privacy",
      "Reduced support",
      "Lack of personal privacy",
      "Too many financial resources",
    ],
    correctAnswer: "Lack of personal privacy",
  },
  {
    question: "What is the benefit of understanding different viewpoints?",
    answers: [
      "It creates conflict",
      "It helps one make balanced judgments",
      "It discourages team cohesion",
      "It leads to cultural loss",
    ],
    correctAnswer: "It helps one make balanced judgments",
  },
  {
    question: "Which family system typically has fewer members?",
    answers: [
      "Nuclear family",
      "Extended family",
      "Traditional family",
      "Joint family",
    ],
    correctAnswer: "Nuclear family",
  },
];

export default questionsData;
