import React from 'react'

import Layout from '../components/Layout'

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar'
import config from '../../config'
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className='container-fluid p-0'>
      <section
        className='resume-section p-3 p-lg-5 d-flex align-items-center'
        id='about'
      >
        <div className='w-100'>
          <h1 className='mb-0'>
            {config.firstName}
            <span className='text-primary'>{config.lastName}</span>
          </h1>
          <div className='subheading mb-5'>
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className='lead mb-5'>
          I am an analyst at Wayfair, Inc., working within the Forecasting
          Analytics team within the larger Workforce Management group. In the
          past I've worked as an independent researcher with both the Stella
          Riparian and Stream Ecology and Yanai Forest Ecosystem Science
          laboratories, as well as the Beaver Impact Assessment intern for
          the New York State Department of Environmental Conservation. In
          all of these roles I've worked to apply data science techniques to
          large-scale challenges, frequently serving as the statistical and
          technical expert within my team.
          </p>
          <p className='lead mb-5'>
          My past projects have included assessing the landscape-level
          impacts of ecosystem engineers within New York's Adirondack State
          Park, as well as investigating the impact of fertilization on beech
          bark disease within the White Mountains of New Hampshire. I've also
          written a primer on how to use R for data exploration and analysis
          in both scientific and business contexts.
          </p>
          <p className='lead mb-5'>
            I post updates to my projects on <a href="/blog">my blog</a>, as 
            well as cool visualization and tech things I stumble across in my
            day-to-day work.
          </p>
          <div className='social-icons'>
            {config.socialLinks.map(social => {
              const { icon, url } = social
              return (
                <a key={url} href={url}>
                  <i className={`${icon}`}></i>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <hr className='m-0' />

      <section
        className='resume-section p-3 p-lg-5 d-flex justify-content-center'
        id='experience'
      >
        <div className='w-100'>
          <h2 className='mb-5'>Experience</h2>

          <div className='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'>
            <div className='resume-content'>
              <h3 className='mb-0'>Analyst</h3>
              <div className='subheading mb-3'>Forecasting & Analytics -- Wayfair, Inc. </div>
              <p>
                <li>
                Develop and launch department's first automated streaming
                data pipelines, connecting BuildKite, Docker, R, Python, Bash,
                and T-SQL in order to create always-available real-time
                dashboards.
                </li>
                <li>
                Implement process improvements including automating long-standing
                reporting (dramatically increasing reporting speed and accuracy)
                and introducing Git and related workflows to department.
                </li>
                <li>
                  Fill role as interdepartmental liaison between partner teams
                  on matters of reporting methodologies, data availability, and
                  data access.
                </li>
                <li>
                    Serve as department subject-matter expert on technical matters
                </li>
              </p>
            </div>
            <div className='resume-date text-md-right'>
              <span className='text-primary'>June 2019 - Present</span>
              <br></br>
              <span className='text-primary'>Boston, MA</span>
            </div>
          </div>

          <div className='resume-item d-flex flex-column flex-md-row justify-content-between'>
            <div className='resume-content'>
              <h3 className='mb-0'>Independent Researcher</h3>
              <div className='subheading mb-3'>Stella Riparian and Stream Ecology Laboratory</div>
              <p>
                <li>
                Spearheaded design and implementation of research plan,
                including data collection from almost 200 field sites, over
                2,000 miles of travel by researchers, data analysis, and
                statistical modeling to predict beaver impacts in complex
                natural systems, using R and ESRI GIS technologies.
                </li>
                <li>
                Analyzed complex systems through use of statistical modeling
                and machine learning algorithms developed in R and Python.
                </li>
                <li>
                Developed data visualizations and detailed reports used to
                inform policy at the state level.
                </li>
              </p>
            </div>
            <div className='resume-date text-md-right'>
              <span className='text-primary'>September 2017 - June 2019</span>
              <br></br>
              <span className='text-primary'>Syracuse, NY</span>
            </div>
          </div>
          <br></br>
          <div className='resume-item d-flex flex-column flex-md-row justify-content-between'>
            <div className='resume-content'>
              <h3 className='mb-0'>Research Intern</h3>
              <div className='subheading mb-3'>Yanai Forest Ecosystem Science Laboratory</div>
              <p>
                <li>
                Analyzed quantitative and qualitative data in R, performing
                hypothesis testing, statistical estimation, and data
                visualization using non-parametric statistics in role as data
                analyst.
                </li>
                <li>
                Improved data collection speed significantly by creating and
                implementing novel image analysis methods using new
                technologies.
                </li>
              </p>
            </div>
            <div className='resume-date text-md-right'>
              <span className='text-primary'>September 2019 - April 2020</span>
              <br></br>
              <span className='text-primary'>Boston, MA</span>
            </div>
          </div>
          <br></br>
          <div className='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'>
            <div className='resume-content'>
              <h3 className='mb-0'>Beaver Impact Assessment Intern</h3>
              <div className='subheading mb-3'>New York State Department of Environmental Conservation </div>
              <p>
                <li>
                Spearheaded multi-county environmental research effort in
                collaboration with New York State Department of Environmental
                Conservation and the State University of New York College of
                Environmental Science and Forestry.
                </li>
                <li>
                Evaluated field site locations using R and ESRI ArcGIS to
                select and prioritize areas for data collection.
                </li>
                <li>
                Applied modern statistical techniques and machine learning
                approaches to analyze data, leading to reports on results for
                funding agencies, for land managers and practitioners, and
                for thesis and journal publication (in review at Forest
                Ecology and Management).
                </li>
                <li>
                Obtained competitve Career Fellowship to fund 13-week field
                season.
                </li>
                <li>
                Supervised field technician while travelling extensively
                throughout New York State to gather field data
                </li>
              </p>
            </div>
            <div className='resume-date text-md-right'>
              <span className='text-primary'>May 2018 - August 2018</span>
              <br></br>
              <span className='text-primary'>Albany, NY</span>
            </div>
          </div>

          <div className='resume-item d-flex flex-column flex-md-row justify-content-between'>
            <div className='resume-content'>
              <h3 className='mb-0'>Data Scientist / Project Manager (Volunteer)</h3>
              <div className='subheading mb-3'>Code for Boston - Clean Slate Project</div>
              <p>
                <li>
                Volunteer with civic technology group working with Citizens
                for Juvenile Justice and Greater Boston
                Legal Services to making it easier for
                Massachusetts residents to seal or expunge their
                criminal records.
                </li>
                <li>
                Manage team of 40 volunteers in developing web
                applications designed to help speed up and explain
                the process of applying for record sealing.
                </li>
                <li>
                Mine and wrangle complex data sources to enable
                deeper analyses into typical offender profiles.
                </li>
                <li>
                  Identify most impactful potential changes to law
                  in order to help partners prioritize advocacy work.
                </li>
              </p>
            </div>
            <div className='resume-date text-md-right'>
              <span className='text-primary'>September 2019 - April 2020</span>
              <br></br>
              <span className='text-primary'>Boston, MA</span>
            </div>
          </div>
        </div>
      </section>

      <hr className='m-0' />

      <section
        className='resume-section p-3 p-lg-5 d-flex align-items-center'
        id='education'
      >
        <div className='w-100'>
          <h2 className='mb-5'>Education</h2>

          <div className='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'>
            <div className='resume-content'>
              <h3 className='mb-0'>State University of New York College of Environmental Science and Forestry</h3>
              <div className='subheading mb-3'>Bachelor of Science</div>
              <div>Forest Ecosystem Science</div>
              <p>GPA: 3.72</p>
            </div>
            <div className='resume-date text-md-right'>
              <span className='text-primary'>August 2015 - December 2018</span>
            </div>
          </div>

        </div>
      </section>

      <hr className='m-0' />

      <section
        className='resume-section p-3 p-lg-5 d-flex align-items-center'
        id='skills'
      >
        <div className='w-100'>
          <h2 className='mb-5'>Skills</h2>

          <div className='subheading mb-3'>
            Programming Languages &amp; Tools
          </div>
          <ul className='list-inline dev-icons'>
            <li className='list-inline-item'>
              <i className='fab fa-r-project'></i>
            </li>
            <li className='list-inline-item'>
              <i className='fas fa-database'></i>
            </li>
            <li className='list-inline-item'>
              <i className='fab fa-python'></i>
            </li>
            <li className='list-inline-item'>
              <i className='fab fa-docker'></i>
            </li>
            <li className='list-inline-item'>
              <i className='fab fa-git'></i>
            </li>
            <li className='list-inline-item'>
              <i className='fab fa-linux'></i>
            </li>
          </ul>

          <div className='subheading mb-3'>Sample Projects</div>
          <ul className='fa-ul mb-0'>
            <li>
              <a href='https://github.com/mikemahoney218/spacey'>spacey:</a> Geospatial data access and manipulation for use with rayshader mapping.
            </li>
            <br></br>
            <li>
              <a href='https://github.com/mikemahoney218/heddlr'>heddlr:</a> Functional programming tools for R Markdown document generation.
            </li>
          </ul>
        </div>
      </section>

      <hr className='m-0' />

      <section
        className='resume-section p-3 p-lg-5 d-flex align-items-center'
        id='awards'
      >
        <div className='w-100'>
          <h2 className='mb-5'>Awards</h2>

          <div className='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'>
            <div className='resume-content'>
              <p>
                <span className='text-primary'>December 2018: </span>
                <span>Robin Hood Oak Award for Academic Excellence</span>
              </p>
              <p>
                <span className='text-primary'>December 2018: </span>
                <span>Robert M. Hicks Award for Academic Achievement</span>
              </p>
              <p>
                <span className='text-primary'>May 2018: </span>
                <span>SUNY-ESF Career Fellowship</span>
              </p>
              <p>
                <span className='text-primary'>August 2017: </span>
                <span>Outstanding Student Award for Accomplishments in Field Ecology and Dendrology</span>
              </p>
            </div>
          </div>

        </div>
      </section>

      <hr className='m-0' />

      <hr className='m-0' />

    </div>
  </Layout>
)

export default IndexPage
