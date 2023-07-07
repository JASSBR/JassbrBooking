export const userColumns = [
  { field: "_id", headerName: "ID", width: 100 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "Country",
    width: 210,
  },
  {
    field: "city",
    headerName: "City",
    width: 210,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 210,
  },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 200,
  },
  {
    field: "type",
    headerName: "Type",
    width: 200,
  },
  {
    field: "title",
    headerName: "Title",
    width: 280,
  },
  {
    field: "city",
    headerName: "City",
    width: 200,
  },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 200 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
    editable: true
  },
  {
    field: "desc",
    headerName: "Description",
    width: 300,
  },
  {
    field: "price",
    headerName: "Price",
    width: 200,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 200,
  },
];
