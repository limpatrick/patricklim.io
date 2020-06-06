import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { SnackbarAction, useSnackbar } from 'notistack';
import React from 'react';
import * as Yup from 'yup';
import MailTo from '~/components/mail-to';
import { FORM_NAME } from '~/constants';
import { encode, showError } from '~/helpers/formik';
import Card from '~/layouts/card';
import Container from '~/layouts/container';
import useStyles from './styles';

const Contact = () => {
  const classes = useStyles();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { formatMessage } = useIntl();

  const action: SnackbarAction = key => (
    <Button
      aria-label={formatMessage({ id: 'global.aria-label.close' })}
      color="inherit"
      onClick={() => {
        closeSnackbar(key);
      }}
    >
      {formatMessage({ id: 'global.btn.close' })}
    </Button>
  );

  return (
    <Container className={classes.root} gutterBottom>
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
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            try {
              await fetch(`?t=${Math.floor(Date.now() / 1000)}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: encode({ 'form-name': FORM_NAME, ...values }),
              });

              enqueueSnackbar(<FormattedMessage id="contact.success-msg" />, {
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'center',
                },
                variant: 'success',
                preventDuplicate: true,
              });

              resetForm();
            } catch (err) {
              enqueueSnackbar(
                <Typography variant="body2">
                  <FormattedMessage id="contact.error-msg" values={{ email: <MailTo /> }} />
                </Typography>,
                {
                  anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center',
                  },
                  action,
                  persist: true,
                  preventDuplicate: true,
                  variant: 'error',
                }
              );
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ submitForm, isSubmitting, touched, errors }) => {
            const fullHeight =
              showError(touched, errors, 'name') || showError(touched, errors, 'email');

            return (
              <Form className={classes.form} data-netlify name={FORM_NAME}>
                <input type="hidden" name="form-name" value={FORM_NAME} />
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
                      aria-label={formatMessage({ id: 'global.aria-label.send' })}
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
