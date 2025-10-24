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
          img: 'panther.png',
          desc: 'Масло, холст',
          category: 'oil',
          price: '500000'
        },
        {
          id: 2,
          title: 'lef',
          img: 'lef.png',
          desc: 'Масло, холст',
          category: 'oil',
          price: '1000000'
        },
        {
          id: 3,
          title: 'tigr',
          img: 'tigr.png',
          desc: 'Масло, холст',
          category: 'oil',
          price: '500000'
        },
        {
          id: 4,
          title: 'luch',
          img: 'luch.png',
          desc: 'Масло, холст',
          category: 'oil',
          price: '700000'
        },
        {
          id: 5,
          title: 'ring',
          img: 'ring.png',
          desc: 'нержавеющая сталь + янтарь',
          category: 'stons',
          price: '1000'
        },
        {
          id: 6,
          title: 'bullet ring',
          img: 'ringbullet.png',
          desc: 'нержавеющая сталь + пуля 1920 г.',
          category: 'style',
          price: '50000'
        },
        {
          id: 7,
          title: 'horse',
          img: 'horse.png',
          desc: 'масло + холст',
          category: 'oil',
          price: '8000'
        },
        {
          id: 8,
          title: 'path',
          img: 'path.png',
          desc: 'бумага + акварель',
          category: 'shik',
          price: '17000'
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
