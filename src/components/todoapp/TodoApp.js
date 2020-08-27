import React, { Component } from 'react';

import './TodoApp.css';

import moment from "moment";
import DatePicker from 'react-datepicker';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Typography, TextField } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

import { TodoList } from "./TodoList";


export class TodoApp extends Component {


    constructor(props) {
        super(props);
        this.state = { items: [], text: '', priority: 0, dueDate: moment() };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }


    render() {

        return (
            <div className="App">

                <br />
                <br />

                <form onSubmit={this.handleSubmit} className="todo-form">
                    <Card className="">
                        <CardActionArea>
                            <Typography gutterBottom variant="h5" component="h2">
                                New TODO
                            </Typography>
                            <div className="div_portada">
                                {/* <img src="https://fondosmil.com/fondo/1705.jpg" ></img> */}
                            </div>


                            <CardContent>

                                <Typography variant="body2" color="textSecondary" component="h2" >
                                    <p>
                                        <TextField
                                            required
                                            id="text"
                                            label="Text"
                                            variant="outlined"
                                            onChange={this.handleTextChange}
                                            value={this.state.text} />
                                    </p>
                                    <p>
                                        <TextField
                                            required
                                            id="priority"
                                            label="Priority"
                                            variant="outlined"
                                            onChange={this.handlePriorityChange}
                                            value={this.state.priority} />
                                    </p>
                                    <p>
                                        <DatePicker
                                            id="due-date"
                                            selected={this.state.dueDate}
                                            placeholderText="Due date"
                                            onChange={this.handleDateChange} />

                                    </p>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                fullWidth
                                className=""
                                startIcon={<SaveIcon />}
                                onClick={this.handleSubmit}
                            >
                                Add #{this.state.items.length + 1}
                            </Button>
                        </CardActions>
                    </Card>

                </form>
                <br />
                <br />
                <TodoList todoList={this.state.items} />
            </div>
        );
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }


    handleDateChange(date) {
        console.log(date);
        this.setState({
            dueDate: date
        });
    }

    handleSubmit(e) {

        console.log(this.state.dueDate);
        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: ''
        }));
    }

}