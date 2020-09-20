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

import Card from "components/Card/Card.jsx";
import { getUsers,getProviders,getAssets,getReviews } from '../api';
import { connect } from 'react-redux';
import UserPagination from "components/TablePagination/UserPagination";
import ProviderPagination from "components/TablePagination/ProviderPagination";
import AssetPagination from "components/TablePagination/AssetPagination";
import ReviewPagination from "components/TablePagination/ReviewPagination"
import { createBrowserHistory, createHashHistory } from "history";

const history = createHashHistory()

class TableList extends Component {
  componentDidMount(){
    var token = sessionStorage.getItem('token')
    
    if (token === null || token === undefined) {
      history.push('/login')
      history.go(0)
      console.log('masuk dashboard')
    }
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
              plain
                title="List Of Users"
                category=""
                ctTableFullWidth
                ctTableResponsive
                content={
                  <UserPagination/>
                }
              />
            </Col>

            <Col md={12}>
              <Card
                plain
                title="List Of Providers"
                category=""
                ctTableFullWidth
                ctTableResponsive
                content={
                  <ProviderPagination/>
                }
              />
            </Col>
            <Col md={12}>
              <Card
                plain
                title="List Of Assets"
                category=""
                ctTableFullWidth
                ctTableResponsive
                content={
                  <AssetPagination/>
                }
              />
            </Col>
            <Col md={12}>
              <Card
                plain
                title="List Of Reviews"
                category=""
                ctTableFullWidth
                ctTableResponsive
                content={
                  <ReviewPagination/>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ listUsers: state.listUsers,listProviders:state.listProviders,listAssets:state.listAssets,listReviews:state.listReviews });

const mapDispatchToProps = { getUsers,getProviders,getAssets,getReviews };

export default connect(mapStateToProps, mapDispatchToProps)(TableList);
