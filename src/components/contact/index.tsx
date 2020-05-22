import clsx from 'clsx';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import { useIntl } from 'gatsby-plugin-intl';
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

const email = <Link href="mailto:contact@patricklim.fr">contact@patricklim.fr</Link>;

const Contact = () => {
  const classes = useStyles();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { formatMessage } = useIntl();

  const action: SnackbarAction = key => (
    <Button
      aria-label="close"
      color="inherit"
      onClick={() => {
        closeSnackbar(key);
      }}>
      {formatMessage({ id: 'contact.close-btn' })}
    </Button>
  );

  return (
    <Container className={classes.root}>
      <Card title={formatMessage({ id: 'contact.title' })}>
        <Typography className={classes.intro}>{formatMessage({ id: 'contact.intro' })}</Typography>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validationSchema={Yup.object({
            name: Yup.string()
              .trim()
              .required(formatMessage({ id: 'contact.errors.required' })),
            email: Yup.string()
              .email(formatMessage({ id: 'contact.errors.email' }))
              .required(formatMessage({ id: 'contact.errors.required' })),
            message: Yup.string()
              .trim()
              .required(formatMessage({ id: 'contact.errors.required' })),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            // TODO
            setTimeout(() => {
              enqueueSnackbar(formatMessage({ id: 'contact.success-msg' }), { variant: 'success' });

              enqueueSnackbar(
                <Typography className={classes.error} variant="body2">
                  {formatMessage({ id: 'contact.error-msg' }, { email })}.
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
                      label={formatMessage({ id: 'contact.labels.name' })}
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid className={clsx({ [classes.fullHeight]: fullHeight })} item xs={12} sm={6}>
                    <Field
                      component={TextField}
                      name="email"
                      label={formatMessage({ id: 'contact.labels.email' })}
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      component={TextField}
                      name="message"
                      label={formatMessage({ id: 'contact.labels.message' })}
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
                      {formatMessage({ id: 'contact.send-btn' })}
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className={classes.mail}>
                      {formatMessage({ id: 'contact.alternative' }, { email })}
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
