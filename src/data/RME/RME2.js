const questionsData = [
  {
    question:
      "Which of the following best describes the attribute of God as 'Omnipotent'?",
    answers: ["All-loving", "All-powerful", "All-present", "All-knowing"],
    correctAnswer: "All-powerful",
  },
  {
    question: "What does the attribute 'Omnipresent' mean?",
    answers: [
      "God is present everywhere",
      "God knows everything",
      "God has all power",
      "God is all-loving",
    ],
    correctAnswer: "God is present everywhere",
  },
  {
    question: "Which attribute of God refers to His unlimited knowledge?",
    answers: ["Omnipotent", "Omniscient", "Omnipresent", "Loving"],
    correctAnswer: "Omniscient",
  },
  {
    question: "In Akan, what attribute of God does 'Amowia' refer to?",
    answers: [
      "Giver of sunlight",
      "The creator of all",
      "Source of life",
      "Merciful",
    ],
    correctAnswer: "Giver of sunlight",
  },
  {
    question: "In Dagbani, the term 'Binnamdanaa' means:",
    answers: [
      "Source of life",
      "Merciful",
      "The creator of all creatures",
      "Patient",
    ],
    correctAnswer: "The creator of all creatures",
  },
  {
    question: "In Ewe, 'Mawu Kitikata' refers to which attribute of God?",
    answers: [
      "God of mercy",
      "God as the creator",
      "God as the source of life",
      "God of patience",
    ],
    correctAnswer: "God as the source of life",
  },
  {
    question:
      "Which of the following attributes of God reflects His ability to love unconditionally?",
    answers: ["Omnipotent", "Omnipresent", "Loving", "Patient"],
    correctAnswer: "Loving",
  },
  {
    question:
      "Which attribute of God can be seen in human actions when we show patience?",
    answers: ["Omnipresent", "Patient", "Loving", "Creator"],
    correctAnswer: "Patient",
  },
  {
    question: "What does it mean to respect and appreciate others' cultures?",
    answers: [
      "To learn only one's own culture",
      "To understand and value diverse customs",
      "To ignore others’ practices",
      "To only celebrate one’s culture",
    ],
    correctAnswer: "To understand and value diverse customs",
  },
  {
    question:
      "When a person is forgiving, they are reflecting which attribute of God?",
    answers: ["Omniscient", "Merciful", "Omnipotent", "All-loving"],
    correctAnswer: "Merciful",
  },
  {
    question: "One way to show love as an attribute of God is to:",
    answers: [
      "Ignore others",
      "Help those in need",
      "Think only about oneself",
      "Judge others harshly",
    ],
    correctAnswer: "Help those in need",
  },
  {
    question:
      "Which of these best describes the purpose of learning about God’s attributes?",
    answers: [
      "To criticize others’ beliefs",
      "To understand God’s nature and reflect it",
      "To make fun of other religions",
      "To debate with others",
    ],
    correctAnswer: "To understand God’s nature and reflect it",
  },
  {
    question: "To develop respect for one's own culture, a person should:",
    answers: [
      "Understand its values and practices",
      "Ignore it",
      "Only learn about other cultures",
      "Reject all customs",
    ],
    correctAnswer: "Understand its values and practices",
  },
  {
    question: "Ethical use of information means:",
    answers: [
      "Using information for personal gain",
      "Following laws and respecting privacy",
      "Ignoring sources",
      "Editing information without permission",
    ],
    correctAnswer: "Following laws and respecting privacy",
  },
  {
    question:
      "Which of these attributes of God is often reflected by people who forgive?",
    answers: ["Omniscient", "Merciful", "Omnipotent", "Loving"],
    correctAnswer: "Merciful",
  },
  {
    question: "When God is called 'the Creator,' it means:",
    answers: [
      "God made all things",
      "God is always present",
      "God knows all",
      "God is all-loving",
    ],
    correctAnswer: "God made all things",
  },
  {
    question: "Why should we follow behavior protocols in cyberspace?",
    answers: [
      "To ensure a safe online environment",
      "To be popular online",
      "To ignore others’ opinions",
      "To gain power",
    ],
    correctAnswer: "To ensure a safe online environment",
  },
  {
    question: "Showing kindness to others reflects which attribute of God?",
    answers: ["Omniscient", "Merciful", "Omnipotent", "Loving"],
    correctAnswer: "Loving",
  },
  {
    question: "Patience as an attribute of God is best reflected in:",
    answers: [
      "Being forgiving and tolerant",
      "Rushing decisions",
      "Judging others",
      "Always arguing",
    ],
    correctAnswer: "Being forgiving and tolerant",
  },
  {
    question: "Which of these actions shows appreciation for one’s culture?",
    answers: [
      "Learning traditional values",
      "Ignoring customs",
      "Making fun of beliefs",
      "Disrespecting rituals",
    ],
    correctAnswer: "Learning traditional values",
  },
  {
    question: "To 'demonstrate attributes of God in life' means to:",
    answers: [
      "Reflect God’s love and patience in our actions",
      "Ignore people",
      "Be selfish",
      "Only pray privately",
    ],
    correctAnswer: "Reflect God’s love and patience in our actions",
  },
  {
    question: "How can students work effectively toward group goals?",
    answers: [
      "By cooperating and communicating",
      "By doing all tasks individually",
      "By ignoring others' input",
      "By taking all credit for success",
    ],
    correctAnswer: "By cooperating and communicating",
  },
  {
    question: "Developing respect for others' culture involves:",
    answers: [
      "Learning about others' beliefs",
      "Rejecting their beliefs",
      "Criticizing others",
      "Only following one’s own culture",
    ],
    correctAnswer: "Learning about others' beliefs",
  },
  {
    question: "What does the attribute of 'love' encourage people to do?",
    answers: [
      "Avoid helping others",
      "Judge others",
      "Be kind and supportive",
      "Act selfishly",
    ],
    correctAnswer: "Be kind and supportive",
  },
  {
    question: "To show 'mercy' as God does, one should:",
    answers: [
      "Forgive those who hurt them",
      "Hold grudges",
      "Seek revenge",
      "Ignore forgiveness",
    ],
    correctAnswer: "Forgive those who hurt them",
  },
  {
    question: "The attribute of 'patience' in a person is seen when they:",
    answers: [
      "Get easily frustrated",
      "Listen calmly to others",
      "Interrupt others",
      "Rush decisions",
    ],
    correctAnswer: "Listen calmly to others",
  },
  {
    question: "An attribute of God that means ‘all-knowing’ is:",
    answers: ["Omnipotent", "Omniscient", "Loving", "Patient"],
    correctAnswer: "Omniscient",
  },
  {
    question: "Which of these is an ethical use of information?",
    answers: [
      "Using information responsibly",
      "Editing sources without permission",
      "Ignoring authorship",
      "Altering facts",
    ],
    correctAnswer: "Using information responsibly",
  },
  {
    question:
      "When we help others, we are demonstrating which attribute of God?",
    answers: ["Omnipotence", "Mercy", "Patience", "Love"],
    correctAnswer: "Love",
  },
  {
    question: "An example of patience as a divine attribute is:",
    answers: [
      "Waiting calmly for others",
      "Rushing decisions",
      "Interrupting others",
      "Losing temper",
    ],
    correctAnswer: "Waiting calmly for others",
  },
];

export default questionsData;
