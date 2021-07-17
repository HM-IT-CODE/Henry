const fs = require("fs");

class JsonJestReporter {
  constructor(globalConfig, options) {
        this._globalConfig = globalConfig;
        this._options = options;
  }

  onRunComplete(contexts, results) {
    const grade = {
        total: results.numTotalTests,
        passed: results.numPassedTests,
        grade: results.numPassedTests / results.numTotalTests,
      }
    fs.writeFileSync(
      this._options.outputFile,
      JSON.stringify(grade)
    );
  }
}

module.exports = JsonJestReporter;
