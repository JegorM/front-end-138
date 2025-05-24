import Button from "../Button/Button"
import "../../css/style.scss"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Button children="footer" type={"primery"} size={"m"}></Button>
      </div>
    </footer>
  )
}
