import React from 'react';

const Component26 = () => {
  return (
    <div id="comp2_6" className="topic">
      <h4>Component 2.6 - Data Representation</h4>

      <div className="key-words">
        <p className="heading">KEY WORDS</p>
        <ul>
          <li><b>Binary</b> - base 2 number system used in computers (0 or 1)</li>
          <li><b>Denary</b> - base 10 (0-9)</li>
          <li><b>Hexadecimal</b> - base 16 (0-F), easily converted to binary</li>
          <li><b>Overflow</b> - error that occurs when a number becomes too large to fit into the number bits allocated</li>
          <li><b>Pixel</b> - smallest element of bitmap images, 2D grid</li>
          <li><b>Bit rate</b> - space available for each audio sample (kb/s)</li>
          <li><b>Colour depth</b> - number of bits used to represent colours in individual pixels</li>
          <li><b>Resolution</b> - measurement of bitmap image detail (pixels per inch - ppi)</li>
          <li><b>Sample frequency</b> - number of times a second an audio sample is taken</li>
        </ul>
      </div>

      <p className="heading">Units</p>

      <table className="small-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Size</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Bit</td>
            <td>a single binary digit (0/1)</td>
          </tr>
          <tr>
            <td>Nibble</td>
            <td>4 bits</td>
          </tr>
          <tr>
            <td>Byte (B)</td>
            <td>4 bits</td>
          </tr>
          <tr>
            <td>Kilobyte (kB)</td>
            <td>1024 bytes</td>
          </tr>
          <tr>
            <td>Megabyte (MB)</td>
            <td>1024 kilobytes</td>
          </tr>
          <tr>
            <td>Gigabyte (GB)</td>
            <td>1024 megabytes</td>
          </tr>
          <tr>
            <td>Terabyte (TB)</td>
            <td>1024 gigabytes</td>
          </tr>
          <tr>
            <td>Petabyte (PB)</td>
            <td>1024 terabytes</td>
          </tr>
        </tbody>
      </table>
      <ul>
        <li>In the exam for calculations, you can use x1000 instead of x1024 for each step</li>
        <li>Data needs to be converted to a binary format to be processed by a computer because a computer is made up of transistors which can be either on or off (1 or 0).</li>
      </ul>

      <p className="heading">Binary-Decimal conversion</p>
      <ul>
        <li><b>Binary -&gt; Decimal</b></li>
        <ul>
          <li>Draw a table, top row the powers of 2</li>
          <li>Write the binary number in the next row</li>
          <li>Next row, add up the values of the colums with 1s in them</li>
          <li>Example: 0110 1101</li>
          <table className="small-table centered">
            <thead>
              <tr>
                <th>2<sup>7</sup></th>
                <th>2<sup>6</sup></th>
                <th>2<sup>5</sup></th>
                <th>2<sup>4</sup></th>
                <th>2<sup>3</sup></th>
                <th>2<sup>2</sup></th>
                <th>2<sup>1</sup></th>
                <th>2<sup>0</sup></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>128</td>
                <td>64</td>
                <td>32</td>
                <td>16</td>
                <td>8</td>
                <td>4</td>
                <td>2</td>
                <td>1</td>
              </tr>
              <tr>
                <td>0</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>0</td>
                <td>64</td>
                <td>32</td>
                <td>0</td>
                <td>8</td>
                <td>4</td>
                <td>0</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
          <p>= 64 + 32 + 8 + 4 + 1</p>
          <p>= 109</p>
        </ul>
        <br />
        <li><b>Decimal -&gt; Binary</b></li>
        <ul>
          <li>From the starting number, take away each power of 2 starting from 2<sup>7</sup> (128)</li>
          <li>if the difference is &lt; 0 then the bit is 0</li>
          <li>continue with whenever the difference is &gt;= 0 the bit is 1, then takeaway the value from the runnning toal</li>
          <li>Example: 203</li>
          <table className="small-table centered">
            <tbody>
              <tr>
                <td>Total</td>
                <td>203</td>
                <td>75</td>
                <td>11</td>
                <td>11</td>
                <td>11</td>
                <td>3</td>
                <td>3</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Powers</td>
                <td>128</td>
                <td>64</td>
                <td>32</td>
                <td>16</td>
                <td>8</td>
                <td>4</td>
                <td>2</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Diff.</td>
                <td>75</td>
                <td>11</td>
                <td>-21</td>
                <td>-5</td>
                <td>3</td>
                <td>-1</td>
                <td>1</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Result</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
          <p>= 1100 1011</p>
        </ul>
      </ul>

      <p className="heading">Binary addition + overflow errors</p>
      <ul>
        <li>There are 4 rules of binary addition</li>
        <ul>
          <li>0 + 0 = 0</li>
          <li>0 + 1 = 1</li>
          <li>1 + 0 = 1</li>
          <li>1 + 1 = 1 carry 1</li>
        </ul>

        <li>Example - add the 8-bit numbers, give your answer as an 8-bit number</li>
        <table className="small-table blank">
          <tbody>
            <tr>
              <td></td>
              <td>1</td>
              <td>1</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>byte 1</td>
            </tr>
            <tr>
              <td>+</td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>byte 2</td>
            </tr>
            <tr>
              <td>1</td>
              <td>0</td>
              <td>1</td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>1</td>
              <td>sum</td>
            </tr>
            <tr>
              <td>1</td>
              <td></td>
              <td></td>
              <td>1</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>carry</td>
            </tr>
          </tbody>
        </table>
        <li>this example's sum is a 9-bit number (1 0110 0101)</li>
        <li>this is called an overflow error as the ouput is only allocated 8-bits</li>
        <li>so the output of this would be: 0110 0101</li>
      </ul>

      <p className="heading">Denary-Hexadecimal conversion</p>
      <ul>
        <li><b>Hexadecimal -&gt; Denary</b></li>
        <ul>
          <li>Multiply the value each symbol (first one by 16, second by 1) & then add them together </li>
          <li>0-9 still represent 0-9</li>
          <table className="small-table centered">
            <tbody>
              <tr>
                <td>A</td>
                <td>B</td>
                <td>C</td>
                <td>D</td>
                <td>E</td>
                <td>F</td>
              </tr>
              <tr>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>
                <td>15</td>
              </tr>
            </tbody>
          </table>
          <p>example: 4A</p>
          <p>= (4 * 16) + (A * 1)</p>
          <p>= (4 * 16) + (10 * 1)</p>
          <p>= 64 + 10</p>
          <p>= 74</p>
        </ul>
        <br />
        <li><b>Denary -&gt; Hexadecimal</b></li>
        <ul>
          <li>Convert Denary -&gt; Binary</li>
          <li>Convert Binary -&gt; Hexadecimal (this processs is explained below)</li>
        </ul>
      </ul>

      <p className="heading">Binary-Hexadecimal conversion</p>
      <ul>
        <li><b>Binary -&gt; Hexadecimal</b></li>
        <ul>
          <li>Split number into nibbles</li>
          <li>Convert each nibble into the corresponding hexadecimal digit</li>
          <p>00101110 -&gt; 0010-1110 -&gt; 2-14 -&gt; 2E</p>
          <p>1101101101 -&gt; 0011-0110-1101 -&gt; 3-6-13 -&gt; 36D</p>
        </ul>
        <br />
        <li><b>Hexadecimal -&gt; Binary</b></li>
        <ul>
          <li>Convert each digit into its corresponding nibble e.g. 7C</li>
          <p>7 = 0111</p>
          <p>C = 12 = 1100</p>
          <p>7C = 0111 1100</p>
        </ul>
        <br />
        <li>Hexadecimal allows large numbers to be represented in a shorter form</li>
        <ul>
          <li>Less chance of input errors</li>
          <li>Connverting between binary-hexadecimal is much easier than binary-denary</li>
        </ul>
      </ul>

      <p className="heading">Binary shifts</p>
      <ul>
        <li>A binary shift moves every bit in a binary number left/right</li>
        <li>Gaps at the beginning or end are filled with 0s</li>
        <li>Left shifts - multiply, each place is by x2</li>
        <li>Right shifts – divide, each place is by *0.5</li>
        <li>E.g. 3 places left = * 2^3 = *8 & 4 places right = / 2^4 = /16</li>
        <br />
        <li>Left shifts cause overflows (extra bits), right shifts cause “drop off” bits</li>
        <ul>
          <li>Reducing accuracy & loss of bits/data</li>
        </ul>
      </ul>

      <p className="heading">Check digits (Parity Bits)</p>
      <ul>
        <li>Way of checking data has been entered/read correctly, added at the end of numbers</li>
        <li>2 types:</li>
        <ul>
          <li>Even parity bit – added to ensure a binary string has an even number of 1s</li>
          <li>Odd parity bit – added to ensure a binary string has an odd number of 1s</li>
        </ul>

        <li>If 1-bit of a binary string is inputted or read incorrectly the parity bit can pick up this error</li>
        <li>If 2 bits are incorrect the error will not be picked up</li>
      </ul>

      <p className="heading">Character sets</p>
      <ul>
        <li>Alphanumeric characters (letters, digits, symbols) are used when writing, however a computer can only compute 0s and 1s</li>
        <li className="key-words"><b>Character sets:</b> collection of characters that a computer recognises from their binary representation</li>
        <li>When a key is pressed the binary signal (1 or 2 bytes) is sent to the processor, then it is translated via. the character set (the key may be special e.g. back space, enter or delete so a command will occur instead)</li>
      </ul>

      <p className="heading">Bits per character</p>
      <ul>
        <li><b>American Standard Code for Internet Interchange (ASCII)</b></li>
        <ul>
          <li>7-bits (all that was needed at the time) so 128 possibilities, 8<sup>th</sup> bit added at beginning or end is used is a parity bit</li>
          <li>includes are characters needed to English</li>
        </ul>

        <li><b>Extended-ASCII</b></li>
        <ul>
          <li>8-bits, 256 possibilities (first 128 same as ASCII) extra 128 used for other characters for more languages e.g. French</li>
        </ul>

        <li><b>Unicode</b></li>
        <ul>
          <li>16-bit or 32-bit, all characters, including all languages and even emojis!</li>
        </ul>
      </ul>

      <p className="heading">Image representation</p>
      <ul>
        <li>Images stored as bit maps, a grid of tiny dots or pixels</li>
        <li>The colour of each pixel is represented with a binary number</li>
        <li>The greater number of bits comes with a greater number of colours e.g.</li>
        <ul>
          <li>1 bit - black or white</li>
          <li>3-bytes - the full RGB spectrum, "slider" of 255 for red, green & blue (65,536 possibilities) e.g. 255-0-0 is red</li>
        </ul>
      </ul>

      <p className="heading">Metadata</p>
      <ul>
        <li>The information stored in an image file that helps the computer recreate the image on a screen from binary</li>
        <ul>
          <li>E.g. file format, height, width, colour depth, resolution</li>
        </ul>
        <li>Even extra info e.g. time photo was taken, what device, last edit time</li>
        <li>Without metadata devices wouldn’t be able to display images to screens</li>
      </ul>

      <p className="heading">Image file size</p>
      <ul>
        <li><b>Colour depth</b></li>
        <ul>
          <li>Number colours available is 2<sup>n</sup> (n = bits per pixel, bpp)</li>
        </ul>

        <li><b>Resolution</b></li>
        <ul>
          <li>Density of pixels in an image (pixels per inch, ppi or dots per inch, dpi) </li>
          <li>Higher resolution, better image quality </li>
        </ul>

        <li>Image file size (in bits) = colour depth * image width (in pixels) * image height (in pixels)</li>
      </ul>

      <p className="heading">Sound representation</p>
      <ul>
        <li>Sound is recorded as an analogue signal (continuous data)</li>
        <li>Analogue must be converted to digital (0s & 1s) using ADCs (analogue-digital converters)</li>
        <li>Converting is called sampling</li>
        <ul>
          <li>The amplitude of the analogue signal is taken at regular intervals (sample frequency</li>
        </ul>
      </ul>

      <p className="heading">Sound file size</p>
      <ul>

        <li><b>Sample size</b></li>
        <ul>
          <li>Number of bits available per sample</li>
          <li>Increase, improves audio quality (e.g. picking up very quiet)</li>

        </ul>
        <li><b>Sample frequency</b></li>
        <ul>
          <li>Number of samples taken per second, commonly 44.1KHz (44,100 per second)</li>
          <li>Increase, better quality more closely match original</li>
          <li>Sample intervals</li>
          <ul>
            <li>Gaps between each point where the analogue recording is sampled, commonly betwen 1 & 5 milliseconds</li>
          </ul>
        </ul>
        <br />
        <li><b>Bit rate</b></li>
        <ul>
          <li>Bit rate = sample frequency * sample size</li>
          <li>Number of bits needed a second</li>
          <li>So increasing sample frequency sample & size, increases file size</li>
        </ul>
      </ul>

      <p className="heading">Compression</p>
      <ul>
        <li><b>Purpose </b> - makes file size smaller</li>
        <ul>
          <li>Smaller files take less space in secondary storage</li>
          <li>Streaming & downloading files over the internet requires less bandwidth</li>
          <li>Loading webpages faster</li>
          <li>Send content via. email (often has small file size restriction)</li>
        </ul>
        <br />
        <li><b>Lossy</b> - removes data permanently</li>
        <ul>
          <li>e.g. MP3 & AAC (audio), JPEG (images)</li>
          <div className="advantages">
            <li><b>Advantages</b></li>
            <ul>
              <li>Greatly reduces file size</li>
              <li>Less bandwidth needed for transfer (faster download and streaming)</li>
              <li>Commonly used, read by a lot of software</li>
            </ul>
          </div>
          <div className="disadvantages">
            <li><b>Disadvantages</b></li>
            <ul>
              <li>Losses data, original file cannot be restored</li>
              <li>Can’t be used on text, as all data required</li>
              <li>Worse quality than original </li>
            </ul>
          </div>
        </ul>
        <li><b>Lossless</b> - data removed temporarily can be restored to original state once opened </li>
        <ul>
          <li>e.g. FLAC, TIFF (audio) & PNG (images)</li>
          <div className="advantages">
            <li><b>Advantages</b></li>
            <ul>
              <li>No quality reduction</li>
              <li>Can be decompressed to original</li>
              <li>Can be used of text & software files</li>
            </ul>
          </div>
          <div className="disadvantages">
            <li><b>Disadvantages</b></li>
            <ul>
              <li>Reduction in file size is MUCH less e.g. Lossy may be 5MB, lossless equivalent may be 30MB</li>
            </ul>
          </div>
        </ul>
      </ul>
    </div>
  )
}

export default Component26;