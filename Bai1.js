const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3)/3;
};

const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

console.log(avgDolphins1);
console.log(avgKoalas1);

const checkWinner = (avgDolphins1, avgKoalas1) => {
    if(avgDolphins1 >= avgKoalas1*2){
        console.log("Dolphins win (" + avgDolphins1 + " vs. " + avgKoalas1 + ")");
    }else if(avgKoalas1 >= avgDolphins1*2){
        console.log("Koalas win (" + avgKoalas1 + " vs. " + avgDolphins1 + ")");
    }else{
        console.log("No winner team!");
    }
}

checkWinner(avgDolphins1, avgKoalas1);

checkWinner(avgDolphins2, avgKoalas2);