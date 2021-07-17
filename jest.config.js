module.exports = {
  testURL: 'http://localhost',
  reporters: [
    "default",
    [
      "<rootDir>/jsonReport.js",
      { outputFile: "./grade.json"  },
    ],
  ],
};
