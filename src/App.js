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
      <img  alt="main"  className='BodyImage' src='https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=996&t=st=1663505375~exp=1663505975~hmac=0749692dfef8019c4e9680e4420d43043636f06ecd99d97365fc763a76b0b177'></img>
      <div className='bottomMain'></div>
    </div>
  );
}

export default App;
