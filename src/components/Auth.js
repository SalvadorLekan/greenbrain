import React from "react";

function Auth({ formlist, formData, children }) {
  return (
    <div className="bg-green-200 p-12 w-screen fixed overflow-scroll h-screen">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="max-w-xl flex mx-auto overflow-visible flex-col bg-white p-6 m-1 rounded shadow"
      >
        {children}
      </form>
    </div>
  );
}

export default Auth;
