/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import {
 
  optionsSales,
  responsiveSales,
  legendSales,
 
} from "variables/Variables.jsx";
import { getUsers,getProviders,getAssets,getReviews } from '../api';
import { connect } from 'react-redux';
import moment from 'moment';
import { createBrowserHistory, createHashHistory } from "history";

const history = createHashHistory()
class Dashboard extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }

  ratings(list){
    var rating = []
    for(var i=0;i<list.length;i++){
      rating.push(Number(list[i].rating))
    }
    return rating
  }

  ratingTime(list){
    
    var ratingDate=[]
    for(var i=0;i<list.length;i++){
      let date = moment(list[i].created_at).format('YYYY-MM-DD');
      ratingDate.push(date)
    } 
    return ratingDate
  }

  constructor(props) {
    super(props);
    this.state={
      // token: sessionStorage.getItem('token')
      dataMyPie: {
        labels: [this.props.listUsers.length, this.props.listProviders.length, this.props.listAssets.length],
        series: [this.props.listUsers.length, this.props.listProviders.length, this.props.listAssets.length]
      },
      legendPie : {
        names: ["users", "providers", "assets"],
        types: ["info", "danger", "warning"]
      }
    }
  }

   
  componentDidMount() {
    var token = sessionStorage.getItem('token')
    
    if (token === null || token === undefined) {
      history.push('/login')
      history.go(0)
      console.log('masuk dashboard')
		} else {
			// this.setState({...this.state,isLoggedIn:true});
      this.props.getUsers();
      this.props.getProviders()
      this.props.getAssets()
      this.props.getReviews()
		}
    
  }
  
  render() {
    
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-users text-info" />}
                statsText="Total Users"
                statsValue={this.props.listUsers.length}
                // statsIcon={<i className="fa fa-refresh" />}
                // statsIconText="Updated now"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-wallet text-danger" />}
                statsText="Total Providers"
                statsValue={this.props.listProviders.length}
                // statsIcon={<i className="fa fa-calendar-o" />}
                // statsIconText="Last day"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-map-2 text-warning" />}
                statsText="Total Assets"
                statsValue={this.props.listAssets.length}
                // statsIcon={<i className="fa fa-clock-o" />}
                // statsIconText="In the last hour"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-star text-success" />}
                statsText="Total Reviews"
                statsValue={this.props.listReviews.length}
                // statsIcon={<i className="fa fa-refresh" />}
                // statsIconText="Updated now"
              />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <Card
                id="chartHours"
                title="Users Reviews"
                category=""
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={{labels:
                          this.ratingTime(this.props.listReviews)
                        ,series:[[],[],[],[],this.ratings(this.props.listReviews)]}}
                      type="Line"
                      options={optionsSales}
                      responsiveOptions={responsiveSales}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendSales)}</div>
                }
              />
            </Col>
            <Col md={4}>
              <Card
                title="Statistics"
                category=""
                stats="Total Users, Providers, and Assets"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={{labels:[this.props.listUsers.length, this.props.listProviders.length, this.props.listAssets.length],series:[this.props.listUsers.length, this.props.listProviders.length, this.props.listAssets.length]}} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(this.state.legendPie)}</div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ 
  listUsers: state.userreducer.listUsers,
  listProviders : state.providerreducer.listProviders,
  listAssets : state.assetreducer.listAssets,
  listReviews: state.reviewreducer.listReviews,
  ratings:state.reviewreducer.ratings
});

const mapDispatchToProps = { getUsers,getProviders,getAssets,getReviews };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
