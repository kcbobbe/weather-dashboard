#Weather Dashboard
### Weather Forecasts at a Glance
https://kcbobbe.github.io/weather-dashboard/

## Description

This application is a weather dashboard that a user can use to keep track of the weather forecast. On loading the page, the user's current location is detected and the dashboard displays the user's local weather. The user can also search by city for weather forecasts of other cities. The user's search history is stored in local storage, making it easy for the user to check the weather of cities that were previously searched.

This web application was created using HTML, CSS, JavaScript, and jQuery. The Bulma CSS framework was used for styling the application. The OpenWeather API was used to retrieve weather information for this application. Moment.js was used to parse time and date information.

## Installation

1. Clone the repository to your computer
2. Open the project in a text editor of your choice
3. Open the index.html file in your browser to view

## Usage
1. Upon loading the page, if the user has navigation allowed, the user will be asked if they want to share their location. If yes, the page will load the weather data from your location. If not, the first data loaded will be from the most recent search result. If there is no search data, the page will show the weather information of San Francisco.
2. The main panel of the application shows the current weather conditions of the location. Current temperature, a picture of the weather conditions, humidity, wind speed and UV index are displayed. The measurements are in imperial units.
3. The 5 Day Forecast shows the forecast of the next five days at a glance. The date, weather condition icon, temperature, and humidity is shown.
4. The search panel appears on the right side in desktop and larger breakpoints, and at the bottom of the screen at smaller breakpoints.
5. To search for a city, a user can type a city name in the search bar, then press "enter". The current weather and 5 day forecast will be populated with the information from that city. The city name will be added below the search bar, and can be clicked to show that city's weather forecast.

## Key Features
1. Weather information is provided by the Open Weather API
2. The Bulma CSS framework is used to make a responsive application
3. The Geolocation API is used to get the user's current location


## Credits


## License
MIT License

Copyright (c) [2020] [Katie Bobbe]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---
