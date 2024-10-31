const questionsData = [
  {
    question: "Which of the following best defines prayer?",
    answers: [
      "Communication between worshippers and God",
      "Offering sacrifices to ancestors",
      "The act of praising only",
      "Meditation only",
    ],
    correctAnswer: "Communication between worshippers and God",
  },
  {
    question: "In Christianity, which of these is not a type of prayer?",
    answers: ["Thanksgiving", "Supplication", "Intercession", "Kusuf"],
    correctAnswer: "Kusuf",
  },
  {
    question: "What is the main purpose of thanksgiving prayers?",
    answers: [
      "To ask for help",
      "To confess sins",
      "To show gratitude",
      "To curse enemies",
    ],
    correctAnswer: "To show gratitude",
  },
  {
    question: "Which of these is a type of obligatory prayer in Islam?",
    answers: ["Kusuf", "Janazah", "Fajr", "Khusuf"],
    correctAnswer: "Fajr",
  },
  {
    question: "Which prayer in Islam is performed in Ramadan at night?",
    answers: ["Tarawih", "Eid-ul-Adha", "Kusuf", "Janazah"],
    correctAnswer: "Tarawih",
  },
  {
    question: "The Indigenous African Religion typically uses prayer to:",
    answers: [
      "Curse enemies",
      "Ask for forgiveness",
      "Give thanks and seek guidance",
      "Perform meditation",
    ],
    correctAnswer: "Give thanks and seek guidance",
  },
  {
    question: "In Islam, which prayer is offered for the dead before burial?",
    answers: ["Eid-ul-Adha", "Tahajjud", "Kusuf", "Janazah"],
    correctAnswer: "Janazah",
  },
  {
    question: "Which of these is a Christian practice of worship?",
    answers: ["Genuflections", "Ablution", "Meditation", "Kusuf"],
    correctAnswer: "Meditation",
  },
  {
    question:
      "Which prayer is performed on Friday in Islam, replacing Zuhr prayer?",
    answers: ["Tarawih", "Eid-ul-Fitr", "Ju'muah", "Isha'i"],
    correctAnswer: "Ju'muah",
  },
  {
    question: "Which religion practices Tahajjud, the midnight prayer?",
    answers: [
      "Christianity",
      "Indigenous African Religion",
      "Hinduism",
      "Islam",
    ],
    correctAnswer: "Islam",
  },
  {
    question: "In Christianity, confession prayers are primarily for:",
    answers: [
      "Asking for blessings",
      "Thanksgiving",
      "Admitting sins",
      "Cursing enemies",
    ],
    correctAnswer: "Admitting sins",
  },
  {
    question:
      "What is one difference between Indigenous African Religion and Islam regarding prayer?",
    answers: [
      "Indigenous Religion has obligatory prayers",
      "Cursing enemies is accepted in Indigenous Religion",
      "Indigenous Religion uses confession in prayer",
      "Both forbid cursing enemies",
    ],
    correctAnswer: "Cursing enemies is accepted in Indigenous Religion",
  },
  {
    question: "Which prayer in Islam is performed during a solar eclipse?",
    answers: ["Fajr", "Kusuf", "Khusuf", "Tahajjud"],
    correctAnswer: "Kusuf",
  },
  {
    question:
      "In Indigenous African Religion, forgiveness of sin is achieved through:",
    answers: ["Prayer only", "Meditation only", "Sacrifice", "Fasting"],
    correctAnswer: "Sacrifice",
  },
  {
    question: "Which of these best describes intercession prayer?",
    answers: [
      "Asking for blessings",
      "Confessing sins",
      "Praying on behalf of others",
      "Cursing enemies",
    ],
    correctAnswer: "Praying on behalf of others",
  },
  {
    question:
      "In Christianity, which of the following acts is part of worship?",
    answers: ["Genuflections", "Ablution", "Sermon", "Kusuf"],
    correctAnswer: "Sermon",
  },
  {
    question:
      "Which type of prayer is performed at the end of Ramadan in Islam?",
    answers: ["Ju’muah", "Tahajjud", "Eid-ul-Fitr", "Fajr"],
    correctAnswer: "Eid-ul-Fitr",
  },
  {
    question: "Indigenous African Religion often uses prayer for:",
    answers: [
      "Meditation only",
      "Confession only",
      "Thanksgiving and supplication",
      "Fasting",
    ],
    correctAnswer: "Thanksgiving and supplication",
  },
  {
    question: "Which type of prayer is specific to Islam during the night?",
    answers: ["Ju'muah", "Khusuf", "Tarawih", "Tahajjud"],
    correctAnswer: "Tahajjud",
  },
  {
    question: "The prayer performed during a lunar eclipse in Islam is:",
    answers: ["Kusuf", "Khusuf", "Eid-ul-Fitr", "Tarawih"],
    correctAnswer: "Khusuf",
  },
  {
    question: "Which of these is a moral lesson from prayer?",
    answers: ["Disobedience", "Unity", "Separation", "Distrust"],
    correctAnswer: "Unity",
  },
  {
    question: "Prayer in all three religions is used primarily to:",
    answers: [
      "Seek forgiveness",
      "Curse enemies",
      "Communicate with God",
      "Express anger",
    ],
    correctAnswer: "Communicate with God",
  },
  {
    question:
      "Which act is common in both Christianity and Islam but differs in Indigenous African Religion?",
    answers: [
      "Confession of sins",
      "Sacrifices for forgiveness",
      "Thanksgiving prayers",
      "Supplication prayers",
    ],
    correctAnswer: "Confession of sins",
  },
  {
    question:
      "What is the significance of prayer in one’s life according to religious teachings?",
    answers: [
      "It disconnects people from God",
      "It brings believers closer to God",
      "It encourages conflict",
      "It discourages discipline",
    ],
    correctAnswer: "It brings believers closer to God",
  },
  {
    question: "In Islam, how many obligatory prayers are there in a day?",
    answers: ["Four", "Five", "Six", "Seven"],
    correctAnswer: "Five",
  },
  {
    question: "Which type of prayer is used in Christianity to confess sins?",
    answers: ["Supplication", "Thanksgiving", "Confession", "Intercession"],
    correctAnswer: "Confession",
  },
  {
    question: "Which prayer in Islam is offered for a deceased person?",
    answers: ["Tahajjud", "Janazah", "Kusuf", "Eid-ul-Adha"],
    correctAnswer: "Janazah",
  },
  {
    question: "Prayer encourages group cohesion because it:",
    answers: [
      "Creates division",
      "Encourages unity and peace",
      "Distracts members",
      "Increases selfishness",
    ],
    correctAnswer: "Encourages unity and peace",
  },
  {
    question:
      "How is forgiveness of sin achieved in Indigenous African Religion?",
    answers: [
      "Prayer only",
      "Confession only",
      "Through sacrifices",
      "Meditation only",
    ],
    correctAnswer: "Through sacrifices",
  },
  {
    question:
      "Which of these statements about prayer in Indigenous African Religion is correct?",
    answers: [
      "Prayer is used only for cursing enemies",
      "Only elders can pray",
      "Thanksgiving is a part of prayer",
      "Only leaders are allowed to pray",
    ],
    correctAnswer: "Thanksgiving is a part of prayer",
  },
  {
    question: "Ju'muah is performed on which day in Islam?",
    answers: ["Wednesday", "Friday", "Saturday", "Sunday"],
    correctAnswer: "Friday",
  },
  {
    question: "A special prayer during Ramadan nights in Islam is called:",
    answers: ["Ju'muah", "Tahajjud", "Eid-ul-Adha", "Tarawih"],
    correctAnswer: "Tarawih",
  },
  {
    question:
      "In Christianity, which of these is often part of worship services?",
    answers: ["Ablution", "Sermon", "Kusuf", "Janazah"],
    correctAnswer: "Sermon",
  },
  {
    question:
      "Which of these is not a prayer type in Indigenous African Religion?",
    answers: ["Confession", "Thanksgiving", "Supplication", "Ju'muah"],
    correctAnswer: "Ju'muah",
  },
  {
    question:
      "Which of these is a benefit of globalization on religious worship?",
    answers: [
      "Increases conflicts",
      "Promotes cultural understanding",
      "Creates language barriers",
      "Decreases respect",
    ],
    correctAnswer: "Promotes cultural understanding",
  },
  {
    question: "What is the purpose of Eid-ul-Adha in Islam?",
    answers: [
      "To mark the end of Ramadan",
      "To commemorate the sacrifice of Prophet Ibrahim",
      "To begin fasting",
      "To celebrate Eid-ul-Fitr",
    ],
    correctAnswer: "To commemorate the sacrifice of Prophet Ibrahim",
  },
  {
    question: "In Christianity, the prayer of intercession is for:",
    answers: [
      "Asking for one’s personal needs",
      "Thanking God",
      "Praying on behalf of others",
      "Confessing sins",
    ],
    correctAnswer: "Praying on behalf of others",
  },
  {
    question: "Prayer in all three religions promotes:",
    answers: [
      "Unity and discipline",
      "Selfishness",
      "Anger",
      "Cursing enemies",
    ],
    correctAnswer: "Unity and discipline",
  },
];
export default questionsData;
