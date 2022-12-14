// import React from 'react'
// import "./datatable.scss";
// import { DataGrid } from '@mui/x-data-grid';


// const columns = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'firstName', headerName: 'First name', width: 130 },
//     { field: 'lastName', headerName: 'Last name', width: 130 },
//     {
//         field: 'age',
//         headerName: 'Age',
//         type: 'number',
//         width: 90,
//     },
//     {
//         field: 'fullName',
//         headerName: 'Full name',
//         description: 'This column has a value getter and is not sortable.',
//         sortable: false,
//         width: 160,
//         valueGetter: (params) =>
//             `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//     },
//     //My custom Test cell
//     {
//         field: 'testCell',
//         headerName: 'My Test cell',
//         description: 'This column has a value getter and is not sortable.',
//         sortable: false,
//         width: 160,
//         renderCell: (props) => {
//             return (
//                 <>
//                     <span>{props.row.lastName}</span>
//                     <p>{props.row.age}</p>
//                     <p>XXX</p>
//                 </>
//             );
//         },
//     },
// ];

// //data for  table
// const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];




// const DatatableTest = () => {
//     return (
//         //material-ui Data table -- @mui/x-data-grid
//         <div className="datatable">
//             <DataGrid
//                 rows={rows}
//                 columns={columns}
//                 pageSize={9}
//                 rowsPerPageOptions={[6]}
//                 checkboxSelection
//             />
//         </div>
//     )
// }

// export default DatatableTest;