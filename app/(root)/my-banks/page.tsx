import BankCard from "@/components/BankCard";
import HeaderBox from "@/components/HeaderBox";
import { getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import React from "react";

const MyBanks = async () => {
  const loggedIn = await getLoggedInUser();
  if (!loggedIn) {
    redirect("/sign-in");
  }
  // console.log(loggedIn);
  const accounts = await getAccounts({ userId: loggedIn?.$id });
  // console.log("accounts : ", accounts);
  const accountsData = accounts?.data;
  if (!accounts) return;

  return (
    <section className="flex">
      <div className="my-banks">
        <HeaderBox
          title="My Bank Accounts"
          subtext="Effortlessly manage your banking activities."
        />
        <div className="space-y-4">
          <h2 className="header-2">Your cards</h2>
          <div className="flex flex-wrap gap-6">
            {accounts &&
              accounts?.data?.map((account: Account) => {
                return (
                  <BankCard
                    account={account}
                    key={account.id}
                    userName={loggedIn?.firstName}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyBanks;
