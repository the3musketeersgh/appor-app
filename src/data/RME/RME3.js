const questionsData = [
  {
    question:
      "Which attribute refers to God's eternal nature in the indigenous Akan religion?",
    answers: ["Amosu", "Tetekwaframoa", "Otumfour", "Mawu"],
    correctAnswer: "Tetekwaframoa",
  },
  {
    question: "In Christianity, which term refers to God as everlasting?",
    answers: ["Jehovah-Jireh", "Alpha and Omega", "El-Shaddai", "Al-Razak"],
    correctAnswer: "Alpha and Omega",
  },
  {
    question:
      "What attribute in Islam refers to God as 'the beginning and the end'?",
    answers: [
      "Al-Razak",
      "Azza wa Jalla",
      "Al-Awwalu wal A’khirun",
      "El-Shaddai",
    ],
    correctAnswer: "Al-Awwalu wal A’khirun",
  },
  {
    question: "The attribute 'Omnipotent' means:",
    answers: ["All-loving", "All-knowing", "All-powerful", "Eternal"],
    correctAnswer: "All-powerful",
  },
  {
    question:
      "Which of the following terms in the indigenous Akan religion reflects God's omnipotence?",
    answers: ["Amosu", "Otumfour", "Alpha and Omega", "Jehovah-Jireh"],
    correctAnswer: "Otumfour",
  },
  {
    question: "In Christianity, which attribute represents God as 'Almighty'?",
    answers: [
      "Alpha and Omega",
      "Jehovah-Jireh",
      "El-Shaddai",
      "Tetekwaframoa",
    ],
    correctAnswer: "El-Shaddai",
  },
  {
    question:
      "The term 'Azza wa Jalla' in Islam reflects God's attribute of being:",
    answers: ["The Provider", "Everlasting", "Almighty", "Giver of sunlight"],
    correctAnswer: "Almighty",
  },
  {
    question:
      "Which of the following terms represents God as the provider in Christianity?",
    answers: ["Alpha and Omega", "Jehovah-Jireh", "El-Shaddai", "Otumfour"],
    correctAnswer: "Jehovah-Jireh",
  },
  {
    question: "In Islam, God as 'the Provider' is referred to as:",
    answers: ["Al-Awwalu wal A’khirun", "Azza wa Jalla", "Al-Razak", "Amowia"],
    correctAnswer: "Al-Razak",
  },
  {
    question: "The Akan term 'Amosu' refers to God as:",
    answers: ["Giver of rain", "Eternal", "Almighty", "The Creator"],
    correctAnswer: "Giver of rain",
  },
  {
    question: "In the indigenous Akan religion, 'Amowia' means:",
    answers: ["Provider", "Giver of sunlight", "Creator", "Almighty"],
    correctAnswer: "Giver of sunlight",
  },
  {
    question:
      "Which of these is a shared attribute of God in all three major religions in Ghana?",
    answers: [
      "God as everlasting",
      "God as only present in certain places",
      "God with limited power",
      "God with different names for each religion",
    ],
    correctAnswer: "God as everlasting",
  },
  {
    question:
      "Which attribute of God reflects His power to create and control everything?",
    answers: ["Mercy", "Omnipotent", "Kindness", "Omniscient"],
    correctAnswer: "Omnipotent",
  },
  {
    question:
      "Which term describes God's role as 'sustainer of all creation' in Islam?",
    answers: [
      "Al-Awwalu wal A’khirun",
      "Azza wa Jalla",
      "Al-Razak",
      "Otumfour",
    ],
    correctAnswer: "Al-Razak",
  },
  {
    question:
      "What does the attribute 'Jehovah-Jireh' signify in Christianity?",
    answers: ["Giver of sunlight", "Almighty", "The Provider", "Everlasting"],
    correctAnswer: "The Provider",
  },
  {
    question: "What skill is needed to work towards group goals effectively?",
    answers: [
      "Dominating the conversation",
      "Ignoring others' opinions",
      "Collaboration",
      "Working alone",
    ],
    correctAnswer: "Collaboration",
  },
  {
    question:
      "Helping a group work on relevant activities is an example of which skill?",
    answers: ["Teamwork", "Independence", "Leadership", "Individualism"],
    correctAnswer: "Teamwork",
  },
  {
    question:
      "When God is described as the 'beginner and the end' in Islam, it refers to His:",
    answers: ["Omnipresence", "Omniscience", "Eternal nature", "Forgiveness"],
    correctAnswer: "Eternal nature",
  },
  {
    question:
      "Which attribute of God reflects that He provides all that His creations need?",
    answers: ["Omnipresent", "Provider", "Omniscient", "Merciful"],
    correctAnswer: "Provider",
  },
  {
    question:
      "To show respect for the similarities in the attributes of God across religions, we should:",
    answers: [
      "Focus only on differences",
      "Respect each religion's unique terms",
      "Ignore all differences",
      "Avoid discussing religion",
    ],
    correctAnswer: "Respect each religion's unique terms",
  },
  {
    question:
      "Which term in indigenous Akan religion represents God as 'the ancient of days'?",
    answers: ["Otumfour", "Amosu", "Tetekwaframoa", "Jehovah-Jireh"],
    correctAnswer: "Tetekwaframoa",
  },
  {
    question: "The term 'Mawu' in the indigenous Ewe religion signifies:",
    answers: [
      "God as Almighty",
      "Giver of sunlight",
      "Eternal nature",
      "Provider",
    ],
    correctAnswer: "God as Almighty",
  },
  {
    question: "What does the attribute 'Alpha and Omega' in Christianity mean?",
    answers: [
      "God as all-knowing",
      "The beginning and the end",
      "All-present",
      "The giver of life",
    ],
    correctAnswer: "The beginning and the end",
  },
  {
    question:
      "Which of the following reflects God’s everlasting nature in Christianity?",
    answers: ["Alpha and Omega", "Jehovah-Jireh", "El-Shaddai", "Amowia"],
    correctAnswer: "Alpha and Omega",
  },
  {
    question:
      "The attribute of God as omnipotent in indigenous Akan religion is known as:",
    answers: ["Tetekwaframoa", "Otumfour", "Mawu", "Amosu"],
    correctAnswer: "Otumfour",
  },
  {
    question: "In Islam, God as the beginning and the end is referred to as:",
    answers: [
      "Al-Razak",
      "El-Shaddai",
      "Azza wa Jalla",
      "Al-Awwalu wal A’khirun",
    ],
    correctAnswer: "Al-Awwalu wal A’khirun",
  },
  {
    question: "In teamwork, demonstrating good group behavior includes:",
    answers: [
      "Taking over all tasks",
      "Sharing ideas equally",
      "Ignoring others",
      "Focusing on individual goals",
    ],
    correctAnswer: "Sharing ideas equally",
  },
  {
    question:
      "One way to understand the nature of God across religions is to recognize:",
    answers: [
      "Only the differences",
      "The shared attributes of God",
      "The supremacy of one view",
      "Only individual beliefs",
    ],
    correctAnswer: "The shared attributes of God",
  },
  {
    question:
      "To respect the attribute of God as 'the Provider' across religions, we should:",
    answers: [
      "Use the same name for God",
      "Acknowledge each religion’s unique term",
      "Ignore differences in language",
      "Believe only in one view",
    ],
    correctAnswer: "Acknowledge each religion’s unique term",
  },
  {
    question: "When we say God is omnipotent, it means He:",
    answers: [
      "Knows everything",
      "Is everywhere at all times",
      "Has unlimited power",
      "Is forgiving",
    ],
    correctAnswer: "Has unlimited power",
  },
  {
    question: "What quality is needed to work effectively toward group goals?",
    answers: ["Patience", "Dominance", "Isolation", "Individualism"],
    correctAnswer: "Patience",
  },
];

export default questionsData;
