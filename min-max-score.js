// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

function breakingRecords(scores) {
    let result = [];
    let min = 0;
    let max = 0;
    let minNum = scores[0];
    let maxNum = scores[0];
    for (let i = 1; i<scores.length;i++){
            if (scores[i] > maxNum){
                    maxNum = scores[i];
                    max++;
            }
            else if (scores[i] < minNum) {
                    minNum = scores[i];
                    min++;
            }
    }
    result.push(max, min);
    return result;

}
