import { AppState, Auth0Provider, User } from "@auth0/auth0-react";

type Props = {
  children:React.ReactNode;
}

const Auth0providerWithNavigate = ({children}: Props) => {
  const domain=import.meta.env.VITE_AUTH0_DOMAIN;
  const clienId =import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri= import.meta.env.VITE_AUTH0_CALLBACK_URL;
  if(!domain || !clienId || !redirectUri)
  {
    throw new Error("unable to initialise auth");
  }
 const onRedirectCallback=(appState?:AppState,user?:User)=>{
         console.log("User",user);
 }

  return(
    <Auth0Provider domain={domain} clientId={clienId} authorizationParams={
        {
            redirect_uri:redirectUri,
        }
    } onRedirectCallback={onRedirectCallback}
    >
        {children}
    </Auth0Provider>
  )
}

export default Auth0providerWithNavigate;