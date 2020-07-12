import React from 'react';

const Component11 = () => {
  return (
    <div id="comp1_1" className="topic">
      <h4>Component 1.1 - System architecture (CPU)</h4>

      <p className="heading">Key Words</p>
      <ul>
        <li>Address - each memory location is identified by a unique one of these</li>
        <li>Architecture - a term that describes the content & layout of a processor e.g. Von Neumann or Harvard</li>
        <li>FDE cycle - this is repeated by a computer in order to carry out tasks</li>
      </ul>

      <p className="heading">Purpose of the CPU</p>
      <ul>
        <li>Processing data</li>
        <li>Carrying out instructions</li>
      </ul>

      <p className="heading">Von-Neumann Architecture</p>
      <ul>
        <li>In the Von-Neumann architecture both instructions & data are stored in the same memory</li>
        <li>Registers are high-speed, low-capacity storage locations, which can be special or general purpose, rapid read/write</li>

        <li>General purpose registers</li>
        <ul>
          <li className="sub-heading">Memory address register (MAR)</li>
          <ul>
            <li>The address of the data/instruction being accessed is temporarily stored here</li>
            <li>Then the address is passed to the RAM via. the address bus</li>
          </ul>

          <li className="sub-heading">Memory data register (MDR)</li>
          <ul>
            <li>During the FDE cycle the data/instruction from the RAM is temporarily stored in the MDR</li>
            <li>Data travels bi-directionally via. the data bus </li>
            <li>Instructions only travel away from RAM via. the data bus</li>
          </ul>
        </ul>
        <li className="sub-heading">Program counter (PC)</li>
        <ul>
          <li>A register that holds the memory address of the next instruction then passes it to the MAR as the first step of the FDE cycle</li>
          <li>All data & instructions in memory (RAM/cache) have a unique & specific address</li>
        </ul>
        <li className="sub-heading">Accumulator (ACC)</li>
        <ul>
          <li>A register that stores the immediate result of calculations from the ALU (within the ALU)</li>
        </ul>
        <li className="sub-heading">Current instruction register (CIR)</li>
        <ul>
          <li>Splits the instruction received from RAM </li>
          <ul>
            <li><span className="sub-heading">Opcode</span>: the function e.g. add, minus</li>
            <li><span className="sub-heading">Operand</span>: the data e.g. 6, 14</li>
          </ul>
          <li>Sends calculations & logic to the ALU</li>
          <li>Sends instructions e.g. input/output to the CU</li>
        </ul>
      </ul>

      <p className="heading">Buses</p>
      <ul>
        <li>The system bus contains 3 buses:</li>
        <ul>
          <li><span className="sub-heading">Data</span> – transports data & instructions, RAM to CPU</li>
          <li><span className="sub-heading">Address</span> – transports the address of instructions, from CPU to RAM</li>
          <li><span className="sub-heading">Control</span> – controls communication with other parts of the device</li>
        </ul>
      </ul>

    </div>
  )
}

export default Component11;