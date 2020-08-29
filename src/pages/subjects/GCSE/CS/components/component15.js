import React from 'react';

const Component15 = () => {
  return (
    <div id="comp1_5" className="topic">
      <h4>Component 1.5 - Network topologies, protocols & layers</h4>

      <div className="key-words">
        <p className="heading">KEY WORDS</p>
        <ul>
          <li><b>Latency</b> - how long it takes a message to travel from one device to another across a network (delay caused by interference)</li>
          <li><b>Error rate</b> - how reliably packets are transmitted </li>
          <li><b>Jitter</b> - effect of congestion on receiving of packets (delay between packets causing buffering)</li>
          <li><b>Ethernet</b> - an array of networking technologies used in LANs for physical connections</li>
          <li><b>Protocol</b> - set of rules for how devices communicate (e.g. language, size of packets, what to do with corrupted packets, what network ports to use)</li>
          <li><b>Layers</b> - group of protocols with a similar function</li>
        </ul>
      </div>

      <p className="heading">Network Topologies</p>
      <ul>
        <li><b>Star</b></li>
        <ul>
          <li>All devices connected to a central switch</li>
          <img src="https://bam.files.bbci.co.uk/bam/live/content/z7rscqt/large" alt="A central switch connected to devices each by a single cable" />
          <div className="advantages">
            <li><b>Advantages</b></li>
            <ul>
              <li>If a device or cable fails, the network isn’t impacted</li>
              <li>Adding devices is easy - only 1 wire required</li>
              <li>All devices can transmit data & once without data collision</li>
              <li>Security is central (firewall at the switch)</li>
            </ul>
          </div>

          <div className="disadvantages">
            <li><b>Disadvantages</b></li>
            <ul>
              <li>If the switch fails, the whole network fails</li>
            </ul>
          </div>
        </ul>

        <li><b>Mesh</b></li>
        <ul>
          <li>Devices are connected to other devices in the network (decentralised)</li>
          <li>Data sent along the fasted route </li>
          <li>Full mesh - Every device connected to all other</li>
          <li>Partial mesh - Not all devices connect to all other</li>

          <img src="https://bam.files.bbci.co.uk/bam/live/content/zhwrjhv/large" alt="nodes/computers, each node is connected to every other node" />

          <div className="advantages">
            <li><b>Advantages</b></li>
            <ul>
              <li>No single point of failure, any failure a different route can be used</li>
              <li>Quick communication – so many connections & routes (avoid data collision)</li>
              <li>Well suited to wireless networks (or small wired)</li>
            </ul>
          </div>

          <div className="disadvantages">
            <li><b>Disadvantages</b></li>
            <ul>
              <li>Expensive due to wiring (well-suited to wireless)</li>
              <li>Hard to find faults (so many connections)</li>
            </ul>
          </div>
        </ul>

        <li><b>Others</b><em>(Not in specification)</em></li>
        <ul>
          <li><b>Ring</b> - device connected to the next and data flows in 1 direction (no collisions) only one device sends data at once and it travels through many computers</li>
          <li><b>Bus</b> - all devices connection to a single backbone cable, data sent bi-directionally (lots of collision)</li>
        </ul>
      </ul>

      <p className="heading">Wi-Fi</p>
      <ul>
        <li>Wireless networks use radio waves for communication</li>
        <li><b>Frequency</b> - there are 2 frequency bands</li>
        <ul>
          <li>2.4GHz - better range, less affected by obstacles</li>
          <li>5GHz – faster over short distances</li>
        </ul>

        <li><b>Channels </b> - reduce interference, increase amount of data that can be sent</li>
        <ul>
          <li>The two 1 GHz bands are split into channels</li>
          <li>2.4GHz has 13 overlapping channels (1, 6, 11 don’t so) overlap causes interference</li>
          <li>5 GHz has 24 non-overlapping channels, so interference is less likely</li>
        </ul>

        <li><b>Encryption</b></li>
        <ul>
          <li>Data is translated into code only the correct key can access</li>
          <li>Essential for secure data transfer</li>
        </ul>

        <li><b>Security</b> <em>(not in specification)</em></li>
        <ul>
          <li>Wired Equivalent Privacy (WEP) – weak, password required (no encryption)</li>
          <li>Wi-Fi Protected Access (WPA) – password & encryption </li>
          <li>Wi-Fi Protected Access Version 2 (WPA V2) – improved encryption algorithm</li>
        </ul>
      </ul>

      <p className="heading">Ethernet</p>
      <ul>
        <li>Cables used to connect devices in a LAN - Cat & Coaxial use electrical signals </li>
        <li>Cat 5, 5e, 6 are twisted pair cables containing 4 copper wires twisted to reduce interference</li>
        <li>Coaxial cables use a single copper wire surrounded by plastic and a metallic mesh </li>
        <li>Fibre optic cables use light – high speed (expensive) no interference so can travel long distances</li>
      </ul>

      <p className="heading">Protocols</p>
      <ul>
        <li><b>IP addresses</b> - ensure devices can communicate over the internet </li>
        <ul>
          <li>Used when sending data via. TCP/IP over the Internet</li>
          <li>IP addresses aren’t linked to hardware</li>
          <li>Privacy of IP adresses</li>
          <ul>
            <li>Private – within a LAN (switches)</  li>
            <li>Public – connecting LAN to a WAN (routers)</li>
          </ul>

          <li>Forms of IP address</li>
          <ul>
            <li>Static – permanent used to connect printers to LANs & hosting (big) websites, VERY expensive</li>
            <li>Dynamic – assigned to a device each time it connects to a network, cost effective and can be reused</li>
          </ul>
          <li>You mix the 2, e.g. a private static IP address</li>

          <li>2 versions</li>
          <ul>
            <li>IPv4 (32-bit or 4 denary numbers 0-255 seperated by '.')</li>
            <li>IPv6 (128-bit or 8 hexadecimal seperated by ':') - used because IPv4 ran out of possibilities</li>
          </ul>
        </ul>

        <li><b>MAC addresses</b></li>
        <ul>
          <li>Every network-enabled device has a unique MAC address, pre-manufactured </li>
          <li>48 or 64 bit (represented as a hexadecimal number)</li>
          <li>1st half, the manufacturer details – 2nd half, individual device</li>
          <li>Used by the Ethernet protocol within LANs – used by the Switch (for local data transmission)</li>
        </ul>

        <li><b>Protocols</b></li>
        <ul>
          <li><b>TCP/IP </b></li>
          <ul>
            <li>Transmission Control Protocol/Internet Protocol</li>
            <li>TCP – sets up packet switching rules</li>
            <li>IP – responsible for packet switching</li>
          </ul>

          <li><b>HTTP </b></li>
          <ul>
            <li>Hyper Text Transfer Protocol</li>
            <li>Used by web browsers to communicate with web servers & access websites</li>
            <li>Using requests & responses</li>
          </ul>

          <li><b>HTTPS </b></li>
          <ul>
            <li>Hyper Text Transfer Protocol Secure</li>
            <li>Secured HTTPs – using encryption (secure socket layer, SSL)</li>
            <li>E.g. for online banking</li>
          </ul>

          <li><b>FTP </b></li>
          <ul>
            <li>File Transfer Protocol</li>
            <li>Access & move files between devices on a network</li>
          </ul>

          <li><b>POP </b></li>
          <ul>
            <li>Post Office Protocol</li>
            <li>Retrieve emails from web servers (holds email until downloaded)</li>
            <li>Asynchronous - emails can be stored on a single device</li>
          </ul>

          <li><b>IMAP (Newer than POP but less features)</b></li>
          <ul>
            <li>Internet Message Access Protocol</li>
            <li>Retrieves emails from web servers (holds email until user deletes it)</li>
            <li>Synchronous - emails can be stored on many devices</li>
            <li>Used by web-based email</li>
          </ul>

          <li><b>SMTP</b></li>
          <ul>
            <li>Simple Mail Transfer Protocol</li>
            <li>Used to send emails & transfer emails between servers</li>
          </ul>

          <li>To remember difference between IMAP & SMTP - just think 'S for send' in SMTP</li>
        </ul>
      </ul>

      <p className="heading">Layers</p>
      <ul>
        <li>Layers are self-contained, but each layer serves the layer above it e.g. sending an email on Layer 4 triggers Layer 3 then 2 then 1.</li>
        <li><b>Layers in the TCP/IP stack (ATIN/ATIL)</b> - what they do & the protocols included within them</li>
        <ul>
          <li><b>Application layer</b></li>
          <ul>
            <li>Allows access to network resources e.g. web browsers & mail services</li>
            <li>FTP, HTTP(S), SMTP, IMTP (or POP)</li>
          </ul>

          <li><b>Transport layer</b></li>
          <ul>
            <li>Setting up communication, Handshaking – decide packet size, language, error checking</li>
            <li>Splitting or joining of packets</li>
            <li>TCP</li>
          </ul>

          <li><b>Internet  layer</b></li>
          <ul>
            <li>Where packets are made & sent </li>
            <li>Reading or setting packet addresses</li>
            <li>IP</li>
          </ul>

          <li><b>Network/Link layer</b></li>
          <ul>
            <li>Where data is sent</li>
            <li>Ethernet Protocol – defines use of physical connections to send data</li>
            <li>Wi-fi Protocol – defines use of radio waves to send data</li>
          </ul>
        </ul>

        <div className="advantages">
          <li><b>Advantages of using layers</b></li>
          <ul>
            <li>Breaks communication into manageable pieces, helps concentrate on 1 area</li>
            <li>Self-contained so can be edited, without affecting other layers</li>
            <li>Set rules for each layer force companies to make universal hardware & software</li>
          </ul>
        </div>
      </ul>

      <p className="heading">Packet Switching</p>
      <ul>
        <li>Controlled by the router directing data onto the Internet (or any WAN from LAN) using IP addresses</li>
        <li>When sending data packet switching is used (e.g. opening a link on a web browser)</li>
        <li><b>Process</b></li>
        <ol>
          <li>Request split into equally sized packets (the data in the packet is called the payload)</li>
          <li>Packet labelled with a header:</li>
          <ol type="a">
            <li>Sender & receiver IP address</li>
            <li>Number (order) in bundle & number of packets in bundle</li>
            <li>Checksum number (validation)</li>
          </ol>

          <li>Router sends packets across network</li>
          <li>Host server receives packets</li>
          <li>Server checks if all packets received (and checksum digits match)</li>
          <li>If not...</li>
          <ol type="a">
            <li>Time out error sent to request a resend of packets (if not received after a given time)</li>
          </ol>

          <li>If they have...</li>
          <ol type="a">
            <li>packets put in order</li>
            <li>request process by host (e.g. the webserver which would then send the website to the browser for it to be displayed on the client's screen)</li>
          </ol>
        </ol>
        <li>Packets have 2 parts: the payload (data) & header (the 5 labels)</li>

        <div className="advantages">
          <li><b>Advantages</b></li>
          <ul>
            <li>Allows data to be sent efficiently (data split into packets and can reach the host with different routes avoiding congestion)</li>
          </ul>
        </div>

      </ul>
    </div>
  )
}

export default Component15;