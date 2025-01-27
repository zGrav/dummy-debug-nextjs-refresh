import { useRouter } from "next/router";
import React from "react";

function Page() {
  const { push } = useRouter();
  return (
    <>
      Main page
      <button
        onClick={() => {
          push("/test");
        }}
      >
        Go to test page
      </button>
    </>
  );
}

export default Page;
