
import  "../css/products.css"
import Badge from 'react-bootstrap/Badge';


function ProductTile (props) {

    return (
                    <div className="product-Tile">
                        
                        <div style={{position:"relative"}}>
                        <Badge style={{position:"absolute", top:"10px", right:"10px"}} >
                            {props.data.rating.rate}
                        </Badge>
                            <img src={props.data.image} alt="" />

                        </div>
                     {/* </div><div className="product-Details"> */}
                        <p className="prodcut-name">
                            {props.data.title}
                            
                        </p>
                        <div>

                            <p className="prodcut-price">
                                {`$${props.data.price}`}
                            </p>
                            <div>
\
                            </div>
                        </div>
                        {/* </div>    */}
                    </div>
    );

}
export default ProductTile;