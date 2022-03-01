import "./SkillsList.scss"

export default function SkillsList({id, title, active, setSelected}) {
  return (
        <li key={id} className={active ? "skillsList active" : "skillsList"} 
        onClick={() => setSelected(id) }>
            {title}
        </li>
  ); 
}
