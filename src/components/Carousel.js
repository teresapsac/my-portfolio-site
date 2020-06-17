import React from 'react';
import Card from "../components/Card";
import codingimage from "../../src/assets/images/coding-on-laptop.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Projects",
          subtitle: "My Projects as a learning Junior Developer",
          imgSrc: codingimage,
          link: "https://github.com/teresapsac",
          selected: false,
        },
        {
          id: 1,
          title: "Me",
          subtitle: "Fun facts about me",
          imgSrc: codingimage,
          link: "https://github.com/teresapsac",
          selected: false,
        },
        {
          id: 2,
          title: "Marketing Skills",
          subtitle: "My marketing skills too",
          imgSrc: codingimage,
          link: "https://github.com/teresapsac",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
}

    makeItems = (items) => {
      return items.map((item) => {
        return (
          <Card
            item={item}
            click={(e) => this.handleCardClick(item.id, e)}
            key={item.id}
          />
        )
      });
    };
  

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel