import React from 'react';

const Component12 = () => {
  return (
    <div id="comp1_2" className="topic">
      <h4>Component 1.2 - Memory</h4>

      <div className="key-words">
        <p className="heading">KEY WORDS</p>
        <ul>
          <li><b>Primary Storage</b> - Aka. main memory, volatile memory, RAM & Cache</li>
          <li><b>Virtual memory</b> - memory combining RAM & temporary space on the hard disk</li>
        </ul>
      </div>

      <p className="heading">Random Access Memory (RAM)</p>
      <ul>
        <li>Main memory stores data, files & programs while they are being used</li>
        <li>Volatile – temporary memory, requires power to retain data</li>
        <li>Slower than Cache but faster than secondary storage</li>
        <li>When a program or file is opened it is copied onto RAM from secondary storage, they stay on the RAM until they are closed </li>
      </ul>

      <p className="heading">Read-only Memory</p>
      <ul>
        <li>Non-volatile – permanent, it keeps its content even without power</li>
        <li>Comes in a pre-manufactured chip, built into the motherboard</li>
        <li>Contains all the instructions used for BIOS (Basic Input Output System) which has all the instructions need to boot-up</li>
        <li>When computer turns on the CPU reads the instructions from the ROM includes testing memory is working, copying the OS onto the RAM & checking what hardware is present</li>
        <li>It is possible to update the ROM by “flashing” the ROM chip</li>
      </ul>

      <p className="heading">Comparison</p>
      <table className="comparison-table">
        <thead>
          <tr>
            <th></th>
            <th>RAM</th>
            <th>ROM</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Meaning</td>
            <td>Random Access Memory</td>
            <td>Read-only Memory</td>
          </tr>
          <tr>
            <td>What does it store?</td>
            <td>
              <ul>
                <li>Operating System</li>
                <li>Currently running programs</li>
                <li>Data currently in use</li>
              </ul>
            </td>
            <td>Contains the BIOS - which contains the computer boot up instructions (bootstrap loader) which loads the OS</td>
          </tr>
          <tr>
            <td>When power turned off?</td>
            <td>Contents are lost (volatile memory)</td>
            <td>Contents are retained (non-volatile memory)</td>
          </tr>
          <tr>
            <td>Can you read/write to it?</td>
            <td>You can both read & write</td>
            <td>Read only - contents are written to it when created</td>
          </tr>
        </tbody>
      </table>

      <p className="heading">Virtual Memory</p>
      <ul>
        <li>Used by the OS, when the RAM is full</li>
        <li>Data that hasn’t been recently used is moved into secondary storage (a “page” of RAM)</li>
        <li>If data in virtual memory is needed the page must be copied into RAM first (from the pagefile)</li>
        <li>It is much slower than RAM, only used when too many applications are opened so RAM is full so allows more programs to be opened at once</li>
      </ul>

      <p className="heading">Flash Memory</p>
      <ul>
        <li>EEPROM – Electrically erasable programmable read-only memory</li>
        <li>The data stored can be erased & re-written (“flashing”)</li>
        <li>Can only be flashed so many times before it begins to degrade</li>
        <ul>
          <li>some devices have many separate blocks of flash memory to avoid degrading</li>
          <li>as you only have to flash the block containing the data you need to change</li>
        </ul>

        <li>Stores data in electrical circuits, by trapping elections</li>
        <li>Used in:</li>
        <ul>
          <li>ROM, SSD, USB sticks & SD cards</li>
        </ul>
      </ul>
    </div>
  )
}

export default Component12;