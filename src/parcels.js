const parcels = [
  {
    id: 1,
    date: "2023-11-15",
    name: "user1",
    status: "Delivered",

    senderEmail: "hahaha@haha.com",
    senderAddress: "123 fake street",
    recipientEmail: "lololo@lol.com",
    recipientAddress: "456 fake street",

  },
  {
    id: 2,
    date: "2023-11-15",
    name: "user2",
    status: "In Transit",

    senderEmail: "hahaha@haha.com",
    senderAddress: "123 fake street",
    recipientEmail: "lololo@lol.com",
    recipientAddress: "456 fake street",
  },
  {
    id: 3,
    date: "2023-11-15",
    name: "user3",
    status: "Delivered",

    senderEmail: "hahaha@haha.com",
    senderAddress: "123 fake street",
    recipientEmail: "lololo@lol.com",
    recipientAddress: "456 fake street",
  },
  {
    id: 4,
    date: "2023-11-15",
    name: "user4",
    status: "Delivered",

    senderEmail: "hahaha@haha.com",
    senderAddress: "123 fake street",
    recipientEmail: "lololo@lol.com",
    recipientAddress: "456 fake street",
  },
  {
    id: 5,
    date: "2023-11-15",
    name: "user5",
    status: "In Transit",

    senderEmail: "hahaha@haha.com",
    senderAddress: "123 fake street",
    recipientEmail: "lololo@lol.com",
    recipientAddress: "456 fake street",
  },
];

export const getParcelById = (id) => {
  return parcels.find((parcel) => parcel.id === parseInt(id, 10));
};

export const getAllParcels = () => {
  return parcels;
};
