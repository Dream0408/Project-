export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
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
    headerName: "Eamil",
    width: 230,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
        return (
            <div className={`cellWithStatus ${params.row.status}`}>
                { params.row.status }
            </div>
        );
    }
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Ziyech",
    img: "https://i.guim.co.uk/img/media/0d8fda941dc25a7f71748e881c0eece59744ba50/0_156_4233_2541/master/4233.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=de6ec302ceb08340ea6586e515fba2f2",
    status: "active",
    email: "ziyech@gmail.com",
  },
  {
    id: 2,
    username: "Bruno",
    img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p141746.png",
    status: "passive",
    email: "bruno@gmail.com",
  },
  {
    id: 3,
    username: "Mount",
    img: "https://img.chelseafc.com//image/upload/f_auto,q_auto:best,f_auto,q_90,w_1440,c_fill,g_faces/chelsea-app/Mount-Hatty-GettyImages-1236070181.jpg",
    status: "pending",
    email: "mount@gmail.com",
  },
  {
    id: 4,
    username: "Rice",
    img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p204480.png",
    status: "active",
    email: "rice@gmail.com",
  },
  {
    id: 5,
    username: "Jude",
    img: "https://b.fssta.com/uploads/application/soccer/headshots/71310.vresize.350.350.medium.12.png",
    status: "passive",
    email: "jude@gmail.com",
  },
];
