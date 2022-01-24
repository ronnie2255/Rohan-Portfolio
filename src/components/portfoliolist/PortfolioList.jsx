import "./PortfolioList.scss"

export default function PortfolioList({id, title, active, setSelected}) {
  return (
        <li className={active ? "portfolioList active" : "poprtfolioList"} 
        onClick={() => setSelected(id) }>
            {title}
        </li>
  ); 
}
