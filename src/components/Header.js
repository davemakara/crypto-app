import cryptoImage from "../img/crypto.png";

const Header = () => {
  return (
    <header>
      <img src={cryptoImage} alt="Medal badge with a star" />
      <h1>Crypto Is The Future</h1>
      <p>Selected Cryptocurrencies you should know about</p>
    </header>
  );
};

export default Header;
