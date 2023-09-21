import { useStaticQuery, graphql } from "gatsby";

export const useFooterLPMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query lpMenu {
      wpcontent {
        menu(id: "1087", idType: DATABASE_ID) {
          menuItems {
            nodes {
              id
              label
              parentId
              url
              cssClasses
            }
          }
        }
      }
    }
  `);

  return data
}
