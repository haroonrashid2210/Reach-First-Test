import React from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Table,
  Button,
  FormControl,
  InputGroup,
} from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DATA: [
        {
          title: "Developer",
          salary: 60000,
          experience: "1 Year",
        },
        {
          title: "Designer",
          salary: 80000,
          experience: "4 Years",
        },
        {
          title: "Tester",
          salary: 40000,
          experience: "2 Years",
        },
        {
          title: "Developer",
          salary: 60000,
          experience: "Fresh",
        },
        {
          title: "Tester",
          salary: 35000,
          experience: "Fresh",
        },
      ],
      SEARCH_DATA: [],
    };
    this.search = this.search.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    this.setState({ SEARCH_DATA: this.state.DATA });
  }

  search(text) {
    let temp = [];
    text = text.toLowerCase();
    this.state.DATA.forEach((element) => {
      if (element.title.toLowerCase().includes(text)) temp.push(element);
    });
    this.setState({ SEARCH_DATA: temp });
  }

  delete(id) {
    let temp = [...this.state.DATA];
    temp.splice(id, 1);
    this.setState({
      SEARCH_DATA: temp,
      DATA: temp,
    });
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col style={{ marginTop: 100 }}>
            <Card>
              <Card.Header>
                <Row>
                  <Col className="d-flex align-items-center">Jobs</Col>
                  <Col className="d-flex justify-content-end">
                    <InputGroup className="w-50 mr-2">
                      <FormControl
                        placeholder="Filter"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={(e) => this.search(e.target.value)}
                      />
                    </InputGroup>
                  </Col>
                </Row>
              </Card.Header>
              <Table hover responsive className="myTable mb-0">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Title</th>
                    <th>Experience</th>
                    <th>Salary</th>
                    <th style={{ textAlign: "center" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.SEARCH_DATA.map((item, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.title}</td>
                      <td>{item.experience}</td>
                      <td>{item.salary}</td>
                      <td style={{ textAlign: "center" }}>
                        <Button size="sm" style={{ marginRight: 10 }}>
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="danger"
                          onClick={() => this.delete(index)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
