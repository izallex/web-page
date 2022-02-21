import rightTag from './right_tag.svg';
import leftTag from './left_tag.svg';
import './App.css';

function App() {
  return (
    <div>
    <header>
    <div style={{display:'flex', flexDirection:'row', marginTop:'2%'}}>
      <div style={{width:'50%'}}>
    <img src ={leftTag} style={{width:'40%',float:'right'}} /></div>
    <div  style={{fontSize: '300%', fontStyle:'oblique', color:'white', width:'21%',float:'right'}}>
     Web Design
    </div>
    <div style={{width:'20%',float:'left'}}>
       <img src ={rightTag} style={{width:'70%'}} /> </div>
    <div style={{float:'left', height:'50%',fontSize: '100%', fontStyle:'oblique', color:'white', width:'30%'}}>
     by Alexandra Hirsch
    
     </div>
    

   </div>
   </header>
   <main>

   </main>
   <footer>

   </footer>
   </div>
  );
}

export default App;
