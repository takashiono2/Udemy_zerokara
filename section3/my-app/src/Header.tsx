import logo from './logo.svg';

type Props = {
  user: {
    name: string,
    age: number,
  };
};

const Header = (props: Props)=>{
  return(
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        {props.user.name},{props.user.age}
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
};
export default Header;