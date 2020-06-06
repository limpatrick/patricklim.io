import { FormikErrors, FormikTouched, getIn } from 'formik';
import { join, map, toPairs } from 'ramda';

export const encode = (data: Record<string, string | number | boolean>) =>
  join(
    '&',
    map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`, toPairs(data))
  );

export const showError = <Values>(
  touched: FormikTouched<Values>,
  errors: FormikErrors<Values>,
  field: string
) => getIn(touched, field) && !!getIn(errors, field);
