<template>
  <div class="hello">
    <h1>Accuracy value for the all matrix:</h1>
    <h2>{{ accuracy }}</h2>
    <br>
    <h1>F1Score, only for "sadness" class, using the Macro average method:</h1>
    <h2>{{ f1score }}</h2>
  </div>
</template>

<script>
import { ConfusionMatrix, AverageMethod } from '@fullexpression/confusion-matrix-stats';

const confusionMatrix = new ConfusionMatrix({
        labels: ["Happiness", "Sadness", "Disgust"],
        matrix: [[50, 2, 3],
        [8, 50, 5],
        [2, 5, 50]]
    });

export default {
  name: 'Example',
  data () {
      return {
          accuracy: confusionMatrix.accuracy(),
          f1score: confusionMatrix.f1Score({ label: "Sadness", average: AverageMethod.Macro })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
