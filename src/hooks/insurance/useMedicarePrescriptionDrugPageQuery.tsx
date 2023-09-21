import { graphql, useStaticQuery } from "gatsby";

export const useMedicarePrescriptionDrugPageQuery = () => {
    const data = useStaticQuery(graphql`
query MedicarePrescriptionDrugPageQuery {
  page: wpPage(databaseId: {eq: 8991}) {
    medicarePrescriptionDrugPageCustomFields {
      heroDisclaimer
      medicarePrescriptionDrugSection1 {
        heading
        subheading
        color
        listTitle
        listItems
        sectionCta {
          text
          link
        }
      }
      medicarePrescriptionDrugSection2 {
        title
        titleMobile
        subtitle
        buttonTextDesktop
        buttonUrlDesktop
        buttonTextMobile
        buttonUrlMobile
      }
      medicarePrescriptionDrugRelated {
        sectionHeading
        sectionColor
        ctaText
        ctaLink
        medicarePrescriptionDrugRelated1 {
          title
          content
          link
          image {
            sourceUrl
          }
        }
        medicarePrescriptionDrugRelated2 {
          title
          content
          link
          image {
            sourceUrl
          }
        }
        medicarePrescriptionDrugRelated3 {
          title
          content
          link
          image {
            sourceUrl
          }
        }
      }
      finalMedial {
        title
        button1Text
        button1Url
        button2Text
        button2Url
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