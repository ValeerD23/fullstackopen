import { useState } from "react";

const StatisticLine = (props) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>{props.text}</td>

            <td>{props.value}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const Button = (props) => {
  return <button onClick={props.handleClicks}>{props.text}</button>;
};

const Statistics = (props) => {
  if (!(props.good || props.neutral || props.bad)) {
    return "No feedback given";
  } else {
    return (
      <>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine
          text="all"
          value={props.good + props.neutral + props.bad}
        />
        <StatisticLine
          text="average"
          value={
            (props.good - props.bad) / (props.good + props.neutral + props.bad)
          }
        />
        <StatisticLine
          text="positive"
          value={props.good / (props.good + props.neutral + props.bad)}
        />
      </>
    )
  }
}

//* App
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClicks = () => {
    return setGood(good + 1)
  }

  const handleNeutralClicks = () => {
    return setNeutral(neutral + 1)
  }

  const handleBadClicks = () => {
    return setBad(bad + 1)
  }

  return (
    <>
      <h2>give feedback</h2>
      <Button handleClicks={handleGoodClicks} text="good" />
      <Button handleClicks={handleNeutralClicks} text="neutral" />
      <Button handleClicks={handleBadClicks} text="bad" />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App;
