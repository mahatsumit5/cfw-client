import React, { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
export const LoginButton = () => {
  const onSuccess = (res) => {
    console.log("login sucessfull", res);
  };
  const failure = (res) => {
    console.log(res);
  };
  //   useEffect(() => {
  //     function start() {
  //       gapi.client.init({
  //         clientId: clientId,
  //         scope: "",
  //       });
  //     }
  //     gapi.load("client:auth2", start);
  //   });
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        onSuccess={onSuccess}
        onFailure={failure}
        cookiePolicy="single_host_origin"
        isSignedIn={true}
      />
    </div>
  );
};
