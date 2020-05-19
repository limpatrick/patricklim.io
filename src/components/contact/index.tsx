import clsx from 'clsx';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import { SnackbarAction, useSnackbar } from 'notistack';
import React from 'react';
import * as Yup from 'yup';
import { showError } from '~/utils/formik';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import useStyles from './styles';

const Contact = () => {
  const classes = useStyles();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const action: SnackbarAction = key => (
    <IconButton
      className={classes.close}
      aria-label="close"
      color="inherit"
      onClick={() => {
        closeSnackbar(key);
      }}>
      <CloseIcon />
    </IconButton>
  );

  return (
    <Container className={classes.root} maxWidth="lg">
      <Grid container justify="center" alignItems="center">
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validationSchema={Yup.object({
            name: Yup.string().trim().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            message: Yup.string().trim().required('Required'),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            // TODO
            setTimeout(() => {
              enqueueSnackbar(
                `Your message has been sent. I'll get back to you as soon as I can.`,
                {
                  variant: 'success',
                }
              );

              enqueueSnackbar(
                <Typography className={classes.error} variant="body2">
                  Something went wrong. Please try again or contact me directly at{' '}
                  <Link href="mailto:contact@patricklim.fr">contact@patricklim.fr</Link>.
                </Typography>,
                {
                  action,
                  persist: true,
                  variant: 'error',
                }
              );

              setSubmitting(false);
              resetForm();
              console.log(JSON.stringify(values, null, 2));
            }, 500);
          }}>
          {({ submitForm, isSubmitting, touched, errors }) => {
            const fullHeight =
              showError(touched, errors, 'name') || showError(touched, errors, 'email');

            return (
              <Form className={classes.form}>
                <Grid container justify="flex-start" alignItems="center" spacing={2}>
                  <Grid className={clsx({ [classes.fullHeight]: fullHeight })} item xs={12} sm={6}>
                    <Field
                      component={TextField}
                      name="name"
                      label="Name"
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid className={clsx({ [classes.fullHeight]: fullHeight })} item xs={12} sm={6}>
                    <Field
                      component={TextField}
                      name="email"
                      label="Email"
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      component={TextField}
                      name="message"
                      label="Message"
                      fullWidth
                      variant="outlined"
                      multiline
                      rows={10}
                    />
                    {isSubmitting && <LinearProgress />}
                  </Grid>
                  <Grid item>
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={isSubmitting}
                      onClick={submitForm}
                      endIcon={<SendIcon />}>
                      Send
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </Grid>
    </Container>
  );
};

export default Contact;
