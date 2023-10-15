import { gql } from "@apollo/client";

export const HEALTH_CHECK = gql`
  query ExampleQuery {
    ping {
      pong {
        emoji
      }
    }
  }
`;
