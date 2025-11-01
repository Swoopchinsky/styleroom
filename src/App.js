import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItam from "./components/ShowFullItam";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'panther',
          img: 'panther.jpg',
          desc: 'Масло, холст',
          category: 'oil',
          price: '500000'
        },
        {
          id: 2,
          title: 'lef',
          img: 'lef.jpg',
          desc: 'Масло, холст',
          category: 'oil',
          price: '1000000'
        },
        {
          id: 3,
          title: 'tigr',
          img: 'tigr.jpg',
          desc: 'Масло, холст',
          category: 'oil',
          price: '500000'
        },
        {
          id: 4,
          title: 'luch',
          img: 'luch.jpg',
          desc: 'Масло, холст',
          category: 'oil',
          price: '700000'
        },
        {
          id: 5,
          title: 'ring',
          img: 'ring.jpg',
          desc: 'нержавеющая сталь + янтарь',
          category: 'style',
          price: '1000'
        },
        {
          id: 6,
          title: 'bullet ring',
          img: 'ringbullet.jpg',
          desc: 'нержавеющая сталь + пуля 1920 г.',
          category: 'style',
          price: '50000'
        },
        {
          id: 7,
          title: 'horse',
          img: 'horse.jpg',
          desc: 'масло + холст',
          category: 'oil',
          price: '8000'
        },
        {
          id: 8,
          title: 'path',
          img: 'path.jpg',
          desc: 'бумага + акварель',
          category: 'shik',
          price: '17000'
        },
        {
          id: 9,
          title: 'ship',
          img: 'ship.jpg',
          desc: 'Масло - картон',
          category: 'oil',
          price: '14000'
        },
        {
          id: 10,
          title: 'view',
          img: 'view.jpg',
          desc: 'Масло - картон',
          category: 'oil',
          price: '16500'
        },
        {
          id: 11,
          title: 'shine',
          img: 'shine.jpg',
          desc: 'священный камент',
          category: 'stons',
          price: '30000'
        },
        {
          id: 12,
          title: 'amulet',
          img: 'amulet.jpg',
          desc: 'приносит Удачу',
          category: 'stons',
          price: '6000'
        },
        {
          id: 13,
          title: 'dance',
          img: 'dance.png',
          desc: 'Элегантность линий. 70X99 см',
          category: 'shik',
          price: '53000'
        },
        {
          id: 14,
          title: 'gypsy woman',
          img: 'gypsy woman.png',
          desc: 'Лёгкость движений. 101X149 см',
          category: 'shik',
          price: '20000'
        },
        {
          id: 15,
          title: 'grace',
          img: 'grace.png',
          desc: 'Элегантность форм. 55X126 см',
          category: 'shik',
          price: '140000'
        }

      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="osnova">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullItem && <ShowFullItam onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    )
  }

  onShowItem(item) {
    this.setState({ fullItem: item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
}



export default App;
