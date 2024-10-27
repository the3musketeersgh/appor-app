const questionsData = [
  {
    question:
      "What is the primary purpose of worship in all three major religions?",
    answers: [
      "Celebrating festivals",
      "Social gatherings",
      "Submission to the will of God",
      "Promoting cultural values",
    ],
    correctAnswer: "Submission to the will of God",
  },
  {
    question:
      "In Christianity, which of the following is a common mode of worship?",
    answers: ["Niyyat", "Ablution", "Meditation", "Incantations"],
    correctAnswer: "Meditation",
  },
  {
    question:
      "Which activity is NOT typically associated with Islamic worship?",
    answers: ["Singing", "Prayer", "Qur’anic recitation", "Ablution"],
    correctAnswer: "Singing",
  },
  {
    question: "What is the term for the intention behind prayers in Islam?",
    answers: ["Meditation", "Sadaqah", "Niyyat", "Genuflection"],
    correctAnswer: "Niyyat",
  },
  {
    question:
      "Which of the following activities is part of Indigenous African religious worship?",
    answers: ["Bible reading", "Prayer", "Sacrifice", "Sermon"],
    correctAnswer: "Sacrifice",
  },
  {
    question: "What moral lesson can be derived from worship?",
    answers: [
      "Encouragement of individualism",
      "Encouragement of discipline",
      "Promotion of social isolation",
      "Rejection of community values",
    ],
    correctAnswer: "Encouragement of discipline",
  },
  {
    question: "Which of these is a mode of worship in Christianity?",
    answers: ["Libation", "Sadaqah", "Communion", "Divination"],
    correctAnswer: "Communion",
  },
  {
    question: "What is the significance of the five pillars of Islam?",
    answers: [
      "They are guidelines for personal conduct",
      "They represent the core beliefs of Islam",
      "They are rituals for celebrations",
      "They are historical events",
    ],
    correctAnswer: "They represent the core beliefs of Islam",
  },
  {
    question: "What type of worship involves individual or family practices?",
    answers: [
      "Congregational worship",
      "Private worship",
      "Public worship",
      "Social worship",
    ],
    correctAnswer: "Private worship",
  },
  {
    question:
      "Which activity is commonly performed during worship in the Indigenous African religion?",
    answers: ["Baptism", "Singing and dancing", "Communion", "Prayer"],
    correctAnswer: "Singing and dancing",
  },
  {
    question:
      "What does the act of offering libation signify in Indigenous African religions?",
    answers: [
      "Unity with God",
      "A form of prayer",
      "Celebration of life",
      "Remembrance of ancestors",
    ],
    correctAnswer: "Remembrance of ancestors",
  },
  {
    question:
      "In Islamic worship, which of the following is performed before prayer?",
    answers: ["Sadaqah", "Ablution", "Sermon", "Meditation"],
    correctAnswer: "Ablution",
  },
  {
    question: "Which of the following is a moral lesson emphasized in worship?",
    answers: ["Selfishness", "Unity and togetherness", "Isolation", "Pride"],
    correctAnswer: "Unity and togetherness",
  },
  {
    question: "What type of worship includes communal activities?",
    answers: [
      "Private worship",
      "Individual worship",
      "Congregational worship",
      "Silent worship",
    ],
    correctAnswer: "Congregational worship",
  },
  {
    question: "What is the purpose of drumming in Indigenous African worship?",
    answers: [
      "To entertain",
      "To convey messages",
      "To gather people",
      "To induce spirit possession",
    ],
    correctAnswer: "To induce spirit possession",
  },
  {
    question:
      "Which of the following reflects the moral lesson of confidence gained from worship?",
    answers: [
      "Ignoring community problems",
      "Facing life's challenges",
      "Withdrawing from society",
      "Rejecting traditions",
    ],
    correctAnswer: "Facing life's challenges",
  },
  {
    question:
      "In Christianity, which of these is typically included in worship?",
    answers: ["Sermon", "Drumming", "Sacrifice", "Spirit possession"],
    correctAnswer: "Sermon",
  },
  {
    question:
      "The moral lesson of respect for others' cultures can be taught through:",
    answers: [
      "Ignoring differences",
      "Engaging in cultural exchange",
      "Promoting one's own culture exclusively",
      "Rejecting all traditions",
    ],
    correctAnswer: "Engaging in cultural exchange",
  },
  {
    question: "What is one of the core activities in Islamic worship?",
    answers: ["Singing", "Sermon", "Genuflection", "Meditation"],
    correctAnswer: "Genuflection",
  },
  {
    question: "What is the significance of prayers during worship?",
    answers: [
      "To request material possessions",
      "To express submission to God",
      "To gather social status",
      "To promote individualism",
    ],
    correctAnswer: "To express submission to God",
  },
  {
    question: "Which type of worship involves a community coming together?",
    answers: [
      "Private worship",
      "Social worship",
      "Congregational worship",
      "Silent worship",
    ],
    correctAnswer: "Congregational worship",
  },
  {
    question: "In worship, what does 'sadaqah' refer to?",
    answers: ["Prayers", "Charitable giving", "Rituals", "Sacrifices"],
    correctAnswer: "Charitable giving",
  },
  {
    question:
      "What role does singing play in worship across all three religions?",
    answers: [
      "It is a form of entertainment",
      "It serves as a form of prayer",
      "It is discouraged",
      "It is used only during celebrations",
    ],
    correctAnswer: "It serves as a form of prayer",
  },
  {
    question:
      "In which religion is the activity of 'offertory' common during worship?",
    answers: [
      "Indigenous African Religion",
      "Christianity",
      "Islam",
      "None of the above",
    ],
    correctAnswer: "Christianity",
  },
  {
    question:
      "Which of the following promotes the understanding of globalization's influence on culture?",
    answers: [
      "Ignoring global influences",
      "Promoting cultural isolation",
      "Understanding cultural exchange",
      "Rejecting all changes",
    ],
    correctAnswer: "Understanding cultural exchange",
  },
  {
    question:
      "The use of incantations during worship is primarily associated with:",
    answers: [
      "Christianity",
      "Islam",
      "Indigenous African Religion",
      "None of the above",
    ],
    correctAnswer: "Indigenous African Religion",
  },
  {
    question:
      "Which of the following best describes 'the moral lessons from worship'?",
    answers: [
      "They vary widely across religions",
      "They are generally consistent and promote positive values",
      "They are irrelevant in modern times",
      "They are only focused on rituals",
    ],
    correctAnswer: "They are generally consistent and promote positive values",
  },
  {
    question:
      "What is one way learners can demonstrate teamwork during worship activities?",
    answers: [
      "Working independently",
      "Ignoring others' contributions",
      "Engaging in group discussions",
      "Dominating conversations",
    ],
    correctAnswer: "Engaging in group discussions",
  },
  {
    question: "How can one apply the moral lessons from worship in daily life?",
    answers: [
      "By practicing individualism",
      "By promoting communal values",
      "By rejecting cultural norms",
      "By isolating oneself from others",
    ],
    correctAnswer: "By promoting communal values",
  },
];

export default questionsData;
