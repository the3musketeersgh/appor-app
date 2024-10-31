const questionsData = [
  {
    question:
      "What is the primary purpose of the three laws of robotics by Isaac Asimov?",
    answers: [
      "To ensure robots obey humans",
      "To protect robots from damage",
      "To safeguard humans from harm by robots",
      "To enhance robot intelligence",
    ],
    correctAnswer: "To safeguard humans from harm by robots",
  },
  {
    question: "Which of these is NOT one of Asimov's Three Laws of Robotics?",
    answers: [
      "A robot must not harm a human or, through inaction, allow a human to come to harm",
      "A robot must obey orders given by humans, unless it conflicts with the first law",
      "A robot must protect itself from harm",
      "A robot must be programmed for entertainment purposes",
    ],
    correctAnswer: "A robot must be programmed for entertainment purposes",
  },
  {
    question: "Which tool could be used to assemble a robot virtually?",
    answers: ["Emulator", "Calculator", "Compiler", "Word Processor"],
    correctAnswer: "Emulator",
  },
  {
    question:
      "What is the main advantage of using robotics software like Webot or EV3?",
    answers: [
      "To increase computer memory",
      "To simulate robotic functions and processes",
      "To code without learning programming",
      "To write reports on robots",
    ],
    correctAnswer: "To simulate robotic functions and processes",
  },
  {
    question:
      "Which programming language is popular for robotics due to its versatility?",
    answers: ["Python", "HTML", "CSS", "Excel"],
    correctAnswer: "Python",
  },
  {
    question: "How does a robotic arm primarily function in manufacturing?",
    answers: [
      "By adjusting to any human command",
      "By repeating programmed actions",
      "By learning through observation",
      "By random movements",
    ],
    correctAnswer: "By repeating programmed actions",
  },
  {
    question: "What role do sensors play in robotics?",
    answers: [
      "They allow robots to make ethical decisions",
      "They provide data about the robot’s environment",
      "They replace human operators",
      "They control robot speed",
    ],
    correctAnswer: "They provide data about the robot’s environment",
  },
  {
    question:
      "Which of these applications uses Artificial Intelligence (AI) for real-time translation?",
    answers: [
      "Google Translate",
      "Microsoft Word",
      "Adobe Photoshop",
      "Windows Media Player",
    ],
    correctAnswer: "Google Translate",
  },
  {
    question: "What is an 'expert system' in Artificial Intelligence?",
    answers: [
      "A system that mimics human intelligence",
      "A computer program that can learn from experience",
      "A system designed to solve complex problems using IF-THEN rules",
      "A chat application",
    ],
    correctAnswer:
      "A system designed to solve complex problems using IF-THEN rules",
  },
  {
    question:
      "Which of the following is an example of a knowledge-based AI system?",
    answers: [
      "Telemedicine system",
      "Spreadsheet software",
      "Photo editor",
      "Email application",
    ],
    correctAnswer: "Telemedicine system",
  },
  {
    question: "Which concept allows AI to recognize objects in photos?",
    answers: [
      "Machine Learning",
      "Quantum Computing",
      "Cloud Computing",
      "Data Mining",
    ],
    correctAnswer: "Machine Learning",
  },
  {
    question:
      "In the context of AI, what does the term 'IF-THEN rule' refer to?",
    answers: [
      "A structure to execute tasks conditionally",
      "A loop that repeats indefinitely",
      "A way to store data in an array",
      "A system to measure the weight of an object",
    ],
    correctAnswer: "A structure to execute tasks conditionally",
  },
  {
    question: "What is a primary benefit of AI in healthcare?",
    answers: [
      "Assisting in the diagnosis and treatment recommendations",
      "Improving image quality in video games",
      "Reducing costs of household appliances",
      "Increasing movie ratings",
    ],
    correctAnswer: "Assisting in the diagnosis and treatment recommendations",
  },
  {
    question: "What is the purpose of Google's Teachable Machine?",
    answers: [
      "To help users learn machine learning through hands-on experiences",
      "To store large amounts of user data",
      "To assist with search engine optimization",
      "To replace programming knowledge",
    ],
    correctAnswer:
      "To help users learn machine learning through hands-on experiences",
  },
  {
    question:
      "Which application uses machine learning to identify objects in photos?",
    answers: [
      "WhatIsIt app",
      "Microsoft Excel",
      "Windows Media Player",
      "Notepad",
    ],
    correctAnswer: "WhatIsIt app",
  },
  {
    question: "What is the purpose of robotics emulators and simulators?",
    answers: [
      "To visualize and test robotic functions virtually",
      "To replace all physical robots",
      "To only teach coding theory",
      "To limit robot capabilities",
    ],
    correctAnswer: "To visualize and test robotic functions virtually",
  },
  {
    question:
      "What is a potential risk associated with artificial intelligence?",
    answers: [
      "Job displacement",
      "Reduced data storage",
      "Increased battery life",
      "Improved internet speed",
    ],
    correctAnswer: "Job displacement",
  },
  {
    question: "Which statement best describes artificial intelligence?",
    answers: [
      "The simulation of human intelligence by machines",
      "A tool for creating physical robots",
      "A platform for website development",
      "A process for solving mathematical equations",
    ],
    correctAnswer: "The simulation of human intelligence by machines",
  },
  {
    question: "What role does a knowledge-based system serve in AI?",
    answers: [
      "Acts as an intelligent advisor",
      "Stores data for future processing",
      "Analyzes images",
      "Formats documents",
    ],
    correctAnswer: "Acts as an intelligent advisor",
  },
  {
    question: "Which AI tool might a doctor use to diagnose patients remotely?",
    answers: [
      "Telemedicine system",
      "Video game",
      "Music player",
      "Social media app",
    ],
    correctAnswer: "Telemedicine system",
  },
  {
    question: "Which of these technologies is NOT typically used in AI?",
    answers: [
      "Genetic Algorithms",
      "Mechanical Processing",
      "Natural Language Processing",
      "Machine Learning",
    ],
    correctAnswer: "Mechanical Processing",
  },
  {
    question: "What does AI aim to replicate in machines?",
    answers: [
      "Human cognitive functions",
      "Physical strength",
      "Memory size",
      "Color perception",
    ],
    correctAnswer: "Human cognitive functions",
  },
  {
    question:
      "What aspect of a robot’s functionality can be controlled by an emulator?",
    answers: [
      "Its motion and reactions to sensors",
      "Its physical appearance",
      "Its manufacturing cost",
      "Its battery life",
    ],
    correctAnswer: "Its motion and reactions to sensors",
  },
  {
    question:
      "Which type of software is commonly used in basic robot programming?",
    answers: ["Scratch", "Microsoft Word", "PowerPoint", "Photoshop"],
    correctAnswer: "Scratch",
  },
  {
    question: "What is a common feature of expert systems in AI?",
    answers: [
      "They use a set of IF-THEN rules to solve problems",
      "They are designed only for entertainment",
      "They can make random decisions",
      "They require no programming knowledge",
    ],
    correctAnswer: "They use a set of IF-THEN rules to solve problems",
  },
  {
    question: "Which application might use AI to understand voice commands?",
    answers: [
      "Virtual assistants",
      "Spreadsheet software",
      "Photo viewer",
      "Database management",
    ],
    correctAnswer: "Virtual assistants",
  },
  {
    question: "What is a common use of AI in image recognition?",
    answers: [
      "Identifying and classifying objects in images",
      "Improving video game graphics",
      "Reducing data storage requirements",
      "Formatting documents",
    ],
    correctAnswer: "Identifying and classifying objects in images",
  },
  {
    question:
      "Which of these fields commonly uses robotics for precision tasks?",
    answers: ["Surgery", "Fashion design", "Teaching", "Book publishing"],
    correctAnswer: "Surgery",
  },
  {
    question: "What is an example of a machine learning application?",
    answers: ["Self-driving car", "Typewriter", "Film camera", "Projector"],
    correctAnswer: "Self-driving car",
  },
  {
    question: "What does the Teachable Machine allow users to do?",
    answers: [
      "Experiment with machine learning concepts",
      "Edit videos easily",
      "Create complex mathematical models",
      "Replace cloud storage",
    ],
    correctAnswer: "Experiment with machine learning concepts",
  },
];

export default questionsData;
