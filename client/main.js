const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const form = document.querySelector("#goal-form")
const goal = document.querySelector("#goal-input")
const container = document.querySelector("#goal-container")

const getAllGoals = () => {
    axios
        .get('http://localhost:4000/api/goals')
        .then((res) => {
            container.innerHTML = ""
            console.log(res.data)
            res.data.forEach(createGoal)
        })
        .catch((err) => {
            console.error(err)
        })
}

const createGoal = (goal) => {
    let h4 = document.createElement('h4')
    h4.textContent = `${goal.name}`
    h4.addEventListener('click', () => deleteGoal(goal))
    container.appendChild(h4)
}

const handleSubmit = (event) => {
    event.preventDefault() //always 1st line of code when handling a form submission
    const body = {
        name: goal.value
    }
    axios
        .post('http://localhost:4000/api/goals', body)
        .then((res) => {
            container.innerHTML = ""
            console.log(res.data)
            res.data.forEach(createGoal)
        })
        .catch((err) => {
            console.error(err)
        })
}

const deleteGoal = (taskObj) => {
    console.log(taskObj)
    axios
        .delete(`http://localhost:4000/api/goals/${taskObj.id}`)
        .then((res) => {
            container.innerHTML = ""
            console.log(res.data)
            res.data.forEach(createGoal)
        })
        .catch((err) => {
            console.error(err)
        })
}

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
form.addEventListener('submit', handleSubmit)

getAllGoals()