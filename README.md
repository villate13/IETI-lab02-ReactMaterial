# React Material
React project using Material-UI React library.

###Part 1: Create a Login Component
1.Download the repository, install and run the project to verify it works:


```javascript
npm install
npm start
```

2. Add the Material-UI dependencies to the package.json file and re-run the install module command.

```javascript
   "@material-ui/core": "^3.0.1",
    "@material-ui/icons": "^3.0.1",
```

3. Create a new folder called component and add a Login.js and Login.css files with the following code:

```javascript
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'


export class Login extends React.Component{

    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="headline">Sign in</Typography>
                        <form className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="raised"
                                color="primary"
                                className="submit"
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

}




```

```css
.layout {
    width: 60%;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.paper {
    margin-top: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.avatar {
    margin: 10px;
    background: floralwhite;
}

.form {
    width: 100%;
    margin-top: 30px;
}

.submit {
    marginTop: 20px;
}

```

4. Add the Login component to the App.js render method to test your login component.


###Part 2: Enable App Navigation 

1. Add the react-router-dom component to your package.json file and install it:

```javascript
   "react-router-dom": "^4.3.1"   
   
   npm install
```

2. Refactor your App.js: 
    * Create a new file called TodoApp and extract all the Todo logic to this file.
    * Change the Todo components to use react Material components: Button, TextField, Card and DatePickers.