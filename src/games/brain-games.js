import { showGameGreeting, showUserGreeting, getUserName } from '..';

export default () => {
  showGameGreeting();
  console.log('\n');

  const userName = getUserName();
  showUserGreeting(userName);
};
