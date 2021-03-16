import { ConfusionMatrix, AverageMethod } from '@fullexpression/confusion-matrix-stats';

console.log(`
#############################
###### Running Program ######
#############################
`);

const confusionMatrix = new ConfusionMatrix({
    labels: ["Happiness", "Sadness", "Disgust"],
    matrix: [[50, 2, 3],
    [8, 50, 5],
    [2, 5, 50]]
});

// Calculates the accuracy value for the all matrix.
const accuracy = confusionMatrix.accuracy();
console.log(`The accuracy value is: ${accuracy}`);

// Calculates the f1Score, only for "sadness" class, using the Macro average method.
const labelAccuracy = confusionMatrix.f1Score({ label: "Sadness", average: AverageMethod.Macro });
console.log(`The f1Score for 'Sadness' is ${labelAccuracy}`);

console.log(`
#############################
###### Finish Running #######
#############################
`);