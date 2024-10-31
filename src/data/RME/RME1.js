const questionsData = [
  {
    question: "Which of the following is NOT an attribute of God?",
    answers: ["Omnipotent", "Omnipresent", "Impatient", "Omniscient"],
    correctAnswer: "Impatient",
  },
  {
    question: "What does it mean to say that God is omnipotent?",
    answers: [
      "God knows everything",
      "God is all-powerful",
      "God is present everywhere",
      "God cannot make mistakes",
    ],
    correctAnswer: "God is all-powerful",
  },
  {
    question: "Which attribute of God suggests He is present everywhere?",
    answers: ["Omniscience", "Omnipotence", "Omnipresence", "Justice"],
    correctAnswer: "Omnipresence",
  },
  {
    question: "The belief that God is merciful means that He is…",
    answers: ["Unfair", "Loving and kind", "Fearful", "Far away"],
    correctAnswer: "Loving and kind",
  },
  {
    question: "Which of these attributes suggests that God knows everything?",
    answers: ["Omnipotent", "Omniscient", "Omnipresent", "Immutable"],
    correctAnswer: "Omniscient",
  },
  {
    question: "What does the term 'immutable' mean in reference to God?",
    answers: [
      "God is all-knowing",
      "God never changes",
      "God can make mistakes",
      "God is merciful",
    ],
    correctAnswer: "God never changes",
  },
  {
    question:
      "In most religions, which of these is considered a moral attribute of God?",
    answers: ["Wisdom", "Beauty", "Justice", "Height"],
    correctAnswer: "Justice",
  },
  {
    question: "Which of these statements is true about God’s love?",
    answers: [
      "It is only for some people",
      "It is temporary",
      "It is unconditional",
      "It depends on one's wealth",
    ],
    correctAnswer: "It is unconditional",
  },
  {
    question: "What does it mean to say that God is just?",
    answers: [
      "God is slow to act",
      "God treats everyone fairly",
      "God shows no mercy",
      "God is always angry",
    ],
    correctAnswer: "God treats everyone fairly",
  },
  {
    question: "The concept of God being eternal means that…",
    answers: [
      "God was created",
      "God has no beginning and no end",
      "God is very old",
      "God lives in heaven",
    ],
    correctAnswer: "God has no beginning and no end",
  },
  {
    question:
      "According to the Christian creation story, on which day did God create light?",
    answers: ["First day", "Second day", "Fourth day", "Sixth day"],
    correctAnswer: "First day",
  },
  {
    question:
      "In the Islamic creation story, who was the first human created by Allah?",
    answers: ["Abraham", "Muhammad", "Moses", "Adam"],
    correctAnswer: "Adam",
  },
  {
    question: "Which book in the Bible describes the creation of the world?",
    answers: ["Exodus", "Genesis", "Leviticus", "Matthew"],
    correctAnswer: "Genesis",
  },
  {
    question: "In traditional African beliefs, creation is often credited to…",
    answers: ["Ancestors", "Spirits", "A supreme God or Creator", "Priests"],
    correctAnswer: "A supreme God or Creator",
  },
  {
    question:
      "How many days did God take to create the world according to the Christian story?",
    answers: ["Five days", "Six days", "Seven days", "Eight days"],
    correctAnswer: "Six days",
  },
  {
    question:
      "In the Islamic tradition, which angel is said to have brought messages to prophets, including the creation message?",
    answers: ["Gabriel", "Michael", "Raphael", "Uriel"],
    correctAnswer: "Gabriel",
  },
  {
    question: "In Christianity, what did God create on the sixth day?",
    answers: ["Animals and humans", "The stars", "The oceans", "Light"],
    correctAnswer: "Animals and humans",
  },
  {
    question:
      "In the traditional African creation story, which is often emphasized?",
    answers: [
      "Harmony between humans and nature",
      "Individual wealth",
      "Political power",
      "Advanced technology",
    ],
    correctAnswer: "Harmony between humans and nature",
  },
  {
    question:
      "Which two major religions in Ghana share a similar creation story of a single God creating the universe?",
    answers: [
      "Christianity and Islam",
      "Islam and Traditional African Religion",
      "Christianity and Traditional African Religion",
      "None of the above",
    ],
    correctAnswer: "Christianity and Islam",
  },
  {
    question:
      "In the Islamic creation story, who tempted Adam and Eve in the Garden?",
    answers: ["An angel", "A serpent", "Shaytan (Satan)", "A spirit"],
    correctAnswer: "Shaytan (Satan)",
  },
  {
    question:
      "Which of these is a purpose of God’s creation according to religious beliefs?",
    answers: [
      "To provide resources for humans",
      "To make life difficult",
      "To create conflicts",
      "To limit human progress",
    ],
    correctAnswer: "To provide resources for humans",
  },
  {
    question: "Why is it important to care for the environment?",
    answers: [
      "To exploit resources",
      "To increase pollution",
      "To sustain life on Earth",
      "To make human life easier",
    ],
    correctAnswer: "To sustain life on Earth",
  },
  {
    question: "According to Christian belief, God made humans…",
    answers: [
      "To rule over each other",
      "To destroy the Earth",
      "As stewards of His creation",
      "To compete for resources",
    ],
    correctAnswer: "As stewards of His creation",
  },
  {
    question:
      "In many beliefs, trees and plants are considered useful because they…",
    answers: [
      "Absorb pollution",
      "Provide shelter",
      "Produce oxygen and food",
      "Only b and c",
    ],
    correctAnswer: "Only b and c",
  },
  {
    question: "What is one way humans harm God’s creation?",
    answers: [
      "By planting trees",
      "By recycling waste",
      "By polluting air and water",
      "By conserving energy",
    ],
    correctAnswer: "By polluting air and water",
  },
  {
    question:
      "Which of the following is NOT a reason to preserve God’s creation?",
    answers: [
      "To sustain biodiversity",
      "To maintain resources for future generations",
      "To improve human health",
      "To maximize waste production",
    ],
    correctAnswer: "To maximize waste production",
  },
  {
    question: "The use of renewable resources, such as solar energy, helps to…",
    answers: [
      "Deplete natural resources",
      "Reduce environmental impact",
      "Increase pollution",
      "Destroy wildlife",
    ],
    correctAnswer: "Reduce environmental impact",
  },
  {
    question: "In which way can students help protect the environment?",
    answers: [
      "By littering in their communities",
      "By conserving water and recycling",
      "By wasting food",
      "By increasing pollution",
    ],
    correctAnswer: "By conserving water and recycling",
  },
  {
    question: "What does it mean to be a steward of God’s creation?",
    answers: [
      "To use all resources freely",
      "To take care of and protect the environment",
      "To make use of only non-renewable resources",
      "To ignore environmental problems",
    ],
    correctAnswer: "To take care of and protect the environment",
  },
  {
    question: "Which of these is a benefit of a clean environment?",
    answers: [
      "Increased illnesses",
      "Higher quality of life",
      "Higher pollution levels",
      "Reduced animal populations",
    ],
    correctAnswer: "Higher quality of life",
  },
];

export default questionsData;
