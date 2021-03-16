import './App.css';
import { ConfusionMatrix, AverageMethod } from '@fullexpression/confusion-matrix-stats';

const confusionMatrix = new ConfusionMatrix({
    labels: ["Happiness", "Sadness", "Disgust"], 
    matrix: [[50, 2, 3],
             [8, 50 ,5],
             [2, 5 ,50]]
});


function App() {
  const accuracy = confusionMatrix.accuracy();
  const f1Score = confusionMatrix.f1Score({ label: "Sadness", average: AverageMethod.Macro })
  return (
    <div className="App">
      <header className="App-header">
        <label class="description">Accuracy value for the all matrix:</label>
        <label class="value">{accuracy}</label>
        <br></br>
        <label class="description">F1Score, only for "sadness" class, using the Macro average method:</label>
        <label class="value">{f1Score}</label>
      </header>
    </div>
  );
}

export default App;
