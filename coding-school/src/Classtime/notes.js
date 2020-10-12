class ActualHumanBeing extends React.Component {
    moods = [
      {
        name: "happy",
        text: ": )"
      },
      {
        name: "sad",
        text: ": ("
      },
      {
        name: "angry",
        text: ">: ("
      }
    ]
    
    render() {
      return this.moods.map((mood) => 
        <h1 className={mood.name} onClick={this.changeMood}>
          {mood.text}
        </h1>
      )
    }
  }
  
  app.show(<>
    <ActualHumanBeing></ActualHumanBeing>
  </>)