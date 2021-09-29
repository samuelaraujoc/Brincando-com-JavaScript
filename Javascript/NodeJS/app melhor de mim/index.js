const questions = [
    "o que aprendi hoje?",
    "Oq me deixou aburrecido? e o que eu poderia fazer para melhorar?",
    "Oq me deioxu feliz hoje?",
    "Quantas pessoas eu ajudei hoje?",
]
const ask = (index = 0) => {
    process.stdout.write("\n\n" + questions[index] + " > ")
}
ask()

const answers= []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
  if (answers.length < questions.length){
      ask(answers.length)
  } else{
      console.log(answers)
      process.exit()
  }
})

process.on('exit', () =>{
    console.log(`
    Bacana Samuel!

    O que você aprendeu hoje foi:
    ${answers[0]}
    
    O que te aburreceu e você poderia melhorar foi:
    ${answers[1]}

    O que te deixou feliz hoje:
    ${answers[2]}
    
    você ajudou hoje ${answers[3]} pessoas hoje!

    Volte amanhã para novas reflexões
    `)
})