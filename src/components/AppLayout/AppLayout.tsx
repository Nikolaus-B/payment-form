import { Toaster } from "react-hot-toast";
import OrderContainer from "../OrderContainer/OrderContainer";

const AppLayout = () => {
  return (
    <>
      <div>
        <OrderContainer />
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default AppLayout;
