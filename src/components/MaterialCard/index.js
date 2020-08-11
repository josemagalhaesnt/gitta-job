import React from 'react';

import { Link } from 'react-router-dom';
import { Button, Card, CardContent, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const MaterialCard = ({ title, body, actionLink, variant, children }) => {

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

  const classes = useStyles();
  
  return (
    <Card className={classes.root} variant={variant}>
      <CardContent>
        {children}
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          <Link to={actionLink}> Learn More </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default MaterialCard;
