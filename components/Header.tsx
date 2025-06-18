import { FunctionComponent } from "preact";

const Header: FunctionComponent = () => {
  return (
    <div class="menu">
      <a href="/">Todos</a>
      <a href="/fav">Favoritos</a>
    </div>
  );
};

export default Header;
