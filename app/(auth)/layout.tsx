import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const instructions = [
    "After triggering any operation, please wait for sometime for it to be executed.",
    "While creating an account, please enter Date of Birth greater than 18 years old.",
    "Please enter city and state located in USA. For Example : City as 'New York City' and State as 'NY'. ",
  ];
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset flex justify-center items-center">
        <div className="bg-slate-300/50 rounded-lg py-3 px-8 flex flex-col gap-3 w-[80%]">
          <h1 className="header-box-title">Instructions</h1>
          <ul style={{ listStyleType: "disc" }} className="flex flex-col gap-1">
            {instructions?.map((i) => {
              return <li className="header-box-subtext">{i}</li>;
            })}
          </ul>

          {/* <Image
            src="/icons/auth-image.svg"
            alt="auth-image"
            width={500}
            height={500}
          /> */}
        </div>
      </div>
    </main>
  );
}
