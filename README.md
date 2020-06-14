#First time setup: 
1. Set up git account
2. Install git: https://git-scm.com/downloads
3. Create empty repository on website, remember repository name
4. Clone from repository to local machine 
    1. git config --global user.name "Mona Lisa"
    2. git config --global user.email "email@example.com"
    3. git remote add origin <repository name>
5. Install Node.js: https://nodejs.org/en/
6. Install Npm: https://nodejs.org/en/
7. Install create-react-app: npm install -g create-react-app *
8. Run create-react-app: create-react-app <your-app-name> 
    a. app name must be the same as your git repository
9. cd your-app-name
10. Install github pages: npm install gh-pages --save-dev
11. Add properties to package.json 
    1. Above "name: ..." add "homepage": "https://<your-github-username>.github.io/<your-app-name>"
    2. In "scripts", add the following to the top: 
        "scripts": {
            "predeploy": "npm run build",
            "deploy": "gh-pages -d build"
            //...
        }
12. Deploy the app: npm run deploy
13. You can now view your web page at https://<your-github-username>.github.io/<your-app-name>

#To run the app locally:
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


#Setup: 
1. Create empty repository on github, remember repository name
2. run: git remote add origin <repository-name>
3. run: create-react-app: create-react-app <repository-name>
4. run: cd your-app-name
5. Install github pages: npm install gh-pages --save-dev
6. Add properties to package.json 
    1. Above "name: ..." add "homepage": "https://<your-github-username>.github.io/<your-app-name>"
    2. In "scripts", add the following to the top: 
        "scripts": {
            "predeploy": "npm run build",
            "deploy": "gh-pages -d build"
            //...
        }
7. Deploy the app: npm run deploy

Setting up hot-reloading for testing locally:
1. create .vscode folder in project root directory 
2. create launch.json file in newly created folder 
3. Paste the following code into launch.json and save the file
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
4. enter npm start