import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import clsx from 'clsx';
import { Field, Form as FormikForm } from 'formik';
import { TextField } from 'formik-material-ui';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import useStyles from './styles';

type Props = {
  fullHeight: boolean;
  isSubmitting: boolean;
  onClick: React.ComponentProps<typeof Button>['onClick'];
};

const Form = ({ fullHeight, isSubmitting, onClick }: Props) => {
  const { formatMessage } = useIntl();
  const classes = useStyles();

  return (
    <FormikForm className={classes.root}>
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
            onClick={onClick}
          >
            {formatMessage({ id: 'global.btn.send' })}
          </Button>
        </Grid>
      </Grid>
    </FormikForm>
  );
};

export default Form;
