import { getCurrentUser } from 'aws-amplify/auth';

async function currentAuthenticatedUser() {
  try {
    const { username, userId, signInDetails } = await getCurrentUser();
    return signInDetails
    
  } catch (err) {
    console.log(err);
  }
}
export default currentAuthenticatedUser