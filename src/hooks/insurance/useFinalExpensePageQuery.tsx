import { graphql, useStaticQuery } from "gatsby";

export const useFinalExpensePageQuery = () => {
    const data = useStaticQuery(graphql`
query FinalExpensePageQuery {
  page: wpPage(databaseId: {eq: 7517}) {
    finalExpensePageCustomFields {
      section1 {
        title
        listItems
        text
        subtitle
        cta {
          link
          text
        }
      }
      section2 {
        title
        accordionTitle
        accordionText
        readMoreLink
      }
      stillHaveQuestions {
        title
        button1Text
        button1Url
        button2Text
        button2Url
      }
      relatedContentSection {
        title
        viewMoreLink
        viewMoreText
      }
      relatedContent1 {
        title
        content
        image {
          sourceUrl
        }
        link
      }
      relatedContent2 {
        title
        content
        image {
          sourceUrl
        }
        link
      }
      relatedContent3 {
        title
        content
        image {
          sourceUrl
        }
        link
      }
    }
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