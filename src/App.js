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
          desc: 'Масло, холст 400X500',
          category: 'oil',
          price: '500000'
        },
        {
          id: 2,
          title: 'lef',
          img: 'lef.jpg',
          desc: 'Масло, холст 400X500',
          category: 'oil',
          price: '1000000'
        },
        {
          id: 3,
          title: 'tigr',
          img: 'tigr.jpg',
          desc: 'Масло, холст 400X500',
          category: 'oil',
          price: '500000'
        },
        {
          id: 4,
          title: 'luch',
          img: 'luch.jpg',
          desc: 'Масло, холст 400X300',
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
          desc: 'масло + холст 400X300',
          category: 'oil',
          price: '98000'
        },
        {
          id: 8,
          title: 'path',
          img: 'path.jpg',
          desc: 'бумага + акварель A4',
          category: 'shik',
          price: '17000'
        },
        {
          id: 9,
          title: 'ship',
          img: 'ship.jpg',
          desc: 'Масло - картон 150X100',
          category: 'oil',
          price: '14000'
        },
        {
          id: 10,
          title: 'view',
          img: 'view.jpg',
          desc: 'Масло - картон 150X100',
          category: 'oil',
          price: '16500'
        },
        {
          id: 11,
          title: 'shine',
          img: 'shine.jpg',
          desc: 'священный камент',
          category: 'stons',
          price: '300000'
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
        },
        {
          id: 16,
          title: 'heart 1',
          img: 'heart 1.png',
          desc: 'Источник позитивной энергии',
          category: 'stons',
          price: '8000'
        },
        {
          id: 17,
          title: 'heart 2',
          img: 'heart 2.png',
          desc: 'Крнцентрация и контроль',
          category: 'stons',
          price: '9300'
        },
        {
          id: 18,
          title: 'heart 3',
          img: 'heart 3.png',
          desc: 'Обояние и красота',
          category: 'stons',
          price: '11000'
        },
        {
          id: 19,
          title: 'ring 1',
          img: 'ring 1.png',
          desc: 'Титан + янтарь',
          category: 'style',
          price: '2100'
        },
        {
          id: 20,
          title: 'ring 2',
          img: 'ring 2.png',
          desc: 'Титан + янтарь',
          category: 'style',
          price: '1800'
        },
        {
          id: 21,
          title: 'ring 3',
          img: 'ring 3.png',
          desc: 'Нержавеющая сталь + янтарь',
          category: 'style',
          price: '3200'
        },
        {
          id: 22,
          title: 'ring 4',
          img: 'ring 4.png',
          desc: 'Титан + янтарь',
          category: 'style',
          price: '900'
        },
        {
          id: 23,
          title: 'ring 5',
          img: 'ring 5.png',
          desc: 'Нержавеющая сталь + Осколок Атлантиды',
          category: 'style',
          price: '88000'
        },
        {
          id: 24,
          title: 'ring 6',
          img: 'ring 6.png',
          desc: 'Медь + кварц',
          category: 'style',
          price: '1500'
        },
        {
          id: 25,
          title: 'dama',
          img: 'dama.png',
          desc: 'Картон - масло',
          category: 'shik',
          price: '8000'
        },
        {
          id: 26,
          title: 'Daly',
          img: 'Daly.png',
          desc: 'Холст - масло',
          category: 'oil',
          price: '1200000'
        },
        {
          id: 27,
          title: 'madam',
          img: 'madam.png',
          desc: 'Картое - масло',
          category: 'shik',
          price: '210000'
        },
        {
          id: 28,
          title: 'asteroid',
          img: 'asteroid.png',
          desc: 'Упавшая звезда - аллюминий прошлых эпох',
          category: 'stons',
          price: '2320000'
        },
        {
          id: 29,
          title: 'les',
          img: 'les 6.png',
          desc: 'Холст - масло',
          category: 'oil',
          price: '3000'
        },
        {
          id: 30,
          title: 'kaps',
          img: 'kaps.png',
          desc: 'Картон',
          category: 'style',
          price: '7000'
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
