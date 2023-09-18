import Header from "./components/Header";
import ConceptsCard from "./components/ConceptsCard";
import bitcoinImage from "./img/bitcoin.png";
import etheriumImage from "./img/etherium.png";
import tetherImage from "./img/tether.png";

const concepts = [
  {
    title: "Bitcoin",
    image: bitcoinImage,
    description:
      "Bitcoin is a decentralized digital currency that was invented in 2008. It is the first and most well-known cryptocurrency, and it operates on a technology called blockchain.",
  },
  {
    title: "Etherium",
    image: etheriumImage,
    description:
      "Ethereum is a decentralized, open-source blockchain platform that was proposed in late 2013. Ethereum is designed to be a platform for building decentralized applications and smart contracts.",
  },
  {
    title: "Tether",
    image: tetherImage,
    description:
      "Tether is known as a stablecoin. It was one of the first stablecoins to gain widespread adoption and remains one of the most popular stablecoins in the market. ",
  },
];

function App() {
  return (
    <div>
      <Header />

      <ul id="concepts">
        <ConceptsCard item={concepts[0]} />
        <ConceptsCard item={concepts[1]} />
        <ConceptsCard item={concepts[2]} />
      </ul>
    </div>
  );
}

export default App;
