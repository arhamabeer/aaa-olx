import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import { render } from '@testing-library/react';

class ButtonComp extends React.Component {



  render() {


    //   const useStyles = makeStyles((theme) => ({
    //     button: {
    //       margin: theme.spacing(1),
    //     },
    //   }));

    //   const classes = useStyles();

    return (
      <div className='textf-comp'>
        <Button
          onClick={() => this.props.onPress()}
          variant="contained"
          color="primary"
          size="large"
          disabled={this.props.disable}
          // className={classes.button}
          startIcon={<SaveIcon />}
        >
          Save
      </Button>
      </div>
    );
  }
}

export default ButtonComp;