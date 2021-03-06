import React, { Component } from "react";
import { Grid, Row, Col, Panel, PageHeader } from "react-bootstrap";
import styles from "./styles.scss";


class Sponsors extends Component {
  constructor() {
    super();
  }

  render() {
    const sponsorsList = {
      tier1: [
      	{
          name: "Microsoft",
          img: "../assets/img/sponsors/sponsors2018/jobfair/petabyte/microsoft.jpeg"
        }
      ],

      tier2: [
        {
          name: "Cloudflare",
          img: "../assets/img/sponsors/sponsors2018/jobfair/gigabyte/cf_placeholder.png"
        },
        {
          name: "Northern Trust",
          img: "../assets/img/sponsors/sponsors2018/jobfair/gigabyte/northern_trust.jpg"
        },
        {
        	name: "Salesforce",
        	img: "../assets/img/sponsors/sponsors2018/jobfair/gigabyte/sf_placeholder.png"
        },
        {
        	name: "Braintree",
        	img: "../assets/img/sponsors/sponsors2018/jobfair/gigabyte/braintree.png"
        }
      ],

      tier3: [
        {
          name: "Google",
          img: "../assets/img/sponsors/sponsors2018/jobfair/megabyte/google.png"
        },
        {
          name: "Amobee",
          img: "../assets/img/sponsors/sponsors2018/jobfair/megabyte/amobee_full.jpeg"
        },
        {
          name: "Sandia National Laboratories",
          img: "../assets/img/sponsors/sponsors2018/jobfair/megabyte/sandia.png"
        },
        {
        	name: "PricewaterhouseCoopers",
        	img: "../assets/img/sponsors/sponsors2018/jobfair/megabyte/pwc.jpg"
        },
        {
        	name: "Granular",
        	img: "../assets/img/sponsors/sponsors2018/jobfair/megabyte/granular.svg"
        },
        {
        	name: "MongoDB",
        	img: "../assets/img/sponsors/sponsors2018/jobfair/megabyte/mongodb_full.png"
        },

        // startups

        {
          name: "DeepScale",
          img: "../assets/img/sponsors/sponsors2018/startup/ds_placeholder.png"
        },
        {
          name: "Flexport",
          img: "../assets/img/sponsors/sponsors2018/startup/fp_placeholder.png"
        },
        {
          name: "Ocient",
          img: "../assets/img/sponsors/sponsors2018/startup/ocient_full.png"
        },
        {
          name: "Polsky Center",
          img: "../assets/img/sponsors/sponsors2018/startup/pc_placeholder.png"
        },
        {
          name: "Reconstruct",
          img: "../assets/img/sponsors/sponsors2018/startup/reconstruct_full.jpg"
        },
        {
          name: "Sentry",
          img: "../assets/img/sponsors/sponsors2018/startup/sentry.png"
        }
      ]
    };

    const tier1Sponsors = sponsorsList.tier1.map((sponsor, idx) => {
      return (
        <Col key={idx} xs={12} lg={12} sm={6} md={6} className="Sponsors__centeredCard">
          <Panel className="Sponsors__card Sponsors__card--tier1">
            <img className="Sponsors__cardLogo" src={sponsor.img} alt={sponsor.name} title={sponsor.name}/>
          </Panel>{" "}
        </Col>
      );
    });

    const tier2Sponsors = sponsorsList.tier2.map((sponsor, idx) => {
      return (
        <Col key={idx} xs={6} sm={6} md={6} className="Sponsors__centeredCard">
          <Panel className="Sponsors__card Sponsors__card--tier2">
            <img className="Sponsors__cardLogo" src={sponsor.img} alt={sponsor.name} title={sponsor.name}/>
          </Panel>{" "}
        </Col>
      );
    });

    const tier3Sponsors = sponsorsList.tier3.map((sponsor, idx) => {
      return (
        <Col key={idx} xs={6} sm={3} md={3} className="Sponsors__centeredCard">
          <Panel className="Sponsors__card Sponsors__card--tier3">
            <img className="Sponsors__cardLogo" src={sponsor.img} alt={sponsor.name} title={sponsor.name}/>
          </Panel>
        </Col>
      );
    });

    return (
      <div className="Sponsors" id="Sponsors">
        <PageHeader className="Sponsors__header"> <h1>Sponsors</h1> </PageHeader>{" "}
        <div className="Sponsors__back">
          <Grid>
            <Row className="Sponsors__centerContent"> {tier1Sponsors} </Row>
            <Row className="Sponsors__centerContent"> {tier2Sponsors} </Row>
            <Row> {tier3Sponsors} </Row>
          </Grid>{" "}
        </div>
      </div>
    );
  }
}

export default Sponsors;
