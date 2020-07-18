import React from 'react';

const Component13 = () => {
  return (
    <div id="comp1_3" className="topic">
      <h4>Component 1.3 - Storage</h4>
      
      <div className="key-words">
      <p className="heading">KEY WORDS</p>
      <ul>
        <li><b>Secondary Storage</b> - non-volatile memory that isn’t directly accessed by the CPU; used to save files & data</li>
        <li><b>Storage Media</b> - umbrella term used to describe hard drives, disks, flash drives etc.</li>
      </ul>
      </div>

      <p className="heading">Secondary Storage</p>
      <ul>
        <li>Non-volatile – where all data (OS, applications & user files) is stored</li>
        <li>Without secondary storage all data would be lost every time the computer is turned off</li>
        <li>Gives the user the ability to save files</li>
      </ul>

      <p className="heading">Data Capacity</p>
      <ul>
        <li>1 Byte = 8 bits, 1 KB = 1024 bytes, 1 MB = 1024 KB, 1GB = 1024 MB, 1 TB = 1024 GB</li>
        <li>During calculations, in exam, x1024 can be substituted for x1000</li>
        <li>E.g. 200 photos are being stored each 20MB, how much storage is required <em>(give your answer in GB)</em></li>
        <ul>
          <li>20MB x 200 = 4000MB (for all 200 photos)</li>
          <li>Answer: 4GB</li>
        </ul>
      </ul>

      <p className="heading">Characteristics</p>
      <ul>
        <li><b>Capacity </b> - how much data can be stored</li>
        <li><b>Speed </b> - – how fast data can be accessed (read/write speed)</li>
        <li><b>Portability </b> - how easy it is to transport (due to physical size etc.)</li>
        <li><b>Durability </b> - a quality of a device that continues to function after being dropped</li>
        <li><b>Reliability </b> - how much you can depend on a device to continue functioning e.g. doesn't degrade over time</li>
        <li><b>Cost </b> - best to compare cost per GB</li>
      </ul>

      <p className="heading">Common Types of Storage</p>
      <ul>
        <li><b>Optical</b></li>
        <ul>
          <li>Data is stored as tiny indentations on a reflective disk surface, read by lasers</li>
          <li>Advantages: cheap & portable</li>
          <li>Disadvantages: limited capacity, not durable (easily scratched)</li>
          <li>Common use: storing music, video games, videos</li>
          
          <li>Main storage media & capacity</li>
          <ul>
            <li>CD (compact disc) – 700 MB</li>
            <li>DVD (digital versatile disc) - betwen 4.7 & 9.4GB</li>
            <li>Blue Ray – 25 GB</li>
          </ul>

          <li>3 forms of optical storage:</li>
          <ul>
            <li>ROM (read-only)</li>  
            <li>R (write-once)</li>  
            <li>RW (rewriteable)</li>  
          </ul>
        </ul>

        <li><b>Magnetic</b></li>
        <ul>
          <li>Data is stored magnetically in small areas (sectors) within circular tracks</li>
          <li>Advantages: high capacity for low cost, fast access, reliable</li>
          <li>Disadvantages: complex moving parts (not durable if dropped) & large physical size (not very portable)</li>
          <li>Common use: PCs, network storage, backups</li>
          <li>Main storage media & capacity</li>
          <ul>
            <li>Hard Disc Drive (HDD) – between 500 GB & 12TB</li>
          </ul>
        </ul>

        <li><b>Solid State</b></li>
        <ul>
          <li>Data stored on a grid of electrical cells divided into sections (pages) use flash memory</li>
          <li>Advantages: fast speed, no moving parts (durable), portable (small size)</li>
          <li>Disadvantages: more expensive per GB than over 2, wears out overtime (no reliable)</li>
          <li>Common use: smartphone & camera storage, laptop Hard drives</li>
          <li>Main storage media & capacity</li>
          <ul>
            <li>USB flash drive – between 16 & 128GB</li>
            <li>Solid State Drive (SSD) – between 100GB & 4TB</li>
          </ul>
        </ul>
      </ul>

      <p className="heading">Ranking of storage media</p>
      <ul>
        <li><b>Read/write speed</b> <em>(slowest -&gt; fastest)</em></li>
        <ol>
          <li>Opitcal disc</li>
          <li>SD card</li>
          <li>Magnetic tape</li>
          <li>Hard Disc Drive (HDD)</li>
          <li>Solid State Drive (SSD)</li>
        </ol>

        <li><b>Cost per GB</b> <em>(cheapest -&gt; priciest)</em></li>
        <ol>
          <li>Magnetic tape</li>
          <li>Opitcal disc</li>
          <li>Hard Disc Drive (HDD)</li>
          <li>SD card</li>
          <li>Solid State Drive (SSD)</li>
        </ol>

        <li><b>Capacity</b> <em>(lowest -&gt; highest)</em></li>
        <ol>
          <li>Opitcal disc</li>
          <li>SD card</li>
          <li>Solid State Drive (SSD)</li>
          <li>Hard Disc Drive (HDD)</li>
          <li>Magnetic tape</li>
        </ol>
      </ul>
    </div>
  )
}

export default Component13;