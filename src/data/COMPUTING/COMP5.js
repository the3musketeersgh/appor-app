const questionsData = [
  {
    question:
      "What is the primary purpose of the 'Insert Ribbon' in PowerPoint?",
    answers: [
      "To change slide layouts",
      "To add multimedia elements to slides",
      "To save presentations",
      "To track changes in a document",
    ],
    correctAnswer: "To add multimedia elements to slides",
  },
  {
    question:
      "Which feature allows you to add pre-designed images in PowerPoint?",
    answers: ["Clip Art", "Slide Master", "Outline View", "Slide Sorter"],
    correctAnswer: "Clip Art",
  },
  {
    question: "What function does the 'Screenshot' option in PowerPoint serve?",
    answers: [
      "Captures the entire screen and inserts it as an image",
      "Saves the presentation",
      "Prints the presentation",
      "Inserts animations on slides",
    ],
    correctAnswer: "Captures the entire screen and inserts it as an image",
  },
  {
    question: "What feature allows you to apply motion effects between slides?",
    answers: ["Animation", "Transition", "Clip Art", "Outline View"],
    correctAnswer: "Transition",
  },
  {
    question: "How can transitions be used in a PowerPoint presentation?",
    answers: [
      "To add music to a slide",
      "To add effects between slides",
      "To insert text in a slide",
      "To change the color of a slide",
    ],
    correctAnswer: "To add effects between slides",
  },
  {
    question: "Which feature is used to animate objects on a PowerPoint slide?",
    answers: ["Animation", "Transition", "Clip Art", "Page Layout"],
    correctAnswer: "Animation",
  },
  {
    question:
      "What is the role of the 'Insert Ribbon' in adding audio or video?",
    answers: [
      "To create a new slide",
      "To add multimedia like audio and video to slides",
      "To apply slide transitions",
      "To format background colors",
    ],
    correctAnswer: "To add multimedia like audio and video to slides",
  },
  {
    question: "What is the benefit of using transitions in a presentation?",
    answers: [
      "To add a smooth flow between slides",
      "To make text larger",
      "To capture screenshots",
      "To add bullet points",
    ],
    correctAnswer: "To add a smooth flow between slides",
  },
  {
    question: "Which option allows you to add charts in a PowerPoint slide?",
    answers: ["Insert Ribbon", "Design Tab", "Slide Master", "View Tab"],
    correctAnswer: "Insert Ribbon",
  },
  {
    question: "What effect does the 'Animation' tab have on slide content?",
    answers: [
      "It changes text color",
      "It adds movement to objects on the slide",
      "It increases font size",
      "It creates slide layouts",
    ],
    correctAnswer: "It adds movement to objects on the slide",
  },
  {
    question:
      "What can be added to a PowerPoint slide using the 'Insert Ribbon'?",
    answers: [
      "Audio, video, and charts",
      "Only text",
      "Only images",
      "Slide designs",
    ],
    correctAnswer: "Audio, video, and charts",
  },
  {
    question:
      "Which multimedia type is commonly added to enhance a presentation?",
    answers: ["Audio and video", "Footnotes", "Headers", "Margins"],
    correctAnswer: "Audio and video",
  },
  {
    question: "What does the 'Clip Art' feature allow you to insert?",
    answers: ["Screenshots", "Pre-designed images", "Headers", "Slide layouts"],
    correctAnswer: "Pre-designed images",
  },
  {
    question: "Why use animations in a PowerPoint presentation?",
    answers: [
      "To add visual interest to slide elements",
      "To save the presentation",
      "To set the slide background",
      "To organize the slide order",
    ],
    correctAnswer: "To add visual interest to slide elements",
  },
  {
    question: "Where is the option to add charts located in PowerPoint?",
    answers: ["Insert Ribbon", "Design Tab", "Review Tab", "File Tab"],
    correctAnswer: "Insert Ribbon",
  },
  {
    question: "What is the function of transitions in a presentation?",
    answers: [
      "To format text",
      "To add effects between slides",
      "To change text color",
      "To print the slides",
    ],
    correctAnswer: "To add effects between slides",
  },
  {
    question: "Which feature in PowerPoint adds movement to slide content?",
    answers: ["Animation", "Print Preview", "Slide Sorter", "Slide Master"],
    correctAnswer: "Animation",
  },
  {
    question: "How does adding audio to a slide enhance a presentation?",
    answers: [
      "It adds an interactive element",
      "It prints the slide",
      "It changes text style",
      "It saves the presentation",
    ],
    correctAnswer: "It adds an interactive element",
  },
  {
    question: "Which command allows the insertion of tables in PowerPoint?",
    answers: ["Insert Ribbon", "Slide Sorter", "Page Setup", "View Tab"],
    correctAnswer: "Insert Ribbon",
  },
  {
    question: "What is the main use of the 'Transitions' tab in PowerPoint?",
    answers: [
      "To create effects between slides",
      "To change text size",
      "To save slides",
      "To insert images",
    ],
    correctAnswer: "To create effects between slides",
  },
  {
    question: "How does using SmartArt in a presentation help?",
    answers: [
      "It organizes information in visual formats",
      "It increases font size",
      "It saves the presentation",
      "It inserts text only",
    ],
    correctAnswer: "It organizes information in visual formats",
  },
  {
    question:
      "What type of multimedia can be inserted using the Insert Ribbon?",
    answers: [
      "Audio, video, and images",
      "Footnotes",
      "Headers only",
      "Slide backgrounds",
    ],
    correctAnswer: "Audio, video, and images",
  },
  {
    question: "What effect do animations have on slide content?",
    answers: [
      "Adds motion or effects",
      "Adds extra slides",
      "Changes slide colors",
      "Inserts new images",
    ],
    correctAnswer: "Adds motion or effects",
  },
  {
    question: "Where can you insert tables and charts in PowerPoint?",
    answers: ["Insert Ribbon", "Slide Master", "Review Tab", "File Tab"],
    correctAnswer: "Insert Ribbon",
  },
  {
    question: "Why add charts to a PowerPoint presentation?",
    answers: [
      "To display data visually",
      "To add extra slides",
      "To increase word count",
      "To change text color",
    ],
    correctAnswer: "To display data visually",
  },
  {
    question: "What is the purpose of adding SmartArt to slides?",
    answers: [
      "To visually organize information",
      "To insert headers",
      "To add audio",
      "To change text style",
    ],
    correctAnswer: "To visually organize information",
  },
  {
    question:
      "Which feature in PowerPoint allows capturing and inserting screen images?",
    answers: ["Screenshot", "Text Box", "Slide Sorter", "Slide Show"],
    correctAnswer: "Screenshot",
  },
  {
    question: "How can you create movement on a slide in PowerPoint?",
    answers: [
      "By using animations",
      "By changing text color",
      "By inserting clip art",
      "By adding headers",
    ],
    correctAnswer: "By using animations",
  },
  {
    question: "What feature allows adding sound to a slide?",
    answers: ["Audio Insert", "Slide Sorter", "Text Box", "Slide Show"],
    correctAnswer: "Audio Insert",
  },
  {
    question: "Why are transitions useful in presentations?",
    answers: [
      "They smooth transitions between slides",
      "They insert extra slides",
      "They change font styles",
      "They save the presentation automatically",
    ],
    correctAnswer: "They smooth transitions between slides",
  },
];

export default questionsData;
