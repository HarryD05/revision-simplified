import React from 'react';

const Component16 = () => {
  return (
    <div id="comp1_6" className="topic">
      <h4>Component 1.6 - System security</h4>

      <div className="key-words">
        <p className="heading">KEY WORDS</p>
        <ul>
          <li><b>Social engineering</b> - exploiting the fact that the human is always the weak point in a security system </li>
          <li><b>Phishing</b> - the act of gathering information by spoofing trustworthy websites for malicious intent</li>
          <li><b>Malware</b> - any piece of software that is harmful to your computer</li>
          <li><b>User access levels</b> - controlling what individual users can see & do on a device within a network</li>
          <li><b>Spoofing</b> - communication is sent from an unknown source disguised as a source known to the receiver</li>
        </ul>
      </div>

      <p className="heading">Forms of Attack</p>
      <ul>
        <li><b>Passive</b> – someone monitors data travelling on a network & intercepts any sensitive information</li>
        <ul>
          <li>Network-monitoring hardware such as packet sniffers are used</li>
        </ul>

        <li><b>Active</b> - the use of malware or other planned attacks</li>
      </ul>

      <p className="heading">Threats</p>
      <ul>
        <li><b>Malware </b></li>
        <ul>
          <li>malicious software installed on someone’s account without their knowledge or consent</li>
          <li>actions</li>
          <ul>
            <li>Deleting/modifying files</li>
            <li><b>Scareware</b> – telling the user they have viruses & scaring them into paying you</li>
            <li><b>Ransomeware</b> - Locking files or encrypts all files & a large sum of money is required for the decryption key</li>
            <li><b>Spyware</b> – monitors actions (i.e. key presses) and sends them to the hacker</li>
            <li><b>Rootkits</b> – alter permissions & give hackers administrator-level access</li>
            <li>Opening backdoors, holes in security allowing for future attack</li>
          </ul>

          <li>how they get access</li>
          <ul>
            <li><b>Viruses</b> – they attach to certain files (e.g. .exe & autorun/macros scripts), spread by files being copied & activated by the files being opened</li>
            <li><b>Worms</b> – viruses that self-replicate & exploit network security weaknesses</li>
            <li><b>Trojans</b> – malware disguised as legitimate software; they don’t replicate but users install them</li>
          </ul>
        </ul>

        <li><b>Weak Point (Social engineering) </b></li>
        <ul>
          <li>Gaining sensitive information by pressuring the user</li>
          <li>E.g. over the phone pretending to be the user’s bank asking for details such as username & password</li>
        </ul>

        <li><b>Phishing </b></li>
        <ul>
          <li>Form of social engineering, where criminals send emails or texts to people claiming they are a trusted business (e.g. bank) </li>
          <li>They often contain links to spoof versions of a company’s website, which requests the user’s details & personal information – then the hacker can use this info to get into the user’s actual account</li>
          <li>Phishing emails sent to 1000s of people simultaneously hoping at least 1 person falls for it</li>
          <li>Ways to avoid - spot bad grammar, most email services & firewalls have anti-phishing software</li>
          <li>The spelling mistakes are usually dilerbate, so that the people that fall for the scam are less likely to realise it is a scam.</li>
          <li>Spear phishing is where phishing is where the attack is moulded to a specific user, they are researched into & then for example, the hacker may immitate the language of a good friend</li>
        </ul>

        <li><b>SQL injection</b></li>
        <ul>
          <li><b>I suggest watching this <a href="https://youtu.be/QS6TE19n0Dg" target="_blank" rel="noopener noreferrer">youtube video</a> as this is quite complificated to explain (very worth your time)</b></li>
          <li>Network databases are vulnerable to SQL injection (SQL is the programming language used to access information in databases)</li>
          <li>SQL injections are pieces of SQL are inputted into a website’s input box</li>
          <ul>
            <li>E.g. if input validation is weak then SQL code could be inputted instead of a password</li>
            <ul>
              <li>For example, to access an online retail account you may need to put in a PIN number. When you put in your PIN number, 12345, the website's SQL code may execute...</li>
              <li>SELECT name, address, account-number WHERE pin = 12345</li>
              <li>However, this SQL code doesn't have strong validation because it doesn't specify that the pin has to be numerical. This can be exploited by entering the code: "12345 OR 1=1". This code is an SQL injection - now the SQL will look like...</li>
              <li>SELECT name, address, account-number WHERE pin = 12345 OR 1=1</li>
              <li>Since 1=1 is always true, the website will return all the details of everyone in the website's database (instead of just your account details)</li>
              <li>This is because when the SQL is executed, the conditional statement is tested against every row in the database, as 1=1 is always true the row will be added to the output/result.</li>
            </ul>
          </ul>
        </ul>

        <li><b>Brute force</b></li>
        <ul>
          <li>active attack where passwords try to be cracked using trial & error, using automated software producing hundreds of likely passwords</li>
        </ul>

        <li><b>Denial-of-service (DoS) </b></li>
        <ul>
          <li>stopping a user from accessing part of a network, by flooding the network with useless traffic, slowing down the network - done from a single user</li>
          <li>Distributed Dos (DDos) is when multiple computers or uses send useless requests (more effective)</li>
          <li>this means that when important data is sent, it may not be processed or there will be a long delay</li>
        </ul>

        <li><b>Insider</b></li>
        <ul>
          <li>someone within a company exploits their network access to steal information</li>
        </ul>

        <li><b>Data interception ("Man in the Middle" MitM attack)</b></li>
        <ul>
          <li>Someone monitors data travelling on a network (using packet sniffers) & intercepts then copies any sensitive information</li>
        </ul>
      </ul>

      <p className="heading">Identifying & Preventing Vulnerabilities</p>
      <ul>
        <li><b>Penetration Testing</b></li>
        <ul>
          <li>Organisations employ specialists to simulate attacks on their network</li>
          <li>Used to identify security weak points by trying to exploit them</li>
        </ul>

        <li><b>Network forensics</b></li>
        <ul>
          <li>Investigations to find the cause of attacks, a system of capturing data packets during transmission is needed</li>
          <li>After an attack, packets are analysed to discover how the attack occurred & how to prevent it recurring</li>
        </ul>

        <li><b>Anti-malware software</b></li>
        <ul>
          <li>Designed to stop malware damaging a network or device – often they isolate & destroy viruses</li>
        </ul>

        <li><b>Firewalls</b></li>
        <ul>
          <li>Security which controls/monitors incoming & outgoing data</li>
          <li>Unauthorised access is blocked & any potential threats are blocked</li>
        </ul>

        <li><b>User access levels</b></li>
        <ul>
          <li>Control which parts of the network different user groups can access</li>
          <li>User access levels help limit the amount of people with access to sensitive information to prevent insider attacks</li>
          <li>E.g. a manager would be able to reach more sensitive information (e.g. salaries) & have write-access to files where employees may only be able to read from them. Managers may even be able to change user access levels</li>
        </ul>

        <li><b>Passwords</b></li>
        <ul>
          <li>Help prevent unauthorised access</li>
          <li>Passwords should be strong (i.e. long, letters, numbers & symbols) and be changed regularly </li>
        </ul>

        <li><b>Encryption</b></li>
        <ul>
          <li>When data is translated so that only a user with the correct key can access the data (explained in component 1.7)</li>
        </ul>

        <li><b>A Good Network Policy</b></li>
        <ul>
          <li>Regular testing takes place to find security issues</li>
          <li>Passwords are used to prevent unauthorised access</li>
          <li>User access levels limit people accessing sensitive information</li>
          <li>Install anti-malware & firewall software</li>
          <li>Encrypt all sensitive data</li>
        </ul>
      </ul>
    </div>
  )
}

export default Component16;