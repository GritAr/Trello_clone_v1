import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import Textarea from 'react-textarea-autosize';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';

import { addList, addCard } from '../actions';

class TrelloActionButton extends Component {
    state = {
        formOpen: false,
        text:'',
    }

    openForm = () => {
        this.setState({
            formOpen: true
        })
    }

    closeForm = () => {
        this.setState({
            formOpen: false,
            text: ''
        })
    }

    handleInputChange = e => {
        this.setState({
            text: e.target.value
        })
    }

    handleAddList = () => {
        const { dispatch } = this.props;
        const { text } = this.state;

        if(text) {
            dispatch(addList(text));
        }
        return;
    }

    handleAddCard = () => {
        const { dispatch, listId} = this.props;
        const { text } = this.state;

        if(text) {
            dispatch(addCard(listId, text));
        }
        return;
    }


    renderAddButton = () => {
        const { list } = this.props;
        const buttonText = list ? 'Add list...' : 'Add card...';
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "white" : "inherit";
        const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";
        
        return (
            <div
                onClick={this.openForm}
                style={{
                    ...styles.openFormButtonGroup,
                    opacity: buttonTextOpacity,
                    color: buttonTextColor,
                    backgroundColor: buttonTextBackground,
                }}
            >
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    }

    renderForm = () => {
        const { list } = this.props;
        const placeholder = list 
            ? 'Enter list title...'
            : 'Enter card title...';
        const buttonTitle = list ? 'Add List' : 'Add Card';
        return (
            <div>
                <Card
                    style={{
                        minHeight: 50,
                        minWidth: 272,
                        padding: '6px 8px 2px',
                        marginBottom: 8,
                    }}
                >
                    <Textarea 
                        placeholder={placeholder}
                        autoFocus
                        onBlur={this.closeForm}
                        onChange={this.handleInputChange}
                        value={this.state.text}
                        style={{
                            resize: 'none',
                            border: 'none',
                            width: '100%',
                            outline: 'none',
                            overflow: 'hidden',
                           
                        }} 
                    />
                </Card>
                <div style={styles.formButtonGroup}>
                    <Button
                        onMouseDown={list ? this.handleAddList : this.handleAddCard} 
                        variant="contained"
                        style={{
                            color: "white",
                            backgroundColor: "#5aac44",
                        }}
                    > 
                        {buttonTitle} 
                    </Button>
                    <Icon 
                        style={{
                            marginLeft: 8,
                            cursor: "pointer"
                        }}
                    >
                        close
                    </Icon>
                </div>

            </div>
        )
    }

    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
    
}

const styles = {
    openFormButtonGroup: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10,
    },
    formButtonGroup: {
        marginTop: 8,
        display: "flex",
        alignItems: "center"
    }
};

export default connect() (TrelloActionButton);

