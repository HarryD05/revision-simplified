import React, { useContext } from 'react';

//Context
import { LocationContext } from '../context/LocationContext';

const Home = (props) => {
	const locContext = useContext(LocationContext);
	locContext.setCurrentSubject(null);

	return (
		<div className="home">
			<h1>Welcome to Revision Simplified</h1>
			<h3>
				<em>Good revision ---&gt; Good results</em>
			</h3>
			<p>
				The aim of this website is to help you get the best results possible in your exams, I will be using my
				revision notes to make revision content for all to use. However, because these are based on my revision
				notes, the content will be specific to the specifications of the exam boards I was doing exams for, once
				I have completed the final exams.
			</p>

			<h2>Current subjects covered</h2>
			<h3>GCSE</h3>
			<table>
				<thead>
					<tr>
						<th>Subject</th>
						<th>Spec. code</th>
						<th>GCSE grade</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>RE</td>
						<td>
							<a
								href="https://qualifications.pearson.com/content/dam/pdf/GCSE/Religious%20Studies/2016/Specification%20and%20sample%20assessments/Specification-GCSE-L1-L2-Religious-Studies-B-June-2016-Draft-4.pdf"
								target="_blank"
								rel="noopener noreferrer"
							>
								Edexcel B 2016 (ZB - 1C & 2B)
							</a>
						</td>
						<td>Coming 20-Aug-2020</td>
					</tr>
					<tr>
						<td>Computer Science</td>
						<td>
							<a
								href="https://ocr.org.uk/Images/225975-specification-accredited-gcse-computer-science-j276.pdf"
								target="_blank"
								rel="noopener noreferrer"
							>
								OCR (J726)
							</a>
						</td>
						<td>Coming 20-Aug-2020</td>
					</tr>
				</tbody>
			</table>

			<h2>
				Future subjects <em>(that will have revision notes)</em>
			</h2>
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
						<td>
							<a
								href="https://filestore.aqa.org.uk/resources/biology/specifications/AQA-8461-SP-2016.PDF"
								target="_blank"
								rel="noopener noreferrer"
							>
								AQA (8641)
							</a>
						</td>
					</tr>
					<tr>
						<td>Chemistry</td>
						<td>
							<a
								href="https://filestore.aqa.org.uk/resources/chemistry/specifications/AQA-8462-SP-2016.PDF"
								target="_blank"
								rel="noopener noreferrer"
							>
								AQA (8642)
							</a>
						</td>
					</tr>
					<tr>
						<td>Physics</td>
						<td>
							<a
								href="https://filestore.aqa.org.uk/resources/physics/specifications/AQA-8463-SP-2016.PDF"
								target="_blank"
								rel="noopener noreferrer"
							>
								AQA (8643)
							</a>
						</td>
					</tr>
					<tr>
						<td>Geography</td>
						<td>
							<a
								href="https://filestore.aqa.org.uk/resources/geography/specifications/AQA-8035-SP-2016.PDF"
								target="_blank"
								rel="noopener noreferrer"
							>
								AQA (8035)
							</a>
						</td>
					</tr>
					<tr>
						<td>History</td>
						<td>
							<a
								href="https://qualifications.pearson.com/content/dam/pdf/GCSE/History/2016/specification-and-sample-assessments/GCSE_History_(9-1)_Specification_Issue_2.pdf"
								target="_blank"
								rel="noopener noreferrer"
							>
								Edexcel 2016 - EJ (11, 2J, 30)
							</a>
						</td>
					</tr>
					<tr>
						<td>(possibly) English Literature</td>
						<td>
							<a
								href="https://filestore.aqa.org.uk/resources/english/specifications/AQA-8702-SP-2015.PDF"
								target="_blank"
								rel="noopener noreferrer"
							>
								AQA (8702)
							</a>
						</td>
					</tr>
					<tr>
						<td>(possibly) Spanish</td>
						<td>
							<a
								href="https://filestore.aqa.org.uk/resources/spanish/specifications/AQA-8698-SP-2016.PDF"
								target="_blank"
								rel="noopener noreferrer"
							>
								AQA (8698)
							</a>
						</td>
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
	);
};

export default Home;
