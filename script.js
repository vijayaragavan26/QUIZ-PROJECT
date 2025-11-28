function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "123") {
        window.location.href = "quiz.html";
    } else {
        document.getElementById("msg").innerText = "Invalid login!";
    }
}

let questions = [
    {
        q: "HTML stands for?",
        A: "Hyper Text Markup Language",
        B: "High Text Makeup Language",
        C: "Hyperlinks Text Marking Language",
        D: "None",
        answer: "A"
    },
    {
        q: "CSS is used for?",
        A: "Styling",
        B: "Programming",
        C: "Storing Data",
        D: "Hacking",
        answer: "A"
    },
    {
        q: "JS stands for?",
        A: "Java Set",
        B: "JavaScript",
        C: "Jumbo Script",
        D: "None",
        answer: "B"
    },
    {
        q: "Which is a backend language?",
        A: "HTML",
        B: "CSS",
        C: "Java",
        D: "Photoshop",
        answer: "C"
    },
    {
        q: "Full form of URL?",
        A: "Uniform Resource Locator",
        B: "Universal Resource Login",
        C: "United Record Link",
        D: "None",
        answer: "A"
    }
];

let i = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("question").innerText = questions[i].q;
    document.getElementById("labelA").innerText = questions[i].A;
    document.getElementById("labelB").innerText = questions[i].B;
    document.getElementById("labelC").innerText = questions[i].C;
    document.getElementById("labelD").innerText = questions[i].D;
}

loadQuestion();

function nextQuestion() {
    let options = document.getElementsByName("option");
    let selected = "";

    for (let opt of options) {
        if (opt.checked) {
            selected = opt.value;
        }
    }

    if (selected === questions[i].answer) {
        score++;
    }

    i++;

    if (i < questions.length) {
        options.forEach(o => o.checked = false);
        loadQuestion();
    } else {
        localStorage.setItem("score", score);
        window.location.href = "result.html";
    }
}