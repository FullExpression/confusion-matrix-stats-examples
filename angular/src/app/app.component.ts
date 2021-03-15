import { Component } from '@angular/core';
import { AverageMethod, ConfusionMatrix } from '@fullexpression/confusion-matrix-stats'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'ConfusionMatrixAngularExamples';

    confusionMatrix = new ConfusionMatrix({
        labels: ["Happiness", "Sadness", "Disgust"],
        matrix: [[50, 2, 3],
        [8, 50, 5],
        [2, 5, 50]]
    });

    get accuracy(): number {
        return this.confusionMatrix.accuracy();
    }

    get f1Score(): number {
        return this.confusionMatrix.f1Score({ label: "Sadness", average: AverageMethod.Macro });
    }

}
