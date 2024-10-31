const questionsData = [
  {
    question: "What is e-commerce?",
    answers: [
      "Buying and selling goods and services online",
      "A network of educational resources",
      "An online training platform",
      "A secure network for government communication",
    ],
    correctAnswer: "Buying and selling goods and services online",
  },
  {
    question:
      "Which of the following is an example of a cashless payment method?",
    answers: ["Bitcoin", "Cash", "Cheque", "Money order"],
    correctAnswer: "Bitcoin",
  },
  {
    question: "What does QR stand for in QR code payment systems?",
    answers: [
      "Quick Response",
      "Quick Receipt",
      "Quality Rating",
      "Quick Register",
    ],
    correctAnswer: "Quick Response",
  },
  {
    question: "Which of these is a common online banking service?",
    answers: [
      "Mobile money",
      "Physical banking",
      "Credit union",
      "Traditional ATM only",
    ],
    correctAnswer: "Mobile money",
  },
  {
    question: "Which payment option is digital and not physical?",
    answers: ["Bitcoin", "Cheque", "Credit card", "Cash"],
    correctAnswer: "Bitcoin",
  },
  {
    question: "What is eLearning?",
    answers: [
      "Learning through electronic resources",
      "Traditional classroom learning",
      "Learning through physical textbooks",
      "Learning in groups in person",
    ],
    correctAnswer: "Learning through electronic resources",
  },
  {
    question: "Which of the following is a benefit of eLearning?",
    answers: [
      "Accessibility from any location",
      "Lack of access to information",
      "Limited study resources",
      "Strict learning schedules",
    ],
    correctAnswer: "Accessibility from any location",
  },
  {
    question: "Which is a common tool for collaboration in eLearning?",
    answers: ["Google Docs", "Calculator", "Notepad", "Windows Media Player"],
    correctAnswer: "Google Docs",
  },
  {
    question: "Which of these is an advantage of social media?",
    answers: [
      "Enables global communication",
      "Guarantees complete privacy",
      "Prevents online risks",
      "Is only accessible to professionals",
    ],
    correctAnswer: "Enables global communication",
  },
  {
    question: "Which of the following is a risk associated with social media?",
    answers: [
      "Cyberbullying",
      "Improved communication",
      "Learning resources",
      "Job opportunities",
    ],
    correctAnswer: "Cyberbullying",
  },
  {
    question: "What is the 'reply all' feature in emails used for?",
    answers: [
      "To respond to everyone included in the email thread",
      "To forward the email",
      "To delete the email",
      "To add an attachment",
    ],
    correctAnswer: "To respond to everyone included in the email thread",
  },
  {
    question: "What is 'cyberbullying'?",
    answers: [
      "Bullying others using digital platforms",
      "A method to hack into computers",
      "A legal way to criticize online",
      "Tracking someone’s online activity",
    ],
    correctAnswer: "Bullying others using digital platforms",
  },
  {
    question: "What is a 'digital footprint'?",
    answers: [
      "A record of your online activities",
      "A physical print of digital data",
      "An email signature",
      "A digital photo",
    ],
    correctAnswer: "A record of your online activities",
  },
  {
    question: "Which of the following is an example of cyberstalking?",
    answers: [
      "Repeatedly tracking someone's online activities",
      "Posting a public comment",
      "Using social media responsibly",
      "Sending a friend request",
    ],
    correctAnswer: "Repeatedly tracking someone's online activities",
  },
  {
    question: "What is the main effect of cyberbullying on individuals?",
    answers: [
      "Emotional distress",
      "Physical harm",
      "Financial loss",
      "Increased popularity",
    ],
    correctAnswer: "Emotional distress",
  },
  {
    question: "What does 'phishing' refer to in cybersecurity?",
    answers: [
      "Tricking people into revealing personal information",
      "Blocking a network",
      "Tracking online activity",
      "Encrypting files for protection",
    ],
    correctAnswer: "Tricking people into revealing personal information",
  },
  {
    question: "What is a 'Denial of Service' (DoS) attack?",
    answers: [
      "Overloading a server to prevent access",
      "Securing a network from threats",
      "Encrypting sensitive information",
      "Sharing files safely",
    ],
    correctAnswer: "Overloading a server to prevent access",
  },
  {
    question: "What does a 'keylogger' do?",
    answers: [
      "Records keystrokes to capture sensitive data",
      "Blocks unwanted websites",
      "Sends automated emails",
      "Improves typing speed",
    ],
    correctAnswer: "Records keystrokes to capture sensitive data",
  },
  {
    question: "Which hacking technique intercepts data as it’s transmitted?",
    answers: ["Eavesdropping", "Phishing", "Spam", "Trojan horse"],
    correctAnswer: "Eavesdropping",
  },
  {
    question: "What is the purpose of a digital footprint?",
    answers: [
      "To track user behavior on the internet",
      "To hide user information",
      "To enable network access",
      "To share personal files",
    ],
    correctAnswer: "To track user behavior on the internet",
  },
  {
    question: "Which of the following is true about a 'digital shadow'?",
    answers: [
      "It is information about a person available online, often unintentionally",
      "It is a type of online advertisement",
      "It is a tool for data encryption",
      "It is a part of the hardware",
    ],
    correctAnswer:
      "It is information about a person available online, often unintentionally",
  },
  {
    question: "Which of these is an example of an e-commerce platform?",
    answers: ["Amazon", "Excel", "Microsoft Word", "PowerPoint"],
    correctAnswer: "Amazon",
  },
  {
    question: "Which of these is a collaborative eLearning platform?",
    answers: ["Google Docs", "Photoshop", "File Explorer", "Media Player"],
    correctAnswer: "Google Docs",
  },
  {
    question: "What can be a disadvantage of eLearning?",
    answers: [
      "Requires internet access",
      "Unlimited learning resources",
      "Easy access for all",
      "High interactivity",
    ],
    correctAnswer: "Requires internet access",
  },
  {
    question: "Which of these is a function of social media?",
    answers: [
      "Communication and content sharing",
      "Program development",
      "System administration",
      "File encryption",
    ],
    correctAnswer: "Communication and content sharing",
  },
  {
    question: "Which hacking technique is known for sending fake emails?",
    answers: ["Phishing", "Trojan", "Firewall", "Antivirus"],
    correctAnswer: "Phishing",
  },
  {
    question: "What is the primary use of a QR code in e-commerce?",
    answers: [
      "Enables quick payments",
      "Enhances picture quality",
      "Displays digital advertisements",
      "Enables file sharing",
    ],
    correctAnswer: "Enables quick payments",
  },
  {
    question:
      "What is the risk of sharing personal information on social media?",
    answers: [
      "Loss of privacy",
      "Better connectivity",
      "More advertisements",
      "Faster internet speed",
    ],
    correctAnswer: "Loss of privacy",
  },
  {
    question:
      "What type of network attack involves intercepting communications?",
    answers: ["Eavesdropping", "Phishing", "DoS", "Spam"],
    correctAnswer: "Eavesdropping",
  },
  {
    question: "Which of these best describes cyberstalking?",
    answers: [
      "Harassing or threatening someone online",
      "Positive online reviews",
      "Blocking unwanted websites",
      "Sending legal documents online",
    ],
    correctAnswer: "Harassing or threatening someone online",
  },
];

export default questionsData;
