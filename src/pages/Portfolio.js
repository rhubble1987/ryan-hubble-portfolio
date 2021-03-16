import React from "react";
import Project from "../components/Project";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import MantinyayImage from "../Assets/Images/matinyay.jpeg";
import BurgerImage from "../Assets/Images/add-burger.png";
import MovieJamzImage from "../Assets/Images/icon1-2.png";
import WeatherAppImage from "../Assets/Images/forecast.png";
import CalendarAppImage from "../Assets/Images/calendar-app.png";


const projects = [
    {
        title: "Matinyay!",
        subtitle: "Second group project for coding bootcamp",
        description: "For our second group project, we had to build a fully functional app hosted in Heroku. Our MVP is a functioning instant messaging web app that allows people to create watch parties and discuss with others in real-time. Users can use the chat to discuss their favorite scenes, behind the scenes trivia, and other engaging aspects of a movie with other film enthusiasts. The app implements Express.js for sever-side functionality, Sequelize.js and MySQL for database, Express-Handlebars.js for the HTML templating, and Socket.io to power the instant messaging feature. This is very much just an MVP, and I have plans to add much more functionality to the app in the coming months. Updates to be made include account creation and authentication, ability to add movies in addition to view parties for a set list of movies, and much more!",
        projectImage: MantinyayImage,
        altText: "Movie chat app group chat",
        githubRepo: "https://github.com/rhubble1987/matinyay",
        deployedApp: "https://rocky-shore-62647.herokuapp.com/"
    },
    {
        title: "Eat-Da-Burger!",
        subtitle: "MVC Assignment",
        description: "For this homework assignment, we had to complete a hosted web-app using the MVC concept. To implement, I had to utilize the mysql, express, and express handlebars npms. The app allows users to add a new type of burger. When a new burger is created, the burger defaults to the left side of the screen, which is a list of burgers that have not been eaten. Each burger in this section also has a button that allows the user to indicate that the burger has been devoured. Once they click this button the burger is then moved to the right side of the page which contains the list of devoured burgers.",
        projectImage: BurgerImage,
        altText: "Burger app field allowing user to add a new burger.",
        githubRepo: "https://github.com/rhubble1987/burger",
        deployedApp: "https://polar-forest-74613.herokuapp.com/"
    },
    {
        title: "MovieJamz",
        subtitle: "First group project",
        description: "For our first group project, we had to create a functional app in the browser by making use of third-party APIs. For my app, my team and I came up with the concept of being able to easily search for movie scores and soundtracks. To do this, we first call the IMDB search API using an AJAX call. We then take specific data returned to display things like official movie title, composer, director, and top-billed cast. We then use that specific information to make another AJAX call to two endpoints with the iTunes search API. The first identifies the specific album, and then the second to return the specific tracks and their URLs that will take the user to the iTunes webpage. Then using DOM manipulation, all of the results are shown to the user. In addition, the user can save specific tracks, and previously searched albums are also automatically saved. This data persists after the page is refreshed by using local storage.",
        projectImage: MovieJamzImage,
        altText: "MovieJamz logo. A box of popcorn wearing headphones",
        githubRepo: "https://github.com/rhubble1987/moviejamz",
        deployedApp: "https://rhubble1987.github.io/moviejamz/"
    },
    {
        title: "Weather Dashboard",
        subtitle: "Third-party API homework assignment",
        description: "For our sixth homework assignment, we were to build a weather dashboard that provides current weather for a specified location along with the forecast. To achieve this we had to use a free third party API that returns weather data for the queried location. Another functional requirement was to save previously searched locations using local storage. Using this, the last current city persists as the current city when the page is refreshed and the previously searched cities are saved so that the user can easily re-check the weather.",
        projectImage: WeatherAppImage,
        altText: "Cloud and rain icon and high and low temperatures for forecast.",
        githubRepo: "https://github.com/rhubble1987/weather-dashboard",
        deployedApp: "https://rhubble1987.github.io/weather-dashboard/"
    },
    {
        title: "Daily Planner App",
        subtitle: "Homework assignment for dom manipulation and local storage",
        description: "For our fifth homework assignment we were tasked with building a daily planner app that allows the user to save events in 1-hour time-blocks. The page will also dymnamically highlight past, current, and future timeblocks in the day based on the current time.",
        projectImage: CalendarAppImage,
        altText: "App interface displaying current timeblock as red while past time blocks are grey.",
        githubRepo: "https://github.com/rhubble1987/calendar-app",
        deployedApp: "https://rhubble1987.github.io/calendar-app/"
    }
];

function Portfolio() {
    return (
        <div>
            <Jumbotron>
                <Container>
                    <h1>Ryan's Portfolio</h1>
                    <p>
                    Take a look at some of the things I've been working on! Feel free to reach out if you have any questions about any of my projects.
                    </p>
                </Container>
            </Jumbotron>
        
        <div>
            {projects.map(project => (
                <Project project={project}/>
            ))}    
        </div>
        </div>
    );
}

export default Portfolio;