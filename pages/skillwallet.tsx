import { InitSwAuth } from "@skill-wallet/auth";
import { gql, useQuery } from "@apollo/client";
export function Swauth(props: any) {
  return <div>{props.partnerKey}</div>;
}



export default function Skillwallet() {
  return (
    <div>
      <Swauth partnerKey="8aba5e8b7666ba8ee790de752a532d79d94220ec"></Swauth>
    </div>
  );
}

InitSwAuth();
