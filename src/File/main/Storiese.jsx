import React from 'react';
import nat8 from '../img/nat-8.jpg';
import nat9 from '../img/nat-9.jpg';
import videomp4 from '../img/video.mp4';
import videowebm from '../img/video.webm';//from site web coverr

const Stories = () => (
    <section className="section-stories">
        <div className="bg-video">
            <video className="bg-video__content" autoPlay muted loop>
                <source src={videomp4} type="video/mp4" />
                <source src={videowebm} type="video/webm" />
                Your browser is not supported!
            </video>
        </div>
        <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
                We make people geniusely happy
           </h2>
        </div>
        <div className="row">
            <div className="story">
                <figure className="story__shape">
                    <img src={nat8} alt="profilepicture" className="story__img"></img>
                    <figcaption className="story__caption">
                        Mary Smith
                   </figcaption>
                </figure>
                <div className="story__text">
                    <h3 className="heading-tertiary u-margin-bottom-small">I had the best week ever with my family</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                        ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                        ducimus quam nisi exercitationem omnis earum qui.
                    </p>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="story">
                <figure className="story__shape">
                    <img src={nat9} alt="profilepicture" className="story__img"></img>
                    <figcaption className="story__caption">
                        Jack Wilson
                   </figcaption>
                </figure>
                <div className="story__text">
                    <h3 className="heading-tertiary u-margin-bottom-small">WOW! my life is completly different now</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                        ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                        ducimus quam nisi exercitationem omnis earum qui.
                    </p>
                </div>
            </div>
        </div>
        <div className="u-center-text u-margin-bottom-huge">
            <a href="/" className="btn-text">Read all stories &rarr;</a>
        </div>
    </section>
);

export default Stories;