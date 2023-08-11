const questions = [
    {
        imageSrc: 'question1.jpg',
        questionText: 'ما هو عاصمة فرنسا؟',
        options: ['باريس', 'لندن', 'مدريد'],
        correctOption: 'باريس'
    },
    {
        imageSrc: 'question2.jpg',
        questionText: 'ما هو أكبر كوكب في النظام الشمسي؟',
        options: ['الزهرة', 'المشتري', 'الأرض'],
        correctOption: 'المشتري'
    },
    {
        imageSrc: 'question3.jpg',
        questionText: 'ما هي أكبر دولة في العالم',
        options: ['فرنسا', 'الصين', 'روسيا'],
        correctOption: 'روسيا'
    }
    ,{
        imageSrc: 'question4.jpg',
        questionText: 'ما هي أجمل جزر في العالم؟',
        options: ['الكنز', 'المالديف', 'هواي'],
        correctOption: 'المالديف'
    }
    ,{
        imageSrc: 'question5.jpg',
        questionText: 'ما هي أكبر جزيرة في إفريقيا',
        options: ['الجزائر', 'موريتانيا', 'المغرب'],
        correctOption: 'الجزائر'
    }
    ,{
        imageSrc: 'question6.jpg',
        questionText: 'من  هو المنتخب الدي فاز في كأس العالم عام 2018',
        options: ['الأرجنتين', 'ألمانيا', 'فرنسا'],
        correctOption: 'فرنسا'
    }
    ,{
        imageSrc: 'question7.jpg',
        questionText: 'كم عدد الأهداف التي سجلة في نهائي كأس العالم 2022',
        options: ['2', '4', '6'],
        correctOption: '6'
    }
    ,{
        imageSrc: 'question8.jpg',
        questionText: '25 * 4 /  5',
        options: ['20', '15', '40'],
        correctOption: '20'
    }
    ,{
        imageSrc: 'question9.jpg',
        questionText: '1000 - 500 -200 -300 + 1',
        options: ['1', '200', '201'],
        correctOption: '1'
    }
    // يمكنك إضافة المزيد من الأسئلة هنا
];

let currentQuestionIndex = 0;
let score = 0;

const imageElement = document.getElementById('image');
const questionTextElement = document.getElementById('questionText');
const optionAElement = document.getElementById('optionA');
const optionBElement = document.getElementById('optionB');
const optionCElement = document.getElementById('optionC');
const optionDElement = document.getElementById('optionD');
const optionEElement = document.getElementById('optionE');
const optionFElement = document.getElementById('optionF');
const optionGElement = document.getElementById('optionG');
const optionHElement = document.getElementById('optionH');
const optionKElement = document.getElementById('optionK');
const scoreElement = document.getElementById('score');

function displayQuestion(index) {
    const question = questions[index];
    imageElement.src = question.imageSrc;
    questionTextElement.textContent = question.questionText;
    optionAElement.textContent = question.options[0];
    optionBElement.textContent = question.options[1];
    optionCElement.textContent = question.options[2];
    optionDElement.textContent = question.options[3];
    optionEElement.textContent = question.options[4];
    optionFElement.textContent = question.options[5];
    optionGElement.textContent = question.options[6];
    optionHElement.textContent = question.options[7];
    optionKElement.textContent = question.options[8];
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestionIndex];
    if (selectedOption === question.correctOption) {
        score++;
        scoreElement.textContent = score;
    }
    
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion(currentQuestionIndex);
    } else {
        alert(`انتهت اللعبة! النقاط الإجمالية: ${score}`);
    }
}

optionAElement.addEventListener('click', () => checkAnswer(optionAElement.textContent));
optionBElement.addEventListener('click', () => checkAnswer(optionBElement.textContent));
optionCElement.addEventListener('click', () => checkAnswer(optionCElement.textContent));
optionDElement.addEventListener('click', () => checkAnswer(optionDElement.textContent));
optionEElement.addEventListener('click', () => checkAnswer(optionEElement.textContent));
optionFElement.addEventListener('click', () => checkAnswer(optionFElement.textContent));
optionGElement.addEventListener('click', () => checkAnswer(optionGElement.textContent));
optionHElement.addEventListener('click', () => checkAnswer(optionHElement.textContent));
optionKElement.addEventListener('click', () => checkAnswer(optionKElement.textContent));

displayQuestion(currentQuestionIndex);
