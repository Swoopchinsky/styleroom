import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'panther',
          img: 'panther.png',
          desc: 'Масло, холст',
          category: 'oil',
          price: '500 000'
        },
        {
          id: 2,
          title: 'lef',
          img: 'lef.png',
          desc: 'Масло, холст',
          category: 'oil',
          price: '1 000 000'
        },
        {
          id: 3,
          title: 'tigr',
          img: 'tigr.png',
          desc: 'Масло, холст',
          category: 'oil',
          price: '500 000'
        },
        {
          id: 4,
          title: 'luch',
          img: 'luch.png',
          desc: 'Масло, холст',
          category: 'oil',
          price: '700 000'
        },
        {
          id: 5,
          title: 'ring',
          img: 'ring.png',
          desc: 'не ржавеющая сталь + янтарь',
          category: 'style',
          price: '1 000'
        },
        {
          id: 6,
          title: 'bullet ring',
          img: 'ringbullet.png',
          desc: 'не ржавеющая сталь + пуля 1920 г.',
          category: 'style',
          price: '50 000'
        },
        {
          id: 7,
          title: 'horse',
          img: 'horse.png',
          desc: 'масло + холст',
          category: 'oil',
          price: '8 000'
        },
        {
          id: 8,
          title: 'path',
          img: 'path.png',
          desc: 'бумага + акварель',
          category: 'shik',
          price: '17 000'
        }
      ]
    }
  }
  render() {
    return (
      <div className="osnova">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    )
  }
}

export default App;
