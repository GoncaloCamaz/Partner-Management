import React, {useState, useEffect} from 'react';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import AlertTitle from '@mui/material/AlertTitle';
import CloseIcon from '@mui/icons-material/Close';

function getVariantOfAlert(alertType) {
    switch (alertType) {
        case 'SUCCESS':
            return "success"
        case 'ERROR':
            return "error"
        default:
            return 'warning';
    }
}

function getAlertTitle(alertType) {
  switch (alertType) {
      case 'SUCCESS':
          return "Sucesso"
      case 'ERROR':
          return "Erro"
      default:
          return 'Atenção';
  }
}

export default function Alerts(props) {
    const message = props.alertMessage
    const alertType = props.alertType
    const showAlert = props.showAlert
    const alertTitle = getAlertTitle(alertType)
    const alertVariant = getVariantOfAlert(alertType)
    const timeout = props.timeout || 2000
    const [open, setOpen] = useState(showAlert);

    useEffect(() => {
      setTimeout(() => setOpen(false), timeout);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if(open)
    {
      return (
        <Stack style={{ width: '80%',position: 'absolute', zIndex: 100}} spacing={2}>
              <Alert
                variant="filled"
                severity={alertVariant}
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 1 }}
              >
                <AlertTitle><strong>{alertTitle}</strong></AlertTitle>
                {message}
              </Alert>
          </Stack>
        );
    }
    else
      return null
}
