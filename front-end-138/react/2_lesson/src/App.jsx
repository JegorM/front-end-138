import Button from "./components/Button/Button"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import "./css/style.scss"

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <section className="hero">
        <div className="container">
          <h1>Test1</h1>
          <Button
            classAdd="hero__button"
            type={"secondary"}
            children="Test button"
          />
        </div>
      </section>
      <section className="about">
        <div className="container">
          <h2>test2</h2>
          <Button type={"primery"} size={"m"} children="Submit" />
        </div>
      </section>
      <Footer />
    </div>
  )
}
