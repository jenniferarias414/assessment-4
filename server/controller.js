let goals = []
let globalID = 1
let currentStatus = 'Initial Status'


module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["Adventure can be real happiness.", "Change is happening in your life, so go with the flow!", "Do not expect romantic attachments to be strictly logical or rational.", "Go take a rest; you deserve it.", "He who knows he has enough is rich.", "Help! I am being held prisoner in a chinese bakery!"];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    createGoal: (req, res) => {
        req.body.id = globalID
        goals.push(req.body)
        globalID++
        res.status(200).send(goals)
    },

    deleteGoal: (req, res) => {
        const newArray = goals.filter((goal) => goal.id !== +req.params.id)
        goals = newArray
        res.status(200).send(goals)
    },

    getGoals: (req, res) => {
        res.status(200).send(goals)
    },

    updateStatus: (req, res) => {
        const {newStatus} = req.body
        currentStatus = newStatus
        res.status(200).send(currentStatus)
    }
}