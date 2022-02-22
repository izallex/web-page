import rightTag from './right_tag.svg';
import leftTag from './left_tag.svg';
import React from 'react';
import Button from '@material-ui/core/Button';
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import Impressum from './Impressum.js'
import './App.css';

function App() {
	return (
		<div>
			<BrowserRouter>
				<header style={{ display: 'flex', flexDirection: 'row' }}>

					<div style={{ width: '43%' }}>
						<img src={leftTag} style={{ float: 'right' }} />
					</div>
					<div style={{ float: 'right' }}>
						<h1 style={{ fontStyle: 'oblique', color: 'white', marginLeft: '4%' }} >Webdesign</h1>
					</div>
					<div style={{ float: 'left' }}>
						<img src={rightTag} />
					</div>
					<div style={{ float: 'left', height: '50%', fontSize: '100%', fontStyle: 'oblique', color: 'white', marginTop: '1%' }}>
						by Alexandra Hirsch
					</div>
					{/*<nav>
						<Link to="/web-design">
							Home
						</Link>
						<Link to="/training">
							Training
						</Link>
						<Link to="/datenupload">
							Datasets
						</Link>
						<Link to="/evaluation">
							Evaluation
						</Link>
						<Link to="/help">
							Help
						</Link>
					</nav> */}
				</header>
				<main>

					<Routes>
						<Route exact path="/web-design">

						</Route>
						<Route exact path="/training">

						</Route>
						<Route exact path="/datenupload">

						</Route>
						<Route exact path="/evaluation" onClick={(e) => e.preventDefault()}>

						</Route>

						<Route exact path="/help">

						</Route>

						<Route exact path="/web-design/impressum" element={<Impressum/>}>
                      
						</Route>
					</Routes>
				</main>
				<footer>
					<Link to="/web-design/impressum" className="impressumLink">
						<u style={{ float: 'right', marginRight: '4%', color: 'white' }}>Impressum</u>
					</Link>
				</footer></BrowserRouter>
		</div>
	);
}

export default App;
