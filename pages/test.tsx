import { useRouter } from "next/router";
import React from "react";

function Page() {
  const { push } = useRouter();
  return (
    <>
      Test page
      <button
        onClick={() => {
          push("/");
        }}
      >
        Go to index page
      </button>
    </>
  );
}

export default Page;
