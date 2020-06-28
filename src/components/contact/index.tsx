import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Formik } from 'formik';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { SnackbarKey, useSnackbar } from 'notistack';
import React, { useState } from 'react';
import MailTo from '~/components/mail-to';
import { ID_CONTACT } from '~/constants';
import { showError } from '~/helpers/formik';
import Article from '~/layouts/article';
import ErrorAction from './error-action';
import Form from './form';
import useStyles from './styles';
import { getErrorOptionsObject, getSuccessOptionsObject, getValidationSchema } from './utils';

const Contact = () => {
  const [key, setKey] = useState<SnackbarKey | undefined>(undefined);
  const classes = useStyles();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { formatMessage } = useIntl();

  const showSnackbar = (ok: boolean) => {
    setKey(
      ok === true
        ? enqueueSnackbar(<FormattedMessage id="contact.success-msg" />, getSuccessOptionsObject())
        : enqueueSnackbar(
            <Typography variant="body2">
              <FormattedMessage id="contact.error-msg" values={{ email: <MailTo /> }} />
            </Typography>,
            getErrorOptionsObject(k => <ErrorAction onClick={() => closeSnackbar(k)} />)
          )
    );
  };

  return (
    <Article
      id={ID_CONTACT}
      className={classes.root}
      component="section"
      title={formatMessage({ id: 'contact.title' })}
    >
      <Grid container>
        <Grid item xs={12}>
          <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validationSchema={getValidationSchema({
              email: formatMessage({ id: 'contact.errors.email' }),
              required: formatMessage({ id: 'contact.errors.required' }),
            })}
            onSubmit={async (values, { setSubmitting, resetForm, ...o }, ...p) => {
              alert('onSubmit');
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
            {({ submitForm, isSubmitting, touched, errors }) => (
              <Form
                fullHeight={
                  showError(touched, errors, 'name') || showError(touched, errors, 'email')
                }
                isSubmitting={isSubmitting}
                onClick={async () => {
                  alert('onClick');
                  await submitForm();
                }}
              />
            )}
          </Formik>
        </Grid>
        <Grid className={classes.text} item xs={12}>
          <Typography>{formatMessage({ id: 'contact.intro' })}</Typography>
          <Typography>
            {formatMessage({ id: 'contact.alternative' }, { email: <MailTo color="primary" /> })}
          </Typography>
        </Grid>
      </Grid>
    </Article>
  );
};

export default Contact;
