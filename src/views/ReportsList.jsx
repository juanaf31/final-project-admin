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
import { Grid, Row, Col } from "react-bootstrap";
import { getUsers,getProviders,getAssets,getReviews } from '../api';
import Card from "components/Card/Card.jsx";
import ReviewPagination from "components/TablePagination/ReviewPagination"
import { connect } from 'react-redux';
import Datepicker from '../components/DatePicker/DatePicker'
import ReportPagination from "components/TablePagination/ReportPagination";

class ReportList extends Component {
  constructor(props) {
    super(props);
    this.state={
      clicked:false
    }
  }
  
  click(){
    this.setState({
      clicked:!this.state.clicked
    })
  }
  
  componentDidMount(){
    // this.props.getUsers();
    // this.props.getProviders()
    // this.props.getAssets()
    // this.props.getReviews()
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
          <Datepicker/>
            {/* <Col md={12}>
              <Card
                plain
                title="Report List"
                category=""
                ctTableFullWidth
                ctTableResponsive
                content={
                  <div>              
                    
                    <ReportPagination/>
                  </div>
                }
              />
            </Col> */}


          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ listUsers: state.listUsers,listProviders:state.listProviders,listAssets:state.listAssets,listReviews:state.listReviews });

const mapDispatchToProps = { getUsers,getProviders,getAssets,getReviews };

export default connect(mapStateToProps, mapDispatchToProps)(ReportList);