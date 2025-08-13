// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const TechnologyPage = () => {
  return (
    <>
      <Metadata title="Technology" description="Technology page" />

      <h1>TechnologyPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/TechnologyPage/TechnologyPage.tsx</code>
      </p>
      {/*
          My default route is named `technology`, link to me with:
          `<Link to={routes.technology()}>Technology</Link>`
      */}
    </>
  )
}

export default TechnologyPage
