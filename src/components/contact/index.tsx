import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { SnackbarKey, useSnackbar } from 'notistack';
import React, { useState } from 'react';
import * as Yup from 'yup';
import MailTo from '~/components/mail-to';
import { showError } from '~/helpers/formik';
import Card from '~/layouts/card';
import Container from '~/layouts/container';
import useStyles from './styles';

const initialValues = { name: '', email: '', message: '' };

const Contact = () => {
  const [key, setKey] = useState<SnackbarKey | undefined>(undefined);
  const classes = useStyles();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { formatMessage } = useIntl();

  const showSnackbar = (ok: boolean) => {
    setKey(
      ok === true
        ? enqueueSnackbar(<FormattedMessage id="contact.success-msg" />, {
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'center',
            },
            variant: 'success',
            preventDuplicate: true,
          })
        : enqueueSnackbar(
            <Typography variant="body2">
              <FormattedMessage id="contact.error-msg" values={{ email: <MailTo /> }} />
            </Typography>,
            {
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center',
              },
              action: k => (
                <FormattedMessage id="global.title.close">
                  {(titleClose: string) => (
                    <FormattedMessage id="global.btn.close">
                      {(btnClose: string) => (
                        <Button
                          aria-label={titleClose}
                          color="inherit"
                          onClick={() => {
                            closeSnackbar(k);
                          }}
                        >
                          {btnClose}
                        </Button>
                      )}
                    </FormattedMessage>
                  )}
                </FormattedMessage>
              ),
              persist: true,
              preventDuplicate: true,
              variant: 'error',
            }
          )
    );
  };

  return (
    <Container className={classes.root} gutterBottom>
      <Card title={formatMessage({ id: 'contact.title' })}>
        <Typography className={classes.intro}>{formatMessage({ id: 'contact.intro' })}</Typography>
        <Formik
          initialValues={initialValues}
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
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            if (key !== undefined) {
              closeSnackbar(key);
              setKey(undefined);
            }

            try {
              const res = await fetch('/.netlify/functions/email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
              });
              const data = await res.json();
              const ok = data.statusCode === 200;

              showSnackbar(ok);

              if (ok) resetForm();
            } catch (err) {
              showSnackbar(false);
            } finally {
              setSubmitting(false);
            }
          }}
        >
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
                      aria-label={formatMessage({ id: 'global.title.send' })}
                      type="submit"
                      color="primary"
                      variant="contained"
                      disabled={isSubmitting}
                      onClick={submitForm}
                    >
                      {formatMessage({ id: 'global.btn.send' })}
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className={classes.mail}>
                      {formatMessage(
                        { id: 'contact.alternative' },
                        { email: <MailTo color="primary" /> }
                      )}
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
