import './App.css';

const goto = () => {
  window.location.href = 'https://www.github.com';
}
const goto2 = () => {
  window.location.href = 'https://yarin-website.netlify.app/';
}
function App() {
  return (
    <div className="MainContainer">
      <div className='MainHeader'>
        
        <div className='topMain'>

        <button onClick={() => { goto2() }} className='btnTop'>

<div className='innerBtnText'>
  Shopping list App
</div>
</button>
        <button onClick={() => { goto() }} className='btnTop'>

            <div className='innerBtnText'>
              My Github
            </div>
          </button>
          Yarin's Website
        </div>
        <div className='navBarMain'>
          <ul>
            <li>Home</li>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <li>News</li>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <li>Contact</li>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <li>About</li>
            &nbsp;&nbsp;&nbsp;&nbsp;
          </ul>
        </div>
      </div>
      <div className='BodyImage'></div>
      <div className='bottomMain'></div>
    </div>
  );
}

export default App;
