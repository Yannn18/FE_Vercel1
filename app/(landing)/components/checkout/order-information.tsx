"use client";

import { SetStateAction, useState } from "react";
import CardWithHeader from "../ui/card-with-header";
import { CustomerInfo } from "@/app/hooks/use-cart-store";
type TOrderInformation = {
  formData: CustomerInfo;
  setFormData: React.Dispatch<SetStateAction<CustomerInfo>>;
};

const OrderInformation = ({ formData, setFormData }: TOrderInformation) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <CardWithHeader title="Order Information">
      <div className="p-5">
        <div className="input-group">
          <label htmlFor="customerName">Full Name</label>
          <input
            type="text"
            placeholder="Type Your Full Name"
            id="customerName"
            name="customerName"
            value={formData.customerName}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="customerContact">WhatsApp Number</label>
          <input
            type="text"
            placeholder="Type Your WhatsApp Number"
            id="customerContact"
            name="customerContact"
            value={formData.customerContact ?? ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="customerAddress">Shipping Address</label>
          <textarea
            placeholder="Type Your Address"
            id="customerAddress"
            name="customerAddress"
            rows={7}
            value={formData.customerAddress}
            onChange={handleInputChange}
          ></textarea>
        </div>
      </div>
    </CardWithHeader>
  );
};
export default OrderInformation;
