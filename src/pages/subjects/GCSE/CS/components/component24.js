import React from 'react';

const Component24 = () => {
  return (
    <div id="comp2_4" className="topic">
      <h4>Component 2.4 - Computational logic</h4>

      <div className="key-words">
        <p className="heading">KEY WORDS</p>
        <ul>
          <li><b>Truth table</b> - method of recording how the inputs of a logic gate relate to its outputs</li>
        </ul>
      </div>

      <p className="heading">Need for binary</p>
      <ul>
        <li>Computers use binary as computers use transistors which can either be on or off (1 or 0)</li>
      </ul>

      <p className="heading">Logic diagrams</p>
      <ul>
        <li><b>AND (CONJUNCTION)</b></li>
        <ul>
          <li>Only returns 1 (true) if both inputs are true</li>
          <li>Truth table</li>
          <table className="small-table">
            <tbody>
              <tr>
                <td>A</td>
                <td>B</td>
                <td>Q</td>
              </tr>
              <tr>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>0</td>
                <td>1</td>
                <td>0</td>
              </tr>
              <tr>
                <td>1</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>

          <li>Represented as…</li>
          <ul>
            <li>A AND B</li>
            <li>A /\ B</li>
            <li>A . B</li>
            <li><a href="https://bam.files.bbci.co.uk/bam/live/content/z4ckxyc/large" target="_blank" rel="noopener noreferrer">Diagramatically</a></li>
          </ul>
        </ul>

        <li><b>OR (DISJUNCTION)</b></li>
        <ul>
          <li>Returns 1 (true) if one or both inputs are true</li>
          <li>Truth table</li>
          <table className="small-table">
            <tbody>
              <tr>
                <td>A</td>
                <td>B</td>
                <td>Q</td>
              </tr>
              <tr>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>0</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>0</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>

          <li>Represented as…</li>
          <ul>
            <li>A OR B</li>
            <li>A \/ B</li>
            <li>A + B</li>
            <li><a href="https://bam.files.bbci.co.uk/bam/live/content/z7qmy9q/large" target="_blank" rel="noopener noreferrer">Diagramatically</a></li>
          </ul>
        </ul>

        <li><b>NOT (NEGATION)</b></li>
        <ul>
          <li>Returns opposite of the input</li>
          <li>Truth table</li>
          <table className="small-table">
            <tbody>
              <tr>
                <td>A</td>
                <td>Q</td>
              </tr>
              <tr>
                <td>0</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>

          <li>Represented as…</li>
          <ul>
            <li>NOT A</li>
            <li>¬ A</li>
            <li>~ A</li>
            <li>Ā</li>
            <li><a href="https://bam.files.bbci.co.uk/bam/live/content/z6xhgwx/large" target="_blank" rel="noopener noreferrer">Diagramatically</a></li>
          </ul>
        </ul>
      </ul>

      <p className="heading">Combining logic operators</p>
      <ul>
        <li>Explained <a href="https://www.bbc.co.uk/bitesize/guides/zjw8jty/revision/5" target="_blank" rel="noopener noreferrer">here</a></li>
      </ul>

      <p className="heading">Applying computing-relating maths</p>
      <ul>
        <li><b>ADD (+)</b></li>
        <li><b>SUBTRACTION (-)</b></li>
        <li><b>DIVISION (/)</b></li>
        <li><b>MULTIPLICATION (*)</b></li>
        <li><b>INTEGER DIVISION (DIV)</b> - returns division without remainder e.g. 9 DIV 2 = 4</li>
        <li><b>REMAINDER (MOD)</b> - returns remainder of division e.g. 9 MOD 2 = 1</li>
        <li><b>EXPONENTATION (^)</b> - indices e.g. 2 ^ 3 = 8</li>
      </ul>
    </div>
  )
}

export default Component24;