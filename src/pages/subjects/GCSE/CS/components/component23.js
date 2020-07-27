import React from "react";

const Component23 = () => {
  return (
    <div id="comp2_3" className="topic">
      <h4>Component 2.3 - Producing robust programs</h4>

      <div className="key-words">
        <p className="heading">KEY WORDS</p>
        <ul>
          <li><b>Final testing</b> - testing applied to what is believed to be the finished program</li>
          <li><b>Iterative testing</b> - testing that takes place continually as a program is developed and improved</li>
          <li><b>Indentation</b> - technique that makes code more readable, especially with nested structures (iteration & selection)</li>
          <li><b>Logic error</b> - problem that occurs due to incorrect algorithm design</li>
          <li><b>Syntax error</b> - problem that occurs due to correct spelling or code structure</li>
        </ul>
      </div>

      <p className="heading">Defensive design</p>
      <ul>
        <li>Helps to ensure programs function as intended</li>
        <ul>
          <li>Programs should never break or produce errors – almost impossible to achieve (programs constantly require updates & patches)</li>
        </ul>

        <li>Programmers try to protect their programs</li>
        <ul>
          <li>Anticipate how users will misuse their code</li>
          <li>Ensure code is well-maintained (comments & indentation)</li>
          <li>Reduce errors through testing</li>
        </ul>

        <li><b>Planning for contingencies/anticipating misuse</b></li>
        <ul>
          <li>A contigency plan, plans what to do when errors occur e.g. limiting log on attempts</li>
        </ul>

        <li><b>Input sanitation/validation</b></li>
        <ul>
          <li>Easiest way to misuse a program is inputting data incorrectly (intentionally or by accident)</li>
          <li><b>Sanitation </b> - removing unwanted characters before input is used</li>
          <ul>
            <li>E.g. removing white space before or after a string – ‘   Hello    ’ -&gt; ‘Hello’</li>
            <li>Or removing extra characters – ‘3243sa2’ -&gt;  ‘32432’</li>
          </ul>

          <li><b>Validation </b> - checking if inputs meet certain requirements before it is used e.g. an email requires an ‘@’ & suitable ending e.g. ‘.com’ </li>
          <ul>
            <li>Range check – input within specific range</li>
            <li>Presence check – ensure input isn’t blank</li>
            <li>Format check – cthe data must be in the correct format, such as entering a date in the format DD/MM/YYYY.</li>
            <li>Length check – check input isn’t too long or short</li>
            <li>Type check - the data must be of a specified data type, such as an integer when specifying a quantity</li>
            <li>Look-up table – check if input is one of the accepted values</li>
            <li>Check digit – checks numerical data has been entered correctly</li>
          </ul>

          <li>Data verification - double checking that data has been inputted correctly - e.g. requiring 2 passwords that match</li>


          <li>Programs should use a mixture of sanitisation and validation before entering an input into a program – to ensure it is in an acceptable format</li>

        </ul>

        <li><b>Authentication</b></li>
        <ul>
          <li>Confirming the identity of a user before they are permitted to access certain data or features</li>
          <li>Often using username & passwords systems or requiring contact details (with email verification)</li>
          <li>Biometrics - authentication from your physical characteristics e.g. finger print, iris or face</li>
          <li>PIN - personal identification number</li>
          <li>Improving password-based authentication (security)</li>
          <ul>
            <li>Forcing users to use strong passwords ( numbers, symbols etc.) & change them regularly</li>
            <li>Limit number of attempts before delay or account being locked (stops brute force attacks)</li>
            <li>Captcha – asking for a selection of numbers & letters from a picture</li>
          </ul>
          <li>However, too much authentication may put off a user, too little may leave the program vulnerable</li>
        </ul>
      </ul>

      <p className="heading">Maintainability</p>
      <ul>
        <li>Well-maintained code is easier to read, debug & understand</li>
        <ul>
          <li>Helps other programmers edit code, reduces risk of unintentional knock-on effects (causing issues somewhere else in the code)</li>
        </ul>

        <li><b>Comments</b> <em>e.g. '//' or '#'</em></li>
        <ul>
          <li>Ignored by the translator (not executed)</li>
          <li>Useful for explaining key features of a program, line, or section of code</li>
          <li>Well-written comments are essential for others being able to understand your code (& you)</li>
        </ul>

        <li><b>Indentation</b> - Used to separate parts in a program, easier to see program flow</li>
        <li>Descriptive variable & sub-routine names</li>
        <ul>
          <li>Easy to keep track and use them, makes code easier to understand</li>
        </ul>
      </ul>

      <p className="heading">Testing</p>
      <ul>
        <li>Purpose</li>
        <ul>
          <li>To identify & fix errors, so that the program works smoothly & as intended</li>
          <li>Types of error</li>
          <ul>
            <li><b>Syntax</b> - when translators are unable to translate code as code doesn’t follow the grammar/rules of the programming language, often translator will return the syntax error</li>
            <li><b>Logic</b> - translator able to run program, but program doesn’t run as expected, hard to diagnose only way to find them is via. testing</li>
          </ul>
        </ul>

        <li>Types</li>
        <ul>
          <li><b>Functionality testing</b></li>
          <ul>
            <li>Good way to spot logic errors, main aim is to see if program meets requirements</li>
            <li>Shouldn’t be left late, should being early</li>
            <li>PERFORMACE TEST – tests how quickly features can run & the impact they have on the computer</li>
            <li>USABILITY TEST – tests how user-friendly the interface & program is</li>
            <li>SECURITY TEST – tests vulnerability to attacks & how secure data is</li>
            <li>LOAD/STRESS TEST – tests how the program copes under extreme conditions e.g. many users</li>
          </ul>

          <li><b>Iterative</b></li>
          <ul>
            <li>Programs go through development multiple times, to ensure the final products meets the requirements of the client</li>
            <li>First cycle may only contain the main features, at the start of each cycle the requirements are adjusted (usually client involved)</li>
          </ul>

          <li><b>Final/terminal</b></li>
          <ul>
            <li>When the program only goes through the development cycle once, all requirements given at the beginning</li>
            <li>Once the program meets initial requirements it is signed off and given to the client, may not be exactly what the client wanted (is what they asked for)</li>
          </ul>

          <li><b>Test data</b></li>
          <ul>
            <li>Test plans outline exactly how testing will occur</li>
            <li>Good test plans anticipate all possible issues</li>
            <li>Type of test data</li>
            <ul>
              <li>NORMAL/VALID – what the user is likely to input (should be accepted)</li>
              <li>BOUNDARY/EXTREME – values at the limit of the input range</li>
              <li>ERRONEOUS – inputs the program shouldn’t accept</li>
            </ul>
            <li>Testing requires a test plan</li>
            <ul>
              <li>This is a list of all the tests that the programmer intends to use to ensure the program functions as intended.</li>
              <li>It should include several examples of normal, boundary & erroneous data</li>
              <li><a href="http://computing.outwood.com/NEA/python/images/testing1.png" target="_blank" rel="noopener noreferrer">Example test table</a></li>
            </ul>
            <li><a href="https://bam.files.bbci.co.uk/bam/live/content/zdb7pv4/large" target="_blank" rel="noopener noreferrer">Software development cycle</a></li>
            <ul>
              <li>Requirements - what does the client require the program to do?</li>
              <li>Design - how will the program meet the requirements?</li>
              <li>Implementation - writing the program to the specified design</li>
              <li>Testing - does the program meet the requirements? (iterative testing returns to requirements)</li>
              <li>Maintenance - once released, bugs needs to be fixed & new features need to be added (updates)</li>
            </ul>
          </ul>
        </ul>
      </ul>
    </div>
  );
};

export default Component23;
