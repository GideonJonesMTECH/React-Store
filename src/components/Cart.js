import {Component} from 'react';
import { CartItem } from './CartItem';

export class Cart extends Component{
    render(){
        return(
            <div>
                <h1>This is the Cart Page. Give me your money</h1>
                <CartItem 
                    id={0}
                    title={"DummyProduct"}
                    img={
                      "https://columbusrealestatecoach.com/wp-content/uploads/2017/11/crash-test-dummy.jpg"
                    }
                    price={10000.99}
                    rating={0}
                    category={"refrigerator"}
                    description={"It's a dummy"}
                />
            </div>
        )
    }

}