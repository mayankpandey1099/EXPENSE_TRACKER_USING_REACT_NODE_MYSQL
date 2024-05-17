import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Razorpay from "razorpay";
import { setPremium } from "../../utils/AuthSlice";

const useRazorpay = () => {
  const dispatch = useDispatch();
  const token = useSelector((state)=> state.auth.isToken);
  const handlePremium = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/premium/takepremium`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(response.data);
      const { key_id, order_id } = response.data;

      const rzp = new window.Razorpay({
        key_id: key_id,
        order_id: order_id,

        handler: async function (response) {
          try {
            const paymentResponse = await axios.post(
              `http://localhost:3000/premium/status`,
              {
                order_id: order_id,
                payment_id: response.razorpay_payment_id,
              },
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: token,
                },
              }
            );
            rzp.close();

            alert("Payment Successful!! Thankyou for buying premium. Enjoy the new Services");
            dispatch(setPremium(true));

            return paymentResponse.json();
          } catch (error) {
            console.error("Error occurred while confirming payment", error);
          }
        },
      });

      rzp.open();
    } catch (error) {
      console.error("Error occurred while processing premium purchase", error);
    }
  }, [dispatch]);

  return handlePremium;
};

export default useRazorpay;
