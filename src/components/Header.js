import React, { useState } from 'react'
import { TiShoppingCart } from "react-icons/ti";
import Order from './Order';

const showOrders = (props) => {
    let summa = 0
    props.orders.forEach(el => summa += Number.parseFloat(el.price))
    return (
        <div>
            {props.orders.map(el => (
                <Order onDelete={props.onDelete} key={el.id} item={el} />
            ))}

            <p className='summa'>Итого: {new Intl.NumberFormat().format(summa)} $ </p>
        </div>
    )
}

const showNothing = () => {
    return (
        <div className='empy'>
            <h2>Добавь товар</h2>
        </div>
    )
}

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)

    let [butInfo, setButInfo] = useState(false)
    let [butNews, setButNews] = useState(false)
    let [butBrain, setButBrain] = useState(false)

    return (
        <header>
            <div>
                <span className='span'>styleroom +79215936324 Игорь Борисович </span>
                <ul className='nav'>
                    <button onClick={() => setButInfo(butInfo = !butInfo)} className={`butInfo ${butInfo && 'active'}`} >Info</button>
                    {butInfo && (
                        <div className='info'>
                            Галерея эксклюзивного творчества.  <br />
                            Санкт-Петербург <br />
                            1. Знай, быстротечно все, что нам дается. Навечно только слово остается. <br />
                            2. Пректрасно, когда мы можем сами собой управлять. <br />
                            3. Нет успеха без труда. <br />
                            4. Художникам, как и поэтам, издавна право дано Дерзать.  <br />
                            5. Свободная торговля - не принцип, средство для достижения цели. <br />
                            6. Лёгкое сердце живет долго.


                        </div>
                    )}

                    <button onClick={() => setButNews(butNews = !butNews)} className={`butNews ${butNews && 'active'}`} >News</button>
                    {butNews && (
                        <div className='news'>
                            1.
                            -Так! Я не понял, Циля, почему моя бутылка коньяка наполовину пуста?! <br />
                            -Потому что ты, Сёма, пессимист! <br />
                            2.
                            -Додик, шо там упало на кухне?! <br />
                            -Ривочка, это не бунт, это случайно.<br />
                            3.
                            Письмо из Тель-Авива в Одессу: "Сынок, высылаем тебе 20 долларов, как ты и просил...
                            Но хотим напомнить, что 20 долларов пишется не с тремя нолями, а с одним!" <br />
                            Хорошего Вам Настоения!

                        </div>
                    )}
                    <button onClick={() => setButBrain(butBrain = !butBrain)} className={`butBrain ${butBrain && 'active'}`} >brain</button>
                    {butBrain && (
                        <div className='brain'>
                            Мозг человеческий невероятно сложен.
                            В нем есть такие закоулки, о которых его
                            обладатель даже не подозревает. <br />
                            : <br />
                            В каждой естественной науке заключенно столько истины, сколько в ней есть математики. И.Кант<br />
                            : <br />
                            Не согласен с  математикой. Считаю, что сумма нулей дает грозную цифру. С.Е.Лец <br />
                            : <br />

                        </div>
                    )}

                </ul>

                <TiShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />
                {cartOpen && (
                    <div className='shop-cart'>
                        {props.orders.length > 0 ?
                            showOrders(props) : showNothing()}

                    </div>
                )}
            </div>
            <div className='presentation'></div>
        </header>
    )
}
