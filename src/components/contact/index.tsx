import clsx from 'clsx';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import { SnackbarAction, useSnackbar } from 'notistack';
import React from 'react';
import * as Yup from 'yup';
import Card from '~/layouts/card';
import Container from '~/layouts/container';
import { showError } from '~/utils/formik';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import SendIcon from '@material-ui/icons/Send';
import useStyles from './styles';

const Contact = () => {
  const classes = useStyles();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const action: SnackbarAction = key => (
    <Button
      aria-label="close"
      color="inherit"
      onClick={() => {
        closeSnackbar(key);
      }}>
      Close
    </Button>
  );

  return (
    <Container className={classes.root}>
      <Card title="Contact">
        <Typography className={classes.intro}>
          No matter at what point you are with your project, I&apos;ll be happy to help.
        </Typography>
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
                <Typography className={classes.error}>
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
                  <Grid className={classes.send} item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={isSubmitting}
                      onClick={submitForm}
                      endIcon={<SendIcon />}>
                      Send
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className={classes.mail}>
                      Alternatively, you can send an e-mail to{' '}
                      <Link href="mailto:contact@patricklim.fr">contact@patricklim.fr</Link>.
                    </Typography>
                  </Grid>
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </Card>
    </Container>
  );
};

export default Contact;
