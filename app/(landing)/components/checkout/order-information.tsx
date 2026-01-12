import CardWithHeader from "../ui/card-with-header";

const OrderInformation = () => {
  return (
    <CardWithHeader title="Order Information">
      <div className="p-5">
        <div className="input-group">
          <label htmlFor="full_name">Full Name</label>
          <input type="text" placeholder="Type Your Full Name" id="full_name" />
        </div>
        <div className="input-group">
          <label htmlFor="wa_number">WhatsApp Number</label>
          <input
            type="text"
            placeholder="Type Your WhatsApp Number"
            id="wa_number"
          />
        </div>
        <div className="input-group">
          <label htmlFor="add_number">Shipping Address</label>
          <textarea
            placeholder="Type Your Address"
            id="add_number"
            rows={7}
          ></textarea>
        </div>
      </div>
    </CardWithHeader>
  );
};
export default OrderInformation;
