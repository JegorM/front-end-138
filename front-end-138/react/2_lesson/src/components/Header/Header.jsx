import Button from "../Button/Button"
import "../../css/style.scss"

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Button children="header" type={"primery"} size={"m"}></Button>
      </div>
    </header>
  )
}
