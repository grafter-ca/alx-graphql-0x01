import { gql } from '@apollo/client';

export const GET_EPISODES = gql`
  query getEpisodes($page: Int!, $filter: FilterEpisode) {
    episodes(page: $page, fileter: $filter) {
      info {
        pages
        next
        prev
        count
}
        results{
        id
        name
        air_date
        episode
}
}
}
`;