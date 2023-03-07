export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
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
      field: "displayName",
      headerName: "Full Name",
      width: 150,
    },
    {
      field: "country",
      headerName: "Country",
      width: 100,
    },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 160,
    //   renderCell: (params) => {
    //     return (
    //       <div className={`cellWithStatus ${params.row.status}`}>
    //         {params.row.status}
    //       </div>
    //     );
    //   },
    // },
  ];
  
  //temporary data
  
  export const userInputs = [
    {
      id: "username",
      label: "Username",
      type: "text",
      placeholder: "john_doe",
    },
    {
      id: "displayName",
      label: "Name and surname",
      type: "text",
      placeholder: "John Doe",
    },
    {
      id: "email",
      label: "Email",
      type: "mail",
      placeholder: "john_doe@gmail.com",
    },
    {
      id: "phone",
      label: "Phone",
      type: "text",
      placeholder: "+1 234 567 89",
    },
    {
      id: "password",
      label: "Password",
      type: "password",
    },
    {
      id: "address",
      label: "Address",
      type: "text",
      placeholder: "Elton St. 216 NewYork",
    },
    {
      id: "country",
      label: "Country",
      type: "text",
      placeholder: "USA",
    },
  ];
  