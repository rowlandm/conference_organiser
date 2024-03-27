# conference_organiser
This is the conference organiser for [#RSEAA24](https://rseaa.github.io/). You can also have a look at RSEAA23 and RSEAA22 on the same website.

# Installation
To begin, please follow the steps below for installing Python and setting up the virtual environment:

## Install Python
Download the latest version of Python from the official website.
[Download Here](https://www.python.org/)

# Windows
Follow the installation instructions provided, ensuring that Python is added to the system PATH.
## Install virtualenv
Open the command prompt.
Run the following command to install virtualenv:
```
pip install virtualenv
```
## Create a virtual environment
Open the command prompt in the desired project directory/folder.
Create a new virtual environment by running the following command:

```
virtualenv .env
```
## Activate the virtual environment
Run the following command to activate the virtual environment:
```
.\.env\Scripts\activate
```
## Run the application
Followed tahe instruction inside each Frontend and backend folders.


# MacOS/Linux
Open Terminal
## install virtualenv
```
pip install virtualenv
```
## Create a virtual environment
```
python3 -m venv venv
```
## Activate the virtual environment
```
source venv/bin/activate
```
## Install FastAPI and uvicorn
```
pip install flask
pip install uvicorn[standard]
```

>Make sure the virtual environment is activated.

We are just starting so there isn't much information.

See the wiki for details on things we have already started doing - https://github.com/rowlandm/conference_organiser/wiki/List-of-things-we-have-already-done-at-RSEAA24-that-need-to-be-added-to-the-conference-organiser

We would like to improve the sustainability of the process of organising the conference around some of the key areas such as: 
- Simplifying the way we can send our prospectus to potential sponsors who will provide us with funds to run the conference, 
- Simplifying the way we can send emails to potential keynote speakers, along with followup emails for people who accepted the keynote speaking opportunity, 
- Simplifying the way we can send emails to potential panelists, along with followup emails for people who accepted the opportunity, 
- Simplifying the way we can send emails to potential session chairs, along with followup emails for people who accepted the opportunity, 
- Simplifying the schedule, making it easy for participants to access, and simplifying the way we create Zoom meetings  
- Make it easy to point to other documentation and project management tools, 
- Make it easy to send out emails and social media or to have a schedule to make it easier
- Make it easy to post to Twitter, Mastadon, LinkedIn, Slack.
