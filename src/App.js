import rightTag from './right_tag.svg';
import leftTag from './left_tag.svg';
import React from 'react';
import Button from '@material-ui/core/Button';
import { Link, Routes, Route} from "react-router-dom";
import Impressum from './Impressum.js';
import { useState } from 'react';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import NavbarComp from './NavbarComp';
import ProjectPage from './ProjectPage';
import ContactPage from './ContactPage';
import './App.css';

function App() {


	return (
		<div>
			
		
				<header style={{ display: 'flex', flexDirection: 'row' }}>

				<NavbarComp/>	
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
						<Route exact path="/web-design/projects" element={<ProjectPage/>}>

						</Route>
						<Route exact path="/web-design/contact" element={<ContactPage/>}>

						</Route>
						<Route exact path="/web-design/seo" onClick={(e) => e.preventDefault()}>

						</Route>

						<Route exact path="/web-design/hosting">

						</Route>

						<Route exact path="/web-design/impressum" element={<Impressum />}>

						</Route>
					</Routes>
				</main>
				<footer>
					
					<Routes>
					{['/web-design', '/web-design/projects', '/web-design/contact', '/web-design/seo', '/web-design/hosting'].map((path) => (
            <Route path={path} element={<Link to={"/web-design/impressum"} className="impressumLink">
								<u style={{ float: 'right', marginRight: '4%', color: 'white' }} >
								<span>Impressum</span>
								</u>
							</Link>} />
  ))}
						

						<Route exact path={"/web-design/impressum"} element={
                        	<Link to={"/web-design"} className="impressumLink">
							<u style={{ float: 'right', marginRight: '4%', color: 'white' }} >
						 <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}><FirstPageIcon style={{ marginTop: '5%' }} /><span>Zurück</span></div>
							</u>
						</Link>
						}>

						</Route>
					</Routes>
				</footer>
		</div>
	);
}

export default App;
