import React from 'react';

const Component11 = () => {
  return (
    <div id="comp1_1" className="topic">
      <h4>Component 1.1 - System architecture (CPU)</h4>
      
      <div className="key-words">
      <p className="heading">KEY WORDS</p>
      <ul>
        <li><b>Address</b> - each memory location is identified by a unique one of these</li>
        <li><b>Architecture</b> - a term that describes the content & layout of a processor e.g. Von Neumann or Harvard</li>
        <li><b>FDE cycle</b> - this is repeated by a computer in order to carry out tasks</li>
        <li><b>Clock Speed</b> - the number of instructions the CPU can carry out per second, 1 Hz = 1 instruction per second</li>
      </ul>
      </div>

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
          <li><b>Memory address register (MAR)</b></li>
          <ul>
            <li>The address of the data/instruction being accessed is temporarily stored here</li>
            <li>Then the address is passed to the RAM via. the address bus</li>
          </ul>

          <li><b>Memory data register (MDR)</b></li>
          <ul>
            <li>During the FDE cycle the data/instruction from the RAM is temporarily stored in the MDR</li>
            <li>Data travels bi-directionally via. the data bus </li>
            <li>Instructions only travel away from RAM via. the data bus</li>
          </ul>
        </ul>

        <li><b>Program counter (PC)</b></li>
        <ul>
          <li>A register that holds the memory address of the next instruction then passes it to the MAR as the first step of the FDE cycle</li>
          <li>All data & instructions in memory (RAM/cache) have a unique & specific address</li>
        </ul>

        <li><b>Accumulator (ACC)</b></li>
        <ul>
          <li>A register that stores the immediate result of calculations from the ALU (within the ALU)</li>
        </ul>

        <li><b>Current instruction register (CIR)</b></li>
        <ul>
          <li>Splits the instruction received from RAM </li>
          <ul>
            <li><b>Opcode</b>: the function e.g. add, minus</li>
            <li><b>Operand</b>: the data e.g. 6, 14</li>
          </ul>
          <li>Sends calculations & logic to the ALU</li>
          <li>Sends instructions e.g. input/output to the CU</li>
        </ul>
      </ul>

      <p className="heading">Buses <em>(extra, but useful)</em></p>
      <ul>
        <li>The system bus contains 3 buses:</li>
        <ul>
          <li><b>Data</b> – transports data & instructions, RAM to CPU</li>
          <li><b>Address</b> – transports the address of instructions, from CPU to RAM</li>
          <li><b>Control</b> – controls communication with other parts of the device</li>
        </ul>
      </ul>

      <p className="heading">CPU Components</p>
      <ul>
        <li><b>Arithmetic Logic Unit (ALU)</b></li>
        <ul>
          <li>Performs arithmetic (e.g. +, -, *, /, %, ^) & logical operations (AND, OR, NOT & binary shifts)</li>
          <li>Also contains the ACC (stores the immediate result of calculations)</li>
        </ul>

        <li><b>Control Unit (CU)</b></li>
        <ul>
          <li>Moves data around the CPU</li>
          <li>Controls system hardware with control signals</li>
          <li>Controls the FDE cycle</li>
        </ul>

        <li><b>Cache</b></li>
        <ul>
          <li>Very fast memory, faster than RAM slower then registers</li>
          <li>Stores regularly used data for easy access by the CPU</li>
          <ul>
            <li>When the CPU fetches data the cache is checked before RAM</li>
          </ul>
          <li>Cache is low capacity & expensive compared the RAM & secondary storage</li>
          <li>There are 3 level, each level further away from the CPU (so slower) & higher capacity then the level below (Level 1 is the closest to the CPU so quickest but has the lowest capacity)</li>
        </ul>
      </ul>

      <p className="heading">CPU Function</p>
      <ul>
        <li><b>Overview</b></li>
        <ul>
          <li>Process data & instructions within the computer system (the ‘brain’)</li>
        </ul>

        <li><b>Fetch-Decode-Execute Cycle </b></li>
        <ul>
          <li><b>Fetch</b></li>
          <ol>
            <li>Program counter increments by 1</li>
            <li>Contents of the PC transferred to the MAR</li>
            <li>Address transferred via. the address bus to main memory (RAM)</li>
          </ol>

          <li><b>Decode</b></li>
          <ol start={4}>
            <li>The data/instruction that has been addressed is transferred via. the data bus back to the processor</li>
            <li>This is held in the MDR</li>
            <li>Then transferred to the CIR</li>
          </ol>

          <li><b>Execute</b></li>
          <ol start={7}>
            <li>The data/instruction is decoded by the CIR</li>
            <li>The instruction is split into the Opcode & Operand</li>
            <li>The instruction is carried out by the ALU or CU</li>
          </ol>
        </ul>
      </ul>

      <p className="heading">Factors effecting CPU performance</p>
      <ul>
        <li><b>Clock speed</b></li>
        <ul>
          <li>The higher the clock speed the more instructions can be carried out per second (per core)</li>
          <li>E.g. double clock speed, double amount Hz</li>
        </ul>

        <li><b>Number of cores</b></li>
        <ul>
          <li>Each core in a CPU can process data independently</li>
          <li>E.g. double number of cores may double speed, however threading (connections) reduce speed & tasks need to be designed for multi-core</li>
          <li>Most devices contain 4-cores nowadays</li>
        </ul>

        <li><b>Cache size</b></li>
        <ul>
          <li>Cache is high speed than RAM, where commonly used instructions & programs are stored</li>
          <li>So, a larger cache size means data can be received faster </li>
        </ul>
      </ul>

      <p className="heading">Embedded Systems</p>
      <ul>
        <li>Computers systems built into a larger device or appliance</li>
        <li><b>Purpose</b></li>
        <ul>
          <li>Monitor & control various components in the host device (one specific function)</li>
          <li>As they are dedicated to a single task, they are easy to design, cheaper to produce & very efficient</li>
        </ul>

        <li><b>Examples</b></li>
        <ul>
          <li>Washing machine, dishwasher, microwave, remote control, smart fridge</li>
          <li>Dishwasher, the embedded system may control the water pumps & thermostat</li>
        </ul>
      </ul>
    </div>
  )
}

export default Component11;