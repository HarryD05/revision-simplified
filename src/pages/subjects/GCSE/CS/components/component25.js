import React from 'react';

const Component25 = () => {
  return (
    <div id="comp2_5" className="topic">
      <h4>Component 2.5 - Translators & IDEs</h4>

      <div className="key-words">
        <p className="heading">KEY WORDS</p>
        <ul>
          <li><b>Low-Level</b> - programming language with little to no abstraction from a computer’s instruction set architecture </li>
          <li><b>High-Level</b> - problem-based programming languages which are similar to natural language</li>
          <li><b>IDE</b> - Software that provides multiple dedicated tools for developers to utilise</li>
          <li><b>Run-time environment</b> - IDE feature that allows code to be run without being compiled</li>
          <li><b>Translator</b> - Utility that converts programming code into machine code</li>
        </ul>
      </div>

      <p className="heading">Levels of languages</p>
      <ul>
        <li>Low-level languages</li>
        <ul>
          <li><b>1st generation - machine code</b></li>
          <ul>
            <li>Binary code – opcode (instruction) & operand (data)</li>
            <li>Directly executable by the processor</li>
            <li>Difficult to debug, understand & program</li>
            <li>No translator needed</li>
          </ul>

          <li><b>2nd generation - assembly code</b></li>
          <ul>
            <li>Mnemonics (e.g. INP, ADD 5) – opcode (instruction) & operand (data)</li>
            <li>One assembly code instruction = 1 machine code instruction</li>
            <li>Easier to program & understand, still hard to debug</li>
            <li>Translator: assembler - to translate to machine code before execution</li>
          </ul>
        </ul>

        <li>High-level languages</li>
        <ul>
          <li><b>3rd generation</b></li>
          <ul>
            <li>Uses human language, easy to understand, debug & program</li>
            <li>One instruction in 3rd gen in multiple in machine code</li>
            <li>E.g. Java, Pascal, Python, C++, JavaScript</li>
            <li>Translators: complier or interpreter</li>
          </ul>

          <li><b>4th generation</b></li>
          <ul>
            <li>Declarative languages e.g. SQL</li>
            <li>Facts & rules stated, describes what computation should be performed (not how)</li>
          </ul>
        </ul>

        <li>Low-level languages are harder to use, but more memory efficient so faster</li>
      </ul>

      <p className="heading">Purpose of translators</p>
      <ul>
        <li>Computers can only execute machine code (binary format) therefore assembly code & high-level languages need to be translated to machine code before being executed</li>
        <li>There are 3 translators:</li>
        <li><b>Assembler</b></li>
        <ul>
          <li>Assembly -&gt; Machine code</li>
          <li>Assembly languages differ between CPU types meaning each CPU type requires a unique assembler</li>
        </ul>

        <li><b>Compiler</b></li>
        <ul>
          <li>High-Level -&gt; Machine code</li>
          <li>Translates the entire program at once</li>
          <li>Once entire file compiled (one executable file returned), a list of errors is returned</li>
          <li>Program runs quickly once compiled (which takes a long time)</li>
        </ul>

        <li><b>Interpreter</b></li>
        <ul>
          <li>High-Level -&gt; Machine code</li>
          <li>Translates & runs each line separately </li>
          <li>no executable file created, so translator software required during runtime</li>
          <li>Returns the first error & then stops, allowing for debugging</li>
          <li>Program runs slowly as each line of code is being translated as the program in running</li>
        </ul>

        <br />
        <li>Type of translator depends on programming language & IDE</li>
        <li>If the program is stored over multiple files, a linker is used to join the separate compiled codes into 1 executable program</li>
        <li>In some languages compilers & interpreters are run simultaneously e.g. Java</li>
        <ol>
          <li>Java source code</li>
          <li>Compiler</li>
          <li>Byte code</li>
          <li>Interpreter</li>
          <li>Machine code</li>
        </ol>
      </ul>

      <p className="heading">IDE tools</p>
      <ul>
        <li>Integrated Development Environment, a piece of software that provides features to a programmer to develop their programs</li>
        <li>Features include:</li>
        <ul>
          <li><b>Code editor</b></li>
          <ul>
            <li>Where the code is written/modified</li>
            <li>Includes line numbering (for simpler debugging) & syntax-highlighting (e.g. different colours for strings, functions, variables, comments)</li>
            <li>Some even have auto-correct, auto-indentation & auto-complete</li>
          </ul>

          <li><b>Error diagnostics/Debugging tools</b></li>
          <ul>
            <li>Help to find & fix errors (before translating)</li>
            <li>Often location of error highlighted (someone solution offered)</li>
          </ul>

          <li><b>Run-time environment</b></li>
          <ul>
            <li>Allows code to be run within the IDE with a start/run button</li>
            <li>Helps the user identify logic errors</li>
            <li>Breakpoints may be used to stop the program at certain lines to check the values of variables at that line etc.</li>
          </ul>

          <li><b>Translators</b></li>
          <ul>
            <li>Includes complier or interpreter (sometimes both)</li>
            <li>Translates source to machine code without haven’t to use a separate piece of software</li>
            <li>If the IDE has both types, the advantages of both can be utilised at different times</li>
          </ul>

          <li><b>EXTRAS</b></li>
          <ul>
            <li>Output window – shows the programs output </li>
            <li>Explorer window – helps navigate through program (if using multiple files & folders)</li>
            <li>Auto-documentation – helps maintain programs, extracts variable names, functions & comments to summaries how to use the code (stored in a separate file)</li>
            <li>GUI builder – allows the user to design a UI by clicking & dragging objects and customising them (makes building interfaces easier, no need to use cords etc.)</li>
          </ul>
        </ul>
      </ul>
    </div >
  )
}

export default Component25;