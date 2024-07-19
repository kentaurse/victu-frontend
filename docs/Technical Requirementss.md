## 1. Application Goals
“Victu” - Web application related to control users diet program. App provides meal intake programs of user’s choice. User can control such diet characteristics as calories, meal intake amount and etc.

## 2. System Description

System consist of these functional components:

 1. Registration, authentication and authorisation
 2. Food and recipes page
 3. Diet controller (calories, meal intakes and etc.)
 4. Achievements program for users
 5. Special tips and information about diet

Application will have different pages with above mentioned components .

## 2.1 Registration

Registration will be done with Tokens or Google Authorisation.

The authorisation parameters will be: 
 - Login - required field  
 - Password - required field

Registration parameters: 

 - Login - required field
 - Password - required field
 - First name and Last name - required field
 - Phone number - optional field

## 2.2 Creating Diet Plan Algorithm

 User fill special required fields in order to construct diet program.

The diet program will be based on user filled informations: 

 - Weight
 - Height
 - Age
 - Preferable diet program (Weight loss, Muscle gain and etc)

Then algorithm calculates BMI and selects proper diet plan and meals for user.

## 2.2 Diet controller

From meals data (calories), algorithm would calculate average calories income of the day. Also, the program would recommend needed exercises for user to balance calories or needed calories to fire.

Program must consist different exercises and chart that calculates average time of exercising.

## 2.3 Achievements program

The user should be rewarded with special medals when completing any tasks. The user can also set monthly goals and receive tokens to be shared on social media when they complete them.

## 3. Technologies Stack
For system realisation web application would be structured with these technologies:

Backend:  
 - Node.js
 - MySQL DataBase
 - Express
 - Axios

Frontend:
 - React
 - UI ToolKits

React libraries will be used to augment the functionality. In the future, the prospect of switching to TypeScript is being considered.

## 4. Design requirements

 The design of the app should be minimalist, where the main content will take precedence.

The colours should be pleasing to the eye and for long browsing. A change of themes for ease of use is being considered for future versions of the app