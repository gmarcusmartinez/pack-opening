import "./style.css"

export default function AnimatedCard() {
  return (
    <div className="card-container">
      <div className="card-front">Card Front</div>
      <div className="card-back">
        <img className="card-back-img" src="/public/images/card_back.png" />
      </div>
    </div>
  )
}
