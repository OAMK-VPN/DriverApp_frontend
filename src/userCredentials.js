const credentials = [
    {
      userName: "user1",
      password: "aaa",

    },
    {
      userName: "user2",
      password: "bbb",

    },
    {
        userName: "user3",
        password: "ccc",
  
      },
    
  ];
  
  export const getCredential = (userName) => {
    return credentials.find((credential) => credential.userName === userName);
  };
  
  export const getAllCredentials = () => {
    return credentials;
  };
  