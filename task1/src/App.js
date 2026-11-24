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
  Modal,
  Form,
} from "react-bootstrap";

const LIST = [
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
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DATA: [],
      SEARCH_DATA: [], // this state is used when searching a job
      modal: false,
      current: { id: null, title: null, salary: null, experience: null }, // this state is used when editing a job
    };
    this.search = this.search.bind(this);
    this.delete = this.delete.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    this.setState({
      DATA: LIST,
      SEARCH_DATA: LIST,
    });
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

  toggleModal() {
    this.setState((prev) => {
      return {
        ...prev,
        modal: !prev.modal,
      };
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
                        <Button
                          size="sm"
                          style={{ marginRight: 10 }}
                          onClick={() => {
                            this.setState({ current: { ...item, id: index } });
                            this.toggleModal();
                          }}
                        >
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
        {/* //////////////////////////////////////////
        This is modal
         /////////////////////////////////////////*/}
        <Modal
          show={this.state.modal}
          onHide={this.toggleModal}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Job</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.current.title}
                  onChange={(e) => {
                    this.setState((prev) => {
                      console.log(this.state.current);
                      return {
                        current: { ...prev.current, title: e.target.value },
                      };
                    });
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Experience</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.current.experience}
                  onChange={(e) => {
                    this.setState((prev) => {
                      console.log(this.state.current);
                      return {
                        current: {
                          ...prev.current,
                          experience: e.target.value,
                        },
                      };
                    });
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Salary</Form.Label>
                <Form.Control
                  type="number"
                  value={this.state.current.salary}
                  onChange={(e) => {
                    this.setState((prev) => {
                      return {
                        current: { ...prev.current, salary: e.target.value },
                      };
                    });
                  }}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.toggleModal}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                let tempArray = [];

                for (let index = 0; index < this.state.DATA.length; index++) {
                  if (index != this.state.current.id)
                    tempArray.push(this.state.DATA[index]);
                  else
                    tempArray.push({
                      title: this.state.current.title,
                      salary: this.state.current.salary,
                      experience: this.state.current.experience,
                    });
                }
                this.setState({ DATA: tempArray, SEARCH_DATA: tempArray });
                this.toggleModal();
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}

export default App;
