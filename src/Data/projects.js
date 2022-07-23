import react1 from '../img/expensetracker.png';
import js1 from '../img/mealFinder.png';
import react2 from '../img/Slack.png';
import react3 from '../img/Netflix.png'
import MachineLearning1 from '../img/FraudDetection.png';
import Dermocare from '../img/Dermocare.png'
const projects = [
    {
        id: 1,
        category: 'JS',
        image: js1,
        link1: 'https://github.com/saurabhbera11/MealFinder',
        link2: 'https://mealfinder-fooddb.netlify.app/',
        title: 'Meal Finder',
        text: 'Created with HTML and CSS and Javascript.'
    },
    {
        id: 2,
        category: 'React',
        image: react1,
        link1: 'https://github.com/saurabhbera11/ExpenseTrackerUsingVoice',
        link2: 'https://expense-tracker-using-voice.netlify.app',
        title: 'Expense Tracker Using Voice',
        text: 'Track Your Expense Using voice'
    },
    {
        id: 3,
        category: 'React',
        image: react2,
        link1: 'https://github.com/saurabhbera11/Slack2-0',
        link2: 'https://slack-v2-9c843.firebaseapp.com/',
        title: 'Slack 2.0',
        text: 'A simple clone of Slack just for chatting'
    },
    {
        id: 4,
        category: 'React',
        image: react3,
        link1: 'https://github.com/saurabhbera11/Netflix-Clone',
        link2: 'https://netflix-clone-31e4d.firebaseapp.com',
        title: 'Netflix Homepage Clone',
        text: 'A simple Landing page of Netflix'
    },
    {
        id: 5,
        category: 'Machine Learning',
        image: MachineLearning1,
        link1: 'https://github.com/saurabhbera11/Netflix-Clone',
        link2: 'https://docs.google.com/presentation/d/1rPOOZhJ87YSh_tRzbgF5hQvpl9JVggkok1VUNtcZb4A/edit#slide=id.p',
        title: 'AI-Syberthon Fraud Detection',
        text: 'A ML model for Detecting of Fraud'
    },
    {
        id: 6,
        category: 'Deep Learning',
        image: Dermocare,
        link2: 'https://dermocareai.onrender.com/',
        title: 'DermoCare.AI',
        text: 'A website to detect skin diseases in which deep learning models are integrated'
    },
    
]

export default projects;