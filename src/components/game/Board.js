import React, { useState, useEffect, useContext } from 'react'
import generateData from '../../util';
import { Grid } from '@material-ui/core';
import { ContextUsers, ContextCard  } from './context';

import Card from './Card';
import Win from './Win';

export default function Board() {
  const [cards, setCards] = useState([]);
  const [pairs, setPairs] = useState([]);
  const [turn, setTurn] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [winner, setDataWinner] = useState({});

  const {users, setUsers} = useContext(ContextUsers);
  const [
    providerIds, 
    providerKeys, 
    matchProvider,
    timeProvider
] = useContext( ContextCard );

  const {flipKeys, setFlipKeys} = providerKeys;
  const {flipIds, setFlipIds} = providerIds;
  const { match:matchFlag, setMatch } = matchProvider;
  const {timerRef, setTimerRef} = timeProvider;


  useEffect(() => { 
    setCards(generateData());
  },[])

  /*   useEffect(() => {
      if(flipIds.length===2){
        setTimeout(() => {
          setMatch(flipIds[0]===flipIds[1]) 
        }, 1000)
      }
    },[flipIds]); */

  /* validate winer */
  useEffect(() => {
    pairs.length === 10 && validateWiner()
  },[pairs])

  const validateWiner = () => {
    //end game
    console.log("paramos el reloj");
    clearInterval(timerRef)
    setTimerRef(true);

    const{ userA, userB } = users;

    /* define winner */
    const result = userA.score - userB.score;
    
    /* User A win  */ 
    if(result > 0 ){
      updateResult('userA','userB');
      openModalWinner(true,userA,false) //(open,winner,empate)
    } 

    /* User B win  */ 
    if(result < 0 ){
      updateResult('userB','userA');
      openModalWinner(true,userB,false) //(open,winner,empate)
    } 
    
    if(result === 0 ){
      updateTie();
      openModalWinner(
        true,
        {
          name:`${userA.name} / ${userB.name}`,
          score:`${userA.score} / ${userB.score}`,
          streak:`${userA.streak+1} / ${userB.streak+1}`
        },
        true) //(open,winner,empate)
    } 
  }

  const openModalWinner = (open,user,empate) => {
    console.log('open modal winner');
    setOpenModal(open);
    setDataWinner({...user,empate})
  }

  const updateResult = (win, loser) => {
    
    const { [win]:{
        streak:streakWin
      }
    } = users;

    setUsers({ 
      [win]:{
        score:0,
        streak:streakWin + 1 
      },
      [loser]:{
        score:0,
        streak:0
      }
    })
  }

  const updateTie = (userA, userB) => {
    
    const { [userA]:{
        streak:streakA
      },
      [userB]:{
        streak:streakB
      }
    } = users;

    setUsers({ 
      [userA]:{
        score:0,
        streak:streakA
      },
      [userB]:{
        score:0,
        streak:streakB
      }
    })
  }

  const handlerFlip = (key,id) => {
    console.log('handle click');
    setFlipKeys([...flipKeys, key]);
    setFlipIds([...flipIds, id ])
    
    if(flipIds.length === 1){
      /* match */
      if(flipIds[0] === id){
        match(id);

      }else{
        changeTurn();
      }
    }
  } 

  const match = (id) => {
    setMatch(true);
    setPairs([...pairs,id]);
    
    //update score
    const userTurn = turn ? 'userA':'userB'
    const newUserScore = users[userTurn].score + 1 ;

    setUsers({
      ...users, 
      [userTurn]:{
        ...users[userTurn],
        score:newUserScore 
      }
    })

    setFlipIds([]);
    setFlipKeys([]);
  }

  const changeTurn = () => {
    setTurn(prev => !prev);
    setMatch(false);
  }

  const handlerNewGame = () =>{
    //restablecemos cartar
    setPairs([]);

    //restablecemos tiempo
    setTimerRef(false);

    //quitamos el modal
    setOpenModal(false)
    
  }

  return (
    <Grid
        container
        item
        xs={12}
        sm={10}
        spacing={1}
        alignContent='center'
        alignItems='center'
      >
      {
        cards.map(({src, label, id,}, i) => {
          const flipState = flipKeys.includes(i) || pairs.includes(id)
          return(
          <Card
            key={i}
            src={src}
            title={label}
            flip={flipState}
            onClick = {() => handlerFlip(i,id)}
            disabled={flipState}
          />)
        })
      }
      <Win open={openModal} data={winner} handlerNewGame={handlerNewGame}/>
    </Grid>  
  )
}
