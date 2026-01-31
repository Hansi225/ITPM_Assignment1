# Swift Translator Test Suite

Automated testing suite for the Swift Translator web application (Singlish to Sinhala conversion) using Playwright.

## Project Overview

This project contains end-to-end tests for [SwiftTranslator.com](https://www.swifttranslator.com/), a web-based tool that converts Singlish (Sinhala written in English characters) to proper Sinhala script.

## Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Playwright** test framework

## Installation

1. Clone or navigate to the project directory:
```bash
cd IT23257122
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers (if not already installed):
```bash
npx playwright install
```

## Running Tests

### Run All Tests
```bash
npx playwright test
```

### Run Specific Test File
```bash
npx playwright test tests/swift-translator-tests.spec.js
```

### Run Tests in Headed Mode (with browser UI)
```bash
npx playwright test --headed
```

### Run Tests with Specific Browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### View Test Report
```bash
npx playwright show-report
```

## Test Structure

### Test Categories

#### 1. Positive Functional Tests (24 test cases)
Tests that verify correct translation functionality:

- **Simple Sentences** - Short phrases and basic sentence structures
- **Compound Sentences** - Multiple clauses with conjunctions
- **Complex Sentences** - Imperative commands and complex structures
- **Questions** - Interrogative forms and question patterns
- **Commands** - Imperative sentence structures
- **Greetings & Responses** - Common polite expressions
- **Tense Variations** - Past, present, and future tense handling
- **Negations** - Negative sentence structures
- **Plural & Pronouns** - Plural forms and pronoun usage
- **Word Combinations** - Multi-word expressions
- **Punctuation** - Handling of various punctuation marks
- **Numbers & Formats** - Currency, time, and date formats
- **Long Text** - Paragraph-style inputs

#### 2. Negative Functional Tests (10 test cases)
Tests that verify handling of edge cases and invalid inputs:

- **Typographical Errors** - Joined words, missing spaces
- **Slang/Informal Language** - Heavy colloquialisms
- **Formatting Issues** - Incorrect spacing, line breaks
- **Ambiguous Inputs** - Context-dependent phrases
- **Punctuation Handling** - Excessive or unusual punctuation
- **Capitalization** - All caps and inconsistent case
- **Special Characters** - Mixed character sets

## Test Configuration

### Timeouts
- Page Load: 2000ms
- After Clear: 1000ms
- Translation: 3000ms
- Between Tests: 2000ms

### Selectors
- **Input Field**: 'Input Your Singlish Text Here.'
- **Output Container**: `.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap`

## Test Data Structure

Each test case includes:
- `tcId`: Unique test case identifier
- `name`: Descriptive test name
- `input`: Singlish input text
- `expected`: Expected Sinhala output
- `category`: Test category classification
- `grammar`: Grammar pattern being tested
- `length`: Input length (S/M/L)

## Known Issues

Based on recent test runs:
1. **Leading/Trailing Spaces** - Some tests fail due to space handling
2. **Timeout Issues** - Complex sentences may timeout
3. **Slang Translation** - Certain slang terms not properly converted
4. **Capitalization** - All-caps input not handled correctly
5. **Word Boundaries** - Joined words without spaces fail to translate

## Project Files

```
IT23257122/
├── tests/
│   ├── swift-translator-tests.spec.js  # Main test suite
│   └── example.spec.js                 # Example test file
├── playwright-report/                   # Test reports
│   └── index.html
├── test-results/                        # Test artifacts
├── playwright.config.js                 # Playwright configuration
├── package.json                         # Project dependencies
└── README.md                            # This file
```

## Test Results

To view the latest test results:
1. Run the tests: `npx playwright test`
2. Open the HTML report: `npx playwright show-report`
3. Or check `playwright-report/index.html` in a browser

## Contributing

When adding new test cases:
1. Follow the existing test data structure
2. Add appropriate `tcId` with proper prefix (Pos_Fun_XXX or Neg_Fun_XXX)
3. Include clear test names and descriptions
4. Categorize tests appropriately
5. Specify grammar patterns and input length

## Technical Details

### Helper Class: TranslatorPage
A page object model class that provides methods for:
- `navigateToSite()` - Navigate to the translator website
- `getInputField()` - Get the input text field
- `getOutputField()` - Get the output display field
- `clearAndWait()` - Clear input and wait
- `typeInput(text)` - Type text into input field
- `waitForOutput()` - Wait for translation to complete
- `getOutputText()` - Retrieve translated text
- `performTranslation(inputText)` - Complete translation workflow

## License

This test suite is for educational/testing purposes.

## Contact

For issues or questions regarding this test suite, please refer to the project documentation.

---

**Last Updated:** January 31, 2026
