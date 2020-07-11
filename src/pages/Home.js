import React from 'react';

const Home = props => {
  return (
    <div className="home">
      <h1>Welcome to RevisionSimplified</h1>
      <p>The aim of this website is to help you get the best results possible in your exams, I will be using my revision notes to make revision content for all to use. However, because these are based on my revision notes, the content will be specific to the specifications of the exam boards I was doing exams for, once I have completed the final exams.</p>

      <h2>Current subjects covered</h2>
      <h3>GCSE</h3>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Spec. code</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>RE</td>
            <td>Edexcel B 2016 (1C & 2B)</td>
          </tr>
          <tr>
            <td>Computer Science</td>
            <td>OCR (J726)</td>
          </tr>
        </tbody>
      </table>

      <h2>Future subjects</h2>
      <h3>GCSE</h3>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Spec. code</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Biology</td>
            <td>AQA (8641)</td>
          </tr>
          <tr>
            <td>Chemistry</td>
            <td>AQA (8642)</td>
          </tr>
          <tr>
            <td>Physics</td>
            <td>AQA (8643)</td>
          </tr>
          <tr>
            <td>Geography</td>
            <td>AQA (8035)</td>
          </tr>
          <tr>
            <td>History</td>
            <td>Edexcel 2016 - EJ (11, 2J, 30)</td>
          </tr>
          <tr>
            <td>(possibly) English Literature</td>
            <td>AQA (8702)</td>
          </tr>
          <tr>
            <td>(possibly) Spanish</td>
            <td>AQA (8698)</td>
          </tr>
        </tbody>
      </table>

      <h3>A-level</h3>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Possibility</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Maths</td>
            <td>Certain</td>
          </tr>
          <tr>
            <td>Further Maths</td>
            <td>Certain</td>
          </tr>
          <tr>
            <td>Computer Science</td>
            <td>Certain</td>
          </tr>
          <tr>
            <td>Physics</td>
            <td>Maybe</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Home;