const questionsData = [
  {
    question: "What key event is associated with the ministry of Jesus Christ?",
    answers: [
      "The Last Supper",
      "Triumphant entry to Makkah",
      "Sermon on the Mount",
      "Farewell sermon",
    ],
    correctAnswer: "Sermon on the Mount",
  },
  {
    question: "Which of the following is a major teaching of Jesus Christ?",
    answers: ["Forgiveness", "Revenge", "Greed", "Hatred"],
    correctAnswer: "Forgiveness",
  },
  {
    question: "What moral lesson is exemplified by the life of Muhammad (SAW)?",
    answers: ["Anger management", "Forgiveness", "Selfishness", "Fear"],
    correctAnswer: "Forgiveness",
  },
  {
    question: "What was one of the key events in the life of Muhammad (SAW)?",
    answers: [
      "The resurrection",
      "The farewell sermon",
      "The crucifixion",
      "The Sermon on the Mount",
    ],
    correctAnswer: "The farewell sermon",
  },
  {
    question:
      "Which characteristic is often emphasized in the teachings of indigenous religious leaders?",
    answers: ["Sacrifice", "Greed", "Disobedience", "Indifference"],
    correctAnswer: "Sacrifice",
  },
  {
    question: "What is a significant event in the life of Jesus Christ?",
    answers: [
      "Teaching of the parables",
      "Triumphant entry to Makkah",
      "Farewell sermon",
      "Miracles of Muhammad",
    ],
    correctAnswer: "Teaching of the parables",
  },
  {
    question:
      "In the context of religious leaders, what does humility signify?",
    answers: ["Pride", "Arrogance", "Selflessness", "Independence"],
    correctAnswer: "Selflessness",
  },
  {
    question: "What is a moral lesson derived from the life of Jesus Christ?",
    answers: ["Pride", "Greed", "Obedience", "Dishonesty"],
    correctAnswer: "Obedience",
  },
  {
    question: "What virtue is emphasized in the teachings of Muhammad (SAW)?",
    answers: ["Patriotism", "Hatred", "Revenge", "Selfishness"],
    correctAnswer: "Patriotism",
  },
  {
    question: "The ministry of indigenous religious leaders often involves:",
    answers: [
      "Materialism",
      "Miracles and teaching",
      "Ignoring traditions",
      "Rejecting cultural practices",
    ],
    correctAnswer: "Miracles and teaching",
  },
  {
    question: "Which event marked the latter part of Jesus Christ's life?",
    answers: ["Crucifixion", "Birth", "Baptism", "Sermon on the Mount"],
    correctAnswer: "Crucifixion",
  },
  {
    question: "One of the main messages from Muhammad (SAW) is:",
    answers: ["Unity and forgiveness", "Isolation", "Division", "Indifference"],
    correctAnswer: "Unity and forgiveness",
  },
  {
    question: "What role does sacrifice play in religious teachings?",
    answers: [
      "To gain power",
      "To help others",
      "To create fear",
      "To promote selfishness",
    ],
    correctAnswer: "To help others",
  },
  {
    question: "What moral value can be learned from the life of Jesus Christ?",
    answers: ["Dishonesty", "Obedience", "Greed", "Disrespect"],
    correctAnswer: "Obedience",
  },
  {
    question: "Which principle is central to the teachings of Muhammad (SAW)?",
    answers: ["Revenge", "Forgiveness", "Greed", "Disrespect"],
    correctAnswer: "Forgiveness",
  },
  {
    question:
      "What is a significant aspect of the teachings of indigenous religious leaders?",
    answers: [
      "Teaching and miracles",
      "Wealth accumulation",
      "Competition",
      "Disregarding customs",
    ],
    correctAnswer: "Teaching and miracles",
  },
  {
    question: "Which event reflects the teachings of Jesus Christ?",
    answers: [
      "Sermon on the Mount",
      "Triumphant entry to Makkah",
      "The Farewell sermon",
      "Teaching of Muhammad",
    ],
    correctAnswer: "Sermon on the Mount",
  },
  {
    question: "What quality is highlighted in the life of Muhammad (SAW)?",
    answers: ["Humility", "Greed", "Arrogance", "Indifference"],
    correctAnswer: "Humility",
  },
  {
    question:
      "In the context of indigenous religions, what is a common practice?",
    answers: ["Miracles", "Materialism", "Isolation", "Disregarding community"],
    correctAnswer: "Miracles",
  },
  {
    question:
      "What can be learned from the sacrifices made by religious leaders?",
    answers: ["Pride", "Selflessness", "Indifference", "Greed"],
    correctAnswer: "Selflessness",
  },
  {
    question:
      "Which principle is essential for resolving conflicts according to religious teachings?",
    answers: ["Forgiveness", "Anger", "Bitterness", "Resentment"],
    correctAnswer: "Forgiveness",
  },
  {
    question:
      "What is a key moral lesson from the teachings of indigenous religious leaders?",
    answers: ["Obedience", "Rebellion", "Disrespect", "Indifference"],
    correctAnswer: "Obedience",
  },
  {
    question: "How does cultural identity affect religious practices?",
    answers: [
      "It has no effect",
      "It enhances them",
      "It weakens them",
      "It isolates them",
    ],
    correctAnswer: "It enhances them",
  },
  {
    question:
      "Which quality is encouraged in the community by religious teachings?",
    answers: ["Disrespect", "Unity", "Isolation", "Greed"],
    correctAnswer: "Unity",
  },
  {
    question: "In what way do religious leaders influence cultural values?",
    answers: [
      "By promoting division",
      "By reinforcing positive values",
      "By encouraging greed",
      "By neglecting traditions",
    ],
    correctAnswer: "By reinforcing positive values",
  },
  {
    question:
      "What aspect of a religious leader's life often serves as a model for followers?",
    answers: [
      "Their wealth",
      "Their sacrifices and moral virtues",
      "Their political power",
      "Their family disputes",
    ],
    correctAnswer: "Their sacrifices and moral virtues",
  },
  {
    question: "How can one demonstrate forgiveness in daily life?",
    answers: [
      "By holding grudges",
      "By letting go of anger",
      "By being resentful",
      "By seeking revenge",
    ],
    correctAnswer: "By letting go of anger",
  },
  {
    question: "What is a moral virtue exemplified by Jesus Christ?",
    answers: ["Selfishness", "Pride", "Humility", "Dishonesty"],
    correctAnswer: "Humility",
  },
  {
    question:
      "What can be learned from Muhammad (SAW)'s actions toward the unbelievers?",
    answers: ["Punishment", "Forgiveness", "Hatred", "Isolation"],
    correctAnswer: "Forgiveness",
  },
  {
    question: "What is a key value in indigenous religions?",
    answers: ["Community", "Isolation", "Materialism", "Competition"],
    correctAnswer: "Community",
  },
  {
    question:
      "How do the teachings of religious leaders typically address conflict?",
    answers: [
      "By promoting revenge",
      "By encouraging forgiveness",
      "By ignoring the issue",
      "By creating divisions",
    ],
    correctAnswer: "By encouraging forgiveness",
  },
  {
    question: "What event is associated with Muhammad (SAW)'s teachings?",
    answers: [
      "The crucifixion",
      "The farewell sermon",
      "The resurrection",
      "The sermon on the mount",
    ],
    correctAnswer: "The farewell sermon",
  },
];

export default questionsData;
