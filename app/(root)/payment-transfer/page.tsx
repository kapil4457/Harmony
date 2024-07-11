import HeaderBox from "@/components/HeaderBox";
import PaymentTransferForm from "@/components/PaymentTransfer";
import { getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import React from "react";

const PaymentTransfer = async () => {
  const loggedIn = await getLoggedInUser();
  if (!loggedIn) {
    redirect("/sign-in");
  }
  // console.log(loggedIn);
  const accounts = await getAccounts({ userId: loggedIn?.$id });
  return (
    <section className="payment-transfer">
      <HeaderBox
        title="Payment Transfer"
        subtext="Please provide any specific details or notes related to the payment transfer"
      />
      <section className="size-full pt-5">
        <PaymentTransferForm accounts={accounts} />
      </section>
    </section>
  );
};

export default PaymentTransfer;
