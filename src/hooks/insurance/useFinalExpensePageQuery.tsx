import { graphql, useStaticQuery } from "gatsby";

export const useFinalExpensePageQuery = () => {
    const data = useStaticQuery(graphql`
query FinalExpensePageQuery {
  page: wpPage(databaseId: {eq: 7517}) {
    pageHeroFields {
      heroImage {
        sourceUrl
      }
      mobileHeroImage {
        sourceUrl
      }
      headline
      subheadline
      heroButtons {
        heroButton1 {
          text
        }
        heroButton2 {
          text
        }
      }
      callUs
    }
    disclaimers {
      disclaimer
    }
    seo {
      title
      metaDesc
    }
  }
}
`);

    return data;
};