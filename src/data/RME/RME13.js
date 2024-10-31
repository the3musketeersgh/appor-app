const questionsData = [
  {
    question: "What is the primary aim of work?",
    answers: [
      "To achieve leisure",
      "To produce something or achieve a purpose",
      "To socialize with others",
      "To pass time",
    ],
    correctAnswer: "To produce something or achieve a purpose",
  },
  {
    question: "Which term describes the process of setting up a new business?",
    answers: [
      "Employment",
      "Entrepreneurship",
      "Social Security",
      "Internship",
    ],
    correctAnswer: "Entrepreneurship",
  },
  {
    question: "What is social security?",
    answers: [
      "A program for job training",
      "A social protection program providing monetary assistance",
      "A type of entrepreneurship",
      "A kind of work",
    ],
    correctAnswer: "A social protection program providing monetary assistance",
  },
  {
    question: "Which of the following is an example of domestic work?",
    answers: ["Teaching", "Farming", "Cooking", "Building schools"],
    correctAnswer: "Cooking",
  },
  {
    question: "What type of work includes community clean-up exercises?",
    answers: [
      "Domestic work",
      "School work",
      "Community work",
      "Occupational work",
    ],
    correctAnswer: "Community work",
  },
  {
    question: "Which of the following is considered occupational work?",
    answers: ["Cooking", "Teaching", "Cleaning", "Playing games"],
    correctAnswer: "Teaching",
  },
  {
    question: "What does religious work typically involve?",
    answers: [
      "Social gatherings",
      "Community service",
      "Work of priests and religious leaders",
      "Occupational tasks",
    ],
    correctAnswer: "Work of priests and religious leaders",
  },
  {
    question: "What is an essential good work habit?",
    answers: [
      "Being lazy",
      "Avoiding responsibilities",
      "Being punctual to work",
      "Ignoring deadlines",
    ],
    correctAnswer: "Being punctual to work",
  },
  {
    question: "Which proverb relates to hard work?",
    answers: [
      "Laziness leads to poverty",
      "Work is for fools",
      "Leisure is the best teacher",
      "All work is pointless",
    ],
    correctAnswer: "Laziness leads to poverty",
  },
  {
    question: "According to Proverbs 6:6-11, what should one avoid?",
    answers: [
      "Diligence",
      "Overdependence",
      "Planning in advance",
      "Hard work",
    ],
    correctAnswer: "Overdependence",
  },
  {
    question: "What is one benefit of work for health?",
    answers: [
      "It promotes laziness",
      "It is detrimental to well-being",
      "It enables us to buy basic needs",
      "It isolates us from others",
    ],
    correctAnswer: "It enables us to buy basic needs",
  },
  {
    question: "How does work help in developing talents?",
    answers: [
      "By providing leisure time",
      "By promoting idleness",
      "By enabling skill application",
      "By limiting opportunities",
    ],
    correctAnswer: "By enabling skill application",
  },
  {
    question: "What does 'good work habits' emphasize?",
    answers: [
      "Taking shortcuts",
      "Avoiding responsibilities",
      "Dedication to work",
      "Neglecting tasks",
    ],
    correctAnswer: "Dedication to work",
  },
  {
    question: "What is one reason people work?",
    answers: [
      "To achieve financial independence",
      "To avoid social interaction",
      "To disregard responsibilities",
      "To waste time",
    ],
    correctAnswer: "To achieve financial independence",
  },
  {
    question: "What is a key ethical principle regarding work?",
    answers: [
      "Work should be avoided",
      "Everyone deserves to be idle",
      "A hand that does not work should not eat",
      "Work is only for the wealthy",
    ],
    correctAnswer: "A hand that does not work should not eat",
  },
  {
    question: "Which of the following illustrates teamwork?",
    answers: [
      "Ignoring others' contributions",
      "Working toward group objectives",
      "Competing with peers",
      "Disregarding group roles",
    ],
    correctAnswer: "Working toward group objectives",
  },
  {
    question: "How can one anticipate difficulties in taking initiatives?",
    answers: [
      "By ignoring potential challenges",
      "By planning and preparing",
      "By avoiding risks",
      "By staying idle",
    ],
    correctAnswer: "By planning and preparing",
  },
  {
    question: "What does 'visualizing alternatives' involve?",
    answers: [
      "Sticking to old methods",
      "Identifying problems and challenges",
      "Being rigid in thinking",
      "Ignoring possibilities",
    ],
    correctAnswer: "Identifying problems and challenges",
  },
  {
    question: "What is an example of a religious teaching on work?",
    answers: [
      "Hard work does not pay off",
      "Procrastination is acceptable",
      "Success comes from effort and dedication",
      "Idleness is a virtue",
    ],
    correctAnswer: "Success comes from effort and dedication",
  },
  {
    question:
      "What is a benefit of understanding roles during group activities?",
    answers: [
      "Encouraging confusion",
      "Ensuring smooth collaboration",
      "Avoiding teamwork",
      "Disregarding group objectives",
    ],
    correctAnswer: "Ensuring smooth collaboration",
  },
  {
    question: "What should one do to maintain standards and values?",
    answers: [
      "Compromise on principles",
      "Set and maintain high expectations",
      "Avoid responsibility",
      "Follow the crowd",
    ],
    correctAnswer: "Set and maintain high expectations",
  },
  {
    question: "What can effective time management lead to?",
    answers: [
      "Increased stress",
      "Reduced productivity",
      "Enhanced success in tasks",
      "Failure to meet goals",
    ],
    correctAnswer: "Enhanced success in tasks",
  },
  {
    question: "Which of the following is NOT a type of work?",
    answers: [
      "Domestic work",
      "Community work",
      "Leisure activities",
      "Occupational work",
    ],
    correctAnswer: "Leisure activities",
  },
  {
    question: "What is the importance of planning in advance?",
    answers: [
      "It creates confusion",
      "It leads to chaos",
      "It promotes efficiency",
      "It wastes time",
    ],
    correctAnswer: "It promotes efficiency",
  },
  {
    question: "How can laziness affect one's life?",
    answers: [
      "It leads to success",
      "It encourages growth",
      "It can result in poverty",
      "It enhances creativity",
    ],
    correctAnswer: "It can result in poverty",
  },
  {
    question: "What is a fundamental characteristic of entrepreneurship?",
    answers: [
      "Avoiding risk",
      "Setting up new businesses",
      "Working for others",
      "Seeking comfort",
    ],
    correctAnswer: "Setting up new businesses",
  },
  {
    question: "What is one way to overcome difficulties in work?",
    answers: [
      "Giving up easily",
      "Planning and being prepared",
      "Ignoring problems",
      "Avoiding hard tasks",
    ],
    correctAnswer: "Planning and being prepared",
  },
  {
    question: "How can one enhance their problem-solving skills?",
    answers: [
      "By ignoring challenges",
      "By seeking new alternatives",
      "By avoiding group discussions",
      "By sticking to familiar methods",
    ],
    correctAnswer: "By seeking new alternatives",
  },
  {
    question: "What role does teamwork play in achieving goals?",
    answers: [
      "It hinders progress",
      "It creates division",
      "It promotes cooperation and success",
      "It is unnecessary",
    ],
    correctAnswer: "It promotes cooperation and success",
  },
  {
    question:
      "What can be a consequence of not adhering to ethical work standards?",
    answers: [
      "Trust and respect",
      "Positive relationships",
      "Loss of credibility",
      "Increased productivity",
    ],
    correctAnswer: "Loss of credibility",
  },
  {
    question:
      "Why is it important to demonstrate knowledge of good work habits?",
    answers: [
      "To encourage laziness",
      "To achieve personal and professional growth",
      "To create conflict",
      "To avoid responsibilities",
    ],
    correctAnswer: "To achieve personal and professional growth",
  },
  {
    question: "What is the significance of adhering to one's values in work?",
    answers: [
      "To fit in with everyone",
      "To maintain integrity and authenticity",
      "To follow trends",
      "To avoid challenges",
    ],
    correctAnswer: "To maintain integrity and authenticity",
  },
  {
    question:
      "What can individuals do to ensure a successful entrepreneurial venture?",
    answers: [
      "Avoid planning",
      "Research and prepare thoroughly",
      "Take unnecessary risks",
      "Ignore market trends",
    ],
    correctAnswer: "Research and prepare thoroughly",
  },
  {
    question: "What does hard work lead to, according to Ghanaian proverbs?",
    answers: [
      "Success and prosperity",
      "Exhaustion and failure",
      "Idleness and poverty",
      "Stress and anxiety",
    ],
    correctAnswer: "Success and prosperity",
  },
  {
    question:
      "Which of the following reflects a good understanding of time management?",
    answers: [
      "Procrastinating on tasks",
      "Prioritizing and organizing tasks",
      "Multitasking ineffectively",
      "Ignoring deadlines",
    ],
    correctAnswer: "Prioritizing and organizing tasks",
  },
  {
    question: "What does effective goal setting involve?",
    answers: [
      "Setting unrealistic expectations",
      "Avoiding challenges",
      "Defining clear and attainable objectives",
      "Ignoring personal growth",
    ],
    correctAnswer: "Defining clear and attainable objectives",
  },
  {
    question: "How can social responsibility be incorporated into work?",
    answers: [
      "By ignoring community needs",
      "By engaging in community service and support",
      "By focusing only on profit",
      "By avoiding ethical considerations",
    ],
    correctAnswer: "By engaging in community service and support",
  },
  {
    question:
      "What should be prioritized in order to achieve work-life balance?",
    answers: [
      "Overworking",
      "Neglecting personal time",
      "Setting boundaries and priorities",
      "Ignoring self-care",
    ],
    correctAnswer: "Setting boundaries and priorities",
  },
  {
    question:
      "Why is it essential to evaluate and reflect on work performance?",
    answers: [
      "To ignore feedback",
      "To hinder progress",
      "To identify areas for improvement",
      "To dismiss personal growth",
    ],
    correctAnswer: "To identify areas for improvement",
  },
];

export default questionsData;
