import { Header, Link } from "./AppBar.styled";

const AppBar = () => {
    return (
      <Header>
        <Link to="/">Home</Link>
        <Link to="/tweets">Tweets</Link>
      </Header>
    );
};

export default AppBar