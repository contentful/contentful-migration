const fs = require('fs');
const cardinal = require('cardinal');
const _ = require('lodash');
const chalk = require('chalk');

const getLineWithContext = function (lines, lineNumber, context) {
  // Lines start at 1, arrays at 0
  const line = (lineNumber - 1);

  const firstLine = (line > context) ? (line - context) : 0;
  const lastLine = (line + context) < lines.length ? line + context : lines.length;

  return {
    before: lines.slice(firstLine, line),
    line: lines[line],
    after: lines.slice(line + 1, lastLine + 1)
  };
};

const renderStepsErrors = function (errors) {
  const errorsByFile = _.groupBy(errors, (error) => error.details.step.meta.callsite.file);

  const messages = [];

  for (const file of Object.keys(errorsByFile)) {
    const fileContents = fs.readFileSync(file, 'utf-8');
    const highlightedCode = cardinal.highlight(fileContents, { linenos: true });
    const lines = highlightedCode.split('\n');

    const fileErrorsMessage = chalk`{red Errors in ${file}}\n\n`;
    const errorMessages = errorsByFile[file].map((error) => {
      const callsite = error.details.step.meta.callsite;
      const context = 2;
      const { before, line, after } = getLineWithContext(lines, callsite.line, context);

      const beforeLines = before.map((line) => chalk`${line}\n`).join('');
      const afterLines = after.map((line) => chalk`${line}\n`).join('');
      const highlightedLine = chalk`{bold ${line}}\n`;

      const formattedCode = beforeLines + highlightedLine + afterLines;

      return chalk`{red Line ${callsite.line}:} {bold ${error.message}}\n${formattedCode}`;
    }).join('\n');

    messages.push(`${fileErrorsMessage}${errorMessages}`);
  }

  return messages.join('\n');
};

module.exports = renderStepsErrors;
