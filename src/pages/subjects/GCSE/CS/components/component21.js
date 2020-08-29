import React from 'react';

//Assets
import FlowchartSymbols from './../../../../../assets/Flowchart-symbols.jfif';

const Component21 = () => {
	return (
		<div id="comp2_1" className="topic">
			<h4>Component 2.1 - Algorithms</h4>

			<div className="key-words">
				<p className="heading">KEY WORDS</p>
				<ul>
					<li><b>Flow diagram</b> - Graphical representation of an algorithm</li>
					<li><b>Pseudocode</b> - A method of describing an algorithm using a structure similar to aprogramming language</li>
					<li><b>Algorithm</b> - Step-by-step procedure used to complete a specific task</li>
				</ul>
			</div>

			<p className="heading">Computational thinking</p>
			<ul>
				<li><b>Abstraction </b></li>
				<ul>
					<li>Picking out the important parts from a problem, ignoring extra info</li>
				</ul>

				<li><b>Decomposition</b></li>
				<ul>
					<li>Breaking down a complex problem into smaller problems, to solve individually</li>
				</ul>

				<li>
					<b>Algorithmic </b>
				</li>
				<ul>
					<li>Logical way of getting from problem to solution, following an algorithm or set of steps (that can be modified and used to solve similar issues)</li>
				</ul>
			</ul>

			<p className="heading">Search algorithms</p>
			<ul>
				<li><b>Binary <em>(ordered list)</em></b></li>
				<ul>
					<li>find the middle item – (n + 1) / 2 </li>
					<li>If the middle item is the desired item</li>
					<li>If not check if the target is more or less than the current middle value, if it is more get rid of the left side, if it is less then then the right side</li>
					<li>Repeat steps 1 – 3 until the middle item is the target</li>
				</ul>

				<li><b>Linear <em>(unordered list)</em></b></li>
				<ul>
					<li>Search through every item left to right and check if the number is the target, if it is stop </li>
					<li>Linear searches are simpler but not as efficient (linear should only be used for small lists)</li>
				</ul>
			</ul>

			<p className="heading">Sorting algorithms</p>
			<ul>
				<li><b>BUBBLE</b></li>
				<ul>
					<li><b>Method</b></li>
					<ul>
						<li>Look at the first 2 items, compare them then swap them if they are in them wrong order</li>
						<li>Move onto the next pair (move forward 1) and do the same</li>
						<li> Reaching the end of the list is a pass, once a pass is completed without a swap the list is sorted</li>
					</ul>

					<div className="advantages">
						<li><b>Advantages</b></li>
						<ul>
							<li>Simple algorithm to implement</li>
							<li>Efficient way to check if the algorithm is already ordered, as only 1 pass will take place (n – 1 comparisons)</li>
							<li>Doesn’t use much memory as it only uses the original list</li>
						</ul>
					</div>

					<div className="disadvantages">
						<li><b>Disadvantages</b></li>
						<ul>
							<li>Inefficient, worst case is = n(n - 1) / 2 comparisons</li>
							<li>Unable to cope with very large lists</li>
						</ul>
					</div>
				</ul>

				<li><b>MERGE</b></li>
				<ul>
					<li><b>Method</b></li>
					<ul>
						<li>Split the list in half, until every sub list has 1 item</li>
						<li>Merge the lists so that each new list has doubled in size (merge them by placing the smallest number into the new list each item)</li>
						<li>Repeat until 1 list remains</li>
					</ul>

					<div className="advantages">
						<li><b>Advantages</b></li>
						<ul>
							<li>Efficient for larger lists</li>
							<li>Very consistent run time (always same number of steps for same sized list)</li>
						</ul>
					</div>

					<div className="disadvantages">
						<li><b>Disadvantages</b></li>
						<ul>
							<li>Even if list is ordered, the whole algorithm continues</li>
							<li>Slower for small lists</li>
							<li>Uses lots of memory as each step creates new lists</li>
						</ul>
					</div>
				</ul>

				<li><b>INSERTION</b></li>
				<ul>
					<li><b>Method</b></li>
					<ul>
						<li>Start at the second item</li>
						<li>Compare it to all the items before it and insert it to the correct position</li>
						<li>Repeat until the last item has been inserted into the correct place</li>
					</ul>

					<div className="advantages">
						<li><b>Advantages</b></li>
						<ul>
							<li>Easy to code</li>
							<li>Copes with small lists</li>
							<li>All sorting within original list, no need for additional memory</li>
							<li>Quick at checking already ordered lists </li>
							<li>Quick to add items to an ordered list</li>
						</ul>
					</div>

					<div className="disadvantages">
						<li>
							<b>Disadvantages</b>
						</li>
						<ul>
							<li>Worst case scenario = n(n – 1) / 2 comparisons</li>
							<li>Not efficient for large lists</li>
						</ul>
					</div>
				</ul>
			</ul>

			<p className="heading">Flow diagrams</p>
			<ul>
				<li>Standard flow chart symbols</li>
				<img src={FlowchartSymbols} alt="Standard flow chart symbols" />

				<li>2 examples</li>
				<ul>
					<li>Central heating</li>
					<img src="http://3.bp.blogspot.com/-xuhcsjKYF-c/VC5Rb5Q9N2I/AAAAAAAAAEI/tV6819fD7Pw/s1600/Heating.PNG" alt="example flow chart that mimics central heating" />

					<li>Calculating pay (includes psuedocode)</li>
					<img src="https://i.pinimg.com/736x/14/09/97/1409979cc38e309bcc6ba36cb9dca8a5--programming-languages-computer-programming.jpg" alt="example flow chart with pseudocode that calculates pay" />
				</ul>
			</ul>

			<p className="heading">Pseudocode</p>
			<ul>
				<li>
					<a
						href="https://beta.ocr.org.uk/Images/202654-pseudocode-guide.pdf"
						target="blank"
						rel="noopener noreferrer"
					>
						Pseudocode guide
					</a>{' '}
					from OCR
				</li>
			</ul>
		</div>
	);
};

export default Component21;
