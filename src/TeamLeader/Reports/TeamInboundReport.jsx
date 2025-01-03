import React from "react";
import { Button, Card, Col, Row, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const TeamInboundReport = () => {
    const navigate = useNavigate();
    const Data_table = [
        {
            name: "Airi Satou",
            position: "Accountant",
            office: "Tokyo",
            age: "33",
            startdate: "2008/11/28",
            salary: "$162,700",
        },
        {
            name: "Angelica Ramos",
            position: "Chief Executive Officer (CEO)",
            office: "London",
            age: "47",
            startdate: "2009/10/09",
            salary: "$1,200,000",
        },
        {
            name: "Ashton Cox",
            position: "Junior Technical Author",
            office: "San Francisco",
            age: "66",
            startdate: "2009/01/12",
            salary: "$86,000",
        },
        {
            name: "Bradley Greer",
            position: "Software Engineer",
            office: "London",
            age: "41",
            startdate: "2012/10/13",
            salary: "$132,000",
        },
        {
            name: "Brenden Wagner",
            position: "Software Engineer",
            office: "San Francisco",
            age: "28",
            startdate: "2011/06/07",
            salary: "$206,850",
        },
        {
            name: "Brielle Williamson",
            position: "Integration Specialist",
            office: "New York",
            age: "61",
            startdate: "2012/12/02",
            salary: "$372,000",
        },
        {
            name: "Bruno Nash",
            position: "Software Engineer",
            office: "London",
            age: "38",
            startdate: "2011/05/03",
            salary: "$163,500",
        },
        {
            name: "Caesar Vance",
            position: "Pre-Sales Support",
            office: "New York",
            age: "21",
            startdate: "2011/12/12",
            salary: "$106,450",
        },
        {
            name: "Cara Stevens",
            position: "Sales Assistant",
            office: "New York",
            age: "46",
            startdate: "2011/12/06",
            salary: "$145,600",
        },
        {
            name: "Cedric Kelly",
            position: "Senior Javascript Developer",
            office: "Edinburgh",
            age: "22",
            startdate: "2012/03/29",
            salary: "$433,060",
        },
    ];
    return (
        <>
            <Card>
                <Card.Header className=" pb-1">
                    <div className="d-flex justify-content-between">
                        <h5 className="mb-0">Inbound Report</h5>
                        <div className=" justify-content-between">
                            <Button variant="primary" className="m-1">
                                CSV
                            </Button>
                            <Button variant="primary" className="m-1">
                                Excel
                            </Button>
                            <Button variant="primary" className="m-1">
                                Copy
                            </Button>
                            <Button variant="primary" className="m-1">
                                Print
                            </Button>
                            <Button variant="primary" className="m-1">
                                Zip
                            </Button>
                        </div>
                    </div>
                </Card.Header>
                <Card.Body className="p-0">
                    <Row>
                        <Col sm="12">
                            <Card>
                                <Card.Body>
                                    <div className="table-responsive border-bottom my-3">
                                        <Table
                                            responsive
                                            striped
                                            id="datatable"
                                            className=""
                                            data-toggle="data-table">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Position</th>
                                                    <th>Office</th>
                                                    <th>Age</th>
                                                    <th>Start date</th>
                                                    <th>Salary</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Data_table.map((item) => (
                                                    <tr key={item.age}>
                                                        <td>{item.name}</td>
                                                        <td>{item.position}</td>
                                                        <td>{item.office}</td>
                                                        <td>{item.age}</td>
                                                        <td>{item.startdate}</td>
                                                        <td>{item.salary}</td>
                                                        
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                        <Row className="align-items-center">
                                            <Col md="6">
                                                <div
                                                    className="dataTables_info"
                                                    id="datatable_info"
                                                    role="status"
                                                    aria-live="polite">
                                                    Showing 1 to 10 of 57 entries
                                                </div>
                                            </Col>
                                            <Col md="6">
                                                <div
                                                    className="dataTables_paginate paging_simple_numbers"
                                                    id="datatable_paginate">
                                                    <ul className="pagination">
                                                        <li
                                                            className="paginate_button page-item previous disabled"
                                                            id="datatable_previous">
                                                            <Link
                                                                to="#"
                                                                aria-controls="datatable"
                                                                aria-disabled="true"
                                                                data-dt-idx="previous"
                                                                tabIndex="0"
                                                                className="page-link">
                                                                Previous
                                                            </Link>
                                                        </li>
                                                        <li className="paginate_button page-item active">
                                                            <Link
                                                                to="#"
                                                                aria-controls="datatable"
                                                                aria-current="page"
                                                                data-dt-idx="0"
                                                                tabIndex="0"
                                                                className="page-link">
                                                                1
                                                            </Link>
                                                        </li>
                                                        <li className="paginate_button page-item ">
                                                            <Link
                                                                to="#"
                                                                aria-controls="datatable"
                                                                data-dt-idx="1"
                                                                tabIndex="0"
                                                                className="page-link">
                                                                2
                                                            </Link>
                                                        </li>
                                                        <li className="paginate_button page-item ">
                                                            <Link
                                                                to="#"
                                                                aria-controls="datatable"
                                                                data-dt-idx="2"
                                                                tabIndex="0"
                                                                className="page-link">
                                                                3
                                                            </Link>
                                                        </li>
                                                        <li className="paginate_button page-item ">
                                                            <Link
                                                                to="#"
                                                                aria-controls="datatable"
                                                                data-dt-idx="3"
                                                                tabIndex="0"
                                                                className="page-link">
                                                                4
                                                            </Link>
                                                        </li>
                                                        <li className="paginate_button page-item ">
                                                            <Link
                                                                to="#"
                                                                aria-controls="datatable"
                                                                data-dt-idx="4"
                                                                tabIndex="0"
                                                                className="page-link">
                                                                5
                                                            </Link>
                                                        </li>
                                                        <li className="paginate_button page-item ">
                                                            <Link
                                                                to="#"
                                                                aria-controls="datatable"
                                                                data-dt-idx="5"
                                                                tabIndex="0"
                                                                className="page-link">
                                                                6
                                                            </Link>
                                                        </li>
                                                        <li
                                                            className="paginate_button page-item next"
                                                            id="datatable_next">
                                                            <Link
                                                                to="#"
                                                                aria-controls="datatable"
                                                                data-dt-idx="next"
                                                                tabIndex="0"
                                                                className="page-link">
                                                                Next
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
};

export default TeamInboundReport;
