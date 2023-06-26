import axios from "axios";

export interface AccountProps {
    email: string;
    password: string;
    firstName: string;
    lastName: string;

}

export async function getAccount() {
  try {
    const response = await axios.post('https://qwikle-server.eddi.cloud/', {
        query: `
          query Query {
            me {
              email
              firstname
              lastname
            }
          }
        `,
  });
  console.log(response.data);
  return response.data;
  } catch (error) {}
}

export async function updateAccount(changesAccount: AccountProps) {
  let changesContent = '';
  if (changesAccount.email) {
    changesContent += `email: "${changesAccount.email}",`;
  }
  if (changesAccount.password) {
    changesContent += `password: "${changesAccount.password}",`;
  }
  if (changesAccount.firstName) {
    changesContent += `firstname: "${changesAccount.firstName}",`;
  }
  if (changesAccount.lastName) {
    changesContent += `lastname: "${changesAccount.lastName}",`;
  }
  

try {
  const response = await axios.post('https://qwikle-server.eddi.cloud/', {
      query: `
      mutation UpdateAccount {
        updateAccount(updateAccountInput: {
          ${changesContent}
        }) {
          email
          firstname
          lastname
        }
      }
    `,
  });
  console.log(response.data);
  return response.data;
  } catch (error) {}
}

