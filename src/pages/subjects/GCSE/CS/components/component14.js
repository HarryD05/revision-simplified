import React from 'react';

const Component14 = () => {
  return (
    <div id="comp1_4" className="topic">
      <h4>Component 1.4- Wired & wireless networks</h4>
      
      <div className="key-words">
      <p className="heading">KEY WORDS</p>
      <ul>
        <li><b>Router</b> - network hardware responsible for packet switching (connection to large WANs)</li>
        <li><b>Bandwidth</b> - amount of data that <em>can</em> be transmitted within a given period (like size of a road)</li>
        <li><b>Throughput</b> - amount of data that <em>is</em> transmitted within a given period (like busyness of a road)</li>
        <li><b>Website</b> - a collection of webpages linked via. hyperlinks</li>
      </ul>
      </div>

      <p className="heading">Networks</p>
      <ul>
        <li>2 main types:</li>
        <ul>
          <li><b>LAN (Local Area Network)</b> - network covering a small geographical area on a single site, where all hardware is owned by the user e.g. a school, home.</li>
          <li><b>WAN (Wide Area Network</b> - network covering a large geographical area (connecting multiple LANs) where infrastructure is often hired from telecommunication companies e.g. internal business or the Internet</li>
        </ul>

        <li>Benefits of networks</li>
        <ul>
          <li>Easy communication (file sharing etc.)</li>
          <li>Sharing hardware such as printers</li>
          <li>Centrally installed & updated software</li>
          <li>User accounts stored centrally (remote access)</li>
        </ul>

        <li>Factors affecting network performance</li>
        <ul>
          <li><b>Bandwidth </b> - the amount of data that can be transferred in a given period (e.g. the number of lanes a road has), mbps (megabits per second)</li>
          <li><b>Number of users & usage </b> - bandwidth is shared between users causing congestion & data collision</li>
          <li><b>Connection type </b></li>
          <ul>
            <li>wires are faster (& more reliable) than wireless connections, & fibre optic faster than copper.</li>
            <li>Wireless performance impacted by signal quality (effected by range & physical obstacles etc.)</li>  
          </ul>

          <li><b>Interference </b> - electromagnetic interference may corrupt data during transmission</li>
          <li><b>Obstacles </b> - physical objects prevent/impact radio wave transmission (wireless)</li>
        </ul>

        <li>LANs require certain hardware</li>
        <ul>
          <li><b>Router </b> - responsible for data transmission between networks (LAN-LAN, LAN-WAN), packet switching</li>
          <ul>
            <li>Most home routers connect the LAN to a WAN (Internet) as well as switch & Wireless Access Point</li>
          </ul>

          <li><b>Switch </b> - connects devices on a LAN, control data transfer (each “bit” of data is a “frame”) within the LAN using each devices MAC address </li>
          <li><b>Network Interface Card (NIC) </b> - hardware allowing a device to connect to a network can be wired (Ethernet) or wireless (Wi-Fi)</li>
          <li><b>Transition media </b> - Ethernet cables (e.g. Cat5e, fibre optics), wireless</li>
          <li><b>Wireless Access Point (WAP) </b> - like a wireless switch allowing devices to connect to other devices within a LAN </li>
        </ul>

      </ul>

      <p className="heading">Network Models</p>
      <ul>
        <li><b>Client-Server</b></li>
        <ul>
          <li>Managed by a central server, devices connected to the server are clients.</li>
          <li>Server stores files, user details & software while receiving a responding to requests from clients (may authenticate using passwords etc.)</li>
          <li>Clients send requests for data to the server</li>
          <div className="advantages">
            <li><b>Advantages</b></li>
            <ul>
              <li>Easy to maintain files</li>
              <li>Backups & software installs/updates easy to do centrally</li>
              <li>Network security easy to control centrally</li>
            </ul>
          </div>

          <div className="disadvantages">
            <li><b>Disadvantages</b></li>
            <ul>
              <li>If the server fails all clients lose access to the network</li>
              <li>Server may be overloaded with too many simultaneous requests</li>
              <li>Set up & maintenance expensive (often specialists required)</li>
            </ul>
          </div>
        </ul>

        <li><b>Peer-to-peer</b></li>
        <ul>
          <li>All devices (nodes) equal, connect to each other</li>
          <li>Computers store their own files & send them to others upon request</li>
          <div className="advantages">
            <li><b>Advantages</b></li>
            <ul>
              <li>Easy maintenance</li>
              <li>No server dependence </li>
            </ul>
          </div>

          <div className="disadvantages">
            <li><b>Disadvantages</b></li>
            <ul>
              <li>No central management – backups more complicated, all done individually</li>
              <li>Nodes slow down while processing requests from other devices</li>
              <li>Files only able to be accessed if the device that stores them is online</li>
            </ul>
          </div>
        </ul>
      </ul>

      <p className="heading">Internet</p>
      <ul>
        <li>The internet is a WAN connecting networks globally (based around the TCP/IP protocol)</li>
        <li><b>Domain Name Server (DNS)</b></li>
        <ul>
          <li>Translates a website’s domain name (from its URL) into its IP address </li>
          <li>If a DNS miss occurs (IP not found) a larger DNS server contacted</li>
        </ul>

        <li><b>Hosting</b></li>
        <ul>
          <li>When a business stores files for another organisation – traditionally webhosting on the Internet</li>
        </ul>

        <li><b>How web browsers work</b></li>
        <ul>
          <li>The website is hosted on a webserver.</li>
          <li>The web browser sends the websites URL to the DNS which returns the website’s (or webserver’s) IP address.</li>
          <li>The web browser then sends a request to the webserver for the website linked to the IP address</li>
        </ul>
        
        <li><b>Internet traffic</b></li>
        <ul>
          <li>WWW (websites), email, multiplayer games, video streaming</li>  
        </ul>

        <li><b>The Cloud</b></li>
        <ul>
          <li>Remotely accessed storage & services via. The Internet (form of hosting) - Modern use of hosting</li>
          <li>Data can be stored on a server anywhere</li>
          <li>Uses of the Cloud</li>
          <ul>
            <li>Server hosting</li>
            <li>Storage of files</li>
            <li>Hosting applications</li>
            <li>Streaming</li>
          </ul>

          <div className="advantages">
            <li><b>Advantages</b></li>
            <ul>
              <li>Access from anywhere</li>
              <li>Easy to increase capacity</li>
              <li>No need to buy expensive extra hardware</li>
              <li>Cloud host provides backup services</li>
              <li>Perfect for travellers & low-powered device</li>
              <li>Low cost – only pay for the services you use</li>
            </ul>
          </div>

          <div className="disadvantages">
            <li><b>Disadvantages</b></li>
            <ul>
              <li>Requires an internet connection</li>
              <li>Dependent on host for backups</li>
              <li>Data vulnerable to hacking</li>
              <li>Ownership of data is unclear (host may claim copyright etc.)</li>
              <li>Hardware may have more capacity</li>
              <li>Access speeds impacted by network traffic</li>
              <li>Costs can be changed whenever by the host</li>
            </ul>
          </div>
        </ul>
      </ul>

      <p className="heading">Virtual Networks</p>
      <ul>
        <li>Software-based network, some of the physical network’s bandwidth sectioned off </li>
        <li>Several virtual networks can run on the same physical network (share hardware) - cheaper</li>
        <li><b>Virtual Private Network (VPN)	</b></li>
        <ul>
          <li>Type of virtual network were data can be sent securely (a tunnel is set up between communicating devices with encryption)</li>
          <li>Allows remote access</li>
        </ul>

        <li><b>Virtual LAN (VLAN)</b></li>
        <ul>
          <li>Setup a LAN into several separate networks using the same hardware </li>
          <li>E.g. split into departments so security is increased as malware is contained </li>
        </ul>
      </ul>
    </div>
  )
}

export default Component14;