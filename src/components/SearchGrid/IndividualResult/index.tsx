import React from 'react'
import { BodyText, Breadcrumb, BulletPoint, Container, Result, ResultTitle, Linkbox, BreadcrumbPill, BreadcrumbSeparator } from "./styles"

interface IndividualResultProps {
    title: string
    breadcrumbs: { title: string }[]
    bodyText: string
    link: string
}

const IndividualResult = ({ title, breadcrumbs, bodyText, link }: IndividualResultProps) => {

    const parsedLink = new URL(link)

    return (
        <Container>
            <Linkbox href={parsedLink.pathname} title={title} />
            <Result>
                <ResultTitle dangerouslySetInnerHTML={{ __html: title }} />
                <Breadcrumb>{breadcrumbs.map(({ title }, i) => {
                    return (
                        <>
                            <BreadcrumbPill>{title}</BreadcrumbPill>
                            {i !== breadcrumbs.length-1 && <BreadcrumbSeparator>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                            </BreadcrumbSeparator>}
                        </>
                    )
                })}</Breadcrumb>
                <BodyText dangerouslySetInnerHTML={{__html: bodyText}} />
            </Result>
            <BulletPoint />
        </Container>
    )

}

export default IndividualResult
