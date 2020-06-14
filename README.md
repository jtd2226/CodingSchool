# Creating a website from scratch using React

# First time setup: 

<h2> Installations </h2>

* [Git](https://git-scm.com/downloads)
* [Node](https://nodejs.org/en/)
* [Npm](https://nodejs.org/en/)
* [Vscode](https://code.visualstudio.com/)

<h2> First time configurations </h2>

1. Go to [github.com](https://github.com) and create an account
1. Open up terminal on mac, command line on windows 
2. Enter the following commands, replace what is in quotes with your account information from github.com:
> git config --global user.name "Mona Lisa"

> git config --global user.email "email@example.com"
3. Enter the following command:
> npm install -g create-react-app

<h2> Deploying the website </h2>

1. Make a new folder for your project
2. Open up the folder in vscode 
3. Open up the terminal in vscode using `control + ``
4. Go to [github.com](https://github.com)
5. Create new repository by clicking the **+** button at the top right
6. Name your repository and copy down the name
7. After creating the repository, copy the url from the page you are redirected to. 
8. Enter the following command in the terminal 
> git remote add origin `url you copied`
9. Run create-react-app with the name of repository from step 2: 
>create-react-app <your-git-repository-name>
10. Go to the directory of your newly created app:
> cd `your-app-name`
11. Install github pages:
> npm install gh-pages --save-dev
12. In Vscode, open up the file named `package.json`
13. In the file, Above `name: ...`, add the following line:
> "homepage": "https://`your-github-username`.github.io/`your-app-name>`
14. In the same file, find the text: `"scripts"`. add the following to the top: 
```
"scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
    //...
}
```
15. Deploy the app: 
> npm run deploy
16. You can now view your web page at https://`your-github-username`.github.io/`your-app-name`

<h2> Running and testing the app locally </h2>

1. Install Debugger for Chrome extension in vscode
2. create .vscode folder in project root directory 
3. create launch.json file in newly created folder 
4. Paste the following code into launch.json and save the file
    ```
    {
        "version": "0.2.0",
        "configurations": [
            {
                "name": "Chrome",
                "type": "chrome",
                "request": "launch",
                "url": "http://localhost:3000",
                "webRoot": "${workspaceFolder}/src",
                "sourceMapPathOverrides": {
                "webpack:///src/*": "${webRoot}/*"
                }
            }
        ]
    }
    ```
5. enter npm start
6. A web page should show up displaying your newly created web page.
7. Now any changes you make to the code will refresh this page after you save 