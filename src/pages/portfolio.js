import React from 'react'

import Layout from '../components/Layout'

import { TwitterTweetEmbed } from 'react-twitter-embed'; // TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterMentionButton,

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar_Portfolio'
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
            Portfolio
          </h1>
          <div className='subheading mb-5'>
            Mike Mahoney · Digital Art ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
        </div>
      </section>

      <hr className='m-0' />

     <section
        className='resume-section p-3 p-lg-5 d-flex justify-content-center'
        id='maps'
      >
        <div className='w-100'>
          <h2 className='mb-5'>Maps</h2>
          <div>
          <div className='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'>
                <div className='resume-content'>
                <h3 className='mb-0'><a href='https://github.com/mikemahoney218/spacey'>spacey</a></h3>
                <p>
                Maps generated using the <a href="https://github.com/mikemahoney218/spacey">spacey </a>
                library to make maps with <a href="https://github.com/tylermorganwall/rayshader">rayshader. </a>
                Note that the maps are pretty compressed to help the website load faster -- if you're looking for prints, 
                <a href="https://www.redbubble.com/people/mm218/shop"> check out my store on RedBubble.</a>
                </p>
                <br></br>
                <p>
                <div className='subheading mb-3'>Mt. Washington</div>
                    <a target="_blank" href="../img/portfolio/washington.jpg">
                        <picture>
                        <source srcset="../img/portfolio/washington.webp" type="image/webp" />
                        <img alt="An abstract map of Mt. Katahdin" src="../img/portfolio/washington.jpg" type="image/jpeg" />
                        </picture>
                    </a>
                </p>
                <p>
                <div className='subheading mb-3'>Mt. Katahadin</div>
                    <a target="_blank" href="../img/portfolio/katahdin.jpg">
                        <picture>
                            <source srcset="../img/portfolio/katahdin.webp" type="image/webp" />
                            <img alt="An abstract map of Mt. Katahdin" src="../img/portfolio/katahdin.jpg" type="image/jpeg" />
                        </picture>
                    </a>
                </p>
                <p>
                <div className='subheading mb-3'>Mt. Marcy</div>
                    <a target="_blank" href="../img/portfolio/marcy.jpg">
                        <picture>
                            <source srcset="../img/portfolio/marcy.webp" type="image/webp" />
                            <img alt="An abstract map of Mt. Marcy" src="../img/portfolio/marcy.jpg" type="image/jpeg" />
                        </picture>
                    </a>
                </p>
                </div>
                <br></br>
            <div className='resume-date text-md-right'>
              <a href="https://www.redbubble.com/people/mm218/shop" className='text-primary'>Check it out on RedBubble</a>
              <br></br>
              <a href="https://github.com/mikemahoney218/spacey" className='text-primary'>spacey on GitHub</a>
            </div>
          </div>
          </div>
            <br></br>

            <hr className='m-0' />
            <br></br>

          <div>
          <div className='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'>
                <div className='resume-content'>
                <h3 className='mb-0'>Other Maps</h3>
                <br></br>
                <p>
                <div className='subheading mb-3'>Albany, NY</div>
                    <a target="_blank" href="../img/portfolio/albany.jpg">
                        <picture>
                            <source srcset="../img/portfolio/albany.webp" type="image/webp" />
                            <img alt="A monochromatic map of Albany" src="../img/portfolio/albany.jpg" type="image/jpeg" />
                        </picture>
                    </a>
                </p>
                <div className='subheading mb-3'>Atlanta, GA</div>
                <p>
                <a target="_blank" href="../img/portfolio/atlanta.jpg">
                        <picture>
                            <source srcset="../img/portfolio/atlanta.webp" type="image/webp" />
                            <img alt="A monochromatic map of Atlanta" src="../img/portfolio/atlanta.jpg" type="image/jpeg" />
                        </picture>
                    </a>
                </p>
                <p>
                <div className='subheading mb-3'>Boston, MA</div>
                    <a target="_blank" href="../img/portfolio/boston.jpg">
                        <picture>
                            <source srcset="../img/portfolio/boston.webp" type="image/webp" />
                            <img alt="A monochromatic map of Boston" src="../img/portfolio/boston.jpg" type="image/jpeg" />
                        </picture>
                    </a>
                </p>
                <p>
                <div className='subheading mb-3'>Bozeman, MT</div>
                <a target="_blank" href="../img/portfolio/bozeman.jpg">
                        <picture>
                            <source srcset="../img/portfolio/bozeman.webp" type="image/webp" />
                            <img alt="A monochromatic map of Bozeman" src="../img/portfolio/bozeman.jpg" type="image/jpeg" />
                        </picture>
                    </a>
                </p>
                <p>
                <div className='subheading mb-3'>Pittsburgh, PA</div>
                <a target="_blank" href="../img/portfolio/pittsburgh.jpg">
                        <picture>
                            <source srcset="../img/portfolio/pittsburgh.webp" type="image/webp" />
                            <img alt="A monochromatic map of Pittsburgh" src="../img/portfolio/pittsburgh.jpg" type="image/jpeg" />
                        </picture>
                    </a>
                </p>
                <p>
                <div className='subheading mb-3'>Philadelphia, PA</div>
                <a target="_blank" href="../img/portfolio/philadelphia.jpg">
                        <picture>
                            <source srcset="../img/portfolio/philadelphia.webp" type="image/webp" />
                            <img alt="A monochromatic map of Philadelphia" src="../img/portfolio/philadelphia.jpg" type="image/jpeg" />
                        </picture>
                    </a>
                </p>
                <p>
                <div className='subheading mb-3'>Rochester, NY</div>
                <a target="_blank" href="../img/portfolio/rochester.jpg">
                        <picture>
                            <source srcset="../img/portfolio/rochester.webp" type="image/webp" />
                            <img alt="A monochromatic map of Rochester" src="../img/portfolio/rochester.jpg" type="image/jpeg" />
                        </picture>
                    </a>
                </p>
                <p>
                <div className='subheading mb-3'>Syracuse, NY</div>
                <a target="_blank" href="../img/portfolio/syracuse.jpg">
                        <picture>
                            <source srcset="../img/portfolio/syracuse.webp" type="image/webp" />
                            <img alt="A monochromatic map of Syracuse" src="../img/portfolio/syracuse.jpg" type="image/jpeg" />
                        </picture>
                    </a>
                </p>
                <p>
                <div className='subheading mb-3'>Las Vegas, NV</div>
                <a target="_blank" href="../img/portfolio/vegas.jpg">
                        <picture>
                            <source srcset="../img/portfolio/vegas.webp" type="image/webp" />
                            <img alt="A monochromatic map of Las Vegas" src="../img/portfolio/vegas.jpg" type="image/jpeg" />
                        </picture>
                    </a>
                </p>
          </div>
                <br></br>
            <div className='resume-date text-md-right'>
              <a href="https://www.redbubble.com/people/mm218/shop" className='text-primary'>Check it out on RedBubble</a>
            </div>
          </div>
          </div>
            <br></br>
            </div>
      </section>

      <br></br>

            <hr className='m-0' />
            <br></br>

      <section
        className='resume-section p-3 p-lg-5 d-flex justify-content-center'
        id='generative'
      >
        <div className='w-100'>
          <h2 className='mb-5'>Generative Art</h2>
          <div>
          <div className='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'>
                <div className='resume-content'>
                <h3 className='mb-0'><a href='https://mm218.shinyapps.io/have_a_tree/'>Can I Offer You a Tree in this Trying Time?</a></h3>
                <p>
                Geometric patterns created using <a href="https://mm218.shinyapps.io/have_a_tree/"> an interactive shiny app. </a>
                </p>
                <br></br>
                <p>
                <div className='subheading mb-3'>Clear Directions</div>
                <a target="_blank" href="../img/portfolio/arrow_bg.jpg">
                        <picture>
                            <source srcset="../img/portfolio/arrow_bg.webp" type="image/webp" />
                            <img alt="A geometric pattern in the shape of arrows" src="../img/portfolio/arrow_bg.jpg" type="image/jpeg" />
                        </picture>
                    </a>
                </p>
                <p>
                <div className='subheading mb-3'>City Streets</div>
                <a target="_blank" href="../img/portfolio/cst.jpg">
                        <picture>
                            <source srcset="../img/portfolio/cst.webp" type="image/webp" />
                            <img alt="A geometric pattern in the shape of squares" src="../img/portfolio/cst.jpg" type="image/jpeg" />
                        </picture>
                    </a>
                </p>
                <p>
                <div className='subheading mb-3'>Treeangle</div>
                <a target="_blank" href="../img/portfolio/tree.jpg">
                        <picture>
                            <source srcset="../img/portfolio/tree.webp" type="image/webp" />
                            <img alt="A geometric pattern in the shape of a tree" src="../img/portfolio/tree.jpg" type="image/jpeg" />
                        </picture>
                    </a>
                </p>
                <p>
                <div className='subheading mb-3'>Going Somewhere</div>
                <a target="_blank" href="../img/portfolio/tree7.jpg">
                        <picture>
                            <source srcset="../img/portfolio/tree7.webp" type="image/webp" />
                            <img alt="A geometric pattern in the shape of hexagons" src="../img/portfolio/tree7.jpg" type="image/jpeg" />
                        </picture>
                    </a>
                </p>
                <p>
                <div className='subheading mb-3'>Nautilus</div>
                <a target="_blank" href="../img/portfolio/tree8.jpg">
                        <picture>
                            <source srcset="../img/portfolio/tree8.webp" type="image/webp" />
                            <img alt="A geometric pattern in the shape of curved lines" src="../img/portfolio/tree8.jpg" type="image/jpeg" />
                        </picture>
                    </a>
                </p>
                </div>
                <br></br>
            <div className='resume-date text-md-right'>
              <a href="https://www.redbubble.com/people/mm218/shop" className='text-primary'>Check it out on RedBubble</a>
              <br></br>
              <a href="https://mm218.shinyapps.io/have_a_tree/" className='text-primary'>Play with the app</a>
            </div>
          </div>
          </div>
            <br></br>
            </div>
      </section>

      <br></br>

            <hr className='m-0' />
            <br></br>

      <section
        className='resume-section p-3 p-lg-5 d-flex justify-content-center'
        id='experimental'
      >
        <div className='w-100'>
          <h2 className='mb-5'>Experimental</h2>
          <div>
          <div className='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'>
                <div className='resume-content'>
                <h3 className='mb-0'>@fortunes_teller</h3>
                <p>
                A human-curated AI tweetbot created by training the GPT-2 355M model against 
                "fortunes" packages from various Linux distros. Began running in May 2020.
                </p>
                </div>
                <br></br>
            <div className='resume-date text-md-right'>
              <a href="https://twitter.com/fortunes_teller" className='text-primary'>See it in action</a>
              <br></br>
              <a href="https://github.com/mikemahoney218/fortunes_teller" className='text-primary'>See the code</a>
            </div>
          </div>
          <div className='resume-item d-flex col-lg flex-md-row justify-content-between mb-5'>

              <div className='resume-content'>
              <TwitterTweetEmbed
                tweetId={'1260738147647918081'}
                />
                <TwitterTweetEmbed
                tweetId={'1261294163343159300'}
                />
                <TwitterTweetEmbed
                tweetId={'1261629139125182465'}
                />
              </div>
                
              <div className='resume-content'>
              <TwitterTweetEmbed
                tweetId={'1261766168102256641'}
                />
                <TwitterTweetEmbed
                tweetId={'1261690038452174850'}
                />
                <TwitterTweetEmbed
                tweetId={'1261659590036520961'}
                />
              </div>
          </div>
          </div>
            <br></br>
            </div>
      </section>

      <hr className='m-0' />
 
    </div>
  </Layout>
)

export default IndexPage