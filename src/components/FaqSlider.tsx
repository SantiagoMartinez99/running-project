type FaqSliderProps={
question:string;
answer:string;
}

function FaqSlider({question,answer}:FaqSliderProps) {
  return (
    <div className="collapse collapse-plus bg-base-200">
    <input type="radio" name="my-accordion-3" defaultChecked />
    <div className="collapse-title text-3xl font-bold text-primary">
      {question}
    </div>
    <div className="collapse-content text-2xl">
      <p className=" font-bold border-b-4 border-primary pb-2 text-accent">
      {answer}
      </p>
    </div>
  </div>
  )
}

export default FaqSlider