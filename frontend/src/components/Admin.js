import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import Axios from 'axios';

export default function Admin() {
    const [cols, setCols] = useState({
        columns: [
            { title: 'Product Name', field: 'name' },
            { title: 'Description', field: 'desc' },
            { title: 'Price', field: 'price', type: 'numeric' },
            { title: 'Image', field: 'image' },
            { title: 'Category', field: 'category' },
        ]
    });

    const [products, setProducts] = useState([]);

    useEffect(() => {
        var fetchProd = async () => {
            var { data } = await Axios.get("/api/products/");
            setProducts({ data: data });
        }
        fetchProd();
    }, []);

    if(localStorage.getItem("jwtToken")===null||localStorage.getItem("jwtToken").split(',')[0]!=='admin'){
        return(
            <div style={{height:'80vh'}}>
                Access Denied
            </div>
        )
    }
    else return (
        <MaterialTable
            title="Products List"
            columns={cols.columns}
            data={products.data}
            editable={{
                onRowAdd: (newData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                        Axios.post("/api/",newData).then(resp => {
                                alert("Product Added successfully!");
                                });
                            setProducts((prevState) => {
                                const data = [...prevState.data];
                                data.push(newData);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            Axios.put("/api/products/"+oldData._id,newData).then(resp => {
                                alert("Updated successfully!");
                                });
                            if (oldData) {
                                setProducts((prevState) => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            Axios.delete("/api/products/"+oldData._id).then(resp => {
                            alert("deleted successfully!");
                            });
                            setProducts((prevState) => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
            }}
        />
    );
}