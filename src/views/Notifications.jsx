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
import { Grid, Row, Col, Alert } from "react-bootstrap";
import Card from "components/Card/Card.jsx";

import Button from "components/CustomButton/CustomButton.jsx";
import NotApprovedAssetPagination from "components/TablePagination/NotApprovedAssetPagination";

class Notifications extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
              plain
                title="List Assets Waiting For Approvement"
                category=""
                ctTableFullWidth
                ctTableResponsive
                content={
                  <NotApprovedAssetPagination/>
                }
              />
            </Col>

            {/* <Col md={12}>
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
            </Col> */}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Notifications;