import React, { FC } from 'react';
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from 'gatsby';

interface Props {
    title: string;
    description?: string;
    lang?: string;
    keywords?: string[];
    meta?: any[];
}

const PageHead: FC<Props> = ({
                            title,
                            description = ``,
                            lang = `en`,
                            meta = [],
                            keywords = []
                        }) => {
    const {site} = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
                description
                author
                siteUrl
              }
            }
          }
    `
    );

    const location = useLocation();
    const canonical = site.siteMetadata.siteUrl + location.pathname;
    const siteTitle = title || site.siteMetadata.title;
    const metaDescription = description || site.siteMetadata.description;
    const analytics = '(function(g,b,d,f){(function(a,c,d){if(a){var e=b.createElement("style");e.id=c;e.innerHTML=d;a.appendChild(e)}})(b.getElementsByTagName("head")[0],"at-body-style",d);setTimeout(function(){var a=b.getElementsByTagName("head")[0];if(a){var c=b.getElementById("at-body-style");c&&a.removeChild(c)}},f)})(window,document,"body {z-index: 1}",500);';

    return (
      <>
        <html lang={lang} />
        <title>{siteTitle}</title>
        <link rel="canonical" href={canonical}/>
        <link rel="icon" href=""/>

        <meta name="description" content={metaDescription} />

        <meta property="og:url" content={canonical} />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={metaDescription} />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:creator" content={site.siteMetadata.author} />
        <meta property="twitter:title" content={siteTitle} />
        <meta property="twitter:description" content={metaDescription} />

        <script dangerouslySetInnerHTML={{ __html: analytics }}></script>
        {process.env.NODE_ENV === 'development' && <script type="text/javascript" src="https://dev.cdn.uhonedigital.com/scripts/analytics-configuration.min.js"></script>}
      </>
    );
}

export default PageHead;
