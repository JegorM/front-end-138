import "./Button.scss"

export default function Button({ children, type, size, classAdd }) {
  return (
    <button
      className={`
			button ${classAdd || ""} 
			button--${type || ""} 
			button--size--${size || ""}`}
    >
      {children}
    </button>
  )
}
