import React from 'react';

import { Link } from 'react-router-dom';
import { Button, Card, CardContent, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const MaterialCard = ({ title, body, actionLink, variant, children }) => {

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      minHeight: 175,
    },
    actions: {
      alignSelf: 'flex-end',
    }
  });

  const classes = useStyles();
  
  return (
    <Card className={classes.root} variant={variant}>
      <CardContent className={classes.content}>
        {children}
      </CardContent>
      <CardActions className={classes.actions}>
        <Button size="small" color="primary">
          <Link to={actionLink}> Learn More </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default MaterialCard;
