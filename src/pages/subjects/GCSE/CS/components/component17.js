import React from 'react';

const Component17 = () => {
  return (
    <div id="comp1_7" className="topic">
      <h4>Component 1.7 - System Software</h4>
      
      <div className="key-words">
      <p className="heading">KEY WORDS</p>
      <ul>
        <li><b>Device driver</b> - software that enables particular hardware to communicate with the rest of the computer system</li>
        <li><b>Operating system</b> - software which manages a systems’ files, processes & resources</li>
        <li><b>Utility Software</b> - a program designed to help analyse, configure, optimise or maintain a computer system</li>
      </ul>
      </div>

      <p className="heading">Purpose of System Software</p>
      <ul>
        <li>controls the hardware, including any peripherals (e.g. printers)</li>
        <li>allows other programs to run</li>
        <li>provides an interface for the user to interact with the computer</li>
        <li>maintains the system/device</li>
        <li>2 types of system software: </li>
        <ul>
          <li><b>OS</b> – complex pieces of software that communicate with internal & external hardware via. device drivers</li>
          <li><b>Utility</b> – helps to maintain or configure a computer</li>
        </ul>
      </ul>

      <p className="heading">Operating Systems Functions</p>
      <ul>
        <li><b>User interface</b></li>
        <ul>
          <li>Allows the user to interact with a computer system</li>
          <li><b>Graphical User Interfaces (GUIs)</b></li>
          <ul>
            <li>The most common, easy for everyday users by making them visual, interactive & intuitive</li>
            <li>GUIs are optimised:</li>
            <ul>
              <li>Laptops & computers use WIMP (windows, icons, menus & pointers)</li>
              <li>IOS & Android were created for touchscreen devices – e.g. finger gestures like pinching & swiping</li>
            </ul>
          </ul>

          <li><b>Command-line interfaces</b></li>
          <ul>
            <li>Text-based, users input specific commands to complete tasks</li>
            <li>They aren’t suitable for everyday users as they are very complicated & use speicif commands</li>
            <li>but they can be much more efficient & powerful, processes can even be automated with scripts</li>
          </ul>
        </ul>

        <li><b>Memory management/multitasking</b></li>
        <ul>
          <li>The OS provides a platform for applications to run (configure hardware & allow CPU/memory access)</li>
          <li>Multitasking OSs can run multiple applications simultaneously</li>
          <li>The OS manages memory for efficient multitasking</li>
          <ul>
            <li>When an app is opened all currently open apps are checked, if they haven’t been used, they are closed to increase memory capacity</li>
            <li>Certain applications have certain spots in memory to prevent any overwrites</li>
            <li>The OS divides CPU time and prioritises actions for efficiently – as only 1 application can be processed at once</li>
            <li>The OS also utilises virtual memory is required</li>
          </ul>
        </ul>

        <li><b>Peripheral management & Drivers</b></li>
        <ul>
          <li>OS use device drivers to communicate with internal hardware & peripherals </li>
          <li>Each piece of connected hardware has a device driver, that translates signals between the OS & hardware</li>
          <li>When booting up the OS decides what hardware is connected to choose the correct device drivers, any new hardware connections will have their device driver installed</li>
          <li>Device drivers may be updated (automatic or manual) to fix bugs, add features or improve performance </li>
        </ul>

        <li><b>User management</b></li>
        <ul>
          <li>OS can be single-user of multi-user</li>
          <ul>
            <li>Single-user e.g. Windows 10 only allow 1 user to login at a time</li>
            <li>Multi-user e.g. UNIX or an ATM allow many users to login in simultaneously </li>
          </ul>

          <li>User account control, different users can access different resources & data</li>
          <li>Users can normally access their only personal data but no other user’s</li>
          <li>Anti-theft measures – prevent other users accessing locked accounts to steal information, some may be password or pin protected even fingerprint or retina scanners</li>
        </ul>

        <li><b>File management</b></li>
        <ul>
          <li>Computers store data as files, file extensions tell the computer what software is used to open the file</li>
          <li>The OS is responsible for file management, organisation into a hierarchical structure & movement, modification & deletion of data/files</li>
          <li>The OS manages the hard disk and splits it into sectors (write sections, “keep-free” sections) </li>
          <li>Data for a single file may be spread across a disk instead of in adjacent sectors</li>
        </ul>
      </ul>

      <p className="heading">Utility System Software Functions</p>
      <ul>
        <li><b>Encryption software</b></li>
        <ul>
          <li>Scrambles data to stop third-parties accessing it</li>
          <li>Data can be decrypted using a specific “key”</li>
        </ul>

        <li><b>Data compression software</b> (more detailed explanation in component 2.6)</li>
        <ul>
          <li>Reduces the size of files so less disk space is used</li>
          <li>Used in the internet to speed up download times</li>
          <li>Compressed files need to be extracted before use (e.g. .zip or .rar)</li>
        </ul>

        <li><b>Defragmentation software</b></li>
        <ul>
          <li><b>need to add functionality for displaying images with a good format - but <a href="https://www.101computing.net/wp/wp-content/uploads/defragmentation.jpg" target="_blank" rel="noopener noreferrer">this image</a> is a basic overview</b> (each square is part of a file)</li>
          <li>Files are stored on a hard disk in any available space</li>
          <li>Files are moved, deleted & change size creating small gaps on the disk, so new files are split to fill the gaps</li>
          <li>The disk becomes more & more fragmented making read/write times slow (as the read/write head has to move across the disk)</li>
          <li>Defragmentation software reorganises data to put files back together and puts all free space together</li>
          <li>SSDs use flash storage with no moving parts so fragmentation isn’t an issue, instead it would degrade the SSD as each defragmentation would shorten the SSD’s lifetime as there are a limited number of flashes (re-writes) </li>
        </ul>

        <li><b>Backup software</b></li>
        <ul>
          <li>ROLE</li>
          <ul>
            <li>A backup is a copy of a computer’s files & settings – stored externally</li>
            <li>Allowing for data recovery if it is lost, caused by fire, theft, malware, hardware failure or a simple user-error (a “miss click”)</li>
            <li>Backup utility has functions including – scheduling regular backups, creating rescue disks & disk images</li>
          </ul>

          <li>METHODS</li>
          <ul>
            <li><b>Full</b> – where everything for a computer is copied. Slow, take up lots of space but faster to restore from as only the latest backup is required.</li>
            <li><b>Incremental</b> – only newly edited or created files (since the last backup) are copied. Less space, faster to create, restoration is very slow as the last full backup has to be restored then each incremental backup since.</li>
          </ul>

          <li>e.g. a business may full backup weekly, and incremental backup daily</li>
        </ul>
      </ul>
    </div>
  )
}

export default Component17;