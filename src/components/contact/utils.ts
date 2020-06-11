import { OptionsObject } from 'notistack';
import * as Yup from 'yup';

export const getValidationSchema = ({ email, required }: { email?: string; required?: string }) =>
  Yup.object({
    name: Yup.string().trim().required(required),
    email: Yup.string().email(email).required(required),
    message: Yup.string().trim().required(required),
  });

export const getSuccessOptionsObject = (): OptionsObject => ({
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'center',
  },
  variant: 'success',
  preventDuplicate: true,
});

export const getErrorOptionsObject = (action: OptionsObject['action']): OptionsObject => ({
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'center',
  },
  action,
  persist: true,
  preventDuplicate: true,
  variant: 'error',
});
