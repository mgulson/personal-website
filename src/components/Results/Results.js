import React from 'react';
import './Results.css'
import { getVoteCount, getCodingLanguages } from '../../services/Services';
import BarChart from 'react-bar-chart'

class Results extends React.Component  {
  constructor(props){
    super(props)
    this.state = { voteCount: null }
  }
  
async componentDidMount(){
  let voteCount = await getVoteCount()
  let languages = await getCodingLanguages()
  console.log(voteCount)

  voteCount = this.convertVotes(voteCount, languages)
  console.log(voteCount)
  this.setState({ voteCount })
}

  convertVotes(voteCount, languages){
    return Object.keys(voteCount).map( (key) => {
      let name = languages.at(Number(key) - 1).name
      return { text: name, value: voteCount[key]}
    }
    )

  }

  render() {

    return(
      <div className='bar-chart'>
      { this.state.voteCount ? <BarChart margin ={{ top: 20, right: 20, bottom: 30, left: 40}} width={500} height={500} data={this.state.voteCount} /> : null }
      </div>
    )
  }
}

export default Results;