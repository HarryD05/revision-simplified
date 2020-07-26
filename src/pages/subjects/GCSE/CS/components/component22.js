import React from 'react';

const Tab = () => <div className="tab"></div>;

const Component22 = () => {
  return (
    <div id="comp2_2" className="topic">
      <h4>Component 2.2 - Programming techniques</h4>

      <div className="key-words">
        <p className="heading">KEY WORDS</p>
        <ul>
          <li><b>Procedure</b> - series of instructions used to perform a specific task that doesn’t return a value to the main program</li>
          <li><b>Function</b> - series of instructions used to perform a specific task that returns a value to the main program</li>
          <li><b>SQL</b> - query language used to manage data in relational database management systems</li>
          <li><b>Record</b> - data structure that permits a combination of data types</li>
        </ul>
      </div>

      <p className="heading">Data types</p>
      <ul>
        <li><b>Integer (int)</b> - whole numbers e.g. -1, 3, 454</li>
        <li><b>Real/Float</b> - decimal numbers e.g. -0.34, 20.0, 32.13</li>
        <li><b>Boolean (bool)</b> - TRUE or FALSE</li>
        <li><b>Character (char)</b> - single letter, number or symbol e.g. ‘a’, ‘4’, ‘!’</li>
        <li><b>String (str)</b> - collection of characters (text representation)</li>
        <br />
        <li>Casting - changing the data type of a variable e.g.</li>
        <code>int("1") = 1</code>

        <br />
        <br />
        <table>
          <thead>
            <tr>
              <th>Data type</th>
              <th>Memory use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Integer</td>
              <td>2 or 4 bytes</td>
            </tr>
            <tr>
              <td>Real</td>
              <td>4 or 8 bytes</td>
            </tr>
            <tr>
              <td>Boolean</td>
              <td>1 bit is needed (but 1 byte is used normally)</td>
            </tr>
            <tr>
              <td>Character</td>
              <td>1 byte</td>
            </tr>
            <tr>
              <td>String</td>
              <td>1 byte for every character in string</td>
            </tr>
          </tbody>
        </table>
      </ul>

      <p className="heading">Use of variables & operators</p>
      <ul>
        <li>Data values can be stored as variables or constants</li>
        <li>They have a name (assigned to memory location) & value </li>
        <ul>
          <li><b>Variables</b></li>
          <ul>
            <li>data values that can be changed during runtime</li>
            <li>variable can be initiated (given a name but no value) and declared (given a value) separately</li>
            <li>PSEUDOCODE e.g. var apples = 5 OR var apples as int = 5 (var is optional)</li>
          </ul>

          <li><b>Constants</b></li>
          <ul>
            <li>data values that remain unchanged during runtime</li>
            <li>value of constant must be declared before use</li>
            <li>PSEUDOCODE e.g. const apples = 5 OR const apples as int = 5 (const isn’t optional)</li>
          </ul>
        </ul>

        <li>Operators</li>
        <ul>
          <li><b>Assignment (arithmetic operators)</b></li>
          <ul>
            <li>is used to assign values to variables or constants "="</li>
            <li>arithmetic operator with "=" can be used e.g. n += 1 increased variable n by 1</li>
          </ul>

          <li><b>Comparison (Boolean operators)</b></li>
          <ul>
            <li><b>==</b> is equal to  </li>
            <li><b>&lt;&gt; or !=</b>  is not equal to</li>
            <li><b>&gt;</b>  is more than</li>
            <li><b>&gt;=</b>  is more than or equal to</li>
            <li><b>&lt;</b>  is less than</li>
            <li><b>&lt;=</b>  is less than or equal to</li>
          </ul>
        </ul>
      </ul>

      <p className="heading">Programming constructs</p>
      <ul>
        <li><b>Sequence </b> - instructions executed in order they appear (no iteration or selection)</li>
        <li><b>Selection </b> - multiple routes for program to go (if-else, switch statements)</li>
        <li><b>Iteration </b> - loops (do-until, while, for) </li>
        <br />
        <li>Selection & iteraction explained in the <a href="https://beta.ocr.org.uk/Images/202654-pseudocode-guide.pdf" target="blank" rel="noopener noreferrer" >pseudocode guide</a></li>
      </ul>

      <p className="heading">String manipulation</p>
      <ul>
        <li>Strings are written using double or single quotes e.g. name = "Harry" or name = 'Harry'</li>
        <li>Strings can be added together using + e.g.</li>
        <div className="code-block">
          string1 = "Hello" <br />
          string2 = "Jack"<br />
          string3 = string1 + ", " + string2 ----&gt; "Hello, Jack"
        </div>

        <li><b>Functions</b> <em>(variable is a string)</em></li>
        <ul>
          <li><b>variable.upper()</b> - changes all characters to upper case</li>
          <li><b>variable.lower()</b> - changes all characters to lower case</li>
          <li><b>variable.length</b> - returns length of a string</li>
          <li><b>variable[index]</b> - returns character from the position index (index starts at 0)</li>
          <li><b>variable.subString(start, len)</b> - returns string starting at start with len characters</li>
        </ul>
      </ul>

      <p className="heading">Arrays (1D & 2D)</p>
      <ul>
        <li>Arrays/lists are used to store multiple data values under one variable</li>
        <li>Each piece of data is called an element (index starts at 0)</li>
        <li><b>1 dimensional arrays</b></li>
        <ul>
          <li>CREATING/DECLARING ARRAYS</li>
          <div className="code-block"><pre>
            array names[2] //initalises array with 2 items (don't have to include a number)<br />
            names[0] = "Jack"<br />
            names[1] = "Jill"<br />

            display(names) // outputs ["Jack", "Jill"]
          </pre></div>
          <ul><li>or</li></ul>
          <div className="code-block"><pre>
            array names = ["Jack", "Jill"]
          </pre></div>

          <li>RETRIEVING ELEMENTS</li>
          <div className="code-block"><pre>
            display(names[0]) // outputs "Jack"
          </pre></div>

          <li>MODIFYING ARRAYS</li>
          <div className="code-block"><pre>
            names[1] = "Ben" // names now equals = ["Jack", "Ben"]
          </pre></div>
        </ul>

        <li><b>2 dimensional arrays</b></li>
        <ul>
          <li>Example: </li>
          <table className="small-table">
            <tbody>
              <tr>
                <td></td>
                <td>0</td>
                <td>1</td>
              </tr>
              <tr>
                <td>0</td>
                <td>Jack</td>
                <td>Smith</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Daisy</td>
                <td>Sheppard</td>
              </tr>
            </tbody>
          </table>

          <li>A 2D array is a 1D array where each element holds another array</li>
          <ul>
            <li>e.g. names = [["Jack", "Smith"], ["Daisy", "Sheppard"]]</li>
          </ul>

          <li>Position an element is written as [a, b] or [a][b]</li>
          <ul>
            <li>names[0, 1] would be "Smith" in the example above</li>
          </ul>

          <li>You can do all the sames methods as with 1D arrays but use [a,b] or [a][b] instead of [a]</li>
          <li>Only difference is declaration 2D array</li>
          <div className="code-block"><pre>
            array board[3, 3] //initalises empty array, with 3 elements, containing arrays of 3 elements <br />
            board[2] = [34, 21, 65] //changes the 3rd element's array
            display(board[2, 1]) // ouput 21
          </pre></div>
        </ul>
      </ul>

      <p className="heading">File handling</p>
      <ul>
        <li><b>Open</b></li>
        <ul>
          <li><code>newFile = openRead("file.txt")</code> - opens file with ability to read data from the file</li>
          <li><code>newFile = openWrite("file.txt")</code> - opens file with ability to write data from the file</li>
          <li>Once the file is opened the program will place a cursor at the beginning of the file</li>
        </ul>

        <li><b>Read</b> <em>(opened as openRead)</em></li>
        <ul>
          <li>"file.readLine()" - returns the contents of the current line, then moves the cursor to the next line</li>
          <li>Using a loop you can iterate through every line in a file e.g.</li>
          <div className="code-block"><pre>
            array lines[6] //initalises a list with 6 elements<br />
            for couter = 0 to 5 //iterates 6 times (inclusive)<br />
            <Tab />lines[counter] = newFile.readLine() //sets array item to the line<br />
            next counter
          </pre></div>

          <li>OR</li>

          <div className="code-block"><pre>
            array lines[] //initalises a list - no set amount of list items<br />
            counter = 0<br />
            while NOT newFile.endOfFile() //loop ends when cursor reaches end of the file<br />
            <Tab />lines[counter] = newFile.readLine()<br />
            <Tab />counter += 1<br />
            end-while
          </pre></div>
        </ul>

        <li><b>Write</b> <em>(opened as openWrite)</em></li>
        <ul>
          <li>"file.wrtieLine(text)" - sets the text of the current line to the arguement provided (will overwrite if line already exists) & cursor moves to the next line</li>
          <li>Using a for loop you can iterate through every line in a file e.g.</li>
          <div className="code-block"><pre>
            for counter 0 to 9 //iterates 10 times (inclusive)<br />
            <Tab />newFile.writeLine("line number: " + counter)<br />
            next counter
          </pre></div>
        </ul>

        <li><b>Close</b></li>
        <ul>
          <li><code>newFile.close()</code> - you should close a file after read/write so the file is locked and to prevent others from editing (also stops the file corrupting)</li>
        </ul>
      </ul>

      <p className="heading">Records</p>
      <ul>
        <li>Records are a data structure that can be used to store a collection of data values</li>
        <li>Each item in a record is called a field (given a data type & name)</li>
        <li>Records are a fixed length</li>
        <li>Variables made with the same record can be stored in lists </li>
        <li>Called dictionaries in Python & javascript, but structures in C</li>

        <li><b>Creating/Declaring a record (the "template")</b></li>
        <div className="code-block"><pre>
          record recipe<br />
          <Tab />int recipeNum<br />
          <Tab />string recipeName<br />
          <Tab />bool tested<br />
          <Tab />int score<br />
          endrecord
        </pre></div>

        <li><b>Assign variables using a record</b></li>
        <div className="code-block"><pre>
          recipe1 = recipe(1, "chocolate cake", true, 4)<br />
          recipe2 = recipe(2, "lemon cake", false, 0)<br />
          array recipes = [recipe1, recipe2]
        </pre></div>

        <li><b>Accessing record variables</b></li>
        <div className="code-block"><pre>
          display(recipe1) // output (1, "chocolate cake", true, 4)<br />
          display(recipe2.recipeName) // output "lemon cake"<br />
          recipe2.test = true // modifies the test field
        </pre></div>
      </ul>

      <p className="heading">SQL</p>
      <ul>
        <li>Structured Query Language is used to search tables/databases for specific data</li>
        <li><b>example table: hotels</b></li>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>hotel_name</th>
              <th>hotel_rating</th>
              <th>rooms</th>
              <th>bahroom</th>
              <th>price_in_pounds</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Water Lodge</td>
              <td>2.3</td>
              <td>50</td>
              <td>En-suite</td>
              <td>42</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Fire Inn</td>
              <td>4.2</td>
              <td>64</td>
              <td>Shared</td>
              <td>42</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Earthen House</td>
              <td>4.4</td>
              <td>215</td>
              <td>En-suite</td>
              <td>39</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Windy Hotel</td>
              <td>3.5</td>
              <td>150</td>
              <td>Shared</td>
              <td>58</td>
            </tr>
            <tr>
              <td>5</td>
              <td>River Hotel</td>
              <td>3.8</td>
              <td>180</td>
              <td>Shared</td>
              <td>46</td>
            </tr>
          </tbody>
        </table>
        <li>SELECT is followed by the names of the fields (columns) you want to retrieve</li>
        <li>FROM used to select the table(s) you want to look through</li>
        <li>* - wildcard, used when looking for all fields</li>
        <div className="code-block"><pre>
          SELECT hotel_name FROM hotels // returns all the hotel_names from the hotels table<br />
          SELECT ID, room FROM hotels // returns both the ID & rooms field from the hotels table<br />
          SELECT * from hotels // returns all fields from the hotels table
        </pre></div>

        <li><b>Specifiying conditions</b></li>
        <ul>
          <li>WHERE is used with a conditional statement to return fields that meet the condition</li>
          <div className="code-block"><pre>
            SELECT hotel_name FROM hotels WHERE bathroom == En-suite // returns all the hotel_names that have en-suite bathrooms<br />
          SELECT hotel_name FROM hotels WHERE hotel_rating &gt; 4.0 // returns all the hotel_names that have a rating over 4<br />
          SELECT hotel_name FROM hotels WHERE hotel_name LIKE "%Hotel" //explained below
          </pre></div>
          <li>LIKE is used to check for strings, % means ignore any thing before – so the statement above would return all the hotels except "Fire Inn"</li>
        </ul>

        <li><b>Ordering result</b></li>
        <ul>
          <li>ORDERBY is used to sort returned data either DESC (descending) or ASC (ascending) based on a certain field</li>
          <div className="code-block"><pre>
            SELECT hotel_name, price_in_pounds FROM hotels WHERE rooms &gt; 100 AND hotel_name != "Windy Hotel" ORDERBY price_in_pounds DESC
          </pre></div>
        </ul>
      </ul>

      <p className="heading">Sub-routines</p>
      <ul>
        <li>Sub-routines are a set of instructions stored under one name</li>
        <ul>
          <li><b>Functions</b> - require atleast 1 parameter, return a value to the main program</li>
          <div className="code-block"><pre>
            function joinStrings(a, b)<br />
            <Tab />return a + " " + b<br />
            endfunction // this is the function definition<br />
            <br />

            // now you need to call the function<br />
            newString = joinStrings("Computer", "science")<br />
            display(newString) // would output "Computer science"
          </pre></div>

          <li><b>Procedure</b> - optional to use parameters, don’t return a value to the main program</li>
          <div className="code-block"><pre>
            procedure sayHello <br />
            <Tab />display("Hello!)"<br />
            endprocedure // this is the procedure definition<br />
            sayHello() // calling the procedure, ouputs "Hello!"<br />
            <br />

            procedure sayHello(name) <br />
            <Tab />display("Hello, " + name)<br />
            endprocedure // this is the procedure definition<br />
            sayHello("John") // calling the procedure, ouputs "Hello, John"<br />
          </pre></div>

          <li><b>Parameters vs. arguements</b></li>
          <ul>
            <li>Parameters - variables used to pass values into a sub-routine e.g. name in the procedure above</li>
            <ul>
              <li>You can specify a data type, name & default value</li>
            </ul>

            <li>Arguements -the actual values that the paramters take when a sub-routine is used e.g. "John" in the procedure above</li>
          </ul>

          <div className="advantages">
            <li><b>Advantages of sub-routines</b></li>
            <ul>
              <li>They can be reused in other programs (faster to program)</li>
              <li>Don’t need to repeat the same lines of code</li>
              <li>Easy to debug & modify sub-routines separately (tested separately)</li>
              <li>Breaks up large programs into smaller chunks (decomposition)</li>
            </ul>
          </div>

          <li><b>Built-in functions</b></li>
          <ul>
            <li>Most high-level languages contain built-in functions that you can utilise without making them yourself </li>
            <li>e.g. max(23, 28) would return 28 - most high-level languages have this as a built-in function</li>
          </ul>

          <li><b>Variable scopes</b></li>
          <ul>
            <li>Scope – where you can access a variable from (local or global)</li>
            <li>Local variables – only accessed within the structure they are declared in</li>
            <li>Global variables – accessed anytime, anywhere once declared</li>
            <li>Variables declared in sub routines are local scope, so can only be accessed withing the sub routine</li>
            <li>Variables declared in the main body of code can be made in global variables using “global” keyword so they can be accessed from anywhere (including in sub routines)</li>
            <div className="code-block"><pre>
              global x = 3<br />
              procedure increment <br />
              <Tab />x += 1<br />
              endprocedure<br />
            </pre></div>
            <li>The procedure above increases the value of the global variable x</li>
          </ul>
        </ul>
      </ul>
    </div>
  )
}

export default Component22;