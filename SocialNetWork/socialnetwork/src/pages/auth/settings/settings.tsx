import { UpdatePassword } from './components/UpdatePassword';
import { UpdatePrivacy } from './components/UpdatePrivacy';

export const Settings = () => {
  return (
    <div>
      <h2>Settings</h2>
      <UpdatePrivacy />
      <UpdatePassword />
    </div>
  );
};
