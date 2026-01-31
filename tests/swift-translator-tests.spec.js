const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
  positive: [
    // Simple Sentences
    {
      tcId: 'Pos_Fun_001',
      name: 'Convert a short present tense  phrase',
      input: ' poLata gihin dhaenuyi enne',
      expected: ' පොළට ගිහින් දැනුයි එන්නෙ',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_002',
      name: 'Convert complex sentence with condition',
      input: 'edhinedhaa vaeda edhinedhaa nokaLoth repeat venna veevi',
      expected: 'එදිනෙදා වැඩ එදිනෙදා නොකළොත් repeat වෙන්න වේවි',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_003',
      name: 'Convert a common greeting phrase',
      input: 'suBha raathriyak',
      expected: 'සුභ රාත්‍රියක්',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    // Compound Sentences
    {
      tcId: 'Pos_Fun_004',
      name: 'Convert Compound sentence with conjunction',
      input: 'thee bonna oonenam vathura rath venna thiyanna venavaa evita vaedee ikman venavaa.',
      expected: 'තේ බොන්න ඕනෙනම් වතුර රත් වෙන්න තියන්න වෙනවා එවිට වැඩේ ඉක්මන් වෙනවා.',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_005',
      name: 'Convert Interrogative Question form',
      input: 'Api Graduate venne koyi kaaledha?',
      expected: 'අපි Graduate වෙන්නෙ කොයි කාලෙද?',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'S'
    },
    
    // Complex Sentences
    {
      tcId: 'Pos_Fun_006',
      name: 'Convert Imperative command form',
      input: 'wamata harenna',
      expected: 'වමට හැරෙන්න',
      category: 'Daily language usage',
      grammar: 'Imperative Commands',
      length: 'S'
    },
    
    // Questions
    {
      tcId: 'Pos_Fun_007',
      name: 'Convert positive sentence',
      input: 'mama A/L ihaLinma samath venavaa',
      expected: 'මම A/L ඉහළින්ම සමත් වෙනවා ',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_008',
      name: 'Convert negative sentence',
      input: 'thaaththaa raeeta bath kanne naehae',
      expected: 'තාත්තා රෑට බත් කන්නෙ නැහැ',
      category: 'Daily language usage',
      grammar: 'Negation',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_009',
      name: 'Convert polite request',
      input: 'karuNaakara mata samaava dhenna',
      expected: 'කරුණාකර මට සමාව දෙන්න',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    // Commands
    {
      tcId: 'Pos_Fun_010',
      name: 'Convert informal phrasing',
      input: 'uBA heena moodayi',
      expected: 'උඹ හේන මෝඩයි',
      category: 'Daily language usage',
      grammar: 'Phrase pattern',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_011',
      name: 'Convert Multi-word expression',
      input: 'chuttak inna',
      expected: 'චුට්ටක් ඉන්න',
      category: 'Greeting / request / response',
      grammar: 'Word combination',
      length: 'S'
    },
    
    // Greetings and Responses
    {
      tcId: 'Pos_Fun_012',
      name: 'Convert repeated word for emphasis',
      input: 'yamu yamuu',
      expected: 'සුබ උදෑසනක්',
      category: 'යමු යමූ',
      grammar: 'phrase pattern',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_013',
      name: 'Convert past tense sentense',
      input: 'mama iiyee dhavasama nidhaa gaththaa',
      expected: 'මම ඊයේ දවසම නිදා ගත්තා',
      category: 'Greeting / request / response',
      grammar: 'past sentence',
      length: 'S'
    },
    
    // Tense Variations
    {
      tcId: 'Pos_Fun_014',
      name: 'Convert past tense sentense',
      input: 'heta panthi thiyanavaa',
      expected: 'හෙට පන්ති තියනවා',
      category: 'Daily language usage',
      grammar: 'Past tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_015',
      name: 'Convert sentense with plural pronouns',
      input: 'Api mal kadamu',
      expected: 'අපි මල් කඩමු',
      category: 'Daily language usage',
      grammar: 'Plural form',
      length: 'S'
    },
    
    // Negations
    {
      tcId: 'Pos_Fun_016',
      name: 'Convert sentense with English brand terms ',
      input: 'methanata WIfi signal naehae',
      expected: 'මෙතනට WIfi සිග්නල් නැහැ',
      category: 'Daily language usage',
      grammar: 'Common English words',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_017',
      name: 'Convert sentense with place names',
      input: 'ovun trincomalee trip ekak giyaa',
      expected: 'ඔවුන් trincomalee trip එකක් ගියා',
      category: 'Daily language usage',
      grammar: 'Names/places',
      length: 'S'
    },
    
    // Plural and Pronouns
    {
      tcId: 'Pos_Fun_018',
      name: 'Plural pronoun usage',
      input: 'ohuta SMS karanna puLUvan',
      expected: 'ඔහුට SMS කරන්න පුළුවන්',
      category: 'Daily language usage',
      grammar: 'Plural form',
      length: 'S'
    },
    
    // Word Combinations
    {
      tcId: 'Pos_Fun_019',
      name: 'Convert sentense with punctuation',
      input: 'ahoo dheviyanii!!',
      expected: 'අහෝ දෙවියනී!!',
      category: 'Word combination / phrase pattern',
      grammar: 'Punctuation',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_020',
      name: 'Convert sentense with currency',
      input: 'mehi mila Rs.1000yi',
      expected: 'මෙහි මිල Rs.1000යි',
      category: 'Daily usage',
      grammar: 'Currency',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_021',
      name: 'Convert sentense with time format',
      input: 'dhaen velaava raee 11.30yi',
      expected: 'දැන් වෙලාව රෑ 11.30යි',
      category: 'Daily usage',
      grammar: 'Past tense',
      length: 'S'
    },
    
    // Punctuation
    {
      tcId: 'Pos_Fun_022',
      name: 'Convert sentense with multiple phrases',
      input: 'magee         nama          Erandhi',
      expected: 'මගේ         නම          එරන්දි',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'M'
    },
    
    // Numbers and Formats
    {
      tcId: 'Pos_Fun_023',
      name: 'Convert long paragraph style inputs',
      input: 'dheeshapaalana haa jaathika puvath rajayee vigaNakaaDhipathi thanathura saDHAhaa janaaDhipathivarayaa visin nirdheesha karana ladha nam aaNdukrama vYAvasThaa saBhaava vetha adha (30) dhinayee yomukiriimata katayuthu kara aethi bava pravaahana haa mahaa maarga amaathYA bimal rathnaayaka mahathaa pavasayi. hisva pavathina vigaNakaaDhipathi thanathura kadinamin piraviima saDHAhaa janaaDhipathivarayaagee nirdheesha mesee yomukara aethi athara, ee sambanDhayen vYAvasThaa saBhaava heta raesvii saakachChaa kiriimata niyamithaya.',
      expected: 'දේශපාලන හා ජාතික පුවත් රජයේ විගණකාධිපති තනතුර සඳහා ජනාධිපතිවරයා විසින් නිර්දේශ කරන ලද නම් ආණ්ඩුක්‍රම ව්‍යවස්ථා සභාව වෙත අද (30) දිනයේ යොමුකිරීමට කටයුතු කර ඇති බව ප්‍රවාහන හා මහා මාර්ග අමාත්‍ය බිමල් රත්නායක මහතා පවසයි. හිස්ව පවතින විගණකාධිපති තනතුර කඩිනමින් පිරවීම සඳහා ජනාධිපතිවරයාගේ නිර්දේශ මෙසේ යොමුකර ඇති අතර, ඒ සම්බන්ධයෙන් ව්‍යවස්ථා සභාව හෙට රැස්වී සාකච්ඡා කිරීමට නියමිතය.',
      category: 'daily usage',
      grammar: 'Formatting',
      length: 'L'
    },
    
    // Medium Length
    {
      tcId: 'Pos_Fun_024',
      name: 'Convert sentense with Dates format',
      input: 'adha janavaari 30 vaenidhaa',
      expected: 'අද ජනවාරි 30 වැනිදා',
      category: 'Daily language usage',
      grammar: 'Dates',
      length: 'S'
    }
  ],
  
  negative: [
    {
      tcId: 'Neg_Fun_001',
      name: 'Joined words without spaces fail conversion',
      input: 'Apipaasalyamu',
      expected: 'අපි පාසල් යමු',
      category: 'Typographical error handling',
      grammar: 'compound sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_002',
      name: 'Completely joined medium sentence fails',
      input: 'matabadagini',
      expected: 'මට බඩගිනි',
      category: 'Typographical error handling',
      grammar: 'Daily usage',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_003',
      name: 'Mixed slang with heavy informal phrasing',
      input: 'adoo ubata mooldha ban',
      expected: 'අඩෝ උබට මෝල්ද බං',
      category: 'Slang/Informal language',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_004',
      name: 'Heavy slang expression with colloquialisms',
      input: 'appatasiri, rotiya pichchunaa bn',
      expected: 'අප්පටසිරි, රොටිය පිච්චුනා බං',
      category: 'Slang/Informal language',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_005',
      name: 'Incorrect word boundary in complex sentence',
      input: 'oyaayanavanam mamaenne naehae',
      expected: 'ඔයා යනවනම් මම එන්නෙ නැහැ',
      category: 'Formatting/ spaces/line breaks',
      grammar: 'Simple sentence',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_006',
      name: 'Ambiguous multi-word phrase without context',
      input: 'ekaeka',
      expected: 'එක එක',
      category: 'formatting/ spaces/line breaks',
      grammar: 'daily usage',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_007',
      name: 'Excessive punctuation marks',
      input: 'kohomadha???!!!',
      expected: 'කොහොමද???!!!',
      category: 'punctuation handling',
      grammar: 'daily usage',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_008',
      name: 'Line breaks in middle of sentence',
      input: 'mama gedhara yanavaa oyaa enavadha?',
      expected: 'මම ගෙදර යනවා ඔයා එනවද?',
      category: 'formatting/ spaces/line breaks',
      grammar: 'daily usage',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_009',
      name: 'Inconsistent capitalization in Singlish',
      input: 'MAMA GEDHARA YANAVAA',
      expected: 'මම ගෙදර යනවා',
      category: 'Typographical error handling',
      grammar: 'daily usage',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_010',
      name: 'Special characters embedded in text',
      input: 'MAMමම ගෙදර යනවා',
      category: 'Special character handling',
      grammar: 'daily usage',
      length: 'S'
    }
  ],
  
 
};

// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test (run only if TEST_DATA.ui is defined)
  if (TEST_DATA.ui) {
    test.describe('UI Functionality Tests', () => {
      test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
        const translator = new TranslatorPage(page);
        const input = await translator.getInputField();
        const output = await translator.getOutputField();

        await translator.clearAndWait();
        
        // Type partial input
        await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
        
        // Wait for partial output
        await page.waitForTimeout(1500);
        
        // Verify partial translation appears
        let outputText = await output.textContent();
        expect(outputText.trim().length).toBeGreaterThan(0);
        
        // Complete typing
        await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
        
        // Wait for full translation
        await translator.waitForOutput();
        
        // Verify full translation
        outputText = await translator.getOutputText();
        expect(outputText).toBe(TEST_DATA.ui.expectedFull);
        
        await page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    });
  }
});
