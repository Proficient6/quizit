let readlineSync = require("readline-sync");
let kuler = require("kuler");
let playerName = readlineSync.question("Enter your name: ");
let highlihtedname = kuler(playerName, "#db2777");
let points = 0;

console.log(
  kuler(`\nwelcome ${highlihtedname} to your quizit contest`, "#b45309"),
);

console.log(
  `\nGAME RULES:-\n 1.There are ${kuler("5 questions", "#0e7490")} in this quiz.\n 2.Each question has ${kuler("4 options", "#0e7490")}.\n 3.Each question has ${kuler("1 correct answer", "#0e7490")}.\n 4.You will get ${kuler("1 point", "#0e7490")} for each correct answer.\n 5.Select the correct option by typing the ${kuler("option number A/B/C/D", "#0e7490")}.\n 6.${kuler("There is no negative marking", "#0e7490")}.\n`,
);

let database = {
  data: [
    {
      question: "who among the following have been nominated for the nobel prize in 2025?\n",
      options:{
        A:"Narendra modi",
        B:"Barak Obama",
        C:"Donald Trump",
        D:"Pope Francis",
      },
      correctAnswer: "C",
    },
    {
      question: "what is the formula of Force👀\n",
      options:{
        A: "F=MA^2",
        B: "F=MA",
        C: "F=BA",
        D: "F=MSc.",
      },
      correctAnswer:"B",
    },
    {
      question: "Largest district of India\n", 
      options:{
        A: "Lucknow",
        B: "Kutch",
        C: "Chennai",
        D: "Mumbai",
      },
      correctAnswer: "B",
    },
    {
      question: "First person to Moon?\n",
      options: {
        A: "Edwin Aldrin",
        B: "Neil Armstrong",
        C: "Yuri Gagrin",
        D: "Yoda",
      },
      correctAnswer: "B",
    },
    {
      question: "Who won UEFA champions league 2k25\n",
      options: {
        A: "Barcelona",
        B: "Arsenal",
        C: "Man Utd",
        D: "PSG",
      },
      correctAnswer: "D",
    },
  ],
};

const leaderboard ={
  data: [
    {
      Name: "Kevin",
      Score: 5,
    },
    {
      Name: "Parth",
      Score: 5,
    },
    {
      Name: "Rakshit",
      Score: 2,
    },
    {
      Name: "Suleman",
      Score: 0,
    },
  ],
};

function play(useranswer,correctanswer){
  if(useranswer.toUpperCase()===correctanswer){
    points++;
    console.log(kuler("Correct answer\n",'#65a30d'));
  }
  else{
    console.log(kuler("Wrong answer",'#b91c1c'));
    console.log(kuler(`Correct answer is ${correctanswer}\n`,'#a21caf'));
  }
}

function showQ(Database){
  for(let i=0; i<database.data.length;i++){
    console.log(kuler(`q${i+1}: ${database.data[i].question}\n`,'#eab308'));
    for(let key in database.data[i].options){
      console.log(kuler(`${key}: ${database.data[i].options[key]}`,'#6d28d9'));
    }
    let useranswer=readlineSync.question("\nGive ans : A/B/C/D\n");
    play(useranswer,database.data[i].correctAnswer);
  }
}

function showLeaderboard(leaderboard){
  leaderboard.data.push({Name:playerName,Score:points});
  let sortedLeaderboard=leaderboard.data.sort((a,b)=>b.Score-a.Score);
  console.log(kuler("Check leaderboard\n",'#14b8a6'));
  for(let i=0;i<sortedLeaderboard.length;i++){
    console.log(kuler(`${i+1}. ${sortedLeaderboard[i].Name} : ${sortedLeaderboard[i].Score}\n`,'#fda4af'));
  }
}

showQ(database);
console.log(kuler(`\nYour total score is ${points}🥂\n`,'#fda4af'));
showLeaderboard(leaderboard);