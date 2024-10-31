const questionsData = [
  {
    question: "What is the primary purpose of religious songs?",
    answers: [
      "To entertain",
      "To express religious beliefs",
      "To discuss politics",
      "To critique society",
    ],
    correctAnswer: "To express religious beliefs",
  },
  {
    question: "Which of these is a characteristic of religious songs?",
    answers: [
      "Expresses political views",
      "Encourages economic growth",
      "Draws worshippers to God",
      "Describes nature",
    ],
    correctAnswer: "Draws worshippers to God",
  },
  {
    question: "Non-religious songs typically address:",
    answers: ["Belief in God", "Economic issues", "Scripture", "Moral values"],
    correctAnswer: "Economic issues",
  },
  {
    question: "What is a moral value often found in religious songs?",
    answers: ["Humility", "Ambition", "Greed", "Power"],
    correctAnswer: "Humility",
  },
  {
    question: "Which text is from the Bible?",
    answers: ["Al-Fatihah", "Okwan twa asuo", "Psalm 23", "Naazorabataa bin"],
    correctAnswer: "Psalm 23",
  },
  {
    question: "Al-Fatihah is a chapter from which religious book?",
    answers: ["The Bible", "The Torah", "The Qur'an", "The Vedas"],
    correctAnswer: "The Qur'an",
  },
  {
    question: "Okwan twa asuo; asuo twa okwan is an example of:",
    answers: [
      "A Bible verse",
      "A religious recitation",
      "An Indigenous African oral tradition",
      "A song",
    ],
    correctAnswer: "An Indigenous African oral tradition",
  },
  {
    question: "Religious songs often give hope to:",
    answers: ["The wealthy", "The hopeless", "Political leaders", "Musicians"],
    correctAnswer: "The hopeless",
  },
  {
    question: "Which value is often promoted in religious songs?",
    answers: ["Greed", "Contentment", "Revenge", "Jealousy"],
    correctAnswer: "Contentment",
  },
  {
    question: "What is the primary focus of non-religious songs?",
    answers: [
      "Economic matters",
      "Scriptural teaching",
      "Moral lessons",
      "Worship",
    ],
    correctAnswer: "Economic matters",
  },
  {
    question: "Which characteristic defines non-religious songs?",
    answers: [
      "Expresses dependence on God",
      "Focuses on social issues",
      "Promotes moral values",
      "Draws people closer to God",
    ],
    correctAnswer: "Focuses on social issues",
  },
  {
    question: "Religious recitations in Christianity may include:",
    answers: ["The Qur'an", "Psalm 23", "Naazorabataa bin", "Al-Fatihah"],
    correctAnswer: "Psalm 23",
  },
  {
    question: "What is one moral lesson found in religious songs?",
    answers: ["Pride", "Motivation", "Greed", "Power-seeking"],
    correctAnswer: "Motivation",
  },
  {
    question: "Which of these religious texts is a part of the Qur’an?",
    answers: ["Exodus 20", "Psalm 23", "Al-Fatihah", "Proverbs"],
    correctAnswer: "Al-Fatihah",
  },
  {
    question: "Which proverb means 'a rolling stone gathers no moss'?",
    answers: ["Psalm 23", "Okwan twa asuo", "Naazorabataa bin", "Al-Fatihah"],
    correctAnswer: "Naazorabataa bin",
  },
  {
    question: "Which of these is not a purpose of religious songs?",
    answers: [
      "Drawing people to God",
      "Providing motivation",
      "Encouraging violence",
      "Giving hope",
    ],
    correctAnswer: "Encouraging violence",
  },
  {
    question: "The Ten Commandments are found in which religious text?",
    answers: ["Qur'an", "Bible", "Vedas", "Torah"],
    correctAnswer: "Bible",
  },
  {
    question: "Religious songs often help listeners develop a sense of:",
    answers: ["Hopelessness", "Conflict", "Belonging", "Anger"],
    correctAnswer: "Belonging",
  },
  {
    question:
      "The message of contentment in religious songs teaches people to:",
    answers: [
      "Be grateful",
      "Seek material wealth",
      "Critique others",
      "Seek revenge",
    ],
    correctAnswer: "Be grateful",
  },
  {
    question: "Which characteristic is not typical of a religious song?",
    answers: [
      "Expresses dependence on God",
      "Discusses social issues",
      "Draws people to worship",
      "Promotes humility",
    ],
    correctAnswer: "Discusses social issues",
  },
  {
    question: "The proverb 'Okwan twa asuo; asuo twa okwan' implies:",
    answers: [
      "There are obstacles in life",
      "Always be humble",
      "Never give up",
      "Seek help when needed",
    ],
    correctAnswer: "There are obstacles in life",
  },
  {
    question: "Which is a characteristic of a religious song?",
    answers: [
      "Encourages pride",
      "Expresses belief in God",
      "Focuses on social justice",
      "Contains political themes",
    ],
    correctAnswer: "Expresses belief in God",
  },
  {
    question: "Recitations from the Qur’an may include:",
    answers: ["Psalm 23", "Exodus 20", "Al-Ikhlas", "Proverbs"],
    correctAnswer: "Al-Ikhlas",
  },
  {
    question:
      "Which religious text includes the story of the Ten Commandments?",
    answers: ["Al-Fatihah", "Psalm 23", "Exodus 20", "Naazorabataa bin"],
    correctAnswer: "Exodus 20",
  },
  {
    question: "Religious songs typically do not cover:",
    answers: [
      "Beliefs in God",
      "Moral values",
      "Political matters",
      "Giving hope",
    ],
    correctAnswer: "Political matters",
  },
  {
    question: "What is one purpose of religious recitations?",
    answers: [
      "To discuss politics",
      "To teach values",
      "To critique society",
      "To promote commerce",
    ],
    correctAnswer: "To teach values",
  },
  {
    question:
      "One difference between religious and non-religious songs is that non-religious songs:",
    answers: [
      "Focus on moral values",
      "Express worship",
      "Address political issues",
      "Draw people to God",
    ],
    correctAnswer: "Address political issues",
  },
  {
    question: "Which moral value is often found in religious songs?",
    answers: [
      "Discontentment",
      "Acknowledgement of God's power",
      "Pride",
      "Selfishness",
    ],
    correctAnswer: "Acknowledgement of God's power",
  },
  {
    question: "Which of these is an oral tradition from African culture?",
    answers: ["Al-Fatihah", "Exodus 20", "Naazorabataa bin", "Psalm 23"],
    correctAnswer: "Naazorabataa bin",
  },
  {
    question:
      "Religious songs are distinct from non-religious songs because they:",
    answers: [
      "Focus on political issues",
      "Promote spiritual values",
      "Discuss social matters",
      "Avoid worship",
    ],
    correctAnswer: "Promote spiritual values",
  },
  {
    question: "One reason religious songs are sung is to:",
    answers: [
      "Create social divides",
      "Express love of God",
      "Entertain only",
      "Avoid religious themes",
    ],
    correctAnswer: "Express love of God",
  },
  {
    question: "Which of the following is a benefit of religious recitations?",
    answers: [
      "Promotes wealth",
      "Teaches humility",
      "Encourages greed",
      "Creates social status",
    ],
    correctAnswer: "Teaches humility",
  },
  {
    question: "The recitation of Psalm 23 is common in which religion?",
    answers: [
      "Islam",
      "Hinduism",
      "Christianity",
      "African Traditional Religion",
    ],
    correctAnswer: "Christianity",
  },
  {
    question: "Which of these best defines a non-religious song?",
    answers: [
      "A song expressing worship",
      "A song discussing politics",
      "A song promoting God",
      "A song of scripture",
    ],
    correctAnswer: "A song discussing politics",
  },
  {
    question: "One moral lesson often found in religious songs is:",
    answers: ["Jealousy", "Pride", "Humility", "Ambition"],
    correctAnswer: "Humility",
  },
  {
    question:
      "A moral lesson in religious songs that helps people face life’s challenges is:",
    answers: ["Greed", "Motivation", "Selfishness", "Criticism"],
    correctAnswer: "Motivation",
  },
  {
    question: "Which of these is a form of Islamic scripture recitation?",
    answers: [
      "Al-Ikhlas",
      "Psalm 23",
      "The Ten Commandments",
      "Naazorabataa bin",
    ],
    correctAnswer: "Al-Ikhlas",
  },
  {
    question: "In what way do religious songs often benefit worshippers?",
    answers: [
      "Promote social injustice",
      "Draw them to God",
      "Encourage selfishness",
      "Promote greed",
    ],
    correctAnswer: "Draw them to God",
  },
  {
    question: "One purpose of non-religious songs is to:",
    answers: [
      "Express gratitude to God",
      "Motivate society",
      "Teach scripture",
      "Encourage worship",
    ],
    correctAnswer: "Motivate society",
  },
];

export default questionsData;
