import React, { useEffect, useState } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useSelector } from "react-redux";
import { getOrderByUserAction } from "../../action/orderAction";
//

import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Order = () => {
  const { user } = useSelector((store) => store.userInfo);
  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    const obj = {
      _id: user._id,
      fName: user.fName,
      lName: user.lName,
      phone: user.phone,
      email: user.email,
      address: user.address,
    };
    async function getOrder() {
      const result = await getOrderByUserAction(obj);
      result && setOrderList(result);
    }
    getOrder();
  }, [user]);

  const columns = [
    { field: "status", headerName: "Status", width: 100 },
    { field: "paidWith", headerName: "Payment Method", width: 170 },
    { field: "totalAmount", headerName: "Total Price", width: 100 },
    { field: "product", headerName: "Product", width: 200 },
    {
      field: "image",
      headerName: "Image",
      width: 130,
      renderCell: (params) => (
        <img src={params.row.image} height={150} width={150} />
      ),
    },
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => (
        <Link to={`/cart/order/${params.row.action}`} className="nav-link">
          Open
        </Link>
      ),
    },
  ];

  const rows = orderList.map((order) => {
    return {
      id: order._id,
      status: order.status,
      paidWith: order.payment.method,
      totalAmount: order.payment.totalAmount,
      product: order.orderItems.map((item) => item.title),
      image: order.orderItems.map((item) => item.thumbnail),
      action: order._id,
    };
  });

  return (
    <UserLayout>
      <div style={{ width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          density="comfortable"
          pageSizeOptions={[5, 10]}
          checkboxSelection
          getRowHeight={() => "auto"}
        />
      </div>
    </UserLayout>
  );
};

export default Order;
