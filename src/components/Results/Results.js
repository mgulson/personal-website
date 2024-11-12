import React from 'react';
import './Results.css'
import { getVoteCount, getCodingLanguages } from '../../services/codingLanguagesBackend';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { HARDCODED, resultsHardcoded, codingLanguagesHardcoded } from '../../services/harcoded'


class Results extends React.Component  {
  constructor(props){
    super(props)
    this.state = { voteCount: null }
  }
  
async componentDidMount(){
  let voteCount, languages
  if(HARDCODED) {
    voteCount = resultsHardcoded
    languages = codingLanguagesHardcoded
  } else {    
    voteCount = await getVoteCount()
    languages = await getCodingLanguages()
    console.log(languages)
  }

  voteCount = this.convertVotes(voteCount, languages)
  this.setState({ voteCount })
}

  convertVotes(voteCount, languages){
    return Object.keys(voteCount).map( (key) => {
      let name = languages.at(Number(key) - 1).name
      return { name: name, votes: voteCount[key]}
    }
    )

  }

  render() {

    return(
      <div className='bar-chart'>
        <h1 className='results'>Results</h1>

      { 
      this.state.voteCount ? 
      <>
      <BarChart margin ={{ top: 20, right: 0, bottom: 0, left: 0}} width={500} height={500} data={this.state.voteCount}>
        <CartesianGrid strokeDasharray="4 4" />
        <XAxis interval={0} dataKey="name" />
        <YAxis />
        <Legend />
        <Bar dataKey="votes" fill="#8ac1de" />
      </BarChart>
      </>   : null
      }
      
      </div>
    )
  }
}

export default Results;