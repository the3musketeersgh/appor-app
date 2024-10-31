const questionsData = [
  {
    question:
      "What is one feature expected in the next generation of computers?",
    answers: [
      "Higher power consumption",
      "Decreased processing speed",
      "Enhanced processing power",
      "Reduced memory capacity",
    ],
    correctAnswer: "Enhanced processing power",
  },
  {
    question: "What distinguishes Google’s quantum computer, Sycamore?",
    answers: [
      "It uses traditional binary processing",
      "It has minimal storage capacity",
      "It is faster than conventional supercomputers",
      "It operates without electricity",
    ],
    correctAnswer: "It is faster than conventional supercomputers",
  },
  {
    question: "Which technology is used in perceptual computing?",
    answers: [
      "Traditional keyboard and mouse",
      "Touchscreen input only",
      "Voice, gesture, and facial recognition",
      "Mechanical buttons",
    ],
    correctAnswer: "Voice, gesture, and facial recognition",
  },
  {
    question: "What is an example of a wearable display?",
    answers: [
      "Laptop screen",
      "Google Glass",
      "Smartphone display",
      "Desktop monitor",
    ],
    correctAnswer: "Google Glass",
  },
  {
    question: "Which device is known as an E-Reader?",
    answers: ["Tablet", "Google Glass", "Kindle", "Smartwatch"],
    correctAnswer: "Kindle",
  },
  {
    question: "What is the primary function of an output device?",
    answers: [
      "To input data",
      "To process data",
      "To display or present information",
      "To store data",
    ],
    correctAnswer: "To display or present information",
  },
  {
    question: "What is a primary benefit of cloud storage?",
    answers: [
      "Data is stored on a local device",
      "Limited accessibility",
      "Data can be accessed from anywhere with internet",
      "It does not require internet access",
    ],
    correctAnswer: "Data can be accessed from anywhere with internet",
  },
  {
    question: "Which of these is an example of cloud storage?",
    answers: ["Hard drive", "USB stick", "Google Drive", "CD-ROM"],
    correctAnswer: "Google Drive",
  },
  {
    question: "What is a smart card used for?",
    answers: [
      "Viewing videos",
      "Data storage and identification",
      "Increasing internet speed",
      "Printing documents",
    ],
    correctAnswer: "Data storage and identification",
  },
  {
    question: "Which of these is a type of holographic storage?",
    answers: [
      "Cloud storage",
      "Magnetic tape storage",
      "Optical storage using 3D data",
      "Flash drive storage",
    ],
    correctAnswer: "Optical storage using 3D data",
  },
  {
    question: "What is a home server primarily used for?",
    answers: [
      "Gaming",
      "Streaming and data storage at home",
      "Basic calculations",
      "Social media access",
    ],
    correctAnswer: "Streaming and data storage at home",
  },
  {
    question: "Which is NOT a benefit of cloud storage?",
    answers: [
      "Data access from multiple devices",
      "Reduces physical storage needs",
      "Dependence on internet",
      "Improves local hard drive speed",
    ],
    correctAnswer: "Improves local hard drive speed",
  },
  {
    question: "How can you personalize a desktop computer?",
    answers: [
      "Only by changing the wallpaper",
      "By changing icons and mouse pointers",
      "By removing the operating system",
      "By uninstalling all apps",
    ],
    correctAnswer: "By changing icons and mouse pointers",
  },
  {
    question: "What is a device driver?",
    answers: [
      "Software for running applications",
      "Hardware to store data",
      "Software that allows hardware to communicate with the computer",
      "Device that powers the computer",
    ],
    correctAnswer:
      "Software that allows hardware to communicate with the computer",
  },
  {
    question: "What is plug-and-play technology?",
    answers: [
      "Automatic recognition and setup of devices",
      "A method for storing data",
      "A feature to play games",
      "A software update tool",
    ],
    correctAnswer: "Automatic recognition and setup of devices",
  },
  {
    question: "How would you update a driver on a computer?",
    answers: [
      "Delete and reinstall the operating system",
      "Access the device manager and install updates",
      "Restart the computer",
      "Format the hard drive",
    ],
    correctAnswer: "Access the device manager and install updates",
  },
  {
    question:
      "What feature of quantum computers allows them to process faster?",
    answers: [
      "Use of binary bits",
      "Storage in a cloud environment",
      "Use of quantum bits (qubits)",
      "Lower power consumption",
    ],
    correctAnswer: "Use of quantum bits (qubits)",
  },
  {
    question: "Which of these is considered an output device?",
    answers: ["Mouse", "Keyboard", "Printer", "Scanner"],
    correctAnswer: "Printer",
  },
  {
    question: "What is E-Paper primarily used for?",
    answers: [
      "As a material for digital screens that mimics paper",
      "To print documents",
      "To send emails",
      "As a part of computer hardware",
    ],
    correctAnswer: "As a material for digital screens that mimics paper",
  },
  {
    question: "Which of the following is NOT a file management technique?",
    answers: [
      "Installing drivers",
      "Creating folders",
      "Deleting files",
      "Organizing files by name",
    ],
    correctAnswer: "Installing drivers",
  },
  {
    question: "Which of these is an example of perceptual computing?",
    answers: [
      "Voice recognition",
      "Keyboard typing",
      "USB storage",
      "Mouse clicking",
    ],
    correctAnswer: "Voice recognition",
  },
  {
    question: "What is the purpose of cloud storage?",
    answers: [
      "To store data online",
      "To play games",
      "To increase processing speed",
      "To replace physical memory in the computer",
    ],
    correctAnswer: "To store data online",
  },
  {
    question: "Which is NOT an example of an output device?",
    answers: ["Projector", "Monitor", "Keyboard", "Printer"],
    correctAnswer: "Keyboard",
  },
  {
    question: "How do drivers help in computer functionality?",
    answers: [
      "They store data",
      "They allow hardware to interact with the operating system",
      "They increase processing speed",
      "They replace memory components",
    ],
    correctAnswer: "They allow hardware to interact with the operating system",
  },
  {
    question: "What is one advantage of using wearable displays?",
    answers: [
      "They replace computer processors",
      "They allow users to view information hands-free",
      "They are mainly used for data storage",
      "They provide internet connection",
    ],
    correctAnswer: "They allow users to view information hands-free",
  },
  {
    question: "What does file management help with?",
    answers: [
      "Organizing and locating files",
      "Boosting computer speed",
      "Updating applications",
      "Increasing internet speed",
    ],
    correctAnswer: "Organizing and locating files",
  },
  {
    question: "Which technology is associated with perceptual computing?",
    answers: [
      "Touchscreen interaction",
      "Quantum processing",
      "Voice and gesture control",
      "Binary coding",
    ],
    correctAnswer: "Voice and gesture control",
  },
  {
    question: "What is an example of network storage?",
    answers: [
      "External hard drive",
      "USB flash drive",
      "Shared network drive",
      "Local computer files",
    ],
    correctAnswer: "Shared network drive",
  },
  {
    question: "What does E-Reader technology primarily offer?",
    answers: [
      "Digital reading experience",
      "Data storage",
      "Voice commands",
      "Remote file access",
    ],
    correctAnswer: "Digital reading experience",
  },
  {
    question: "What is a home server commonly used for?",
    answers: [
      "Storing and streaming media files",
      "Running social media apps",
      "Increasing CPU speed",
      "Playing video games",
    ],
    correctAnswer: "Storing and streaming media files",
  },
  {
    question: "Which of these is an advantage of cloud storage?",
    answers: [
      "Limited accessibility",
      "Accessible only on one device",
      "Data access from multiple devices",
      "Increased file security without backup",
    ],
    correctAnswer: "Data access from multiple devices",
  },
  {
    question: "What is a smart card?",
    answers: [
      "A device for digital payment and identity",
      "A device for increasing storage space",
      "An output device",
      "A data backup solution",
    ],
    correctAnswer: "A device for digital payment and identity",
  },
  {
    question: "What type of display technology is used in Kindle?",
    answers: ["E-Paper", "LCD", "CRT", "LED"],
    correctAnswer: "E-Paper",
  },
  {
    question: "What is an output device used for?",
    answers: [
      "Data entry",
      "Processing data",
      "Displaying results",
      "Storing data",
    ],
    correctAnswer: "Displaying results",
  },
];

export default questionsData;
