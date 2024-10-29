const questionsData = [
  {
    question: "In spreadsheet terminology, what is a 'field'?",
    answers: [
      "A column in a table",
      "A row in a table",
      "A cell in a table",
      "A worksheet",
    ],
    correctAnswer: "A column in a table",
  },
  {
    question: "What is a 'record' in a data table?",
    answers: ["A row of data", "A column of data", "A cell", "A formula"],
    correctAnswer: "A row of data",
  },
  {
    question: "What is the primary purpose of data validation in spreadsheets?",
    answers: [
      "To ensure data accuracy",
      "To format data",
      "To create charts",
      "To sort data",
    ],
    correctAnswer: "To ensure data accuracy",
  },
  {
    question:
      "What type of list is used to limit data entry options in a cell?",
    answers: ["Validation list", "Chart", "Macro", "Formula"],
    correctAnswer: "Validation list",
  },
  {
    question: "What is the effect of sorting data in ascending order?",
    answers: [
      "Arranges data from A to Z or smallest to largest",
      "Arranges data from Z to A or largest to smallest",
      "Creates a pivot table",
      "Applies a filter",
    ],
    correctAnswer: "Arranges data from A to Z or smallest to largest",
  },
  {
    question: "In data filtering, what does the filter tool allow you to do?",
    answers: [
      "Display only selected data based on criteria",
      "Sort data alphabetically",
      "Apply formatting to cells",
      "Run a macro",
    ],
    correctAnswer: "Display only selected data based on criteria",
  },
  {
    question:
      "Which feature is used to create structured data tables in Excel?",
    answers: [
      "Insert Table feature",
      "Sort tool",
      "Macro recorder",
      "Formula bar",
    ],
    correctAnswer: "Insert Table feature",
  },
  {
    question: "What is the purpose of using themes in a spreadsheet?",
    answers: [
      "To apply a consistent visual style",
      "To add validation",
      "To filter data",
      "To run calculations",
    ],
    correctAnswer: "To apply a consistent visual style",
  },
  {
    question: "What is a template in spreadsheet software?",
    answers: [
      "A pre-designed spreadsheet layout",
      "A function for sorting",
      "A list of numbers",
      "A data filter",
    ],
    correctAnswer: "A pre-designed spreadsheet layout",
  },
  {
    question: "What is a macro used for in a spreadsheet?",
    answers: [
      "Automating repetitive tasks",
      "Sorting data alphabetically",
      "Inserting new rows",
      "Creating charts",
    ],
    correctAnswer: "Automating repetitive tasks",
  },
  {
    question: "What does a pivot table allow you to do with data?",
    answers: [
      "Summarize and analyze data",
      "Enter text data only",
      "Run a macro",
      "Sort data in alphabetical order",
    ],
    correctAnswer: "Summarize and analyze data",
  },
  {
    question: "In a pivot table, what is the function of the filter feature?",
    answers: [
      "To show only specific data based on criteria",
      "To apply a theme",
      "To format cells",
      "To change data validation",
    ],
    correctAnswer: "To show only specific data based on criteria",
  },
  {
    question:
      "What type of chart would you insert to compare males and females in a class?",
    answers: ["Pivot chart", "Scatter plot", "Histogram", "Line chart"],
    correctAnswer: "Pivot chart",
  },
  {
    question:
      "What type of document would you create from a template in Excel?",
    answers: ["Budget report", "Presentation", "Web page", "Database"],
    correctAnswer: "Budget report",
  },
  {
    question: "What does a structured table in Excel allow you to do?",
    answers: [
      "Organize data in columns with headers",
      "Run advanced formulas",
      "Add animations",
      "Create a pivot chart",
    ],
    correctAnswer: "Organize data in columns with headers",
  },
  {
    question: "What is a key difference between a template and a macro?",
    answers: [
      "A template provides a layout, while a macro automates tasks",
      "A macro provides a layout, while a template automates tasks",
      "Both are used for data validation",
      "Both are used for sorting data",
    ],
    correctAnswer:
      "A template provides a layout, while a macro automates tasks",
  },
  {
    question: "What is the main purpose of using styles in Excel?",
    answers: [
      "To format cells quickly and consistently",
      "To sort data",
      "To create pivot tables",
      "To add validation rules",
    ],
    correctAnswer: "To format cells quickly and consistently",
  },
  {
    question: "Which feature would you use to show a summarized view of data?",
    answers: ["Pivot table", "Data filter", "Validation rule", "Cell style"],
    correctAnswer: "Pivot table",
  },
  {
    question: "What is the main purpose of using a pivot chart?",
    answers: [
      "To visually represent summarized data",
      "To validate data",
      "To create a drop-down list",
      "To sort data",
    ],
    correctAnswer: "To visually represent summarized data",
  },
  {
    question: "In data validation, what does a drop-down list provide?",
    answers: [
      "Preset options for data entry",
      "Sort order for columns",
      "Color scheme for charts",
      "Data formatting options",
    ],
    correctAnswer: "Preset options for data entry",
  },
  {
    question: "What is a common use for macros in Excel?",
    answers: [
      "Automating repetitive data entry tasks",
      "Creating pivot tables",
      "Sorting data alphabetically",
      "Adding validation lists",
    ],
    correctAnswer: "Automating repetitive data entry tasks",
  },
  {
    question:
      "What feature in Excel allows you to display data in a specific order?",
    answers: ["Sort tool", "Macro recorder", "Data validation", "Template"],
    correctAnswer: "Sort tool",
  },
  {
    question: "What does the 'Filter' tool do in Excel?",
    answers: [
      "Displays only selected data",
      "Sorts data",
      "Formats text",
      "Changes cell color",
    ],
    correctAnswer: "Displays only selected data",
  },
  {
    question: "Why is a structured table useful in Excel?",
    answers: [
      "It organizes data with specific fields and records",
      "It runs calculations automatically",
      "It creates a theme for the document",
      "It prevents data entry errors",
    ],
    correctAnswer: "It organizes data with specific fields and records",
  },
  {
    question: "What is the purpose of using themes in a spreadsheet?",
    answers: [
      "To apply a consistent visual design across sheets",
      "To add more data",
      "To create pivot tables",
      "To automate tasks",
    ],
    correctAnswer: "To apply a consistent visual design across sheets",
  },
  {
    question: "In which scenario would you use a validation rule?",
    answers: [
      "To restrict data entry to specific formats",
      "To create a new worksheet",
      "To insert a chart",
      "To open a template",
    ],
    correctAnswer: "To restrict data entry to specific formats",
  },
  {
    question: "Why are pivot tables helpful in data analysis?",
    answers: [
      "They allow for easy data summarization and analysis",
      "They change the theme of the document",
      "They automate repetitive tasks",
      "They create validation lists",
    ],
    correctAnswer: "They allow for easy data summarization and analysis",
  },
  {
    question: "What is an advantage of using templates?",
    answers: [
      "Templates save time by providing preformatted layouts",
      "Templates allow for cell color changes",
      "Templates are used for sorting data",
      "Templates provide validation options",
    ],
    correctAnswer: "Templates save time by providing preformatted layouts",
  },
  {
    question: "What does 'sorting data in descending order' mean?",
    answers: [
      "Arranging data from Z to A or largest to smallest",
      "Arranging data from A to Z or smallest to largest",
      "Filtering data by specific criteria",
      "Applying a template to the data",
    ],
    correctAnswer: "Arranging data from Z to A or largest to smallest",
  },
  {
    question:
      "What type of chart is best for showing a summary of males and females in a dataset?",
    answers: ["Pivot chart", "Bar chart", "Line chart", "Scatter plot"],
    correctAnswer: "Pivot chart",
  },
];

export default questionsData;
