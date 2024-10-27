const questionsData = [
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
  {
    question: "What is considered good behavior in Ghanaian culture?",
    answers: [
      "Engaging in premarital sex",
      "Participating in puberty rites",
      "Ignoring traditional values",
      "Promoting selfishness",
    ],
    correctAnswer: "Participating in puberty rites",
  },
  {
    question: "What does the phrase 'Good name is better than riches' suggest?",
    answers: [
      "Wealth is the most important",
      "Reputation and behavior matter",
      "Name changes are irrelevant",
      "Riches bring happiness",
    ],
    correctAnswer: "Reputation and behavior matter",
  },
  {
    question: "According to Christianity, what does Matthew 5:28 warn against?",
    answers: ["Stealing", "Lying", "Adultery", "Dishonoring parents"],
    correctAnswer: "Adultery",
  },
  {
    question: "What does the Qur'an say about insults?",
    answers: [
      "They are acceptable in certain situations",
      "They should be avoided",
      "They strengthen relationships",
      "They are necessary for respect",
    ],
    correctAnswer: "They should be avoided",
  },
  {
    question: "What is an effect of globalization on cultural traditions?",
    answers: [
      "It enhances local customs",
      "It leads to loss of local traditions",
      "It has no effect",
      "It promotes cultural understanding",
    ],
    correctAnswer: "It leads to loss of local traditions",
  },
  {
    question: "What is a common cause of substance abuse?",
    answers: [
      "Healthy curiosity",
      "Peer group influence",
      "Strict parenting",
      "Lack of education",
    ],
    correctAnswer: "Peer group influence",
  },
  {
    question: "Which of the following is considered a hard drug?",
    answers: ["Paracetamol", "Marijuana", "Vitamin B complex", "Ibuprofen"],
    correctAnswer: "Marijuana",
  },
  {
    question:
      "What does abstinence from premarital sex signify in many cultures?",
    answers: ["Indecency", "Chastity", "Rebellion", "Disrespect"],
    correctAnswer: "Chastity",
  },
  {
    question: "Why should one avoid bad company?",
    answers: [
      "To fit in",
      "To develop good character",
      "To gain popularity",
      "To show indifference",
    ],
    correctAnswer: "To develop good character",
  },
  {
    question:
      "What is the significance of humility in walking, according to the Qur'an?",
    answers: [
      "It shows weakness",
      "It reflects respect and dignity",
      "It is unnecessary",
      "It is a sign of arrogance",
    ],
    correctAnswer: "It reflects respect and dignity",
  },
  {
    question:
      "Which of the following is a positive effect of cultural identity?",
    answers: [
      "Isolation from others",
      "A sense of belonging",
      "Confusion about self",
      "Ignoring personal history",
    ],
    correctAnswer: "A sense of belonging",
  },
  {
    question: "What does it mean to exhibit good manners?",
    answers: [
      "Being rude to others",
      "Politeness and consideration for others",
      "Ignoring social cues",
      "Being overly critical",
    ],
    correctAnswer: "Politeness and consideration for others",
  },
  {
    question: "What is a major consequence of substance abuse?",
    answers: [
      "Enhanced social life",
      "Health problems",
      "Improved academic performance",
      "Increased wealth",
    ],
    correctAnswer: "Health problems",
  },
  {
    question: "What teaching does Christianity provide about chastity?",
    answers: [
      "It is irrelevant",
      "It is encouraged for good living",
      "It is unnecessary",
      "It leads to loneliness",
    ],
    correctAnswer: "It is encouraged for good living",
  },
  {
    question: "What is a common characteristic of decent dressing?",
    answers: [
      "Wearing clothing that is overly revealing",
      "Wearing culturally appropriate clothing",
      "Ignoring the occasion",
      "Wearing whatever is available",
    ],
    correctAnswer: "Wearing culturally appropriate clothing",
  },
  {
    question:
      "What is a typical teaching of Indigenous African religions regarding morality?",
    answers: [
      "Good behavior is irrelevant",
      "Promoting individualism over community",
      "Chastity is important before marriage",
      "Only elders should be respected",
    ],
    correctAnswer: "Chastity is important before marriage",
  },
  {
    question: "Why is it important to maintain personal standards and values?",
    answers: [
      "To gain social acceptance",
      "To feel a sense of self-worth",
      "To fit in with others",
      "To avoid responsibility",
    ],
    correctAnswer: "To feel a sense of self-worth",
  },
  {
    question: "What is the primary goal of manners in society?",
    answers: [
      "To foster respect and harmony",
      "To create conflicts",
      "To promote isolation",
      "To ignore others",
    ],
    correctAnswer: "To foster respect and harmony",
  },
  {
    question: "How can globalization negatively impact cultural practices?",
    answers: [
      "By enhancing cultural diversity",
      "By promoting cultural exchange",
      "By leading to cultural homogenization",
      "By encouraging local traditions",
    ],
    correctAnswer: "By leading to cultural homogenization",
  },
  {
    question: "What is one way to show respect for elders?",
    answers: [
      "Ignoring their opinions",
      "Listening and valuing their advice",
      "Disregarding their contributions",
      "Being dismissive",
    ],
    correctAnswer: "Listening and valuing their advice",
  },
  {
    question:
      "What should a person do when faced with peer pressure regarding substance use?",
    answers: [
      "Give in to the pressure",
      "Stay true to their values",
      "Ignore the consequences",
      "Follow what others do",
    ],
    correctAnswer: "Stay true to their values",
  },
  {
    question: "What does the Qur'an advise regarding humility?",
    answers: [
      "It is a weakness",
      "It should be practiced in all actions",
      "It is unnecessary",
      "It only applies to certain people",
    ],
    correctAnswer: "It should be practiced in all actions",
  },
  {
    question: "What is a consequence of losing cultural identity?",
    answers: [
      "A stronger sense of community",
      "Increased confusion and disconnection",
      "A greater understanding of self",
      "Enhanced cultural practices",
    ],
    correctAnswer: "Increased confusion and disconnection",
  },
  {
    question: "What does 'decency' refer to in the context of behavior?",
    answers: [
      "Rude and disrespectful actions",
      "Acceptable and respectful behavior",
      "Indifference towards others",
      "A lack of concern for values",
    ],
    correctAnswer: "Acceptable and respectful behavior",
  },
  {
    question: "What should individuals do to resist negative influences?",
    answers: [
      "Follow what everyone else does",
      "Be aware of their values and stand firm",
      "Ignore their own beliefs",
      "Accept any and all ideas",
    ],
    correctAnswer: "Be aware of their values and stand firm",
  },
  {
    question: "What is the significance of good manners in education?",
    answers: [
      "They create distractions",
      "They foster a positive learning environment",
      "They are unnecessary",
      "They only matter in formal settings",
    ],
    correctAnswer: "They foster a positive learning environment",
  },
  {
    question: "What is a key teaching of Christianity regarding morality?",
    answers: [
      "Moral values are flexible",
      "Adultery should be avoided",
      "Everyone can do as they please",
      "Morality is irrelevant",
    ],
    correctAnswer: "Adultery should be avoided",
  },
  {
    question: "What does substance abuse commonly lead to?",
    answers: [
      "Improved health",
      "Increased productivity",
      "Addiction and dependence",
      "Enhanced creativity",
    ],
    correctAnswer: "Addiction and dependence",
  },
  {
    question: "What is an important practice to maintain a cultural identity?",
    answers: [
      "Avoiding cultural events",
      "Participating in traditional activities",
      "Ignoring cultural heritage",
      "Embracing global trends only",
    ],
    correctAnswer: "Participating in traditional activities",
  },
  {
    question: "What is an example of bad company?",
    answers: [
      "Friends who support good behavior",
      "Those who encourage illegal activities",
      "People who promote education",
      "Those who value family",
    ],
    correctAnswer: "Those who encourage illegal activities",
  },
  {
    question: "What role does communication play in relationships?",
    answers: [
      "It causes misunderstandings",
      "It enhances understanding and respect",
      "It is irrelevant",
      "It should be avoided",
    ],
    correctAnswer: "It enhances understanding and respect",
  },
  {
    question: "What does being open-minded entail?",
    answers: [
      "Rejecting new ideas",
      "Considering different perspectives",
      "Sticking only to one's beliefs",
      "Being indifferent to others' opinions",
    ],
    correctAnswer: "Considering different perspectives",
  },
  {
    question: "What is the impact of respect on personal relationships?",
    answers: [
      "It leads to conflict",
      "It strengthens bonds",
      "It has no impact",
      "It creates distance",
    ],
    correctAnswer: "It strengthens bonds",
  },
  {
    question: "How can one demonstrate cultural awareness?",
    answers: [
      "By ignoring other cultures",
      "By learning about and respecting diverse cultures",
      "By only valuing their own culture",
      "By promoting stereotypes",
    ],
    correctAnswer: "By learning about and respecting diverse cultures",
  },
  {
    question: "What is one of the most effective ways to resist peer pressure?",
    answers: [
      "Conforming to the group",
      "Staying true to one's own values",
      "Ignoring friends",
      "Being overly aggressive",
    ],
    correctAnswer: "Staying true to one's own values",
  },
  {
    question: "What should be prioritized in a community setting?",
    answers: [
      "Selfish interests",
      "Collective well-being and respect",
      "Disregard for others",
      "Individual success at all costs",
    ],
    correctAnswer: "Collective well-being and respect",
  },
];

export default questionsData;
