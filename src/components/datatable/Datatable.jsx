import React from 'react'
import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';

import { userColumns, userRows } from "../../datatablesource.js";

import { Link } from 'react-router-dom';
import { useState } from 'react';





const Datatable = () => {

    const [data, setData] = useState(userRows);


    const handleDelete = (id) => {
        //take actual data and filter, check each item, if item ID not equal auer ID will give us new data
        setData(data.filter((item) => item.id !== id));
    };



    const actionColumn = [{
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
            return (
                <div className="cellAction">
                    <Link to="/users/test" style={{ textDecoration: "none" }}>
                        <div className="viewButton">View</div>
                    </Link>

                    <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Delete</div>

                </div>
            )
        }
    }];


    return (
        //material-ui Data table -- @mui/x-data-grid
        <div className="datatable">
            <div className="datatableTitle">
                Add New User
                <Link to="/users/new" className="link">Add New</Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={data}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    )
}

export default Datatable;