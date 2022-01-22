import { v4 as uuidv4 } from 'uuid';

export default [
  {
    component: 'Header',
    content: 'Sign Up',
    fullWidth: true,
    id: uuidv4()
  },
  {
    component: 'TextInput',
    content: 'First Name',
    id: uuidv4(),
    label: 'First Name',
    name: 'first-name'
  },
  {
    component: 'TextInput',
    content: 'Last Name',
    id: uuidv4(),
    label: 'Last Name',
    name: 'last-name'
  },
  {
    component: 'TextInput',
    content: 'Email Address',
    id: uuidv4(),
    label: 'Email Address',
    name: 'email-address'
  },
  {
    component: 'TextInput',
    content: 'Phone Number',
    id: uuidv4(),
    label: 'Phone Number',
    name: 'phone-number'
  },
  {
    component: 'SubmitButton',
    content: 'Submit',
    fullWidth: true,
    id: uuidv4()
  }
];
