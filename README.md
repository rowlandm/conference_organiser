# conference_organiser
This is the conference organiser for [#RSEAA24](https://rseaa.github.io/). You can also have a look at RSEAA23 and RSEAA22 on the same website.

# Installation -- Ignore if you use the existed virtual machine instance
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
pip install fastapi sqlalchemy psycopg2-binary typing
pip install "python-jose[cryptography]"
pip install "passlib[bcrypt]"
pip install uvicorn[standard]

```

>Make sure the virtual environment is activated.


