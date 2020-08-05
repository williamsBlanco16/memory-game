import React, {useState, useEffect, useContext} from 'react';
import { 
    Grid,
    Button,
    Typography,
    Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

import {AccountBox as AccountBoxIcon} from '@material-ui/icons/';
import PlayerData from './PlayerData';
import Time from './Time';
import { ContextUsers, ContextCard } from './context';

const USER_A = 'userA';
const USER_B = 'userB';

const INITIAL_STATE_COUNTER = 10;

const UserSection = () => {
    const [counter, setCounter] = useState(INITIAL_STATE_COUNTER);
    const [change, setChange] = useState(true); 

    const {users} = useContext( ContextUsers );
    const [
        providerIds, 
        providerKeys, 
        matchProvider,
        timeProvider
    ] = useContext( ContextCard );

    const {setFlipKeys} = providerKeys;
    const {setFlipIds} = providerIds;
    const { match, setMatch } = matchProvider;
    const { timerRef, setTimerRef} = timeProvider;
    
    useEffect(() => {
        
       !timerRef && countDown();
    }, [timerRef]);
    
    useEffect(() => {
        (counter === 0) && changeTurn();
    },[counter]);

    useEffect(() => {
        if(match !== null){
            
            setTimeout(() => {
                match===true &&
                    setCounter(INITIAL_STATE_COUNTER);
                
            
                match === false &&
                    changeTurn(); 
            }, 1000);
            setMatch(null)
        }
           
        
        
        
        },[match]);

    const changeTurn = () => {
        console.log('cambiando de turno de turno')
        setCounter(INITIAL_STATE_COUNTER);
        setChange((prev) => !prev);
        
        /* flip cards */
        setFlipIds([]);
        setFlipKeys([]);

    }

    const countDown = async () => {
        const id = setInterval(() => {
            counter > 0 
                && setCounter( prev => prev -1 );
        }, 1000);

        setTimerRef(id);
    } 
    const classes = useStyle();
    const { userA, userB } = users; 
    return (
            <Box  display="flex" flexWrap="wrap">
                <PlayerData
                   label = 'User A'
                   score = {userA && userA.score} 
                   streak = {userA && userA.streak}
                   turn = { change }/>
                <AccountBoxIcon style={{ fontSize: 60 }}/>
                <Time counter = { counter }/>
                <AccountBoxIcon style={{ fontSize: 60 }}/>
                <PlayerData 
                    label = 'User B' 
                    turn = { !change }
                    score = {userB && userB.score} 
                   streak = {userB && userB.streak}
                />
        </Box>

    );
}

export default UserSection; 

const useStyle = makeStyles(theme => ({
    toolbarMargin: theme.mixins.toolbar,
    flex:{
        flex:1,
        textAlign:'center'
    }
    
}))
