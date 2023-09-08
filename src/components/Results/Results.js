import React from 'react';
import './Results.css'
import { getVoteCount, getCodingLanguages } from '../../services/Services';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


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
        <Tooltip />
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