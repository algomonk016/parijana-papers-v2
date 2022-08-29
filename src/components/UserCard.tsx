import React, { memo } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { 
  useDispatch, 
  useSelector 
} from '@redux/store/';

import { getUserState, setEmail, setName, 
  // UserState 
} from '@redux/store/slices/userSlice';
// import { useSelector } from 'react-redux';

const UserCard = () => {
  const dispatch = useDispatch();

  const { name, email } = useSelector(getUserState);
  // const { name, email } = useSelector((state: { user: UserState }) => state.user );

  const onClick = () => {
    dispatch(setName('yo'));
    dispatch(setEmail('this is my mail'));
  };


  return (
    <Grid>
      <Typography variant="h1" component="h2">
        Hi <>{name}</>
      </Typography>

      <p className={''}>
        <code className={''}>{email}</code>
        <Button onClick={onClick}>Change it!</Button>
      </p>
    </Grid>
  )

}

export default memo(UserCard);