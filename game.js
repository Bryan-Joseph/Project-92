user_1 = localStorage.getItem("user_1");
user_2 = localStorage.getItem("user_2");

/**<div class="bg-white" style="border-radius: 20px;">
            <h2 id="question" class="text-white"></h2>
            <h2 id="answer" class="text-white"></h2>
        </div> */

p1score = 0;
p2score = 0;

document.getElementById("user1Name").innerHTML = user_1 + " : ";
document.getElementById("user2Name").innerHTML = user_2 + " : ";

document.getElementById("user1Score").innerHTML = p1score;
document.getElementById("user2Score").innerHTML = p2score;

document.getElementById("question").innerHTML = "Question Turn - " + user_1;
document.getElementById("answer").innerHTML ="Answer Turn - " + user_2;

function send() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;

    answer = parseInt(num1) * parseInt(num2);

    question = "<h4 class='mt-3 ml-3'>" + num1 + " X " + num2 + "</h4>";
    answer = "<br><h4 class='ml-3 mr-1'>Answer : </h4><input type='text' id='ansI' style='width:200px;' class='form-control ml-3'>";
    button = "<br><br><button onclick='check' class='btn btn-success ml-3'>Check</button>"
    row = question + answer + button;
    document.getElementById("output").innerHTML = row;

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}