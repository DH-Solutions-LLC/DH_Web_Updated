import { useEffect } from "react";
import dynamic from "next/dynamic";
import Layouts from "@layouts/Layouts";

import { getSortedTeamData } from "@library/team";
import { getSortedServicesData } from "@library/services";

import CountUp from 'react-countup';
import { circleText } from "@common/utilits";

import PageBanner from "@components/PageBanner";
import Team2Section from "@components/sections/Team2"
import PartnersSection from "@components/sections/Partners"
import AwardsSection from "@components/sections/Awards"
import Services4Section from "@components/sections/Services4"

const HistorySlider = dynamic( () => import("@components/sliders/History"), { ssr: false } );
const Testimonial2Slider = dynamic( () => import("@components/sliders/Testimonial2"), { ssr: false } );

const About = (props) => {
  useEffect(() => {
    circleText();
  }, []);

  const clickedVideoButton = (e) => {
    e.preventDefault();

    e.target.parentNode.classList.add('active');
    let videoIframe = e.target.parentNode.querySelector('.js-video-iframe');
    let videoUrl = videoIframe.dataset.src;
    videoIframe.setAttribute('src', videoUrl);
  }

  return (
    <Layouts>
    	<PageBanner pageTitle={"About Us"} pageDesc={"Creative studio at the intersection of art, designand technology."} />
      
      	{/* Onovo About */}
	  	<section className="onovo-section gap-top-140 gap-bottom-140">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">

						{/* Heading */}
						<div className="onovo-heading gap-bottom-60">
							<div className="onovo-subtitle-1">
								<span> Welcome to DH Solutions </span>
							</div>
							<h2 className="onovo-title-2">
								<span> We are transforming, <br/>ideas into innovation </span>
							</h2>
							<div className="onovo-text">
								<p>From the moment our company was founded, we have helped our clients find <strong>exceptional solutions for their businesses</strong>, creating memorable brands and digital products. Our expertise grows with each year, and our accumulated experience. </p>
							</div>
						</div>

					</div>
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 offset-lg-1 hide-on-mobile">

						{/* Image */}
						<img src="/images/onovo-about-logo.png" alt="" />

					</div>
				</div>

				{/* Numbers items */}
				<div className="row gap-row gap-bottom-100">

					{/*number-item*/}
					<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
						<div className="onovo-counter">
							<div className="num onovo-text-white js-counter" data-end-value="23">
								<CountUp end="77" duration={7} enableScrollSpy={true} scrollSpyOnce={true} />
							</div>
							<div className="num-after onovo-text-white"> + </div>
							<div className="label"> Team members </div>
						</div>
					</div>

					{/*number-item*/}
					<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
						<div className="onovo-counter">
							<div className="num onovo-text-white js-counter" data-end-value="99">
								<CountUp end="1500" duration={7} enableScrollSpy={true} scrollSpyOnce={true} />
							</div>
							<div className="num-after onovo-text-white"> + </div>
							<div className="label"> Completed projects </div>
						</div>
					</div>

					{/*number-item*/}
					<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
						<div className="onovo-counter">
							<div className="num onovo-text-white js-counter" data-end-value="12">
								<CountUp end="22" duration={7} enableScrollSpy={true} scrollSpyOnce={true} />
							</div>
							<div className="num-after onovo-text-white"> M </div>
							<div className="label"> Lines of code </div>
						</div>
					</div>

				</div>

				{/* Video */}
				<div className="onovo-video" data-onovo-overlay data-onovo-scroll>
					<div className="image" onClick={ (e) => clickedVideoButton(e) } style={{"backgroundImage": "url(/images/calltoaction.jpg)"}} />
					<iframe className="js-video-iframe" data-src="https://www.youtube.com/embed/pAXMjPXCrms?showinfo=0&rel=0&autoplay=1"></iframe>
					<div className="play onovo-circle-text" onClick={ (e) => clickedVideoButton(e) }>
						<div className="arrow" />
						<div className="label onovo-text-black onovo-circle-text-label"> Play Video - Play Video - Play Video - </div>
					</div>
				</div>

				{/* Description */}
				<div className="row gap-top-100">
					<div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
						<h5 className="text-uppercase">Our Mission</h5>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">
					At DH Solutions, we strive to empower businesses with innovative digital solutions tailored to their unique needs, leveraging cutting-edge technologies and industry expertise to drive growth and success.
					</div>
				</div>

				{/* Description */}
				<div className="row gap-top-60">
					<div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
						<h5 className="text-uppercase">Our Goal</h5>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">
					Our goal is to exceed client expectations by delivering high-quality, results-driven solutions that address challenges, unlock opportunities, and drive lasting success in the digital age.
					</div>
				</div>

				{/* Description */}
				<div className="row gap-top-60">
					<div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
						<h5 className="text-uppercase">Our Values</h5>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">

						<ol><stong>1-Excellence</stong></ol>
						<ol><stong>2-Innovation</stong></ol>
						<ol><stong>3-Integrity</stong></ol>
					</div>
				</div>

				{/* Gallery */}
				<div className="row gap-top-100">
					<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
						<a href="/images/posts1.jpg" className="mfp-image">
							<img src="/images/app-banner.png" alt="" />
						</a>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 gap-top-60">
						<a href="/images/posts2.jpg" className="mfp-image">
							<img src="/images/cyber-banner.png" alt="" />
						</a>
					</div>
				</div>

			</div>
		</section>

		<Services4Section services={props.services} />

		<AwardsSection />

      	<HistorySlider />

      	<Team2Section team={props.team} />

      	<Testimonial2Slider />

      	<PartnersSection />
      
    </Layouts>
  );
};
export default About;

export async function getStaticProps() {
  const allTeam = getSortedTeamData();
  const allServices = getSortedServicesData();

  return {
    props: {
      team: allTeam,
	  services: allServices
    }
  }
}