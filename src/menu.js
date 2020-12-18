import React from 'react';
import $ from 'jquery';
import { Table } from 'reactstrap';
import './table.css'
class Menu extends React.Component {
    render() {

        return (
            <div className="container">
                <div className="jumbotron">
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr> <th><input id="myInput" type="text" placeholder="Search..." /></th></tr>
                            <tr>

                                <th>Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody id="myTable">
                            <tr>

                                <td>Thall</td>
                                <td>50</td>

                            </tr>
                            <tr>
                                <td>Biriyani</td>
                                <td>100</td>

                            </tr>
                            <tr>
                                <td>Rice</td>
                                <td>150</td>
                            </tr>
                            <tr>
                                <td>Naan</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>Noodles</td>
                                <td>50</td>
                            </tr>
                            <tr>
                                <td>Soop</td>
                                <td>150</td>
                            </tr>
                            <tr>
                                <td>Salad</td>
                                <td>150</td>
                            </tr>
                            <tr>
                                <td>Grill Chicken</td>
                                <td>200</td>
                            </tr>
                            <tr>
                                <td>Alfaham</td>
                                <td>80</td>
                            </tr>
                            <tr>
                                <td>Shawarma</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <td>Manthi</td>
                                <td>350</td>
                            </tr>
                            <tr>
                                <td>Juice</td>
                                <td>80</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>

        );
    }
    componentDidMount() {
        $(document).ready(function () {
            $("#myInput").on("keyup", function () {
                var value = $(this).val().toLowerCase();
                $("#myTable tr").filter(function () {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                });
            });
        });
    }
}
export default Menu;