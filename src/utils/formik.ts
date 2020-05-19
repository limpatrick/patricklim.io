import { FormikErrors, FormikTouched, getIn } from 'formik';

export const showError = <Values>(
  touched: FormikTouched<Values>,
  errors: FormikErrors<Values>,
  field: string
) => getIn(touched, field) && !!getIn(errors, field);
